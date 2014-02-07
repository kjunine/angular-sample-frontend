'use strict';

angular.module('sample')
  .controller('CreateController', function ($scope, $location) {
    $scope.cancel = function() {
      $location.path('#/');
    };
  });
