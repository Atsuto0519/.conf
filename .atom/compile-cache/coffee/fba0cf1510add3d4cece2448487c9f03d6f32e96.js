(function() {
  var AtomRunner;

  AtomRunner = require('../lib/runner');

  describe("AtomRunner", function() {
    var activationPromise;
    activationPromise = null;
    beforeEach(function() {
      atom.workspaceView = new WorkspaceView;
      return activationPromise = atom.packages.activatePackage('atomRunner');
    });
    return describe("when the atom-runner:toggle event is triggered", function() {
      return it("attaches and then detaches the view", function() {
        expect(atom.workspaceView.find('.atom-runner')).not.toExist();
        atom.workspaceView.trigger('atom-runner:toggle');
        waitsForPromise(function() {
          return activationPromise;
        });
        return runs(function() {
          expect(atom.workspaceView.find('.atom-runner')).toExist();
          atom.workspaceView.trigger('atom-runner:toggle');
          return expect(atom.workspaceView.find('.atom-runner')).not.toExist();
        });
      });
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9hdG9tLXJ1bm5lci9zcGVjL2F0b20tcnVubmVyLXNwZWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7RUFBQSxVQUFBLEdBQWEsT0FBQSxDQUFRLGVBQVI7O0VBT2IsUUFBQSxDQUFTLFlBQVQsRUFBdUIsU0FBQTtBQUNyQixRQUFBO0lBQUEsaUJBQUEsR0FBb0I7SUFFcEIsVUFBQSxDQUFXLFNBQUE7TUFDVCxJQUFJLENBQUMsYUFBTCxHQUFxQixJQUFJO2FBQ3pCLGlCQUFBLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZCxDQUE4QixZQUE5QjtJQUZYLENBQVg7V0FJQSxRQUFBLENBQVMsZ0RBQVQsRUFBMkQsU0FBQTthQUN6RCxFQUFBLENBQUcscUNBQUgsRUFBMEMsU0FBQTtRQUN4QyxNQUFBLENBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFuQixDQUF3QixjQUF4QixDQUFQLENBQStDLENBQUMsR0FBRyxDQUFDLE9BQXBELENBQUE7UUFJQSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQW5CLENBQTJCLG9CQUEzQjtRQUVBLGVBQUEsQ0FBZ0IsU0FBQTtpQkFDZDtRQURjLENBQWhCO2VBR0EsSUFBQSxDQUFLLFNBQUE7VUFDSCxNQUFBLENBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFuQixDQUF3QixjQUF4QixDQUFQLENBQStDLENBQUMsT0FBaEQsQ0FBQTtVQUNBLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBbkIsQ0FBMkIsb0JBQTNCO2lCQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQW5CLENBQXdCLGNBQXhCLENBQVAsQ0FBK0MsQ0FBQyxHQUFHLENBQUMsT0FBcEQsQ0FBQTtRQUhHLENBQUw7TUFWd0MsQ0FBMUM7SUFEeUQsQ0FBM0Q7RUFQcUIsQ0FBdkI7QUFQQSIsInNvdXJjZXNDb250ZW50IjpbIkF0b21SdW5uZXIgPSByZXF1aXJlICcuLi9saWIvcnVubmVyJ1xuXG4jIFVzZSB0aGUgY29tbWFuZCBgd2luZG93OnJ1bi1wYWNrYWdlLXNwZWNzYCAoY21kLWFsdC1jdHJsLXApIHRvIHJ1biBzcGVjcy5cbiNcbiMgVG8gcnVuIGEgc3BlY2lmaWMgYGl0YCBvciBgZGVzY3JpYmVgIGJsb2NrIGFkZCBhbiBgZmAgdG8gdGhlIGZyb250IChlLmcuIGBmaXRgXG4jIG9yIGBmZGVzY3JpYmVgKS4gUmVtb3ZlIHRoZSBgZmAgdG8gdW5mb2N1cyB0aGUgYmxvY2suXG5cbmRlc2NyaWJlIFwiQXRvbVJ1bm5lclwiLCAtPlxuICBhY3RpdmF0aW9uUHJvbWlzZSA9IG51bGxcblxuICBiZWZvcmVFYWNoIC0+XG4gICAgYXRvbS53b3Jrc3BhY2VWaWV3ID0gbmV3IFdvcmtzcGFjZVZpZXdcbiAgICBhY3RpdmF0aW9uUHJvbWlzZSA9IGF0b20ucGFja2FnZXMuYWN0aXZhdGVQYWNrYWdlKCdhdG9tUnVubmVyJylcblxuICBkZXNjcmliZSBcIndoZW4gdGhlIGF0b20tcnVubmVyOnRvZ2dsZSBldmVudCBpcyB0cmlnZ2VyZWRcIiwgLT5cbiAgICBpdCBcImF0dGFjaGVzIGFuZCB0aGVuIGRldGFjaGVzIHRoZSB2aWV3XCIsIC0+XG4gICAgICBleHBlY3QoYXRvbS53b3Jrc3BhY2VWaWV3LmZpbmQoJy5hdG9tLXJ1bm5lcicpKS5ub3QudG9FeGlzdCgpXG5cbiAgICAgICMgVGhpcyBpcyBhbiBhY3RpdmF0aW9uIGV2ZW50LCB0cmlnZ2VyaW5nIGl0IHdpbGwgY2F1c2UgdGhlIHBhY2thZ2UgdG8gYmVcbiAgICAgICMgYWN0aXZhdGVkLlxuICAgICAgYXRvbS53b3Jrc3BhY2VWaWV3LnRyaWdnZXIgJ2F0b20tcnVubmVyOnRvZ2dsZSdcblxuICAgICAgd2FpdHNGb3JQcm9taXNlIC0+XG4gICAgICAgIGFjdGl2YXRpb25Qcm9taXNlXG5cbiAgICAgIHJ1bnMgLT5cbiAgICAgICAgZXhwZWN0KGF0b20ud29ya3NwYWNlVmlldy5maW5kKCcuYXRvbS1ydW5uZXInKSkudG9FeGlzdCgpXG4gICAgICAgIGF0b20ud29ya3NwYWNlVmlldy50cmlnZ2VyICdhdG9tLXJ1bm5lcjp0b2dnbGUnXG4gICAgICAgIGV4cGVjdChhdG9tLndvcmtzcGFjZVZpZXcuZmluZCgnLmF0b20tcnVubmVyJykpLm5vdC50b0V4aXN0KClcbiJdfQ==
