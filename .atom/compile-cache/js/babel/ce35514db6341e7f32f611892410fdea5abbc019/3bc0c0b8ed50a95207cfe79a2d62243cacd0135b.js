Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactForAtom = require('react-for-atom');

var _ServiceItem = require('./ServiceItem');

var _ServiceItem2 = _interopRequireDefault(_ServiceItem);

var _ServiceControls = require('./ServiceControls');

var _ServiceControls2 = _interopRequireDefault(_ServiceControls);

var _immutable = require('immutable');

'use babel';

exports['default'] = _reactForAtom.React.createClass({
  displayName: 'ServiceList',

  getInitialState: function getInitialState() {
    return {
      filters: []
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      services: [],
      onFiltersChange: function onFiltersChange() {},
      onAction: function onAction(action, serviceNames) {}
    };
  },
  onFilterChange: function onFilterChange(serviceName) {
    var _this = this;

    return function (selected) {
      var newFilters = undefined;
      if (serviceName != "all") {
        if (selected) {
          newFilters = (0, _immutable.fromJS)(_this.state.filters).push(serviceName).toJS();
        } else {
          newFilters = _this.state.filters.filter(function (service) {
            return service != serviceName;
          });
        }
      } else {
        if (selected) {
          newFilters = _this.props.services.map(function (service) {
            return service.container_name || service.name;
          });
        } else {
          newFilters = [];
        }
      }
      _this.setState({ filters: newFilters }, function () {
        _this.props.onFiltersChange(newFilters);
      });
    };
  },
  render: function render() {
    var _this2 = this;

    return _reactForAtom.React.createElement(
      'table',
      { className: 'services' },
      _reactForAtom.React.createElement(
        'thead',
        null,
        _reactForAtom.React.createElement(
          'tr',
          null,
          _reactForAtom.React.createElement(
            'td',
            null,
            'Container'
          ),
          _reactForAtom.React.createElement(
            'td',
            null,
            'Push'
          ),
          _reactForAtom.React.createElement(
            'td',
            null,
            'Refresh'
          ),
          _reactForAtom.React.createElement(
            'td',
            null,
            'Start'
          ),
          _reactForAtom.React.createElement(
            'td',
            null,
            'Build'
          ),
          _reactForAtom.React.createElement(
            'td',
            null,
            'Restart'
          ),
          _reactForAtom.React.createElement(
            'td',
            null,
            'Stop'
          ),
          _reactForAtom.React.createElement(
            'td',
            null,
            'Remove'
          ),
          _reactForAtom.React.createElement(
            'td',
            null,
            'Show output'
          )
        ),
        _reactForAtom.React.createElement(_ServiceControls2['default'], {
          applyToAll: true,
          onFilterChange: this.onFilterChange("all"),
          selected: this.state.filters.length == this.props.services.length,
          onUpClick: function () {
            return _this2.props.onAction("up");
          },
          onBuildClick: function () {
            return _this2.props.onAction("build");
          },
          onRestartClick: function () {
            return _this2.props.onAction("restart");
          },
          onStopClick: function () {
            return _this2.props.onAction("stop");
          },
          onRmClick: function () {
            return _this2.props.onAction("rm");
          },
          onPSClick: function () {
            return _this2.props.onAction('ps');
          }
        })
      ),
      _reactForAtom.React.createElement(
        'tbody',
        null,
        this.props.services.map(function (service, i) {
          return _reactForAtom.React.createElement(_ServiceItem2['default'], _extends({
            key: 'service' + i,
            onFilterChange: _this2.onFilterChange(service.name),
            selected: _this2.state.filters.find(function (filter) {
              return filter == (service.container_name || service.name);
            }) !== undefined,
            onAction: function (action, serviceName) {
              return _this2.props.onAction(action, [serviceName]);
            }
          }, service));
        })
      )
    );
  }
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3RtYW4vLmF0b20vcGFja2FnZXMvZG9ja2VyL2xpYi9jb21wb25lbnRzL1NlcnZpY2VMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzRCQUVvQixnQkFBZ0I7OzJCQUNaLGVBQWU7Ozs7K0JBQ1gsbUJBQW1COzs7O3lCQUMxQixXQUFXOztBQUxoQyxXQUFXLENBQUE7O3FCQU9JLG9CQUFNLFdBQVcsQ0FBQzs7O0FBQy9CLGlCQUFlLEVBQUUsMkJBQVc7QUFDMUIsV0FBTztBQUNMLGFBQU8sRUFBRSxFQUFFO0tBQ1osQ0FBQztHQUNIO0FBQ0QsaUJBQWUsRUFBRSwyQkFBVztBQUMxQixXQUFPO0FBQ0wsY0FBUSxFQUFFLEVBQUU7QUFDWixxQkFBZSxFQUFFLDJCQUFXLEVBRTNCO0FBQ0QsY0FBUSxFQUFFLGtCQUFTLE1BQU0sRUFBRSxZQUFZLEVBQUUsRUFFeEM7S0FDRixDQUFDO0dBQ0g7QUFDRCxnQkFBYyxFQUFFLHdCQUFTLFdBQVcsRUFBRTs7O0FBQ3BDLFdBQU8sVUFBQyxRQUFRLEVBQUs7QUFDbkIsVUFBSSxVQUFVLFlBQUEsQ0FBQztBQUNmLFVBQUksV0FBVyxJQUFJLEtBQUssRUFBRTtBQUN4QixZQUFJLFFBQVEsRUFBRTtBQUNaLG9CQUFVLEdBQUcsdUJBQU8sTUFBSyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2xFLE1BQU07QUFDTCxvQkFBVSxHQUFHLE1BQUssS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxPQUFPO21CQUFJLE9BQU8sSUFBSSxXQUFXO1dBQUEsQ0FBQyxDQUFDO1NBQzNFO09BQ0YsTUFBTTtBQUNMLFlBQUksUUFBUSxFQUFFO0FBQ1osb0JBQVUsR0FBRyxNQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQzlDLG1CQUFPLE9BQU8sQ0FBQyxjQUFjLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQztXQUMvQyxDQUFDLENBQUM7U0FDSixNQUFNO0FBQ0wsb0JBQVUsR0FBRyxFQUFFLENBQUM7U0FDakI7T0FDRjtBQUNELFlBQUssUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBQyxFQUFFLFlBQU07QUFBQyxjQUFLLEtBQUssQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUE7T0FBQyxDQUFDLENBQUM7S0FDdEYsQ0FBQztHQUNIO0FBQ0QsUUFBTSxFQUFFLGtCQUFXOzs7QUFDakIsV0FDRTs7UUFBTyxTQUFTLEVBQUMsVUFBVTtNQUN6Qjs7O1FBQ0U7OztVQUNFOzs7O1dBQWtCO1VBQ2xCOzs7O1dBQWE7VUFDYjs7OztXQUFnQjtVQUNoQjs7OztXQUFjO1VBQ2Q7Ozs7V0FBYztVQUNkOzs7O1dBQWdCO1VBQ2hCOzs7O1dBQWE7VUFDYjs7OztXQUFlO1VBQ2Y7Ozs7V0FBb0I7U0FDakI7UUFDTDtBQUNFLG9CQUFVLEVBQUUsSUFBSSxBQUFDO0FBQ2pCLHdCQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQUFBQztBQUMzQyxrQkFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEFBQUM7QUFDbEUsbUJBQVMsRUFBRTttQkFBTSxPQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1dBQUEsQUFBQztBQUMzQyxzQkFBWSxFQUFFO21CQUFNLE9BQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7V0FBQSxBQUFDO0FBQ2pELHdCQUFjLEVBQUU7bUJBQU0sT0FBSyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztXQUFBLEFBQUM7QUFDckQscUJBQVcsRUFBRTttQkFBTSxPQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1dBQUEsQUFBQztBQUMvQyxtQkFBUyxFQUFFO21CQUFNLE9BQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7V0FBQSxBQUFDO0FBQzNDLG1CQUFTLEVBQUU7bUJBQU0sT0FBSyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztXQUFBLEFBQUM7VUFDM0M7T0FDSTtNQUNSOzs7UUFDRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxPQUFPLEVBQUUsQ0FBQztpQkFDbEM7QUFDRSxlQUFHLGNBQVksQ0FBQyxBQUFHO0FBQ25CLDBCQUFjLEVBQUUsT0FBSyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxBQUFDO0FBQ2xELG9CQUFRLEVBQUUsT0FBSyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07cUJBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxjQUFjLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQSxBQUFDO2FBQUEsQ0FBQyxLQUFLLFNBQVMsQUFBQztBQUM5RyxvQkFBUSxFQUFFLFVBQUMsTUFBTSxFQUFFLFdBQVc7cUJBQUssT0FBSyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQUEsQUFBQzthQUMxRSxPQUFPLEVBQ1g7U0FDSCxDQUFDO09BQ0k7S0FDRixDQUNSO0dBQ0g7Q0FDRixDQUFDIiwiZmlsZSI6Ii9Vc2Vycy9ob3RtYW4vLmF0b20vcGFja2FnZXMvZG9ja2VyL2xpYi9jb21wb25lbnRzL1NlcnZpY2VMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCdcblxuaW1wb3J0IHtSZWFjdH0gZnJvbSAncmVhY3QtZm9yLWF0b20nO1xuaW1wb3J0IFNlcnZpY2VJdGVtIGZyb20gJy4vU2VydmljZUl0ZW0nO1xuaW1wb3J0IFNlcnZpY2VDb250cm9scyBmcm9tICcuL1NlcnZpY2VDb250cm9scyc7XG5pbXBvcnQge2Zyb21KU30gZnJvbSAnaW1tdXRhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWx0ZXJzOiBbXVxuICAgIH07XG4gIH0sXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlcnZpY2VzOiBbXSxcbiAgICAgIG9uRmlsdGVyc0NoYW5nZTogZnVuY3Rpb24oKSB7XG5cbiAgICAgIH0sXG4gICAgICBvbkFjdGlvbjogZnVuY3Rpb24oYWN0aW9uLCBzZXJ2aWNlTmFtZXMpIHtcblxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIG9uRmlsdGVyQ2hhbmdlOiBmdW5jdGlvbihzZXJ2aWNlTmFtZSkge1xuICAgIHJldHVybiAoc2VsZWN0ZWQpID0+IHtcbiAgICAgIGxldCBuZXdGaWx0ZXJzO1xuICAgICAgaWYgKHNlcnZpY2VOYW1lICE9IFwiYWxsXCIpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgbmV3RmlsdGVycyA9IGZyb21KUyh0aGlzLnN0YXRlLmZpbHRlcnMpLnB1c2goc2VydmljZU5hbWUpLnRvSlMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdGaWx0ZXJzID0gdGhpcy5zdGF0ZS5maWx0ZXJzLmZpbHRlcihzZXJ2aWNlID0+IHNlcnZpY2UgIT0gc2VydmljZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICBuZXdGaWx0ZXJzID0gdGhpcy5wcm9wcy5zZXJ2aWNlcy5tYXAoc2VydmljZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc2VydmljZS5jb250YWluZXJfbmFtZSB8fCBzZXJ2aWNlLm5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3RmlsdGVycyA9IFtdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJzOiBuZXdGaWx0ZXJzfSwgKCkgPT4ge3RoaXMucHJvcHMub25GaWx0ZXJzQ2hhbmdlKG5ld0ZpbHRlcnMpfSk7XG4gICAgfTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNlcnZpY2VzXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+Q29udGFpbmVyPC90ZD5cbiAgICAgICAgICAgIDx0ZD5QdXNoPC90ZD5cbiAgICAgICAgICAgIDx0ZD5SZWZyZXNoPC90ZD5cbiAgICAgICAgICAgIDx0ZD5TdGFydDwvdGQ+XG4gICAgICAgICAgICA8dGQ+QnVpbGQ8L3RkPlxuICAgICAgICAgICAgPHRkPlJlc3RhcnQ8L3RkPlxuICAgICAgICAgICAgPHRkPlN0b3A8L3RkPlxuICAgICAgICAgICAgPHRkPlJlbW92ZTwvdGQ+XG4gICAgICAgICAgICA8dGQ+U2hvdyBvdXRwdXQ8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPFNlcnZpY2VDb250cm9sc1xuICAgICAgICAgICAgYXBwbHlUb0FsbD17dHJ1ZX1cbiAgICAgICAgICAgIG9uRmlsdGVyQ2hhbmdlPXt0aGlzLm9uRmlsdGVyQ2hhbmdlKFwiYWxsXCIpfVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuZmlsdGVycy5sZW5ndGggPT0gdGhpcy5wcm9wcy5zZXJ2aWNlcy5sZW5ndGh9XG4gICAgICAgICAgICBvblVwQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25BY3Rpb24oXCJ1cFwiKX1cbiAgICAgICAgICAgIG9uQnVpbGRDbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkFjdGlvbihcImJ1aWxkXCIpfVxuICAgICAgICAgICAgb25SZXN0YXJ0Q2xpY2s9eygpID0+IHRoaXMucHJvcHMub25BY3Rpb24oXCJyZXN0YXJ0XCIpfVxuICAgICAgICAgICAgb25TdG9wQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25BY3Rpb24oXCJzdG9wXCIpfVxuICAgICAgICAgICAgb25SbUNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQWN0aW9uKFwicm1cIil9XG4gICAgICAgICAgICBvblBTQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25BY3Rpb24oJ3BzJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHt0aGlzLnByb3BzLnNlcnZpY2VzLm1hcCgoc2VydmljZSwgaSkgPT4gKFxuICAgICAgICAgICAgPFNlcnZpY2VJdGVtXG4gICAgICAgICAgICAgIGtleT17YHNlcnZpY2Uke2l9YH1cbiAgICAgICAgICAgICAgb25GaWx0ZXJDaGFuZ2U9e3RoaXMub25GaWx0ZXJDaGFuZ2Uoc2VydmljZS5uYW1lKX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuZmlsdGVycy5maW5kKGZpbHRlciA9PiBmaWx0ZXIgPT0gKHNlcnZpY2UuY29udGFpbmVyX25hbWUgfHwgc2VydmljZS5uYW1lKSkgIT09IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgb25BY3Rpb249eyhhY3Rpb24sIHNlcnZpY2VOYW1lKSA9PiB0aGlzLnByb3BzLm9uQWN0aW9uKGFjdGlvbiwgW3NlcnZpY2VOYW1lXSl9XG4gICAgICAgICAgICAgIHsuLi5zZXJ2aWNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKTtcbiAgfVxufSlcbiJdfQ==