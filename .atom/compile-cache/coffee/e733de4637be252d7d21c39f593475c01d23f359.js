(function() {
  var CompositeDisposable, Emitter, Logger, Metrics, os, path, ref, ref1,
    slice = [].slice;

  os = require('os');

  path = require('path');

  ref = require('atom'), CompositeDisposable = ref.CompositeDisposable, Emitter = ref.Emitter;

  ref1 = [], Metrics = ref1[0], Logger = ref1[1];

  window.DEBUG = false;

  module.exports = {
    config: {
      useKite: {
        type: 'boolean',
        "default": true,
        order: 0,
        title: 'Use Kite-powered Completions (macOS & Windows only)',
        description: 'Kite is a machine learning powered autocomplete engine.\nChoosing this option will allow you to get more intelligently ranked\ncompletions and other advanced features in addition to the completions\nprovided by Jedi.'
      },
      showDescriptions: {
        type: 'boolean',
        "default": true,
        order: 1,
        title: 'Show Descriptions',
        description: 'Show doc strings from functions, classes, etc.'
      },
      useSnippets: {
        type: 'string',
        "default": 'none',
        order: 2,
        "enum": ['none', 'all', 'required'],
        title: 'Autocomplete Function Parameters',
        description: 'Automatically complete function arguments after typing\nleft parenthesis character. Use completion key to jump between\narguments. See `autocomplete-python:complete-arguments` command if you\nwant to trigger argument completions manually. See README if it does not\nwork for you.'
      },
      pythonPaths: {
        type: 'string',
        "default": '',
        order: 3,
        title: 'Python Executable Paths',
        description: 'Optional semicolon separated list of paths to python\nexecutables (including executable names), where the first one will take\nhigher priority over the last one. By default autocomplete-python will\nautomatically look for virtual environments inside of your project and\ntry to use them as well as try to find global python executable. If you\nuse this config, automatic lookup will have lowest priority.\nUse `$PROJECT` or `$PROJECT_NAME` substitution for project-specific\npaths to point on executables in virtual environments.\nFor example:\n`/Users/name/.virtualenvs/$PROJECT_NAME/bin/python;$PROJECT/venv/bin/python3;/usr/bin/python`.\nSuch config will fall back on `/usr/bin/python` for projects not presented\nwith same name in `.virtualenvs` and without `venv` folder inside of one\nof project folders.\nIf you are using python3 executable while coding for python2 you will get\npython2 completions for some built-ins.'
      },
      extraPaths: {
        type: 'string',
        "default": '',
        order: 4,
        title: 'Extra Paths For Packages',
        description: 'Semicolon separated list of modules to additionally\ninclude for autocomplete. You can use same substitutions as in\n`Python Executable Paths`.\nNote that it still should be valid python package.\nFor example:\n`$PROJECT/env/lib/python2.7/site-packages`\nor\n`/User/name/.virtualenvs/$PROJECT_NAME/lib/python2.7/site-packages`.\nYou don\'t need to specify extra paths for libraries installed with python\nexecutable you use.'
      },
      caseInsensitiveCompletion: {
        type: 'boolean',
        "default": true,
        order: 5,
        title: 'Case Insensitive Completion',
        description: 'The completion is by default case insensitive.'
      },
      triggerCompletionRegex: {
        type: 'string',
        "default": '([\.\ (]|[a-zA-Z_][a-zA-Z0-9_]*)',
        order: 6,
        title: 'Regex To Trigger Autocompletions',
        description: 'By default completions triggered after words, dots, spaces\nand left parenthesis. You will need to restart your editor after changing\nthis.'
      },
      fuzzyMatcher: {
        type: 'boolean',
        "default": true,
        order: 7,
        title: 'Use Fuzzy Matcher For Completions.',
        description: 'Typing `stdr` will match `stderr`.\nFirst character should always match. Uses additional caching thus\ncompletions should be faster. Note that this setting does not affect\nbuilt-in autocomplete-plus provider.'
      },
      outputProviderErrors: {
        type: 'boolean',
        "default": false,
        order: 8,
        title: 'Output Provider Errors',
        description: 'Select if you would like to see the provider errors when\nthey happen. By default they are hidden. Note that critical errors are\nalways shown.'
      },
      outputDebug: {
        type: 'boolean',
        "default": false,
        order: 9,
        title: 'Output Debug Logs',
        description: 'Select if you would like to see debug information in\ndeveloper tools logs. May slow down your editor.'
      },
      showTooltips: {
        type: 'boolean',
        "default": false,
        order: 10,
        title: 'Show Tooltips with information about the object under the cursor',
        description: 'EXPERIMENTAL FEATURE WHICH IS NOT FINISHED YET.\nFeedback and ideas are welcome on github.'
      },
      suggestionPriority: {
        type: 'integer',
        "default": 3,
        minimum: 0,
        maximum: 99,
        order: 11,
        title: 'Suggestion Priority',
        description: 'You can use this to set the priority for autocomplete-python\nsuggestions. For example, you can use lower value to give higher priority\nfor snippets completions which has priority of 2.'
      },
      enableTouchBar: {
        type: 'boolean',
        "default": false,
        order: 12,
        title: 'Enable Touch Bar support',
        description: 'Proof of concept for now, requires tooltips to be enabled and Atom >=1.19.0.'
      }
    },
    installation: null,
    _handleGrammarChangeEvent: function(grammar) {
      var ref2;
      if ((ref2 = grammar.packageName) === 'language-python' || ref2 === 'MagicPython' || ref2 === 'atom-django') {
        this.provider.load();
        this.emitter.emit('did-load-provider');
        return this.disposables.dispose();
      }
    },
    _loadKite: function() {
      var AccountManager, AtomHelper, NodeClient, StateController, checkKiteInstallation, editorCfg, event, firstInstall, install, longRunning, pluginCfg, ref2;
      firstInstall = localStorage.getItem('autocomplete-python.installed') === null;
      localStorage.setItem('autocomplete-python.installed', true);
      longRunning = require('process').uptime() > 10;
      if (firstInstall && longRunning) {
        event = "installed";
      } else if (firstInstall) {
        event = "upgraded";
      } else {
        event = "restarted";
      }
      ref2 = require('kite-installer'), AccountManager = ref2.AccountManager, AtomHelper = ref2.AtomHelper, Metrics = ref2.Metrics, Logger = ref2.Logger, StateController = ref2.StateController, NodeClient = ref2.NodeClient, install = ref2.install;
      if (atom.config.get('kite.loggingLevel')) {
        Logger.LEVEL = Logger.LEVELS[atom.config.get('kite.loggingLevel').toUpperCase()];
      }
      editorCfg = {
        UUID: localStorage.getItem('metrics.userId'),
        name: 'atom'
      };
      pluginCfg = {
        name: 'autocomplete-python'
      };
      Metrics.Tracker.source = 'autocomplete-python';
      Metrics.enabled = atom.config.get('core.telemetryConsent') === 'limited';
      atom.packages.onDidActivatePackage((function(_this) {
        return function(pkg) {
          if (pkg.name === 'kite') {
            return _this.patchKiteCompletions(pkg);
          }
        };
      })(this));
      checkKiteInstallation = (function(_this) {
        return function() {
          if (!atom.config.get('autocomplete-python.useKite')) {
            return;
          }
          if (atom.config.get('autocomplete-python.useKite')) {
            return StateController.canInstallKite().then(function() {
              var Install, initialClient, installed, installer;
              Install = install.Install;
              installer = new Install(install.atom().autocompletePythonFlow(), {
                path: atom.project.getPaths()[0] || os.homedir()
              }, {
                failureStep: 'termination',
                title: 'Upgrade your autocomplete-python engine'
              });
              initialClient = AccountManager.client;
              AccountManager.client = new NodeClient('alpha.kite.com', -1, '', true);
              atom.workspace.getActivePane().addItem(installer);
              atom.workspace.getActivePane().activateItem(installer);
              installed = false;
              installer.onDidDestroy(function() {
                atom.config.set('autocomplete-python.useKite', installed);
                return AccountManager.client = initialClient;
              });
              installer.onDidUdpdateState(function(state) {
                if (typeof state.install !== 'undefined') {
                  return installed = state.install.done || false;
                }
              });
              installer.on('did-skip-install', function() {
                installed = false;
                return atom.config.set('autocomplete-python.useKite', installed);
              });
              installer.on('not-admin-shown', function() {
                return installed = true;
              });
              installer.on('not-admin-dismissed', function() {
                installed = false;
                return atom.config.set('autocomplete-python.useKite', installed);
              });
              return installer.start();
            }, function(err) {
              if (typeof err !== 'undefined' && err.type === 'denied') {
                return atom.config.set('autocomplete-python.useKite', false);
              }
            });
          }
        };
      })(this);
      checkKiteInstallation();
      return atom.config.onDidChange('autocomplete-python.useKite', function(arg) {
        var newValue, oldValue;
        newValue = arg.newValue, oldValue = arg.oldValue;
        if (newValue) {
          checkKiteInstallation();
          return AtomHelper.enablePackage();
        } else {
          return AtomHelper.disablePackage();
        }
      });
    },
    load: function() {
      var disposable;
      this.disposables = new CompositeDisposable;
      disposable = atom.workspace.observeTextEditors((function(_this) {
        return function(editor) {
          _this._handleGrammarChangeEvent(editor.getGrammar());
          disposable = editor.onDidChangeGrammar(function(grammar) {
            return _this._handleGrammarChangeEvent(grammar);
          });
          return _this.disposables.add(disposable);
        };
      })(this));
      this.disposables.add(disposable);
      return this._loadKite();
    },
    activate: function(state) {
      var disposable;
      this.emitter = new Emitter;
      this.provider = require('./provider');
      if (typeof atom.packages.hasActivatedInitialPackages === 'function' && atom.packages.hasActivatedInitialPackages()) {
        return this.load();
      } else {
        return disposable = atom.packages.onDidActivateInitialPackages((function(_this) {
          return function() {
            _this.load();
            return disposable.dispose();
          };
        })(this));
      }
    },
    deactivate: function() {
      if (this.provider) {
        this.provider.dispose();
      }
      if (this.installation) {
        return this.installation.destroy();
      }
    },
    getProvider: function() {
      return this.provider;
    },
    getHyperclickProvider: function() {
      return require('./hyperclick-provider');
    },
    consumeSnippets: function(snippetsManager) {
      var disposable;
      return disposable = this.emitter.on('did-load-provider', (function(_this) {
        return function() {
          _this.provider.setSnippetsManager(snippetsManager);
          return disposable.dispose();
        };
      })(this));
    },
    patchKiteCompletions: function(kite) {
      var getSuggestions;
      if (this.kitePackage != null) {
        return;
      }
      this.kitePackage = kite.mainModule;
      this.kiteProvider = this.kitePackage.completions();
      getSuggestions = this.kiteProvider.getSuggestions;
      return this.kiteProvider.getSuggestions = (function(_this) {
        return function() {
          var args, ref2, ref3;
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return getSuggestions != null ? (ref2 = getSuggestions.apply(_this.kiteProvider, args)) != null ? (ref3 = ref2.then(function(suggestions) {
            _this.lastKiteSuggestions = suggestions;
            _this.kiteSuggested = suggestions != null;
            return suggestions;
          })) != null ? ref3["catch"](function(err) {
            _this.lastKiteSuggestions = [];
            _this.kiteSuggested = false;
            throw err;
          }) : void 0 : void 0 : void 0;
        };
      })(this);
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9hdXRvY29tcGxldGUtcHl0aG9uL2xpYi9tYWluLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUEsa0VBQUE7SUFBQTs7RUFBQSxFQUFBLEdBQUssT0FBQSxDQUFRLElBQVI7O0VBQ0wsSUFBQSxHQUFPLE9BQUEsQ0FBUSxNQUFSOztFQUNQLE1BQWlDLE9BQUEsQ0FBUSxNQUFSLENBQWpDLEVBQUMsNkNBQUQsRUFBc0I7O0VBRXRCLE9BQW9CLEVBQXBCLEVBQUMsaUJBQUQsRUFBVTs7RUFFVixNQUFNLENBQUMsS0FBUCxHQUFlOztFQUNmLE1BQU0sQ0FBQyxPQUFQLEdBQ0U7SUFBQSxNQUFBLEVBQ0U7TUFBQSxPQUFBLEVBQ0U7UUFBQSxJQUFBLEVBQU0sU0FBTjtRQUNBLENBQUEsT0FBQSxDQUFBLEVBQVMsSUFEVDtRQUVBLEtBQUEsRUFBTyxDQUZQO1FBR0EsS0FBQSxFQUFPLHFEQUhQO1FBSUEsV0FBQSxFQUFhLDBOQUpiO09BREY7TUFTQSxnQkFBQSxFQUNFO1FBQUEsSUFBQSxFQUFNLFNBQU47UUFDQSxDQUFBLE9BQUEsQ0FBQSxFQUFTLElBRFQ7UUFFQSxLQUFBLEVBQU8sQ0FGUDtRQUdBLEtBQUEsRUFBTyxtQkFIUDtRQUlBLFdBQUEsRUFBYSxnREFKYjtPQVZGO01BZUEsV0FBQSxFQUNFO1FBQUEsSUFBQSxFQUFNLFFBQU47UUFDQSxDQUFBLE9BQUEsQ0FBQSxFQUFTLE1BRFQ7UUFFQSxLQUFBLEVBQU8sQ0FGUDtRQUdBLENBQUEsSUFBQSxDQUFBLEVBQU0sQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixVQUFoQixDQUhOO1FBSUEsS0FBQSxFQUFPLGtDQUpQO1FBS0EsV0FBQSxFQUFhLHlSQUxiO09BaEJGO01BMEJBLFdBQUEsRUFDRTtRQUFBLElBQUEsRUFBTSxRQUFOO1FBQ0EsQ0FBQSxPQUFBLENBQUEsRUFB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J3BhdGgnXG57Q29tcG9zaXRlRGlzcG9zYWJsZSwgRW1pdHRlcn0gPSByZXF1aXJlICdhdG9tJ1xuXG5bTWV0cmljcywgTG9nZ2VyXSA9IFtdXG5cbndpbmRvdy5ERUJVRyA9IGZhbHNlXG5tb2R1bGUuZXhwb3J0cyA9XG4gIGNvbmZpZzpcbiAgICB1c2VLaXRlOlxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICBvcmRlcjogMFxuICAgICAgdGl0bGU6ICdVc2UgS2l0ZS1wb3dlcmVkIENvbXBsZXRpb25zIChtYWNPUyAmIFdpbmRvd3Mgb25seSknXG4gICAgICBkZXNjcmlwdGlvbjogJycnS2l0ZSBpcyBhIG1hY2hpbmUgbGVhcm5pbmcgcG93ZXJlZCBhdXRvY29tcGxldGUgZW5naW5lLlxuICAgICAgQ2hvb3NpbmcgdGhpcyBvcHRpb24gd2lsbCBhbGxvdyB5b3UgdG8gZ2V0IG1vcmUgaW50ZWxsaWdlbnRseSByYW5rZWRcbiAgICAgIGNvbXBsZXRpb25zIGFuZCBvdGhlciBhZHZhbmNlZCBmZWF0dXJlcyBpbiBhZGRpdGlvbiB0byB0aGUgY29tcGxldGlvbnNcbiAgICAgIHByb3ZpZGVkIGJ5IEplZGkuJycnXG4gICAgc2hvd0Rlc2NyaXB0aW9uczpcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgb3JkZXI6IDFcbiAgICAgIHRpdGxlOiAnU2hvdyBEZXNjcmlwdGlvbnMnXG4gICAgICBkZXNjcmlwdGlvbjogJ1Nob3cgZG9jIHN0cmluZ3MgZnJvbSBmdW5jdGlvbnMsIGNsYXNzZXMsIGV0Yy4nXG4gICAgdXNlU25pcHBldHM6XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgZGVmYXVsdDogJ25vbmUnXG4gICAgICBvcmRlcjogMlxuICAgICAgZW51bTogWydub25lJywgJ2FsbCcsICdyZXF1aXJlZCddXG4gICAgICB0aXRsZTogJ0F1dG9jb21wbGV0ZSBGdW5jdGlvbiBQYXJhbWV0ZXJzJ1xuICAgICAgZGVzY3JpcHRpb246ICcnJ0F1dG9tYXRpY2FsbHkgY29tcGxldGUgZnVuY3Rpb24gYXJndW1lbnRzIGFmdGVyIHR5cGluZ1xuICAgICAgbGVmdCBwYXJlbnRoZXNpcyBjaGFyYWN0ZXIuIFVzZSBjb21wbGV0aW9uIGtleSB0byBqdW1wIGJldHdlZW5cbiAgICAgIGFyZ3VtZW50cy4gU2VlIGBhdXRvY29tcGxldGUtcHl0aG9uOmNvbXBsZXRlLWFyZ3VtZW50c2AgY29tbWFuZCBpZiB5b3VcbiAgICAgIHdhbnQgdG8gdHJpZ2dlciBhcmd1bWVudCBjb21wbGV0aW9ucyBtYW51YWxseS4gU2VlIFJFQURNRSBpZiBpdCBkb2VzIG5vdFxuICAgICAgd29yayBmb3IgeW91LicnJ1xuICAgIHB5dGhvblBhdGhzOlxuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICBvcmRlcjogM1xuICAgICAgdGl0bGU6ICdQeXRob24gRXhlY3V0YWJsZSBQYXRocydcbiAgICAgIGRlc2NyaXB0aW9uOiAnJydPcHRpb25hbCBzZW1pY29sb24gc2VwYXJhdGVkIGxpc3Qgb2YgcGF0aHMgdG8gcHl0aG9uXG4gICAgICBleGVjdXRhYmxlcyAoaW5jbHVkaW5nIGV4ZWN1dGFibGUgbmFtZXMpLCB3aGVyZSB0aGUgZmlyc3Qgb25lIHdpbGwgdGFrZVxuICAgICAgaGlnaGVyIHByaW9yaXR5IG92ZXIgdGhlIGxhc3Qgb25lLiBCeSBkZWZhdWx0IGF1dG9jb21wbGV0ZS1weXRob24gd2lsbFxuICAgICAgYXV0b21hdGljYWxseSBsb29rIGZvciB2aXJ0dWFsIGVudmlyb25tZW50cyBpbnNpZGUgb2YgeW91ciBwcm9qZWN0IGFuZFxuICAgICAgdHJ5IHRvIHVzZSB0aGVtIGFzIHdlbGwgYXMgdHJ5IHRvIGZpbmQgZ2xvYmFsIHB5dGhvbiBleGVjdXRhYmxlLiBJZiB5b3VcbiAgICAgIHVzZSB0aGlzIGNvbmZpZywgYXV0b21hdGljIGxvb2t1cCB3aWxsIGhhdmUgbG93ZXN0IHByaW9yaXR5LlxuICAgICAgVXNlIGAkUFJPSkVDVGAgb3IgYCRQUk9KRUNUX05BTUVgIHN1YnN0aXR1dGlvbiBmb3IgcHJvamVjdC1zcGVjaWZpY1xuICAgICAgcGF0aHMgdG8gcG9pbnQgb24gZXhlY3V0YWJsZXMgaW4gdmlydHVhbCBlbnZpcm9ubWVudHMuXG4gICAgICBGb3IgZXhhbXBsZTpcbiAgICAgIGAvVXNlcnMvbmFtZS8udmlydHVhbGVudnMvJFBST0pFQ1RfTkFNRS9iaW4vcHl0aG9uOyRQUk9KRUNUL3ZlbnYvYmluL3B5dGhvbjM7L3Vzci9iaW4vcHl0aG9uYC5cbiAgICAgIFN1Y2ggY29uZmlnIHdpbGwgZmFsbCBiYWNrIG9uIGAvdXNyL2Jpbi9weXRob25gIGZvciBwcm9qZWN0cyBub3QgcHJlc2VudGVkXG4gICAgICB3aXRoIHNhbWUgbmFtZSBpbiBgLnZpcnR1YWxlbnZzYCBhbmQgd2l0aG91dCBgdmVudmAgZm9sZGVyIGluc2lkZSBvZiBvbmVcbiAgICAgIG9mIHByb2plY3QgZm9sZGVycy5cbiAgICAgIElmIHlvdSBhcmUgdXNpbmcgcHl0aG9uMyBleGVjdXRhYmxlIHdoaWxlIGNvZGluZyBmb3IgcHl0aG9uMiB5b3Ugd2lsbCBnZXRcbiAgICAgIHB5dGhvbjIgY29tcGxldGlvbnMgZm9yIHNvbWUgYnVpbHQtaW5zLicnJ1xuICAgIGV4dHJhUGF0aHM6XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgZGVmYXVsdDogJydcbiAgICAgIG9yZGVyOiA0XG4gICAgICB0aXRsZTogJ0V4dHJhIFBhdGhzIEZvciBQYWNrYWdlcydcbiAgICAgIGRlc2NyaXB0aW9uOiAnJydTZW1pY29sb24gc2VwYXJhdGVkIGxpc3Qgb2YgbW9kdWxlcyB0byBhZGRpdGlvbmFsbHlcbiAgICAgIGluY2x1ZGUgZm9yIGF1dG9jb21wbGV0ZS4gWW91IGNhbiB1c2Ugc2FtZSBzdWJzdGl0dXRpb25zIGFzIGluXG4gICAgICBgUHl0aG9uIEV4ZWN1dGFibGUgUGF0aHNgLlxuICAgICAgTm90ZSB0aGF0IGl0IHN0aWxsIHNob3VsZCBiZSB2YWxpZCBweXRob24gcGFja2FnZS5cbiAgICAgIEZvciBleGFtcGxlOlxuICAgICAgYCRQUk9KRUNUL2Vudi9saWIvcHl0aG9uMi43L3NpdGUtcGFja2FnZXNgXG4gICAgICBvclxuICAgICAgYC9Vc2VyL25hbWUvLnZpcnR1YWxlbnZzLyRQUk9KRUNUX05BTUUvbGliL3B5dGhvbjIuNy9zaXRlLXBhY2thZ2VzYC5cbiAgICAgIFlvdSBkb24ndCBuZWVkIHRvIHNwZWNpZnkgZXh0cmEgcGF0aHMgZm9yIGxpYnJhcmllcyBpbnN0YWxsZWQgd2l0aCBweXRob25cbiAgICAgIGV4ZWN1dGFibGUgeW91IHVzZS4nJydcbiAgICBjYXNlSW5zZW5zaXRpdmVDb21wbGV0aW9uOlxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICBvcmRlcjogNVxuICAgICAgdGl0bGU6ICdDYXNlIEluc2Vuc2l0aXZlIENvbXBsZXRpb24nXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSBjb21wbGV0aW9uIGlzIGJ5IGRlZmF1bHQgY2FzZSBpbnNlbnNpdGl2ZS4nXG4gICAgdHJpZ2dlckNvbXBsZXRpb25SZWdleDpcbiAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICBkZWZhdWx0OiAnKFtcXC5cXCAoXXxbYS16QS1aX11bYS16QS1aMC05X10qKSdcbiAgICAgIG9yZGVyOiA2XG4gICAgICB0aXRsZTogJ1JlZ2V4IFRvIFRyaWdnZXIgQXV0b2NvbXBsZXRpb25zJ1xuICAgICAgZGVzY3JpcHRpb246ICcnJ0J5IGRlZmF1bHQgY29tcGxldGlvbnMgdHJpZ2dlcmVkIGFmdGVyIHdvcmRzLCBkb3RzLCBzcGFjZXNcbiAgICAgIGFuZCBsZWZ0IHBhcmVudGhlc2lzLiBZb3Ugd2lsbCBuZWVkIHRvIHJlc3RhcnQgeW91ciBlZGl0b3IgYWZ0ZXIgY2hhbmdpbmdcbiAgICAgIHRoaXMuJycnXG4gICAgZnV6enlNYXRjaGVyOlxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICBvcmRlcjogN1xuICAgICAgdGl0bGU6ICdVc2UgRnV6enkgTWF0Y2hlciBGb3IgQ29tcGxldGlvbnMuJ1xuICAgICAgZGVzY3JpcHRpb246ICcnJ1R5cGluZyBgc3RkcmAgd2lsbCBtYXRjaCBgc3RkZXJyYC5cbiAgICAgIEZpcnN0IGNoYXJhY3RlciBzaG91bGQgYWx3YXlzIG1hdGNoLiBVc2VzIGFkZGl0aW9uYWwgY2FjaGluZyB0aHVzXG4gICAgICBjb21wbGV0aW9ucyBzaG91bGQgYmUgZmFzdGVyLiBOb3RlIHRoYXQgdGhpcyBzZXR0aW5nIGRvZXMgbm90IGFmZmVjdFxuICAgICAgYnVpbHQtaW4gYXV0b2NvbXBsZXRlLXBsdXMgcHJvdmlkZXIuJycnXG4gICAgb3V0cHV0UHJvdmlkZXJFcnJvcnM6XG4gICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICBvcmRlcjogOFxuICAgICAgdGl0bGU6ICdPdXRwdXQgUHJvdmlkZXIgRXJyb3JzJ1xuICAgICAgZGVzY3JpcHRpb246ICcnJ1NlbGVjdCBpZiB5b3Ugd291bGQgbGlrZSB0byBzZWUgdGhlIHByb3ZpZGVyIGVycm9ycyB3aGVuXG4gICAgICB0aGV5IGhhcHBlbi4gQnkgZGVmYXVsdCB0aGV5IGFyZSBoaWRkZW4uIE5vdGUgdGhhdCBjcml0aWNhbCBlcnJvcnMgYXJlXG4gICAgICBhbHdheXMgc2hvd24uJycnXG4gICAgb3V0cHV0RGVidWc6XG4gICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICBvcmRlcjogOVxuICAgICAgdGl0bGU6ICdPdXRwdXQgRGVidWcgTG9ncydcbiAgICAgIGRlc2NyaXB0aW9uOiAnJydTZWxlY3QgaWYgeW91IHdvdWxkIGxpa2UgdG8gc2VlIGRlYnVnIGluZm9ybWF0aW9uIGluXG4gICAgICBkZXZlbG9wZXIgdG9vbHMgbG9ncy4gTWF5IHNsb3cgZG93biB5b3VyIGVkaXRvci4nJydcbiAgICBzaG93VG9vbHRpcHM6XG4gICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICBvcmRlcjogMTBcbiAgICAgIHRpdGxlOiAnU2hvdyBUb29sdGlwcyB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHRoZSBvYmplY3QgdW5kZXIgdGhlIGN1cnNvcidcbiAgICAgIGRlc2NyaXB0aW9uOiAnJydFWFBFUklNRU5UQUwgRkVBVFVSRSBXSElDSCBJUyBOT1QgRklOSVNIRUQgWUVULlxuICAgICAgRmVlZGJhY2sgYW5kIGlkZWFzIGFyZSB3ZWxjb21lIG9uIGdpdGh1Yi4nJydcbiAgICBzdWdnZXN0aW9uUHJpb3JpdHk6XG4gICAgICB0eXBlOiAnaW50ZWdlcidcbiAgICAgIGRlZmF1bHQ6IDNcbiAgICAgIG1pbmltdW06IDBcbiAgICAgIG1heGltdW06IDk5XG4gICAgICBvcmRlcjogMTFcbiAgICAgIHRpdGxlOiAnU3VnZ2VzdGlvbiBQcmlvcml0eSdcbiAgICAgIGRlc2NyaXB0aW9uOiAnJydZb3UgY2FuIHVzZSB0aGlzIHRvIHNldCB0aGUgcHJpb3JpdHkgZm9yIGF1dG9jb21wbGV0ZS1weXRob25cbiAgICAgIHN1Z2dlc3Rpb25zLiBGb3IgZXhhbXBsZSwgeW91IGNhbiB1c2UgbG93ZXIgdmFsdWUgdG8gZ2l2ZSBoaWdoZXIgcHJpb3JpdHlcbiAgICAgIGZvciBzbmlwcGV0cyBjb21wbGV0aW9ucyB3aGljaCBoYXMgcHJpb3JpdHkgb2YgMi4nJydcbiAgICBlbmFibGVUb3VjaEJhcjpcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIG9yZGVyOiAxMlxuICAgICAgdGl0bGU6ICdFbmFibGUgVG91Y2ggQmFyIHN1cHBvcnQnXG4gICAgICBkZXNjcmlwdGlvbjogJycnUHJvb2Ygb2YgY29uY2VwdCBmb3Igbm93LCByZXF1aXJlcyB0b29sdGlwcyB0byBiZSBlbmFibGVkIGFuZCBBdG9tID49MS4xOS4wLicnJ1xuXG4gIGluc3RhbGxhdGlvbjogbnVsbFxuXG4gIF9oYW5kbGVHcmFtbWFyQ2hhbmdlRXZlbnQ6IChncmFtbWFyKSAtPlxuICAgICMgdGhpcyBzaG91bGQgYmUgc2FtZSB3aXRoIGFjdGl2YXRpb25Ib29rcyBuYW1lc1xuICAgIGlmIGdyYW1tYXIucGFja2FnZU5hbWUgaW4gWydsYW5ndWFnZS1weXRob24nLCAnTWFnaWNQeXRob24nLCAnYXRvbS1kamFuZ28nXVxuICAgICAgQHByb3ZpZGVyLmxvYWQoKVxuICAgICAgQGVtaXR0ZXIuZW1pdCAnZGlkLWxvYWQtcHJvdmlkZXInXG4gICAgICBAZGlzcG9zYWJsZXMuZGlzcG9zZSgpXG5cbiAgX2xvYWRLaXRlOiAtPlxuICAgIGZpcnN0SW5zdGFsbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRvY29tcGxldGUtcHl0aG9uLmluc3RhbGxlZCcpID09IG51bGxcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0b2NvbXBsZXRlLXB5dGhvbi5pbnN0YWxsZWQnLCB0cnVlKVxuICAgIGxvbmdSdW5uaW5nID0gcmVxdWlyZSgncHJvY2VzcycpLnVwdGltZSgpID4gMTBcbiAgICBpZiBmaXJzdEluc3RhbGwgYW5kIGxvbmdSdW5uaW5nXG4gICAgICBldmVudCA9IFwiaW5zdGFsbGVkXCJcbiAgICBlbHNlIGlmIGZpcnN0SW5zdGFsbFxuICAgICAgZXZlbnQgPSBcInVwZ3JhZGVkXCJcbiAgICBlbHNlXG4gICAgICBldmVudCA9IFwicmVzdGFydGVkXCJcblxuICAgIHtcbiAgICAgIEFjY291bnRNYW5hZ2VyLFxuICAgICAgQXRvbUhlbHBlcixcbiAgICAgIE1ldHJpY3MsXG4gICAgICBMb2dnZXIsXG4gICAgICBTdGF0ZUNvbnRyb2xsZXIsXG4gICAgICBOb2RlQ2xpZW50LFxuICAgICAgaW5zdGFsbFxuICAgIH0gPSByZXF1aXJlICdraXRlLWluc3RhbGxlcidcblxuICAgIGlmIGF0b20uY29uZmlnLmdldCgna2l0ZS5sb2dnaW5nTGV2ZWwnKVxuICAgICAgTG9nZ2VyLkxFVkVMID0gTG9nZ2VyLkxFVkVMU1thdG9tLmNvbmZpZy5nZXQoJ2tpdGUubG9nZ2luZ0xldmVsJykudG9VcHBlckNhc2UoKV1cblxuICAgIGVkaXRvckNmZyA9XG4gICAgICBVVUlEOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWV0cmljcy51c2VySWQnKVxuICAgICAgbmFtZTogJ2F0b20nXG4gICAgcGx1Z2luQ2ZnID1cbiAgICAgIG5hbWU6ICdhdXRvY29tcGxldGUtcHl0aG9uJ1xuXG4gICAgTWV0cmljcy5UcmFja2VyLnNvdXJjZSA9ICdhdXRvY29tcGxldGUtcHl0aG9uJ1xuICAgIE1ldHJpY3MuZW5hYmxlZCA9IGF0b20uY29uZmlnLmdldCgnY29yZS50ZWxlbWV0cnlDb25zZW50JykgaXMgJ2xpbWl0ZWQnXG5cbiAgICBhdG9tLnBhY2thZ2VzLm9uRGlkQWN0aXZhdGVQYWNrYWdlIChwa2cpID0+XG4gICAgICBpZiBwa2cubmFtZSBpcyAna2l0ZSdcbiAgICAgICAgQHBhdGNoS2l0ZUNvbXBsZXRpb25zKHBrZylcblxuICAgIGNoZWNrS2l0ZUluc3RhbGxhdGlvbiA9ICgpID0+XG4gICAgICByZXR1cm4gdW5sZXNzIGF0b20uY29uZmlnLmdldCAnYXV0b2NvbXBsZXRlLXB5dGhvbi51c2VLaXRlJ1xuXG4gICAgICBTdGF0ZUNvbnRyb2xsZXIuY2FuSW5zdGFsbEtpdGUoKS50aGVuKCgpIC0+XG4gICAgICAgIEluc3RhbGwgPSBpbnN0YWxsLkluc3RhbGxcbiAgICAgICAgaW5zdGFsbGVyID0gbmV3IEluc3RhbGwoaW5zdGFsbC5hdG9tKCkuYXV0b2NvbXBsZXRlUHl0aG9uRmxvdygpLCB7XG4gICAgICAgICAgcGF0aDogYXRvbS5wcm9qZWN0LmdldFBhdGhzKClbMF0gfHwgb3MuaG9tZWRpcigpLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgZmFpbHVyZVN0ZXA6ICd0ZXJtaW5hdGlvbicsXG4gICAgICAgICAgdGl0bGU6ICdVcGdyYWRlIHlvdXIgYXV0b2NvbXBsZXRlLXB5dGhvbiBlbmdpbmUnLFxuICAgICAgICB9KVxuXG4gICAgICAgIGluaXRpYWxDbGllbnQgPSBBY2NvdW50TWFuYWdlci5jbGllbnRcbiAgICAgICAgQWNjb3VudE1hbmFnZXIuY2xpZW50ID0gbmV3IE5vZGVDbGllbnQoJ2FscGhhLmtpdGUuY29tJywgLTEsICcnLCB0cnVlKVxuXG4gICAgICAgIGF0b20ud29ya3NwYWNlLmdldEFjdGl2ZVBhbmUoKS5hZGRJdGVtKGluc3RhbGxlcilcbiAgICAgICAgYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlUGFuZSgpLmFjdGl2YXRlSXRlbShpbnN0YWxsZXIpXG5cbiAgICAgICAgaW5zdGFsbGVkID0gZmFsc2VcblxuICAgICAgICBpbnN0YWxsZXIub25EaWREZXN0cm95KC0+XG4gICAgICAgICAgYXRvbS5jb25maWcuc2V0KCdhdXRvY29tcGxldGUtcHl0aG9uLnVzZUtpdGUnLCBpbnN0YWxsZWQpXG4gICAgICAgICAgQWNjb3VudE1hbmFnZXIuY2xpZW50ID0gaW5pdGlhbENsaWVudFxuICAgICAgICApXG5cbiAgICAgICAgaW5zdGFsbGVyLm9uRGlkVWRwZGF0ZVN0YXRlKChzdGF0ZSkgLT5cbiAgICAgICAgICBpZiB0eXBlb2Ygc3RhdGUuaW5zdGFsbCAhPSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgaW5zdGFsbGVkID0gc3RhdGUuaW5zdGFsbC5kb25lIHx8IGZhbHNlXG4gICAgICAgIClcblxuICAgICAgICBpbnN0YWxsZXIub24oJ2RpZC1za2lwLWluc3RhbGwnLCAoKSAtPlxuICAgICAgICAgIGluc3RhbGxlZCA9IGZhbHNlXG4gICAgICAgICAgYXRvbS5jb25maWcuc2V0KCdhdXRvY29tcGxldGUtcHl0aG9uLnVzZUtpdGUnLCBpbnN0YWxsZWQpXG4gICAgICAgIClcblxuICAgICAgICBpbnN0YWxsZXIub24oJ25vdC1hZG1pbi1zaG93bicsICgpIC0+XG4gICAgICAgICAgIyBTaG93IGluc3RhbGxhdGlvbiBhZ2FpbiBpZiB1c2VyIHJlc3RhcnRzIGFzIGFkbWluLiBUaGVyZSBpcyBhXG4gICAgICAgICAgIyBzZXBhcmF0ZSB1c2VyIG9wdGlvbiB0byBleHBsaWNpdGx5IG5vdCBzaG93IHRoaXMgYWdhaW4uXG4gICAgICAgICAgaW5zdGFsbGVkID0gdHJ1ZVxuICAgICAgICApXG5cbiAgICAgICAgaW5zdGFsbGVyLm9uKCdub3QtYWRtaW4tZGlzbWlzc2VkJywgKCkgLT5cbiAgICAgICAgICBpbnN0YWxsZWQgPSBmYWxzZVxuICAgICAgICAgIGF0b20uY29uZmlnLnNldCgnYXV0b2NvbXBsZXRlLXB5dGhvbi51c2VLaXRlJywgaW5zdGFsbGVkKVxuICAgICAgICApXG5cbiAgICAgICAgaW5zdGFsbGVyLnN0YXJ0KClcbiAgICAgICwgKGVycikgPT5cbiAgICAgICAgaWYgdHlwZW9mIGVyciAhPSAndW5kZWZpbmVkJyBhbmQgZXJyLnR5cGUgPT0gJ2RlbmllZCdcbiAgICAgICAgICBhdG9tLmNvbmZpZy5zZXQgJ2F1dG9jb21wbGV0ZS1weXRob24udXNlS2l0ZScsIGZhbHNlXG4gICAgICApIGlmIGF0b20uY29uZmlnLmdldCAnYXV0b2NvbXBsZXRlLXB5dGhvbi51c2VLaXRlJ1xuXG4gICAgY2hlY2tLaXRlSW5zdGFsbGF0aW9uKClcblxuICAgIGF0b20uY29uZmlnLm9uRGlkQ2hhbmdlICdhdXRvY29tcGxldGUtcHl0aG9uLnVzZUtpdGUnLCAoeyBuZXdWYWx1ZSwgb2xkVmFsdWUgfSkgLT5cbiAgICAgIGlmIG5ld1ZhbHVlXG4gICAgICAgIGNoZWNrS2l0ZUluc3RhbGxhdGlvbigpXG4gICAgICAgIEF0b21IZWxwZXIuZW5hYmxlUGFja2FnZSgpXG4gICAgICBlbHNlXG4gICAgICAgIEF0b21IZWxwZXIuZGlzYWJsZVBhY2thZ2UoKVxuXG4gIGxvYWQ6IC0+XG4gICAgQGRpc3Bvc2FibGVzID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGVcbiAgICBkaXNwb3NhYmxlID0gYXRvbS53b3Jrc3BhY2Uub2JzZXJ2ZVRleHRFZGl0b3JzIChlZGl0b3IpID0+XG4gICAgICBAX2hhbmRsZUdyYW1tYXJDaGFuZ2VFdmVudChlZGl0b3IuZ2V0R3JhbW1hcigpKVxuICAgICAgZGlzcG9zYWJsZSA9IGVkaXRvci5vbkRpZENoYW5nZUdyYW1tYXIgKGdyYW1tYXIpID0+XG4gICAgICAgIEBfaGFuZGxlR3JhbW1hckNoYW5nZUV2ZW50KGdyYW1tYXIpXG4gICAgICBAZGlzcG9zYWJsZXMuYWRkIGRpc3Bvc2FibGVcbiAgICBAZGlzcG9zYWJsZXMuYWRkIGRpc3Bvc2FibGVcbiAgICBAX2xvYWRLaXRlKClcblxuICBhY3RpdmF0ZTogKHN0YXRlKSAtPlxuICAgIEBlbWl0dGVyID0gbmV3IEVtaXR0ZXJcbiAgICBAcHJvdmlkZXIgPSByZXF1aXJlKCcuL3Byb3ZpZGVyJylcbiAgICBpZiB0eXBlb2YgYXRvbS5wYWNrYWdlcy5oYXNBY3RpdmF0ZWRJbml0aWFsUGFja2FnZXMgPT0gJ2Z1bmN0aW9uJyBhbmRcbiAgICAgICAgYXRvbS5wYWNrYWdlcy5oYXNBY3RpdmF0ZWRJbml0aWFsUGFja2FnZXMoKVxuICAgICAgQGxvYWQoKVxuICAgIGVsc2VcbiAgICAgIGRpc3Bvc2FibGUgPSBhdG9tLnBhY2thZ2VzLm9uRGlkQWN0aXZhdGVJbml0aWFsUGFja2FnZXMgPT5cbiAgICAgICAgQGxvYWQoKVxuICAgICAgICBkaXNwb3NhYmxlLmRpc3Bvc2UoKVxuXG4gIGRlYWN0aXZhdGU6IC0+XG4gICAgQHByb3ZpZGVyLmRpc3Bvc2UoKSBpZiBAcHJvdmlkZXJcbiAgICBAaW5zdGFsbGF0aW9uLmRlc3Ryb3koKSBpZiBAaW5zdGFsbGF0aW9uXG5cbiAgZ2V0UHJvdmlkZXI6IC0+XG4gICAgcmV0dXJuIEBwcm92aWRlclxuXG4gIGdldEh5cGVyY2xpY2tQcm92aWRlcjogLT5cbiAgICByZXR1cm4gcmVxdWlyZSgnLi9oeXBlcmNsaWNrLXByb3ZpZGVyJylcblxuICBjb25zdW1lU25pcHBldHM6IChzbmlwcGV0c01hbmFnZXIpIC0+XG4gICAgZGlzcG9zYWJsZSA9IEBlbWl0dGVyLm9uICdkaWQtbG9hZC1wcm92aWRlcicsID0+XG4gICAgICBAcHJvdmlkZXIuc2V0U25pcHBldHNNYW5hZ2VyIHNuaXBwZXRzTWFuYWdlclxuICAgICAgZGlzcG9zYWJsZS5kaXNwb3NlKClcblxuICBwYXRjaEtpdGVDb21wbGV0aW9uczogKGtpdGUpIC0+XG4gICAgcmV0dXJuIGlmIEBraXRlUGFja2FnZT9cblxuICAgIEBraXRlUGFja2FnZSA9IGtpdGUubWFpbk1vZHVsZVxuICAgIEBraXRlUHJvdmlkZXIgPSBAa2l0ZVBhY2thZ2UuY29tcGxldGlvbnMoKVxuICAgIGdldFN1Z2dlc3Rpb25zID0gQGtpdGVQcm92aWRlci5nZXRTdWdnZXN0aW9uc1xuICAgIEBraXRlUHJvdmlkZXIuZ2V0U3VnZ2VzdGlvbnMgPSAoYXJncy4uLikgPT5cbiAgICAgIGdldFN1Z2dlc3Rpb25zPy5hcHBseShAa2l0ZVByb3ZpZGVyLCBhcmdzKVxuICAgICAgPy50aGVuIChzdWdnZXN0aW9ucykgPT5cbiAgICAgICAgQGxhc3RLaXRlU3VnZ2VzdGlvbnMgPSBzdWdnZXN0aW9uc1xuICAgICAgICBAa2l0ZVN1Z2dlc3RlZCA9IHN1Z2dlc3Rpb25zP1xuICAgICAgICBzdWdnZXN0aW9uc1xuICAgICAgPy5jYXRjaCAoZXJyKSA9PlxuICAgICAgICBAbGFzdEtpdGVTdWdnZXN0aW9ucyA9IFtdXG4gICAgICAgIEBraXRlU3VnZ2VzdGVkID0gZmFsc2VcbiAgICAgICAgdGhyb3cgZXJyXG4iXX0=
