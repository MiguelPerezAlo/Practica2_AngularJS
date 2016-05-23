'use strict';

angular.module('pruebapractica2App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


