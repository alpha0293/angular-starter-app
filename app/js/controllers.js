'use strict';

// App controllers
var wfeControllers = angular.module('wfeControllers', []);

wfeControllers.controller('PeopleListCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('data/people.json').success(function(data) {
    $scope.people = data;
  });

  $scope.order = 'empCode';
}]);

wfeControllers.controller('PersonDetailCtrl', ['$scope', function ($scope) {
  // Our methods...
}]);
