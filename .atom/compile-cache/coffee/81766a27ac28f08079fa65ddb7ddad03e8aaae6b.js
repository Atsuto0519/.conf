(function() {
  var packagesToTest;

  packagesToTest = {
    Python: {
      name: 'language-python',
      file: 'test.py'
    }
  };

  describe('Python autocompletions', function() {
    var editor, getCompletions, provider, ref;
    ref = [], editor = ref[0], provider = ref[1];
    getCompletions = function() {
      var cursor, end, prefix, request, start;
      cursor = editor.getLastCursor();
      start = cursor.getBeginningOfCurrentWordBufferPosition();
      end = cursor.getBufferPosition();
      prefix = editor.getTextInRange([start, end]);
      request = {
        editor: editor,
        bufferPosition: end,
        scopeDescriptor: cursor.getScopeDescriptor(),
        prefix: prefix
      };
      return provider.getSuggestions(request);
    };
    beforeEach(function() {
      waitsForPromise(function() {
        return atom.packages.activatePackage('language-python');
      });
      waitsForPromise(function() {
        return atom.workspace.open('test.py');
      });
      runs(function() {
        editor = atom.workspace.getActiveTextEditor();
        editor.setGrammar(atom.grammars.grammarsByScopeName['source.python']);
        return atom.packages.loadPackage('autocomplete-python').activationHooks = [];
      });
      waitsForPromise(function() {
        return atom.packages.activatePackage('autocomplete-python');
      });
      runs(function() {
        return atom.packages.getActivePackage('autocomplete-python').mainModule.load();
      });
      return runs(function() {
        return provider = atom.packages.getActivePackage('autocomplete-python').mainModule.getProvider();
      });
    });
    it('autocompletes builtins', function() {
      editor.setText('isinstanc');
      editor.setCursorBufferPosition([1, 0]);
      return waitsForPromise(function() {
        return getCompletions().then(function(completions) {
          var completion, i, len;
          for (i = 0, len = completions.length; i < len; i++) {
            completion = completions[i];
            expect(completion.text.length).toBeGreaterThan(0);
            expect(completion.text).toBe('isinstance');
          }
          return expect(completions.length).toBe(1);
        });
      });
    });
    it('autocompletes python keywords', function() {
      var completion, completions, i, len;
      editor.setText('impo');
      editor.setCursorBufferPosition([1, 0]);
      completions = getCompletions();
      for (i = 0, len = completions.length; i < len; i++) {
        completion = completions[i];
        if (completion.type === 'keyword') {
          expect(completion.text).toBe('import');
        }
        expect(completion.text.length).toBeGreaterThan(0);
      }
      return expect(completions.length).toBe(3);
    });
    return it('autocompletes defined functions', function() {
      editor.setText("def hello_world():\n  return True\nhell");
      editor.setCursorBufferPosition([3, 0]);
      return waitsForPromise(function() {
        return getCompletions().then(function(completions) {
          expect(completions[0].text).toBe('hello_world');
          return expect(completions.length).toBe(1);
        });
      });
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9hdXRvY29tcGxldGUtcHl0aG9uL3NwZWMvcHJvdmlkZXItc3BlYy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLGNBQUEsR0FDRTtJQUFBLE1BQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxpQkFBTjtNQUNBLElBQUEsRUFBTSxTQUROO0tBREY7OztFQUlGLFFBQUEsQ0FBUyx3QkFBVCxFQUFtQyxTQUFBO0FBQ2pDLFFBQUE7SUFBQSxNQUFxQixFQUFyQixFQUFDLGVBQUQsRUFBUztJQUVULGNBQUEsR0FBaUIsU0FBQTtBQUNmLFVBQUE7TUFBQSxNQUFBLEdBQVMsTUFBTSxDQUFDLGFBQVAsQ0FBQTtNQUNULEtBQUEsR0FBUSxNQUFNLENBQUMsdUNBQVAsQ0FBQTtNQUNSLEdBQUEsR0FBTSxNQUFNLENBQUMsaUJBQVAsQ0FBQTtNQUNOLE1BQUEsR0FBUyxNQUFNLENBQUMsY0FBUCxDQUFzQixDQUFDLEtBQUQsRUFBUSxHQUFSLENBQXRCO01BQ1QsT0FBQSxHQUNFO1FBQUEsTUFBQSxFQUFRLE1BQVI7UUFDQSxjQUFBLEVBQWdCLEdBRGhCO1FBRUEsZUFBQSxFQUFpQixNQUFNLENBQUMsa0JBQVAsQ0FBQSxDQUZqQjtRQUdBLE1BQUEsRUFBUSxNQUhSOzthQUlGLFFBQVEsQ0FBQyxjQUFULENBQXdCLE9BQXhCO0lBVmU7SUFZakIsVUFBQSxDQUFXLFNBQUE7TUFDVCxlQUFBLENBQWdCLFNBQUE7ZUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWQsQ0FBOEIsaUJBQTlCO01BQUgsQ0FBaEI7TUFDQSxlQUFBLENBQWdCLFNBQUE7ZUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQWYsQ0FBb0IsU0FBcEI7TUFBSCxDQUFoQjtNQUNBLElBQUEsQ0FBSyxTQUFBO1FBQ0gsTUFBQSxHQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQWYsQ0FBQTtRQUNULE1BQU0sQ0FBQyxVQUFQLENBQWtCLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW9CLENBQUEsZUFBQSxDQUFwRDtlQUNBLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBZCxDQUEwQixxQkFBMUIsQ0FBZ0QsQ0FBQyxlQUFqRCxHQUFtRTtNQUhoRSxDQUFMO01BSUEsZUFBQSxDQUFnQixTQUFBO2VBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFkLENBQThCLHFCQUE5QjtNQUFILENBQWhCO01BQ0EsSUFBQSxDQUFLLFNBQUE7ZUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFkLENBQStCLHFCQUEvQixDQUFxRCxDQUFDLFVBQVUsQ0FBQyxJQUFqRSxDQUFBO01BREcsQ0FBTDthQUVBLElBQUEsQ0FBSyxTQUFBO2VBQUcsUUFBQSxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWQsQ0FDakIscUJBRGlCLENBQ0ssQ0FBQyxVQUFVLENBQUMsV0FEakIsQ0FBQTtNQUFkLENBQUw7SUFWUyxDQUFYO0lBYUEsRUFBQSxDQUFHLHdCQUFILEVBQTZCLFNBQUE7TUFDM0IsTUFBTSxDQUFDLE9BQVAsQ0FBZSxXQUFmO01BQ0EsTUFBTSxDQUFDLHVCQUFQLENBQStCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBL0I7YUFDQSxlQUFBLENBQWdCLFNBQUE7ZUFDZCxjQUFBLENBQUEsQ0FBZ0IsQ0FBQyxJQUFqQixDQUFzQixTQUFDLFdBQUQ7QUFDcEIsY0FBQTtBQUFBLGVBQUEsNkNBQUE7O1lBQ0UsTUFBQSxDQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBdkIsQ0FBOEIsQ0FBQyxlQUEvQixDQUErQyxDQUEvQztZQUNBLE1BQUEsQ0FBTyxVQUFVLENBQUMsSUFBbEIsQ0FBdUIsQ0FBQyxJQUF4QixDQUE2QixZQUE3QjtBQUZGO2lCQUdBLE1BQUEsQ0FBTyxXQUFXLENBQUMsTUFBbkIsQ0FBMEIsQ0FBQyxJQUEzQixDQUFnQyxDQUFoQztRQUpvQixDQUF0QjtNQURjLENBQWhCO0lBSDJCLENBQTdCO0lBVUEsRUFBQSxDQUFHLCtCQUFILEVBQW9DLFNBQUE7QUFDbEMsVUFBQTtNQUFBLE1BQU0sQ0FBQyxPQUFQLENBQWUsTUFBZjtNQUNBLE1BQU0sQ0FBQyx1QkFBUCxDQUErQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQS9CO01BQ0EsV0FBQSxHQUFjLGNBQUEsQ0FBQTtBQUNkLFdBQUEsNkNBQUE7O1FBQ0UsSUFBRyxVQUFVLENBQUMsSUFBWCxLQUFtQixTQUF0QjtVQUNFLE1BQUEsQ0FBTyxVQUFVLENBQUMsSUFBbEIsQ0FBdUIsQ0FBQyxJQUF4QixDQUE2QixRQUE3QixFQURGOztRQUVBLE1BQUEsQ0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQXZCLENBQThCLENBQUMsZUFBL0IsQ0FBK0MsQ0FBL0M7QUFIRjthQUlBLE1BQUEsQ0FBTyxXQUFXLENBQUMsTUFBbkIsQ0FBMEIsQ0FBQyxJQUEzQixDQUFnQyxDQUFoQztJQVJrQyxDQUFwQztXQVVBLEVBQUEsQ0FBRyxpQ0FBSCxFQUFzQyxTQUFBO01BQ3BDLE1BQU0sQ0FBQyxPQUFQLENBQWUseUNBQWY7TUFLQSxNQUFNLENBQUMsdUJBQVAsQ0FBK0IsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUEvQjthQUNBLGVBQUEsQ0FBZ0IsU0FBQTtlQUNkLGNBQUEsQ0FBQSxDQUFnQixDQUFDLElBQWpCLENBQXNCLFNBQUMsV0FBRDtVQUNwQixNQUFBLENBQU8sV0FBWSxDQUFBLENBQUEsQ0FBRSxDQUFDLElBQXRCLENBQTJCLENBQUMsSUFBNUIsQ0FBaUMsYUFBakM7aUJBQ0EsTUFBQSxDQUFPLFdBQVcsQ0FBQyxNQUFuQixDQUEwQixDQUFDLElBQTNCLENBQWdDLENBQWhDO1FBRm9CLENBQXRCO01BRGMsQ0FBaEI7SUFQb0MsQ0FBdEM7RUFoRGlDLENBQW5DO0FBTEEiLCJzb3VyY2VzQ29udGVudCI6WyJwYWNrYWdlc1RvVGVzdCA9XG4gIFB5dGhvbjpcbiAgICBuYW1lOiAnbGFuZ3VhZ2UtcHl0aG9uJ1xuICAgIGZpbGU6ICd0ZXN0LnB5J1xuXG5kZXNjcmliZSAnUHl0aG9uIGF1dG9jb21wbGV0aW9ucycsIC0+XG4gIFtlZGl0b3IsIHByb3ZpZGVyXSA9IFtdXG5cbiAgZ2V0Q29tcGxldGlvbnMgPSAtPlxuICAgIGN1cnNvciA9IGVkaXRvci5nZXRMYXN0Q3Vyc29yKClcbiAgICBzdGFydCA9IGN1cnNvci5nZXRCZWdpbm5pbmdPZkN1cnJlbnRXb3JkQnVmZmVyUG9zaXRpb24oKVxuICAgIGVuZCA9IGN1cnNvci5nZXRCdWZmZXJQb3NpdGlvbigpXG4gICAgcHJlZml4ID0gZWRpdG9yLmdldFRleHRJblJhbmdlKFtzdGFydCwgZW5kXSlcbiAgICByZXF1ZXN0ID1cbiAgICAgIGVkaXRvcjogZWRpdG9yXG4gICAgICBidWZmZXJQb3NpdGlvbjogZW5kXG4gICAgICBzY29wZURlc2NyaXB0b3I6IGN1cnNvci5nZXRTY29wZURlc2NyaXB0b3IoKVxuICAgICAgcHJlZml4OiBwcmVmaXhcbiAgICBwcm92aWRlci5nZXRTdWdnZXN0aW9ucyhyZXF1ZXN0KVxuXG4gIGJlZm9yZUVhY2ggLT5cbiAgICB3YWl0c0ZvclByb21pc2UgLT4gYXRvbS5wYWNrYWdlcy5hY3RpdmF0ZVBhY2thZ2UoJ2xhbmd1YWdlLXB5dGhvbicpXG4gICAgd2FpdHNGb3JQcm9taXNlIC0+IGF0b20ud29ya3NwYWNlLm9wZW4oJ3Rlc3QucHknKVxuICAgIHJ1bnMgLT5cbiAgICAgIGVkaXRvciA9IGF0b20ud29ya3NwYWNlLmdldEFjdGl2ZVRleHRFZGl0b3IoKVxuICAgICAgZWRpdG9yLnNldEdyYW1tYXIoYXRvbS5ncmFtbWFycy5ncmFtbWFyc0J5U2NvcGVOYW1lWydzb3VyY2UucHl0aG9uJ10pXG4gICAgICBhdG9tLnBhY2thZ2VzLmxvYWRQYWNrYWdlKCdhdXRvY29tcGxldGUtcHl0aG9uJykuYWN0aXZhdGlvbkhvb2tzID0gW11cbiAgICB3YWl0c0ZvclByb21pc2UgLT4gYXRvbS5wYWNrYWdlcy5hY3RpdmF0ZVBhY2thZ2UoJ2F1dG9jb21wbGV0ZS1weXRob24nKVxuICAgIHJ1bnMgLT5cbiAgICAgIGF0b20ucGFja2FnZXMuZ2V0QWN0aXZlUGFja2FnZSgnYXV0b2NvbXBsZXRlLXB5dGhvbicpLm1haW5Nb2R1bGUubG9hZCgpXG4gICAgcnVucyAtPiBwcm92aWRlciA9IGF0b20ucGFja2FnZXMuZ2V0QWN0aXZlUGFja2FnZShcbiAgICAgICdhdXRvY29tcGxldGUtcHl0aG9uJykubWFpbk1vZHVsZS5nZXRQcm92aWRlcigpXG5cbiAgaXQgJ2F1dG9jb21wbGV0ZXMgYnVpbHRpbnMnLCAtPlxuICAgIGVkaXRvci5zZXRUZXh0ICdpc2luc3RhbmMnXG4gICAgZWRpdG9yLnNldEN1cnNvckJ1ZmZlclBvc2l0aW9uKFsxLCAwXSlcbiAgICB3YWl0c0ZvclByb21pc2UgLT5cbiAgICAgIGdldENvbXBsZXRpb25zKCkudGhlbiAoY29tcGxldGlvbnMpIC0+XG4gICAgICAgIGZvciBjb21wbGV0aW9uIGluIGNvbXBsZXRpb25zXG4gICAgICAgICAgZXhwZWN0KGNvbXBsZXRpb24udGV4dC5sZW5ndGgpLnRvQmVHcmVhdGVyVGhhbiAwXG4gICAgICAgICAgZXhwZWN0KGNvbXBsZXRpb24udGV4dCkudG9CZSAnaXNpbnN0YW5jZSdcbiAgICAgICAgZXhwZWN0KGNvbXBsZXRpb25zLmxlbmd0aCkudG9CZSAxXG5cbiAgaXQgJ2F1dG9jb21wbGV0ZXMgcHl0aG9uIGtleXdvcmRzJywgLT5cbiAgICBlZGl0b3Iuc2V0VGV4dCAnaW1wbydcbiAgICBlZGl0b3Iuc2V0Q3Vyc29yQnVmZmVyUG9zaXRpb24oWzEsIDBdKVxuICAgIGNvbXBsZXRpb25zID0gZ2V0Q29tcGxldGlvbnMoKVxuICAgIGZvciBjb21wbGV0aW9uIGluIGNvbXBsZXRpb25zXG4gICAgICBpZiBjb21wbGV0aW9uLnR5cGUgPT0gJ2tleXdvcmQnXG4gICAgICAgIGV4cGVjdChjb21wbGV0aW9uLnRleHQpLnRvQmUgJ2ltcG9ydCdcbiAgICAgIGV4cGVjdChjb21wbGV0aW9uLnRleHQubGVuZ3RoKS50b0JlR3JlYXRlclRoYW4gMFxuICAgIGV4cGVjdChjb21wbGV0aW9ucy5sZW5ndGgpLnRvQmUgM1xuXG4gIGl0ICdhdXRvY29tcGxldGVzIGRlZmluZWQgZnVuY3Rpb25zJywgLT5cbiAgICBlZGl0b3Iuc2V0VGV4dCBcIlwiXCJcbiAgICAgIGRlZiBoZWxsb193b3JsZCgpOlxuICAgICAgICByZXR1cm4gVHJ1ZVxuICAgICAgaGVsbFxuICAgIFwiXCJcIlxuICAgIGVkaXRvci5zZXRDdXJzb3JCdWZmZXJQb3NpdGlvbihbMywgMF0pXG4gICAgd2FpdHNGb3JQcm9taXNlIC0+XG4gICAgICBnZXRDb21wbGV0aW9ucygpLnRoZW4gKGNvbXBsZXRpb25zKSAtPlxuICAgICAgICBleHBlY3QoY29tcGxldGlvbnNbMF0udGV4dCkudG9CZSAnaGVsbG9fd29ybGQnXG4gICAgICAgIGV4cGVjdChjb21wbGV0aW9ucy5sZW5ndGgpLnRvQmUgMVxuIl19
