(function(){
    'use strict';

    angular.module('Servicios',[])
        .value('_APIURL', 'http://api.reserving.local')

        .factory('serviciosResource', ['$resource', '_APIURL', function($resource, _APIURL){
            var servicios = $resource(_APIURL+'/servicios/:servicioId', {servicioId:'@id'});

            return {
                getServicios: function(){
                    return servicios.query();
                },

                getServicio: function(servicios){
                    return {};
                }
            }
        }])
})();