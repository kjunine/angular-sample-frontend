'use strict';

angular.module('sample')
  .controller('CreateController', function ($scope, $location, PostService) {
    $scope.submit = function() {
      PostService.create({
        name: $scope.name,
        text: $scope.text
      });

      $location.path('#/');
    };

    $scope.cancel = function() {
      $location.path('#/');
    };
  });
