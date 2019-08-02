
/*
  lib/utils.coffee
 */

(function() {
  var log,
    slice = [].slice;

  log = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return console.log.apply(console, ['markdown-scroll, utils:'].concat(args));
  };

  module.exports = {
    getVisTopHgtBot: function() {
      var botScrnScrollRow, edtBotBnd, i, j, len, len1, lineEle, lineEles, lineTopBnd, lines, pvwBotBnd, ref, ref1, refLine, refRow, refTopBnd;
      ref = this.editorView.getBoundingClientRect(), this.edtTopBnd = ref.top, edtBotBnd = ref.bottom;
      lineEles = this.editorView.shadowRoot.querySelectorAll('.lines .line[data-screen-row]');
      lines = [];
      for (i = 0, len = lineEles.length; i < len; i++) {
        lineEle = lineEles[i];
        lineTopBnd = lineEle.getBoundingClientRect().top;
        lines.push([+lineEle.getAttribute('data-screen-row'), lineTopBnd]);
      }
      if (lines.length === 0) {
        log('no visible lines in editor');
        this.scrnTopOfs = this.scrnBotOfs = this.pvwTopB = this.previewTopOfs = this.previewBotOfs = 0;
        return;
      }
      lines.sort();
      for (j = 0, len1 = lines.length; j < len1; j++) {
        refLine = lines[j];
        if (refLine[1] >= this.edtTopBnd) {
          break;
        }
      }
      refRow = refLine[0], refTopBnd = refLine[1];
      this.scrnTopOfs = (refRow * this.chrHgt) - (refTopBnd - this.edtTopBnd);
      this.scrnHeight = edtBotBnd - this.edtTopBnd;
      this.scrnBotOfs = this.scrnTopOfs + this.scrnHeight;
      botScrnScrollRow = this.editor.clipScreenPosition([9e9, 9e9]).row;
      this.scrnScrollHgt = (botScrnScrollRow + 1) * this.chrHgt;
      ref1 = this.previewEle.getBoundingClientRect(), this.pvwTopBnd = ref1.top, pvwBotBnd = ref1.bottom;
      this.previewTopOfs = this.previewEle.scrollTop;
      return this.previewBotOfs = this.previewTopOfs + (pvwBotBnd - this.pvwTopBnd);
    },
    getEleTopHgtBot: function(ele, scrn) {
      var bot, eleBotBnd, eleTopBnd, hgt, ref, top;
      if (scrn == null) {
        scrn = true;
      }
      ref = ele.getBoundingClientRect(), eleTopBnd = ref.top, eleBotBnd = ref.bottom;
      top = scrn ? this.scrnTopOfs + (eleTopBnd - this.edtTopBnd) : this.previewTopOfs + (eleTopBnd - this.pvwTopBnd);
      hgt = eleBotBnd - eleTopBnd;
      bot = top + hgt;
      return [top, hgt, bot];
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9tYXJrZG93bi1zY3JvbGwtc3luYy9saWIvdXRpbHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztBQUFBO0FBQUEsTUFBQSxHQUFBO0lBQUE7O0VBSUEsR0FBQSxHQUFNLFNBQUE7QUFDSixRQUFBO0lBREs7V0FDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQVosQ0FBa0IsT0FBbEIsRUFBMkIsQ0FBQyx5QkFBRCxDQUEyQixDQUFDLE1BQTVCLENBQW1DLElBQW5DLENBQTNCO0VBREk7O0VBR04sTUFBTSxDQUFDLE9BQVAsR0FFRTtJQUFBLGVBQUEsRUFBaUIsU0FBQTtBQUNmLFVBQUE7TUFBQSxNQUF1QyxJQUFDLENBQUEsVUFBVSxDQUFDLHFCQUFaLENBQUEsQ0FBdkMsRUFBTSxJQUFDLENBQUEsZ0JBQU4sR0FBRCxFQUEwQixnQkFBUjtNQUNsQixRQUFBLEdBQVcsSUFBQyxDQUFBLFVBQVUsQ0FBQyxVQUFVLENBQUMsZ0JBQXZCLENBQXdDLCtCQUF4QztNQUNYLEtBQUEsR0FBUTtBQUNSLFdBQUEsMENBQUE7O1FBQ1EsYUFBYyxPQUFPLENBQUMscUJBQVIsQ0FBQSxFQUFuQjtRQUNELEtBQUssQ0FBQyxJQUFOLENBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFSLENBQXFCLGlCQUFyQixDQUFGLEVBQTJDLFVBQTNDLENBQVg7QUFGRjtNQUdBLElBQUcsS0FBSyxDQUFDLE1BQU4sS0FBZ0IsQ0FBbkI7UUFDRSxHQUFBLENBQUksNEJBQUo7UUFDQSxJQUFDLENBQUEsVUFBRCxHQUFjLElBQUMsQ0FBQSxVQUFELEdBQWMsSUFBQyxDQUFBLE9BQUQsR0FBVyxJQUFDLENBQUEsYUFBRCxHQUFpQixJQUFDLENBQUEsYUFBRCxHQUFpQjtBQUN6RSxlQUhGOztNQUlBLEtBQUssQ0FBQyxJQUFOLENBQUE7QUFDQSxXQUFBLHlDQUFBOztRQUNFLElBQUcsT0FBUSxDQUFBLENBQUEsQ0FBUixJQUFjLElBQUMsQ0FBQSxTQUFsQjtBQUFpQyxnQkFBakM7O0FBREY7TUFFQyxtQkFBRCxFQUFTO01BQ1QsSUFBQyxDQUFBLFVBQUQsR0FBYyxDQUFDLE1BQUEsR0FBUyxJQUFDLENBQUEsTUFBWCxDQUFBLEdBQXFCLENBQUMsU0FBQSxHQUFZLElBQUMsQ0FBQSxTQUFkO01BQ25DLElBQUMsQ0FBQSxVQUFELEdBQWMsU0FBQSxHQUFZLElBQUMsQ0FBQTtNQUMzQixJQUFDLENBQUEsVUFBRCxHQUFjLElBQUMsQ0FBQSxVQUFELEdBQWMsSUFBQyxDQUFBO01BQzdCLGdCQUFBLEdBQW1CLElBQUMsQ0FBQSxNQUFNLENBQUMsa0JBQVIsQ0FBMkIsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUEzQixDQUFzQyxDQUFDO01BQzFELElBQUMsQ0FBQSxhQUFELEdBQWlCLENBQUMsZ0JBQUEsR0FBbUIsQ0FBcEIsQ0FBQSxHQUF5QixJQUFDLENBQUE7TUFFM0MsT0FBdUMsSUFBQyxDQUFBLFVBQVUsQ0FBQyxxQkFBWixDQUFBLENBQXZDLEVBQU0sSUFBQyxDQUFBLGlCQUFOLEdBQUQsRUFBMEIsaUJBQVI7TUFDbEIsSUFBQyxDQUFBLGFBQUQsR0FBaUIsSUFBQyxDQUFBLFVBQVUsQ0FBQzthQUM3QixJQUFDLENBQUEsYUFBRCxHQUFpQixJQUFDLENBQUEsYUFBRCxHQUFpQixDQUFDLFNBQUEsR0FBWSxJQUFDLENBQUEsU0FBZDtJQXZCbkIsQ0FBakI7SUF5QkEsZUFBQSxFQUFpQixTQUFDLEdBQUQsRUFBTSxJQUFOO0FBQ2YsVUFBQTs7UUFEcUIsT0FBTzs7TUFDNUIsTUFBcUMsR0FBRyxDQUFDLHFCQUFKLENBQUEsQ0FBckMsRUFBSyxnQkFBSixHQUFELEVBQXdCLGdCQUFSO01BQ2hCLEdBQUEsR0FBUyxJQUFILEdBQWEsSUFBQyxDQUFBLFVBQUQsR0FBaUIsQ0FBQyxTQUFBLEdBQVksSUFBQyxDQUFBLFNBQWQsQ0FBOUIsR0FDYSxJQUFDLENBQUEsYUFBRCxHQUFpQixDQUFDLFNBQUEsR0FBWSxJQUFDLENBQUEsU0FBZDtNQUNwQyxHQUFBLEdBQU0sU0FBQSxHQUFZO01BQ2xCLEdBQUEsR0FBTSxHQUFBLEdBQU07YUFDWixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWDtJQU5lLENBekJqQjs7QUFURiIsInNvdXJjZXNDb250ZW50IjpbIiMjI1xuICBsaWIvdXRpbHMuY29mZmVlXG4jIyNcblxubG9nID0gKGFyZ3MuLi4pIC0+IFxuICBjb25zb2xlLmxvZy5hcHBseSBjb25zb2xlLCBbJ21hcmtkb3duLXNjcm9sbCwgdXRpbHM6J10uY29uY2F0IGFyZ3NcblxubW9kdWxlLmV4cG9ydHMgPVxuXG4gIGdldFZpc1RvcEhndEJvdDogLT5cbiAgICB7dG9wOiBAZWR0VG9wQm5kLCBib3R0b206IGVkdEJvdEJuZH0gPSBAZWRpdG9yVmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGxpbmVFbGVzID0gQGVkaXRvclZpZXcuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsICcubGluZXMgLmxpbmVbZGF0YS1zY3JlZW4tcm93XSdcbiAgICBsaW5lcyA9IFtdXG4gICAgZm9yIGxpbmVFbGUgaW4gbGluZUVsZXNcbiAgICAgIHt0b3A6IGxpbmVUb3BCbmR9ID0gbGluZUVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgbGluZXMucHVzaCBbK2xpbmVFbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXNjcmVlbi1yb3cnKSwgbGluZVRvcEJuZF1cbiAgICBpZiBsaW5lcy5sZW5ndGggaXMgMFxuICAgICAgbG9nICdubyB2aXNpYmxlIGxpbmVzIGluIGVkaXRvcidcbiAgICAgIEBzY3JuVG9wT2ZzID0gQHNjcm5Cb3RPZnMgPSBAcHZ3VG9wQiA9IEBwcmV2aWV3VG9wT2ZzID0gQHByZXZpZXdCb3RPZnMgPSAwXG4gICAgICByZXR1cm5cbiAgICBsaW5lcy5zb3J0KClcbiAgICBmb3IgcmVmTGluZSBpbiBsaW5lc1xuICAgICAgaWYgcmVmTGluZVsxXSA+PSBAZWR0VG9wQm5kIHRoZW4gYnJlYWtcbiAgICBbcmVmUm93LCByZWZUb3BCbmRdID0gcmVmTGluZVxuICAgIEBzY3JuVG9wT2ZzID0gKHJlZlJvdyAqIEBjaHJIZ3QpIC0gKHJlZlRvcEJuZCAtIEBlZHRUb3BCbmQpXG4gICAgQHNjcm5IZWlnaHQgPSBlZHRCb3RCbmQgLSBAZWR0VG9wQm5kXG4gICAgQHNjcm5Cb3RPZnMgPSBAc2NyblRvcE9mcyArIEBzY3JuSGVpZ2h0XG4gICAgYm90U2NyblNjcm9sbFJvdyA9IEBlZGl0b3IuY2xpcFNjcmVlblBvc2l0aW9uKFs5ZTksIDllOV0pLnJvd1xuICAgIEBzY3JuU2Nyb2xsSGd0ID0gKGJvdFNjcm5TY3JvbGxSb3cgKyAxKSAqIEBjaHJIZ3RcbiAgICBcbiAgICB7dG9wOiBAcHZ3VG9wQm5kLCBib3R0b206IHB2d0JvdEJuZH0gPSBAcHJldmlld0VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIEBwcmV2aWV3VG9wT2ZzID0gQHByZXZpZXdFbGUuc2Nyb2xsVG9wXG4gICAgQHByZXZpZXdCb3RPZnMgPSBAcHJldmlld1RvcE9mcyArIChwdndCb3RCbmQgLSBAcHZ3VG9wQm5kKVxuXG4gIGdldEVsZVRvcEhndEJvdDogKGVsZSwgc2NybiA9IHllcykgLT5cbiAgICB7dG9wOmVsZVRvcEJuZCwgYm90dG9tOiBlbGVCb3RCbmR9ID0gZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdG9wID0gaWYgc2NybiB0aGVuIEBzY3JuVG9wT2ZzICAgICsgKGVsZVRvcEJuZCAtIEBlZHRUb3BCbmQpIFxcXG4gICAgICAgICAgICAgICAgICBlbHNlIEBwcmV2aWV3VG9wT2ZzICsgKGVsZVRvcEJuZCAtIEBwdndUb3BCbmQpXG4gICAgaGd0ID0gZWxlQm90Qm5kIC0gZWxlVG9wQm5kXG4gICAgYm90ID0gdG9wICsgaGd0XG4gICAgW3RvcCwgaGd0LCBib3RdXG4gICJdfQ==
