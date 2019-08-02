(function() {
  var AnsiToHtml, AtomRunnerView, ScrollView,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ScrollView = require('atom-space-pen-views').ScrollView;

  AnsiToHtml = require('ansi-to-html');

  module.exports = AtomRunnerView = (function(superClass) {
    extend(AtomRunnerView, superClass);

    atom.deserializers.add(AtomRunnerView);

    AtomRunnerView.deserialize = function(arg) {
      var footer, output, title, view;
      title = arg.title, output = arg.output, footer = arg.footer;
      view = new AtomRunnerView(title);
      view._output.html(output);
      view._footer.html(footer);
      return view;
    };

    AtomRunnerView.content = function() {
      return this.div({
        "class": 'atom-runner',
        tabindex: -1
      }, (function(_this) {
        return function() {
          _this.h1('Atom Runner');
          _this.pre({
            "class": 'output'
          });
          return _this.div({
            "class": 'footer'
          });
        };
      })(this));
    };

    function AtomRunnerView(title) {
      AtomRunnerView.__super__.constructor.apply(this, arguments);
      this._output = this.find('.output');
      this._footer = this.find('.footer');
      this.setTitle(title);
    }

    AtomRunnerView.prototype.serialize = function() {
      return {
        deserializer: 'AtomRunnerView',
        title: this.title,
        output: this._output.html(),
        footer: this._footer.html()
      };
    };

    AtomRunnerView.prototype.getTitle = function() {
      return "Atom Runner: " + this.title;
    };

    AtomRunnerView.prototype.setTitle = function(title) {
      this.title = title;
      return this.find('h1').html(this.getTitle());
    };

    AtomRunnerView.prototype.clear = function() {
      this._output.html('');
      return this._footer.html('');
    };

    AtomRunnerView.prototype.append = function(text, className) {
      var node, span;
      span = document.createElement('span');
      node = document.createTextNode(text);
      span.appendChild(node);
      span.innerHTML = new AnsiToHtml().toHtml(span.innerHTML);
      span.className = className || 'stdout';
      return this._output.append(span);
    };

    AtomRunnerView.prototype.appendFooter = function(text) {
      return this._footer.html(this._footer.html() + text);
    };

    AtomRunnerView.prototype.footer = function(text) {
      return this._footer.html(text);
    };

    return AtomRunnerView;

  })(ScrollView);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9hdG9tLXJ1bm5lci9saWIvYXRvbS1ydW5uZXItdmlldy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLHNDQUFBO0lBQUE7OztFQUFDLGFBQWMsT0FBQSxDQUFRLHNCQUFSOztFQUNmLFVBQUEsR0FBYSxPQUFBLENBQVEsY0FBUjs7RUFFYixNQUFNLENBQUMsT0FBUCxHQUNNOzs7SUFDSixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQW5CLENBQXVCLGNBQXZCOztJQUVBLGNBQUMsQ0FBQSxXQUFELEdBQWMsU0FBQyxHQUFEO0FBQ1osVUFBQTtNQURjLG1CQUFPLHFCQUFRO01BQzdCLElBQUEsR0FBVyxJQUFBLGNBQUEsQ0FBZSxLQUFmO01BQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFiLENBQWtCLE1BQWxCO01BQ0EsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFiLENBQWtCLE1BQWxCO2FBQ0E7SUFKWTs7SUFNZCxjQUFDLENBQUEsT0FBRCxHQUFVLFNBQUE7YUFDUixJQUFDLENBQUEsR0FBRCxDQUFLO1FBQUEsQ0FBQSxLQUFBLENBQUEsRUFBTyxhQUFQO1FBQXNCLFFBQUEsRUFBVSxDQUFDLENBQWpDO09BQUwsRUFBeUMsQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFBO1VBQ3ZDLEtBQUMsQ0FBQSxFQUFELENBQUksYUFBSjtVQUNBLEtBQUMsQ0FBQSxHQUFELENBQUs7WUFBQSxDQUFBLEtBQUEsQ0FBQSxFQUFPLFFBQVA7V0FBTDtpQkFDQSxLQUFDLENBQUEsR0FBRCxDQUFLO1lBQUEsQ0FBQSxLQUFBLENBQUEsRUFBTyxRQUFQO1dBQUw7UUFIdUM7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXpDO0lBRFE7O0lBTUcsd0JBQUMsS0FBRDtNQUNYLGlEQUFBLFNBQUE7TUFFQSxJQUFDLENBQUEsT0FBRCxHQUFXLElBQUMsQ0FBQSxJQUFELENBQU0sU0FBTjtNQUNYLElBQUMsQ0FBQSxPQUFELEdBQVcsSUFBQyxDQUFBLElBQUQsQ0FBTSxTQUFOO01BQ1gsSUFBQyxDQUFBLFFBQUQsQ0FBVSxLQUFWO0lBTFc7OzZCQU9iLFNBQUEsR0FBVyxTQUFBO2FBQ1Q7UUFBQSxZQUFBLEVBQWMsZ0JBQWQ7UUFDQSxLQUFBLEVBQU8sSUFBQyxDQUFBLEtBRFI7UUFFQSxNQUFBLEVBQVEsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQUEsQ0FGUjtRQUdBLE1BQUEsRUFBUSxJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBQSxDQUhSOztJQURTOzs2QkFNWCxRQUFBLEdBQVUsU0FBQTthQUNSLGVBQUEsR0FBZ0IsSUFBQyxDQUFBO0lBRFQ7OzZCQUdWLFFBQUEsR0FBVSxTQUFDLEtBQUQ7TUFDUixJQUFDLENBQUEsS0FBRCxHQUFTO2FBQ1QsSUFBQyxDQUFBLElBQUQsQ0FBTSxJQUFOLENBQVcsQ0FBQyxJQUFaLENBQWlCLElBQUMsQ0FBQSxRQUFELENBQUEsQ0FBakI7SUFGUTs7NkJBSVYsS0FBQSxHQUFPLFNBQUE7TUFDTCxJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyxFQUFkO2FBQ0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMsRUFBZDtJQUZLOzs2QkFJUCxNQUFBLEdBQVEsU0FBQyxJQUFELEVBQU8sU0FBUDtBQUNOLFVBQUE7TUFBQSxJQUFBLEdBQU8sUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkI7TUFDUCxJQUFBLEdBQU8sUUFBUSxDQUFDLGNBQVQsQ0FBd0IsSUFBeEI7TUFDUCxJQUFJLENBQUMsV0FBTCxDQUFpQixJQUFqQjtNQUNBLElBQUksQ0FBQyxTQUFMLEdBQXFCLElBQUEsVUFBQSxDQUFBLENBQVksQ0FBQyxNQUFiLENBQW9CLElBQUksQ0FBQyxTQUF6QjtNQUNyQixJQUFJLENBQUMsU0FBTCxHQUFpQixTQUFBLElBQWE7YUFDOUIsSUFBQyxDQUFBLE9BQU8sQ0FBQyxNQUFULENBQWdCLElBQWhCO0lBTk07OzZCQVFSLFlBQUEsR0FBYyxTQUFDLElBQUQ7YUFDWixJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyxJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBQSxDQUFBLEdBQWtCLElBQWhDO0lBRFk7OzZCQUdkLE1BQUEsR0FBUSxTQUFDLElBQUQ7YUFDTixJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyxJQUFkO0lBRE07Ozs7S0FsRG1CO0FBSjdCIiwic291cmNlc0NvbnRlbnQiOlsie1Njcm9sbFZpZXd9ID0gcmVxdWlyZSAnYXRvbS1zcGFjZS1wZW4tdmlld3MnXG5BbnNpVG9IdG1sID0gcmVxdWlyZSAnYW5zaS10by1odG1sJ1xuXG5tb2R1bGUuZXhwb3J0cyA9XG5jbGFzcyBBdG9tUnVubmVyVmlldyBleHRlbmRzIFNjcm9sbFZpZXdcbiAgYXRvbS5kZXNlcmlhbGl6ZXJzLmFkZCh0aGlzKVxuXG4gIEBkZXNlcmlhbGl6ZTogKHt0aXRsZSwgb3V0cHV0LCBmb290ZXJ9KSAtPlxuICAgIHZpZXcgPSBuZXcgQXRvbVJ1bm5lclZpZXcodGl0bGUpXG4gICAgdmlldy5fb3V0cHV0Lmh0bWwob3V0cHV0KVxuICAgIHZpZXcuX2Zvb3Rlci5odG1sKGZvb3RlcilcbiAgICB2aWV3XG5cbiAgQGNvbnRlbnQ6IC0+XG4gICAgQGRpdiBjbGFzczogJ2F0b20tcnVubmVyJywgdGFiaW5kZXg6IC0xLCA9PlxuICAgICAgQGgxICdBdG9tIFJ1bm5lcidcbiAgICAgIEBwcmUgY2xhc3M6ICdvdXRwdXQnXG4gICAgICBAZGl2IGNsYXNzOiAnZm9vdGVyJ1xuXG4gIGNvbnN0cnVjdG9yOiAodGl0bGUpIC0+XG4gICAgc3VwZXJcblxuICAgIEBfb3V0cHV0ID0gQGZpbmQoJy5vdXRwdXQnKVxuICAgIEBfZm9vdGVyID0gQGZpbmQoJy5mb290ZXInKVxuICAgIEBzZXRUaXRsZSh0aXRsZSlcblxuICBzZXJpYWxpemU6IC0+XG4gICAgZGVzZXJpYWxpemVyOiAnQXRvbVJ1bm5lclZpZXcnXG4gICAgdGl0bGU6IEB0aXRsZVxuICAgIG91dHB1dDogQF9vdXRwdXQuaHRtbCgpXG4gICAgZm9vdGVyOiBAX2Zvb3Rlci5odG1sKClcblxuICBnZXRUaXRsZTogLT5cbiAgICBcIkF0b20gUnVubmVyOiAje0B0aXRsZX1cIlxuXG4gIHNldFRpdGxlOiAodGl0bGUpIC0+XG4gICAgQHRpdGxlID0gdGl0bGVcbiAgICBAZmluZCgnaDEnKS5odG1sKEBnZXRUaXRsZSgpKVxuXG4gIGNsZWFyOiAtPlxuICAgIEBfb3V0cHV0Lmh0bWwoJycpXG4gICAgQF9mb290ZXIuaHRtbCgnJylcblxuICBhcHBlbmQ6ICh0ZXh0LCBjbGFzc05hbWUpIC0+XG4gICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KVxuICAgIHNwYW4uYXBwZW5kQ2hpbGQobm9kZSlcbiAgICBzcGFuLmlubmVySFRNTCA9IG5ldyBBbnNpVG9IdG1sKCkudG9IdG1sKHNwYW4uaW5uZXJIVE1MKVxuICAgIHNwYW4uY2xhc3NOYW1lID0gY2xhc3NOYW1lIHx8ICdzdGRvdXQnXG4gICAgQF9vdXRwdXQuYXBwZW5kKHNwYW4pXG4gIFxuICBhcHBlbmRGb290ZXI6ICh0ZXh0KSAtPlxuICAgIEBfZm9vdGVyLmh0bWwoQF9mb290ZXIuaHRtbCgpICsgdGV4dClcblxuICBmb290ZXI6ICh0ZXh0KSAtPlxuICAgIEBfZm9vdGVyLmh0bWwodGV4dClcbiJdfQ==
