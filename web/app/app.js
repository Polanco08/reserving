(function(){
    'use strict';

    angular.module('reservingApp', [
            'ui.router',
            'ngResource',

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
                        templateUrl: "/app/citas/views/main.tpl.html"
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
                            templateUrl: '/app/empleados/views/lista.tpl.html'
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
                        templateUrl: '/app/clientes/views/lista.tpl.html'
                    })
                    .state('clientes.nuevo',{
                        url: '/nuevo',
                        templateUrl: '/app/clientes/views/nuevo.tpl.html'
                    })
                    .state('clientes.detalle', {
                        url: '/{clienteId:[0-9]{1,4}}/detalle',
                        templateUrl: '/app/clientes/views/detalle.tpl.html'
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
                        templateUrl: '/app/servicios/views/lista.tpl.html'
                    })
            }])
})();