(function(){
    'use strict';

    angular.module('reserving')

        // Agenda Controller
        //---------------------------------------------------------------
        .controller('AgendaController', ['$scope', function($scope){
            $scope.pageTitle = 'Agenda';
        }])


        // Clientes Controller
        //---------------------------------------------------------------
        .controller('ClientesController', ['$scope', 'ClienteService', function($scope, ClienteService){
            $scope.pageTitle = 'Gestión de clientes';
            $scope.orderList = 'name';
            $scope.clientes = [];

            ClienteService.getAll(function (data) {
                $scope.clientes = data.clientes;
            });

        }])


        // Servicios Controller
        //---------------------------------------------------------------
        .controller('ServiciosController', ['$scope', function($scope){
            $scope.pageTitle = 'Servicios';
        }])


        // Empleados Controller
        //---------------------------------------------------------------
        .controller('EmpleadosController', ['$scope', 'EmpleadoService',
            function($scope, EmpleadoService){
                $scope.pageTitle = 'gestión de Empleados';
                $scope.empleados = [];
                $scope.empleado = null;


                function init() {
                    $scope.empleados = EmpleadoService.getAll();
                    $scope.empleado = EmpleadoService.get(2);
                }

                init();
            }])
})();