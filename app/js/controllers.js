'use strict';

// App controllers
var wfeApp = angular.module('wfeApp', []);

wfeApp.controller('PeopleListCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('data/people.json').success(function(data) {
    $scope.people = data;
  });

  $scope.order = 'empCode';
}]);
