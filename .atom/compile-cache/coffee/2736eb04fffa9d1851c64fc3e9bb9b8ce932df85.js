(function() {
  var CharacterMarker, CompositeDisposable;

  CompositeDisposable = require('atom').CompositeDisposable;

  CharacterMarker = require('./character-marker');

  module.exports = {
    characterMarker: null,
    name: 'show-ideographic-space',
    activate: function(state) {
      var charMap;
      charMap = {
        '　': {
          type: 'highlight',
          "class": 'ideographic-space'
        }
      };
      this.characterMarker = new CharacterMarker(charMap);
      this.subscriptions = new CompositeDisposable;
      return this.subscriptions.add(atom.workspace.observeTextEditors((function(_this) {
        return function(editor) {
          if (_this.characterMarker.checkText(editor.getText())) {
            _this.characterMarker.handleMark(editor, _this.name);
          }
          return _this.subscriptions.add(editor.onDidInsertText(function(event) {
            if (_this.characterMarker.checkText(event.text)) {
              return _this.characterMarker.handleMark(editor, _this.name);
            }
          }));
        };
      })(this)));
    },
    deactivate: function() {
      var editor, i, len, ref;
      ref = atom.workspace.getTextEditors;
      for (i = 0, len = ref.length; i < len; i++) {
        editor = ref[i];
        this.characterMarker(editor, this.name);
      }
      this.characterMarker.destroy();
      return this.subscriptions.dispose();
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9zaG93LWlkZW9ncmFwaGljLXNwYWNlL2xpYi9zaG93LWlkZW9ncmFwaGljLXNwYWNlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7O0VBQUMsc0JBQXVCLE9BQUEsQ0FBUSxNQUFSOztFQUV4QixlQUFBLEdBQWtCLE9BQUEsQ0FBUSxvQkFBUjs7RUFFbEIsTUFBTSxDQUFDLE9BQVAsR0FDRTtJQUFBLGVBQUEsRUFBaUIsSUFBakI7SUFDQSxJQUFBLEVBQU0sd0JBRE47SUFHQSxRQUFBLEVBQVUsU0FBQyxLQUFEO0FBQ1IsVUFBQTtNQUFBLE9BQUEsR0FBVTtRQUNSLEdBQUEsRUFDRTtVQUFBLElBQUEsRUFBTSxXQUFOO1VBQ0EsQ0FBQSxLQUFBLENBQUEsRUFBTyxtQkFEUDtTQUZNOztNQUtWLElBQUMsQ0FBQSxlQUFELEdBQW1CLElBQUksZUFBSixDQUFvQixPQUFwQjtNQUNuQixJQUFDLENBQUEsYUFBRCxHQUFpQixJQUFJO2FBRXJCLElBQUMsQ0FBQSxhQUFhLENBQUMsR0FBZixDQUFtQixJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFmLENBQWtDLENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQyxNQUFEO1VBQ25ELElBQUcsS0FBQyxDQUFBLGVBQWUsQ0FBQyxTQUFqQixDQUEyQixNQUFNLENBQUMsT0FBUCxDQUFBLENBQTNCLENBQUg7WUFDRSxLQUFDLENBQUEsZUFBZSxDQUFDLFVBQWpCLENBQTRCLE1BQTVCLEVBQW9DLEtBQUMsQ0FBQSxJQUFyQyxFQURGOztpQkFFQSxLQUFDLENBQUEsYUFBYSxDQUFDLEdBQWYsQ0FBbUIsTUFBTSxDQUFDLGVBQVAsQ0FBdUIsU0FBQyxLQUFEO1lBQ3hDLElBQUcsS0FBQyxDQUFBLGVBQWUsQ0FBQyxTQUFqQixDQUEyQixLQUFLLENBQUMsSUFBakMsQ0FBSDtxQkFDRSxLQUFDLENBQUEsZUFBZSxDQUFDLFVBQWpCLENBQTRCLE1BQTVCLEVBQW9DLEtBQUMsQ0FBQSxJQUFyQyxFQURGOztVQUR3QyxDQUF2QixDQUFuQjtRQUhtRDtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBbEMsQ0FBbkI7SUFUUSxDQUhWO0lBbUJBLFVBQUEsRUFBWSxTQUFBO0FBQ1YsVUFBQTtBQUFBO0FBQUEsV0FBQSxxQ0FBQTs7UUFDRSxJQUFDLENBQUEsZUFBRCxDQUFpQixNQUFqQixFQUF5QixJQUFDLENBQUEsSUFBMUI7QUFERjtNQUVBLElBQUMsQ0FBQSxlQUFlLENBQUMsT0FBakIsQ0FBQTthQUNBLElBQUMsQ0FBQSxhQUFhLENBQUMsT0FBZixDQUFBO0lBSlUsQ0FuQlo7O0FBTEYiLCJzb3VyY2VzQ29udGVudCI6WyJ7Q29tcG9zaXRlRGlzcG9zYWJsZX0gPSByZXF1aXJlICdhdG9tJ1xuXG5DaGFyYWN0ZXJNYXJrZXIgPSByZXF1aXJlICcuL2NoYXJhY3Rlci1tYXJrZXInXG5cbm1vZHVsZS5leHBvcnRzID1cbiAgY2hhcmFjdGVyTWFya2VyOiBudWxsXG4gIG5hbWU6ICdzaG93LWlkZW9ncmFwaGljLXNwYWNlJ1xuXG4gIGFjdGl2YXRlOiAoc3RhdGUpIC0+XG4gICAgY2hhck1hcCA9IHtcbiAgICAgICfjgIAnOlxuICAgICAgICB0eXBlOiAnaGlnaGxpZ2h0J1xuICAgICAgICBjbGFzczogJ2lkZW9ncmFwaGljLXNwYWNlJ1xuICAgIH1cbiAgICBAY2hhcmFjdGVyTWFya2VyID0gbmV3IENoYXJhY3Rlck1hcmtlciBjaGFyTWFwXG4gICAgQHN1YnNjcmlwdGlvbnMgPSBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZVxuXG4gICAgQHN1YnNjcmlwdGlvbnMuYWRkIGF0b20ud29ya3NwYWNlLm9ic2VydmVUZXh0RWRpdG9ycyAoZWRpdG9yKSA9PlxuICAgICAgaWYgQGNoYXJhY3Rlck1hcmtlci5jaGVja1RleHQoZWRpdG9yLmdldFRleHQoKSlcbiAgICAgICAgQGNoYXJhY3Rlck1hcmtlci5oYW5kbGVNYXJrKGVkaXRvciwgQG5hbWUpXG4gICAgICBAc3Vic2NyaXB0aW9ucy5hZGQgZWRpdG9yLm9uRGlkSW5zZXJ0VGV4dCAoZXZlbnQpID0+XG4gICAgICAgIGlmIEBjaGFyYWN0ZXJNYXJrZXIuY2hlY2tUZXh0KGV2ZW50LnRleHQpXG4gICAgICAgICAgQGNoYXJhY3Rlck1hcmtlci5oYW5kbGVNYXJrKGVkaXRvciwgQG5hbWUpXG5cbiAgZGVhY3RpdmF0ZTogLT5cbiAgICBmb3IgZWRpdG9yIGluIGF0b20ud29ya3NwYWNlLmdldFRleHRFZGl0b3JzXG4gICAgICBAY2hhcmFjdGVyTWFya2VyIGVkaXRvciwgQG5hbWVcbiAgICBAY2hhcmFjdGVyTWFya2VyLmRlc3Ryb3koKVxuICAgIEBzdWJzY3JpcHRpb25zLmRpc3Bvc2UoKVxuIl19
