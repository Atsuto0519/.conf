Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactForAtom = require('react-for-atom');

var _ServiceControls = require('./ServiceControls');

var _ServiceControls2 = _interopRequireDefault(_ServiceControls);

'use babel';

exports['default'] = _reactForAtom.React.createClass({
  displayName: 'ServiceItem',

  getDefaultProps: function getDefaultProps() {
    return {
      name: "error",
      up: "unknown",
      onFilterChange: function onFilterChange() {},
      onAction: function onAction(action, serviceName) {}
    };
  },
  render: function render() {
    var _this = this;

    return _reactForAtom.React.createElement(_ServiceControls2['default'], {
      up: this.props.up,
      name: this.props.container_name || this.props.name,
      onFilterChange: this.props.onFilterChange,
      selected: this.props.selected,
      onUpClick: function () {
        return _this.props.onAction("up", _this.props.name);
      },
      onBuildClick: function () {
        return _this.props.onAction("build", _this.props.name);
      },
      onRestartClick: function () {
        return _this.props.onAction("restart", _this.props.name);
      },
      onStopClick: function () {
        return _this.props.onAction("stop", _this.props.name);
      },
      onRmClick: function () {
        return _this.props.onAction("rm", _this.props.name);
      },
      onPushClick: this.props.tag ? function () {
        return _this.props.onAction('push', _this.props.name);
      } : undefined
    });
  }
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3RtYW4vLmF0b20vcGFja2FnZXMvZG9ja2VyL2xpYi9jb21wb25lbnRzL1NlcnZpY2VJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs0QkFFb0IsZ0JBQWdCOzsrQkFDUixtQkFBbUI7Ozs7QUFIL0MsV0FBVyxDQUFBOztxQkFLSSxvQkFBTSxXQUFXLENBQUM7OztBQUMvQixpQkFBZSxFQUFFLDJCQUFXO0FBQzFCLFdBQU87QUFDTCxVQUFJLEVBQUUsT0FBTztBQUNiLFFBQUUsRUFBRSxTQUFTO0FBQ2Isb0JBQWMsRUFBRSwwQkFBVyxFQUUxQjtBQUNELGNBQVEsRUFBRSxrQkFBUyxNQUFNLEVBQUUsV0FBVyxFQUFFLEVBRXZDO0tBQ0YsQ0FBQztHQUNIO0FBQ0QsUUFBTSxFQUFFLGtCQUFXOzs7QUFDakIsV0FDRTtBQUNFLFFBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQUFBQztBQUNsQixVQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEFBQUM7QUFDbkQsb0JBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQUFBQztBQUMxQyxjQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEFBQUM7QUFDOUIsZUFBUyxFQUFFO2VBQU0sTUFBSyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFLLEtBQUssQ0FBQyxJQUFJLENBQUM7T0FBQSxBQUFDO0FBQzVELGtCQUFZLEVBQUU7ZUFBTSxNQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE1BQUssS0FBSyxDQUFDLElBQUksQ0FBQztPQUFBLEFBQUM7QUFDbEUsb0JBQWMsRUFBRTtlQUFNLE1BQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsTUFBSyxLQUFLLENBQUMsSUFBSSxDQUFDO09BQUEsQUFBQztBQUN0RSxpQkFBVyxFQUFFO2VBQU0sTUFBSyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFLLEtBQUssQ0FBQyxJQUFJLENBQUM7T0FBQSxBQUFDO0FBQ2hFLGVBQVMsRUFBRTtlQUFNLE1BQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBSyxLQUFLLENBQUMsSUFBSSxDQUFDO09BQUEsQUFBQztBQUM1RCxpQkFBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHO2VBQU0sTUFBSyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFLLEtBQUssQ0FBQyxJQUFJLENBQUM7T0FBQSxHQUFHLFNBQVMsQUFBQztNQUM3RixDQUNGO0dBQ0g7Q0FDRixDQUFDIiwiZmlsZSI6Ii9Vc2Vycy9ob3RtYW4vLmF0b20vcGFja2FnZXMvZG9ja2VyL2xpYi9jb21wb25lbnRzL1NlcnZpY2VJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCdcblxuaW1wb3J0IHtSZWFjdH0gZnJvbSAncmVhY3QtZm9yLWF0b20nO1xuaW1wb3J0IFNlcnZpY2VDb250cm9scyBmcm9tICcuL1NlcnZpY2VDb250cm9scyc7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogXCJlcnJvclwiLFxuICAgICAgdXA6IFwidW5rbm93blwiLFxuICAgICAgb25GaWx0ZXJDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuXG4gICAgICB9LFxuICAgICAgb25BY3Rpb246IGZ1bmN0aW9uKGFjdGlvbiwgc2VydmljZU5hbWUpIHtcblxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZXJ2aWNlQ29udHJvbHNcbiAgICAgICAgdXA9e3RoaXMucHJvcHMudXB9XG4gICAgICAgIG5hbWU9e3RoaXMucHJvcHMuY29udGFpbmVyX25hbWUgfHwgdGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICBvbkZpbHRlckNoYW5nZT17dGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZX1cbiAgICAgICAgc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWR9XG4gICAgICAgIG9uVXBDbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkFjdGlvbihcInVwXCIsIHRoaXMucHJvcHMubmFtZSl9XG4gICAgICAgIG9uQnVpbGRDbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkFjdGlvbihcImJ1aWxkXCIsIHRoaXMucHJvcHMubmFtZSl9XG4gICAgICAgIG9uUmVzdGFydENsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQWN0aW9uKFwicmVzdGFydFwiLCB0aGlzLnByb3BzLm5hbWUpfVxuICAgICAgICBvblN0b3BDbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkFjdGlvbihcInN0b3BcIiwgdGhpcy5wcm9wcy5uYW1lKX1cbiAgICAgICAgb25SbUNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQWN0aW9uKFwicm1cIiwgdGhpcy5wcm9wcy5uYW1lKX1cbiAgICAgICAgb25QdXNoQ2xpY2s9e3RoaXMucHJvcHMudGFnID8gKCkgPT4gdGhpcy5wcm9wcy5vbkFjdGlvbigncHVzaCcsIHRoaXMucHJvcHMubmFtZSkgOiB1bmRlZmluZWR9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn0pO1xuIl19