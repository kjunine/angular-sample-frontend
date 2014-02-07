'use strict';

angular.module('sample')
  .controller('UpdateController', function ($scope, $location, $routeParams, PostService) {
    var id = $routeParams.id;

    $scope.post = PostService.read(id);

    $scope.name = $scope.post.name;
    $scope.text = $scope.post.text;

    $scope.submit = function() {
      $scope.post.name = $scope.name;
      $scope.post.text = $scope.text;

      PostService.update($scope.post);

      $location.path('#/');
    };

    $scope.cancel = function() {
      $location.path('#/');
    };
  });
