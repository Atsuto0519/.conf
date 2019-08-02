Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactForAtom = require('react-for-atom');

var _ansiToHtml = require('ansi-to-html');

var _ansiToHtml2 = _interopRequireDefault(_ansiToHtml);

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

var _immutable = require('immutable');

'use babel';

exports['default'] = _reactForAtom.React.createClass({
  displayName: 'ServiceLogs',

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      output: [],
      filters: [],
      reload: function reload() {},
      stop: function stop() {},
      clear: function clear() {}
    };
  },
  componentDidMount: function componentDidMount() {},
  componentDidUpdate: function componentDidUpdate(prevProps) {
    var _this = this;

    if (prevProps.filters != this.props.filters) {
      this.forceUpdate(function () {
        _this.scrollDown();
      });
    } else {
      this.manageScroll();
    }
  },
  componentWillUpdate: function componentWillUpdate() {
    this.scrolledDown = this.isScrolledDown();
  },
  isFiltered: function isFiltered(line) {
    var _this2 = this;

    if (this.props.filters.length == 0) return true;else {
      var splitedLine = line.substring(0, 40).split('|');
      if (splitedLine.length > 1) {
        var _ret = (function () {
          var service = splitedLine[0];
          return {
            v: _this2.props.filters.some(function (filter) {
              return service.indexOf(filter) != -1;
            })
          };
        })();

        if (typeof _ret === 'object') return _ret.v;
      } else {
        return true;
      }
    }
  },
  isScrolledDown: function isScrolledDown() {
    return this.logsContainer.scrollHeight - this.logsContainer.clientHeight == this.logsContainer.scrollTop;
  },
  scrollDown: function scrollDown() {
    this.logsContainer.scrollTop = this.logsContainer.scrollHeight - this.logsContainer.clientHeight;
  },
  manageScroll: function manageScroll() {
    if (this.scrolledDown) this.scrollDown();
  },
  getHTMLOutput: function getHTMLOutput(output) {
    var convert = new _ansiToHtml2['default']();
    return output.filter(this.isFiltered).map(function (str) {
      return convert.toHtml(str);
    }).join('<br>').concat('<br>');
  },
  render: function render() {
    var _this3 = this;

    return _reactForAtom.React.createElement(
      'div',
      { className: 'service-logs', style: { flexGrow: "1", padding: "15px", display: "flex", flexDirection: "column", flex: "2", position: 'relative' } },
      _reactForAtom.React.createElement('div', { style: { overflowY: "scroll", flexGrow: "1", paddingRight: "5px", whiteSpace: "nowrap" }, ref: function (ref) {
          return _this3.logsContainer = ref;
        }, dangerouslySetInnerHTML: { __html: this.getHTMLOutput(this.props.output) } }),
      _reactForAtom.React.createElement(
        'div',
        { style: { position: 'absolute', top: '5', right: '5' } },
        _reactForAtom.React.createElement(
          'button',
          { type: 'button', className: 'compose-control text', onClick: this.props.clear },
          'Clear'
        ),
        _reactForAtom.React.createElement(
          'button',
          { type: 'button', className: 'compose-control text', onClick: this.props.reload },
          'Reattach'
        ),
        _reactForAtom.React.createElement(
          'button',
          { type: 'button', className: 'compose-control text', onClick: this.props.stop },
          'Detach'
        )
      )
    );
  }
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3RtYW4vLmF0b20vcGFja2FnZXMvZG9ja2VyL2xpYi9jb21wb25lbnRzL1NlcnZpY2VMb2dzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs0QkFFb0IsZ0JBQWdCOzswQkFDaEIsY0FBYzs7Ozs2QkFDUixlQUFlOzs7O3lCQUNwQixXQUFXOztBQUxoQyxXQUFXLENBQUE7O3FCQU9JLG9CQUFNLFdBQVcsQ0FBQzs7O0FBQy9CLGlCQUFlLEVBQUUsMkJBQVc7QUFDMUIsV0FBTyxFQUFFLENBQUM7R0FDWDtBQUNELGlCQUFlLEVBQUUsMkJBQVc7QUFDMUIsV0FBTztBQUNMLFlBQU0sRUFBRSxFQUFFO0FBQ1YsYUFBTyxFQUFFLEVBQUU7QUFDWCxZQUFNLEVBQUUsa0JBQVcsRUFFbEI7QUFDRCxVQUFJLEVBQUUsZ0JBQVcsRUFFaEI7QUFDRCxXQUFLLEVBQUUsaUJBQVcsRUFFakI7S0FDRixDQUFDO0dBQ0g7QUFDRCxtQkFBaUIsRUFBRSw2QkFBVyxFQUU3QjtBQUNELG9CQUFrQixFQUFFLDRCQUFTLFNBQVMsRUFBRTs7O0FBQ3RDLFFBQUksU0FBUyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtBQUMzQyxVQUFJLENBQUMsV0FBVyxDQUFDLFlBQU07QUFDckIsY0FBSyxVQUFVLEVBQUUsQ0FBQztPQUNuQixDQUFDLENBQUM7S0FDSixNQUFNO0FBQ0wsVUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3JCO0dBQ0Y7QUFDRCxxQkFBbUIsRUFBRSwrQkFBVztBQUM5QixRQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztHQUMzQztBQUNELFlBQVUsRUFBRSxvQkFBUyxJQUFJLEVBQUU7OztBQUN6QixRQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQ2hDLE9BQU8sSUFBSSxDQUFDLEtBQ1Q7QUFDSCxVQUFJLFdBQVcsR0FB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QUNGLENBQUMiLCJmaWxlIjoiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9kb2NrZXIvbGliL2NvbXBvbmVudHMvU2VydmljZUxvZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJ1xuXG5pbXBvcnQge1JlYWN0fSBmcm9tICdyZWFjdC1mb3ItYXRvbSc7XG5pbXBvcnQgQ29udmVydCBmcm9tICdhbnNpLXRvLWh0bWwnO1xuaW1wb3J0IGNoaWxkX3Byb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQge2Zyb21KU30gZnJvbSAnaW1tdXRhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3V0cHV0OiBbXSxcbiAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgcmVsb2FkOiBmdW5jdGlvbigpIHtcblxuICAgICAgfSxcbiAgICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuXG4gICAgICB9LFxuICAgICAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcblxuICB9LFxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uKHByZXZQcm9wcykge1xuICAgIGlmIChwcmV2UHJvcHMuZmlsdGVycyAhPSB0aGlzLnByb3BzLmZpbHRlcnMpIHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNjcm9sbERvd24oKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hbmFnZVNjcm9sbCgpO1xuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50V2lsbFVwZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zY3JvbGxlZERvd24gPSB0aGlzLmlzU2Nyb2xsZWREb3duKCk7XG4gIH0sXG4gIGlzRmlsdGVyZWQ6IGZ1bmN0aW9uKGxpbmUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXJzLmxlbmd0aCA9PSAwKVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZWxzZSB7XG4gICAgICBsZXQgc3BsaXRlZExpbmUgPSBsaW5lLnN1YnN0cmluZygwLCA0MCkuc3BsaXQoJ3wnKTtcbiAgICAgIGlmIChzcGxpdGVkTGluZS5sZW5ndGggPiAxKSB7XG4gICAgICAgIGxldCBzZXJ2aWNlID0gc3BsaXRlZExpbmVbMF07XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmZpbHRlcnMuc29tZShmaWx0ZXIgPT4gc2VydmljZS5pbmRleE9mKGZpbHRlcikgIT0gLTEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBpc1Njcm9sbGVkRG93bjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nc0NvbnRhaW5lci5zY3JvbGxIZWlnaHQgLSB0aGlzLmxvZ3NDb250YWluZXIuY2xpZW50SGVpZ2h0ID09IHRoaXMubG9nc0NvbnRhaW5lci5zY3JvbGxUb3A7XG4gIH0sXG4gIHNjcm9sbERvd246IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubG9nc0NvbnRhaW5lci5zY3JvbGxUb3AgPSB0aGlzLmxvZ3NDb250YWluZXIuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5sb2dzQ29udGFpbmVyLmNsaWVudEhlaWdodDtcbiAgfSxcbiAgbWFuYWdlU2Nyb2xsOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxlZERvd24pXG4gICAgICB0aGlzLnNjcm9sbERvd24oKTtcbiAgfSxcbiAgZ2V0SFRNTE91dHB1dDogZnVuY3Rpb24ob3V0cHV0KSB7XG4gICAgdmFyIGNvbnZlcnQgPSBuZXcgQ29udmVydCgpO1xuICAgIHJldHVybiBvdXRwdXRcbiAgICAgICAgICAgIC5maWx0ZXIodGhpcy5pc0ZpbHRlcmVkKVxuICAgICAgICAgICAgLm1hcCgoc3RyKSA9PiBjb252ZXJ0LnRvSHRtbChzdHIpKVxuICAgICAgICAgICAgLmpvaW4oJzxicj4nKVxuICAgICAgICAgICAgLmNvbmNhdCgnPGJyPicpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtbG9nc1wiIHN0eWxlPXt7ZmxleEdyb3c6IFwiMVwiLCBwYWRkaW5nOiBcIjE1cHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGZsZXg6IFwiMlwiLCBwb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7b3ZlcmZsb3dZOiBcInNjcm9sbFwiLCBmbGV4R3JvdzogXCIxXCIsIHBhZGRpbmdSaWdodDogXCI1cHhcIiwgd2hpdGVTcGFjZTogXCJub3dyYXBcIn19IHJlZj17KHJlZikgPT4gdGhpcy5sb2dzQ29udGFpbmVyID0gcmVmfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGhpcy5nZXRIVE1MT3V0cHV0KHRoaXMucHJvcHMub3V0cHV0KX19PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzUnLCByaWdodDogJzUnfX0+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY29tcG9zZS1jb250cm9sIHRleHRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsZWFyfT5DbGVhcjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNvbXBvc2UtY29udHJvbCB0ZXh0XCIgb25DbGljaz17dGhpcy5wcm9wcy5yZWxvYWR9PlJlYXR0YWNoPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY29tcG9zZS1jb250cm9sIHRleHRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnN0b3B9PkRldGFjaDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuIl19