'use strict';

angular.module('pruebapractica2App')
	.controller('JugadorDeleteController', function($scope, $uibModalInstance, entity, Jugador) {

        $scope.jugador = entity;
        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Jugador.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };

    });
