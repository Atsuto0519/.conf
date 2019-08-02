(function() {
  var PU, PreferencesSettings;

  PU = require('./preferences-util');

  PreferencesSettings = (function() {
    var applyTextContentBySettingsId;

    function PreferencesSettings() {}

    PreferencesSettings.localize = function() {
      this.defS = window.JapaneseMenu.defS.Settings;
      this.sv = document.querySelector('.settings-view');
      this.localizeSettingsPanel();
      this.localizeKeybindingsPanel();
      this.localizeThemesPanel();
      this.localizeUpdatesPanel();
      this.localizeInstallPanel();
      return PU.applyButtonToolbar();
    };

    PreferencesSettings.localizeSettingsPanel = function() {
      var d, i, info, j, len, len1, note, ref, ref1, results;
      ref = this.defS.settings.notes;
      for (i = 0, len = ref.length; i < len; i++) {
        note = ref[i];
        info = this.sv.querySelector("[id='" + note.id + "']");
        if (!PU.isAlreadyLocalized(info)) {
          info.innerHTML = note.html;
          info.setAttribute('data-localized', 'true');
        }
      }
      ref1 = this.defS.settings.controls;
      results = [];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        d = ref1[j];
        results.push(applyTextContentBySettingsId(d));
      }
      return results;
    };

    applyTextContentBySettingsId = function(data) {
      var ctrl, el, i, len, o, ref, results, v;
      el = document.querySelector("[id='" + data.id + "']");
      if (!el) {
        return;
      }
      ctrl = el.closest('.control-group');
      PU.applyTextWithOrg(ctrl.querySelector('.setting-title'), data.title);
      PU.applyTextWithOrg(ctrl.querySelector('.setting-description'), data.desc);
      if (!data.select) {
        return;
      }
      ref = el.querySelectorAll("option");
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        o = ref[i];
        v = o.attributes["value"].value;
        results.push(o.innerText = data.select[v]);
      }
      return results;
    };

    PreferencesSettings.localizeKeybindingsPanel = function() {
      var info, span;
      info = PreferencesSettings.sv.querySelector('.keybinding-panel>div:nth-child(2)');
      if (!PU.isAlreadyLocalized(info)) {
        info.querySelector('span:nth-child(2)').textContent = "これらのキーバインドは　";
        info.querySelector('span:nth-child(4)').textContent = "をクリック（コピー）して";
        info.querySelector('a.link').textContent = " キーマップファイル ";
        span = document.createElement('span');
        span.textContent = "に貼り付けると上書きできます。";
        info.appendChild(span);
        return info.setAttribute('data-localized', 'true');
      }
    };

    PreferencesSettings.localizeThemesPanel = function() {
      var info, span, tp1, tp2;
      info = PreferencesSettings.sv.querySelector('.themes-panel>div>div:nth-child(2)');
      if (!PU.isAlreadyLocalized(info)) {
        info.querySelector('span').textContent = "Atom は";
        info.querySelector('a.link').textContent = " スタイルシート ";
        span = document.createElement('span');
        span.textContent = "を編集してスタイルを変更することもできます。";
        info.appendChild(span);
        tp1 = PreferencesSettings.sv.querySelector('.themes-picker>div:nth-child(1)');
        tp1.querySelector('.setting-title').textContent = "インターフェーステーマ";
        tp1.querySelector('.setting-description').textContent = "タブ、ステータスバー、ツリービューとドロップダウンのスタイルを変更します。";
        tp2 = PreferencesSettings.sv.querySelector('.themes-picker>div:nth-child(2)');
        tp2.querySelector('.setting-title').textContent = "シンタックステーマ";
        tp2.querySelector('.setting-description').textContent = "テキストエディタの内側のスタイルを変更します。";
        return info.setAttribute('data-localized', 'true');
      }
    };

    PreferencesSettings.localizeUpdatesPanel = function() {
      PU.applyTextWithOrg(PreferencesSettings.sv.querySelector('.update-all-button.btn-primary'), "すべてアップデート");
      PU.applyTextWithOrg(PreferencesSettings.sv.querySelector('.update-all-button:not(.btn-primary)'), "アップデートをチェック");
      PU.applyTextWithOrg(PreferencesSettings.sv.querySelector('.alert.icon-hourglass'), "アップデートを確認中...");
      return PU.applyTextWithOrg(PreferencesSettings.sv.querySelector('.alert.icon-heart'), "インストールしたパッケージはすべて最新です！");
    };

    PreferencesSettings.localizeInstallPanel = function() {
      var info, inst, span, tc;
      PU.applySectionHeadings();
      inst = document.querySelector('div.section:not(.themes-panel)');
      info = inst.querySelector('.native-key-bindings');
      if (!PU.isAlreadyLocalized(info)) {
        info.querySelector('span:nth-child(2)').textContent = "パッケージ・テーマは ";
        tc = info.querySelector('span:nth-child(4)');
        tc.textContent = tc.textContent.replace("and are installed to", "に公開されており ");
        span = document.createElement('span');
        span.textContent = " にインストールされます。";
        info.appendChild(span);
        info.setAttribute('data-localized', 'true');
      }
      PU.applyTextWithOrg(inst.querySelector('.search-container .btn:nth-child(1)'), "パッケージ");
      return PU.applyTextWithOrg(inst.querySelector('.search-container .btn:nth-child(2)'), "テーマ");
    };

    return PreferencesSettings;

  })();

  module.exports = PreferencesSettings;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9qYXBhbmVzZS1tZW51L2xpYi9wcmVmZXJlbmNlcy1zZXR0aW5ncy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLEVBQUEsR0FBSyxPQUFBLENBQVEsb0JBQVI7O0VBRUM7QUFFSixRQUFBOzs7O0lBQUEsbUJBQUMsQ0FBQSxRQUFELEdBQVcsU0FBQTtNQUVULElBQUMsQ0FBQSxJQUFELEdBQVEsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7TUFDakMsSUFBQyxDQUFBLEVBQUQsR0FBTSxRQUFRLENBQUMsYUFBVCxDQUF1QixnQkFBdkI7TUFHTixJQUFDLENBQUEscUJBQUQsQ0FBQTtNQUdBLElBQUMsQ0FBQSx3QkFBRCxDQUFBO01BR0EsSUFBQyxDQUFBLG1CQUFELENBQUE7TUFHQSxJQUFDLENBQUEsb0JBQUQsQ0FBQTtNQUdBLElBQUMsQ0FBQSxvQkFBRCxDQUFBO2FBR0EsRUFBRSxDQUFDLGtCQUFILENBQUE7SUFyQlM7O0lBdUJYLG1CQUFDLENBQUEscUJBQUQsR0FBd0IsU0FBQTtBQUV0QixVQUFBO0FBQUE7QUFBQSxXQUFBLHFDQUFBOztRQUNFLElBQUEsR0FBTyxJQUFDLENBQUEsRUFBRSxDQUFDLGFBQUosQ0FBa0IsT0FBQSxHQUFRLElBQUksQ0FBQyxFQUFiLEdBQWdCLElBQWxDO1FBQ1AsSUFBQSxDQUFPLEVBQUUsQ0FBQyxrQkFBSCxDQUFzQixJQUF0QixDQUFQO1VBQ0UsSUFBSSxDQUFDLFNBQUwsR0FBaUIsSUFBSSxDQUFDO1VBQ3RCLElBQUksQ0FBQyxZQUFMLENBQWtCLGdCQUFsQixFQUFvQyxNQUFwQyxFQUZGOztBQUZGO0FBT0E7QUFBQTtXQUFBLHdDQUFBOztxQkFDRSw0QkFBQSxDQUE2QixDQUE3QjtBQURGOztJQVRzQjs7SUFZeEIsNEJBQUEsR0FBK0IsU0FBQyxJQUFEO0FB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QUFwQixFQUErRSxPQUEvRTthQUNBLEVBQUUsQ0FBQyxnQkFBSCxDQUFvQixJQUFJLENBQUMsYUFBTCxDQUFtQixxQ0FBbkIsQ0FBcEIsRUFBK0UsS0FBL0U7SUFicUI7Ozs7OztFQWdCekIsTUFBTSxDQUFDLE9BQVAsR0FBaUI7QUFuR2pCIiwic291cmNlc0NvbnRlbnQiOlsiUFUgPSByZXF1aXJlICcuL3ByZWZlcmVuY2VzLXV0aWwnXG5cbmNsYXNzIFByZWZlcmVuY2VzU2V0dGluZ3NcblxuICBAbG9jYWxpemU6ICgpIC0+XG5cbiAgICBAZGVmUyA9IHdpbmRvdy5KYXBhbmVzZU1lbnUuZGVmUy5TZXR0aW5nc1xuICAgIEBzdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy12aWV3JylcblxuICAgICMgU2V0dGluZ3MgcGFuZWxcbiAgICBAbG9jYWxpemVTZXR0aW5nc1BhbmVsKClcblxuICAgICMgS2V5YmluZGluZ3NcbiAgICBAbG9jYWxpemVLZXliaW5kaW5nc1BhbmVsKClcblxuICAgICMgVGhlbWVzIHBhbmVsXG4gICAgQGxvY2FsaXplVGhlbWVzUGFuZWwoKVxuXG4gICAgIyBVcGRhdGVzIHBhbmVsXG4gICAgQGxvY2FsaXplVXBkYXRlc1BhbmVsKClcblxuICAgICMgSW5zdGFsbCBwYW5lbFxuICAgIEBsb2NhbGl6ZUluc3RhbGxQYW5lbCgpXG5cbiAgICAjIEJ1dHRvbnNcbiAgICBQVS5hcHBseUJ1dHRvblRvb2xiYXIoKVxuXG4gIEBsb2NhbGl6ZVNldHRpbmdzUGFuZWw6ICgpIC0+XG4gICAgIyBOb3Rlc1xuICAgIGZvciBub3RlIGluIEBkZWZTLnNldHRpbmdzLm5vdGVzXG4gICAgICBpbmZvID0gQHN2LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9JyN7bm90ZS5pZH0nXVwiKVxuICAgICAgdW5sZXNzIFBVLmlzQWxyZWFkeUxvY2FsaXplZChpbmZvKVxuICAgICAgICBpbmZvLmlubmVySFRNTCA9IG5vdGUuaHRtbFxuICAgICAgICBpbmZvLnNldEF0dHJpYnV0ZSgnZGF0YS1sb2NhbGl6ZWQnLCAndHJ1ZScpXG5cbiAgICAjIEV2ZXJ5IHNldHRpbmdzIGl0ZW1cbiAgICBmb3IgZCBpbiBAZGVmUy5zZXR0aW5ncy5jb250cm9sc1xuICAgICAgYXBwbHlUZXh0Q29udGVudEJ5U2V0dGluZ3NJZChkKVxuXG4gIGFwcGx5VGV4dENvbnRlbnRCeVNldHRpbmdzSWQgPSAoZGF0YSkgLT5cbiAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9JyN7ZGF0YS5pZH0nXVwiKVxuICAgIHJldHVybiB1bmxlc3MgZWxcbiAgICBjdHJsID0gZWwuY2xvc2VzdCgnLmNvbnRyb2wtZ3JvdXAnKVxuICAgIFBVLmFwcGx5VGV4dFdpdGhPcmcoY3RybC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZy10aXRsZScpLCBkYXRhLnRpdGxlKVxuICAgIFBVLmFwcGx5VGV4dFdpdGhPcmcoY3RybC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZy1kZXNjcmlwdGlvbicpLCBkYXRhLmRlc2MpXG4gICAgcmV0dXJuIHVubGVzcyBkYXRhLnNlbGVjdFxuICAgIGZvciBvIGluIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIilcbiAgICAgIHYgPSBvLmF0dHJpYnV0ZXNbXCJ2YWx1ZVwiXS52YWx1ZVxuICAgICAgby5pbm5lclRleHQgPSBkYXRhLnNlbGVjdFt2XVxuXG4gIEBsb2NhbGl6ZUtleWJpbmRpbmdzUGFuZWw6ICgpID0+XG4gICAgaW5mbyA9IEBzdi5xdWVyeVNlbGVjdG9yKCcua2V5YmluZGluZy1wYW5lbD5kaXY6bnRoLWNoaWxkKDIpJylcbiAgICB1bmxlc3MgUFUuaXNBbHJlYWR5TG9jYWxpemVkKGluZm8pXG4gICAgICBpbmZvLnF1ZXJ5U2VsZWN0b3IoJ3NwYW46bnRoLWNoaWxkKDIpJykudGV4dENvbnRlbnQgPSBcIuOBk+OCjOOCieOBruOCreODvOODkOOCpOODs+ODieOBr+OAgFwiXG4gICAgICBpbmZvLnF1ZXJ5U2VsZWN0b3IoJ3NwYW46bnRoLWNoaWxkKDQpJykudGV4dENvbnRlbnQgPSBcIuOCkuOCr+ODquODg+OCr++8iOOCs+ODlOODvO+8ieOBl+OBplwiXG4gICAgICBpbmZvLnF1ZXJ5U2VsZWN0b3IoJ2EubGluaycpLnRleHRDb250ZW50ID0gXCIg44Kt44O844Oe44OD44OX44OV44Kh44Kk44OrIFwiXG4gICAgICBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gXCLjgavosrzjgorku5jjgZHjgovjgajkuIrmm7jjgY3jgafjgY3jgb7jgZnjgIJcIlxuICAgICAgaW5mby5hcHBlbmRDaGlsZChzcGFuKVxuICAgICAgaW5mby5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9jYWxpemVkJywgJ3RydWUnKVxuXG4gIEBsb2NhbGl6ZVRoZW1lc1BhbmVsOiAoKSA9PlxuICAgIGluZm8gPSBAc3YucXVlcnlTZWxlY3RvcignLnRoZW1lcy1wYW5lbD5kaXY+ZGl2Om50aC1jaGlsZCgyKScpXG4gICAgdW5sZXNzIFBVLmlzQWxyZWFkeUxvY2FsaXplZChpbmZvKVxuICAgICAgaW5mby5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQgPSBcIkF0b20g44GvXCJcbiAgICAgIGluZm8ucXVlcnlTZWxlY3RvcignYS5saW5rJykudGV4dENvbnRlbnQgPSBcIiDjgrnjgr/jgqTjg6vjgrfjg7zjg4ggXCJcbiAgICAgIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIuOCkue3qOmbhuOBl+OBpuOCueOCv+OCpOODq+OCkuWkieabtOOBmeOCi+OBk+OBqOOCguOBp+OBjeOBvuOBmeOAglwiXG4gICAgICBpbmZvLmFwcGVuZENoaWxkKHNwYW4pXG4gICAgICB0cDEgPSBAc3YucXVlcnlTZWxlY3RvcignLnRoZW1lcy1waWNrZXI+ZGl2Om50aC1jaGlsZCgxKScpXG4gICAgICB0cDEucXVlcnlTZWxlY3RvcignLnNldHRpbmctdGl0bGUnKS50ZXh0Q29udGVudCA9IFwi44Kk44Oz44K/44O844OV44Kn44O844K544OG44O844OeXCJcbiAgICAgIHRwMS5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZy1kZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID0gXCLjgr/jg5bjgIHjgrnjg4bjg7zjgr/jgrnjg5Djg7zjgIHjg4Tjg6rjg7zjg5Pjg6Xjg7zjgajjg4njg63jg4Pjg5fjg4Djgqbjg7Pjga7jgrnjgr/jgqTjg6vjgpLlpInmm7TjgZfjgb7jgZnjgIJcIlxuICAgICAgdHAyID0gQHN2LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZXMtcGlja2VyPmRpdjpudGgtY2hpbGQoMiknKVxuICAgICAgdHAyLnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5nLXRpdGxlJykudGV4dENvbnRlbnQgPSBcIuOCt+ODs+OCv+ODg+OCr+OCueODhuODvOODnlwiXG4gICAgICB0cDIucXVlcnlTZWxlY3RvcignLnNldHRpbmctZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IFwi44OG44Kt44K544OI44Ko44OH44Kj44K/44Gu5YaF5YG044Gu44K544K/44Kk44Or44KS5aSJ5pu044GX44G+44GZ44CCXCJcbiAgICAgIGluZm8uc2V0QXR0cmlidXRlKCdkYXRhLWxvY2FsaXplZCcsICd0cnVlJylcblxuICBAbG9jYWxpemVVcGRhdGVzUGFuZWw6ICgpID0+XG4gICAgUFUuYXBwbHlUZXh0V2l0aE9yZyhAc3YucXVlcnlTZWxlY3RvcignLnVwZGF0ZS1hbGwtYnV0dG9uLmJ0bi1wcmltYXJ5JyksIFwi44GZ44G544Gm44Ki44OD44OX44OH44O844OIXCIpXG4gICAgUFUuYXBwbHlUZXh0V2l0aE9yZyhAc3YucXVlcnlTZWxlY3RvcignLnVwZGF0ZS1hbGwtYnV0dG9uOm5vdCguYnRuLXByaW1hcnkpJyksIFwi44Ki44OD44OX44OH44O844OI44KS44OB44Kn44OD44KvXCIpXG4gICAgUFUuYXBwbHlUZXh0V2l0aE9yZyhAc3YucXVlcnlTZWxlY3RvcignLmFsZXJ0Lmljb24taG91cmdsYXNzJyksIFwi44Ki44OD44OX44OH44O844OI44KS56K66KqN5LitLi4uXCIpXG4gICAgUFUuYXBwbHlUZXh0V2l0aE9yZyhAc3YucXVlcnlTZWxlY3RvcignLmFsZXJ0Lmljb24taGVhcnQnKSwgXCLjgqTjg7Pjgrnjg4jjg7zjg6vjgZfjgZ/jg5Hjg4PjgrHjg7zjgrjjga/jgZnjgbnjgabmnIDmlrDjgafjgZnvvIFcIilcblxuICBAbG9jYWxpemVJbnN0YWxsUGFuZWw6ICgpIC0+XG4gICAgUFUuYXBwbHlTZWN0aW9uSGVhZGluZ3MoKVxuICAgIGluc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuc2VjdGlvbjpub3QoLnRoZW1lcy1wYW5lbCknKVxuICAgIGluZm8gPSBpbnN0LnF1ZXJ5U2VsZWN0b3IoJy5uYXRpdmUta2V5LWJpbmRpbmdzJylcbiAgICB1bmxlc3MgUFUuaXNBbHJlYWR5TG9jYWxpemVkKGluZm8pXG4gICAgICBpbmZvLnF1ZXJ5U2VsZWN0b3IoJ3NwYW46bnRoLWNoaWxkKDIpJykudGV4dENvbnRlbnQgPSBcIuODkeODg+OCseODvOOCuOODu+ODhuODvOODnuOBryBcIlxuICAgICAgdGMgPSBpbmZvLnF1ZXJ5U2VsZWN0b3IoJ3NwYW46bnRoLWNoaWxkKDQpJylcbiAgICAgIHRjLnRleHRDb250ZW50ID0gdGMudGV4dENvbnRlbnQucmVwbGFjZShcImFuZCBhcmUgaW5zdGFsbGVkIHRvXCIsIFwi44Gr5YWs6ZaL44GV44KM44Gm44GK44KKIFwiKVxuICAgICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiIOOBq+OCpOODs+OCueODiOODvOODq+OBleOCjOOBvuOBmeOAglwiXG4gICAgICBpbmZvLmFwcGVuZENoaWxkKHNwYW4pXG4gICAgICBpbmZvLnNldEF0dHJpYnV0ZSgnZGF0YS1sb2NhbGl6ZWQnLCAndHJ1ZScpXG4gICAgUFUuYXBwbHlUZXh0V2l0aE9yZyhpbnN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtY29udGFpbmVyIC5idG46bnRoLWNoaWxkKDEpJyksIFwi44OR44OD44Kx44O844K4XCIpXG4gICAgUFUuYXBwbHlUZXh0V2l0aE9yZyhpbnN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtY29udGFpbmVyIC5idG46bnRoLWNoaWxkKDIpJyksIFwi44OG44O844OeXCIpXG5cblxubW9kdWxlLmV4cG9ydHMgPSBQcmVmZXJlbmNlc1NldHRpbmdzXG4iXX0=
