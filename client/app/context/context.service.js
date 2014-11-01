'use strict';

angular.module('cinethemeApp')
  .service('context', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

        var filter = {'name':'avant'};

        return {
            getFilter: function () {
                return filter;
            },
            setFilter: function(value) {
                filter = value;
            }
        };


  });
