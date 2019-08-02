(function() {
  var Toc;

  Toc = require('./Toc');

  module.exports = {
    activate: function(state) {
      this.toc = new Toc(atom.workspace.getActivePaneItem());
      atom.commands.add('atom-workspace', {
        'markdown-toc:create': (function(_this) {
          return function() {
            return _this.toc.create();
          };
        })(this)
      });
      atom.commands.add('atom-workspace', {
        'markdown-toc:update': (function(_this) {
          return function() {
            return _this.toc.update();
          };
        })(this)
      });
      return atom.commands.add('atom-workspace', {
        'markdown-toc:delete': (function(_this) {
          return function() {
            return _this.toc["delete"]();
          };
        })(this)
      });
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9tYXJrZG93bi10b2MvbGliL21hcmtkb3duLXRvYy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLEdBQUEsR0FBTSxPQUFBLENBQVEsT0FBUjs7RUFFTixNQUFNLENBQUMsT0FBUCxHQUVFO0lBQUEsUUFBQSxFQUFVLFNBQUMsS0FBRDtNQUNSLElBQUMsQ0FBQSxHQUFELEdBQU8sSUFBSSxHQUFKLENBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBZixDQUFBLENBQVI7TUFFUCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQWQsQ0FBa0IsZ0JBQWxCLEVBQW9DO1FBQUEscUJBQUEsRUFBdUIsQ0FBQSxTQUFBLEtBQUE7aUJBQUEsU0FBQTttQkFBRyxLQUFDLENBQUEsR0FBRyxDQUFDLE1BQUwsQ0FBQTtVQUFIO1FBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUF2QjtPQUFwQztNQUNBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBZCxDQUFrQixnQkFBbEIsRUFBb0M7UUFBQSxxQkFBQSxFQUF1QixDQUFBLFNBQUEsS0FBQTtpQkFBQSxTQUFBO21CQUFHLEtBQUMsQ0FBQSxHQUFHLENBQUMsTUFBTCxDQUFBO1VBQUg7UUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXZCO09BQXBDO2FBQ0EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFkLENBQWtCLGdCQUFsQixFQUFvQztRQUFBLHFCQUFBLEVBQXVCLENBQUEsU0FBQSxLQUFBO2lCQUFBLFNBQUE7bUJBQUcsS0FBQyxDQUFBLEdBQUcsRUFBQyxNQUFELEVBQUosQ0FBQTtVQUFIO1FBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUF2QjtPQUFwQztJQUxRLENBQVY7O0FBSkYiLCJzb3VyY2VzQ29udGVudCI6WyJUb2MgPSByZXF1aXJlICcuL1RvYydcblxubW9kdWxlLmV4cG9ydHMgPVxuXG4gIGFjdGl2YXRlOiAoc3RhdGUpIC0+XG4gICAgQHRvYyA9IG5ldyBUb2MoYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlUGFuZUl0ZW0oKSlcblxuICAgIGF0b20uY29tbWFuZHMuYWRkICdhdG9tLXdvcmtzcGFjZScsICdtYXJrZG93bi10b2M6Y3JlYXRlJzogPT4gQHRvYy5jcmVhdGUoKVxuICAgIGF0b20uY29tbWFuZHMuYWRkICdhdG9tLXdvcmtzcGFjZScsICdtYXJrZG93bi10b2M6dXBkYXRlJzogPT4gQHRvYy51cGRhdGUoKVxuICAgIGF0b20uY29tbWFuZHMuYWRkICdhdG9tLXdvcmtzcGFjZScsICdtYXJrZG93bi10b2M6ZGVsZXRlJzogPT4gQHRvYy5kZWxldGUoKVxuXG4gICMgZGVhY3RpdmF0ZTogLT5cbiAgIyAgIEB0b2MuZGVzdHJveSgpXG4iXX0=
