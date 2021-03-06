'use strict';

angular.module('sample', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ]).config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/list.html',
        controller: 'ListController'
      }).when('/new', {
        templateUrl: 'views/create.html',
        controller: 'CreateController'
      }).when('/modify/:id', {
        templateUrl: 'views/update.html',
        controller: 'UpdateController'
      }).otherwise({
        redirectTo: '/'
      });
  });
