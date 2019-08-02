Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _atomSpacePenViews = require('atom-space-pen-views');

"use babel";

var SelectPathView = (function (_TextEditorView) {
  _inherits(SelectPathView, _TextEditorView);

  function SelectPathView() {
    var _this = this;

    _classCallCheck(this, SelectPathView);

    _get(Object.getPrototypeOf(SelectPathView.prototype), 'constructor', this).call(this, { mini: true });

    this.addClass('pandoc-convert-path-input');

    this.blur(function () {
      return _this.hide();
    });

    atom.commands.add(this.element, {
      'core:confirm': function coreConfirm(event) {
        event.stopPropagation();
        _this.confirm();
      },

      'core:cancel': function coreCancel(event) {
        event.stopPropagation();
        _this.hide();
      }
    });
  }

  _createClass(SelectPathView, [{
    key: 'show',
    value: function show() {
      var text = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var delegate = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      if (!this.panel) {
        this.panel = atom.workspace.addModalPanel({ item: this });
      }

      this.delegate = delegate;
      this.setText(text);
      this.panel.show();
      this.focus();
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.delegate = null;
      this.setText('');
      this.panel.hide();
    }
  }, {
    key: 'confirm',
    value: function confirm() {
      if (this.delegate) {
        this.delegate(this.getText());
      }
      this.hide();
    }
  }]);

  return SelectPathView;
})(_atomSpacePenViews.TextEditorView);

exports['default'] = SelectPathView;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3RtYW4vLmF0b20vcGFja2FnZXMvcGFuZG9jLWNvbnZlcnQvbGliL3ZpZXdzL3NlbGVjdC1wYXRoLXZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O2lDQUUrQixzQkFBc0I7O0FBRnJELFdBQVcsQ0FBQTs7SUFJTCxjQUFjO1lBQWQsY0FBYzs7QUFFUCxXQUZQLGNBQWMsR0FFSjs7OzBCQUZWLGNBQWM7O0FBR2hCLCtCQUhFLGNBQWMsNkNBR1YsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUM7O0FBRXJCLFFBQUksQ0FBQyxRQUFRLENBQUMsMkJBQTJCLENBQUMsQ0FBQTs7QUFFMUMsUUFBSSxDQUFDLElBQUksQ0FBQzthQUFNLE1BQUssSUFBSSxFQUFFO0tBQUEsQ0FBQyxDQUFBOztBQUU1QixRQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQzlCLG9CQUFjLEVBQUUscUJBQUMsS0FBSyxFQUFLO0FBQ3pCLGFBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQTtBQUN2QixjQUFLLE9BQU8sRUFBRSxDQUFBO09BQ2Y7O0FBRUQsbUJBQWEsRUFBRSxvQkFBQyxLQUFLLEVBQUs7QUFDeEIsYUFBSyxDQUFDLGVBQWUsRUFBRSxDQUFBO0FBQ3ZCLGNBQUssSUFBSSxFQUFFLENBQUE7T0FDWjtLQUNGLENBQUMsQ0FBQTtHQUNIOztlQXBCRyxjQUFjOztXQXNCZCxnQkFBNkI7VUFBNUIsSUFBSSx5REFBRyxFQUFFO1VBQUUsUUFBUSx5REFBRyxJQUFJOztBQUU3QixVQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNmLFlBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtPQUMxRDs7QUFFRCxVQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtBQUN4QixVQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2xCLFVBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUE7QUFDakIsVUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO0tBQ2I7OztXQUVHLGdCQUFHO0FBQ0wsVUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7QUFDcEIsVUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUNoQixVQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFBO0tBQ2xCOzs7V0FFTSxtQkFBRztBQUNSLFVBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNqQixZQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO09BQzlCO0FBQ0QsVUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0tBQ1o7OztTQTdDRyxjQUFjOzs7cUJBZ0RMLGNBQWMiLCJmaWxlIjoiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9wYW5kb2MtY29udmVydC9saWIvdmlld3Mvc2VsZWN0LXBhdGgtdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGJhYmVsXCJcblxuaW1wb3J0IHsgVGV4dEVkaXRvclZpZXcgfSBmcm9tICdhdG9tLXNwYWNlLXBlbi12aWV3cydcblxuY2xhc3MgU2VsZWN0UGF0aFZpZXcgZXh0ZW5kcyBUZXh0RWRpdG9yVmlldyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoeyBtaW5pOiB0cnVlIH0pXG5cbiAgICB0aGlzLmFkZENsYXNzKCdwYW5kb2MtY29udmVydC1wYXRoLWlucHV0JylcblxuICAgIHRoaXMuYmx1cigoKSA9PiB0aGlzLmhpZGUoKSlcblxuICAgIGF0b20uY29tbWFuZHMuYWRkKHRoaXMuZWxlbWVudCwge1xuICAgICAgJ2NvcmU6Y29uZmlybSc6IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGlzLmNvbmZpcm0oKVxuICAgICAgfSxcblxuICAgICAgJ2NvcmU6Y2FuY2VsJzogKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNob3codGV4dCA9ICcnLCBkZWxlZ2F0ZSA9IG51bGwpIHtcblxuICAgIGlmICghdGhpcy5wYW5lbCkge1xuICAgICAgdGhpcy5wYW5lbCA9IGF0b20ud29ya3NwYWNlLmFkZE1vZGFsUGFuZWwoeyBpdGVtOiB0aGlzIH0pXG4gICAgfVxuXG4gICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlXG4gICAgdGhpcy5zZXRUZXh0KHRleHQpXG4gICAgdGhpcy5wYW5lbC5zaG93KClcbiAgICB0aGlzLmZvY3VzKClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGxcbiAgICB0aGlzLnNldFRleHQoJycpXG4gICAgdGhpcy5wYW5lbC5oaWRlKClcbiAgfVxuXG4gIGNvbmZpcm0oKSB7XG4gICAgaWYgKHRoaXMuZGVsZWdhdGUpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUodGhpcy5nZXRUZXh0KCkpXG4gICAgfVxuICAgIHRoaXMuaGlkZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0UGF0aFZpZXdcbiJdfQ==