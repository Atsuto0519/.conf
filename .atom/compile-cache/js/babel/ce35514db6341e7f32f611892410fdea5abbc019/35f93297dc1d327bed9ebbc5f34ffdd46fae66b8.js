Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _reactForAtom = require('react-for-atom');

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

var _ServiceLogs = require('./ServiceLogs');

var _ServiceLogs2 = _interopRequireDefault(_ServiceLogs);

var _reduxStore = require('../redux/store');

var _reduxStore2 = _interopRequireDefault(_reduxStore);

var _reduxActionsLog = require('../redux/actions/log');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _docker = require('../docker');

var _docker2 = _interopRequireDefault(_docker);

var _immutable = require('immutable');

'use babel';

exports['default'] = _reactForAtom.React.createClass({
  displayName: 'ComposeLogsConnecter',

  getInitialState: function getInitialState() {
    return {
      commandRunning: false,
      output: _reduxStore2['default'].getState().output
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      composeFilePaths: []
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    this.unsubscribe = _reduxStore2['default'].subscribe(this.onCacheChanged);
    this.trotthledUpdate = _lodash2['default'].throttle(function () {
      _this.forceUpdate();
    }, 200);
    this.exec();
  },
  componentWillUnmount: function componentWillUnmount() {
    this.kill();
    this.unsubscribe();
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.composeFilePaths.join(' ') != this.props.composeFilePaths.join(' ')) {
      this.reload();
    }
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return this.props.filters != nextProps.filters || this.props.composeFilePaths != nextProps.composeFilePaths || this.state.commandRunning != nextState.commandRunning;
  },
  onCacheChanged: function onCacheChanged() {
    if (_reduxStore2['default'].getState().output != this.state.output) {
      this.setState((0, _reactForAtom.update)(this.state, {
        output: { $set: _reduxStore2['default'].getState().output }
      }), this.trotthledUpdate);
    }
  },
  exec: function exec() {
    var _this2 = this;

    if (this.props.composeFilePaths.join(' ') == "" || this.state.commandRunning == true) return;
    this.command = _child_process2['default'].spawn('docker-compose', [].concat(_toConsumableArray((0, _immutable.fromJS)(this.props.composeFilePaths).map(function (p) {
      return (0, _immutable.fromJS)(["-f", p]);
    }).reduce(function (reduction, v) {
      return v.concat(reduction);
    }, (0, _immutable.fromJS)([])).toJS()), ['logs', '-f', '--tail', '40']));
    var dataHandler = function dataHandler(output) {
      var str = output.toString();
      _this2.dispatchNewOutput(str);
      if (str.indexOf('exited with code') != -1) {
        _docker2['default'].execPS();
      }
    };
    this.command.stdout.on('data', dataHandler);
    this.command.stderr.on('data', dataHandler);
    this.setState((0, _reactForAtom.update)(this.state, {
      commandRunning: { $set: true }
    }));
    this.command.on('exit', function () {
      _this2.setState((0, _reactForAtom.update)(_this2.state, {
        commandRunning: { $set: false }
      }));
    });
  },
  dispatchNewOutput: function dispatchNewOutput(output) {
    _reduxStore2['default'].dispatch((0, _reduxActionsLog.createLogReceivedAction)(output));
  },
  serviceLaunched: function serviceLaunched() {
    if (this.state.commandRunning == false) this.exec();
  },
  kill: function kill() {
    this.command && this.command.kill();
  },
  reload: function reload() {
    this.kill();
    this.clear();
    this.exec();
  },
  clear: function clear() {
    _reduxStore2['default'].dispatch((0, _reduxActionsLog.createLogResetAction)());
  },
  render: function render() {
    return _reactForAtom.React.createElement(_ServiceLogs2['default'], _extends({}, this.props, { output: this.state.output, attached: this.state.commandRunning, reload: this.reload, stop: this.kill, clear: this.clear }));
  }
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3RtYW4vLmF0b20vcGFja2FnZXMvZG9ja2VyL2xpYi9jb21wb25lbnRzL0NvbXBvc2VMb2dzQ29ubmVjdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7NEJBRTRCLGdCQUFnQjs7NkJBQ2xCLGVBQWU7Ozs7MkJBQ2pCLGVBQWU7Ozs7MEJBQ3JCLGdCQUFnQjs7OzsrQkFDMEIsc0JBQXNCOztzQkFDcEUsUUFBUTs7OztzQkFDSCxXQUFXOzs7O3lCQUNULFdBQVc7O0FBVGhDLFdBQVcsQ0FBQzs7cUJBV0csb0JBQU0sV0FBVyxDQUFDOzs7QUFDL0IsaUJBQWUsRUFBRSwyQkFBVztBQUMxQixXQUFPO0FBQ0wsb0JBQWMsRUFBRSxLQUFLO0FBQ3JCLFlBQU0sRUFBRSx3QkFBTSxRQUFRLEVBQUUsQ0FBQyxNQUFNO0tBQ2hDLENBQUM7R0FDSDtBQUNELGlCQUFlLEVBQUUsMkJBQVc7QUFDMUIsV0FBTztBQUNMLHNCQUFnQixFQUFFLEVBQUU7S0FDckIsQ0FBQztHQUNIO0FBQ0QsbUJBQWlCLEVBQUUsNkJBQVc7OztBQUM1QixRQUFJLENBQUMsV0FBVyxHQUFHLHdCQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDeEQsUUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBRSxRQUFRLENBQUMsWUFBTTtBQUFDLFlBQUssV0FBVyxFQUFFLENBQUE7S0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ25FLFFBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztHQUNiO0FBQ0Qsc0JBQW9CLEVBQUUsZ0NBQVc7QUFDL0IsUUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ1osUUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0dBQ3BCO0FBQ0Qsb0JBQWtCLEVBQUUsNEJBQVMsU0FBUyxFQUFFO0FBQ3RDLFFBQUksU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxD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LGlCQUFlLEVBQUUsMkJBQVc7QUFDMUIsUUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsSUFBSSxLQUFLLEVBQ3BDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztHQUNmO0FBQ0QsTUFBSSxFQUFFLGdCQUFXO0FBQ2YsUUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0dBQ3JDO0FBQ0QsUUFBTSxFQUFFLGtCQUFXO0FBQ2pCLFFBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNaLFFBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztHQUNiO0FBQ0QsT0FBSyxFQUFFLGlCQUFXO0FBQ2hCLDRCQUFNLFFBQVEsQ0FBQyw0Q0FBc0IsQ0FBQyxDQUFDO0dBQ3hDO0FBQ0QsUUFBTSxFQUFFLGtCQUFXO0FBQ2pCLFdBQVEseUVBQWlCLElBQUksQ0FBQyxLQUFLLElBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxBQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxBQUFDLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEFBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQUFBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxBQUFDLElBQUUsQ0FBQztHQUNqSztDQUNGLENBQUMiLCJmaWxlIjoiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9kb2NrZXIvbGliL2NvbXBvbmVudHMvQ29tcG9zZUxvZ3NDb25uZWN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcblxuaW1wb3J0IHtSZWFjdCwgdXBkYXRlfSBmcm9tICdyZWFjdC1mb3ItYXRvbSc7XG5pbXBvcnQgY2hpbGRfcHJvY2VzcyBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCBTZXJ2aWNlTG9ncyBmcm9tICcuL1NlcnZpY2VMb2dzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XG5pbXBvcnQge2NyZWF0ZUxvZ1JlY2VpdmVkQWN0aW9uLCBjcmVhdGVMb2dSZXNldEFjdGlvbn0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9sb2cnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBkb2NrZXIgZnJvbSAnLi4vZG9ja2VyJztcbmltcG9ydCB7ZnJvbUpTfSBmcm9tICdpbW11dGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbW1hbmRSdW5uaW5nOiBmYWxzZSxcbiAgICAgIG91dHB1dDogc3RvcmUuZ2V0U3RhdGUoKS5vdXRwdXRcbiAgICB9O1xuICB9LFxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21wb3NlRmlsZVBhdGhzOiBbXVxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKHRoaXMub25DYWNoZUNoYW5nZWQpO1xuICAgIHRoaXMudHJvdHRobGVkVXBkYXRlID0gXy50aHJvdHRsZSgoKSA9PiB7dGhpcy5mb3JjZVVwZGF0ZSgpfSwgMjAwKTtcbiAgICB0aGlzLmV4ZWMoKTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMua2lsbCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfSxcbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbihwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLmNvbXBvc2VGaWxlUGF0aHMuam9pbignICcpICE9IHRoaXMucHJvcHMuY29tcG9zZUZpbGVQYXRocy5qb2luKCcgJykpIHtcbiAgICAgIHRoaXMucmVsb2FkKCk7XG4gICAgfVxuICB9LFxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvcHMuZmlsdGVycyAhPSBuZXh0UHJvcHMuZmlsdGVycyB8fFxuICAgICAgdGhpcy5wcm9wcy5jb21wb3NlRmlsZVBhdGhzICE9IG5leHRQcm9wcy5jb21wb3NlRmlsZVBhdGhzIHx8XG4gICAgICB0aGlzLnN0YXRlLmNvbW1hbmRSdW5uaW5nICE9IG5leHRTdGF0ZS5jb21tYW5kUnVubmluZ1xuICAgICk7XG4gIH0sXG4gIG9uQ2FjaGVDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoc3RvcmUuZ2V0U3RhdGUoKS5vdXRwdXQgIT0gdGhpcy5zdGF0ZS5vdXRwdXQpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGUodGhpcy5zdGF0ZSwge1xuICAgICAgICBvdXRwdXQ6IHskc2V0OiBzdG9yZS5nZXRTdGF0ZSgpLm91dHB1dH1cbiAgICAgIH0pLCB0aGlzLnRyb3R0aGxlZFVwZGF0ZSk7XG4gICAgfVxuICB9LFxuICBleGVjOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5jb21wb3NlRmlsZVBhdGhzLmpvaW4oJyAnKSA9PSBcIlwiIHx8IHRoaXMuc3RhdGUuY29tbWFuZFJ1bm5pbmcgPT0gdHJ1ZSlcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLmNvbW1hbmQgPSBjaGlsZF9wcm9jZXNzLnNwYXduKCdkb2NrZXItY29tcG9zZScsIFsuLi5mcm9tSlModGhpcy5wcm9wcy5jb21wb3NlRmlsZVBhdGhzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHAgPT4gZnJvbUpTKFtcIi1mXCIsIHBdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgocmVkdWN0aW9uLCB2KSA9PiB2LmNvbmNhdChyZWR1Y3Rpb24pLCBmcm9tSlMoW10pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9KUygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsb2dzJywgJy1mJywgJy0tdGFpbCcsICc0MCddKTtcbiAgICBsZXQgZGF0YUhhbmRsZXIgPSAob3V0cHV0KSA9PiB7XG4gICAgICBsZXQgc3RyID0gb3V0cHV0LnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLmRpc3BhdGNoTmV3T3V0cHV0KHN0cik7XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ2V4aXRlZCB3aXRoIGNvZGUnKSAhPSAtMSkge1xuICAgICAgICBkb2NrZXIuZXhlY1BTKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY29tbWFuZC5zdGRvdXQub24oJ2RhdGEnLCBkYXRhSGFuZGxlcik7XG4gICAgdGhpcy5jb21tYW5kLnN0ZGVyci5vbignZGF0YScsIGRhdGFIYW5kbGVyKTtcbiAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZSh0aGlzLnN0YXRlLCB7XG4gICAgICBjb21tYW5kUnVubmluZzogeyRzZXQ6IHRydWV9XG4gICAgfSkpO1xuICAgIHRoaXMuY29tbWFuZC5vbignZXhpdCcsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlKHRoaXMuc3RhdGUsIHtcbiAgICAgICAgY29tbWFuZFJ1bm5pbmc6IHskc2V0OiBmYWxzZX1cbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfSxcbiAgZGlzcGF0Y2hOZXdPdXRwdXQ6IGZ1bmN0aW9uKG91dHB1dCkge1xuICAgIHN0b3JlLmRpc3BhdGNoKGNyZWF0ZUxvZ1JlY2VpdmVkQWN0aW9uKG91dHB1dCkpO1xuICB9LFxuICBzZXJ2aWNlTGF1bmNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbW1hbmRSdW5uaW5nID09IGZhbHNlKVxuICAgICAgdGhpcy5leGVjKCk7XG4gIH0sXG4gIGtpbGw6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY29tbWFuZCAmJiB0aGlzLmNvbW1hbmQua2lsbCgpO1xuICB9LFxuICByZWxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMua2lsbCgpO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLmV4ZWMoKTtcbiAgfSxcbiAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgIHN0b3JlLmRpc3BhdGNoKGNyZWF0ZUxvZ1Jlc2V0QWN0aW9uKCkpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoPFNlcnZpY2VMb2dzIHsuLi50aGlzLnByb3BzfSBvdXRwdXQ9e3RoaXMuc3RhdGUub3V0cHV0fSBhdHRhY2hlZD17dGhpcy5zdGF0ZS5jb21tYW5kUnVubmluZ30gcmVsb2FkPXt0aGlzLnJlbG9hZH0gc3RvcD17dGhpcy5raWxsfSBjbGVhcj17dGhpcy5jbGVhcn0vPilcbiAgfVxufSk7XG4iXX0=