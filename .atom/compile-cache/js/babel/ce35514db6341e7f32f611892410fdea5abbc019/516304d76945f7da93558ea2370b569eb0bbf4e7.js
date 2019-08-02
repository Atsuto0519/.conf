function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _atom2 = require('atom');

var _child_process = require('child_process');

var _path = require('path');

var _pandocBin = require('pandoc-bin');

var _pandocBin2 = _interopRequireDefault(_pandocBin);

var _targets = require('./targets');

var _targets2 = _interopRequireDefault(_targets);

var _viewsSelectPathView = require('./views/select-path-view');

var _viewsSelectPathView2 = _interopRequireDefault(_viewsSelectPathView);

"use babel";

var _atom = atom;
var commands = _atom.commands;
var config = _atom.config;
var notifications = _atom.notifications;
var workspace = _atom.workspace;

var cache = {};

module.exports = {

  config: {
    pandocBinary: {
      description: 'Path to your `pandoc` binary. Default is the packaged version of pandoc.',
      type: 'string',
      'default': ''
    }
  },

  activate: function activate() {
    var _this = this;

    if (atom.inDevMode() && !atom.inSpecMode()) {
      console.log('activate pandoc-convert');
    }

    this.subscriptions = new _atom2.CompositeDisposable();
    this.selectPathView = new _viewsSelectPathView2['default']();

    Object.keys(_targets2['default']).forEach(function (target) {
      var action = 'pandoc-convert:' + target.replace(/_/g, '-');

      _this.subscriptions.add(commands.add('atom-workspace', action, function () {
        _this.convertCommand(target);
      }));
    });
  },

  deactivate: function deactivate() {
    this.subscriptions.dispose();
  },

  convertCommand: function convertCommand(target) {
    var _this2 = this;

    var editor = workspace.getActiveTextEditor();

    if (!editor) {
      return this.error('Current item is not an editor.');
    }

    if (editor.isModified() || !editor.getPath()) {
      return this.error('Text is modified. Please safe first.');
    }

    var format = _targets2['default'][target].format || target;
    var ext = _targets2['default'][target].ext;
    var dpath = this.defaultOuputPath(ext);
    var ipath = editor.getPath();

    this.selectPathView.show(dpath, function (opath) {
      cache[dpath] = opath;
      _this2.convert(format, ipath, opath);
    });
  },

  error: function error(message) {
    notifications.addError('[pandoc-convert]<br>' + message);
  },

  success: function success(message) {
    notifications.addSuccess('[pandoc-convert]<br>' + message);
  },

  convert: function convert(format, ipath, opath) {
    var _this3 = this;

    var pandocPath = config.get('pandoc-convert.pandocBinary') || _pandocBin2['default'].path;

    if (!(0, _fs.existsSync)(pandocPath)) {
      return this.error('Binary `' + pandocPath + '` does not exist.');
    }

    var cwd = (0, _path.dirname)(ipath);

    (0, _child_process.execFile)(pandocPath, ['--standalone', '--to=' + format, '--output=' + opath, ipath], { cwd: cwd }, function (error) {
      if (error) {
        _this3.error(error.message);
      } else {
        _this3.success('**Created:** `' + opath + '`');
      }
    });
  },

  defaultOuputPath: function defaultOuputPath(ext) {
    var editor = workspace.getActiveTextEditor();
    var dpath = editor.getPath() + '.' + ext;

    if (cache[dpath]) {
      return cache[dpath];
    }

    return dpath;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob3RtYW4vLmF0b20vcGFja2FnZXMvcGFuZG9jLWNvbnZlcnQvbGliL2luaXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7a0JBRTJCLElBQUk7O3FCQUNLLE1BQU07OzZCQUNqQixlQUFlOztvQkFDaEIsTUFBTTs7eUJBQ1IsWUFBWTs7Ozt1QkFDZCxXQUFXOzs7O21DQUNKLDBCQUEwQjs7OztBQVJyRCxXQUFXLENBQUE7O1lBZVAsSUFBSTtJQUpOLFFBQVEsU0FBUixRQUFRO0lBQ1IsTUFBTSxTQUFOLE1BQU07SUFDTixhQUFhLFNBQWIsYUFBYTtJQUNiLFNBQVMsU0FBVCxTQUFTOztBQUdYLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQTs7QUFFaEIsTUFBTSxDQUFDLE9BQU8sR0FBRzs7QUFFZixRQUFNLEVBQUU7QUFDTixnQkFBWSxFQUFFO0FBQ1osaUJBQVcsRUFBRSwwRUFBMEU7QUFDdkYsVUFBSSxFQUFFLFFBQVE7QUFDZCxpQkFBUyxFQUFFO0tBQ1o7R0FDRjs7QUFFRCxVQUFRLEVBQUEsb0JBQUc7OztBQUNULFFBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO0FBQzFDLGFBQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtLQUN2Qzs7QUFFRCxRQUFJLENBQUMsYUFBYSxHQUFHLGdDQUF5QixDQUFBO0FBQzlDLFFBQUksQ0FBQyxjQUFjLEdBQUcsc0NBQW9CLENBQUE7O0FBRTFDLFVBQU0sQ0FBQyxJQUFJLHNCQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQ3JDLFVBQU0sTUFBTSx1QkFBcUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEFBQUUsQ0FBQTs7QUFFNUQsWUFBSyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFlBQU07QUFDbEUs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bml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgYmFiZWxcIlxuXG5pbXBvcnQgeyBleGlzdHNTeW5jIH0gZnJvbSAnZnMnXG5pbXBvcnQgeyBDb21wb3NpdGVEaXNwb3NhYmxlIH0gZnJvbSAnYXRvbSdcbmltcG9ydCB7IGV4ZWNGaWxlIH0gZnJvbSAnY2hpbGRfcHJvY2VzcydcbmltcG9ydCB7IGRpcm5hbWUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHBhbmRvY0JpbiBmcm9tICdwYW5kb2MtYmluJ1xuaW1wb3J0IHRhcmdldHMgZnJvbSAnLi90YXJnZXRzJ1xuaW1wb3J0IFNlbGVjdFBhdGhWaWV3IGZyb20gJy4vdmlld3Mvc2VsZWN0LXBhdGgtdmlldydcblxuY29uc3Qge1xuICBjb21tYW5kcyxcbiAgY29uZmlnLFxuICBub3RpZmljYXRpb25zLFxuICB3b3Jrc3BhY2Vcbn0gPSBhdG9tXG5cbmNvbnN0IGNhY2hlID0ge31cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgY29uZmlnOiB7XG4gICAgcGFuZG9jQmluYXJ5OiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ1BhdGggdG8geW91ciBgcGFuZG9jYCBiaW5hcnkuIERlZmF1bHQgaXMgdGhlIHBhY2thZ2VkIHZlcnNpb24gb2YgcGFuZG9jLicsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfVxuICB9LFxuXG4gIGFjdGl2YXRlKCkge1xuICAgIGlmIChhdG9tLmluRGV2TW9kZSgpICYmICFhdG9tLmluU3BlY01vZGUoKSkge1xuICAgICAgY29uc29sZS5sb2coJ2FjdGl2YXRlIHBhbmRvYy1jb252ZXJ0JylcbiAgICB9XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZSgpXG4gICAgdGhpcy5zZWxlY3RQYXRoVmlldyA9IG5ldyBTZWxlY3RQYXRoVmlldygpXG5cbiAgICBPYmplY3Qua2V5cyh0YXJnZXRzKS5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgICBjb25zdCBhY3Rpb24gPSBgcGFuZG9jLWNvbnZlcnQ6JHt0YXJnZXQucmVwbGFjZSgvXy9nLCAnLScpfWBcblxuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChjb21tYW5kcy5hZGQoJ2F0b20td29ya3NwYWNlJywgYWN0aW9uLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY29udmVydENvbW1hbmQodGFyZ2V0KVxuICAgICAgfSkpXG4gICAgfSlcbiAgfSxcblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5kaXNwb3NlKClcbiAgfSxcblxuICBjb252ZXJ0Q29tbWFuZCh0YXJnZXQpIHtcblxuICAgIGNvbnN0IGVkaXRvciA9IHdvcmtzcGFjZS5nZXRBY3RpdmVUZXh0RWRpdG9yKClcblxuICAgIGlmICghZWRpdG9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvcihgQ3VycmVudCBpdGVtIGlzIG5vdCBhbiBlZGl0b3IuYClcbiAgICB9XG5cbiAgICBpZiAoZWRpdG9yLmlzTW9kaWZpZWQoKSB8fCAhZWRpdG9yLmdldFBhdGgoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3IoYFRleHQgaXMgbW9kaWZpZWQuIFBsZWFzZSBzYWZlIGZpcnN0LmApXG4gICAgfVxuXG4gICAgY29uc3QgZm9ybWF0ID0gdGFyZ2V0c1t0YXJnZXRdLmZvcm1hdCB8fCB0YXJnZXRcbiAgICBjb25zdCBleHQgPSB0YXJnZXRzW3RhcmdldF0uZXh0XG4gICAgY29uc3QgZHBhdGggPSB0aGlzLmRlZmF1bHRPdXB1dFBhdGgoZXh0KVxuICAgIGNvbnN0IGlwYXRoID0gZWRpdG9yLmdldFBhdGgoKVxuXG4gICAgdGhpcy5zZWxlY3RQYXRoVmlldy5zaG93KGRwYXRoLCBvcGF0aCA9PiB7XG4gICAgICBjYWNoZVtkcGF0aF0gPSBvcGF0aFxuICAgICAgdGhpcy5jb252ZXJ0KGZvcm1hdCwgaXBhdGgsIG9wYXRoKVxuICAgIH0pXG4gIH0sXG5cbiAgZXJyb3IobWVzc2FnZSkge1xuICAgIG5vdGlmaWNhdGlvbnMuYWRkRXJyb3IoYFtwYW5kb2MtY29udmVydF08YnI+JHttZXNzYWdlfWApXG4gIH0sXG5cbiAgc3VjY2VzcyhtZXNzYWdlKSB7XG4gICAgbm90aWZpY2F0aW9ucy5hZGRTdWNjZXNzKGBbcGFuZG9jLWNvbnZlcnRdPGJyPiR7bWVzc2FnZX1gKVxuICB9LFxuXG4gIGNvbnZlcnQoZm9ybWF0LCBpcGF0aCwgb3BhdGgpIHtcblxuICAgIGNvbnN0IHBhbmRvY1BhdGggPSBjb25maWcuZ2V0KCdwYW5kb2MtY29udmVydC5wYW5kb2NCaW5hcnknKSB8fCBwYW5kb2NCaW4ucGF0aFxuXG4gICAgaWYgKCFleGlzdHNTeW5jKHBhbmRvY1BhdGgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvcihgQmluYXJ5IFxcYCR7cGFuZG9jUGF0aH1cXGAgZG9lcyBub3QgZXhpc3QuYClcbiAgICB9XG5cbiAgICBjb25zdCBjd2QgPSBkaXJuYW1lKGlwYXRoKVxuXG4gICAgZXhlY0ZpbGUocGFuZG9jUGF0aCwgW1xuICAgICAgJy0tc3RhbmRhbG9uZScsXG4gICAgICBgLS10bz0ke2Zvcm1hdH1gLFxuICAgICAgYC0tb3V0cHV0PSR7b3BhdGh9YCxcbiAgICAgIGlwYXRoXG4gICAgXSwgeyBjd2QgfSwgKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5lcnJvcihlcnJvci5tZXNzYWdlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdWNjZXNzKGAqKkNyZWF0ZWQ6KiogXFxgJHtvcGF0aH1cXGBgKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgZGVmYXVsdE91cHV0UGF0aChleHQpIHtcbiAgICBjb25zdCBlZGl0b3IgPSB3b3Jrc3BhY2UuZ2V0QWN0aXZlVGV4dEVkaXRvcigpXG4gICAgY29uc3QgZHBhdGggPSBgJHtlZGl0b3IuZ2V0UGF0aCgpfS4ke2V4dH1gXG5cbiAgICBpZiAoY2FjaGVbZHBhdGhdKSB7XG4gICAgICByZXR1cm4gY2FjaGVbZHBhdGhdXG4gICAgfVxuXG4gICAgcmV0dXJuIGRwYXRoXG4gIH1cbn1cbiJdfQ==