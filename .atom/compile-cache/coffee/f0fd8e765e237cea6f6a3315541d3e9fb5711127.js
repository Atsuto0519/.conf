(function() {
  var ContextMenu, FindAndReplace, JapaneseMenu, Menu, Preferences,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Menu = require('./menu');

  ContextMenu = require('./context-menu');

  Preferences = require('./preferences');

  FindAndReplace = require('./findandreplace');

  JapaneseMenu = (function() {
    JapaneseMenu.prototype.pref = {
      done: false
    };

    function JapaneseMenu() {
      this.delay = bind(this.delay, this);
      this.defM = require("../def/menu_" + process.platform);
      this.defC = require("../def/context");
      this.defS = require("../def/settings");
      this.defF = require("../def/findandreplace");
    }

    JapaneseMenu.prototype.activate = function(state) {
      return setTimeout(this.delay, 0);
    };

    JapaneseMenu.prototype.delay = function() {
      Menu.localize(this.defM);
      ContextMenu.localize(this.defC);
      Preferences.localize(this.defS);
      return FindAndReplace.localize(this.defF);
    };

    return JapaneseMenu;

  })();

  module.exports = window.JapaneseMenu = new JapaneseMenu();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9qYXBhbmVzZS1tZW51L2xpYi9tYWluLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUEsNERBQUE7SUFBQTs7RUFBQSxJQUFBLEdBQWMsT0FBQSxDQUFRLFFBQVI7O0VBQ2QsV0FBQSxHQUFjLE9BQUEsQ0FBUSxnQkFBUjs7RUFDZCxXQUFBLEdBQWMsT0FBQSxDQUFRLGVBQVI7O0VBQ2QsY0FBQSxHQUFpQixPQUFBLENBQVEsa0JBQVI7O0VBRVg7MkJBRUosSUFBQSxHQUFNO01BQUMsSUFBQSxFQUFNLEtBQVA7OztJQUVPLHNCQUFBOztNQUNYLElBQUMsQ0FBQSxJQUFELEdBQVEsT0FBQSxDQUFRLGNBQUEsR0FBZSxPQUFPLENBQUMsUUFBL0I7TUFDUixJQUFDLENBQUEsSUFBRCxHQUFRLE9BQUEsQ0FBUSxnQkFBUjtNQUNSLElBQUMsQ0FBQSxJQUFELEdBQVEsT0FBQSxDQUFRLGlCQUFSO01BQ1IsSUFBQyxDQUFBLElBQUQsR0FBUSxPQUFBLENBQVEsdUJBQVI7SUFKRzs7MkJBTWIsUUFBQSxHQUFVLFNBQUMsS0FBRDthQUNSLFVBQUEsQ0FBVyxJQUFDLENBQUEsS0FBWixFQUFtQixDQUFuQjtJQURROzsyQkFHVixLQUFBLEdBQU8sU0FBQTtNQUNMLElBQUksQ0FBQyxRQUFMLENBQWMsSUFBQyxDQUFBLElBQWY7TUFDQSxXQUFXLENBQUMsUUFBWixDQUFxQixJQUFDLENBQUEsSUFBdEI7TUFDQSxXQUFXLENBQUMsUUFBWixDQUFxQixJQUFDLENBQUEsSUFBdEI7YUFDQSxjQUFjLENBQUMsUUFBZixDQUF3QixJQUFDLENBQUEsSUFBekI7SUFKSzs7Ozs7O0VBTVQsTUFBTSxDQUFDLE9BQVAsR0FBaUIsTUFBTSxDQUFDLFlBQVAsR0FBMEIsSUFBQSxZQUFBLENBQUE7QUF4QjNDIiwic291cmNlc0NvbnRlbnQiOlsiTWVudSAgICAgICAgPSByZXF1aXJlICcuL21lbnUnXG5Db250ZXh0TWVudSA9IHJlcXVpcmUgJy4vY29udGV4dC1tZW51J1xuUHJlZmVyZW5jZXMgPSByZXF1aXJlICcuL3ByZWZlcmVuY2VzJ1xuRmluZEFuZFJlcGxhY2UgPSByZXF1aXJlICcuL2ZpbmRhbmRyZXBsYWNlJ1xuXG5jbGFzcyBKYXBhbmVzZU1lbnVcblxuICBwcmVmOiB7ZG9uZTogZmFsc2V9XG5cbiAgY29uc3RydWN0b3I6IC0+XG4gICAgQGRlZk0gPSByZXF1aXJlIFwiLi4vZGVmL21lbnVfI3twcm9jZXNzLnBsYXRmb3JtfVwiXG4gICAgQGRlZkMgPSByZXF1aXJlIFwiLi4vZGVmL2NvbnRleHRcIlxuICAgIEBkZWZTID0gcmVxdWlyZSBcIi4uL2RlZi9zZXR0aW5nc1wiXG4gICAgQGRlZkYgPSByZXF1aXJlIFwiLi4vZGVmL2ZpbmRhbmRyZXBsYWNlXCJcblxuICBhY3RpdmF0ZTogKHN0YXRlKSAtPlxuICAgIHNldFRpbWVvdXQoQGRlbGF5LCAwKVxuXG4gIGRlbGF5OiAoKSA9PlxuICAgIE1lbnUubG9jYWxpemUoQGRlZk0pXG4gICAgQ29udGV4dE1lbnUubG9jYWxpemUoQGRlZkMpXG4gICAgUHJlZmVyZW5jZXMubG9jYWxpemUoQGRlZlMpXG4gICAgRmluZEFuZFJlcGxhY2UubG9jYWxpemUoQGRlZkYpXG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkphcGFuZXNlTWVudSA9IG5ldyBKYXBhbmVzZU1lbnUoKVxuIl19
