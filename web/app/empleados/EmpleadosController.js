'use strict';

angular.module('Empleados',[])

    .controller('EmpleadosController', ['$scope', '$rootScope','$state', 'EmpleadoResource',
        function($scope, $rootScope, $state, EmpleadoResource){
        $scope.example9model = [];
        $scope.example9data = [
            {id: 1, label: "David"},
            {id: 2, label: "Jhon"},
            {id: 3, label: "Danny"}
        ];
        $scope.example9settings = {enableSearch: true};


        function init(){
            $scope.empleado = new EmpleadoResource();
            $scope.empleados    = EmpleadoResource.query().$promise.then(function(data){
                $scope.empleados = data;
            });
        }

        $scope.nuevo = function(){
            $scope.empleado = new EmpleadoResource();
            $rootScope.titulo = "Nuevo empleado";
            $rootScope.descripcion  = 'Completa el formulario.';
        }
        $scope.editar = function(empleado){
            $rootScope.titulo       = "Editar empleado";
            $rootScope.descripcion = "Editar datos de: "+ empleado.nombre;
            $scope.empleado = empleado;
        }
        $scope.save = function(empleado){
            if(empleado.id){
                EmpleadoResource.update($scope.empleado);
            } else {
                $scope.empleado.$save(function(){
                    $scope.empleados.push($scope.empleado);
                });
            }
            $state.go('empleados.list');
        }

            $scope.delete = function(empleado){
                swal({
                    title: "¿Seguro?",
                    text: "Vas a eliminar el servicio id: "+empleado.id+", se perderán sus datos.",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#d62c1a",
                    confirmButtonText: "Sí, Eliminalo!",
                    closeOnConfirm: false
                },function(isConfirm){
                    if(isConfirm) {
                        swal("Eliminado!", "El servicio id: "+empleado.id+" ha sido eliminado., ", "success");

                        EmpleadoResource.delete({id: empleado.id},function(data){
                            var index = $scope.empleados.indexOf(empleado);
                            if(index > -1) {
                                $scope.empleados.splice(index, 1);
                            }
                        });
                        $state.go('empleados.list');
                    }
                });
            };

        init();
    }])

    .controller('listadoEmpleadosCtrl', ['$scope', '$rootScope', 'EmpleadoResource', function($scope, $rootScope, EmpleadoResource){
        $rootScope.titulo       = "Gestión de empleados";
        $rootScope.descripcion = "Gestiona tus empleados desde esta página";
    }])