'use strict';

angular.module('cinethemeApp')
  .controller('MainCtrl', function ($scope, $http, context) {
    $scope.awesomeThings = [];

    $scope.filterModel = {
        search: {}
    };

    $scope.filterModel.search = context.getFilter();
        console.log('filter ' +  $scope.filterModel.search);

    $scope.movies = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });



            $http.get('/api/movies')
                .success(function(data) {
                    $scope.movies = data.filter(function(element) {
                        return element.img !== '';
                    });
                })
                .error(function() {
                    console.log('Error occured getting movies data');
                });

        $scope.search = {};
        $scope.limit = 20;

        $scope.addMoreMovies = function() {
            $scope.limit += 2;

        }
  });
