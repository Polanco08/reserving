
'use strict';

angular.module('Empleados',[])

    // Factory Empleados - Gestión de empleados
    //----------------------------------------------------------------------
    .factory('EmpleadoResource', ['$resource','_APIURL', function($resource, _APIURL){
        return $resource(_APIURL + '/empleados/:empleadoId');
    }])

    // Factory Empleados - Gestión de empleados
    //----------------------------------------------------------------------
    .factory('EmpleadoService', ['$http','tools', function($http, tools){
        var empleados = [
            {"id": 1, "name": "Manuela", "lastName": "Camacho Martinez"},
            {"id": 2, "name": "Carlos", "lastName": "Perez Lopez"},
            {"id": 3, "name": "Roberto", "lastName": "Casillas"}
        ];
        var factory = {
            getAll: function(){
                return empleados;
            },
            get: function(id){
                for (var i = 0; i < empleados.length; i++) {
                    if (empleados[i].id === parseInt(id)) {
                        return empleados[i];
                    }
                }
                return {};
            }
        };

        return factory;
    }])
