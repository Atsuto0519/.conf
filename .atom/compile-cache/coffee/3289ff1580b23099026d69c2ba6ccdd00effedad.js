(function() {
  var PreferencesUtil;

  PreferencesUtil = (function() {
    function PreferencesUtil() {}

    PreferencesUtil.isAlreadyLocalized = function(elem) {
      var localized;
      if (elem) {
        localized = elem.getAttribute('data-localized');
      }
      return localized === 'true';
    };

    PreferencesUtil.applyTextWithOrg = function(elem, text) {
      var before;
      if (!text) {
        return;
      }
      before = String(elem.textContent);
      if (before === text) {
        return;
      }
      elem.textContent = text;
      elem.setAttribute('title', before);
      return elem.setAttribute('data-localized', 'true');
    };

    PreferencesUtil.getTextMatchElement = function(area, query, text) {
      var el, elems, i, len, result;
      elems = area.querySelectorAll(query);
      result;
      for (i = 0, len = elems.length; i < len; i++) {
        el = elems[i];
        if (el.textContent.includes(text)) {
          result = el;
          break;
        }
      }
      return result;
    };

    PreferencesUtil.applySectionHeadings = function(force) {
      var el, i, j, len, len1, ref, ref1, results, sh, sv;
      sv = document.querySelector('.settings-view');
      ref = window.JapaneseMenu.defS.Settings.sectionHeadings;
      for (i = 0, len = ref.length; i < len; i++) {
        sh = ref[i];
        el = this.getTextMatchElement(sv, '.section-heading', sh.label);
        if (!el) {
          continue;
        }
        if (!this.isAlreadyLocalized(el) || force) {
          this.applyTextWithOrg(el, sh.value);
        }
      }
      ref1 = window.JapaneseMenu.defS.Settings.subSectionHeadings;
      results = [];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        sh = ref1[j];
        el = this.getTextMatchElement(sv, '.sub-section-heading', sh.label);
        if (!el) {
          continue;
        }
        if (!this.isAlreadyLocalized(el) || force) {
          results.push(this.applyTextWithOrg(el, sh.value));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    PreferencesUtil.applyButtonToolbar = function() {
      var btn, i, j, k, l, len, len1, len2, len3, len4, m, ref, ref1, ref2, ref3, ref4, results, sv;
      sv = document.querySelector('.settings-view');
      ref = sv.querySelectorAll('.meta-controls .install-button');
      for (i = 0, len = ref.length; i < len; i++) {
        btn = ref[i];
        this.applyTextWithOrg(btn, "インストール");
      }
      ref1 = sv.querySelectorAll('.meta-controls .settings');
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        btn = ref1[j];
        this.applyTextWithOrg(btn, "設定");
      }
      ref2 = sv.querySelectorAll('.meta-controls .uninstall-button');
      for (k = 0, len2 = ref2.length; k < len2; k++) {
        btn = ref2[k];
        this.applyTextWithOrg(btn, "アンインストール");
      }
      ref3 = sv.querySelectorAll('.meta-controls .icon-playback-pause span');
      for (l = 0, len3 = ref3.length; l < len3; l++) {
        btn = ref3[l];
        this.applyTextWithOrg(btn, "無効にする");
      }
      ref4 = sv.querySelectorAll('.meta-controls .icon-playback-play span');
      results = [];
      for (m = 0, len4 = ref4.length; m < len4; m++) {
        btn = ref4[m];
        results.push(this.applyTextWithOrg(btn, "有効にする"));
      }
      return results;
    };

    return PreferencesUtil;

  })();

  module.exports = PreferencesUtil;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9qYXBhbmVzZS1tZW51L2xpYi9wcmVmZXJlbmNlcy11dGlsLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7O0VBQU07OztJQUVKLGVBQUMsQ0FBQSxrQkFBRCxHQUFzQixTQUFDLElBQUQ7QUFDcEIsVUFBQTtNQUFBLElBQW1ELElBQW5EO1FBQUEsU0FBQSxHQUFZLElBQUksQ0FBQyxZQUFMLENBQWtCLGdCQUFsQixFQUFaOztBQUNBLGFBQU8sU0FBQSxLQUFhO0lBRkE7O0lBSXRCLGVBQUMsQ0FBQSxnQkFBRCxHQUFvQixTQUFDLElBQUQsRUFBTyxJQUFQO0FBQ2xCLFVBQUE7TUFBQSxJQUFBLENBQWMsSUFBZDtBQUFBLGVBQUE7O01BQ0EsTUFBQSxHQUFTLE1BQUEsQ0FBTyxJQUFJLENBQUMsV0FBWjtNQUNULElBQVUsTUFBQSxLQUFVLElBQXBCO0FBQUEsZUFBQTs7TUFDQSxJQUFJLENBQUMsV0FBTCxHQUFtQjtNQUNuQixJQUFJLENBQUMsWUFBTCxDQUFrQixPQUFsQixFQUEyQixNQUEzQjthQUNBLElBQUksQ0FBQyxZQUFMLENBQWtCLGdCQUFsQixFQUFvQyxNQUFwQztJQU5rQjs7SUFRcEIsZUFBQyxDQUFBLG1CQUFELEdBQXVCLFNBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxJQUFkO0FBQ3JCLFVBQUE7TUFBQSxLQUFBLEdBQVEsSUFBSSxDQUFDLGdCQUFMLENBQXNCLEtBQXRCO01BQ1I7QUFDQSxXQUFBLHVDQUFBOztRQUNFLElBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFmLENBQXdCLElBQXhCLENBQUg7VUFDRSxNQUFBLEdBQVM7QUFDVCxnQkFGRjs7QUFERjtBQUlBLGFBQU87SUFQYzs7SUFTdkIsZUFBQyxDQUFBLG9CQUFELEdBQXdCLFNBQUMsS0FBRDtBQUN0QixVQUFBO01BQUEsRUFBQSxHQUFLLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdCQUF2QjtBQUNMO0FBQUEsV0FBQSxxQ0FBQTs7UUFDRSxFQUFBLEdBQUssSUFBQyxDQUFBLG1CQUFELENBQXFCLEVBQXJCLEVBQXlCLGtCQUF6QixFQUE2QyxFQUFFLENBQUMsS0FBaEQ7UUFDTCxJQUFBLENBQWdCLEVBQWhCO0FBQUEsbUJBQUE7O1FBQ0EsSUFBRyxDQUFDLElBQUMsQ0FBQSxrQkFBRCxDQUFvQixFQUFwQixDQUFELElBQTRCLEtBQS9CO1VBQ0UsSUFBQyxDQUFBLGdCQUFELENBQWtCLEVBQWxCLEVBQXNCLEVBQUUsQ0FBQyxLQUF6QixFQURGOztBQUhGO0FBS0E7QUFBQTtXQUFBLHdDQUFBOztRQUNFLEVBQUEsR0FBSyxJQUFDLENBQUEsbUJBQUQsQ0FBcUIsRUFBckIsRUFBeUIsc0JBQXpCLEVBQWlELEVBQUUsQ0FBQyxLQUFwRDtRQUNMLElBQUEsQ0FBZ0IsRUFBaEI7QUFBQSxtQkFBQTs7UUFDQSxJQUFHLENBQUMsSUFBQyxDQUFBLGtCQUFELENBQW9CLEVBQXBCLENBQUQsSUFBNEIsS0FBL0I7dUJBQ0UsSUFBQyxDQUFBLGdCQUFELENBQWtCLEVBQWxCLEVBQXNCLEVBQUUsQ0FBQyxLQUF6QixHQURGO1NBQUEsTUFBQTsrQkFBQTs7QUFIRjs7SUFQc0I7O0lBYXhCLGVBQUMsQ0FBQSxrQkFBRCxHQUFzQixTQUFBO0FBQ3BCLFVBQUE7TUFBQSxFQUFBLEdBQUssUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCO0FBQ0w7QUFBQSxXQUFBLHFDQUFBOztRQUNFLElBQUMsQ0FBQSxnQkFBRCxDQUFrQixHQUFsQixFQUF1QixRQUF2QjtBQURGO0FBRUE7QUFBQSxXQUFBLHdDQUFBOztRQUNFLElBQUMsQ0FBQSxnQkFBRCxDQUFrQixHQUFsQixFQUF1QixJQUF2QjtBQURGO0FBRUE7QUFBQSxXQUFBLHdDQUFBOztRQUNFLElBQUMsQ0FBQSxnQkFBRCxDQUFrQixHQUFsQixFQUF1QixVQUF2QjtBQURGO0FBRUE7QUFBQSxXQUFBLHdDQUFBOztRQUNFLElBQUMsQ0FBQSxnQkFBRCxDQUFrQixHQUFsQixFQUF1QixPQUF2QjtBQURGO0FBRUE7QUFBQTtXQUFBLHdDQUFBOztxQkFDRSxJQUFDLENBQUEsZ0JBQUQsQ0FBa0IsR0FBbEIsRUFBdUIsT0FBdkI7QUFERjs7SUFWb0I7Ozs7OztFQWF4QixNQUFNLENBQUMsT0FBUCxHQUFpQjtBQWpEakIiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcmVmZXJlbmNlc1V0aWxcblxuICBAaXNBbHJlYWR5TG9jYWxpemVkID0gKGVsZW0pIC0+XG4gICAgbG9jYWxpemVkID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9jYWxpemVkJykgaWYgZWxlbVxuICAgIHJldHVybiBsb2NhbGl6ZWQgPT0gJ3RydWUnXG5cbiAgQGFwcGx5VGV4dFdpdGhPcmcgPSAoZWxlbSwgdGV4dCkgLT5cbiAgICByZXR1cm4gdW5sZXNzIHRleHRcbiAgICBiZWZvcmUgPSBTdHJpbmcoZWxlbS50ZXh0Q29udGVudClcbiAgICByZXR1cm4gaWYgYmVmb3JlID09IHRleHRcbiAgICBlbGVtLnRleHRDb250ZW50ID0gdGV4dFxuICAgIGVsZW0uc2V0QXR0cmlidXRlKCd0aXRsZScsIGJlZm9yZSlcbiAgICBlbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1sb2NhbGl6ZWQnLCAndHJ1ZScpXG5cbiAgQGdldFRleHRNYXRjaEVsZW1lbnQgPSAoYXJlYSwgcXVlcnksIHRleHQpIC0+XG4gICAgZWxlbXMgPSBhcmVhLnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpXG4gICAgcmVzdWx0XG4gICAgZm9yIGVsIGluIGVsZW1zXG4gICAgICBpZiBlbC50ZXh0Q29udGVudC5pbmNsdWRlcyh0ZXh0KVxuICAgICAgICByZXN1bHQgPSBlbFxuICAgICAgICBicmVha1xuICAgIHJldHVybiByZXN1bHRcblxuICBAYXBwbHlTZWN0aW9uSGVhZGluZ3MgPSAoZm9yY2UpIC0+XG4gICAgc3YgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3MtdmlldycpXG4gICAgZm9yIHNoIGluIHdpbmRvdy5KYXBhbmVzZU1lbnUuZGVmUy5TZXR0aW5ncy5zZWN0aW9uSGVhZGluZ3NcbiAgICAgIGVsID0gQGdldFRleHRNYXRjaEVsZW1lbnQoc3YsICcuc2VjdGlvbi1oZWFkaW5nJywgc2gubGFiZWwpXG4gICAgICBjb250aW51ZSB1bmxlc3MgZWxcbiAgICAgIGlmICFAaXNBbHJlYWR5TG9jYWxpemVkKGVsKSB8fCBmb3JjZVxuICAgICAgICBAYXBwbHlUZXh0V2l0aE9yZyhlbCwgc2gudmFsdWUpXG4gICAgZm9yIHNoIGluIHdpbmRvdy5KYXBhbmVzZU1lbnUuZGVmUy5TZXR0aW5ncy5zdWJTZWN0aW9uSGVhZGluZ3NcbiAgICAgIGVsID0gQGdldFRleHRNYXRjaEVsZW1lbnQoc3YsICcuc3ViLXNlY3Rpb24taGVhZGluZycsIHNoLmxhYmVsKVxuICAgICAgY29udGludWUgdW5sZXNzIGVsXG4gICAgICBpZiAhQGlzQWxyZWFkeUxvY2FsaXplZChlbCkgfHwgZm9yY2VcbiAgICAgICAgQGFwcGx5VGV4dFdpdGhPcmcoZWwsIHNoLnZhbHVlKVxuXG4gIEBhcHBseUJ1dHRvblRvb2xiYXIgPSAoKSAtPlxuICAgIHN2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHRpbmdzLXZpZXcnKVxuICAgIGZvciBidG4gaW4gc3YucXVlcnlTZWxlY3RvckFsbCgnLm1ldGEtY29udHJvbHMgLmluc3RhbGwtYnV0dG9uJylcbiAgICAgIEBhcHBseVRleHRXaXRoT3JnKGJ0biwgXCLjgqTjg7Pjgrnjg4jjg7zjg6tcIilcbiAgICBmb3IgYnRuIGluIHN2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZXRhLWNvbnRyb2xzIC5zZXR0aW5ncycpXG4gICAgICBAYXBwbHlUZXh0V2l0aE9yZyhidG4sIFwi6Kit5a6aXCIpXG4gICAgZm9yIGJ0biBpbiBzdi5xdWVyeVNlbGVjdG9yQWxsKCcubWV0YS1jb250cm9scyAudW5pbnN0YWxsLWJ1dHRvbicpXG4gICAgICBAYXBwbHlUZXh0V2l0aE9yZyhidG4sIFwi44Ki44Oz44Kk44Oz44K544OI44O844OrXCIpXG4gICAgZm9yIGJ0biBpbiBzdi5xdWVyeVNlbGVjdG9yQWxsKCcubWV0YS1jb250cm9scyAuaWNvbi1wbGF5YmFjay1wYXVzZSBzcGFuJylcbiAgICAgIEBhcHBseVRleHRXaXRoT3JnKGJ0biwgXCLnhKHlirnjgavjgZnjgotcIilcbiAgICBmb3IgYnRuIGluIHN2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZXRhLWNvbnRyb2xzIC5pY29uLXBsYXliYWNrLXBsYXkgc3BhbicpXG4gICAgICBAYXBwbHlUZXh0V2l0aE9yZyhidG4sIFwi5pyJ5Yq544Gr44GZ44KLXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gUHJlZmVyZW5jZXNVdGlsXG4iXX0=
