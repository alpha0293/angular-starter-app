'use strict';

// App controllers, it coming in handy module for DI
var wfeControllers = angular.module('wfeControllers', []);

// PeopleListCtrl for people listing page which detached from index.html in
// previous steps.
wfeControllers.controller('PeopleListCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('data/people.json').success(function(data) {
    // Add codeName to each person which still missing from people.json
    // Introduce angular.forEach() function.
    angular.forEach(data, function (value, key) {
      if (!value.image) {
        value.image = 'http://placehold.it/200?text=' + value.fullName;
      }

      // We get :codeName from username of workEmail
      value.codeName = value.workEmail.split('@')[0];
    });
    $scope.people = data;
  });

  $scope.order = 'empCode';
}]);

// Controller for person detail page, in additional to $http, we use $routeParams
// which retrieves our :codeName in the url to indecate specified person.
wfeControllers.controller('PersonDetailCtrl', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http) {
    $http.get('data/people/' + $routeParams.codeName + '.json').success(function (data) {
      if (!data.image) {
        data.image = 'http://placehold.it/200?text=' + data.fullName;
      }
      $scope.person = data;
    });
  }
]);
