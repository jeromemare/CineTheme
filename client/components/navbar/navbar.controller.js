'use strict';

angular.module('cinethemeApp')
  .controller('NavbarCtrl', function ($scope, $location, context) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];


        $scope.filterModel = {
            search: {}
        };

        $scope.filterModel.search = context.getFilter();

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });