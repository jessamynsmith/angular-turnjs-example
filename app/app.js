'use strict';

// Declare app level module which depends on views, and components
angular.module('angularTurnjsExample', [
  'ngRoute',
  'angularTurn',
  'angularTurnjsExample.book'
])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/book'});
  }]);
