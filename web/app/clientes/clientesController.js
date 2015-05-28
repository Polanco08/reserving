(function(){
    'use strict';

angular.module('Clientes')

    .controller('ClientesController',['$scope', '$stateParams', '$rootScope', '$state', 'ClienteResource',
        function($scope, $stateParams, $rootScope, $state, ClienteResource){
            function init(){
                $rootScope.titulo       = 'Gestión de clientes';
                $rootScope.descripcion  = 'Administra tus clientes.';
                $scope.orderList        = 'name';
                $scope.confirmaDelete   = false;
                $scope.cliente          = new ClienteResource();
                $scope.clientes         = ClienteResource.query().$promise.then(function(data){
                    $scope.clientes     = data;
                });

            }


            if($stateParams.id) {}

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
                swal({
                    title: "¿Seguro?",
                    text: "Vas a eliminar el cliente id: "+cliente.id+", se perderán sus datos.",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#d62c1a",
                    confirmButtonText: "Sí, Eliminalo!",
                    closeOnConfirm: false
                },function(isConfirm){
                    if(isConfirm) {
                        swal("Eliminado!", "El cliente id: "+cliente.id+" ha sido eliminado., ", "success");

                        ClienteResource.delete({id: cliente.id},function(data){
                            var index = $scope.clientes.indexOf(cliente);
                            if(index > -1) {
                                $scope.clientes.splice(index, 1);
                            }
                        });
                    }
                });

                $state.go('clientes.list');
            };

            $scope.detalle = function(cliente){
                $scope.cliente = cliente;
            };

            init();
        }])


    .controller('clientePerfilCtrl', function ($scope, $window) {
        $scope.tabs = [
            { title:'Dynamic Title 1', content:'Dynamic content 1' },
            { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
        ];

        $scope.alertMe = function() {
            setTimeout(function() {
                $window.alert('You\'ve selected the alert tab!');
            });
        };
    });


})();