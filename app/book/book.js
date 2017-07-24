'use strict';

angular.module('angularTurnjsExample.book', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/book', {
      templateUrl: 'book/book.html',
      controller: 'bookCtrl'
    });
  }])

  .controller('bookCtrl', function ($scope) {

  })

  // External controller 1
  .controller('externalCtrl1', function ($scope) {
    $scope.myName = 'value from EXTERNAL controller 1';
    $scope.name = 'Ronaldinho';
    $scope.pic = 'book/ronaldino.jpg';
    $scope.biography = "Ronaldo de Assis Moreira (born 21 March 1980), commonly known as Ronaldinho, is a Brazilian professional footballer and current club ambassador for Spanish club FC Barcelona after signing for them in September 2016.";

    this.childExternalCtrlMethod = function () {
      console.log("parent just called child's external ctrl 1 Method");
    };
  })
  // External controller 2
  .controller('externalCtrl2', function ($scope) {
    $scope.myName = 'value from EXTERNAL controller 2';
    this.childExternalCtrlMethod = function () {
      console.log("parent just called child's external ctrl 2 Method");
    };
  });
