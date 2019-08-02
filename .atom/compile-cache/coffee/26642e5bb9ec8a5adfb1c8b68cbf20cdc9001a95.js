(function() {
  var ContextMenu;

  ContextMenu = (function() {
    function ContextMenu() {}

    ContextMenu.localize = function(defC) {
      this.updateContextMenu(defC);
      return atom.menu.update();
    };

    ContextMenu.updateContextMenu = function(defC) {
      var i, item, itemSet, label, len, ref, results, set;
      ref = atom.contextMenu.itemSets;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        itemSet = ref[i];
        set = defC.Context[itemSet.selector];
        if (!set) {
          continue;
        }
        results.push((function() {
          var j, len1, ref1, results1;
          ref1 = itemSet.items;
          results1 = [];
          for (j = 0, len1 = ref1.length; j < len1; j++) {
            item = ref1[j];
            if (item.type === "separator") {
              continue;
            }
            label = set[item.command];
            if (label != null) {
              results1.push(item.label = label);
            } else {
              results1.push(void 0);
            }
          }
          return results1;
        })());
      }
      return results;
    };

    return ContextMenu;

  })();

  module.exports = ContextMenu;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9qYXBhbmVzZS1tZW51L2xpYi9jb250ZXh0LW1lbnUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7RUFBTTs7O0lBRUosV0FBQyxDQUFBLFFBQUQsR0FBVyxTQUFDLElBQUQ7TUFDVCxJQUFDLENBQUEsaUJBQUQsQ0FBbUIsSUFBbkI7YUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQVYsQ0FBQTtJQUZTOztJQUlYLFdBQUMsQ0FBQSxpQkFBRCxHQUFvQixTQUFDLElBQUQ7QUFDbEIsVUFBQTtBQUFBO0FBQUE7V0FBQSxxQ0FBQTs7UUFDRSxHQUFBLEdBQU0sSUFBSSxDQUFDLE9BQVEsQ0FBQSxPQUFPLENBQUMsUUFBUjtRQUNuQixJQUFZLENBQUksR0FBaEI7QUFBQSxtQkFBQTs7OztBQUNBO0FBQUE7ZUFBQSx3Q0FBQTs7WUFDRSxJQUFZLElBQUksQ0FBQyxJQUFMLEtBQWEsV0FBekI7QUFBQSx1QkFBQTs7WUFDQSxLQUFBLEdBQVEsR0FBSSxDQUFBLElBQUksQ0FBQyxPQUFMO1lBQ1osSUFBc0IsYUFBdEI7NEJBQUEsSUFBSSxDQUFDLEtBQUwsR0FBYSxPQUFiO2FBQUEsTUFBQTtvQ0FBQTs7QUFIRjs7O0FBSEY7O0lBRGtCOzs7Ozs7RUFTdEIsTUFBTSxDQUFDLE9BQVAsR0FBaUI7QUFmakIiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDb250ZXh0TWVudVxuXG4gIEBsb2NhbGl6ZTogKGRlZkMpIC0+XG4gICAgQHVwZGF0ZUNvbnRleHRNZW51KGRlZkMpXG4gICAgYXRvbS5tZW51LnVwZGF0ZSgpXG5cbiAgQHVwZGF0ZUNvbnRleHRNZW51OiAoZGVmQykgLT5cbiAgICBmb3IgaXRlbVNldCBpbiBhdG9tLmNvbnRleHRNZW51Lml0ZW1TZXRzXG4gICAgICBzZXQgPSBkZWZDLkNvbnRleHRbaXRlbVNldC5zZWxlY3Rvcl1cbiAgICAgIGNvbnRpbnVlIGlmIG5vdCBzZXRcbiAgICAgIGZvciBpdGVtIGluIGl0ZW1TZXQuaXRlbXNcbiAgICAgICAgY29udGludWUgaWYgaXRlbS50eXBlIGlzIFwic2VwYXJhdG9yXCJcbiAgICAgICAgbGFiZWwgPSBzZXRbaXRlbS5jb21tYW5kXVxuICAgICAgICBpdGVtLmxhYmVsID0gbGFiZWwgaWYgbGFiZWw/XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGV4dE1lbnVcbiJdfQ==
