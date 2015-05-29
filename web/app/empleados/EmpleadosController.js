'use strict';

angular.module('Empleados',[])

    .controller('EmpleadosController', ['$scope', '$rootScope', 'EmpleadoResource', function($scope, $rootScope, EmpleadoResource){
        $scope.empleado = new EmpleadoResource();

        function init(){
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

        $scope.delete = function(empleado){}

        init();
    }])

    .controller('listadoEmpleadosCtrl', ['$scope', '$rootScope', 'EmpleadoResource', function($scope, $rootScope, EmpleadoResource){
        $rootScope.titulo       = "Gestión de empleados";
        $rootScope.descripcion = "Gestiona tus empleados desde esta página";
    }])