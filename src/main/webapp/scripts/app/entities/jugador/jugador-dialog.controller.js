'use strict';

angular.module('pruebapractica2App').controller('JugadorDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'Jugador',
        function($scope, $stateParams, $uibModalInstance, entity, Jugador) {

        $scope.jugador = entity;
        $scope.load = function(id) {
            Jugador.get({id : id}, function(result) {
                $scope.jugador = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('pruebapractica2App:jugadorUpdate', result);
            $uibModalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.jugador.id != null) {
                Jugador.update($scope.jugador, onSaveSuccess, onSaveError);
            } else {
                Jugador.save($scope.jugador, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
}]);
