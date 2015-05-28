(function(){
    'use strict';

angular.module('Clientes')

    .controller('ClientesController',['$scope', '$stateParams', '$rootScope', '$state', 'ClienteResource',
        function($scope, $stateParams, $rootScope, $state, ClienteResource){
            $rootScope.titulo       = 'Gestión de clientes';
            $rootScope.descripcion  = 'Administra tus clientes.';
            $scope.orderList        = 'name';
            $scope.confirmaDelete   = false;
            $scope.cliente = new ClienteResource();
            $scope.clientes         = ClienteResource.query();

            if($stateParams.id) {
                // buscar cliente por id
            } else {

            };

            $scope.nuevo = function(){
                $rootScope.titulo = "Nuevo cliente";
                $scope.cliente = new ClienteResource();
            };

            $scope.save = function() {
                $scope.cliente.$save();
                $scope.clientes.push($scope.cliente);
                $state.go('clientes.list');
            };

            $scope.delete = function(cliente){

                ClienteResource.delete({id: cliente.id},function(data){
                    var index = $scope.clientes.indexOf(cliente);
                    if(index > -1) {
                        $scope.clientes.splice(index, 1);
                    }
                });
                $state.go('clientes.list');
            };

            $scope.detalle = function(){};
        }]);


})();