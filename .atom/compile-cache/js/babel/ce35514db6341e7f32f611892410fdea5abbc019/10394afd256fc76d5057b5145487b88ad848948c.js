Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

//  weak

var _atom = require('atom');

var _jsYaml = require('js-yaml');

var _jsYaml2 = _interopRequireDefault(_jsYaml);

var _reactForAtom = require('react-for-atom');

var _componentsComposePanel = require('./components/ComposePanel');

var _componentsComposePanel2 = _interopRequireDefault(_componentsComposePanel);

var _child_process = require('child_process');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _reduxStore = require('./redux/store');

var _reduxStore2 = _interopRequireDefault(_reduxStore);

var _reduxActionsLog = require('./redux/actions/log');

var _reduxActionsServices = require('./redux/actions/services');

var _componentsRemoteInfosPrompt = require('./components/RemoteInfosPrompt');

var _componentsRemoteInfosPrompt2 = _interopRequireDefault(_componentsRemoteInfosPrompt);

var _immutable = require('immutable');

'use babel';exports['default'] = {

  dockerView: null,
  bottomPanel: null,
  subscriptions: null,
  config: {
    supressNotifications: {
      title: 'Supress notifications',
      description: 'This supresses "verbose" notifications when commands are successfully executed',
      type: 'boolean',
      'default': false
    }
  },

  activate: function activate(state) {
    var _this = this;

    this.dockerView = document.createElement('div');
    this.dockerView.classList.add("docker");
    this.bottomPanel = atom.workspace.addBottomPanel({
      item: this.dockerView,
      visible: false
    });
    this.modalView = document.createElement('div');
    this.modalView.classList.add("docker");
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.modalView,
      visible: false
    });

    _reactForAtom.ReactDOM.render(_reactForAtom.React.createElement(
      'div',
      null,
      'Select a compose file with docker:select-compose-file'
    ), this.dockerView);
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new _atom.CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'docker:toggle': function dockerToggle() {
        return _this.toggle();
      },
      'docker:select-compose-file': function dockerSelectComposeFile() {
        return _this.selectComposeFile().then(function () {});
      },
      'docker:add-compose-file': function dockerAddComposeFile() {
        return _this.selectComposeFile(true).then(function () {});
      }
    }));
  },

  deactivate: function deactivate() {
    this.bottomPanel.destroy();
    this.modalPanel.destroy();
    this.subscriptions.dispose();
  },

  serialize: function serialize() {
    return {};
  },

  pushSuccessVerboseNotification: function pushSuccessVerboseNotification() {
    var _atom$notifications;

    if (atom.config.get('docker.supressNotifications')) {
      return;
    }
    (_atom$notifications = atom.notifications).addSuccess.apply(_atom$notifications, arguments);
  },

  selectComposeFile: function selectComposeFile(adding) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      var grammarName = atom.workspace.getActiveTextEditor().getGrammar().name;

      if (grammarName != "YAML") {
        atom.notifications.addWarning("Selected file is not a docker-compose file");
      } else {
        (function () {
          var composeFile = atom.workspace.getActivePaneItem().buffer.file;
          var composeFilePath = composeFile.getPath();
          console.log('selected compose file : ' + composeFilePath);

          composeFile.read().then(function (content) {
            try {
              var yamlContent = _jsYaml2['default'].safeLoad(content);
              console.log(yamlContent);
              var services = undefined;
              var version = yamlContent.version;

              switch (version) {
                case '1':
                  services = Object.keys(yamlContent).map(function (key) {
                    return { name: key };
                  });
                  break;
                case '2':
                case '3':
                  services = Object.keys(yamlContent.services).map(function (key) {
                    return {
                      name: key,
                      container_name: yamlContent.services[key].container_name ? yamlContent.services[key].container_name : undefined,
                      tag: yamlContent.services[key].image && yamlContent.services[key].build ? yamlContent.services[key].image : undefined
                    };
                  });
                  break;
                default:
              }

              _reduxStore2['default'].dispatch(adding ? (0, _reduxActionsServices.createComposeFileAddedAction)(composeFilePath, services, version) : (0, _reduxActionsServices.createComposeFileSelectedAction)(composeFilePath, services, version));

              _this2.renderServiceList();
              _this2.execPS();

              if (_this2.bottomPanel.isVisible() == false) _this2.bottomPanel.show();
              resolve();
            } catch (e) {
              console.log(e);

              atom.notifications.addError("Impossible to select compose file", {
                detail: e.toString()
              });
              resolve(e);
            }
          });
        })();
      }
    });
  },

  getCommandArgs: function getCommandArgs(filePaths, action, serviceNames) {
    return [].concat(_toConsumableArray((0, _immutable.fromJS)(filePaths).map(function (filePath) {
      return ['-f', filePath];
    }).reduce(function (reduction, value) {
      return reduction.concat(value);
    }, (0, _immutable.fromJS)([])).toJS()), [action, action == "up" ? "-d" : "", action == "rm" ? "-f" : ""], _toConsumableArray(serviceNames)).filter(function (arg) {
      return arg != "";
    });
  },

  execComposeCommand: function execComposeCommand(action, serviceNames, withExec) {
    var _this3 = this;

    withExec = withExec || false;
    serviceNames = serviceNames || [];
    var filePaths = _reduxStore2['default'].getState().compose.map(function (conf) {
      return conf.filePath;
    });

    return new Promise(function (resolve, reject) {
      if (withExec) {
        (0, _child_process.exec)('docker-compose '.concat(_this3.getCommandArgs(filePaths, action, serviceNames).join(' ')), {
          cwd: _path2['default'].dirname(filePaths[0])
        }, function (error, stdout, stderr) {
          if (error) reject(stderr);else resolve(stdout);
        });
      } else {
        var child = (0, _child_process.spawn)('docker-compose', _this3.getCommandArgs(filePaths, action, serviceNames), { cwd: _path2['default'].dirname(filePaths[0]) });
        var dataHandler = function dataHandler(data) {
          var str = data.toString();
          _reduxStore2['default'].dispatch((0, _reduxActionsLog.createLogReceivedAction)(str));
          if (str.indexOf('exited with code') != -1) _this3.execPS();
        };

        child.stdout.on('data', dataHandler);
        child.stderr.on('data', dataHandler);
        child.on('exit', function (code) {
          if (code == 0) resolve();else reject();
        });
      }
    });
  },

  execPS: function execPS() {
    var _this4 = this;

    this.execComposeCommand('ps', [], true).then(function (stdout) {
      return _this4.handlePSOutput(stdout);
    })['catch'](function () {});
  },

  handlePSOutput: function handlePSOutput(output) {
    var lines = output.split('\n').slice(2);
    var services = (0, _immutable.fromJS)(_reduxStore2['default'].getState().compose).map(function (config) {
      return config.get('services');
    }).reduce(function (reduction, value) {
      return reduction.concat(value);
    }, (0, _immutable.fromJS)([])).toJS();

    var refreshedServices = services.map(function (service) {
      var n = service.container_name || service.name;

      var line = lines.find(function (line) {
        return line.split(' ')[0].indexOf(n) != -1;
      });

      return {
        name: n,
        up: line && line.indexOf(' Up ') != -1 ? 'up' : 'down'
      };
    });

    console.log(refreshedServices);
    _reduxStore2['default'].dispatch((0, _reduxActionsServices.createServiceStateChangedAction)(refreshedServices));
    this.renderServiceList();
  },

  pushImage: function pushImage(tag, remoteTag) {
    (0, _child_process.exec)('docker tag ' + tag + ' ' + remoteTag, {}, function (err, stdout, stderr) {
      if (err) {
        atom.notifications.addError('Impossible to tag ' + tag + ' with ' + remoteTag, { dismissable: true, detail: stderr });
        return;
      } else {
        atom.notifications.addSuccess('Tagged ' + tag + ' with ' + remoteTag + ' successfully, pushing ...');
        (0, _child_process.exec)('docker push ' + remoteTag, {}, function (error, pushStdout, pushStderr) {
          if (error) {
            atom.notifications.addError('Impossible to push ' + remoteTag, { dismissable: true, detail: pushStderr });
          } else {
            atom.notifications.addSuccess('Pushed ' + remoteTag + ' successfully');
          }
        });
      }
    });
  },

  onPush: function onPush(serviceNames) {
    var _this5 = this;

    var tag = (0, _immutable.fromJS)(_reduxStore2['default'].getState().compose).map(function (conf) {
      return conf.services;
    }).reduce(function (reduction, value) {
      return reduction.concat(value);
    }, (0, _immutable.fromJS)([])).find(function (service) {
      return service.get('name') == serviceNames[0];
    }).get('tag');
    var prompt = _reactForAtom.ReactDOM.render(_reactForAtom.React.createElement(_componentsRemoteInfosPrompt2['default'], null), this.modalView);

    this.modalView.onkeydown = function (e) {
      var ctrlDown = e.ctrlKey || e.metaKey;
      if (e.which == 27) {
        // esc
        _this5.modalPanel.hide();
      } else if (e.which == 13) {
        //enter
        if (prompt.text.value.length > 0) {
          _this5.modalPanel.hide();
          var newTag = prompt.text.value;
          atom.notifications.addSuccess(tag + ' => ' + newTag);
          _this5.pushImage(tag, newTag);
        }
      }
    };

    this.modalPanel.show();
    prompt.text.focus();
  },

  onComposeAction: function onComposeAction(action, serviceNames) {
    var _this6 = this;

    _reduxStore2['default'].dispatch((0, _reduxActionsLog.createLogReceivedAction)('[Atom] ' + action + '...'));
    if (action == "push") {
      this.onPush(serviceNames);
    } else {
      this.execComposeCommand(action, serviceNames, action == "ps").then(function (stdout) {
        _this6.pushSuccessVerboseNotification(action + ' ' + (serviceNames && serviceNames.length > 0 ? serviceNames.join(' ') : ""), {});

        if (action == "ps") {
          _this6.handlePSOutput(stdout);
        }

        if (action == "up" || action == "restart") {
          _this6.composePanel.composeLogs.serviceLaunched();
        }

        if (action == "up" || action == "restart" || action == "stop") {
          _this6.execPS();
        }
      })['catch'](function (stderr) {
        atom.notifications.addError(action + ' ' + (serviceNames && serviceNames.length > 0 ? serviceNames.join(' ') : ""), {
          dismissable: false,
          detail: stderr
        });
      });
    }
  },

  renderServiceList: function renderServiceList() {
    this.composePanel = _reactForAtom.ReactDOM.render(_reactForAtom.React.createElement(_componentsComposePanel2['default'], {
      onAction: this.onComposeAction.bind(this),
      composeFilePaths: _reduxStore2['default'].getState().compose.map(function (conf) {
        return conf.filePath;
      })
    }), this.dockerView);
  },

  toggle: function toggle() {
    return this.bottomPanel.isVisible() ? this.bottomPanel.hide() : this.bottomPanel.show();
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3RtYW4vLmF0b20vcGFja2FnZXMvZG9ja2VyL2xpYi9kb2NrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztvQkFJb0MsTUFBTTs7c0JBQ3pCLFNBQVM7Ozs7NEJBQ0ksZ0JBQWdCOztzQ0FDckIsMkJBQTJCOzs7OzZCQUMxQixlQUFlOztvQkFDeEIsTUFBTTs7OzswQkFDTCxlQUFlOzs7OytCQUNLLHFCQUFxQjs7b0NBQ2tELDBCQUEwQjs7MkNBQ3pHLGdDQUFnQzs7Ozt5QkFDekMsV0FBVzs7QUFkaEMsV0FBVyxDQUFBLHFCQWdCSTs7QUFFYixZQUFVLEVBQUUsSUFBSTtBQUNoQixhQUFXLEVBQUUsSUFBSTtBQUNqQixlQUFhLEVBQUUsSUFBSTtBQUNuQixRQUFNLEVBQUU7QUFDTix3QkFBb0IsRUFBRTtBQUNwQixXQUFLLEVBQUUsdUJBQXVCO0FBQzlCLGlCQUFXLEVBQUUsZ0ZBQWdGO0FBQzdGLFVBQUksRUFBRSxTQUFTO0FBQ2YsaUJBQVMsS0FBSztLQUNmO0dBQ0Y7O0FBRUQsVUFBUSxFQUFBLGtCQUFDLEtBQUssRUFBRTs7O0FBQ2QsUUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hELFFBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN4QyxRQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO0FBQy9DLFVBQUksRUFBRSxJQUFJLENBQUMsVUFBVTtBQUNyQixhQUFPLEVBQUUsS0FBSztLQUNmLENBQUMsQ0FBQztBQUNILFFBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQyxRQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkMsUUFBSSxDQUFDLFVB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QUFDLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUEsRUFBSTtBQUNoSCxxQkFBVyxFQUFFLEtBQUs7QUFDbEIsZ0JBQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDO0tBQ0o7R0FDRjs7QUFFRCxtQkFBaUIsRUFBRSw2QkFBVztBQUM1QixRQUFJLENBQUMsWUFBWSxHQUFHLHVCQUFTLE1BQU0sQ0FDakM7QUFDRSxjQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUM7QUFDMUMsc0JBQWdCLEVBQUUsd0JBQU0sUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7ZUFBSSxJQUFJLENBQUMsUUFBUTtPQUFBLENBQUMsQUFBQztNQUN0RSxFQUNGLElBQUksQ0FBQyxVQUFVLENBQ2hCLENBQUM7R0FDSDs7QUFFRCxRQUFNLEVBQUEsa0JBQUc7QUFDUCxXQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEdBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEdBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQ3ZCO0dBQ0g7Q0FDRiIsImZpbGUiOiIvVXNlcnMvaG90bWFuLy5hdG9tL3BhY2thZ2VzL2RvY2tlci9saWIvZG9ja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCdcbi8vIEBmbG93IHdlYWtcblxuXG5pbXBvcnQgeyBDb21wb3NpdGVEaXNwb3NhYmxlIH0gZnJvbSAnYXRvbSc7XG5pbXBvcnQgeWFtbCBmcm9tICdqcy15YW1sJztcbmltcG9ydCB7UmVhY3QsIFJlYWN0RE9NfSBmcm9tICdyZWFjdC1mb3ItYXRvbSc7XG5pbXBvcnQgQ29tcG9zZVBhbmVsIGZyb20gJy4vY29tcG9uZW50cy9Db21wb3NlUGFuZWwnO1xuaW1wb3J0IHtleGVjLCBzcGF3bn0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3JlZHV4L3N0b3JlJztcbmltcG9ydCB7Y3JlYXRlTG9nUmVjZWl2ZWRBY3Rpb259IGZyb20gJy4vcmVkdXgvYWN0aW9ucy9sb2cnO1xuaW1wb3J0IHtjcmVhdGVDb21wb3NlRmlsZVNlbGVjdGVkQWN0aW9uLCBjcmVhdGVDb21wb3NlRmlsZUFkZGVkQWN0aW9uLCBjcmVhdGVTZXJ2aWNlU3RhdGVDaGFuZ2VkQWN0aW9ufSBmcm9tICcuL3JlZHV4L2FjdGlvbnMvc2VydmljZXMnO1xuaW1wb3J0IFJlbW90ZUluZm9zUHJvbXB0IGZyb20gJy4vY29tcG9uZW50cy9SZW1vdGVJbmZvc1Byb21wdCc7XG5pbXBvcnQge2Zyb21KU30gZnJvbSAnaW1tdXRhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIGRvY2tlclZpZXc6IG51bGwsXG4gIGJvdHRvbVBhbmVsOiBudWxsLFxuICBzdWJzY3JpcHRpb25zOiBudWxsLFxuICBjb25maWc6IHtcbiAgICBzdXByZXNzTm90aWZpY2F0aW9uczoge1xuICAgICAgdGl0bGU6ICdTdXByZXNzIG5vdGlmaWNhdGlvbnMnLFxuICAgICAgZGVzY3JpcHRpb246ICdUaGlzIHN1cHJlc3NlcyBcInZlcmJvc2VcIiBub3RpZmljYXRpb25zIHdoZW4gY29tbWFuZHMgYXJlIHN1Y2Nlc3NmdWxseSBleGVjdXRlZCcsXG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfSxcblxuICBhY3RpdmF0ZShzdGF0ZSkge1xuICAgIHRoaXMuZG9ja2VyVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZG9ja2VyVmlldy5jbGFzc0xpc3QuYWRkKFwiZG9ja2VyXCIpO1xuICAgIHRoaXMuYm90dG9tUGFuZWwgPSBhdG9tLndvcmtzcGFjZS5hZGRCb3R0b21QYW5lbCh7XG4gICAgICBpdGVtOiB0aGlzLmRvY2tlclZpZXcsXG4gICAgICB2aXNpYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMubW9kYWxWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5tb2RhbFZpZXcuY2xhc3NMaXN0LmFkZChcImRvY2tlclwiKTtcbiAgICB0aGlzLm1vZGFsUGFuZWwgPSBhdG9tLndvcmtzcGFjZS5hZGRNb2RhbFBhbmVsKHtcbiAgICAgIGl0ZW06IHRoaXMubW9kYWxWaWV3LFxuICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICB9KTtcblxuICAgIFJlYWN0RE9NLnJlbmRlcig8ZGl2PlNlbGVjdCBhIGNvbXBvc2UgZmlsZSB3aXRoIGRvY2tlcjpzZWxlY3QtY29tcG9zZS1maWxlPC9kaXY+LCB0aGlzLmRvY2tlclZpZXcpO1xuICAgIC8vIEV2ZW50cyBzdWJzY3JpYmVkIHRvIGluIGF0b20ncyBzeXN0ZW0gY2FuIGJlIGVhc2lseSBjbGVhbmVkIHVwIHdpdGggYSBDb21wb3NpdGVEaXNwb3NhYmxlXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKTtcblxuICAgIC8vIFJlZ2lzdGVyIGNvbW1hbmQgdGhhdCB0b2dnbGVzIHRoaXMgdmlld1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoYXRvbS5jb21tYW5kcy5hZGQoJ2F0b20td29ya3NwYWNlJywge1xuICAgICAgJ2RvY2tlcjp0b2dnbGUnOiAoKSA9PiB0aGlzLnRvZ2dsZSgpLFxuICAgICAgJ2RvY2tlcjpzZWxlY3QtY29tcG9zZS1maWxlJzogKCkgPT4gdGhpcy5zZWxlY3RDb21wb3NlRmlsZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cbiAgICAgIH0pLFxuICAgICAgJ2RvY2tlcjphZGQtY29tcG9zZS1maWxlJzogKCkgPT4gdGhpcy5zZWxlY3RDb21wb3NlRmlsZSh0cnVlKS50aGVuKGZ1bmN0aW9uKCkge1xuXG4gICAgICB9KSxcbiAgICB9KSk7XG4gIH0sXG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmJvdHRvbVBhbmVsLmRlc3Ryb3koKTtcbiAgICB0aGlzLm1vZGFsUGFuZWwuZGVzdHJveSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5kaXNwb3NlKCk7XG4gIH0sXG5cbiAgc2VyaWFsaXplKCkge1xuICAgIHJldHVybiB7XG4gICAgfTtcbiAgfSxcblxuICBwdXNoU3VjY2Vzc1ZlcmJvc2VOb3RpZmljYXRpb24oLi4uYXJncykge1xuICAgIGlmKGF0b20uY29uZmlnLmdldCgnZG9ja2VyLnN1cHJlc3NOb3RpZmljYXRpb25zJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXRvbS5ub3RpZmljYXRpb25zLmFkZFN1Y2Nlc3MoLi4uYXJncyk7XG4gIH0sXG5cbiAgc2VsZWN0Q29tcG9zZUZpbGUoYWRkaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBncmFtbWFyTmFtZSA9IGF0b20ud29ya3NwYWNlLmdldEFjdGl2ZVRleHRFZGl0b3IoKS5nZXRHcmFtbWFyKCkubmFtZTtcblxuICAgICAgaWYgKGdyYW1tYXJOYW1lICE9IFwiWUFNTFwiKSB7XG4gICAgICAgIGF0b20ubm90aWZpY2F0aW9ucy5hZGRXYXJuaW5nKFwiU2VsZWN0ZWQgZmlsZSBpcyBub3QgYSBkb2NrZXItY29tcG9zZSBmaWxlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNvbXBvc2VGaWxlID0gYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlUGFuZUl0ZW0oKS5idWZmZXIuZmlsZTtcbiAgICAgICAgbGV0IGNvbXBvc2VGaWxlUGF0aCA9IGNvbXBvc2VGaWxlLmdldFBhdGgoKTtcbiAgICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkIGNvbXBvc2UgZmlsZSA6ICR7Y29tcG9zZUZpbGVQYXRofWApO1xuXG4gICAgICAgIGNvbXBvc2VGaWxlLnJlYWQoKS50aGVuKChjb250ZW50KSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB5YW1sQ29udGVudCA9IHlhbWwuc2FmZUxvYWQoY29udGVudCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh5YW1sQ29udGVudCk7XG4gICAgICAgICAgICBsZXQgc2VydmljZXM7XG4gICAgICAgICAgICBsZXQgdmVyc2lvbiA9IHlhbWxDb250ZW50LnZlcnNpb247XG5cbiAgICAgICAgICAgIHN3aXRjaCAodmVyc2lvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlcyA9IE9iamVjdC5rZXlzKHlhbWxDb250ZW50KS5tYXAoKGtleSkgPT4ge3JldHVybiB7bmFtZToga2V5fX0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZXMgPSBPYmplY3Qua2V5cyh5YW1sQ29udGVudC5zZXJ2aWNlcykubWFwKChrZXkpID0+IHtyZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJfbmFtZTogeWFtbENvbnRlbnQuc2VydmljZXNba2V5XS5jb250YWluZXJfbmFtZSA/IHlhbWxDb250ZW50LnNlcnZpY2VzW2tleV0uY29udGFpbmVyX25hbWUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgdGFnOiB5YW1sQ29udGVudC5zZXJ2aWNlc1trZXldLmltYWdlICYmIHlhbWxDb250ZW50LnNlcnZpY2VzW2tleV0uYnVpbGQgPyB5YW1sQ29udGVudC5zZXJ2aWNlc1trZXldLmltYWdlIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH19KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICAgIGFkZGluZ1xuICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgY3JlYXRlQ29tcG9zZUZpbGVBZGRlZEFjdGlvbihjb21wb3NlRmlsZVBhdGgsIHNlcnZpY2VzLCB2ZXJzaW9uKVxuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgY3JlYXRlQ29tcG9zZUZpbGVTZWxlY3RlZEFjdGlvbihjb21wb3NlRmlsZVBhdGgsIHNlcnZpY2VzLCB2ZXJzaW9uKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5yZW5kZXJTZXJ2aWNlTGlzdCgpO1xuICAgICAgICAgICAgdGhpcy5leGVjUFMoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYm90dG9tUGFuZWwuaXNWaXNpYmxlKCkgPT0gZmFsc2UpXG4gICAgICAgICAgICAgIHRoaXMuYm90dG9tUGFuZWwuc2hvdygpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuXG4gICAgICAgICAgICBhdG9tLm5vdGlmaWNhdGlvbnMuYWRkRXJyb3IoXCJJbXBvc3NpYmxlIHRvIHNlbGVjdCBjb21wb3NlIGZpbGVcIiwge1xuICAgICAgICAgICAgICBkZXRhaWw6IGUudG9TdHJpbmcoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXNvbHZlKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgZ2V0Q29tbWFuZEFyZ3M6IGZ1bmN0aW9uKGZpbGVQYXRocywgYWN0aW9uLCBzZXJ2aWNlTmFtZXMpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uZnJvbUpTKGZpbGVQYXRocykubWFwKGZpbGVQYXRoID0+IFsnLWYnLCBmaWxlUGF0aF0pLnJlZHVjZSgocmVkdWN0aW9uLCB2YWx1ZSkgPT4gcmVkdWN0aW9uLmNvbmNhdCh2YWx1ZSksIGZyb21KUyhbXSkpLnRvSlMoKSxcbiAgICAgIGFjdGlvbixcbiAgICAgIGFjdGlvbiA9PSBcInVwXCIgPyBcIi1kXCIgOiBcIlwiLFxuICAgICAgYWN0aW9uID09IFwicm1cIiA/IFwiLWZcIiA6IFwiXCIsXG4gICAgICAuLi5zZXJ2aWNlTmFtZXNcbiAgICBdLmZpbHRlcigoYXJnKSA9PiBhcmcgIT0gXCJcIik7XG4gIH0sXG5cbiAgZXhlY0NvbXBvc2VDb21tYW5kOiBmdW5jdGlvbihhY3Rpb24sIHNlcnZpY2VOYW1lcywgd2l0aEV4ZWMpIHtcbiAgICB3aXRoRXhlYyA9IHdpdGhFeGVjIHx8wqBmYWxzZTtcbiAgICBzZXJ2aWNlTmFtZXMgPSBzZXJ2aWNlTmFtZXMgfHwgW107XG4gICAgbGV0IGZpbGVQYXRocyA9IHN0b3JlLmdldFN0YXRlKCkuY29tcG9zZS5tYXAoY29uZiA9PiBjb25mLmZpbGVQYXRoKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAod2l0aEV4ZWMpIHtcbiAgICAgICAgZXhlYygnZG9ja2VyLWNvbXBvc2UgJy5jb25jYXQodGhpcy5nZXRDb21tYW5kQXJncyhmaWxlUGF0aHMsIGFjdGlvbiwgc2VydmljZU5hbWVzKS5qb2luKCcgJykpLCB7XG4gICAgICAgICAgY3dkOiBwYXRoLmRpcm5hbWUoZmlsZVBhdGhzWzBdKVxuICAgICAgICB9LCBmdW5jdGlvbihlcnJvciwgc3Rkb3V0LCBzdGRlcnIpIHtcbiAgICAgICAgICBpZiAoZXJyb3IpXG4gICAgICAgICAgICByZWplY3Qoc3RkZXJyKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXNvbHZlKHN0ZG91dCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNoaWxkID0gc3Bhd24oXG4gICAgICAgICAgJ2RvY2tlci1jb21wb3NlJywgdGhpcy5nZXRDb21tYW5kQXJncyhmaWxlUGF0aHMsIGFjdGlvbiwgc2VydmljZU5hbWVzKSxcbiAgICAgICAgICB7Y3dkOiBwYXRoLmRpcm5hbWUoZmlsZVBhdGhzWzBdKX1cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGRhdGFIYW5kbGVyID0gKGRhdGEpID0+IHtcbiAgICAgICAgICBsZXQgc3RyID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGNyZWF0ZUxvZ1JlY2VpdmVkQWN0aW9uKHN0cikpO1xuICAgICAgICAgIGlmIChzdHIuaW5kZXhPZignZXhpdGVkIHdpdGggY29kZScpICE9IC0xKVxuICAgICAgICAgICAgdGhpcy5leGVjUFMoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjaGlsZC5zdGRvdXQub24oJ2RhdGEnLCBkYXRhSGFuZGxlcik7XG4gICAgICAgIGNoaWxkLnN0ZGVyci5vbignZGF0YScsIGRhdGFIYW5kbGVyKTtcbiAgICAgICAgY2hpbGQub24oJ2V4aXQnLCAoY29kZSkgPT4ge1xuICAgICAgICAgIGlmIChjb2RlID09IDApXG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgZXhlY1BTOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmV4ZWNDb21wb3NlQ29tbWFuZCgncHMnLCBbXSwgdHJ1ZSlcbiAgICAgIC50aGVuKChzdGRvdXQpID0+IHRoaXMuaGFuZGxlUFNPdXRwdXQoc3Rkb3V0KSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7fSk7XG4gIH0sXG5cbiAgaGFuZGxlUFNPdXRwdXQ6IGZ1bmN0aW9uKG91dHB1dCkge1xuICAgIGxldCBsaW5lcyA9IG91dHB1dC5zcGxpdCgnXFxuJykuc2xpY2UoMik7XG4gICAgbGV0IHNlcnZpY2VzID0gZnJvbUpTKHN0b3JlLmdldFN0YXRlKCkuY29tcG9zZSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcChjb25maWcgPT4gY29uZmlnLmdldCgnc2VydmljZXMnKSlcbiAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgocmVkdWN0aW9uLCB2YWx1ZSkgPT4gcmVkdWN0aW9uLmNvbmNhdCh2YWx1ZSksIGZyb21KUyhbXSkpXG4gICAgICAgICAgICAgICAgICAgIC50b0pTKCk7XG5cbiAgICBsZXQgcmVmcmVzaGVkU2VydmljZXMgPSBzZXJ2aWNlcy5tYXAoXG4gICAgICBzZXJ2aWNlID0+IHtcbiAgICAgICAgbGV0IG4gPSBzZXJ2aWNlLmNvbnRhaW5lcl9uYW1lIHx8IHNlcnZpY2UubmFtZTtcblxuICAgICAgICBsZXQgbGluZSA9IGxpbmVzLmZpbmQobGluZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGxpbmUuc3BsaXQoJyAnKVswXS5pbmRleE9mKG4pICE9IC0xO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6IG4sXG4gICAgICAgICAgdXA6IGxpbmUgJiYgKGxpbmUuaW5kZXhPZignIFVwICcpICE9IC0xKSA/ICd1cCcgOiAnZG93bidcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc29sZS5sb2cocmVmcmVzaGVkU2VydmljZXMpO1xuICAgIHN0b3JlLmRpc3BhdGNoKGNyZWF0ZVNlcnZpY2VTdGF0ZUNoYW5nZWRBY3Rpb24ocmVmcmVzaGVkU2VydmljZXMpKTtcbiAgICB0aGlzLnJlbmRlclNlcnZpY2VMaXN0KCk7XG4gIH0sXG5cbiAgcHVzaEltYWdlOiBmdW5jdGlvbih0YWcsIHJlbW90ZVRhZykge1xuICAgIGV4ZWMoYGRvY2tlciB0YWcgJHt0YWd9ICR7cmVtb3RlVGFnfWAsIHt9LCAoZXJyLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBhdG9tLm5vdGlmaWNhdGlvbnMuYWRkRXJyb3IoYEltcG9zc2libGUgdG8gdGFnICR7dGFnfSB3aXRoICR7cmVtb3RlVGFnfWAsIHtkaXNtaXNzYWJsZTogdHJ1ZSwgZGV0YWlsOiBzdGRlcnJ9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXRvbS5ub3RpZmljYXRpb25zLmFkZFN1Y2Nlc3MoYFRhZ2dlZCAke3RhZ30gd2l0aCAke3JlbW90ZVRhZ30gc3VjY2Vzc2Z1bGx5LCBwdXNoaW5nIC4uLmApO1xuICAgICAgICBleGVjKGBkb2NrZXIgcHVzaCAke3JlbW90ZVRhZ31gLCB7fSwgKGVycm9yLCBwdXNoU3Rkb3V0LCBwdXNoU3RkZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBhdG9tLm5vdGlmaWNhdGlvbnMuYWRkRXJyb3IoYEltcG9zc2libGUgdG8gcHVzaCAke3JlbW90ZVRhZ31gLCB7ZGlzbWlzc2FibGU6IHRydWUsIGRldGFpbDogcHVzaFN0ZGVycn0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdG9tLm5vdGlmaWNhdGlvbnMuYWRkU3VjY2VzcyhgUHVzaGVkICR7cmVtb3RlVGFnfSBzdWNjZXNzZnVsbHlgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIG9uUHVzaDogZnVuY3Rpb24oc2VydmljZU5hbWVzKSB7XG4gICAgbGV0IHRhZyA9IGZyb21KUyhzdG9yZS5nZXRTdGF0ZSgpLmNvbXBvc2UpXG4gICAgICAgICAgICAgIC5tYXAoY29uZiA9PiBjb25mLnNlcnZpY2VzKVxuICAgICAgICAgICAgICAucmVkdWNlKChyZWR1Y3Rpb24sIHZhbHVlKSA9PiByZWR1Y3Rpb24uY29uY2F0KHZhbHVlKSwgZnJvbUpTKFtdKSlcbiAgICAgICAgICAgICAgLmZpbmQoc2VydmljZSA9PiBzZXJ2aWNlLmdldCgnbmFtZScpID09IHNlcnZpY2VOYW1lc1swXSlcbiAgICAgICAgICAgICAgLmdldCgndGFnJyk7XG4gICAgbGV0IHByb21wdCA9IFJlYWN0RE9NLnJlbmRlcig8UmVtb3RlSW5mb3NQcm9tcHQgLz4sIHRoaXMubW9kYWxWaWV3KTtcblxuICAgIHRoaXMubW9kYWxWaWV3Lm9ua2V5ZG93biA9IChlKSA9PiB7XG4gICAgICB2YXIgY3RybERvd24gPSBlLmN0cmxLZXkgfHwgZS5tZXRhS2V5O1xuICAgICAgaWYgKGUud2hpY2ggPT0gMjcpIHsgLy8gZXNjXG4gICAgICAgIHRoaXMubW9kYWxQYW5lbC5oaWRlKCk7XG4gICAgICB9IGVsc2UgaWYgKGUud2hpY2ggPT0gMTMpIHsgLy9lbnRlclxuICAgICAgICBpZiAocHJvbXB0LnRleHQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMubW9kYWxQYW5lbC5oaWRlKCk7XG4gICAgICAgICAgbGV0IG5ld1RhZyA9IHByb21wdC50ZXh0LnZhbHVlO1xuICAgICAgICAgIGF0b20ubm90aWZpY2F0aW9ucy5hZGRTdWNjZXNzKGAke3RhZ30gPT4gJHtuZXdUYWd9YCk7XG4gICAgICAgICAgdGhpcy5wdXNoSW1hZ2UodGFnLCBuZXdUYWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMubW9kYWxQYW5lbC5zaG93KClcbiAgICBwcm9tcHQudGV4dC5mb2N1cygpO1xuICB9LFxuXG4gIG9uQ29tcG9zZUFjdGlvbjogZnVuY3Rpb24oYWN0aW9uLCBzZXJ2aWNlTmFtZXMpIHtcbiAgICBzdG9yZS5kaXNwYXRjaChjcmVhdGVMb2dSZWNlaXZlZEFjdGlvbihgW0F0b21dICR7YWN0aW9ufS4uLmApKTtcbiAgICBpZiAoYWN0aW9uID09IFwicHVzaFwiKSB7XG4gICAgICB0aGlzLm9uUHVzaChzZXJ2aWNlTmFtZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV4ZWNDb21wb3NlQ29tbWFuZChhY3Rpb24sIHNlcnZpY2VOYW1lcywgYWN0aW9uID09IFwicHNcIilcbiAgICAgIC50aGVuKChzdGRvdXQpID0+IHtcbiAgICAgICAgdGhpcy5wdXNoU3VjY2Vzc1ZlcmJvc2VOb3RpZmljYXRpb24oYCR7YWN0aW9ufSAke3NlcnZpY2VOYW1lcyAmJiBzZXJ2aWNlTmFtZXMubGVuZ3RoID4gMCA/IHNlcnZpY2VOYW1lcy5qb2luKCcgJykgOiBcIlwifWAsIHt9KTtcblxuICAgICAgICBpZiAoYWN0aW9uID09IFwicHNcIikge1xuICAgICAgICAgIHRoaXMuaGFuZGxlUFNPdXRwdXQoc3Rkb3V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3Rpb24gPT0gXCJ1cFwiIHx8IGFjdGlvbiA9PSBcInJlc3RhcnRcIikge1xuICAgICAgICAgIHRoaXMuY29tcG9zZVBhbmVsLmNvbXBvc2VMb2dzLnNlcnZpY2VMYXVuY2hlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvbiA9PSBcInVwXCIgfHwgYWN0aW9uID09IFwicmVzdGFydFwiIHx8IGFjdGlvbiA9PSBcInN0b3BcIikge1xuICAgICAgICAgIHRoaXMuZXhlY1BTKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKHN0ZGVycikgPT4ge1xuICAgICAgICBhdG9tLm5vdGlmaWNhdGlvbnMuYWRkRXJyb3IoYCR7YWN0aW9ufSAke3NlcnZpY2VOYW1lcyAmJiBzZXJ2aWNlTmFtZXMubGVuZ3RoID4gMCA/IHNlcnZpY2VOYW1lcy5qb2luKCcgJykgOiBcIlwifWAsIHtcbiAgICAgICAgICBkaXNtaXNzYWJsZTogZmFsc2UsXG4gICAgICAgICAgZGV0YWlsOiBzdGRlcnJcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyU2VydmljZUxpc3Q6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY29tcG9zZVBhbmVsID0gUmVhY3RET00ucmVuZGVyKFxuICAgICAgPENvbXBvc2VQYW5lbFxuICAgICAgICBvbkFjdGlvbj17dGhpcy5vbkNvbXBvc2VBY3Rpb24uYmluZCh0aGlzKX1cbiAgICAgICAgY29tcG9zZUZpbGVQYXRocz17c3RvcmUuZ2V0U3RhdGUoKS5jb21wb3NlLm1hcChjb25mID0+IGNvbmYuZmlsZVBhdGgpfVxuICAgICAgLz4sXG4gICAgICB0aGlzLmRvY2tlclZpZXdcbiAgICApO1xuICB9LFxuXG4gIHRvZ2dsZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5ib3R0b21QYW5lbC5pc1Zpc2libGUoKSA/XG4gICAgICB0aGlzLmJvdHRvbVBhbmVsLmhpZGUoKSA6XG4gICAgICB0aGlzLmJvdHRvbVBhbmVsLnNob3coKVxuICAgICk7XG4gIH1cbn07XG4iXX0=