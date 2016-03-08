'use strict';

// App controllers, it coming in handy module for DI
var wfeControllers = angular.module('wfeControllers', []);

// PeopleListCtrl for people listing page which detached from index.html in
// previous steps.
wfeControllers.controller('PeopleListCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('data/people.json').success(function(data) {
    $scope.people = data;
  });

  $scope.order = 'empCode';
}]);

// Controller for person detail page, it stays here as placeholder for next step
wfeControllers.controller('PersonDetailCtrl', ['$scope', function ($scope) {
  // Our methods...
}]);
