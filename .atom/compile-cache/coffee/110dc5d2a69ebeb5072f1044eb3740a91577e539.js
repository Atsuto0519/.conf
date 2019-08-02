(function() {
  var TouchBar, spinning;

  TouchBar = require('remote').TouchBar;

  spinning = false;

  module.exports = {
    update: function(data) {
      var TouchBarButton, TouchBarLabel, TouchBarSpacer, button, touchBar, window;
      if (!TouchBar) {
        return;
      }
      TouchBarLabel = TouchBar.TouchBarLabel, TouchBarButton = TouchBar.TouchBarButton, TouchBarSpacer = TouchBar.TouchBarSpacer;
      button = new TouchBarButton({
        label: data.text + ": " + (data.description.trim().split('\n')[0]),
        backgroundColor: '#353232',
        click: function() {
          var promise;
          promise = atom.workspace.open(data.fileName);
          return promise.then(function(editor) {
            editor.setCursorBufferPosition([data.line, data.column]);
            return editor.scrollToCursorPosition();
          });
        }
      });
      touchBar = new TouchBar([
        button, new TouchBarSpacer({
          size: 'small'
        })
      ]);
      window = atom.getCurrentWindow();
      return window.setTouchBar(touchBar);
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9hdXRvY29tcGxldGUtcHl0aG9uL2xpYi90b3VjaGJhci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFDLFdBQVksT0FBQSxDQUFRLFFBQVI7O0VBRWIsUUFBQSxHQUFXOztFQUVYLE1BQU0sQ0FBQyxPQUFQLEdBQ0U7SUFBQSxNQUFBLEVBQVEsU0FBQyxJQUFEO0FBQ04sVUFBQTtNQUFBLElBQUcsQ0FBSSxRQUFQO0FBQ0UsZUFERjs7TUFFQyxzQ0FBRCxFQUFnQix3Q0FBaEIsRUFBZ0M7TUFDaEMsTUFBQSxHQUFhLElBQUEsY0FBQSxDQUFlO1FBQzFCLEtBQUEsRUFBVSxJQUFJLENBQUMsSUFBTixHQUFXLElBQVgsR0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBakIsQ0FBQSxDQUF1QixDQUFDLEtBQXhCLENBQThCLElBQTlCLENBQW9DLENBQUEsQ0FBQSxDQUFyQyxDQURHO1FBRTFCLGVBQUEsRUFBaUIsU0FGUztRQUcxQixLQUFBLEVBQU8sU0FBQTtBQUNMLGNBQUE7VUFBQSxPQUFBLEdBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFmLENBQW9CLElBQUksQ0FBQyxRQUF6QjtpQkFDVixPQUFPLENBQUMsSUFBUixDQUFhLFNBQUMsTUFBRDtZQUNYLE1BQU0sQ0FBQyx1QkFBUCxDQUErQixDQUFDLElBQUksQ0FBQyxJQUFOLEVBQVksSUFBSSxDQUFDLE1BQWpCLENBQS9CO21CQUNBLE1BQU0sQ0FBQyxzQkFBUCxDQUFBO1VBRlcsQ0FBYjtRQUZLLENBSG1CO09BQWY7TUFTYixRQUFBLEdBQWUsSUFBQSxRQUFBLENBQVM7UUFDdEIsTUFEc0IsRUFFbEIsSUFBQSxjQUFBLENBQWU7VUFBQyxJQUFBLEVBQU0sT0FBUDtTQUFmLENBRmtCO09BQVQ7TUFJZixNQUFBLEdBQVMsSUFBSSxDQUFDLGdCQUFMLENBQUE7YUFDVCxNQUFNLENBQUMsV0FBUCxDQUFtQixRQUFuQjtJQWxCTSxDQUFSOztBQUxGIiwic291cmNlc0NvbnRlbnQiOlsie1RvdWNoQmFyfSA9IHJlcXVpcmUoJ3JlbW90ZScpXG5cbnNwaW5uaW5nID0gZmFsc2VcblxubW9kdWxlLmV4cG9ydHMgPVxuICB1cGRhdGU6IChkYXRhKSAtPlxuICAgIGlmIG5vdCBUb3VjaEJhclxuICAgICAgcmV0dXJuXG4gICAge1RvdWNoQmFyTGFiZWwsIFRvdWNoQmFyQnV0dG9uLCBUb3VjaEJhclNwYWNlcn0gPSBUb3VjaEJhclxuICAgIGJ1dHRvbiA9IG5ldyBUb3VjaEJhckJ1dHRvbih7XG4gICAgICBsYWJlbDogXCIje2RhdGEudGV4dH06ICN7ZGF0YS5kZXNjcmlwdGlvbi50cmltKCkuc3BsaXQoJ1xcbicpWzBdfVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzM1MzIzMicsXG4gICAgICBjbGljazogKCkgLT5cbiAgICAgICAgcHJvbWlzZSA9IGF0b20ud29ya3NwYWNlLm9wZW4oZGF0YS5maWxlTmFtZSlcbiAgICAgICAgcHJvbWlzZS50aGVuIChlZGl0b3IpIC0+XG4gICAgICAgICAgZWRpdG9yLnNldEN1cnNvckJ1ZmZlclBvc2l0aW9uKFtkYXRhLmxpbmUsIGRhdGEuY29sdW1uXSlcbiAgICAgICAgICBlZGl0b3Iuc2Nyb2xsVG9DdXJzb3JQb3NpdGlvbigpXG4gICAgfSlcbiAgICB0b3VjaEJhciA9IG5ldyBUb3VjaEJhcihbXG4gICAgICBidXR0b24sXG4gICAgICBuZXcgVG91Y2hCYXJTcGFjZXIoe3NpemU6ICdzbWFsbCd9KSxcbiAgICBdKVxuICAgIHdpbmRvdyA9IGF0b20uZ2V0Q3VycmVudFdpbmRvdygpXG4gICAgd2luZG93LnNldFRvdWNoQmFyKHRvdWNoQmFyKVxuIl19
