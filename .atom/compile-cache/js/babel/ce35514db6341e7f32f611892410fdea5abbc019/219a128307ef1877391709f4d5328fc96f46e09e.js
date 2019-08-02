Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactForAtom = require('react-for-atom');

var _ServiceList = require('./ServiceList');

var _ServiceList2 = _interopRequireDefault(_ServiceList);

var _ComposeLogsConnecter = require('./ComposeLogsConnecter');

var _ComposeLogsConnecter2 = _interopRequireDefault(_ComposeLogsConnecter);

var _ComposeServicesConnecter = require('./ComposeServicesConnecter');

var _ComposeServicesConnecter2 = _interopRequireDefault(_ComposeServicesConnecter);

'use babel';

exports['default'] = _reactForAtom.React.createClass({
  displayName: 'ComposePanel',

  getInitialState: function getInitialState() {
    return {
      filters: []
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      composeFilePaths: [],
      onAction: function onAction(action, serviceNames) {}
    };
  },
  render: function render() {
    var _this = this;

    return _reactForAtom.React.createElement(
      'div',
      { className: 'compose-panel' },
      _reactForAtom.React.createElement(
        _ComposeServicesConnecter2['default'],
        null,
        _reactForAtom.React.createElement(_ServiceList2['default'], { onFiltersChange: function (newFilters) {
            return _this.setState({ filters: newFilters });
          }, onAction: this.props.onAction })
      ),
      _reactForAtom.React.createElement(_ComposeLogsConnecter2['default'], { filters: this.state.filters, composeFilePaths: this.props.composeFilePaths, ref: function (connecter) {
          return _this.composeLogs = connecter;
        } })
    );
  }
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3RtYW4vLmF0b20vcGFja2FnZXMvZG9ja2VyL2xpYi9jb21wb25lbnRzL0NvbXBvc2VQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7NEJBRW9CLGdCQUFnQjs7MkJBQ1osZUFBZTs7OztvQ0FDTix3QkFBd0I7Ozs7d0NBQ3BCLDRCQUE0Qjs7OztBQUxqRSxXQUFXLENBQUE7O3FCQU9JLG9CQUFNLFdBQVcsQ0FBQzs7O0FBQy9CLGlCQUFlLEVBQUUsMkJBQVc7QUFDMUIsV0FBTztBQUNMLGFBQU8sRUFBRSxFQUFFO0tBQ1osQ0FBQztHQUNIO0FBQ0QsaUJBQWUsRUFBRSwyQkFBVztBQUMxQixXQUFPO0FBQ0wsc0JBQWdCLEVBQUUsRUFBRTtBQUNwQixjQUFRLEVBQUUsa0JBQVMsTUFBTSxFQUFFLFlBQVksRUFBRSxFQUV4QztLQUNGLENBQUM7R0FDSDtBQUNELFFBQU0sRUFBRSxrQkFBVzs7O0FBQ2pCLFdBQ0U7O1FBQUssU0FBUyxFQUFDLGVBQWU7TUFDNUI7OztRQUNFLDhEQUFhLGVBQWUsRUFBRSxVQUFDLFVBQVU7bUJBQUssTUFBSyxRQUFRLENBQUMsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUM7V0FBQSxBQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxBQUFDLEdBQUU7T0FDM0Y7TUFDM0IsdUVBQXNCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQUFBQyxFQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEFBQUMsRUFBQyxHQUFHLEVBQUUsVUFBQyxTQUFTO2lCQUFLLE1BQUssV0FBVyxHQUFHLFNBQVM7U0FBQSxBQUFDLEdBQUU7S0FDakosQ0FDTjtHQUNIO0NBQ0YsQ0FBQyIsImZpbGUiOiIvVXNlcnMvaG90bWFuLy5hdG9tL3BhY2thZ2VzL2RvY2tlci9saWIvY29tcG9uZW50cy9Db21wb3NlUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJ1xuXG5pbXBvcnQge1JlYWN0fSBmcm9tICdyZWFjdC1mb3ItYXRvbSc7XG5pbXBvcnQgU2VydmljZUxpc3QgZnJvbSAnLi9TZXJ2aWNlTGlzdCc7XG5pbXBvcnQgQ29tcG9zZUxvZ3NDb25uZWN0ZXIgZnJvbSAnLi9Db21wb3NlTG9nc0Nvbm5lY3Rlcic7XG5pbXBvcnQgQ29tcG9zZVNlcnZpY2VzQ29ubmVjdGVyIGZyb20gJy4vQ29tcG9zZVNlcnZpY2VzQ29ubmVjdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWx0ZXJzOiBbXVxuICAgIH07XG4gIH0sXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbXBvc2VGaWxlUGF0aHM6IFtdLFxuICAgICAgb25BY3Rpb246IGZ1bmN0aW9uKGFjdGlvbiwgc2VydmljZU5hbWVzKSB7XG5cbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvc2UtcGFuZWxcIj5cbiAgICAgICAgPENvbXBvc2VTZXJ2aWNlc0Nvbm5lY3Rlcj5cbiAgICAgICAgICA8U2VydmljZUxpc3Qgb25GaWx0ZXJzQ2hhbmdlPXsobmV3RmlsdGVycykgPT4gdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyczogbmV3RmlsdGVyc30pfSBvbkFjdGlvbj17dGhpcy5wcm9wcy5vbkFjdGlvbn0vPlxuICAgICAgICA8L0NvbXBvc2VTZXJ2aWNlc0Nvbm5lY3Rlcj5cbiAgICAgICAgPENvbXBvc2VMb2dzQ29ubmVjdGVyIGZpbHRlcnM9e3RoaXMuc3RhdGUuZmlsdGVyc30gY29tcG9zZUZpbGVQYXRocz17dGhpcy5wcm9wcy5jb21wb3NlRmlsZVBhdGhzfSByZWY9eyhjb25uZWN0ZXIpID0+IHRoaXMuY29tcG9zZUxvZ3MgPSBjb25uZWN0ZXJ9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuIl19