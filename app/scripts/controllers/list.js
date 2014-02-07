'use strict';

angular.module('sample')
  .controller('ListController', function ($scope, PostService) {
    $scope.posts = PostService.list();
  });
