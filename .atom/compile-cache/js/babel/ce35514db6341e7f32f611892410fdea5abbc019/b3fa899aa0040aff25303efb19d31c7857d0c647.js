function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { var callNext = step.bind(null, 'next'); var callThrow = step.bind(null, 'throw'); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(callNext, callThrow); } } callNext(); }); }; }

/** @babel */
var fs = undefined;
var fallback = undefined;
var less = undefined;
var mdpdf = undefined;
var os = undefined;
var path = undefined;
var tmp = undefined;
var util = undefined;

function loadDeps() {
  fs = require('fs');
  fallback = require('./fallback');
  less = require('less');
  mdpdf = require('mdpdf');
  os = require('os');
  path = require('path');
  tmp = require('tmp');
  util = require('./util');
}

module.exports = {
  config: {
    'ghStyle': {
      'title': 'Use Github markdown CSS',
      'type': 'boolean',
      'default': true,
      'order': 1
    },
    'defaultStyle': {
      'title': 'Use additional default styles',
      'description': 'Provides basic things like border and font size',
      'type': 'boolean',
      'default': true,
      'order': 2
    },
    'emoji': {
      'title': 'Enable Emojis',
      'description': 'Convert :tagname: style tags to Emojis',
      'type': 'boolean',
      'default': true,
      'order': 3
    },
    'format': {
      'title': 'Page Format',
      'type': 'string',
      'default': 'A4',
      'enum': ['A3', 'A4', 'A5', 'Legal', 'Letter', 'Tabloid'],
      'order': 4
    },
    'border': {
      'title': 'Border Size',
      'type': 'string',
      'default': '20mm',
      'order': 5
    },
    'outputDir': {
      'title': 'Override output directory',
      'description': 'Defaults to input file directory',
      'type': 'string',
      'default': '',
      'order': 6
    },
    'forceFallback': {
      'title': 'Force Fallback Mode',
      'description': 'Legacy code; not all config options supported',
      'type': 'boolean',
      'default': false,
      'order': 7
    }
  },

  activate: function activate() {
    loadDeps();
    atom.commands.add('atom-workspace', 'markdown-pdf:convert', this.convert);
  },

  convert: _asyncToGenerator(function* () {
    try {
      var conf = atom.config.get('markdown-pdf');
      if (conf.forceFallback) {
        throw new Error('Forcing fallback mode');
      }
      var activeEditor = atom.workspace.getActiveTextEditor();
      var inPath = activeEditor.getPath();
      if (inPath === undefined) {
        // make temp input file for unsaved md
        inPath = path.join(os.tmpdir(), new Date().getTime() + '.md');
        var currentBuffer = atom.workspace.getActiveTextEditor().getBuffer();
        var bufferContent = currentBuffer.getText();
        fs.writeFileSync(inPath, bufferContent);
      }
      var outPath = util.getOutputPath(inPath);
      var debugPath = path.join(os.tmpdir(), 'debug.html');
      var options = {
        debug: debugPath,
        source: inPath,
        destination: outPath,
        ghStyle: conf.ghStyle,
        defaultStyle: conf.defaultStyle,
        noEmoji: !conf.emoji,
        pdf: {
          format: conf.format,
          quality: 100,
          header: {
            height: null
          },
          footer: {
            height: null
          },
          border: {
            top: conf.border,
            left: conf.border,
            bottom: conf.border,
            right: conf.border
          }
        }
      };
      var sheetPath = atom.styles.getUserStyleSheetPath();
      var pathObj = path.parse(sheetPath);
      if (pathObj.ext === '.less') {
        var lessData = fs.readFileSync(sheetPath, 'utf8');
        sheetPath = tmp.tmpNameSync({ postfix: '.css' });
        var rendered = yield less.render(lessData);
        fs.writeFileSync(sheetPath, rendered.css, 'utf8');
      }
      options.styles = sheetPath;
      atom.notifications.addInfo('Converting to PDF...', { icon: 'markdown' });
      yield mdpdf.convert(options);
      atom.notifications.addSuccess('Converted successfully.', { detail: 'Output in ' + outPath, icon: 'file-pdf' });
    } catch (err) {
      try {
        console.error(err.stack);
        atom.notifications.addWarning('Attempting conversion with fallback.');
        yield fallback.convert();
      } catch (err) {
        var _ret = (function () {
          var remote = require('remote');
          if (err.message === 'MPP-ERROR') {
            atom.notifications.addError('Markdown-preview-plus is not supported.', { detail: 'Please enable markdown-preview to use fallback mode.' });
          } else {
            atom.notifications.addError('Markdown-pdf: Error. Check console for more information.', {
              buttons: [{
                className: 'md-pdf-err',
                onDidClick: function onDidClick() {
                  return remote.getCurrentWindow().openDevTools();
                },
                text: 'Open console'
              }]
            });
          }
          console.error(err.stack);
          return {
            v: undefined
          };
        })();

        if (typeof _ret === 'object') return _ret.v;
      }
    }
  })
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3RtYW4vLmF0b20vcGFja2FnZXMvbWFya2Rvd24tcGRmL2xpYi9tYXJrZG93bi1wZGYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsSUFBSSxFQUFFLFlBQUEsQ0FBQztBQUNQLElBQUksUUFBUSxZQUFBLENBQUM7QUFDYixJQUFJLElBQUksWUFBQSxDQUFDO0FBQ1QsSUFBSSxLQUFLLFlBQUEsQ0FBQztBQUNWLElBQUksRUFBRSxZQUFBLENBQUM7QUFDUCxJQUFJLElBQUksWUFBQSxDQUFDO0FBQ1QsSUFBSSxHQUFHLFlBQUEsQ0FBQztBQUNSLElBQUksSUFBSSxZQUFBLENBQUM7O0FBRVQsU0FBUyxRQUFRLEdBQUc7QUFDbEIsSUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQixVQUFRLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2pDLE1BQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkIsT0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QixJQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25CLE1BQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkIsS0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixNQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQzFCOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDZixRQUFNLEVBQUU7QUFDTixhQUFTLEVBQUU7QUFDVCxhQUFPLEVBQUUseUJBQXlCO0FBQ2xDLFlBQU0sRUFBRSxTQUFTO0FBQ2pCLGVBQVMsRUFBRSxJQUFJO0FBQ2YsYUFBTyxFQUFFLENBQUM7S0FDWDtBQUNELGtCQUFjLEVBQUU7QUFDZCxhQUFPLEVBQUUsK0JBQStCO0FBQ3hDLG1CQUFhLEVBQUUsaURBQWlEO0FBQ2hFLFlBQU0sRUFBRSxTQUFTO0FB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VSxDQUMzQix5QkFBeUIsRUFDekIsRUFBRSxNQUFNLEVBQUUsWUFBWSxHQUFHLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQ3JELENBQUM7S0FDSCxDQUFDLE9BQU0sR0FBRyxFQUFFO0FBQ1gsVUFBSTtBQUNGLGVBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLFlBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7QUFDdEUsY0FBTSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7T0FDMUIsQ0FBQyxPQUFNLEdBQUcsRUFBRTs7QUFDWCxjQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsY0FBRyxHQUFHLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBRTtBQUM5QixnQkFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3pCLHlDQUF5QyxFQUN6QyxFQUFDLE1BQU0sRUFBRSxzREFBc0QsRUFBQyxDQUNqRSxDQUFDO1dBQ0gsTUFBTTtBQUNMLGdCQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsMERBQTBELEVBQzFEO0FBQ0UscUJBQU8sRUFBRSxDQUFDO0FBQ1IseUJBQVMsRUFBRSxZQUFZO0FBQ3ZCLDBCQUFVLEVBQUU7eUJBQU0sTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUMsWUFBWSxFQUFFO2lCQUFBO0FBQzFELG9CQUFJLEVBQUUsY0FBYztlQUNyQixDQUFDO2FBQ0gsQ0FDRixDQUFDO1dBQ0g7QUFDRCxpQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekI7O1lBQU87Ozs7T0FDUjtLQUNGO0dBQ0YsQ0FBQTtDQUNGLENBQUEiLCJmaWxlIjoiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9tYXJrZG93bi1wZGYvbGliL21hcmtkb3duLXBkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAYmFiZWwgKi9cbmxldCBmcztcbmxldCBmYWxsYmFjaztcbmxldCBsZXNzO1xubGV0IG1kcGRmO1xubGV0IG9zO1xubGV0IHBhdGg7XG5sZXQgdG1wO1xubGV0IHV0aWw7XG5cbmZ1bmN0aW9uIGxvYWREZXBzKCkge1xuICBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gIGZhbGxiYWNrID0gcmVxdWlyZSgnLi9mYWxsYmFjaycpO1xuICBsZXNzID0gcmVxdWlyZSgnbGVzcycpO1xuICBtZHBkZiA9IHJlcXVpcmUoJ21kcGRmJyk7XG4gIG9zID0gcmVxdWlyZSgnb3MnKTtcbiAgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbiAgdG1wID0gcmVxdWlyZSgndG1wJyk7XG4gIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbmZpZzoge1xuICAgICdnaFN0eWxlJzoge1xuICAgICAgJ3RpdGxlJzogJ1VzZSBHaXRodWIgbWFya2Rvd24gQ1NTJyxcbiAgICAgICd0eXBlJzogJ2Jvb2xlYW4nLFxuICAgICAgJ2RlZmF1bHQnOiB0cnVlLFxuICAgICAgJ29yZGVyJzogMVxuICAgIH0sXG4gICAgJ2RlZmF1bHRTdHlsZSc6IHtcbiAgICAgICd0aXRsZSc6ICdVc2UgYWRkaXRpb25hbCBkZWZhdWx0IHN0eWxlcycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnUHJvdmlkZXMgYmFzaWMgdGhpbmdzIGxpa2UgYm9yZGVyIGFuZCBmb250IHNpemUnLFxuICAgICAgJ3R5cGUnOiAnYm9vbGVhbicsXG4gICAgICAnZGVmYXVsdCc6IHRydWUsXG4gICAgICAnb3JkZXInOiAyXG4gICAgfSxcbiAgICAnZW1vamknOiB7XG4gICAgICAndGl0bGUnOiAnRW5hYmxlIEVtb2ppcycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnQ29udmVydCA6dGFnbmFtZTogc3R5bGUgdGFncyB0byBFbW9qaXMnLFxuICAgICAgJ3R5cGUnOiAnYm9vbGVhbicsXG4gICAgICAnZGVmYXVsdCc6IHRydWUsXG4gICAgICAnb3JkZXInOiAzXG4gICAgfSxcbiAgICAnZm9ybWF0Jzoge1xuICAgICAgJ3RpdGxlJzogJ1BhZ2UgRm9ybWF0JyxcbiAgICAgICd0eXBlJzogJ3N0cmluZycsXG4gICAgICAnZGVmYXVsdCc6ICdBNCcsXG4gICAgICAnZW51bSc6IFsnQTMnLCAnQTQnLCAnQTUnLCAnTGVnYWwnLCAnTGV0dGVyJywgJ1RhYmxvaWQnXSxcbiAgICAgICdvcmRlcic6IDRcbiAgICB9LFxuICAgICdib3JkZXInOiB7XG4gICAgICAndGl0bGUnOiAnQm9yZGVyIFNpemUnLFxuICAgICAgJ3R5cGUnOiAnc3RyaW5nJyxcbiAgICAgICdkZWZhdWx0JzogJzIwbW0nLFxuICAgICAgJ29yZGVyJzogNVxuICAgIH0sXG4gICAgJ291dHB1dERpcic6IHtcbiAgICAgICd0aXRsZSc6ICdPdmVycmlkZSBvdXRwdXQgZGlyZWN0b3J5JyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdEZWZhdWx0cyB0byBpbnB1dCBmaWxlIGRpcmVjdG9yeScsXG4gICAgICAndHlwZSc6ICdzdHJpbmcnLFxuICAgICAgJ2RlZmF1bHQnOiAnJyxcbiAgICAgICdvcmRlcic6IDZcbiAgICB9LFxuICAgICdmb3JjZUZhbGxiYWNrJzoge1xuICAgICAgJ3RpdGxlJzogJ0ZvcmNlIEZhbGxiYWNrIE1vZGUnLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0xlZ2FjeSBjb2RlOyBub3QgYWxsIGNvbmZpZyBvcHRpb25zIHN1cHBvcnRlZCcsXG4gICAgICAndHlwZSc6ICdib29sZWFuJyxcbiAgICAgICdkZWZhdWx0JzogZmFsc2UsXG4gICAgICAnb3JkZXInOiA3XG4gICAgfVxuICB9LFxuXG4gIGFjdGl2YXRlOiBmdW5jdGlvbigpIHtcbiAgICBsb2FkRGVwcygpO1xuICAgIGF0b20uY29tbWFuZHMuYWRkKCdhdG9tLXdvcmtzcGFjZScsICdtYXJrZG93bi1wZGY6Y29udmVydCcsIHRoaXMuY29udmVydCk7XG4gIH0sXG5cbiAgY29udmVydDogYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgY29uZiA9IGF0b20uY29uZmlnLmdldCgnbWFya2Rvd24tcGRmJyk7XG4gICAgICBpZihjb25mLmZvcmNlRmFsbGJhY2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JjaW5nIGZhbGxiYWNrIG1vZGUnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFjdGl2ZUVkaXRvciA9IGF0b20ud29ya3NwYWNlLmdldEFjdGl2ZVRleHRFZGl0b3IoKTtcbiAgICAgIGxldCBpblBhdGggPSBhY3RpdmVFZGl0b3IuZ2V0UGF0aCgpO1xuICAgICAgaWYoaW5QYXRoID09PSB1bmRlZmluZWQpIHsgIC8vIG1ha2UgdGVtcCBpbnB1dCBmaWxlIGZvciB1bnNhdmVkIG1kXG4gICAgICAgIGluUGF0aCA9IHBhdGguam9pbihvcy50bXBkaXIoKSwgYCR7bmV3IERhdGUoKS5nZXRUaW1lKCl9Lm1kYCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRCdWZmZXIgPSBhdG9tLndvcmtzcGFjZS5nZXRBY3RpdmVUZXh0RWRpdG9yKCkuZ2V0QnVmZmVyKCk7XG4gICAgICAgIGNvbnN0IGJ1ZmZlckNvbnRlbnQgPSBjdXJyZW50QnVmZmVyLmdldFRleHQoKTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhpblBhdGgsIGJ1ZmZlckNvbnRlbnQpO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3V0UGF0aCA9IHV0aWwuZ2V0T3V0cHV0UGF0aChpblBhdGgpO1xuICAgICAgY29uc3QgZGVidWdQYXRoID0gcGF0aC5qb2luKG9zLnRtcGRpcigpLCAnZGVidWcuaHRtbCcpO1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgZGVidWc6IGRlYnVnUGF0aCxcbiAgICAgICAgc291cmNlOiBpblBhdGgsXG4gICAgICAgIGRlc3RpbmF0aW9uOiBvdXRQYXRoLFxuICAgICAgICBnaFN0eWxlOiBjb25mLmdoU3R5bGUsXG4gICAgICAgIGRlZmF1bHRTdHlsZTogY29uZi5kZWZhdWx0U3R5bGUsXG4gICAgICAgIG5vRW1vamk6ICFjb25mLmVtb2ppLFxuICAgICAgICBwZGY6IHtcbiAgICAgICAgICBmb3JtYXQ6IGNvbmYuZm9ybWF0LFxuICAgICAgICAgIHF1YWxpdHk6IDEwMCxcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGhlaWdodDogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICBoZWlnaHQ6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvcmRlcjoge1xuICAgICAgICAgICAgdG9wOiBjb25mLmJvcmRlcixcbiAgICAgICAgICAgIGxlZnQ6IGNvbmYuYm9yZGVyLFxuICAgICAgICAgICAgYm90dG9tOiBjb25mLmJvcmRlcixcbiAgICAgICAgICAgIHJpZ2h0OiBjb25mLmJvcmRlclxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBsZXQgc2hlZXRQYXRoID0gYXRvbS5zdHlsZXMuZ2V0VXNlclN0eWxlU2hlZXRQYXRoKCk7XG4gICAgICBjb25zdCBwYXRoT2JqID0gcGF0aC5wYXJzZShzaGVldFBhdGgpO1xuICAgICAgaWYocGF0aE9iai5leHQgPT09ICcubGVzcycpIHtcbiAgICAgICAgY29uc3QgbGVzc0RhdGEgPSBmcy5yZWFkRmlsZVN5bmMoc2hlZXRQYXRoLCAndXRmOCcpO1xuICAgICAgICBzaGVldFBhdGggPSB0bXAudG1wTmFtZVN5bmMoe3Bvc3RmaXg6ICcuY3NzJ30pO1xuICAgICAgICBjb25zdCByZW5kZXJlZCA9IGF3YWl0IGxlc3MucmVuZGVyKGxlc3NEYXRhKTtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhzaGVldFBhdGgsIHJlbmRlcmVkLmNzcywgJ3V0ZjgnKTtcbiAgICB9XG4gICAgICBvcHRpb25zLnN0eWxlcyA9IHNoZWV0UGF0aDtcbiAgICAgIGF0b20ubm90aWZpY2F0aW9ucy5hZGRJbmZvKCdDb252ZXJ0aW5nIHRvIFBERi4uLicsIHtpY29uOiAnbWFya2Rvd24nfSk7XG4gICAgICBhd2FpdCBtZHBkZi5jb252ZXJ0KG9wdGlvbnMpO1xuICAgICAgYXRvbS5ub3RpZmljYXRpb25zLmFkZFN1Y2Nlc3MoXG4gICAgICAgICdDb252ZXJ0ZWQgc3VjY2Vzc2Z1bGx5LicsXG4gICAgICAgIHsgZGV0YWlsOiAnT3V0cHV0IGluICcgKyBvdXRQYXRoLCBpY29uOiAnZmlsZS1wZGYnIH1cbiAgICAgICk7XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKTtcbiAgICAgICAgYXRvbS5ub3RpZmljYXRpb25zLmFkZFdhcm5pbmcoJ0F0dGVtcHRpbmcgY29udmVyc2lvbiB3aXRoIGZhbGxiYWNrLicpO1xuICAgICAgICBhd2FpdCBmYWxsYmFjay5jb252ZXJ0KCk7XG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBjb25zdCByZW1vdGUgPSByZXF1aXJlKCdyZW1vdGUnKTtcbiAgICAgICAgaWYoZXJyLm1lc3NhZ2UgPT09ICdNUFAtRVJST1InKSB7XG4gICAgICAgICAgYXRvbS5ub3RpZmljYXRpb25zLmFkZEVycm9yKFxuICAgICAgICAgICAgJ01hcmtkb3duLXByZXZpZXctcGx1cyBpcyBub3Qgc3VwcG9ydGVkLicsXG4gICAgICAgICAgICB7ZGV0YWlsOiAnUGxlYXNlIGVuYWJsZSBtYXJrZG93bi1wcmV2aWV3IHRvIHVzZSBmYWxsYmFjayBtb2RlLid9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdG9tLm5vdGlmaWNhdGlvbnMuYWRkRXJyb3IoXG4gICAgICAgICAgICAnTWFya2Rvd24tcGRmOiBFcnJvci4gQ2hlY2sgY29uc29sZSBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBidXR0b25zOiBbe1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ21kLXBkZi1lcnInLFxuICAgICAgICAgICAgICAgIG9uRGlkQ2xpY2s6ICgpID0+IHJlbW90ZS5nZXRDdXJyZW50V2luZG93KCkub3BlbkRldlRvb2xzKCksXG4gICAgICAgICAgICAgICAgdGV4dDogJ09wZW4gY29uc29sZScsXG4gICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjayk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==