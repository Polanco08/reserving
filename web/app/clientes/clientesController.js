(function(){
    'use strict';

angular.module('Clientes')

    .controller('ClientesController',['$scope', '$stateParams', '$rootScope', '$state', 'ClienteResource',
        function($scope, $stateParams, $rootScope, $state, ClienteResource){

            function init(){
                $scope.cliente          = new ClienteResource();
                $scope.clientes         = ClienteResource.query().$promise.then(function(data){
                    $scope.clientes     = data;
                });
            }

            $scope.formCliente = {
                onSubmit: function(isValid){
                    if(isValid){
                        console.log("válido");
                    } else {
                        console.log("inválido");
                    }
                }
            }

            $scope.nuevo = function(){
                $rootScope.titulo = "Nuevo cliente";
                $rootScope.descripcion  = 'Completa el formulario.';
                $scope.cliente = new ClienteResource();
            };

            $scope.save = function() {
                if($scope.cliente.id){
                    //actualiza
                    ClienteResource.update($scope.cliente);
                } else {
                    // guarda nuevo
                    $scope.cliente.$save();
                    $scope.clientes.push($scope.cliente);
                }
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
                        $state.go('clientes.list');
                    }
                });
            };

            $scope.detalle = function(cliente){
                $rootScope.titulo = "Detalle cliente";
                $rootScope.descripcion  = 'Información de '+cliente.nombre;
                $scope.cliente = cliente;
            };

            $scope.editar = function(cliente) {
                $rootScope.titulo       = 'Editar cliente';
                $rootScope.descripcion  = 'Cambia los datos y guardalos.';
                $scope.cliente = cliente;
            }

            init();
        }])

    .controller('listadoClienteCtrl', ['$scope', '$rootScope', function($scope,$rootScope, $windows){
        $rootScope.titulo       = 'Gestión de clientes';
        $rootScope.descripcion  = 'Administra tus clientes.';
        $scope.orden            = 'nombre';
        $scope.reverse          = false;
        $scope.orderList = function(order){
            $scope.orden = order;
        }
    }])

    .controller('clientePerfilCtrl', function ($scope, $window) {

    });


})();