(function() {
  var Menu;

  Menu = (function() {
    function Menu() {}

    Menu.localize = function(defM) {
      this.updateMenu(atom.menu.template, defM.Menu);
      return atom.menu.update();
    };

    Menu.updateMenu = function(menuList, def) {
      var i, key, len, menu, results, set;
      if (!def) {
        return;
      }
      results = [];
      for (i = 0, len = menuList.length; i < len; i++) {
        menu = menuList[i];
        if (!menu.label) {
          continue;
        }
        key = menu.label;
        set = def[key];
        if (!set) {
          continue;
        }
        if (set != null) {
          menu.label = set.value;
        }
        if (menu.submenu != null) {
          results.push(this.updateMenu(menu.submenu, set.submenu));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    return Menu;

  })();

  module.exports = Menu;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9qYXBhbmVzZS1tZW51L2xpYi9tZW51LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7O0VBQU07OztJQUVKLElBQUMsQ0FBQSxRQUFELEdBQVcsU0FBQyxJQUFEO01BQ1QsSUFBQyxDQUFBLFVBQUQsQ0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQXRCLEVBQWdDLElBQUksQ0FBQyxJQUFyQzthQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBVixDQUFBO0lBRlM7O0lBSVgsSUFBQyxDQUFBLFVBQUQsR0FBYSxTQUFDLFFBQUQsRUFBVyxHQUFYO0FBQ1gsVUFBQTtNQUFBLElBQVUsQ0FBSSxHQUFkO0FBQUEsZUFBQTs7QUFDQTtXQUFBLDBDQUFBOztRQUNFLElBQVksQ0FBSSxJQUFJLENBQUMsS0FBckI7QUFBQSxtQkFBQTs7UUFDQSxHQUFBLEdBQU0sSUFBSSxDQUFDO1FBQ1gsR0FBQSxHQUFNLEdBQUksQ0FBQSxHQUFBO1FBQ1YsSUFBWSxDQUFJLEdBQWhCO0FBQUEsbUJBQUE7O1FBQ0EsSUFBMEIsV0FBMUI7VUFBQSxJQUFJLENBQUMsS0FBTCxHQUFhLEdBQUcsQ0FBQyxNQUFqQjs7UUFDQSxJQUFHLG9CQUFIO3VCQUNFLElBQUMsQ0FBQSxVQUFELENBQVksSUFBSSxDQUFDLE9BQWpCLEVBQTBCLEdBQUcsQ0FBQyxPQUE5QixHQURGO1NBQUEsTUFBQTsrQkFBQTs7QUFORjs7SUFGVzs7Ozs7O0VBV2YsTUFBTSxDQUFDLE9BQVAsR0FBaUI7QUFqQmpCIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTWVudVxuXG4gIEBsb2NhbGl6ZTogKGRlZk0pIC0+XG4gICAgQHVwZGF0ZU1lbnUoYXRvbS5tZW51LnRlbXBsYXRlLCBkZWZNLk1lbnUpXG4gICAgYXRvbS5tZW51LnVwZGF0ZSgpXG5cbiAgQHVwZGF0ZU1lbnU6IChtZW51TGlzdCwgZGVmKSAtPlxuICAgIHJldHVybiBpZiBub3QgZGVmXG4gICAgZm9yIG1lbnUgaW4gbWVudUxpc3RcbiAgICAgIGNvbnRpbnVlIGlmIG5vdCBtZW51LmxhYmVsXG4gICAgICBrZXkgPSBtZW51LmxhYmVsXG4gICAgICBzZXQgPSBkZWZba2V5XVxuICAgICAgY29udGludWUgaWYgbm90IHNldFxuICAgICAgbWVudS5sYWJlbCA9IHNldC52YWx1ZSBpZiBzZXQ/XG4gICAgICBpZiBtZW51LnN1Ym1lbnU/XG4gICAgICAgIEB1cGRhdGVNZW51KG1lbnUuc3VibWVudSwgc2V0LnN1Ym1lbnUpXG5cbm1vZHVsZS5leHBvcnRzID0gTWVudVxuIl19
