(function() {
  var PU, Preferences, PreferencesSettings;

  PU = require('./preferences-util');

  PreferencesSettings = require('./preferences-settings');

  Preferences = (function() {
    var applyInstallPanelOnSwitch;

    function Preferences() {}

    Preferences.localize = function(defS) {
      this.defS = defS;
      this.updateSettings();
      return atom.workspace.onDidChangeActivePaneItem((function(_this) {
        return function(item) {
          if (item !== void 0) {
            if (item.uri !== void 0) {
              if (item.uri.indexOf('atom://config') !== -1) {
                if (!window.JapaneseMenu.pref.done) {
                  return _this.updateSettings(true);
                }
              }
            }
          }
        };
      })(this));
    };

    Preferences.updateSettings = function(onSettingsOpen) {
      if (onSettingsOpen == null) {
        onSettingsOpen = false;
      }
      return setTimeout(this.delaySettings, 0, onSettingsOpen);
    };

    Preferences.delaySettings = function(onSettingsOpen) {
      var btn, btns, e, editorPane, handler, i, len, settingsEnabled, settingsTab;
      settingsTab = document.querySelector('.tab-bar [data-type="SettingsView"]');
      if (settingsTab) {
        settingsEnabled = settingsTab.className.includes('active');
      }
      if (!(settingsTab && settingsEnabled)) {
        return;
      }
      try {
        settingsTab.querySelector('.title').textContent = "設定";
        Preferences.sv = document.querySelector('.settings-view');
        Preferences.applyFonts();
        Preferences.loadAllSettingsPanels();
        PreferencesSettings.localize();
        Preferences.applyLeftSide();
        btns = Preferences.sv.querySelectorAll('div.section:not(.themes-panel) .search-container .btn');
        for (i = 0, len = btns.length; i < len; i++) {
          btn = btns[i];
          btn.addEventListener('click', applyInstallPanelOnSwitch);
        }
        window.JapaneseMenu.pref.done = true;
        editorPane = atom.workspace.getActivePane();
        if (editorPane) {
          return handler = editorPane.onDidRemoveItem(function(event) {
            if (event.item.uri === 'atom://config') {
              window.JapaneseMenu.pref.done = false;
            }
            return handler.dispose();
          });
        }
      } catch (error) {
        e = error;
        return console.error("日本語化に失敗しました。", e);
      }
    };

    Preferences.applyFonts = function() {
      var font, settingsTab;
      if (process.platform === 'win32') {
        font = atom.config.get('editor.fontFamily');
        if (font) {
          return Preferences.sv.style["fontFamily"] = font;
        } else {
          return Preferences.sv.style["fontFamily"] = "'Segoe UI', Meiryo";
        }
      } else if (process.platform === 'linux') {
        font = atom.config.get('editor.fontFamily');
        Preferences.sv.style["fontFamily"] = font;
        settingsTab = document.querySelector('.tab-bar [data-type="SettingsView"]');
        return settingsTab.style["fontFamily"] = font;
      }
    };

    Preferences.loadAllSettingsPanels = function() {
      var i, lastMenu, len, panelMenus, pm;
      lastMenu = Preferences.sv.querySelector('.panels-menu .active a');
      panelMenus = Preferences.sv.querySelectorAll('.settings-view .panels-menu li a');
      for (i = 0, len = panelMenus.length; i < len; i++) {
        pm = panelMenus[i];
        pm.click();
        pm.addEventListener('click', applyInstallPanelOnSwitch);
      }
      if (lastMenu) {
        return lastMenu.click();
      }
    };

    Preferences.applyLeftSide = function() {
      var d, el, ext, i, len, menu, ref;
      menu = Preferences.sv.querySelector('.settings-view .panels-menu');
      if (!menu) {
        return;
      }
      ref = Preferences.defS.Settings.menu;
      for (i = 0, len = ref.length; i < len; i++) {
        d = ref[i];
        el = menu.querySelector("[name='" + d.label + "']>a");
        if (!el) {
          continue;
        }
        PU.applyTextWithOrg(el, d.value);
      }
      ext = Preferences.sv.querySelector('.settings-view .icon-link-external');
      return PU.applyTextWithOrg(ext, "設定フォルダを開く");
    };

    applyInstallPanelOnSwitch = function() {
      var info, inst;
      PU.applySectionHeadings(true);
      PU.applyButtonToolbar();
      inst = document.querySelector('div.section:not(.themes-panel)');
      info = inst.querySelector('.native-key-bindings');
      return info.querySelector('span:nth-child(2)').textContent = "パッケージ・テーマは ";
    };

    return Preferences;

  })();

  module.exports = Preferences;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9qYXBhbmVzZS1tZW51L2xpYi9wcmVmZXJlbmNlcy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLEVBQUEsR0FBSyxPQUFBLENBQVEsb0JBQVI7O0VBQ0wsbUJBQUEsR0FBc0IsT0FBQSxDQUFRLHdCQUFSOztFQUVoQjtBQUVKLFFBQUE7Ozs7SUFBQSxXQUFDLENBQUEsUUFBRCxHQUFXLFNBQUMsSUFBRDtNQUNULElBQUMsQ0FBQSxJQUFELEdBQVE7TUFDUixJQUFDLENBQUEsY0FBRCxDQUFBO2FBQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyx5QkFBZixDQUF5QyxDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUMsSUFBRDtVQUN2QyxJQUFHLElBQUEsS0FBVSxNQUFiO1lBQ0UsSUFBRyxJQUFJLENBQUMsR0FBTCxLQUFjLE1BQWpCO2NBQ0UsSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQVQsQ0FBaUIsZUFBakIsQ0FBQSxLQUF1QyxDQUFDLENBQTNDO2dCQUNFLElBQUEsQ0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFoQzt5QkFDRSxLQUFDLENBQUEsY0FBRCxDQUFnQixJQUFoQixFQURGO2lCQURGO2VBREY7YUFERjs7UUFEdUM7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXpDO0lBSFM7O0lBVVgsV0FBQyxDQUFBLGNBQUQsR0FBaUIsU0FBQyxjQUFEOztRQUFDLGlCQUFpQjs7YUFDakMsVUFBQSxDQUFXLElBQUMsQ0FBQSxhQUFaLEVBQTJCLENBQTNCLEVBQThCLGNBQTlCO0lBRGU7O0lBR2pCLFdBQUMsQ0FBQSxhQUFELEdBQWdCLFNBQUMsY0FBRDtBQUNkLFVBQUE7TUFBQSxXQUFBLEdBQWMsUUFBUSxDQUFDLGFBQVQsQ0FBdUIscUNBQXZCO01BQ2QsSUFBNkQsV0FBN0Q7UUFBQSxlQUFBLEdBQWtCLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBdEIsQ0FBK0IsUUFBL0IsRUFBbEI7O01BQ0EsSUFBQSxDQUFBLENBQWMsV0FBQSxJQUFlLGVBQTdCLENBQUE7QUFBQSxlQUFBOztBQUNBO1FBRUUsV0FBVyxDQUFDLGFBQVosQ0FBMEIsUUFBMUIsQ0FBbUMsQ0FBQyxXQUFwQyxHQUFrRDtRQUVsRCxXQUFDLENBQUEsRUFBRCxHQUFNLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdCQUF2QjtRQUVOLFdBQUMsQ0FBQSxVQUFELENBQUE7UUFFQSxXQUFDLENBQUEscUJBQUQsQ0FBQTtRQUVBLG1CQUFtQixDQUFDLFFBQXBCLENBQUE7UUFFQSxXQUFDLENBQUEsYUFBRCxDQUFBO1FBR0EsSUFBQSxHQUFPLFdBQUMsQ0FBQSxFQUFFLENBQUMsZ0JBQUosQ0FBcUIsdURBQXJCO0FBQ1AsYUFBQSxzQ0FBQTs7VUFDRSxHQUFHLENBQUMsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIseUJBQTlCO0FBREY7UUFHQSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUF6QixHQUFnQztRQUdoQyxVQUFBLEdBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFmLENBQUE7UUFDYixJQUFHLFVBQUg7aUJBQ0UsT0FBQSxHQUFVLFVBQVUsQ0FBQyxlQUFYLENBQTJCLFNBQUMsS0FBRDtZQUNuQyxJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBWCxLQUFrQixlQUFyQjtjQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQXpCLEdBQWdDLE1BRGxDOzttQkFFQSxPQUFPLENBQUMsT0FBUixDQUFBO1VBSG1DLENBQTNCLEVBRFo7U0F2QkY7T0FBQSxhQUFBO1FBNkJNO2VBQ0osT0FBTyxDQUFDLEtBQVIsQ0FBYyxjQUFkLEVBQThCLENBQTlCLEVBOUJGOztJQUpjOztJQW9DaEIsV0FBQyxDQUFBLFVBQUQsR0FBYSxTQUFBO0FBQ1gsVUFBQTtNQUFBLElBQUcsT0FBTyxDQUFDLFFBQVIsS0FBb0IsT0FBdkI7UUFDRSxJQUFBLEdBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLG1CQUFoQjtRQUNQLElBQUcsSUFBSDtpQkFDRSxXQUFDLENBQUEsRUFBRSxDQUFDLEtBQU0sQ0FBQSxZQUFBLENBQVYsR0FBMEIsS0FENUI7U0FBQSxNQUFBO2lCQUdFLFdBQUMsQ0FBQSxFQUFFLENBQUMsS0FBTSxDQUFBLFlBQUEsQ0FBVixHQUEwQixxQkFINUI7U0FGRjtPQUFBLE1BTUssSUFBRyxPQUFPLENBQUMsUUFBUixLQUFvQixPQUF2QjtRQUNILElBQUEsR0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0IsbUJBQWhCO1FBQ1AsV0FBQyxDQUFBLEVBQUUsQ0FBQyxLQUFNLENBQUEsWUFBQSxDQUFWLEdBQTBCO1FBQzFCLFdBQUEsR0FBYyxRQUFRLENBQUMsYUFBVCxDQUF1QixxQ0FBdkI7ZUFDZCxXQUFXLENBQUMsS0FBTSxDQUFBLFlBQUEsQ0FBbEIsR0FBa0MsS0FKL0I7O0lBUE07O0lBYWIsV0FBQyxDQUFBLHFCQUFELEdBQXdCLFNBQUE7QUFFdEIsVUFBQTtNQUFBLFFBQUEsR0FBVyxXQUFDLENBQUEsRUFBRSxDQUFDLGFBQUosQ0FBa0Isd0JBQWxCO01BQ1gsVUFBQSxHQUFhLFdBQUMsQ0FBQSxFQUFFLENBQUMsZ0JBQUosQ0FBcUIsa0NBQXJCO0FBQ2IsV0FBQSw0Q0FBQTs7UUFDRSxFQUFFLENBQUMsS0FBSCxDQUFBO1FBQ0EsRUFBRSxDQUFDLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLHlCQUE3QjtBQUZGO01BSUEsSUFBb0IsUUFBcEI7ZUFBQSxRQUFRLENBQUMsS0FBVCxDQUFBLEVBQUE7O0lBUnNCOztJQVV4QixXQUFDLENBQUEsYUFBRCxHQUFnQixTQUFBO0FBRWQsVUFBQTtNQUFBLElBQUEsR0FBTyxXQUFDLENBQUEsRUFBRSxDQUFDLGFBQUosQ0FBa0IsNkJBQWxCO01BQ1AsSUFBQSxDQUFjLElBQWQ7QUFBQSxlQUFBOztBQUNBO0FBQUEsV0FBQSxxQ0FBQTs7UUFDRSxFQUFBLEdBQUssSUFBSSxDQUFDLGFBQUwsQ0FBbUIsU0FBQSxHQUFVLENBQUMsQ0FBQyxLQUFaLEdBQWtCLE1BQXJDO1FBQ0wsSUFBQSxDQUFnQixFQUFoQjtBQUFBLG1CQUFBOztRQUNBLEVBQUUsQ0FBQyxnQkFBSCxDQUFvQixFQUFwQixFQUF3QixDQUFDLENBQUMsS0FBMUI7QUFIRjtNQU1BLEdBQUEsR0FBTSxXQUFDLENBQUEsRUFBRSxDQUFDLGFBQUosQ0FBa0Isb0NBQWxCO2FBQ04sRUFBRSxDQUFDLGdCQUFILENBQW9CLEdBQXBCLEVBQXlCLFdBQXpCO0lBWGM7O0lBYWhCLHlCQUFBLEdBQTRCLFNBQUE7QUFDMUIsVUFBQTtNQUFBLEVBQUUsQ0FBQyxvQkFBSCxDQUF3QixJQUF4QjtNQUNBLEVBQUUsQ0FBQyxrQkFBSCxDQUFBO01BQ0EsSUFBQSxHQUFPLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdDQUF2QjtNQUNQLElBQUEsR0FBTyxJQUFJLENBQUMsYUFBTCxDQUFtQixzQkFBbkI7YUFDUCxJQUFJLENBQUMsYUFBTCxDQUFtQixtQkFBbkIsQ0FBdUMsQ0FBQyxXQUF4QyxHQUFzRDtJQUw1Qjs7Ozs7O0VBUTlCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCO0FBbEdqQiIsInNvdXJjZXNDb250ZW50IjpbIlBVID0gcmVxdWlyZSAnLi9wcmVmZXJlbmNlcy11dGlsJ1xuUHJlZmVyZW5jZXNTZXR0aW5ncyA9IHJlcXVpcmUgJy4vcHJlZmVyZW5jZXMtc2V0dGluZ3MnXG5cbmNsYXNzIFByZWZlcmVuY2VzXG5cbiAgQGxvY2FsaXplOiAoZGVmUykgLT5cbiAgICBAZGVmUyA9IGRlZlNcbiAgICBAdXBkYXRlU2V0dGluZ3MoKVxuICAgIGF0b20ud29ya3NwYWNlLm9uRGlkQ2hhbmdlQWN0aXZlUGFuZUl0ZW0gKGl0ZW0pID0+XG4gICAgICBpZiBpdGVtIGlzbnQgdW5kZWZpbmVkXG4gICAgICAgIGlmIGl0ZW0udXJpIGlzbnQgdW5kZWZpbmVkXG4gICAgICAgICAgaWYgaXRlbS51cmkuaW5kZXhPZignYXRvbTovL2NvbmZpZycpIGlzbnQgLTFcbiAgICAgICAgICAgIHVubGVzcyB3aW5kb3cuSmFwYW5lc2VNZW51LnByZWYuZG9uZVxuICAgICAgICAgICAgICBAdXBkYXRlU2V0dGluZ3ModHJ1ZSlcblxuICBAdXBkYXRlU2V0dGluZ3M6IChvblNldHRpbmdzT3BlbiA9IGZhbHNlKSAtPlxuICAgIHNldFRpbWVvdXQoQGRlbGF5U2V0dGluZ3MsIDAsIG9uU2V0dGluZ3NPcGVuKVxuXG4gIEBkZWxheVNldHRpbmdzOiAob25TZXR0aW5nc09wZW4pID0+XG4gICAgc2V0dGluZ3NUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLWJhciBbZGF0YS10eXBlPVwiU2V0dGluZ3NWaWV3XCJdJylcbiAgICBzZXR0aW5nc0VuYWJsZWQgPSBzZXR0aW5nc1RhYi5jbGFzc05hbWUuaW5jbHVkZXMgJ2FjdGl2ZScgaWYgc2V0dGluZ3NUYWJcbiAgICByZXR1cm4gdW5sZXNzIHNldHRpbmdzVGFiICYmIHNldHRpbmdzRW5hYmxlZFxuICAgIHRyeVxuICAgICAgIyBUYWIgdGl0bGVcbiAgICAgIHNldHRpbmdzVGFiLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnRleHRDb250ZW50ID0gXCLoqK3lrppcIlxuXG4gICAgICBAc3YgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3MtdmlldycpXG5cbiAgICAgIEBhcHBseUZvbnRzKClcblxuICAgICAgQGxvYWRBbGxTZXR0aW5nc1BhbmVscygpXG5cbiAgICAgIFByZWZlcmVuY2VzU2V0dGluZ3MubG9jYWxpemUoKVxuXG4gICAgICBAYXBwbHlMZWZ0U2lkZSgpXG5cbiAgICAgICMgQWRkIEV2ZW50c1xuICAgICAgYnRucyA9IEBzdi5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuc2VjdGlvbjpub3QoLnRoZW1lcy1wYW5lbCkgLnNlYXJjaC1jb250YWluZXIgLmJ0bicpXG4gICAgICBmb3IgYnRuIGluIGJ0bnNcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwbHlJbnN0YWxsUGFuZWxPblN3aXRjaClcblxuICAgICAgd2luZG93LkphcGFuZXNlTWVudS5wcmVmLmRvbmUgPSB0cnVlXG4gICAgICBcbiAgICAgICMgUmVzdG9yZSB0aGUgZmxhZyB3aGVuIHRoZSBzZXR0aW5ncyBwYW5lbCBpcyBjbG9zZWRcbiAgICAgIGVkaXRvclBhbmUgPSBhdG9tLndvcmtzcGFjZS5nZXRBY3RpdmVQYW5lKClcbiAgICAgIGlmIGVkaXRvclBhbmVcbiAgICAgICAgaGFuZGxlciA9IGVkaXRvclBhbmUub25EaWRSZW1vdmVJdGVtIChldmVudCkgPT5cbiAgICAgICAgICBpZiBldmVudC5pdGVtLnVyaSA9PSAnYXRvbTovL2NvbmZpZydcbiAgICAgICAgICAgIHdpbmRvdy5KYXBhbmVzZU1lbnUucHJlZi5kb25lID0gZmFsc2VcbiAgICAgICAgICBoYW5kbGVyLmRpc3Bvc2UoKVxuXG4gICAgY2F0Y2ggZVxuICAgICAgY29uc29sZS5lcnJvciBcIuaXpeacrOiqnuWMluOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLCBlXG5cbiAgQGFwcGx5Rm9udHM6ICgpID0+XG4gICAgaWYgcHJvY2Vzcy5wbGF0Zm9ybSA9PSAnd2luMzInXG4gICAgICBmb250ID0gYXRvbS5jb25maWcuZ2V0KCdlZGl0b3IuZm9udEZhbWlseScpXG4gICAgICBpZiBmb250XG4gICAgICAgIEBzdi5zdHlsZVtcImZvbnRGYW1pbHlcIl0gPSBmb250XG4gICAgICBlbHNlXG4gICAgICAgIEBzdi5zdHlsZVtcImZvbnRGYW1pbHlcIl0gPSBcIidTZWdvZSBVSScsIE1laXJ5b1wiXG4gICAgZWxzZSBpZiBwcm9jZXNzLnBsYXRmb3JtID09ICdsaW51eCdcbiAgICAgIGZvbnQgPSBhdG9tLmNvbmZpZy5nZXQoJ2VkaXRvci5mb250RmFtaWx5JylcbiAgICAgIEBzdi5zdHlsZVtcImZvbnRGYW1pbHlcIl0gPSBmb250XG4gICAgICBzZXR0aW5nc1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWItYmFyIFtkYXRhLXR5cGU9XCJTZXR0aW5nc1ZpZXdcIl0nKVxuICAgICAgc2V0dGluZ3NUYWIuc3R5bGVbXCJmb250RmFtaWx5XCJdID0gZm9udFxuXG4gIEBsb2FkQWxsU2V0dGluZ3NQYW5lbHM6ICgpID0+XG4gICAgIyBMb2FkIGFsbCBzZXR0aW5ncyBwYW5lbHNcbiAgICBsYXN0TWVudSA9IEBzdi5xdWVyeVNlbGVjdG9yKCcucGFuZWxzLW1lbnUgLmFjdGl2ZSBhJylcbiAgICBwYW5lbE1lbnVzID0gQHN2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXR0aW5ncy12aWV3IC5wYW5lbHMtbWVudSBsaSBhJylcbiAgICBmb3IgcG0gaW4gcGFuZWxNZW51c1xuICAgICAgcG0uY2xpY2soKVxuICAgICAgcG0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBseUluc3RhbGxQYW5lbE9uU3dpdGNoKVxuICAgICMgUmVzdG9yZSBsYXN0IGFjdGl2ZSBtZW51XG4gICAgbGFzdE1lbnUuY2xpY2soKSBpZiBsYXN0TWVudVxuXG4gIEBhcHBseUxlZnRTaWRlOiAoKSA9PlxuICAgICMgTGVmdC1zaWRlIG1lbnVcbiAgICBtZW51ID0gQHN2LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy12aWV3IC5wYW5lbHMtbWVudScpXG4gICAgcmV0dXJuIHVubGVzcyBtZW51XG4gICAgZm9yIGQgaW4gQGRlZlMuU2V0dGluZ3MubWVudVxuICAgICAgZWwgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoXCJbbmFtZT0nI3tkLmxhYmVsfSddPmFcIilcbiAgICAgIGNvbnRpbnVlIHVubGVzcyBlbFxuICAgICAgUFUuYXBwbHlUZXh0V2l0aE9yZyBlbCwgZC52YWx1ZVxuXG4gICAgIyBMZWZ0LXNpZGUgYnV0dG9uXG4gICAgZXh0ID0gQHN2LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy12aWV3IC5pY29uLWxpbmstZXh0ZXJuYWwnKVxuICAgIFBVLmFwcGx5VGV4dFdpdGhPcmcgZXh0LCBcIuioreWumuODleOCqeODq+ODgOOCkumWi+OBj1wiXG5cbiAgYXBwbHlJbnN0YWxsUGFuZWxPblN3aXRjaCA9ICgpIC0+XG4gICAgUFUuYXBwbHlTZWN0aW9uSGVhZGluZ3ModHJ1ZSlcbiAgICBQVS5hcHBseUJ1dHRvblRvb2xiYXIoKVxuICAgIGluc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuc2VjdGlvbjpub3QoLnRoZW1lcy1wYW5lbCknKVxuICAgIGluZm8gPSBpbnN0LnF1ZXJ5U2VsZWN0b3IoJy5uYXRpdmUta2V5LWJpbmRpbmdzJylcbiAgICBpbmZvLnF1ZXJ5U2VsZWN0b3IoJ3NwYW46bnRoLWNoaWxkKDIpJykudGV4dENvbnRlbnQgPSBcIuODkeODg+OCseODvOOCuOODu+ODhuODvOODnuOBryBcIlxuXG5cbm1vZHVsZS5leHBvcnRzID0gUHJlZmVyZW5jZXNcbiJdfQ==
