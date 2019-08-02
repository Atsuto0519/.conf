(function() {
  var FindAndReplace, PU;

  PU = require('./preferences-util');

  FindAndReplace = (function() {
    function FindAndReplace() {}

    FindAndReplace._targetCommands = ['project-find:show', 'project-find:toggle', 'find-and-replace:show', 'find-and-replace:toggle', 'find-and-replace:show-replace'];

    FindAndReplace.localize = function(defF) {
      this.defF = defF;
      return atom.commands.onDidDispatch((function(_this) {
        return function(e) {
          var i, len, panel, ref, results;
          if (_this._targetCommands.includes(e.type)) {
            try {
              ref = atom.workspace.getBottomPanels();
              results = [];
              for (i = 0, len = ref.length; i < len; i++) {
                panel = ref[i];
                switch (panel.item.constructor.name) {
                  case 'ProjectFindView':
                    results.push(_this.localizeProjectFindView(panel));
                    break;
                  case 'FindView':
                    results.push(_this.localizeFindView(panel));
                    break;
                  default:
                    results.push(void 0);
                }
              }
              return results;
            } catch (error) {
              e = error;
              return console.error(e);
            }
          }
        };
      })(this));
    };

    FindAndReplace.localizeProjectFindView = function(panel) {
      var def, items, opt, panelElement;
      def = FindAndReplace.defF.ProjectFindView;
      items = panel.getItem();
      items.refs['descriptionLabel'].innerHTML = def.descriptionLabel;
      items.refs['findEditor'].placeholderText = def.findEditor;
      items.refs['findAllButton'].textContent = def.findAllButton;
      items.refs['replaceEditor'].placeholderText = def.replaceEditor;
      items.refs['replaceAllButton'].textContent = def.replaceAllButton;
      items.refs['pathsEditor'].placeholderText = def.pathsEditor;
      panelElement = document.querySelector('atom-panel > .project-find');
      FindAndReplace.localizeOnChangeOptions(items, panelElement, def);
      opt = panelElement.querySelector('.options-label .options');
      return opt.addEventListener('DOMSubtreeModified', function() {
        return FindAndReplace.localizeOnChangeOptions(items, panelElement, def);
      });
    };

    FindAndReplace.localizeFindView = function(panel) {
      var def, items, opt, panelElement;
      def = FindAndReplace.defF.FindView;
      items = panel.getItem();
      items.refs['findEditor'].placeholderText = def.findEditor;
      items.refs['nextButton'].textContent = def.nextButton;
      items.refs['findAllButton'].textContent = def.findAllButton;
      items.refs['replaceEditor'].placeholderText = def.replaceEditor;
      items.refs['replaceNextButton'].textContent = def.replaceNextButton;
      items.refs['replaceAllButton'].textContent = def.replaceAllButton;
      panelElement = document.querySelector('atom-panel > .find-and-replace');
      FindAndReplace.localizeOnChangeOptions(items, panelElement, def);
      opt = panelElement.querySelector('.options-label .options');
      return opt.addEventListener('DOMSubtreeModified', function() {
        return FindAndReplace.localizeOnChangeOptions(items, panelElement, def);
      });
    };

    FindAndReplace.localizeOnChangeOptions = function(items, panelElement, def) {
      var ol, opt, optLbl, txt;
      items.refs['descriptionLabel'].innerHTML = def.descriptionLabel;
      ol = def.OptionsLabel;
      optLbl = panelElement.querySelector('.options-label > span:first-child');
      optLbl.textContent = ol.Heading;
      opt = panelElement.querySelector('.options-label .options');
      txt = opt.textContent;
      txt = txt.replace('Regex', ol.Regex);
      txt = txt.replace('Case Sensitive', ol.CaseSensitive);
      txt = txt.replace('Case Insensitive', ol.CaseInsensitive);
      txt = txt.replace('Within Current Selection', ol.WithinCurrentSelection);
      txt = txt.replace('Whole Word', ol.WholeWord);
      return opt.textContent = txt;
    };

    return FindAndReplace;

  })();

  module.exports = FindAndReplace;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9qYXBhbmVzZS1tZW51L2xpYi9maW5kYW5kcmVwbGFjZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLEVBQUEsR0FBSyxPQUFBLENBQVEsb0JBQVI7O0VBRUM7OztJQUVKLGNBQUMsQ0FBQSxlQUFELEdBQWtCLENBQ2hCLG1CQURnQixFQUVoQixxQkFGZ0IsRUFHaEIsdUJBSGdCLEVBSWhCLHlCQUpnQixFQUtoQiwrQkFMZ0I7O0lBUWxCLGNBQUMsQ0FBQSxRQUFELEdBQVcsU0FBQyxJQUFEO01BQ1QsSUFBQyxDQUFBLElBQUQsR0FBUTthQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBZCxDQUE0QixDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUMsQ0FBRDtBQUMxQixjQUFBO1VBQUEsSUFBRyxLQUFDLENBQUEsZUFBZSxDQUFDLFFBQWpCLENBQTBCLENBQUMsQ0FBQyxJQUE1QixDQUFIO0FBQ0U7QUFDRTtBQUFBO21CQUFBLHFDQUFBOztBQUNFLHdCQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQTlCO0FBQUEsdUJBQ08saUJBRFA7aUNBQzhCLEtBQUMsQ0FBQSx1QkFBRCxDQUF5QixLQUF6QjtBQUF2QjtBQURQLHVCQUVPLFVBRlA7aUNBRXVCLEtBQUMsQ0FBQSxnQkFBRCxDQUFrQixLQUFsQjtBQUFoQjtBQUZQOztBQUFBO0FBREY7NkJBREY7YUFBQSxhQUFBO2NBS007cUJBQ0osT0FBTyxDQUFDLEtBQVIsQ0FBYyxDQUFkLEVBTkY7YUFERjs7UUFEMEI7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTVCO0lBRlM7O0lBWVgsY0FBQyxDQUFBLHVCQUFELEdBQTBCLFNBQUMsS0FBRDtBQUN4QixVQUFBO01BQUEsR0FBQSxHQUFNLGNBQUMsQ0FBQSxJQUFJLENBQUM7TUFDWixLQUFBLEdB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RSxDQUFDLEtBQXhCO01BQ04sR0FBQSxHQUFNLEdBQUcsQ0FBQyxPQUFKLENBQVksZ0JBQVosRUFBOEIsRUFBRSxDQUFDLGFBQWpDO01BQ04sR0FBQSxHQUFNLEdBQUcsQ0FBQyxPQUFKLENBQVksa0JBQVosRUFBZ0MsRUFBRSxDQUFDLGVBQW5DO01BQ04sR0FBQSxHQUFNLEdBQUcsQ0FBQyxPQUFKLENBQVksMEJBQVosRUFBd0MsRUFBRSxDQUFDLHNCQUEzQztNQUNOLEdBQUEsR0FBTSxHQUFHLENBQUMsT0FBSixDQUFZLFlBQVosRUFBMEIsRUFBRSxDQUFDLFNBQTdCO2FBQ04sR0FBRyxDQUFDLFdBQUosR0FBa0I7SUFaTTs7Ozs7O0VBYzVCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCO0FBdEVqQiIsInNvdXJjZXNDb250ZW50IjpbIlBVID0gcmVxdWlyZSAnLi9wcmVmZXJlbmNlcy11dGlsJ1xuXG5jbGFzcyBGaW5kQW5kUmVwbGFjZVxuXG4gIEBfdGFyZ2V0Q29tbWFuZHM6IFtcbiAgICAncHJvamVjdC1maW5kOnNob3cnXG4gICAgJ3Byb2plY3QtZmluZDp0b2dnbGUnXG4gICAgJ2ZpbmQtYW5kLXJlcGxhY2U6c2hvdydcbiAgICAnZmluZC1hbmQtcmVwbGFjZTp0b2dnbGUnXG4gICAgJ2ZpbmQtYW5kLXJlcGxhY2U6c2hvdy1yZXBsYWNlJ1xuICBdXG5cbiAgQGxvY2FsaXplOiAoZGVmRikgLT5cbiAgICBAZGVmRiA9IGRlZkZcbiAgICBhdG9tLmNvbW1hbmRzLm9uRGlkRGlzcGF0Y2ggKGUpID0+XG4gICAgICBpZiBAX3RhcmdldENvbW1hbmRzLmluY2x1ZGVzKGUudHlwZSlcbiAgICAgICAgdHJ5XG4gICAgICAgICAgZm9yIHBhbmVsIGluIGF0b20ud29ya3NwYWNlLmdldEJvdHRvbVBhbmVscygpXG4gICAgICAgICAgICBzd2l0Y2ggcGFuZWwuaXRlbS5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgICAgICAgICAgIHdoZW4gJ1Byb2plY3RGaW5kVmlldycgdGhlbiBAbG9jYWxpemVQcm9qZWN0RmluZFZpZXcocGFuZWwpXG4gICAgICAgICAgICAgIHdoZW4gJ0ZpbmRWaWV3JyB0aGVuIEBsb2NhbGl6ZUZpbmRWaWV3KHBhbmVsKVxuICAgICAgICBjYXRjaCBlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuXG4gIEBsb2NhbGl6ZVByb2plY3RGaW5kVmlldzogKHBhbmVsKSA9PlxuICAgIGRlZiA9IEBkZWZGLlByb2plY3RGaW5kVmlld1xuICAgIGl0ZW1zID0gcGFuZWwuZ2V0SXRlbSgpXG4gICAgaXRlbXMucmVmc1snZGVzY3JpcHRpb25MYWJlbCddLmlubmVySFRNTCA9IGRlZi5kZXNjcmlwdGlvbkxhYmVsXG4gICAgaXRlbXMucmVmc1snZmluZEVkaXRvciddLnBsYWNlaG9sZGVyVGV4dCA9IGRlZi5maW5kRWRpdG9yXG4gICAgaXRlbXMucmVmc1snZmluZEFsbEJ1dHRvbiddLnRleHRDb250ZW50ID0gZGVmLmZpbmRBbGxCdXR0b25cbiAgICBpdGVtcy5yZWZzWydyZXBsYWNlRWRpdG9yJ10ucGxhY2Vob2xkZXJUZXh0ID0gZGVmLnJlcGxhY2VFZGl0b3JcbiAgICBpdGVtcy5yZWZzWydyZXBsYWNlQWxsQnV0dG9uJ10udGV4dENvbnRlbnQgPSBkZWYucmVwbGFjZUFsbEJ1dHRvblxuICAgIGl0ZW1zLnJlZnNbJ3BhdGhzRWRpdG9yJ10ucGxhY2Vob2xkZXJUZXh0ID0gZGVmLnBhdGhzRWRpdG9yXG4gICAgXG4gICAgcGFuZWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXRvbS1wYW5lbCA+IC5wcm9qZWN0LWZpbmQnKVxuICAgIEBsb2NhbGl6ZU9uQ2hhbmdlT3B0aW9ucyhpdGVtcywgcGFuZWxFbGVtZW50LCBkZWYpXG4gICAgb3B0ID0gcGFuZWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWxhYmVsIC5vcHRpb25zJylcbiAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lciAnRE9NU3VidHJlZU1vZGlmaWVkJywgKCkgPT5cbiAgICAgIEBsb2NhbGl6ZU9uQ2hhbmdlT3B0aW9ucyhpdGVtcywgcGFuZWxFbGVtZW50LCBkZWYpXG5cbiAgQGxvY2FsaXplRmluZFZpZXc6IChwYW5lbCkgPT5cbiAgICBkZWYgPSBAZGVmRi5GaW5kVmlld1xuICAgIGl0ZW1zID0gcGFuZWwuZ2V0SXRlbSgpXG4gICAgaXRlbXMucmVmc1snZmluZEVkaXRvciddLnBsYWNlaG9sZGVyVGV4dCA9IGRlZi5maW5kRWRpdG9yXG4gICAgaXRlbXMucmVmc1snbmV4dEJ1dHRvbiddLnRleHRDb250ZW50ID0gZGVmLm5leHRCdXR0b25cbiAgICBpdGVtcy5yZWZzWydmaW5kQWxsQnV0dG9uJ10udGV4dENvbnRlbnQgPSBkZWYuZmluZEFsbEJ1dHRvblxuICAgIGl0ZW1zLnJlZnNbJ3JlcGxhY2VFZGl0b3InXS5wbGFjZWhvbGRlclRleHQgPSBkZWYucmVwbGFjZUVkaXRvclxuICAgIGl0ZW1zLnJlZnNbJ3JlcGxhY2VOZXh0QnV0dG9uJ10udGV4dENvbnRlbnQgPSBkZWYucmVwbGFjZU5leHRCdXR0b25cbiAgICBpdGVtcy5yZWZzWydyZXBsYWNlQWxsQnV0dG9uJ10udGV4dENvbnRlbnQgPSBkZWYucmVwbGFjZUFsbEJ1dHRvblxuICAgIFxuICAgIHBhbmVsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2F0b20tcGFuZWwgPiAuZmluZC1hbmQtcmVwbGFjZScpXG4gICAgQGxvY2FsaXplT25DaGFuZ2VPcHRpb25zKGl0ZW1zLCBwYW5lbEVsZW1lbnQsIGRlZilcbiAgICBvcHQgPSBwYW5lbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtbGFiZWwgLm9wdGlvbnMnKVxuICAgIG9wdC5hZGRFdmVudExpc3RlbmVyICdET01TdWJ0cmVlTW9kaWZpZWQnLCAoKSA9PlxuICAgICAgQGxvY2FsaXplT25DaGFuZ2VPcHRpb25zKGl0ZW1zLCBwYW5lbEVsZW1lbnQsIGRlZilcblxuICBAbG9jYWxpemVPbkNoYW5nZU9wdGlvbnM6IChpdGVtcywgcGFuZWxFbGVtZW50LCBkZWYpID0+XG4gICAgaXRlbXMucmVmc1snZGVzY3JpcHRpb25MYWJlbCddLmlubmVySFRNTCA9IGRlZi5kZXNjcmlwdGlvbkxhYmVsXG4gICAgb2wgPSBkZWYuT3B0aW9uc0xhYmVsXG4gICAgb3B0TGJsID0gcGFuZWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWxhYmVsID4gc3BhbjpmaXJzdC1jaGlsZCcpXG4gICAgb3B0TGJsLnRleHRDb250ZW50ID0gb2wuSGVhZGluZ1xuICAgIG9wdCA9IHBhbmVsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy1sYWJlbCAub3B0aW9ucycpXG4gICAgdHh0ID0gb3B0LnRleHRDb250ZW50XG4gICAgdHh0ID0gdHh0LnJlcGxhY2UgJ1JlZ2V4Jywgb2wuUmVnZXhcbiAgICB0eHQgPSB0eHQucmVwbGFjZSAnQ2FzZSBTZW5zaXRpdmUnLCBvbC5DYXNlU2Vuc2l0aXZlXG4gICAgdHh0ID0gdHh0LnJlcGxhY2UgJ0Nhc2UgSW5zZW5zaXRpdmUnLCBvbC5DYXNlSW5zZW5zaXRpdmVcbiAgICB0eHQgPSB0eHQucmVwbGFjZSAnV2l0aGluIEN1cnJlbnQgU2VsZWN0aW9uJywgb2wuV2l0aGluQ3VycmVudFNlbGVjdGlvblxuICAgIHR4dCA9IHR4dC5yZXBsYWNlICdXaG9sZSBXb3JkJywgb2wuV2hvbGVXb3JkXG4gICAgb3B0LnRleHRDb250ZW50ID0gdHh0XG5cbm1vZHVsZS5leHBvcnRzID0gRmluZEFuZFJlcGxhY2VcbiJdfQ==
