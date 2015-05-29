(function(){
    'use strict';

    angular.module('reservingApp', [
            'ui.router',
            'ngResource',
            'ui.bootstrap',
            'ncy-angular-breadcrumb',
            'angular-loading-bar',
            'xtForm',
            'angular-dropdown-multiselect',

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

        /*
        * Esta configuración nos permite tener una referencia disponible en cualquier ambito de la aplicación
        * a : $state, $stateParams, $rootScope. Por ejemplo : <Li ng-class = "{activos: $state.includes('servicios')}">
        * Esto estará activo siempre que este activo uno de sus decendientes (servicios).
        * */
        .run(['$rootScope', '$state', '$stateParams',
                function ($rootScope,   $state,   $stateParams) {
                    $rootScope.$state = $state;
                    $rootScope.$stateParams = $stateParams;
                }
            ]
        )


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
                    .state('empleados.editar', {
                        url: '/{id:[0-9]{1,4}}/editar',
                        templateUrl: '/app/empleados/views/editar.tpl.html',
                        ncyBreadcrumb: {
                            label: 'Detalle Empleado ',
                            parent: 'empleados.list'
                        }
                    })
                    .state('empleados.detalle', {
                        url: '/{id:[0-9]{1,4}}/detalle',
                        templateUrl: '/app/empleados/views/detalle.tpl.html',
                        ncyBreadcrumb: {
                            label: 'Detalle Empleado ',
                            parent: 'empleados.list'
                        }
                    })


                    // Clientes state
                    //-----------------------------------------------------
                    .state('clientes', {
                        abstract: true,
                        url: '/clientes',
                        templateUrl: '/app/clientes/views/index.tpl.html',
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
                    .state('clientes.editar', {
                        url: '/{id:[0-9]{1,4}}/editar',
                        templateUrl: '/app/clientes/views/editar.tpl.html',
                        ncyBreadcrumb: {
                            label: 'Editar Cliente ',
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
                        url: '/{id:[0-9]{1,4}}/detalle',
                        templateUrl: '/app/servicios/views/detalle.tpl.html',
                        ncyBreadcrumb: {
                            label: 'Detalle servicio [[servicio.id]] ',
                            parent: 'servicios.list'
                        }
                    })
                    .state('servicios.editar', {
                        url: '/{id:[0-9]{1,4}}/edit',
                        templateUrl: '/app/servicios/views/editar.tpl.html',
                        ncyBreadcrumb: {
                            label: 'Editar servicio ',
                            parent: 'servicios.list'
                        }
                    })
            }])
})();