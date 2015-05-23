(function(){
    'use strict';

    angular.module('Servicios')
        .controller('ServiciosController',
            ["$scope", "$stateParams", "serviciosResource", function($scope, $stateParams, serviciosResource){

                $scope.listadoServicios = serviciosResource.getServicios();
                console.log($stateParams.servicioId);

                $scope.nuevoServicio = function(){
                console.log("Nuevo servicio...");
            }
        }])
})();