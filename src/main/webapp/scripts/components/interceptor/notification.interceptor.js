 'use strict';

angular.module('pruebapractica2App')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-pruebapractica2App-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-pruebapractica2App-params')});
                }
                return response;
            }
        };
    });
