'use strict';

angular.module('Servicios')
    .controller('ServiciosController',["$scope","$rootScope", "$stateParams", "$state", "serviciosResource", "EmpleadoResource",
    function($scope, $rootScope, $stateParams,$state, serviciosResource, EmpleadoResource){

        function init(){
            $scope.duracion =['10','15','30','45','60','75','90'];
            $scope.habilitado_para_reserva = false;
            $rootScope.titulo = "Gestión de servicio";
            $rootScope.descripcion  = 'Gestiona tus servicios desde esta página';
            $scope.servicio = new serviciosResource();
            $scope.empleados = EmpleadoResource.query();
            $scope.servicios = serviciosResource.query().$promise.then(function(data){
                $scope.servicios = data;
            });
        }

        $scope.nuevo = function(){
            $scope.cliente = new serviciosResource();
            $rootScope.titulo = "Nuevo servicio";
            $rootScope.descripcion  = 'Completa el formulario.';
        };

        $scope.save = function(servicio){
            if(servicio.id){
                serviciosResource.update($scope.servicio);
            } else {
                $scope.servicio.$save(function(){
                    $scope.servicios.push($scope.servicio);
                });
            }
            $state.go('servicios.list');
        }

        $scope.editar = function(servicio){
            $rootScope.titulo       = 'Editar servicio';
            $rootScope.descripcion  = 'Cambia los datos y guardalos.';
            $scope.servicio = servicio;
        }

        $scope.delete = function(servicio){
            swal({
                title: "¿Seguro?",
                text: "Vas a eliminar el servicio id: "+servicio.id+", se perderán sus datos.",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d62c1a",
                confirmButtonText: "Sí, Eliminalo!",
                closeOnConfirm: false
            },function(isConfirm){
                if(isConfirm) {
                    swal("Eliminado!", "El servicio id: "+servicio.id+" ha sido eliminado., ", "success");

                    serviciosResource.delete({id: servicio.id},function(data){
                        var index = $scope.servicios.indexOf(servicio);
                        if(index > -1) {
                            $scope.servicios.splice(index, 1);
                        }
                    });
                    $state.go('servicios.list');
                }
            });
        };

        init();
    }])