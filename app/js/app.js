'use strict';

// App module
var wfeApp = angular.module('wfeApp', [
  'ngRoute',
  'wfeControllers',
]);

wfeApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/people', {
      templateUrl: 'view/people.html',
      controller: 'PeopleListCtrl',
    })
    .when('/person/:codeName', {
      templateUrl: 'view/person.html',
      controller: 'PersonDetailCtrl',
    })
    .otherwise({
      redirectTo: '/people',
    });
}]);
