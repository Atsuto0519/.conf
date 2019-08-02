Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactForAtom = require('react-for-atom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

'use babel';

exports['default'] = _reactForAtom.React.createClass({
  displayName: 'ServiceControls',

  getDefaultProps: function getDefaultProps() {
    return {
      onFilterChange: function onFilterChange() {},
      onUpClick: function onUpClick() {},
      onBuildClick: function onBuildClick() {},
      onRestartClick: function onRestartClick() {},
      onStopClick: function onStopClick() {},
      onRmClick: function onRmClick() {}
    };
  },
  render: function render() {
    var _this = this;

    return _reactForAtom.React.createElement(
      'tr',
      { className: 'service-item' },
      _reactForAtom.React.createElement(
        'td',
        { className: (0, _classnames2['default'])("service-name", {
            "up": this.props.up == "up",
            "down": this.props.up == "down"
          }) },
        this.props.name
      ),
      _reactForAtom.React.createElement(
        'td',
        null,
        this.props.onPushClick ? _reactForAtom.React.createElement('button', { className: 'compose-control icon icon-docker-push', type: 'button', onClick: this.props.onPushClick }) : undefined
      ),
      _reactForAtom.React.createElement(
        'td',
        null,
        this.props.onPSClick ? _reactForAtom.React.createElement('button', { className: 'compose-control icon icon-docker-ps', type: 'button', onClick: this.props.onPSClick }) : undefined
      ),
      _reactForAtom.React.createElement(
        'td',
        null,
        this.props.up != "up" || this.props.applyToAll ? _reactForAtom.React.createElement('button', { className: 'compose-control icon icon-docker-up', type: 'button', onClick: this.props.onUpClick }) : undefined
      ),
      _reactForAtom.React.createElement(
        'td',
        null,
        _reactForAtom.React.createElement('button', { className: 'compose-control icon icon-docker-build', type: 'button', onClick: this.props.onBuildClick })
      ),
      _reactForAtom.React.createElement(
        'td',
        null,
        _reactForAtom.React.createElement('button', { className: 'compose-control icon icon-docker-restart', type: 'button', onClick: this.props.onRestartClick })
      ),
      _reactForAtom.React.createElement(
        'td',
        null,
        this.props.up == "up" || this.props.applyToAll ? _reactForAtom.React.createElement('button', { className: 'compose-control icon icon-docker-stop', type: 'button', onClick: this.props.onStopClick }) : undefined
      ),
      _reactForAtom.React.createElement(
        'td',
        null,
        _reactForAtom.React.createElement('button', { className: 'compose-control icon icon-docker-rm', type: 'button', onClick: this.props.onRmClick })
      ),
      _reactForAtom.React.createElement(
        'td',
        null,
        _reactForAtom.React.createElement('input', { type: 'checkbox', className: 'compose-control', checked: this.props.selected, onChange: function (event) {
            _this.props.onFilterChange(event.target.checked);
          } })
      )
    );
  }
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3RtYW4vLmF0b20vcGFja2FnZXMvZG9ja2VyL2xpYi9jb21wb25lbnRzL1NlcnZpY2VDb250cm9scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7NEJBRW9CLGdCQUFnQjs7MEJBQ2IsWUFBWTs7OztBQUhuQyxXQUFXLENBQUE7O3FCQUtJLG9CQUFNLFdBQVcsQ0FBQzs7O0FBQy9CLGlCQUFlLEVBQUUsMkJBQVc7QUFDMUIsV0FBTztBQUNMLG9CQUFjLEVBQUUsMEJBQVcsRUFFMUI7QUFDRCxlQUFTLEVBQUUscUJBQVcsRUFFckI7QUFDRCxrQkFBWSxFQUFFLHdCQUFXLEVBRXhCO0FBQ0Qsb0JBQWMsRUFBRSwwQkFBVyxFQUUxQjtBQUNELGlCQUFXLEVBQUUsdUJBQVcsRUFFdkI7QUFDRCxlQUFTLEVBQUUscUJBQVcsRUFFckI7S0FDRixDQUFBO0dBQ0Y7QUFDRCxRQUFNLEVBQUUsa0JBQVc7OztBQUNqQixXQUNFOztRQUFJLFNBQVMsRUFBQyxjQUFjO01BQzFCOztVQUFJLFNBQVMsRUFBRSw2QkFBVyxjQUFjLEVBQUU7QUFDeEMsZ0JBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJO0FBQzNCLGtCQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksTUFBTTtXQUNoQyxDQUFDLEFBQUM7UUFDQSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7T0FDYjtNQUNMOzs7UUFFRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FFbEIsOENBQVEsU0FBUyxFQUFDLHVDQUF1QyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxBQUFDLEdBQVUsR0FHcEgsU0FBUztPQUVSO01BQ0w7OztRQUVFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUVoQiw4Q0FBUSxTQUFTLEVBQUMscUNBQXFDLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEFBQUMsR0FBVSxHQUdoSCxTQUFTO09BRVI7TUFDTDs7O1FBRUUsQUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBRTNDLDhDQUFRLFNBQVMsRUFBQyxxQ0FBcUMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQUFBQyxHQUFVLEdBR2hILFNBQVM7T0FFUjtNQUNMOzs7UUFDRSw4Q0FBUSxTQUFTLEVBQUMsd0NBQXdDLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEFBQUMsR0FBVTtPQUNqSDtNQUNMOzs7UUFDRSw4Q0FBUSxTQUFTLEVBQUMsMENBQTBDLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEFBQUMsR0FBVTtPQUNySDtNQUNMOzs7UUFFRSxBQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FFM0MsOENBQVEsU0FBUyxFQUFDLHVDQUF1QyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxBQUFDLEdBQVUsR0FHcEgsU0FBUztPQUVSO01BQ0w7OztRQUNFLDhDQUFRLFNBQVMsRUFBQyxxQ0FBcUMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQUFBQyxHQUFVO09BQzNHO01BQ0w7OztRQUNFLDZDQUFPLElBQUksRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQUFBQyxFQUFDLFFBQVEsRUFBRSxVQUFDLEtBQUssRUFBSztBQUFDLGtCQUFLLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtXQUFDLEFBQUMsR0FBRTtPQUN2SjtLQUNGLENBQ0w7R0FDSDtDQUNGLENBQUMiLCJmaWxlIjoiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9kb2NrZXIvbGliL2NvbXBvbmVudHMvU2VydmljZUNvbnRyb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCdcblxuaW1wb3J0IHtSZWFjdH0gZnJvbSAncmVhY3QtZm9yLWF0b20nO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb25GaWx0ZXJDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuXG4gICAgICB9LFxuICAgICAgb25VcENsaWNrOiBmdW5jdGlvbigpIHtcblxuICAgICAgfSxcbiAgICAgIG9uQnVpbGRDbGljazogZnVuY3Rpb24oKSB7XG5cbiAgICAgIH0sXG4gICAgICBvblJlc3RhcnRDbGljazogZnVuY3Rpb24oKSB7XG5cbiAgICAgIH0sXG4gICAgICBvblN0b3BDbGljazogZnVuY3Rpb24oKSB7XG5cbiAgICAgIH0sXG4gICAgICBvblJtQ2xpY2s6IGZ1bmN0aW9uKCkge1xuXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRyIGNsYXNzTmFtZT1cInNlcnZpY2UtaXRlbVwiPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwic2VydmljZS1uYW1lXCIsIHtcbiAgICAgICAgICBcInVwXCI6IHRoaXMucHJvcHMudXAgPT0gXCJ1cFwiLFxuICAgICAgICAgIFwiZG93blwiOiB0aGlzLnByb3BzLnVwID09IFwiZG93blwiXG4gICAgICAgIH0pfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uUHVzaENsaWNrID9cbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb21wb3NlLWNvbnRyb2wgaWNvbiBpY29uLWRvY2tlci1wdXNoXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25QdXNoQ2xpY2t9PjwvYnV0dG9uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIDpcbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMub25QU0NsaWNrID9cbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb21wb3NlLWNvbnRyb2wgaWNvbiBpY29uLWRvY2tlci1wc1wiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uUFNDbGlja30+PC9idXR0b24+XG4gICAgICAgICAgICApXG4gICAgICAgICAgOlxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICB7XG4gICAgICAgICAgKHRoaXMucHJvcHMudXAgIT0gXCJ1cFwiIHx8IHRoaXMucHJvcHMuYXBwbHlUb0FsbCkgP1xuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbXBvc2UtY29udHJvbCBpY29uIGljb24tZG9ja2VyLXVwXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25VcENsaWNrfT48L2J1dHRvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb21wb3NlLWNvbnRyb2wgaWNvbiBpY29uLWRvY2tlci1idWlsZFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQnVpbGRDbGlja30+PC9idXR0b24+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbXBvc2UtY29udHJvbCBpY29uIGljb24tZG9ja2VyLXJlc3RhcnRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5wcm9wcy5vblJlc3RhcnRDbGlja30+PC9idXR0b24+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAge1xuICAgICAgICAgICh0aGlzLnByb3BzLnVwID09IFwidXBcIiB8fCB0aGlzLnByb3BzLmFwcGx5VG9BbGwpID9cbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb21wb3NlLWNvbnRyb2wgaWNvbiBpY29uLWRvY2tlci1zdG9wXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25TdG9wQ2xpY2t9PjwvYnV0dG9uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIDpcbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbXBvc2UtY29udHJvbCBpY29uIGljb24tZG9ja2VyLXJtXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25SbUNsaWNrfT48L2J1dHRvbj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJjb21wb3NlLWNvbnRyb2xcIiBjaGVja2VkPXt0aGlzLnByb3BzLnNlbGVjdGVkfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7dGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShldmVudC50YXJnZXQuY2hlY2tlZCl9fS8+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH1cbn0pO1xuIl19