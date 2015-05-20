'use strict';

angular.module('Empleados',[])

    .controller('EmpleadosController', ['$scope', function($scope){
        $scope.titulo       = "Empleados";
        $scope.empleados    = [
            {"id": 1, "name": "Manuela", "lastName": "Camacho Martinez"},
            {"id": 2, "name": "Carlos", "lastName": "Perez Lopez"},
            {"id": 3, "name": "Roberto", "lastName": "Casillas"}
        ];
    }])