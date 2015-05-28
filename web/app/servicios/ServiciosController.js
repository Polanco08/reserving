'use strict';

angular.module('Servicios')
    .controller('ServiciosController',["$scope", "$stateParams", "$state", "serviciosResource", "EmpleadoResource",
    function($scope, $stateParams,$state, serviciosResource, EmpleadoResource){

        // Formulario nuevo servicio
        $scope.duracion =['10','15','30','45','60','75','90'];
        $scope.habilitado_para_reserva = false;
        $scope.empleados = EmpleadoResource.query();
        $scope.listadoServicios = serviciosResource.query();



        // Página detalle servicio
        //-----------------------------------------------------
        if($stateParams.servicioId){
            $scope.Detalle = $scope.findById($scope.listadoServicios, $stateParams.servicioId);
        }

        $scope.getDetalle = function(servicio){
            $scope.servicio = servicio;
        }


        $scope.findById = function findById(a, id) {
            for (var i = 0; i < a.length; i++) {
                if (a[i].id === parseInt(id)) {
                    return a[i];
                }
            }
            return {};
        }


        // Guarda servicio Nuevo y editado
        //-------------------------------------------------------------
        $scope.save = function(servicio){
            if(!servicio.id){
                var s = new serviciosResource(servicio);
                s.$save(function(){
                    $scope.listadoServicios.push(s);
                });
                $state.go('servicios.list');
            } else {
                $scope.servicio$.update(function(){
                    console.log("guardado: ")
                })
            }
        }


        // Editar Servicio
        $scope.editar = function(servicio){
            $scope.servicio = servicio;
        }


    }])