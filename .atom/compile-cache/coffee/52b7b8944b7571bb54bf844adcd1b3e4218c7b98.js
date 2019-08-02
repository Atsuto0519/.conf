(function() {
  var getEditor, getLinesToJump;

  getEditor = function() {
    return atom.workspace.getActiveTextEditor();
  };

  getLinesToJump = function() {
    return atom.config.get('line-jumper.numberOfLines');
  };

  module.exports = {
    config: {
      numberOfLines: {
        type: 'integer',
        "default": 10,
        minimum: 1
      }
    },
    activate: function() {
      atom.commands.add('atom-workspace', 'line-jumper:move-up', function() {
        var ref;
        return (ref = getEditor()) != null ? ref.moveUp(getLinesToJump()) : void 0;
      });
      atom.commands.add('atom-workspace', 'line-jumper:move-down', function() {
        var ref;
        return (ref = getEditor()) != null ? ref.moveDown(getLinesToJump()) : void 0;
      });
      atom.commands.add('atom-workspace', 'line-jumper:select-up', function() {
        var ref;
        return (ref = getEditor()) != null ? ref.selectUp(getLinesToJump()) : void 0;
      });
      return atom.commands.add('atom-workspace', 'line-jumper:select-down', function() {
        var ref;
        return (ref = getEditor()) != null ? ref.selectDown(getLinesToJump()) : void 0;
      });
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9saW5lLWp1bXBlci9saWIvbGluZS1qdW1wZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7RUFBQSxTQUFBLEdBQVksU0FBQTtXQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQWYsQ0FBQTtFQURVOztFQUdaLGNBQUEsR0FBaUIsU0FBQTtXQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUFnQiwyQkFBaEI7RUFEZTs7RUFHakIsTUFBTSxDQUFDLE9BQVAsR0FDRTtJQUFBLE1BQUEsRUFDRTtNQUFBLGFBQUEsRUFDRTtRQUFBLElBQUEsRUFBTSxTQUFOO1FBQ0EsQ0FBQSxPQUFBLENBQUEsRUFBUyxFQURUO1FBRUEsT0FBQSxFQUFTLENBRlQ7T0FERjtLQURGO0lBTUEsUUFBQSxFQUFVLFNBQUE7TUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQWQsQ0FBa0IsZ0JBQWxCLEVBQW9DLHFCQUFwQyxFQUEyRCxTQUFBO0FBQ3pELFlBQUE7Z0RBQVcsQ0FBRSxNQUFiLENBQW9CLGNBQUEsQ0FBQSxDQUFwQjtNQUR5RCxDQUEzRDtNQUdBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBZCxDQUFrQixnQkFBbEIsRUFBb0MsdUJBQXBDLEVBQTZELFNBQUE7QUFDM0QsWUFBQTtnREFBVyxDQUFFLFFBQWIsQ0FBc0IsY0FBQSxDQUFBLENBQXRCO01BRDJELENBQTdEO01BR0EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFkLENBQWtCLGdCQUFsQixFQUFvQyx1QkFBcEMsRUFBNkQsU0FBQTtBQUMzRCxZQUFBO2dEQUFXLENBQUUsUUFBYixDQUFzQixjQUFBLENBQUEsQ0FBdEI7TUFEMkQsQ0FBN0Q7YUFHQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQWQsQ0FBa0IsZ0JBQWxCLEVBQW9DLHlCQUFwQyxFQUErRCxTQUFBO0FBQzdELFlBQUE7Z0RBQVcsQ0FBRSxVQUFiLENBQXdCLGNBQUEsQ0FBQSxDQUF4QjtNQUQ2RCxDQUEvRDtJQVZRLENBTlY7O0FBUEYiLCJzb3VyY2VzQ29udGVudCI6WyJnZXRFZGl0b3IgPSAtPlxuICBhdG9tLndvcmtzcGFjZS5nZXRBY3RpdmVUZXh0RWRpdG9yKClcblxuZ2V0TGluZXNUb0p1bXAgPSAtPlxuICBhdG9tLmNvbmZpZy5nZXQoJ2xpbmUtanVtcGVyLm51bWJlck9mTGluZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9XG4gIGNvbmZpZzpcbiAgICBudW1iZXJPZkxpbmVzOlxuICAgICAgdHlwZTogJ2ludGVnZXInXG4gICAgICBkZWZhdWx0OiAxMFxuICAgICAgbWluaW11bTogMVxuXG4gIGFjdGl2YXRlOiAtPlxuICAgIGF0b20uY29tbWFuZHMuYWRkICdhdG9tLXdvcmtzcGFjZScsICdsaW5lLWp1bXBlcjptb3ZlLXVwJywgLT5cbiAgICAgIGdldEVkaXRvcigpPy5tb3ZlVXAoZ2V0TGluZXNUb0p1bXAoKSlcblxuICAgIGF0b20uY29tbWFuZHMuYWRkICdhdG9tLXdvcmtzcGFjZScsICdsaW5lLWp1bXBlcjptb3ZlLWRvd24nLCAtPlxuICAgICAgZ2V0RWRpdG9yKCk/Lm1vdmVEb3duKGdldExpbmVzVG9KdW1wKCkpXG5cbiAgICBhdG9tLmNvbW1hbmRzLmFkZCAnYXRvbS13b3Jrc3BhY2UnLCAnbGluZS1qdW1wZXI6c2VsZWN0LXVwJywgLT5cbiAgICAgIGdldEVkaXRvcigpPy5zZWxlY3RVcChnZXRMaW5lc1RvSnVtcCgpKVxuXG4gICAgYXRvbS5jb21tYW5kcy5hZGQgJ2F0b20td29ya3NwYWNlJywgJ2xpbmUtanVtcGVyOnNlbGVjdC1kb3duJywgLT5cbiAgICAgIGdldEVkaXRvcigpPy5zZWxlY3REb3duKGdldExpbmVzVG9KdW1wKCkpXG4iXX0=
