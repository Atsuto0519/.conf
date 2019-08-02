
/*
  lib/main.coffee
 */

(function() {
  var MarkdownScrlSync, SubAtom, log, mix,
    slice = [].slice;

  log = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return console.log.apply(console, ['markdown-scroll, main:'].concat(args));
  };

  SubAtom = require('sub-atom');

  MarkdownScrlSync = (function() {
    function MarkdownScrlSync() {}

    MarkdownScrlSync.prototype.activate = function(state) {
      var MarkdownPreviewView, TextEditor, pathUtil, prvwPkg, viewPath;
      pathUtil = require('path');
      TextEditor = require('atom').TextEditor;
      this.subs = new SubAtom;
      if (!(prvwPkg = atom.packages.getLoadedPackage('markdown-preview')) && !(prvwPkg = atom.packages.getLoadedPackage('markdown-preview-plus'))) {
        log('markdown preview package not found');
        return;
      }
      viewPath = pathUtil.join(prvwPkg.path, 'lib/markdown-preview-view');
      MarkdownPreviewView = require(viewPath);
      return this.subs.add(atom.workspace.observeActivePaneItem((function(_this) {
        return function(editor) {
          var i, isMarkdown, len, previewView, ref;
          isMarkdown = function(editor) {
            var fext, fpath, i, len, name, path, ref, ref1, ref2;
            ref = ["GitHub Markdown", "CoffeeScript (Literate)"];
            for (i = 0, len = ref.length; i < len; i++) {
              name = ref[i];
              if (((ref1 = editor.getGrammar()) != null ? ref1.name : void 0) === name) {
                return true;
              }
            }
            if ((path = editor.getPath())) {
              ref2 = path.split('.'), fpath = ref2[0], fext = ref2[ref2.length - 1];
              if (fext.toLowerCase() === 'md') {
                return true;
              }
            }
            return false;
          };
          if (editor instanceof TextEditor && editor.alive && isMarkdown(editor)) {
            _this.stopTracking();
            ref = atom.workspace.getPaneItems();
            for (i = 0, len = ref.length; i < len; i++) {
              previewView = ref[i];
              if (previewView instanceof MarkdownPreviewView && previewView.editor === editor) {
                _this.startTracking(editor, previewView);
                break;
              }
            }
            return null;
          }
        };
      })(this)));
    };

    MarkdownScrlSync.prototype.startTracking = function(editor1, previewView) {
      this.editor = editor1;
      this.editorView = atom.views.getView(this.editor);
      this.previewEle = previewView.element;
      this.chrHgt = this.editor.getLineHeightInPixels();
      this.lastScrnRow = null;
      this.lastChrOfs = 0;
      this.setMap();
      this.chkScroll('init');
      this.subs2 = new SubAtom;
      this.subs2.add(this.editor.onDidStopChanging((function(_this) {
        return function() {
          _this.setMap();
          return _this.chkScroll('changed');
        };
      })(this)));
      this.subs2.add(this.editor.onDidChangeCursorPosition((function(_this) {
        return function() {
          return _this.chkScroll('cursorMoved');
        };
      })(this)));
      this.subs2.add(this.editorView.onDidChangeScrollTop((function(_this) {
        return function() {
          return _this.chkScroll('newtop');
        };
      })(this)));
      return this.subs2.add(this.editor.onDidDestroy((function(_this) {
        return function() {
          return _this.stopTracking();
        };
      })(this)));
    };

    MarkdownScrlSync.prototype.stopTracking = function() {
      if (this.subs2) {
        this.subs2.dispose();
      }
      return this.subs2 = null;
    };

    MarkdownScrlSync.prototype.deactivate = function() {
      this.stopTracking();
      return this.subs.dispose();
    };

    return MarkdownScrlSync;

  })();

  mix = function(mixinName) {
    var i, key, len, mixin, ref, results;
    mixin = require('./' + mixinName);
    ref = Object.keys(mixin);
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      key = ref[i];
      results.push(MarkdownScrlSync.prototype[key] = mixin[key]);
    }
    return results;
  };

  mix('map');

  mix('scroll');

  mix('utils');

  module.exports = new MarkdownScrlSync;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9tYXJrZG93bi1zY3JvbGwtc3luYy9saWIvbWFpbi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0FBQUE7QUFBQSxNQUFBLG1DQUFBO0lBQUE7O0VBSUEsR0FBQSxHQUFNLFNBQUE7QUFDSixRQUFBO0lBREs7V0FDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQVosQ0FBa0IsT0FBbEIsRUFBMkIsQ0FBQyx3QkFBRCxDQUEwQixDQUFDLE1BQTNCLENBQWtDLElBQWxDLENBQTNCO0VBREk7O0VBR04sT0FBQSxHQUFXLE9BQUEsQ0FBUSxVQUFSOztFQUVMOzs7K0JBRUosUUFBQSxHQUFVLFNBQUMsS0FBRDtBQUNSLFVBQUE7TUFBQSxRQUFBLEdBQWUsT0FBQSxDQUFRLE1BQVI7TUFDZCxhQUFjLE9BQUEsQ0FBUSxNQUFSO01BQ2YsSUFBQyxDQUFBLElBQUQsR0FBZSxJQUFJO01BRW5CLElBQUcsQ0FBSSxDQUFDLE9BQUEsR0FBVSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFkLENBQStCLGtCQUEvQixDQUFYLENBQUosSUFDQSxDQUFJLENBQUMsT0FBQSxHQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWQsQ0FBK0IsdUJBQS9CLENBQVgsQ0FEUDtRQUVFLEdBQUEsQ0FBSSxvQ0FBSjtBQUNBLGVBSEY7O01BS0EsUUFBQSxHQUFXLFFBQVEsQ0FBQyxJQUFULENBQWMsT0FBTyxDQUFDLElBQXRCLEVBQTRCLDJCQUE1QjtNQUNYLG1CQUFBLEdBQXVCLE9BQUEsQ0FBUSxRQUFSO2FBRXZCLElBQUMsQ0FBQSxJQUFJLENBQUMsR0FBTixDQUFVLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQWYsQ0FBcUMsQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFDLE1BQUQ7QUFDN0MsY0FBQTtVQUFBLFVBQUEsR0FBYSxTQUFDLE1BQUQ7QUFDWCxnQkFBQTtB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QUMsT0FBTixDQUFBO0lBRlU7Ozs7OztFQUlkLEdBQUEsR0FBTSxTQUFDLFNBQUQ7QUFDSixRQUFBO0lBQUEsS0FBQSxHQUFRLE9BQUEsQ0FBUSxJQUFBLEdBQU8sU0FBZjtBQUNSO0FBQUE7U0FBQSxxQ0FBQTs7bUJBQ0UsZ0JBQWdCLENBQUMsU0FBVSxDQUFBLEdBQUEsQ0FBM0IsR0FBa0MsS0FBTSxDQUFBLEdBQUE7QUFEMUM7O0VBRkk7O0VBS04sR0FBQSxDQUFJLEtBQUo7O0VBQ0EsR0FBQSxDQUFJLFFBQUo7O0VBQ0EsR0FBQSxDQUFJLE9BQUo7O0VBRUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsSUFBSTtBQTdFckIiLCJzb3VyY2VzQ29udGVudCI6WyIjIyNcbiAgbGliL21haW4uY29mZmVlXG4jIyNcblxubG9nID0gKGFyZ3MuLi4pIC0+IFxuICBjb25zb2xlLmxvZy5hcHBseSBjb25zb2xlLCBbJ21hcmtkb3duLXNjcm9sbCwgbWFpbjonXS5jb25jYXQgYXJnc1xuXG5TdWJBdG9tICA9IHJlcXVpcmUgJ3N1Yi1hdG9tJ1xuXG5jbGFzcyBNYXJrZG93blNjcmxTeW5jXG4gIFxuICBhY3RpdmF0ZTogKHN0YXRlKSAtPlxuICAgIHBhdGhVdGlsICAgICA9IHJlcXVpcmUgJ3BhdGgnXG4gICAge1RleHRFZGl0b3J9ID0gcmVxdWlyZSAnYXRvbSdcbiAgICBAc3VicyAgICAgICAgPSBuZXcgU3ViQXRvbVxuXG4gICAgaWYgbm90IChwcnZ3UGtnID0gYXRvbS5wYWNrYWdlcy5nZXRMb2FkZWRQYWNrYWdlICdtYXJrZG93bi1wcmV2aWV3JykgYW5kXG4gICAgICAgbm90IChwcnZ3UGtnID0gYXRvbS5wYWNrYWdlcy5nZXRMb2FkZWRQYWNrYWdlICdtYXJrZG93bi1wcmV2aWV3LXBsdXMnKVxuICAgICAgbG9nICdtYXJrZG93biBwcmV2aWV3IHBhY2thZ2Ugbm90IGZvdW5kJ1xuICAgICAgcmV0dXJuXG5cbiAgICB2aWV3UGF0aCA9IHBhdGhVdGlsLmpvaW4gcHJ2d1BrZy5wYXRoLCAnbGliL21hcmtkb3duLXByZXZpZXctdmlldydcbiAgICBNYXJrZG93blByZXZpZXdWaWV3ICA9IHJlcXVpcmUgdmlld1BhdGhcbiAgICBcbiAgICBAc3Vicy5hZGQgYXRvbS53b3Jrc3BhY2Uub2JzZXJ2ZUFjdGl2ZVBhbmVJdGVtIChlZGl0b3IpID0+XG4gICAgICBpc01hcmtkb3duID0gKGVkaXRvciktPlxuICAgICAgICBmb3IgbmFtZSBpbiBbXCJHaXRIdWIgTWFya2Rvd25cIiwgXCJDb2ZmZWVTY3JpcHQgKExpdGVyYXRlKVwiXVxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIGVkaXRvci5nZXRHcmFtbWFyKCk/Lm5hbWUgaXMgbmFtZVxuICAgICAgICBpZihwYXRoID0gZWRpdG9yLmdldFBhdGgoKSlcbiAgICAgICAgICBbZnBhdGgsIC4uLiwgZmV4dF0gPSBwYXRoLnNwbGl0KCcuJylcbiAgICAgICAgICByZXR1cm4gdHJ1ZSBpZiBmZXh0LnRvTG93ZXJDYXNlKCkgaXMgJ21kJ1xuICAgICAgICBmYWxzZVxuICAgICAgaWYgZWRpdG9yIGluc3RhbmNlb2YgVGV4dEVkaXRvciBhbmRcbiAgICAgICAgIGVkaXRvci5hbGl2ZSAgICAgICAgICAgICAgICAgYW5kXG4gICAgICAgICBpc01hcmtkb3duKGVkaXRvcilcbiAgICAgICAgQHN0b3BUcmFja2luZygpXG4gICAgICAgIGZvciBwcmV2aWV3VmlldyBpbiBhdG9tLndvcmtzcGFjZS5nZXRQYW5lSXRlbXMoKSBcbiAgICAgICAgICBpZiBwcmV2aWV3VmlldyBpbnN0YW5jZW9mIE1hcmtkb3duUHJldmlld1ZpZXcgYW5kIFxuICAgICAgICAgICAgIHByZXZpZXdWaWV3LmVkaXRvciBpcyBlZGl0b3JcbiAgICAgICAgICAgIEBzdGFydFRyYWNraW5nIGVkaXRvciwgcHJldmlld1ZpZXdcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIG51bGxcblxuICBzdGFydFRyYWNraW5nOiAoQGVkaXRvciwgcHJldmlld1ZpZXcpIC0+XG4gICAgQGVkaXRvclZpZXcgICAgPSBhdG9tLnZpZXdzLmdldFZpZXcgQGVkaXRvclxuICAgIEBwcmV2aWV3RWxlICAgID0gcHJldmlld1ZpZXcuZWxlbWVudFxuICAgIFxuICAgIEBjaHJIZ3QgPSBAZWRpdG9yLmdldExpbmVIZWlnaHRJblBpeGVscygpXG4gICAgQGxhc3RTY3JuUm93ID0gbnVsbFxuICAgIEBsYXN0Q2hyT2ZzICA9IDBcbiAgICBcbiAgICBAc2V0TWFwKClcbiAgICBAY2hrU2Nyb2xsICdpbml0J1xuICAgIFxuICAgIEBzdWJzMiA9IG5ldyBTdWJBdG9tXG4gICAgQHN1YnMyLmFkZCBAZWRpdG9yICAgIC5vbkRpZFN0b3BDaGFuZ2luZyAgICAgICAgID0+IEBzZXRNYXAoKTsgQGNoa1Njcm9sbCAnY2hhbmdlZCdcbiAgICBAc3ViczIuYWRkIEBlZGl0b3IgICAgLm9uRGlkQ2hhbmdlQ3Vyc29yUG9zaXRpb24gPT4gQGNoa1Njcm9sbCAnY3Vyc29yTW92ZWQnXG4gICAgQHN1YnMyLmFkZCBAZWRpdG9yVmlldy5vbkRpZENoYW5nZVNjcm9sbFRvcCAgICAgID0+IEBjaGtTY3JvbGwgJ25ld3RvcCdcbiAgICBAc3ViczIuYWRkIEBlZGl0b3IgICAgLm9uRGlkRGVzdHJveSAgICAgICAgICAgICAgPT4gQHN0b3BUcmFja2luZygpXG4gICAgXG4gIHN0b3BUcmFja2luZzogLT5cbiAgICBAc3ViczIuZGlzcG9zZSgpIGlmIEBzdWJzMlxuICAgIEBzdWJzMiA9IG51bGxcbiAgICAgIFxuICBkZWFjdGl2YXRlOiAtPiBcbiAgICBAc3RvcFRyYWNraW5nKClcbiAgICBAc3Vicy5kaXNwb3NlKClcblxubWl4ID0gKG1peGluTmFtZSkgLT5cbiAgbWl4aW4gPSByZXF1aXJlICcuLycgKyBtaXhpbk5hbWVcbiAgZm9yIGtleSBpbiBPYmplY3Qua2V5cyBtaXhpblxuICAgIE1hcmtkb3duU2NybFN5bmMucHJvdG90eXBlW2tleV0gPSBtaXhpbltrZXldXG5cbm1peCAnbWFwJ1xubWl4ICdzY3JvbGwnXG5taXggJ3V0aWxzJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBNYXJrZG93blNjcmxTeW5jXG4iXX0=
