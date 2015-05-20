(function(){
    angular.module('Clientes')

        .controller('ClientesController',['$scope', '$stateParams', 'ClienteResource',
            function($scope, $stateParams, ClienteResource){
                $scope.clienteId    = $stateParams.clienteId;
                $scope.titulo       = 'Gestión de clientes';
                $scope.orderList    = 'name';

                $scope.ListaClientes = ClienteResource.query();
        }])
})();