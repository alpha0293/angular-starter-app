'use strict';

// App services
var wfeServices = angular.module('wfeServices', ['ngResource']);

wfeServices.factory('Person', ['$resource', function ($resource) {
  return $resource('data/:requestParam.json', {}, {
    query: {
      method: 'GET',
      params: {
        requestParam: 'people'
      },
      isArray: true
    }
  });
}]);
