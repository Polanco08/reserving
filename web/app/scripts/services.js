(function(){
    'use strict';
    var path = '../jsondb.json';

    angular.module('reserving')


        // Factory Empleados - Gestión de empleados
        //----------------------------------------------------------------------
        .factory('EmpleadoService', ['$http','tools', function($http, tools){
            var empleados = [
                {"id": 1, "name": "Manuela", "lastName": "Camacho Martinez"},
                {"id": 2, "name": "Carlos", "lastName": "Perez Lopez"},
                {"id": 3, "name": "Roberto", "lastName": "Casillas"}
            ];
            var factory = {};

            factory.getAll = function () {
                return empleados;
            };

            factory.get = function (id) {
                /*return empleados.then(function(){
                 return utils.findById(empleados, id);
                 })*/
                for (var i = 0; i < empleados.length; i++) {
                    if (empleados[i].id === parseInt(id)) {
                        return empleados[i];
                    }
                }
                return {};
            };

            return factory;
        }])


        // Clientes Service
        //----------------------------------------------------------------------
        .service('ClienteService', ['$http', 'tools', function($http, tools){
            this.getAll = function(success, failure) {
                $http.get(path)
                    .success(success)
                    .error(failure);
            }
        }])


        // Servicios Service
        //----------------------------------------------------------------------
        .service('ServicioService', ['$http', 'tools', function(){

        }])


})();