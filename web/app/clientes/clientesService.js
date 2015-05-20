(function(){
    angular.module('Clientes', [])

        .factory('ClienteResource', ['$resource','_APIURL',function($resource, _APIURL){
            return $resource(_APIURL + '/clientes/:clienteId');
        }])
})();