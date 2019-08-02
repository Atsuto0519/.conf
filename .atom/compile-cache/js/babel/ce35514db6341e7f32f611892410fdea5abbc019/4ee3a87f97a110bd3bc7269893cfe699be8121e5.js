var convert = _asyncToGenerator(function* () {
  try {
    mdpreview = atom.packages.getActivePackage('markdown-preview');
    if (!mdpreview) {
      mdpreview = atom.packages.getActivePackage('markdown-preview-plus');
      if (mdpreview.name == 'markdown-preview-plus') {
        throw new Error('MPP-ERROR');
      }
    }
    var activeEditor = atom.workspace.getActiveTextEditor();
    var inPath = activeEditor.getPath();
    var _outPath = util.getOutputPath(inPath);
    var html = converter.htmlFromPreview();
    html = converter.convertImgSrcToURI(html);
    html = yield converter.styleHtml(html);
    html = converter.uglyFix(html);
    makePdf(html, _outPath);
  } catch (err) {
    throw err;
  }
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { var callNext = step.bind(null, 'next'); var callThrow = step.bind(null, 'throw'); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(callNext, callThrow); } } callNext(); }); }; }

/** @babel */

// NOTE: this file is legacy code.
// It will only be fixed in case of API changes in its dependent modules.

var util = require('./util');

var converter = {
  htmlFromPreview: function htmlFromPreview() {
    var cb = atom.clipboard;
    var old = cb.read(); //save old clipboard contents
    mdpreview.mainModule.copyHTML(); //get html on clipboard
    var dataString = cb.read();
    cb.write(old); //put old clipboard contents back
    return dataString;
  },
  convertImgSrcToURI: function convertImgSrcToURI(inputHtml) {
    // puts all "img src" in URI form (i.e. "file://")
    var div = document.createElement('div');
    div.innerHTML = inputHtml;
    var imgs = div.getElementsByTagName('img');
    for (var s = 0; s < imgs.length; s++) {
      imgs[s].src = processSrc(imgs[s].attributes.src.value);
    }
    return div.innerHTML;
  },
  styleHtml: _asyncToGenerator(function* (inputHtml) {
    var wrappedHtml = '<body class="markdown-preview native-key-binding markdown-body">' + inputHtml + '</body>';
    var styles = [];
    var fs = require('fs');
    var less = require('less');
    styles.push(fs.readFileSync(__dirname + '/github-markdown.css', 'utf-8'));
    styles.push(atom.themes.getActiveThemes()[0].stylesheets[0][1]);
    if (fs.existsSync(atom.styles.getUserStyleSheetPath(), 'utf8')) {
      //add user stylesheet to html if it exists
      var upath = atom.styles.getUserStyleSheetPath();
      var ustyle = fs.readFileSync(upath, 'utf8');
      // compiling less to css if file extension is .less
      if (upath.substr(upath.length - 5).toLowerCase() == '.less') {
        renderedStyle = yield less.render(ustyle);
        ustyle = renderedStyle.css;
      }
      styles.push(ustyle);
    }
    var styleString = '';
    for (var s in styles) {
      styleString += '\n\n' + styles[s];
    }
    styleString = '<style>' + styleString + '</style>';
    return styleString + wrappedHtml;
  }),
  uglyFix: function uglyFix(inputHtml) {
    // Ugly Fix 1:
    base64hr = 'iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OENDRjNBN0E2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OENDRjNBN0I2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Q0NGM0E3ODY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Q0NGM0E3OTY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqqezsUAAAAfSURBVHjaYmRABcYwBiM2QSA4y4hNEKYDQxAEAAIMAHNGAzhkPOlYAAAAAElFTkSuQmCC';
    hrURI = '"atom://' + mdpreview.name + '/assets/hr.png"';
    inputHtml = inputHtml.split(hrURI).join('"data:image/png;base64,' + base64hr + '"');
    // Ugly Fix 2:
    inputHtml = inputHtml.split(',\n:host {').join(' {');
    inputHtml = inputHtml.split(',\n:host').join(',');
    inputHtml = inputHtml.split(':host').join('');
    return inputHtml;
  }
};

function makePdf(inputHtml, outputPath) {
  var pdf = require('html-pdf');
  var conf = atom.config.get('markdown-pdf');
  pdf.create(inputHtml, conf).toFile(outputPath, function (err, res) {
    if (err) {
      throw 'Error converting to image format. Check console for more information.';
    } else {
      atom.notifications.addSuccess('Converted successfully.', { detail: 'Output in ' + outputPath, icon: 'file-pdf' });
    }
  });
}

function processSrc(src) {
  //make a local img src path into a "file:///absolute/path/" if it isn't already
  var path = require('path');
  var url = require('url');
  var protocol = url.parse(src).protocol;
  if (protocol == 'http:' || protocol == 'https:' || protocol == 'file:') {
    //if the src already starts with "file://", "https://", etc., it's already in the right form (URI)
    return src;
  } else if (path.resolve(src) !== src) {
    //if path is not absolute and has no protocol, it should be relative, so make it a URI
    //NOTE: previewer already took care of relative paths
    src = path.resolve(path.dirname(outPath), src);
    return 'file:///' + src;
  } else {
    //otherwise, the src is an absolute path. In this case we can just prepend "file://" to it
    return 'file:///' + src;
  }
}

module.exports = {
  convert: convert
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3RtYW4vLmF0b20vcGFja2FnZXMvbWFya2Rvd24tcGRmL2xpYi9mYWxsYmFjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiSUFPZSxPQUFPLHFCQUF0QixhQUF5QjtBQUN2QixNQUFHO0FBQ0QsYUFBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMvRCxRQUFHLENBQUMsU0FBUyxFQUFFO0FBQ2IsZUFBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNwRSxVQUFHLFNBQVMsQ0FBQyxJQUFJLElBQUksdUJBQXVCLEVBQUU7QUFDNUMsY0FBTSxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztPQUM5QjtLQUNGO0FBQ0QsUUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQzFELFFBQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN0QyxRQUFNLFFBQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLFFBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUN2QyxRQUFJLEdBQUcsU0FBUyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFDLFFBQUksR0FBRyxNQUFNLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDdEMsUUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0IsV0FBTyxDQUFDLElBQUksRUFBRSxRQUFPLENBQUMsQ0FBQztHQUN4QixDQUFDLE9BQU0sR0FBRyxFQUFFO0FBQ1gsVUFBTSxHQUFHLENBQUM7R0FDWDtDQUNGOzs7Ozs7Ozs7QUF0QkQsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FB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LFVBQVUsQ0FBQyxHQUFHLEVBQUM7O0FBRXRCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsTUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFDdkMsTUFBRyxRQUFRLElBQUksT0FBTyxJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLE9BQU8sRUFBQzs7QUFFcEUsV0FBTyxHQUFHLENBQUM7R0FDWixNQUFNLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUU7OztBQUduQyxPQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQy9DLFdBQU8sVUFBVSxHQUFHLEdBQUcsQ0FBQztHQUN6QixNQUFNOztBQUVMLFdBQU8sVUFBVSxHQUFHLEdBQUcsQ0FBQztHQUN6QjtDQUNGOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDZixTQUFPLEVBQVAsT0FBTztDQUNSLENBQUEiLCJmaWxlIjoiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9tYXJrZG93bi1wZGYvbGliL2ZhbGxiYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBiYWJlbCAqL1xuXG4vLyBOT1RFOiB0aGlzIGZpbGUgaXMgbGVnYWN5IGNvZGUuXG4vLyBJdCB3aWxsIG9ubHkgYmUgZml4ZWQgaW4gY2FzZSBvZiBBUEkgY2hhbmdlcyBpbiBpdHMgZGVwZW5kZW50IG1vZHVsZXMuXG5cbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuYXN5bmMgZnVuY3Rpb24gY29udmVydCgpIHtcbiAgdHJ5e1xuICAgIG1kcHJldmlldyA9IGF0b20ucGFja2FnZXMuZ2V0QWN0aXZlUGFja2FnZSgnbWFya2Rvd24tcHJldmlldycpO1xuICAgIGlmKCFtZHByZXZpZXcpIHtcbiAgICAgIG1kcHJldmlldyA9IGF0b20ucGFja2FnZXMuZ2V0QWN0aXZlUGFja2FnZSgnbWFya2Rvd24tcHJldmlldy1wbHVzJyk7XG4gICAgICBpZihtZHByZXZpZXcubmFtZSA9PSAnbWFya2Rvd24tcHJldmlldy1wbHVzJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01QUC1FUlJPUicpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBhY3RpdmVFZGl0b3IgPSBhdG9tLndvcmtzcGFjZS5nZXRBY3RpdmVUZXh0RWRpdG9yKCk7XG4gICAgY29uc3QgaW5QYXRoID0gYWN0aXZlRWRpdG9yLmdldFBhdGgoKTtcbiAgICBjb25zdCBvdXRQYXRoID0gdXRpbC5nZXRPdXRwdXRQYXRoKGluUGF0aCk7XG4gICAgbGV0IGh0bWwgPSBjb252ZXJ0ZXIuaHRtbEZyb21QcmV2aWV3KCk7XG4gICAgaHRtbCA9IGNvbnZlcnRlci5jb252ZXJ0SW1nU3JjVG9VUkkoaHRtbCk7XG4gICAgaHRtbCA9IGF3YWl0IGNvbnZlcnRlci5zdHlsZUh0bWwoaHRtbClcbiAgICBodG1sID0gY29udmVydGVyLnVnbHlGaXgoaHRtbCk7XG4gICAgbWFrZVBkZihodG1sLCBvdXRQYXRoKTtcbiAgfSBjYXRjaChlcnIpIHtcbiAgICB0aHJvdyBlcnI7XG4gIH1cbn1cblxudmFyIGNvbnZlcnRlciA9IHtcbiAgaHRtbEZyb21QcmV2aWV3OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNiID0gYXRvbS5jbGlwYm9hcmQ7XG4gICAgdmFyIG9sZCA9IGNiLnJlYWQoKTsgIC8vc2F2ZSBvbGQgY2xpcGJvYXJkIGNvbnRlbnRzXG4gICAgbWRwcmV2aWV3Lm1haW5Nb2R1bGUuY29weUhUTUwoKTsgIC8vZ2V0IGh0bWwgb24gY2xpcGJvYXJkXG4gICAgY29uc3QgZGF0YVN0cmluZyA9IGNiLnJlYWQoKTtcbiAgICBjYi53cml0ZShvbGQpOyAgLy9wdXQgb2xkIGNsaXBib2FyZCBjb250ZW50cyBiYWNrXG4gICAgcmV0dXJuIGRhdGFTdHJpbmc7XG4gIH0sXG4gIGNvbnZlcnRJbWdTcmNUb1VSSTogZnVuY3Rpb24gKGlucHV0SHRtbCkge1xuICAgIC8vIHB1dHMgYWxsIFwiaW1nIHNyY1wiIGluIFVSSSBmb3JtIChpLmUuIFwiZmlsZTovL1wiKVxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gaW5wdXRIdG1sO1xuICAgIHZhciBpbWdzID0gZGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKTtcbiAgICBmb3IodmFyIHMgPSAwOyBzIDwgaW1ncy5sZW5ndGg7IHMrKyl7XG4gICAgICBpbWdzW3NdLnNyYyA9IHByb2Nlc3NTcmMoaW1nc1tzXS5hdHRyaWJ1dGVzLnNyYy52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBkaXYuaW5uZXJIVE1MO1xuICB9LFxuICBzdHlsZUh0bWw6IGFzeW5jIGZ1bmN0aW9uIChpbnB1dEh0bWwpIHtcbiAgICB2YXIgd3JhcHBlZEh0bWwgPSAnPGJvZHkgY2xhc3M9XCJtYXJrZG93bi1wcmV2aWV3IG5hdGl2ZS1rZXktYmluZGluZyBtYXJrZG93bi1ib2R5XCI+JyArIGlucHV0SHRtbCArICc8L2JvZHk+JztcbiAgICB2YXIgc3R5bGVzID0gW107XG4gICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuICAgIGNvbnN0IGxlc3MgPSByZXF1aXJlKCdsZXNzJyk7XG4gICAgc3R5bGVzLnB1c2goZnMucmVhZEZpbGVTeW5jKF9fZGlybmFtZSArICcvZ2l0aHViLW1hcmtkb3duLmNzcycsICd1dGYtOCcpKTtcbiAgICBzdHlsZXMucHVzaChhdG9tLnRoZW1lcy5nZXRBY3RpdmVUaGVtZXMoKVswXS5zdHlsZXNoZWV0c1swXVsxXSk7XG4gICAgaWYoZnMuZXhpc3RzU3luYyhhdG9tLnN0eWxlcy5nZXRVc2VyU3R5bGVTaGVldFBhdGgoKSwgJ3V0ZjgnKSl7XG4gICAgICAvL2FkZCB1c2VyIHN0eWxlc2hlZXQgdG8gaHRtbCBpZiBpdCBleGlzdHNcbiAgICAgIHZhciB1cGF0aCA9IGF0b20uc3R5bGVzLmdldFVzZXJTdHlsZVNoZWV0UGF0aCgpO1xuICAgICAgdmFyIHVzdHlsZSA9IGZzLnJlYWRGaWxlU3luYyh1cGF0aCwgJ3V0ZjgnKTtcbiAgICAgIC8vIGNvbXBpbGluZyBsZXNzIHRvIGNzcyBpZiBmaWxlIGV4dGVuc2lvbiBpcyAubGVzc1xuICAgICAgaWYgKHVwYXRoLnN1YnN0cih1cGF0aC5sZW5ndGggLSA1KS50b0xvd2VyQ2FzZSgpID09ICcubGVzcycpIHtcbiAgICAgICAgcmVuZGVyZWRTdHlsZSA9IGF3YWl0IGxlc3MucmVuZGVyKHVzdHlsZSk7XG4gICAgICAgIHVzdHlsZSA9IHJlbmRlcmVkU3R5bGUuY3NzO1xuICAgICAgfVxuICAgICAgc3R5bGVzLnB1c2godXN0eWxlKTtcbiAgICB9XG4gICAgdmFyIHN0eWxlU3RyaW5nID0gJyc7XG4gICAgZm9yKHZhciBzIGluIHN0eWxlcyl7XG4gICAgICBzdHlsZVN0cmluZyArPSBgXFxuXFxuJHtzdHlsZXNbc119YDtcbiAgICB9XG4gICAgc3R5bGVTdHJpbmcgPSBgPHN0eWxlPiR7c3R5bGVTdHJpbmd9PC9zdHlsZT5gXG4gICAgcmV0dXJuIHN0eWxlU3RyaW5nICsgd3JhcHBlZEh0bWw7XG4gIH0sXG4gIHVnbHlGaXg6IGZ1bmN0aW9uIChpbnB1dEh0bWwpIHtcbiAgICAvLyBVZ2x5IEZpeCAxOlxuICAgIGJhc2U2NGhyID0gJ2lWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFFQ0FZQUFBQ3RCRTVEQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5SnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU1DMWpNRFl3SURZeExqRXpORGMzTnl3Z01qQXhNQzh3TWk4eE1pMHhOem96TWpvd01DQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTlROU0JOWVdOcGJuUnZjMmdpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2T0VORFJqTkJOMEUyTlRaQk1URkZNRUkzUWpSQk9ETTROekpETWpsR05EZ2lJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPRU5EUmpOQk4wSTJOVFpCTVRGRk1FSTNRalJCT0RNNE56SkRNamxHTkRnaVBpQThlRzF3VFUwNlJHVnlhWFpsWkVaeWIyMGdjM1JTWldZNmFXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEbzRRME5HTTBFM09EWTFOa0V4TVVVd1FqZENORUU0TXpnM01rTXlPVVkwT0NJZ2MzUlNaV1k2Wkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRvNFEwTkdNMEUzT1RZMU5rRXhNVVV3UWpkQ05FRTRNemczTWtNeU9VWTBPQ0l2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUHFxZXpzVUFBQUFmU1VSQlZIamFZbVJBQmNZd0JpTTJRU0E0eTRoTkVLWURReEFFQUFJTUFITkdBemhrUE9sWUFBQUFBRWxGVGtTdVFtQ0MnO1xuICAgIGhyVVJJID0gJ1wiYXRvbTovLycgKyBtZHByZXZpZXcubmFtZSArICcvYXNzZXRzL2hyLnBuZ1wiJ1xuICAgIGlucHV0SHRtbCA9IGlucHV0SHRtbC5zcGxpdChoclVSSSkuam9pbignXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIGJhc2U2NGhyICsgJ1wiJyk7XG4gICAgLy8gVWdseSBGaXggMjpcbiAgICBpbnB1dEh0bWwgPSBpbnB1dEh0bWwuc3BsaXQoJyxcXG46aG9zdCB7Jykuam9pbignIHsnKTtcbiAgICBpbnB1dEh0bWwgPSBpbnB1dEh0bWwuc3BsaXQoJyxcXG46aG9zdCcpLmpvaW4oJywnKTtcbiAgICBpbnB1dEh0bWwgPSBpbnB1dEh0bWwuc3BsaXQoJzpob3N0Jykuam9pbignJyk7XG4gICAgcmV0dXJuIGlucHV0SHRtbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlUGRmKGlucHV0SHRtbCwgb3V0cHV0UGF0aCl7XG4gIGNvbnN0IHBkZiA9IHJlcXVpcmUoJ2h0bWwtcGRmJyk7XG4gIHZhciBjb25mID0gYXRvbS5jb25maWcuZ2V0KCdtYXJrZG93bi1wZGYnKTtcbiAgcGRmLmNyZWF0ZShpbnB1dEh0bWwsIGNvbmYpLnRvRmlsZShvdXRwdXRQYXRoLCBmdW5jdGlvbihlcnIsIHJlcykge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHRocm93ICdFcnJvciBjb252ZXJ0aW5nIHRvIGltYWdlIGZvcm1hdC4gQ2hlY2sgY29uc29sZSBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdG9tLm5vdGlmaWNhdGlvbnMuYWRkU3VjY2VzcygnQ29udmVydGVkIHN1Y2Nlc3NmdWxseS4nLCB7ZGV0YWlsOiAnT3V0cHV0IGluICcgKyBvdXRwdXRQYXRoLCBpY29uOiAnZmlsZS1wZGYnfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1NyYyhzcmMpe1xuICAvL21ha2UgYSBsb2NhbCBpbWcgc3JjIHBhdGggaW50byBhIFwiZmlsZTovLy9hYnNvbHV0ZS9wYXRoL1wiIGlmIGl0IGlzbid0IGFscmVhZHlcbiAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbiAgY29uc3QgdXJsID0gcmVxdWlyZSgndXJsJyk7XG4gIHZhciBwcm90b2NvbCA9IHVybC5wYXJzZShzcmMpLnByb3RvY29sO1xuICBpZihwcm90b2NvbCA9PSAnaHR0cDonIHx8IHByb3RvY29sID09ICdodHRwczonIHx8IHByb3RvY29sID09ICdmaWxlOicpe1xuICAgIC8vaWYgdGhlIHNyYyBhbHJlYWR5IHN0YXJ0cyB3aXRoIFwiZmlsZTovL1wiLCBcImh0dHBzOi8vXCIsIGV0Yy4sIGl0J3MgYWxyZWFkeSBpbiB0aGUgcmlnaHQgZm9ybSAoVVJJKVxuICAgIHJldHVybiBzcmM7XG4gIH0gZWxzZSBpZihwYXRoLnJlc29sdmUoc3JjKSAhPT0gc3JjKSB7XG4gICAgLy9pZiBwYXRoIGlzIG5vdCBhYnNvbHV0ZSBhbmQgaGFzIG5vIHByb3RvY29sLCBpdCBzaG91bGQgYmUgcmVsYXRpdmUsIHNvIG1ha2UgaXQgYSBVUklcbiAgICAvL05PVEU6IHByZXZpZXdlciBhbHJlYWR5IHRvb2sgY2FyZSBvZiByZWxhdGl2ZSBwYXRoc1xuICAgIHNyYyA9IHBhdGgucmVzb2x2ZShwYXRoLmRpcm5hbWUob3V0UGF0aCksIHNyYyk7XG4gICAgcmV0dXJuICdmaWxlOi8vLycgKyBzcmM7XG4gIH0gZWxzZSB7XG4gICAgLy9vdGhlcndpc2UsIHRoZSBzcmMgaXMgYW4gYWJzb2x1dGUgcGF0aC4gSW4gdGhpcyBjYXNlIHdlIGNhbiBqdXN0IHByZXBlbmQgXCJmaWxlOi8vXCIgdG8gaXRcbiAgICByZXR1cm4gJ2ZpbGU6Ly8vJyArIHNyYztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29udmVydFxufVxuIl19