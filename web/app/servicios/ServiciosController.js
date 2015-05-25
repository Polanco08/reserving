'use strict';

angular.module('Servicios')
    .controller('ServiciosController',
        ["$scope", "$stateParams", "$state", "$window", "serviciosResource", "EmpleadoResource",
            function($scope, $stateParams,$state,$window, serviciosResource, EmpleadoResource){

            // Formulario nuevo servicio
            $scope.duracion =['10','15','30','45','60','75','90'];
            $scope.habilitado_para_reserva = false;
            $scope.empleados = EmpleadoResource.query();
            $scope.listadoServicios = serviciosResource.query();

            // Nuevo servicio
            $scope.save = function(servicio){
               if(!servicio.id){
                   var s = new serviciosResource(servicio);
                   console.log(servicio.usuario);
                   s.nombre = servicio.nombre;
                   s.descripcion = servicio.descripcion;
                   s.precio = servicio.precio;
                   s.duracion = servicio.duracion;
                   s.habilitado_para_reserva = servicio.habilitado_para_reserva;
                   s.empleados = $scope.empleados;
                   s.$save(function(){
                       $scope.listadoServicios.push(s);
                   });
               }
            }



        }])