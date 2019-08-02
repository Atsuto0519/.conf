(function() {
  var AtomRunner, AtomRunnerView, ConfigObserver, fs, p, spawn, url,
    slice = [].slice;

  ConfigObserver = require('atom').ConfigObserver;

  spawn = require('child_process').spawn;

  fs = require('fs');

  url = require('url');

  p = require('path');

  AtomRunnerView = require('./atom-runner-view');

  AtomRunner = (function() {
    function AtomRunner() {}

    AtomRunner.prototype.config = {
      showOutputWindow: {
        title: 'Show Output Pane',
        description: 'Displays the output pane when running commands. Uncheck to hide output.',
        type: 'boolean',
        "default": true,
        order: 1
      },
      paneSplitDirection: {
        title: 'Pane Split Direction',
        description: 'The direction to split when opening the output pane.',
        type: 'string',
        "default": 'Right',
        "enum": ['Right', 'Down', 'Up', 'Left']
      }
    };

    AtomRunner.prototype.cfg = {
      ext: 'runner.extensions',
      scope: 'runner.scopes'
    };

    AtomRunner.prototype.defaultExtensionMap = {
      'spec.coffee': 'mocha',
      'ps1': 'powershell -file',
      '_test.go': 'go test'
    };

    AtomRunner.prototype.defaultScopeMap = {
      coffee: 'coffee',
      js: 'node',
      ruby: 'ruby',
      python: 'python',
      go: 'go run',
      shell: 'bash',
      powershell: 'powershell -noninteractive -noprofile -c -'
    };

    AtomRunner.prototype.timer = null;

    AtomRunner.prototype.extensionMap = null;

    AtomRunner.prototype.scopeMap = null;

    AtomRunner.prototype.splitFuncDefault = 'splitRight';

    AtomRunner.prototype.splitFuncs = {
      Right: 'splitRight',
      Left: 'splitLeft',
      Up: 'splitUp',
      Down: 'splitDown'
    };

    AtomRunner.prototype.debug = function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return console.debug.apply(console, ['[atom-runner]'].concat(slice.call(args)));
    };

    AtomRunner.prototype.initEnv = function() {
      var out, pid, ref, shell;
      if (process.platform === 'darwin') {
        ref = [process.env.SHELL || 'bash', ''], shell = ref[0], out = ref[1];
        this.debug('Importing ENV from', shell);
        pid = spawn(shell, ['--login', '-c', 'env']);
        pid.stdout.on('data', function(chunk) {
          return out += chunk;
        });
        pid.on('error', (function(_this) {
          return function() {
            return _this.debug('Failed to import ENV from', shell);
          };
        })(this));
        pid.on('close', (function(_this) {
          return function() {
            var i, len, line, match, ref1, results;
            ref1 = out.split('\n');
            results = [];
            for (i = 0, len = ref1.length; i < len; i++) {
              line = ref1[i];
              match = line.match(/^(\S+?)=(.+)/);
              if (match) {
                results.push(process.env[match[1]] = match[2]);
              } else {
                results.push(void 0);
              }
            }
            return results;
          };
        })(this));
        return pid.stdin.end();
      }
    };

    AtomRunner.prototype.destroy = function() {
      atom.config.unobserve(this.cfg.ext);
      return atom.config.unobserve(this.cfg.scope);
    };

    AtomRunner.prototype.activate = function() {
      this.initEnv();
      atom.config.setDefaults(this.cfg.ext, this.defaultExtensionMap);
      atom.config.setDefaults(this.cfg.scope, this.defaultScopeMap);
      atom.config.observe(this.cfg.ext, (function(_this) {
        return function() {
          return _this.extensionMap = atom.config.get(_this.cfg.ext);
        };
      })(this));
      atom.config.observe(this.cfg.scope, (function(_this) {
        return function() {
          return _this.scopeMap = atom.config.get(_this.cfg.scope);
        };
      })(this));
      atom.commands.add('atom-workspace', 'run:file', (function(_this) {
        return function() {
          return _this.run(false);
        };
      })(this));
      atom.commands.add('atom-workspace', 'run:selection', (function(_this) {
        return function() {
          return _this.run(true);
        };
      })(this));
      atom.commands.add('atom-workspace', 'run:stop', (function(_this) {
        return function() {
          return _this.stop();
        };
      })(this));
      atom.commands.add('atom-workspace', 'run:close', (function(_this) {
        return function() {
          return _this.stopAndClose();
        };
      })(this));
      return atom.commands.add('.atom-runner', 'run:copy', (function(_this) {
        return function() {
          return atom.clipboard.write(window.getSelection().toString());
        };
      })(this));
    };

    AtomRunner.prototype.run = function(selection) {
      var cmd, dir, dirfunc, editor, pane, panes, path, ref, view;
      editor = atom.workspace.getActiveTextEditor();
      if (editor == null) {
        return;
      }
      path = editor.getPath();
      cmd = this.commandFor(editor, selection);
      if (cmd == null) {
        console.warn("No registered executable for file '" + path + "'");
        return;
      }
      if (atom.config.get('atom-runner.showOutputWindow')) {
        ref = this.runnerView(), pane = ref.pane, view = ref.view;
        if (view == null) {
          view = new AtomRunnerView(editor.getTitle());
          panes = atom.workspace.getPanes();
          dir = atom.config.get('atom-runner.paneSplitDirection');
          dirfunc = this.splitFuncs[dir] || this.splitFuncDefault;
          pane = panes[panes.length - 1][dirfunc](view);
        }
      } else {
        view = {
          mocked: true,
          append: function(text, type) {
            if (type === 'stderr') {
              return console.error(text);
            } else {
              return console.log(text);
            }
          },
          scrollToBottom: function() {},
          clear: function() {},
          footer: function() {}
        };
      }
      if (!view.mocked) {
        view.setTitle(editor.getTitle());
        pane.activateItem(view);
      }
      return this.execute(cmd, editor, view, selection);
    };

    AtomRunner.prototype.stop = function(view) {
      if (this.child) {
        if (view == null) {
          view = this.runnerView().view;
        }
        if (view && (view.isOnDom() != null)) {
          view.append('^C', 'stdin');
        } else {
          this.debug('Killed child', this.child.pid);
        }
        this.child.kill('SIGINT');
        if (this.child.killed) {
          this.child = null;
        }
      }
      if (this.timer) {
        clearInterval(this.timer);
      }
      return this.timer = null;
    };

    AtomRunner.prototype.stopAndClose = function() {
      var pane, ref, view;
      ref = this.runnerView(), pane = ref.pane, view = ref.view;
      if (pane != null) {
        pane.removeItem(view);
      }
      return this.stop(view);
    };

    AtomRunner.prototype.execute = function(cmd, editor, view, selection) {
      var args, currentPid, dir, err, splitCmd, startTime;
      this.stop();
      view.clear();
      args = [];
      if (editor.getPath()) {
        editor.save();
        if (!selection) {
          args.push(editor.getPath());
        }
      }
      splitCmd = cmd.split(/\s+/);
      if (splitCmd.length > 1) {
        cmd = splitCmd[0];
        args = splitCmd.slice(1).concat(args);
      }
      try {
        dir = atom.project.getPaths()[0] || '.';
        try {
          if (!fs.statSync(dir).isDirectory()) {
            throw new Error("Bad dir");
          }
        } catch (error) {
          dir = p.dirname(dir);
        }
        this.child = spawn(cmd, args, {
          cwd: dir
        });
        this.timer = setInterval(((function(_this) {
          return function() {
            return view.appendFooter('.');
          };
        })(this)), 750);
        currentPid = this.child.pid;
        this.child.on('error', (function(_this) {
          return function(err) {
            if (err.message.match(/\bENOENT$/)) {
              view.append('Unable to find command: ' + cmd + '\n', 'stderr');
              view.append('Are you sure PATH is configured correctly?\n\n', 'stderr');
              view.append('ENV PATH: ' + process.env.PATH + '\n\n', 'stderr');
            }
            view.append(err.stack, 'stderr');
            view.scrollToBottom();
            _this.child = null;
            if (_this.timer) {
              return clearInterval(_this.timer);
            }
          };
        })(this));
        this.child.stderr.on('data', (function(_this) {
          return function(data) {
            view.append(data, 'stderr');
            return view.scrollToBottom();
          };
        })(this));
        this.child.stdout.on('data', (function(_this) {
          return function(data) {
            view.append(data, 'stdout');
            return view.scrollToBottom();
          };
        })(this));
        this.child.on('close', (function(_this) {
          return function(code, signal) {
            var time;
            if (_this.child && _this.child.pid === currentPid) {
              time = (new Date - startTime) / 1000;
              view.appendFooter(" Exited with code=" + code + " in " + time + " seconds.");
              view.scrollToBottom();
              if (_this.timer) {
                return clearInterval(_this.timer);
              }
            }
          };
        })(this));
      } catch (error) {
        err = error;
        view.append(err.stack, 'stderr');
        view.scrollToBottom();
        this.stop();
      }
      startTime = new Date;
      try {
        if (selection) {
          this.child.stdin.write(editor.getLastSelection().getText());
        } else if (!editor.getPath()) {
          this.child.stdin.write(editor.getText());
        }
        this.child.stdin.end();
      } catch (error) {}
      return view.footer("Running: " + cmd + " (cwd=" + (editor.getPath()) + " pid=" + this.child.pid + ").");
    };

    AtomRunner.prototype.commandFor = function(editor, selection) {
      var boundary, ext, i, j, len, len1, name, ref, ref1, scope, shebang;
      shebang = this.commandForShebang(editor);
      if (shebang != null) {
        return shebang;
      }
      if (!selection) {
        if (editor.getPath() != null) {
          ref = Object.keys(this.extensionMap).sort(function(a, b) {
            return b.length - a.length;
          });
          for (i = 0, len = ref.length; i < len; i++) {
            ext = ref[i];
            boundary = ext.match(/^\b/) ? '' : '\\b';
            if (editor.getPath().match(boundary + ext + '$')) {
              return this.extensionMap[ext];
            }
          }
        }
      }
      scope = editor.getLastCursor().getScopeDescriptor().scopes[0];
      ref1 = Object.keys(this.scopeMap);
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        name = ref1[j];
        if (scope.match('^source\\.' + name + '\\b')) {
          return this.scopeMap[name];
        }
      }
    };

    AtomRunner.prototype.commandForShebang = function(editor) {
      var match;
      match = editor.lineTextForBufferRow(0).match(/^#!\s*(.+)/);
      return match && match[1];
    };

    AtomRunner.prototype.runnerView = function() {
      var i, j, len, len1, pane, ref, ref1, view;
      ref = atom.workspace.getPanes();
      for (i = 0, len = ref.length; i < len; i++) {
        pane = ref[i];
        ref1 = pane.getItems();
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          view = ref1[j];
          if (view instanceof AtomRunnerView) {
            return {
              pane: pane,
              view: view
            };
          }
        }
      }
      return {
        pane: null,
        view: null
      };
    };

    return AtomRunner;

  })();

  module.exports = new AtomRunner;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9hdG9tLXJ1bm5lci9saWIvYXRvbS1ydW5uZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQSw2REFBQTtJQUFBOztFQUFDLGlCQUFrQixPQUFBLENBQVEsTUFBUjs7RUFFbkIsS0FBQSxHQUFRLE9BQUEsQ0FBUSxlQUFSLENBQXdCLENBQUM7O0VBQ2pDLEVBQUEsR0FBSyxPQUFBLENBQVEsSUFBUjs7RUFDTCxHQUFBLEdBQU0sT0FBQSxDQUFRLEtBQVI7O0VBQ04sQ0FBQSxHQUFJLE9BQUEsQ0FBUSxNQUFSOztFQUVKLGNBQUEsR0FBaUIsT0FBQSxDQUFRLG9CQUFSOztFQUVYOzs7eUJBQ0osTUFBQSxHQUNFO01BQUEsZ0JBQUEsRUFDRTtRQUFBLEtBQUEsRUFBTyxrQkFBUDtRQUNBLFdBQUEsRUFBYSx5RUFEYjtRQUVBLElBQUEsRUFBTSxTQUZOO1FBR0EsQ0FBQSxPQUFBLENBQUEsRUFBUyxJQUhUO1FBSUEsS0FBQSxFQUFPLENBSlA7T0FERjtNQU1BLGtCQUFBLEVBQ0U7UUFBQSxLQUFBLEVBQU8sc0JBQVA7UUFDQSxXQUFBLEVBQWEsc0RBRGI7UUFFQSxJQUFBLEVBQU0sUUFGTjtRQUdBLENBQUEsT0FBQSxDQUFBLEVBQVMsT0FIVDtRQUlBLENBQUEsSUFBQSxDQUFBLEVBQU0sQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixJQUFsQixFQUF3QixNQUF4QixDQUpOO09BUEY7Ozt5QkFhRixHQUFBLEdBQ0U7TUFBQSxHQUFBLEVBQUssbUJBQUw7TUFDQSxLQUFBLEVBQU8sZUFEUDs7O3lCQUdGLG1CQUFBLEdBQ0U7TUFBQSxhQUFBLEVBQWUsT0FBZjtNQUNBLEtBQUEsRUFBTyxrQkFEUDtNQUVBLFVBQUEsRUFBWSxTQUZaOzs7eUJBSUYsZUFBQSxHQUNFO01BQUEsTUFBQSxFQUFRLFFBQVI7TUFDQSxFQUFBLEVBQUks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QUFsQyxDQUFIO0FBQ0UsaUJBQU8sSUFBQyxDQUFBLFFBQVMsQ0FBQSxJQUFBLEVBRG5COztBQURGO0lBaEJVOzt5QkFvQlosaUJBQUEsR0FBbUIsU0FBQyxNQUFEO0FBQ2pCLFVBQUE7TUFBQSxLQUFBLEdBQVEsTUFBTSxDQUFDLG9CQUFQLENBQTRCLENBQTVCLENBQThCLENBQUMsS0FBL0IsQ0FBcUMsWUFBckM7YUFDUixLQUFBLElBQVUsS0FBTSxDQUFBLENBQUE7SUFGQzs7eUJBSW5CLFVBQUEsR0FBWSxTQUFBO0FBQ1YsVUFBQTtBQUFBO0FBQUEsV0FBQSxxQ0FBQTs7QUFDRTtBQUFBLGFBQUEsd0NBQUE7O1VBQ0UsSUFBbUMsSUFBQSxZQUFnQixjQUFuRDtBQUFBLG1CQUFPO2NBQUMsSUFBQSxFQUFNLElBQVA7Y0FBYSxJQUFBLEVBQU0sSUFBbkI7Y0FBUDs7QUFERjtBQURGO2FBR0E7UUFBQyxJQUFBLEVBQU0sSUFBUDtRQUFhLElBQUEsRUFBTSxJQUFuQjs7SUFKVTs7Ozs7O0VBT2QsTUFBTSxDQUFDLE9BQVAsR0FBaUIsSUFBSTtBQXRPckIiLCJzb3VyY2VzQ29udGVudCI6WyJ7Q29uZmlnT2JzZXJ2ZXJ9ID0gcmVxdWlyZSAnYXRvbSdcblxuc3Bhd24gPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuc3Bhd25cbmZzID0gcmVxdWlyZSgnZnMnKVxudXJsID0gcmVxdWlyZSgndXJsJylcbnAgPSByZXF1aXJlKCdwYXRoJylcblxuQXRvbVJ1bm5lclZpZXcgPSByZXF1aXJlICcuL2F0b20tcnVubmVyLXZpZXcnXG5cbmNsYXNzIEF0b21SdW5uZXJcbiAgY29uZmlnOlxuICAgIHNob3dPdXRwdXRXaW5kb3c6XG4gICAgICB0aXRsZTogJ1Nob3cgT3V0cHV0IFBhbmUnXG4gICAgICBkZXNjcmlwdGlvbjogJ0Rpc3BsYXlzIHRoZSBvdXRwdXQgcGFuZSB3aGVuIHJ1bm5pbmcgY29tbWFuZHMuIFVuY2hlY2sgdG8gaGlkZSBvdXRwdXQuJ1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICBvcmRlcjogMVxuICAgIHBhbmVTcGxpdERpcmVjdGlvbjpcbiAgICAgIHRpdGxlOiAnUGFuZSBTcGxpdCBEaXJlY3Rpb24nXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSBkaXJlY3Rpb24gdG8gc3BsaXQgd2hlbiBvcGVuaW5nIHRoZSBvdXRwdXQgcGFuZS4nXG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgZGVmYXVsdDogJ1JpZ2h0J1xuICAgICAgZW51bTogWydSaWdodCcsICdEb3duJywgJ1VwJywgJ0xlZnQnXVxuXG4gIGNmZzpcbiAgICBleHQ6ICdydW5uZXIuZXh0ZW5zaW9ucydcbiAgICBzY29wZTogJ3J1bm5lci5zY29wZXMnXG5cbiAgZGVmYXVsdEV4dGVuc2lvbk1hcDpcbiAgICAnc3BlYy5jb2ZmZWUnOiAnbW9jaGEnXG4gICAgJ3BzMSc6ICdwb3dlcnNoZWxsIC1maWxlJ1xuICAgICdfdGVzdC5nbyc6ICdnbyB0ZXN0J1xuXG4gIGRlZmF1bHRTY29wZU1hcDpcbiAgICBjb2ZmZWU6ICdjb2ZmZWUnXG4gICAganM6ICdub2RlJ1xuICAgIHJ1Ynk6ICdydWJ5J1xuICAgIHB5dGhvbjogJ3B5dGhvbidcbiAgICBnbzogJ2dvIHJ1bidcbiAgICBzaGVsbDogJ2Jhc2gnXG4gICAgcG93ZXJzaGVsbDogJ3Bvd2Vyc2hlbGwgLW5vbmludGVyYWN0aXZlIC1ub3Byb2ZpbGUgLWMgLSdcblxuICB0aW1lcjogbnVsbFxuICBleHRlbnNpb25NYXA6IG51bGxcbiAgc2NvcGVNYXA6IG51bGxcbiAgc3BsaXRGdW5jRGVmYXVsdDogJ3NwbGl0UmlnaHQnXG4gIHNwbGl0RnVuY3M6XG4gICAgUmlnaHQ6ICdzcGxpdFJpZ2h0J1xuICAgIExlZnQ6ICdzcGxpdExlZnQnXG4gICAgVXA6ICdzcGxpdFVwJ1xuICAgIERvd246ICdzcGxpdERvd24nXG5cbiAgZGVidWc6IChhcmdzLi4uKSAtPlxuICAgIGNvbnNvbGUuZGVidWcoJ1thdG9tLXJ1bm5lcl0nLCBhcmdzLi4uKVxuXG4gIGluaXRFbnY6IC0+XG4gICAgaWYgcHJvY2Vzcy5wbGF0Zm9ybSA9PSAnZGFyd2luJ1xuICAgICAgW3NoZWxsLCBvdXRdID0gW3Byb2Nlc3MuZW52LlNIRUxMIHx8ICdiYXNoJywgJyddXG4gICAgICBAZGVidWcoJ0ltcG9ydGluZyBFTlYgZnJvbScsIHNoZWxsKVxuICAgICAgcGlkID0gc3Bhd24oc2hlbGwsIFsnLS1sb2dpbicsICctYycsICdlbnYnXSlcbiAgICAgIHBpZC5zdGRvdXQub24gJ2RhdGEnLCAoY2h1bmspIC0+IG91dCArPSBjaHVua1xuICAgICAgcGlkLm9uICdlcnJvcicsID0+XG4gICAgICAgIEBkZWJ1ZygnRmFpbGVkIHRvIGltcG9ydCBFTlYgZnJvbScsIHNoZWxsKVxuICAgICAgcGlkLm9uICdjbG9zZScsID0+XG4gICAgICAgIGZvciBsaW5lIGluIG91dC5zcGxpdCgnXFxuJylcbiAgICAgICAgICBtYXRjaCA9IGxpbmUubWF0Y2goL14oXFxTKz8pPSguKykvKVxuICAgICAgICAgIHByb2Nlc3MuZW52W21hdGNoWzFdXSA9IG1hdGNoWzJdIGlmIG1hdGNoXG4gICAgICBwaWQuc3RkaW4uZW5kKClcblxuICBkZXN0cm95OiAtPlxuICAgIGF0b20uY29uZmlnLnVub2JzZXJ2ZSBAY2ZnLmV4dFxuICAgIGF0b20uY29uZmlnLnVub2JzZXJ2ZSBAY2ZnLnNjb3BlXG5cbiAgYWN0aXZhdGU6IC0+XG4gICAgQGluaXRFbnYoKVxuICAgIGF0b20uY29uZmlnLnNldERlZmF1bHRzIEBjZmcuZXh0LCBAZGVmYXVsdEV4dGVuc2lvbk1hcFxuICAgIGF0b20uY29uZmlnLnNldERlZmF1bHRzIEBjZmcuc2NvcGUsIEBkZWZhdWx0U2NvcGVNYXBcbiAgICBhdG9tLmNvbmZpZy5vYnNlcnZlIEBjZmcuZXh0LCA9PlxuICAgICAgQGV4dGVuc2lvbk1hcCA9IGF0b20uY29uZmlnLmdldChAY2ZnLmV4dClcbiAgICBhdG9tLmNvbmZpZy5vYnNlcnZlIEBjZmcuc2NvcGUsID0+XG4gICAgICBAc2NvcGVNYXAgPSBhdG9tLmNvbmZpZy5nZXQoQGNmZy5zY29wZSlcbiAgICBhdG9tLmNvbW1hbmRzLmFkZCAnYXRvbS13b3Jrc3BhY2UnLCAncnVuOmZpbGUnLCA9PiBAcnVuKGZhbHNlKVxuICAgIGF0b20uY29tbWFuZHMuYWRkICdhdG9tLXdvcmtzcGFjZScsICdydW46c2VsZWN0aW9uJywgPT4gQHJ1bih0cnVlKVxuICAgIGF0b20uY29tbWFuZHMuYWRkICdhdG9tLXdvcmtzcGFjZScsICdydW46c3RvcCcsID0+IEBzdG9wKClcbiAgICBhdG9tLmNvbW1hbmRzLmFkZCAnYXRvbS13b3Jrc3BhY2UnLCAncnVuOmNsb3NlJywgPT4gQHN0b3BBbmRDbG9zZSgpXG4gICAgYXRvbS5jb21tYW5kcy5hZGQgJy5hdG9tLXJ1bm5lcicsICdydW46Y29weScsID0+XG4gICAgICBhdG9tLmNsaXBib2FyZC53cml0ZSh3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKSlcblxuICBydW46IChzZWxlY3Rpb24pIC0+XG4gICAgZWRpdG9yID0gYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlVGV4dEVkaXRvcigpXG4gICAgcmV0dXJuIHVubGVzcyBlZGl0b3I/XG5cbiAgICBwYXRoID0gZWRpdG9yLmdldFBhdGgoKVxuICAgIGNtZCA9IEBjb21tYW5kRm9yKGVkaXRvciwgc2VsZWN0aW9uKVxuICAgIHVubGVzcyBjbWQ/XG4gICAgICBjb25zb2xlLndhcm4oXCJObyByZWdpc3RlcmVkIGV4ZWN1dGFibGUgZm9yIGZpbGUgJyN7cGF0aH0nXCIpXG4gICAgICByZXR1cm5cblxuICAgIGlmIGF0b20uY29uZmlnLmdldCgnYXRvbS1ydW5uZXIuc2hvd091dHB1dFdpbmRvdycpXG4gICAgICB7cGFuZSwgdmlld30gPSBAcnVubmVyVmlldygpXG4gICAgICBpZiBub3Qgdmlldz9cbiAgICAgICAgdmlldyA9IG5ldyBBdG9tUnVubmVyVmlldyhlZGl0b3IuZ2V0VGl0bGUoKSlcbiAgICAgICAgcGFuZXMgPSBhdG9tLndvcmtzcGFjZS5nZXRQYW5lcygpXG4gICAgICAgIGRpciA9IGF0b20uY29uZmlnLmdldCgnYXRvbS1ydW5uZXIucGFuZVNwbGl0RGlyZWN0aW9uJylcbiAgICAgICAgZGlyZnVuYyA9IEBzcGxpdEZ1bmNzW2Rpcl0gfHwgQHNwbGl0RnVuY0RlZmF1bHRcbiAgICAgICAgcGFuZSA9IHBhbmVzW3BhbmVzLmxlbmd0aCAtIDFdW2RpcmZ1bmNdKHZpZXcpXG4gICAgZWxzZVxuICAgICAgdmlldyA9XG4gICAgICAgIG1vY2tlZDogdHJ1ZVxuICAgICAgICBhcHBlbmQ6ICh0ZXh0LCB0eXBlKSAtPlxuICAgICAgICAgIGlmIHR5cGUgPT0gJ3N0ZGVycidcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IodGV4dClcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0KVxuICAgICAgICBzY3JvbGxUb0JvdHRvbTogLT5cbiAgICAgICAgY2xlYXI6IC0+XG4gICAgICAgIGZvb3RlcjogLT5cblxuICAgIHVubGVzcyB2aWV3Lm1vY2tlZFxuICAgICAgdmlldy5zZXRUaXRsZShlZGl0b3IuZ2V0VGl0bGUoKSlcbiAgICAgIHBhbmUuYWN0aXZhdGVJdGVtKHZpZXcpXG5cbiAgICBAZXhlY3V0ZShjbWQsIGVkaXRvciwgdmlldywgc2VsZWN0aW9uKVxuXG4gIHN0b3A6ICh2aWV3KSAtPlxuICAgIGlmIEBjaGlsZFxuICAgICAgdmlldyA/PSBAcnVubmVyVmlldygpLnZpZXdcbiAgICAgIGlmIHZpZXcgYW5kIHZpZXcuaXNPbkRvbSgpP1xuICAgICAgICB2aWV3LmFwcGVuZCgnXkMnLCAnc3RkaW4nKVxuICAgICAgZWxzZVxuICAgICAgICBAZGVidWcoJ0tpbGxlZCBjaGlsZCcsIEBjaGlsZC5waWQpXG4gICAgICBAY2hpbGQua2lsbCgnU0lHSU5UJylcbiAgICAgIGlmIEBjaGlsZC5raWxsZWRcbiAgICAgICAgQGNoaWxkID0gbnVsbFxuICAgIGNsZWFySW50ZXJ2YWwoQHRpbWVyKSBpZiBAdGltZXJcbiAgICBAdGltZXIgPSBudWxsXG5cbiAgc3RvcEFuZENsb3NlOiAtPlxuICAgIHtwYW5lLCB2aWV3fSA9IEBydW5uZXJWaWV3KClcbiAgICBwYW5lPy5yZW1vdmVJdGVtKHZpZXcpXG4gICAgQHN0b3AodmlldylcblxuICBleGVjdXRlOiAoY21kLCBlZGl0b3IsIHZpZXcsIHNlbGVjdGlvbikgLT5cbiAgICBAc3RvcCgpXG4gICAgdmlldy5jbGVhcigpXG5cbiAgICBhcmdzID0gW11cbiAgICBpZiBlZGl0b3IuZ2V0UGF0aCgpXG4gICAgICBlZGl0b3Iuc2F2ZSgpXG4gICAgICBhcmdzLnB1c2goZWRpdG9yLmdldFBhdGgoKSkgaWYgIXNlbGVjdGlvblxuICAgIHNwbGl0Q21kID0gY21kLnNwbGl0KC9cXHMrLylcbiAgICBpZiBzcGxpdENtZC5sZW5ndGggPiAxXG4gICAgICBjbWQgPSBzcGxpdENtZFswXVxuICAgICAgYXJncyA9IHNwbGl0Q21kLnNsaWNlKDEpLmNvbmNhdChhcmdzKVxuICAgIHRyeVxuICAgICAgZGlyID0gYXRvbS5wcm9qZWN0LmdldFBhdGhzKClbMF0gfHwgJy4nXG4gICAgICB0cnlcbiAgICAgICAgaWYgbm90IGZzLnN0YXRTeW5jKGRpcikuaXNEaXJlY3RvcnkoKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJhZCBkaXJcIilcbiAgICAgIGNhdGNoXG4gICAgICAgIGRpciA9IHAuZGlybmFtZShkaXIpXG4gICAgICBAY2hpbGQgPSBzcGF3bihjbWQsIGFyZ3MsIGN3ZDogZGlyKVxuICAgICAgQHRpbWVyID0gc2V0SW50ZXJ2YWwoKD0+IHZpZXcuYXBwZW5kRm9vdGVyKCcuJykpLCA3NTApXG4gICAgICBjdXJyZW50UGlkID0gQGNoaWxkLnBpZFxuICAgICAgQGNoaWxkLm9uICdlcnJvcicsIChlcnIpID0+XG4gICAgICAgIGlmIGVyci5tZXNzYWdlLm1hdGNoKC9cXGJFTk9FTlQkLylcbiAgICAgICAgICB2aWV3LmFwcGVuZCgnVW5hYmxlIHRvIGZpbmQgY29tbWFuZDogJyArIGNtZCArICdcXG4nLCAnc3RkZXJyJylcbiAgICAgICAgICB2aWV3LmFwcGVuZCgnQXJlIHlvdSBzdXJlIFBBVEggaXMgY29uZmlndXJlZCBjb3JyZWN0bHk/XFxuXFxuJywgJ3N0ZGVycicpXG4gICAgICAgICAgdmlldy5hcHBlbmQoJ0VOViBQQVRIOiAnICsgcHJvY2Vzcy5lbnYuUEFUSCArICdcXG5cXG4nLCAnc3RkZXJyJylcbiAgICAgICAgdmlldy5hcHBlbmQoZXJyLnN0YWNrLCAnc3RkZXJyJylcbiAgICAgICAgdmlldy5zY3JvbGxUb0JvdHRvbSgpXG4gICAgICAgIEBjaGlsZCA9IG51bGxcbiAgICAgICAgY2xlYXJJbnRlcnZhbChAdGltZXIpIGlmIEB0aW1lclxuICAgICAgQGNoaWxkLnN0ZGVyci5vbiAnZGF0YScsIChkYXRhKSA9PlxuICAgICAgICB2aWV3LmFwcGVuZChkYXRhLCAnc3RkZXJyJylcbiAgICAgICAgdmlldy5zY3JvbGxUb0JvdHRvbSgpXG4gICAgICBAY2hpbGQuc3Rkb3V0Lm9uICdkYXRhJywgKGRhdGEpID0+XG4gICAgICAgIHZpZXcuYXBwZW5kKGRhdGEsICdzdGRvdXQnKVxuICAgICAgICB2aWV3LnNjcm9sbFRvQm90dG9tKClcbiAgICAgIEBjaGlsZC5vbiAnY2xvc2UnLCAoY29kZSwgc2lnbmFsKSA9PlxuICAgICAgICBpZiBAY2hpbGQgJiYgQGNoaWxkLnBpZCA9PSBjdXJyZW50UGlkXG4gICAgICAgICAgdGltZSA9ICgobmV3IERhdGUgLSBzdGFydFRpbWUpIC8gMTAwMClcbiAgICAgICAgICB2aWV3LmFwcGVuZEZvb3RlcihcIiBFeGl0ZWQgd2l0aCBjb2RlPSN7Y29kZX0gaW4gI3t0aW1lfSBzZWNvbmRzLlwiKVxuICAgICAgICAgIHZpZXcuc2Nyb2xsVG9Cb3R0b20oKVxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoQHRpbWVyKSBpZiBAdGltZXJcbiAgICBjYXRjaCBlcnJcbiAgICAgIHZpZXcuYXBwZW5kKGVyci5zdGFjaywgJ3N0ZGVycicpXG4gICAgICB2aWV3LnNjcm9sbFRvQm90dG9tKClcbiAgICAgIEBzdG9wKClcblxuICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlXG4gICAgdHJ5XG4gICAgICBpZiBzZWxlY3Rpb25cbiAgICAgICAgQGNoaWxkLnN0ZGluLndyaXRlKGVkaXRvci5nZXRMYXN0U2VsZWN0aW9uKCkuZ2V0VGV4dCgpKVxuICAgICAgZWxzZSBpZiAhZWRpdG9yLmdldFBhdGgoKVxuICAgICAgICBAY2hpbGQuc3RkaW4ud3JpdGUoZWRpdG9yLmdldFRleHQoKSlcbiAgICAgIEBjaGlsZC5zdGRpbi5lbmQoKVxuICAgIHZpZXcuZm9vdGVyKFwiUnVubmluZzogI3tjbWR9IChjd2Q9I3tlZGl0b3IuZ2V0UGF0aCgpfSBwaWQ9I3tAY2hpbGQucGlkfSkuXCIpXG5cbiAgY29tbWFuZEZvcjogKGVkaXRvciwgc2VsZWN0aW9uKSAtPlxuICAgICMgdHJ5IHRvIGZpbmQgYSBzaGViYW5nXG4gICAgc2hlYmFuZyA9IEBjb21tYW5kRm9yU2hlYmFuZyhlZGl0b3IpXG4gICAgcmV0dXJuIHNoZWJhbmcgaWYgc2hlYmFuZz9cblxuICAgICMgRG9uJ3QgbG9va3VwIGJ5IGV4dGVuc2lvbiBmcm9tIHNlbGVjdGlvbi5cbiAgICBpZiAoIXNlbGVjdGlvbilcbiAgICAgICMgdHJ5IHRvIGxvb2t1cCBieSBleHRlbnNpb25cbiAgICAgIGlmIGVkaXRvci5nZXRQYXRoKCk/XG4gICAgICAgIGZvciBleHQgaW4gT2JqZWN0LmtleXMoQGV4dGVuc2lvbk1hcCkuc29ydCgoYSxiKSAtPiBiLmxlbmd0aCAtIGEubGVuZ3RoKVxuICAgICAgICAgIGJvdW5kYXJ5ID0gaWYgZXh0Lm1hdGNoKC9eXFxiLykgdGhlbiAnJyBlbHNlICdcXFxcYidcbiAgICAgICAgICBpZiBlZGl0b3IuZ2V0UGF0aCgpLm1hdGNoKGJvdW5kYXJ5ICsgZXh0ICsgJyQnKVxuICAgICAgICAgICAgcmV0dXJuIEBleHRlbnNpb25NYXBbZXh0XVxuXG4gICAgIyBsb29rdXAgYnkgZ3JhbW1hclxuICAgIHNjb3BlID0gZWRpdG9yLmdldExhc3RDdXJzb3IoKS5nZXRTY29wZURlc2NyaXB0b3IoKS5zY29wZXNbMF1cbiAgICBmb3IgbmFtZSBpbiBPYmplY3Qua2V5cyhAc2NvcGVNYXApXG4gICAgICBpZiBzY29wZS5tYXRjaCgnXnNvdXJjZVxcXFwuJyArIG5hbWUgKyAnXFxcXGInKVxuICAgICAgICByZXR1cm4gQHNjb3BlTWFwW25hbWVdXG5cbiAgY29tbWFuZEZvclNoZWJhbmc6IChlZGl0b3IpIC0+XG4gICAgbWF0Y2ggPSBlZGl0b3IubGluZVRleHRGb3JCdWZmZXJSb3coMCkubWF0Y2goL14jIVxccyooLispLylcbiAgICBtYXRjaCBhbmQgbWF0Y2hbMV1cblxuICBydW5uZXJWaWV3OiAtPlxuICAgIGZvciBwYW5lIGluIGF0b20ud29ya3NwYWNlLmdldFBhbmVzKClcbiAgICAgIGZvciB2aWV3IGluIHBhbmUuZ2V0SXRlbXMoKVxuICAgICAgICByZXR1cm4ge3BhbmU6IHBhbmUsIHZpZXc6IHZpZXd9IGlmIHZpZXcgaW5zdGFuY2VvZiBBdG9tUnVubmVyVmlld1xuICAgIHtwYW5lOiBudWxsLCB2aWV3OiBudWxsfVxuXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IEF0b21SdW5uZXJcbiJdfQ==
