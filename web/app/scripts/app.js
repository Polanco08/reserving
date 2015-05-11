(function(){
    'use strict';

    /**
     * ReservingApp Module
     * Módulo principal de la aplicación
     */
    var webApp = angular.module('reserving', [
        'ui.router',
        'ngResource'
    ]);

    // Cambio del simbolo { por [ - evita conflictos con twig
    webApp.config(['$interpolateProvider', function($interpolateProvider){
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    }]);

    webApp.config(
        ['$stateProvider','$urlRouterProvider',
            function ($stateProvider,$urlRouterProvider) {

                // Routing config
                //----------------------------------------

                //Cualquier ruta no encontrada, se redirecciona a /reserving
                $urlRouterProvider.otherwise("/")

                $stateProvider

                    // Home State - Master template
                    .state('reseving', {
                        url: "/",
                        templateUrl: "/app/views/reserving/main.html"
                    })


                    // Clientes state
                    //-----------------------------------------------------
                    .state('clientes', { // Estado base que contiene el ui-view para este módulo
                        abstract: true,
                        url: '/clientes',
                        templateUrl: '/app/views/cliente/clientes.html',
                        //add resolve
                    })
                    .state('clientes.list', {
                        url: '',
                        templateUrl: '/app/views/cliente/clientes_list.html'
                    })
                    .state('clientes.nuevo',{
                        url: '/nuevo',
                        templateUrl: '/app/views/cliente/nuevo.html'
                    })
                    .state('clientes.detalle', {
                        url: '/detalle',
                        templateUrl: '/app/views/cliente/detalle.html'
                    })


                    // Empleados State
                    //-------------------------------------------------------
                    .state('empleados', {
                        abstract: true,
                        controller: 'EmpleadosController',
                        url: '/empleados',
                        templateUrl: '/app/views/empleado/empleados.html'
                    })
                    .state('empleados.list', {
                        url: '',
                        templateUrl: '/app/views/empleado/empleados_list.html'
                    })


                    // Servicios State
                    .state('servicios', {
                        url: '/servicios',
                        templateUrl: '/app/views/servicio/servicios.html'
                    });
            }]);
})();
	


