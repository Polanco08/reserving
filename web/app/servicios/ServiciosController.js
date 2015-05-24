'use strict';

angular.module('Servicios')
    .controller('ServiciosController',
        ["$scope", "$stateParams", "$state", "$window", "serviciosResource", function($scope, $stateParams,$state,$window, serviciosResource){

            // Formulario nuevo servicio
            $scope.duracion =['10','15','30','45','60','75','90'];
            $scope.habilitado_para_reserva = false;
            $scope.listadoServicios = serviciosResource.query();

            // Nuevo servicio
            $scope.save = function(servicio){
               if(!servicio.id){
                   var s = new serviciosResource();
                   s.nombre = servicio.nombre;
                   s.descripcion = servicio.descripcion;
                   s.precio = servicio.precio;
                   s.duracion = servicio.duracion;
                   s.habilitado_para_reserva = servicio.habilitado_para_reserva;
                   s.$save(function(){
                       $scope.listadoServicios.push(s);
                   });
               }
            }



        }])