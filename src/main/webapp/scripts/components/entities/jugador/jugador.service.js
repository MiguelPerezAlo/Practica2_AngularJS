'use strict';

angular.module('pruebapractica2App')
    .factory('Jugador', function ($resource, DateUtils) {
        return $resource('api/jugadors/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT'
            },
            'Asist': {
                method: 'GET', isArray: true, url: 'api/Asist/:totalAsist',
                interceptor: {
                    response: function(response) {
                        response.resource.$httpHeaders = response.headers;
                        return response.resource;
                    }
                }
            },
            'topScore': {
                method: 'GET', isArray: true, url: 'api/topScore/:canastas',
                interceptor: {
                    response: function(response) {
                        response.resource.$httpHeaders = response.headers;
                        return response.resource;
                    }
                }
            }

        });

    });

