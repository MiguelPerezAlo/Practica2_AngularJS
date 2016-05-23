'use strict';

angular.module('pruebapractica2App')
    .controller('TopPlayersController', function ($scope, $rootScope, $stateParams, entity, Jugador,ParseLinks) {

        entity.$promise.then(function(data){
            console.log(data);
            var link = entity.$httpHeaders('link');

            $scope.links = ParseLinks.parse(link);

            $scope.savedPlayers = data;
        });





    });
