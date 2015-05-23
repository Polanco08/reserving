(function(){
    'use strict';

    angular.module('Servicios')
        .controller('ServiciosController',["$scope", "serviciosResource", function($scope, serviciosResource){
            $scope.listadoServicios = serviciosResource.getServicios();
            $scope.detalleServicio = {};

            $scope.nuevoServicio = function(){
                console.log("Nuevo servicio...");
            }

            $scope.servicioDetalle = function(servicio){

            }
        }])
})();