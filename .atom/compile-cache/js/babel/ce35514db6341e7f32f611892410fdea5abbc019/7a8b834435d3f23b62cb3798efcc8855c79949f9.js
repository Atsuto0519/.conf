'use babel';

var _require = require('react-for-atom');

var React = _require.React;

var styles = {
  inputText: {
    width: "100%"
  }
};

module.exports = React.createClass({
  displayName: 'exports',

  render: function render() {
    var _this = this;

    return React.createElement(
      'div',
      null,
      React.createElement(
        'span',
        { className: 'title' },
        'Remote Tag'
      ),
      React.createElement('input', { type: 'text', ref: function (elem) {
          return _this.text = elem;
        }, className: 'native-key-bindings', style: styles.inputText, placeholder: 'Commit Message' })
    );
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3RtYW4vLmF0b20vcGFja2FnZXMvZG9ja2VyL2xpYi9jb21wb25lbnRzL1JlbW90ZUluZm9zUHJvbXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsQ0FBQTs7ZUFDRyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7O0lBQWxDLEtBQUssWUFBTCxLQUFLOztBQUVWLElBQUksTUFBTSxHQUFHO0FBQ1gsV0FBUyxFQUFFO0FBQ1QsU0FBSyxFQUFFLE1BQU07R0FDZDtDQUNGLENBQUM7O0FBR0YsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDakMsUUFBTSxFQUFFLGtCQUFXOzs7QUFDakIsV0FDRTs7O01BQ0U7O1VBQU0sU0FBUyxFQUFDLE9BQU87O09BQWtCO01BQ3pDLCtCQUFPLElBQUksRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFFLFVBQUEsSUFBSTtpQkFBSSxNQUFLLElBQUksR0FBRyxJQUFJO1NBQUEsQUFBQyxFQUFDLFNBQVMsRUFBQyxxQkFBcUIsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsQUFBQyxFQUFDLFdBQVcsRUFBQyxnQkFBZ0IsR0FBRTtLQUNySSxDQUNOO0dBQ0g7Q0FDRixDQUFDLENBQUMiLCJmaWxlIjoiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9kb2NrZXIvbGliL2NvbXBvbmVudHMvUmVtb3RlSW5mb3NQcm9tcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJ1xudmFyIHtSZWFjdH0gPSByZXF1aXJlKCdyZWFjdC1mb3ItYXRvbScpO1xuXG52YXIgc3R5bGVzID0ge1xuICBpbnB1dFRleHQ6IHtcbiAgICB3aWR0aDogXCIxMDAlXCJcbiAgfSxcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+UmVtb3RlIFRhZzwvc3Bhbj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXtlbGVtID0+IHRoaXMudGV4dCA9IGVsZW19IGNsYXNzTmFtZT1cIm5hdGl2ZS1rZXktYmluZGluZ3NcIiBzdHlsZT17c3R5bGVzLmlucHV0VGV4dH0gcGxhY2Vob2xkZXI9XCJDb21taXQgTWVzc2FnZVwiLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuIl19