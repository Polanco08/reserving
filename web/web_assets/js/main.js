(function(){
    'use strict';

    // LOGIN ANGULAR MODULE
    //-------------------------------------
    angular.module('loginApp',['ui.router'])
        .config(['$interpolateProvider', function($interpolateProvider){
            $interpolateProvider.startSymbol('[[');
            $interpolateProvider.endSymbol(']]');
        }])

        .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {

        }])

        .controller('LoginAppController', ['$scope', function(){

        }])



})();