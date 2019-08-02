Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

//  weak

var _reactForAtom = require('react-for-atom');

var _immutable = require('immutable');

var _reduxStore = require('../redux/store');

var _reduxStore2 = _interopRequireDefault(_reduxStore);

'use babel';exports['default'] = _reactForAtom.React.createClass({
  displayName: 'ComposeServicesConnecter',

  getInitialState: function getInitialState() {
    return this.getUpdatedState();
  },
  getDefaultProps: function getDefaultProps() {
    return {};
  },
  componentDidMount: function componentDidMount() {
    this.unsubscribe = _reduxStore2['default'].subscribe(this.updateState);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.unsubscribe();
  },
  getUpdatedState: function getUpdatedState() {
    return {
      services: (0, _immutable.fromJS)(_reduxStore2['default'].getState().compose).map(function (config) {
        return config.get('services');
      }, (0, _immutable.fromJS)([])).reduce(function (reduction, value) {
        return reduction.concat(value);
      }, (0, _immutable.fromJS)([])).toJS()
    };
  },
  updateState: function updateState() {
    this.setState(this.getUpdatedState());
  },
  render: function render() {
    return _reactForAtom.React.cloneElement(this.props.children, {
      services: this.state.services
    });
  }
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3RtYW4vLmF0b20vcGFja2FnZXMvZG9ja2VyL2xpYi9jb21wb25lbnRzL0NvbXBvc2VTZXJ2aWNlc0Nvbm5lY3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs0QkFHb0IsZ0JBQWdCOzt5QkFDZixXQUFXOzswQkFFZCxnQkFBZ0I7Ozs7QUFObEMsV0FBVyxDQUFBLHFCQVFJLG9CQUFNLFdBQVcsQ0FBQzs7O0FBQy9CLGlCQUFlLEVBQUUsMkJBQVc7QUFDMUIsV0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7R0FDL0I7QUFDRCxpQkFBZSxFQUFFLDJCQUFXO0FBQzFCLFdBQU8sRUFBRSxDQUFDO0dBQ1g7QUFDRCxtQkFBaUIsRUFBRSw2QkFBVztBQUM1QixRQUFJLENBQUMsV0FBVyxHQUFHLHdCQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7R0FDdEQ7QUFDRCxzQkFBb0IsRUFBRSxnQ0FBVztBQUMvQixRQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7R0FDcEI7QUFDRCxpQkFBZSxFQUFFLDJCQUFXO0FBQzFCLFdBQU87QUFDTCxjQUFRLEVBQUUsdUJBQU8sd0JBQU0sUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQzdCLEdBQUcsQ0FBQyxVQUFBLE1BQU07ZUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztPQUFBLEVBQUUsdUJBQU8sRUFBRSxDQUFDLENBQUMsQ0FDakQsTUFBTSxDQUFDLFVBQUMsU0FBUyxFQUFFLEtBQUs7ZUFBSyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztPQUFBLEVBQUUsdUJBQU8sRUFBRSxDQUFDLENBQUMsQ0FDakUsSUFBSSxFQUFFO0tBQ3BCLENBQUM7R0FDSDtBQUNELGFBQVcsRUFBRSx1QkFBVztBQUN0QixRQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0dBQ3ZDO0FBQ0QsUUFBTSxFQUFFLGtCQUFXO0FBQ2pCLFdBQ0Usb0JBQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ3RDLGNBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7S0FDOUIsQ0FBQyxDQUNGO0dBQ0g7Q0FDRixDQUFDIiwiZmlsZSI6Ii9Vc2Vycy9ob3RtYW4vLmF0b20vcGFja2FnZXMvZG9ja2VyL2xpYi9jb21wb25lbnRzL0NvbXBvc2VTZXJ2aWNlc0Nvbm5lY3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnXG4vLyBAZmxvdyB3ZWFrXG5cbmltcG9ydCB7UmVhY3R9IGZyb20gJ3JlYWN0LWZvci1hdG9tJztcbmltcG9ydCB7ZnJvbUpTfSBmcm9tICdpbW11dGFibGUnO1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vcmVkdXgvc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlZFN0YXRlKCk7XG4gIH0sXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZVN0YXRlKTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfSxcbiAgZ2V0VXBkYXRlZFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VydmljZXM6IGZyb21KUyhzdG9yZS5nZXRTdGF0ZSgpLmNvbXBvc2UpXG4gICAgICAgICAgICAgICAgICAubWFwKGNvbmZpZyA9PiBjb25maWcuZ2V0KCdzZXJ2aWNlcycpLCBmcm9tSlMoW10pKVxuICAgICAgICAgICAgICAgICAgLnJlZHVjZSgocmVkdWN0aW9uLCB2YWx1ZSkgPT4gcmVkdWN0aW9uLmNvbmNhdCh2YWx1ZSksIGZyb21KUyhbXSkpXG4gICAgICAgICAgICAgICAgICAudG9KUygpXG4gICAgfTtcbiAgfSxcbiAgdXBkYXRlU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRVcGRhdGVkU3RhdGUoKSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuLCB7XG4gICAgICAgIHNlcnZpY2VzOiB0aGlzLnN0YXRlLnNlcnZpY2VzLFxuICAgICAgfSlcbiAgICApO1xuICB9XG59KTtcbiJdfQ==