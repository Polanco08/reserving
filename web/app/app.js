(function(){
    'use strict';

    angular.module('reservingApp', [
            'ui.router',
            'ngResource',
            'ui.bootstrap',
            'ncy-angular-breadcrumb',

            'Citas',
            'Empleados',
            'Clientes',
            'Servicios'
    ])
        .value('_APIURL', 'http://api.reserving.local')

        .config(['$interpolateProvider', function($interpolateProvider){
            $interpolateProvider.startSymbol('[[');
            $interpolateProvider.endSymbol(']]');
        }])

        .config(['$stateProvider','$urlRouterProvider',
            function ($stateProvider,$urlRouterProvider) {

                // Routing config
                //----------------------------------------

                $urlRouterProvider.otherwise("/");

                $stateProvider

                    // Citas State - Master template
                    .state('reseving', {
                        url: "/",
                        templateUrl: "/app/citas/views/main.tpl.html",
                        ncyBreadcrumb: {
                            label: 'Inicio'
                        }
                    })

                    // Empleados State
                    //-------------------------------------------------------
                    .state('empleados', {
                        abstract: true,
                        controller: 'EmpleadosController',
                        url: '/empleados',
                        templateUrl: '/app/empleados/views/index.tpl.html'
                    })
                    .state('empleados.list', {
                            url: '',
                            templateUrl: '/app/empleados/views/lista.tpl.html',
                            ncyBreadcrumb: {
                                label: 'Empleados',
                                parent: 'reseving'
                            }
                        })
                    .state('empleados.nuevo',{
                        url: '/nuevo',
                        templateUrl: '/app/empleados/views/nuevo.tpl.html',
                        ncyBreadcrumb: {
                            label: 'Nuevo empleado',
                            parent: 'empleados.list'
                        }
                    })
                    .state('empleados.detalle', {
                        url: '/{empleadoId:[0-9]{1,4}}/detalle',
                        templateUrl: '/app/empleados/views/detalle.tpl.html',
                        ncyBreadcrumb: {
                            label: 'empleado ',
                            parent: 'empleados.list'
                        }
                    })


                    // Clientes state
                    //-----------------------------------------------------
                    .state('clientes', {
                        abstract: true,
                        url: '/clientes',
                        templateUrl: '/app/clientes/views/index.tpl.html',
                        /*resolve:{
                         ClienteResource: 'ClienteResource',
                         clientes: function(ClienteResource){

                         // This line is updated to return the promise
                         return ClienteResource.query().$promise;
                         }
                         },*/
                        controller: 'ClientesController'
                    })
                    .state('clientes.list', {
                        url: '',
                        templateUrl: '/app/clientes/views/lista.tpl.html',
                        ncyBreadcrumb: {
                            label: 'clientes',
                            parent: 'reseving'
                        }
                    })
                    .state('clientes.nuevo',{
                        url: '/nuevo',
                        templateUrl: '/app/clientes/views/nuevo.tpl.html',
                        ncyBreadcrumb: {
                            label: 'Nuevo cliente',
                            parent: 'clientes.list'
                        }
                    })
                    .state('clientes.detalle', {
                        url: '/{clienteId:[0-9]{1,4}}/detalle',
                        templateUrl: '/app/clientes/views/detalle.tpl.html',
                        ncyBreadcrumb: {
                            label: 'Cliente ',
                            parent: 'clientes.list'
                        }
                    })


                    // Servicios State
                    //-----------------------------------------------------
                    .state('servicios', {
                        abstract: true,
                        url: '/servicios',
                        templateUrl: '/app/servicios/views/index.tpl.html',
                        controller: 'ServiciosController'
                    })
                    .state('servicios.list', {
                        url: '',
                        templateUrl: '/app/servicios/views/lista.tpl.html',
                        ncyBreadcrumb: {
                            label: 'Servicios',
                            parent: 'reseving'
                        }
                    })
                    .state('servicios.nuevo',{
                        url: '/nuevo',
                        templateUrl: '/app/servicios/views/nuevo.tpl.html',
                        ncyBreadcrumb: {
                            label: 'Nuevo Servicio',
                            parent: 'servicios.list'
                        }
                    })
                    .state('servicios.detalle', {
                        url: '/{servicioId:[0-9]{1,4}}/detalle',
                        templateUrl: '/app/servicios/views/detalle.tpl.html',
                        ncyBreadcrumb: {
                            label: 'Cliente ',
                            parent: 'clientes.list'
                        }
                    })
            }])
})();