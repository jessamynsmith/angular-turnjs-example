'use strict';

describe('angularTurnjsExample.book module', function() {
  var scope;

  beforeEach(module('angularTurnjsExample.book'));

  describe('book controller', function() {
    it('should ....', inject(function($rootScope, $controller, $q) {
      scope = $rootScope.$new();
      var parameters = {
        $scope: scope
      };
      var bookCtrl = $controller('BookCtrl', parameters);
      expect(bookCtrl).toBeDefined();
    }));

  });
});
