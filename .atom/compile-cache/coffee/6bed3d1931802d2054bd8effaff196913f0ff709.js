(function() {
  module.exports = {
    priority: 1,
    providerName: 'autocomplete-python',
    disableForSelector: '.source.python .comment, .source.python .string, .source.python .numeric, .source.python .integer, .source.python .decimal, .source.python .punctuation, .source.python .keyword, .source.python .storage, .source.python .variable.parameter',
    constructed: false,
    constructor: function() {
      this.provider = require('./provider');
      this.log = require('./log');
      this.selectorsMatchScopeChain = require('./scope-helpers').selectorsMatchScopeChain;
      this.Selector = require('selector-kit').Selector;
      this.constructed = true;
      return this.log.debug('Loading python hyper-click provider...');
    },
    _getScopes: function(editor, range) {
      return editor.scopeDescriptorForBufferPosition(range).scopes;
    },
    getSuggestionForWord: function(editor, text, range) {
      var bufferPosition, callback, disableForSelector, scopeChain, scopeDescriptor;
      if (!this.constructed) {
        this.constructor();
      }
      if (text === '.' || text === ':') {
        return;
      }
      if (editor.getGrammar().scopeName.indexOf('source.python') > -1) {
        bufferPosition = range.start;
        scopeDescriptor = editor.scopeDescriptorForBufferPosition(bufferPosition);
        scopeChain = scopeDescriptor.getScopeChain();
        disableForSelector = this.Selector.create(this.disableForSelector);
        if (this.selectorsMatchScopeChain(disableForSelector, scopeChain)) {
          return;
        }
        if (atom.config.get('autocomplete-python.outputDebug')) {
          this.log.debug(range.start, this._getScopes(editor, range.start));
          this.log.debug(range.end, this._getScopes(editor, range.end));
        }
        callback = (function(_this) {
          return function() {
            return _this.provider.load().goToDefinition(editor, bufferPosition);
          };
        })(this);
        return {
          range: range,
          callback: callback
        };
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9hdXRvY29tcGxldGUtcHl0aG9uL2xpYi9oeXBlcmNsaWNrLXByb3ZpZGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE1BQU0sQ0FBQyxPQUFQLEdBQ0U7SUFBQSxRQUFBLEVBQVUsQ0FBVjtJQUNBLFlBQUEsRUFBYyxxQkFEZDtJQUVBLGtCQUFBLEVBQW9CLCtPQUZwQjtJQUdBLFdBQUEsRUFBYSxLQUhiO0lBS0EsV0FBQSxFQUFhLFNBQUE7TUFDWCxJQUFDLENBQUEsUUFBRCxHQUFZLE9BQUEsQ0FBUSxZQUFSO01BQ1osSUFBQyxDQUFBLEdBQUQsR0FBTyxPQUFBLENBQVEsT0FBUjtNQUNOLElBQUMsQ0FBQSwyQkFBNEIsT0FBQSxDQUFRLGlCQUFSLEVBQTVCO01BQ0QsSUFBQyxDQUFBLFdBQVksT0FBQSxDQUFRLGNBQVIsRUFBWjtNQUNGLElBQUMsQ0FBQSxXQUFELEdBQWU7YUFDZixJQUFDLENBQUEsR0FBRyxDQUFDLEtBQUwsQ0FBVyx3Q0FBWDtJQU5XLENBTGI7SUFhQSxVQUFBLEVBQVksU0FBQyxNQUFELEVBQVMsS0FBVDtBQUNWLGFBQU8sTUFBTSxDQUFDLGdDQUFQLENBQXdDLEtBQXhDLENBQThDLENBQUM7SUFENUMsQ0FiWjtJQWdCQSxvQkFBQSxFQUFzQixTQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsS0FBZjtBQUNwQixVQUFBO01BQUEsSUFBRyxDQUFJLElBQUMsQ0FBQSxXQUFSO1FBQ0UsSUFBQyxDQUFBLFdBQUQsQ0FBQSxFQURGOztNQUVBLElBQUcsSUFBQSxLQUFTLEdBQVQsSUFBQSxJQUFBLEtBQWMsR0FBakI7QUFDRSxlQURGOztNQUVBLElBQUcsTUFBTSxDQUFDLFVBQVAsQ0FBQSxDQUFtQixDQUFDLFNBQVMsQ0FBQyxPQUE5QixDQUFzQyxlQUF0QyxDQUFBLEdBQXlELENBQUMsQ0FBN0Q7UUFDRSxjQUFBLEdBQWlCLEtBQUssQ0FBQztRQUN2QixlQUFBLEdBQWtCLE1BQU0sQ0FBQyxnQ0FBUCxDQUNoQixjQURnQjtRQUVsQixVQUFBLEdBQWEsZUFBZSxDQUFDLGFBQWhCLENBQUE7UUFDYixrQkFBQSxHQUFxQixJQUFDLENBQUEsUUFBUSxDQUFDLE1BQVYsQ0FBaUIsSUFBQyxDQUFBLGtCQUFsQjtRQUNyQixJQUFHLElBQUMsQ0FBQSx3QkFBRCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBOUMsQ0FBSDtBQUNFLGlCQURGOztRQUdBLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLGlDQUFoQixDQUFIO1VBQ0UsSUFBQyxDQUFBLEdBQUcsQ0FBQyxLQUFMLENBQVcsS0FBSyxDQUFDLEtBQWpCLEVBQXdCLElBQUMsQ0FBQSxVQUFELENBQVksTUFBWixFQUFvQixLQUFLLENBQUMsS0FBMUIsQ0FBeEI7VUFDQSxJQUFDLENBQUEsR0FBRyxDQUFDLEtBQUwsQ0FBVyxLQUFLLENBQUMsR0FBakIsRUFBc0IsSUFBQyxDQUFBLFVBQUQsQ0FBWSxNQUFaLEVBQW9CLEtBQUssQ0FBQyxHQUExQixDQUF0QixFQUZGOztRQUdBLFFBQUEsR0FBVyxDQUFBLFNBQUEsS0FBQTtpQkFBQSxTQUFBO21CQUNULEtBQUMsQ0FBQSxRQUFRLENBQUMsSUFBVixDQUFBLENBQWdCLENBQUMsY0FBakIsQ0FBZ0MsTUFBaEMsRUFBd0MsY0FBeEM7VUFEUztRQUFBLENBQUEsQ0FBQSxDQUFBLElBQUE7QUFFWCxlQUFPO1VBQUMsT0FBQSxLQUFEO1VBQVEsVUFBQSxRQUFSO1VBZFQ7O0lBTG9CLENBaEJ0Qjs7QUFERiIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID1cbiAgcHJpb3JpdHk6IDFcbiAgcHJvdmlkZXJOYW1lOiAnYXV0b2NvbXBsZXRlLXB5dGhvbidcbiAgZGlzYWJsZUZvclNlbGVjdG9yOiAnLnNvdXJjZS5weXRob24gLmNvbW1lbnQsIC5zb3VyY2UucHl0aG9uIC5zdHJpbmcsIC5zb3VyY2UucHl0aG9uIC5udW1lcmljLCAuc291cmNlLnB5dGhvbiAuaW50ZWdlciwgLnNvdXJjZS5weXRob24gLmRlY2ltYWwsIC5zb3VyY2UucHl0aG9uIC5wdW5jdHVhdGlvbiwgLnNvdXJjZS5weXRob24gLmtleXdvcmQsIC5zb3VyY2UucHl0aG9uIC5zdG9yYWdlLCAuc291cmNlLnB5dGhvbiAudmFyaWFibGUucGFyYW1ldGVyJ1xuICBjb25zdHJ1Y3RlZDogZmFsc2VcblxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBAcHJvdmlkZXIgPSByZXF1aXJlICcuL3Byb3ZpZGVyJ1xuICAgIEBsb2cgPSByZXF1aXJlICcuL2xvZydcbiAgICB7QHNlbGVjdG9yc01hdGNoU2NvcGVDaGFpbn0gPSByZXF1aXJlICcuL3Njb3BlLWhlbHBlcnMnXG4gICAge0BTZWxlY3Rvcn0gPSByZXF1aXJlICdzZWxlY3Rvci1raXQnXG4gICAgQGNvbnN0cnVjdGVkID0gdHJ1ZVxuICAgIEBsb2cuZGVidWcgJ0xvYWRpbmcgcHl0aG9uIGh5cGVyLWNsaWNrIHByb3ZpZGVyLi4uJ1xuXG4gIF9nZXRTY29wZXM6IChlZGl0b3IsIHJhbmdlKSAtPlxuICAgIHJldHVybiBlZGl0b3Iuc2NvcGVEZXNjcmlwdG9yRm9yQnVmZmVyUG9zaXRpb24ocmFuZ2UpLnNjb3Blc1xuXG4gIGdldFN1Z2dlc3Rpb25Gb3JXb3JkOiAoZWRpdG9yLCB0ZXh0LCByYW5nZSkgLT5cbiAgICBpZiBub3QgQGNvbnN0cnVjdGVkXG4gICAgICBAY29uc3RydWN0b3IoKVxuICAgIGlmIHRleHQgaW4gWycuJywgJzonXVxuICAgICAgcmV0dXJuXG4gICAgaWYgZWRpdG9yLmdldEdyYW1tYXIoKS5zY29wZU5hbWUuaW5kZXhPZignc291cmNlLnB5dGhvbicpID4gLTFcbiAgICAgIGJ1ZmZlclBvc2l0aW9uID0gcmFuZ2Uuc3RhcnRcbiAgICAgIHNjb3BlRGVzY3JpcHRvciA9IGVkaXRvci5zY29wZURlc2NyaXB0b3JGb3JCdWZmZXJQb3NpdGlvbihcbiAgICAgICAgYnVmZmVyUG9zaXRpb24pXG4gICAgICBzY29wZUNoYWluID0gc2NvcGVEZXNjcmlwdG9yLmdldFNjb3BlQ2hhaW4oKVxuICAgICAgZGlzYWJsZUZvclNlbGVjdG9yID0gQFNlbGVjdG9yLmNyZWF0ZShAZGlzYWJsZUZvclNlbGVjdG9yKVxuICAgICAgaWYgQHNlbGVjdG9yc01hdGNoU2NvcGVDaGFpbihkaXNhYmxlRm9yU2VsZWN0b3IsIHNjb3BlQ2hhaW4pXG4gICAgICAgIHJldHVyblxuXG4gICAgICBpZiBhdG9tLmNvbmZpZy5nZXQoJ2F1dG9jb21wbGV0ZS1weXRob24ub3V0cHV0RGVidWcnKVxuICAgICAgICBAbG9nLmRlYnVnIHJhbmdlLnN0YXJ0LCBAX2dldFNjb3BlcyhlZGl0b3IsIHJhbmdlLnN0YXJ0KVxuICAgICAgICBAbG9nLmRlYnVnIHJhbmdlLmVuZCwgQF9nZXRTY29wZXMoZWRpdG9yLCByYW5nZS5lbmQpXG4gICAgICBjYWxsYmFjayA9ID0+XG4gICAgICAgIEBwcm92aWRlci5sb2FkKCkuZ29Ub0RlZmluaXRpb24oZWRpdG9yLCBidWZmZXJQb3NpdGlvbilcbiAgICAgIHJldHVybiB7cmFuZ2UsIGNhbGxiYWNrfVxuIl19
