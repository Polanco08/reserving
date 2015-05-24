(function(){
    'use strict';

    angular.module('Servicios',[])
        .value('_APIURL', 'http://api.reserving.local')

        .factory('serviciosResource', ['$resource', '_APIURL', function($resource, _APIURL){
            return $resource(
                _APIURL+'/servicios/:servicioId',
                {servicioId:'@id'},
                {update : {method:'PUT'}}
            );
        }])
})();