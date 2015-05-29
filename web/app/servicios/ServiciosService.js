(function(){
    'use strict';

    angular.module('Servicios',
            []
        )
        .value('_APIURL', 'http://api.reserving.local')

        .factory('serviciosResource', ['$resource', '_APIURL', function($resource, _APIURL){
            return $resource(_APIURL+'/servicios/:id',{id:'@id'},
                {update : {method:'PUT'}}
            );
        }])

        // Factory Empleados - Gestión de empleados
        //----------------------------------------------------------------------
        .factory('EmpleadoResource', ['$resource','_APIURL', function($resource, _APIURL){
            return $resource(_APIURL + '/empleados/:empleadoId');
        }])
})();