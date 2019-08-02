(function() {
  var CharacterMarker, Point, Range, ref;

  ref = require('atom'), Range = ref.Range, Point = ref.Point;

  module.exports = CharacterMarker = (function() {
    function CharacterMarker(charMap) {
      this.charMap = charMap;
      this.markerList = [];
    }

    CharacterMarker.prototype.destroy = function() {};

    CharacterMarker.prototype.setCharDecoration = function(char, decoration) {
      return this.charMap[char] = decoration;
    };

    CharacterMarker.prototype.getCharDecoration = function(char) {
      if (char in this.charMap) {
        return this.charMap[char];
      } else {
        return void 0;
      }
    };

    CharacterMarker.prototype.deleteCharDecoration = function(char) {
      if (char in this.charMap) {
        return delete this.charMap[char];
      }
    };

    CharacterMarker.prototype.checkText = function(text) {
      var char;
      for (char in this.charMap) {
        if (text.includes(char)) {
          return true;
        }
      }
      return false;
    };

    CharacterMarker.prototype.handleMark = function(editor, rel) {
      var char, decoration, ref1;
      this.removeMark(editor, rel);
      ref1 = this.charMap;
      for (char in ref1) {
        decoration = ref1[char];
        this.mark(editor, rel, char, decoration);
      }
    };

    CharacterMarker.prototype.mark = function(editor, rel, char, decoration) {
      return editor.scan(this.creatRegExpEscaped(char), function(result) {
        var marker;
        marker = editor.markBufferRange(result.range, {
          invalidate: 'inside'
        });
        marker.setProperties({
          rel: rel
        });
        return editor.decorateMarker(marker, decoration);
      });
    };

    CharacterMarker.prototype.removeMark = function(editor, rel) {
      var i, len, marker, ref1, results;
      ref1 = editor.findMarkers({
        rel: rel
      });
      results = [];
      for (i = 0, len = ref1.length; i < len; i++) {
        marker = ref1[i];
        results.push(marker.destroy());
      }
      return results;
    };

    CharacterMarker.prototype.creatRegExpEscaped = function(s) {
      return new RegExp(s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
    };

    return CharacterMarker;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9zaG93LWlkZW9ncmFwaGljLXNwYWNlL2xpYi9jaGFyYWN0ZXItbWFya2VyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7O0VBQUEsTUFBaUIsT0FBQSxDQUFRLE1BQVIsQ0FBakIsRUFBQyxpQkFBRCxFQUFROztFQUVSLE1BQU0sQ0FBQyxPQUFQLEdBQ007SUFDUyx5QkFBQyxPQUFEO01BQUMsSUFBQyxDQUFBLFVBQUQ7TUFDWixJQUFDLENBQUEsVUFBRCxHQUFjO0lBREg7OzhCQUdiLE9BQUEsR0FBUyxTQUFBLEdBQUE7OzhCQUVULGlCQUFBLEdBQW1CLFNBQUMsSUFBRCxFQUFPLFVBQVA7YUFDakIsSUFBQyxDQUFBLE9BQVEsQ0FBQSxJQUFBLENBQVQsR0FBaUI7SUFEQTs7OEJBR25CLGlCQUFBLEdBQW1CLFNBQUMsSUFBRDtNQUNqQixJQUFHLElBQUEsSUFBUSxJQUFDLENBQUEsT0FBWjtBQUNFLGVBQU8sSUFBQyxDQUFBLE9BQVEsQ0FBQSxJQUFBLEVBRGxCO09BQUEsTUFBQTtBQUdFLGVBQU8sT0FIVDs7SUFEaUI7OzhCQU1uQixvQkFBQSxHQUFzQixTQUFDLElBQUQ7TUFDcEIsSUFBRyxJQUFBLElBQVEsSUFBQyxDQUFBLE9BQVo7ZUFDRSxPQUFPLElBQUMsQ0FBQSxPQUFRLENBQUEsSUFBQSxFQURsQjs7SUFEb0I7OzhCQUl0QixTQUFBLEdBQVcsU0FBQyxJQUFEO0FBQ1QsVUFBQTtBQUFBLFdBQUEsb0JBQUE7UUFDRSxJQUFHLElBQUksQ0FBQyxRQUFMLENBQWMsSUFBZCxDQUFIO0FBQ0UsaUJBQU8sS0FEVDs7QUFERjtBQUdBLGFBQU87SUFKRTs7OEJBTVgsVUFBQSxHQUFZLFNBQUMsTUFBRCxFQUFTLEdBQVQ7QUFDVixVQUFBO01BQUEsSUFBQyxDQUFBLFVBQUQsQ0FBWSxNQUFaLEVBQW9CLEdBQXBCO0FBQ0E7QUFBQSxXQUFBLFlBQUE7O1FBQ0UsSUFBQyxDQUFBLElBQUQsQ0FBTSxNQUFOLEVBQWMsR0FBZCxFQUFtQixJQUFuQixFQUF5QixVQUF6QjtBQURGO0lBRlU7OzhCQU1aLElBQUEsR0FBTSxTQUFDLE1BQUQsRUFBUyxHQUFULEVBQWMsSUFBZCxFQUFvQixVQUFwQjthQUNKLE1BQU0sQ0FBQyxJQUFQLENBQVksSUFBQyxDQUFBLGtCQUFELENBQW9CLElBQXBCLENBQVosRUFBdUMsU0FBQyxNQUFEO0FBQ3JDLFlBQUE7UUFBQSxNQUFBLEdBQVMsTUFBTSxDQUFDLGVBQVAsQ0FBdUIsTUFBTSxDQUFDLEtBQTlCLEVBQXFDO1VBQUEsVUFBQSxFQUFZLFFBQVo7U0FBckM7UUFDVCxNQUFNLENBQUMsYUFBUCxDQUFxQjtVQUFBLEdBQUEsRUFBSyxHQUFMO1NBQXJCO2VBQ0EsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsTUFBdEIsRUFBOEIsVUFBOUI7TUFIcUMsQ0FBdkM7SUFESTs7OEJBTU4sVUFBQSxHQUFZLFNBQUMsTUFBRCxFQUFTLEdBQVQ7QUFDVixVQUFBO0FBQUE7OztBQUFBO1dBQUEsc0NBQUE7O3FCQUNFLE1BQU0sQ0FBQyxPQUFQLENBQUE7QUFERjs7SUFEVTs7OEJBSVosa0JBQUEsR0FBb0IsU0FBQyxDQUFEO2FBQ2xCLElBQUksTUFBSixDQUFXLENBQUMsQ0FBQyxPQUFGLENBQVUsd0JBQVYsRUFBb0MsTUFBcEMsQ0FBWCxFQUF3RCxHQUF4RDtJQURrQjs7Ozs7QUE1Q3RCIiwic291cmNlc0NvbnRlbnQiOlsie1JhbmdlLCBQb2ludH0gPSByZXF1aXJlICdhdG9tJ1xuXG5tb2R1bGUuZXhwb3J0cyA9XG5jbGFzcyBDaGFyYWN0ZXJNYXJrZXJcbiAgY29uc3RydWN0b3I6IChAY2hhck1hcCkgLT5cbiAgICBAbWFya2VyTGlzdCA9IFtdXG5cbiAgZGVzdHJveTogLT5cblxuICBzZXRDaGFyRGVjb3JhdGlvbjogKGNoYXIsIGRlY29yYXRpb24pIC0+XG4gICAgQGNoYXJNYXBbY2hhcl0gPSBkZWNvcmF0aW9uXG5cbiAgZ2V0Q2hhckRlY29yYXRpb246IChjaGFyKSAtPlxuICAgIGlmIGNoYXIgb2YgQGNoYXJNYXBcbiAgICAgIHJldHVybiBAY2hhck1hcFtjaGFyXVxuICAgIGVsc2VcbiAgICAgIHJldHVybiB1bmRlZmluZWRcblxuICBkZWxldGVDaGFyRGVjb3JhdGlvbjogKGNoYXIpIC0+XG4gICAgaWYgY2hhciBvZiBAY2hhck1hcFxuICAgICAgZGVsZXRlIEBjaGFyTWFwW2NoYXJdXG5cbiAgY2hlY2tUZXh0OiAodGV4dCkgLT5cbiAgICBmb3IgY2hhciBvZiBAY2hhck1hcFxuICAgICAgaWYgdGV4dC5pbmNsdWRlcyBjaGFyXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgaGFuZGxlTWFyazogKGVkaXRvciwgcmVsKSAtPlxuICAgIEByZW1vdmVNYXJrIGVkaXRvciwgcmVsXG4gICAgZm9yIGNoYXIsIGRlY29yYXRpb24gb2YgQGNoYXJNYXBcbiAgICAgIEBtYXJrIGVkaXRvciwgcmVsLCBjaGFyLCBkZWNvcmF0aW9uXG4gICAgcmV0dXJuXG5cbiAgbWFyazogKGVkaXRvciwgcmVsLCBjaGFyLCBkZWNvcmF0aW9uKSAtPlxuICAgIGVkaXRvci5zY2FuIEBjcmVhdFJlZ0V4cEVzY2FwZWQoY2hhciksIChyZXN1bHQpIC0+XG4gICAgICBtYXJrZXIgPSBlZGl0b3IubWFya0J1ZmZlclJhbmdlIHJlc3VsdC5yYW5nZSwgaW52YWxpZGF0ZTogJ2luc2lkZSdcbiAgICAgIG1hcmtlci5zZXRQcm9wZXJ0aWVzKHJlbDogcmVsKVxuICAgICAgZWRpdG9yLmRlY29yYXRlTWFya2VyIG1hcmtlciwgZGVjb3JhdGlvblxuXG4gIHJlbW92ZU1hcms6IChlZGl0b3IsIHJlbCkgLT5cbiAgICBmb3IgbWFya2VyIGluIGVkaXRvci5maW5kTWFya2VycyhyZWw6IHJlbClcbiAgICAgIG1hcmtlci5kZXN0cm95KClcblxuICBjcmVhdFJlZ0V4cEVzY2FwZWQ6IChzKSAtPlxuICAgIG5ldyBSZWdFeHAgcy5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKSwgJ2cnXG4iXX0=
