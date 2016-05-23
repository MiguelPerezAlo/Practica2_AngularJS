'use strict';

angular.module('pruebapractica2App')
    .factory('JugadorSearch', function ($resource) {
        return $resource('api/_search/jugadors/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });
