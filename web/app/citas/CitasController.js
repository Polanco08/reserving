(function(){
    'use strict';

    angular.module('Citas')

        .controller('CitasController',['$scope', '$rootScope',function($scope,$rootScope){
            $rootScope.titulo = "Gestión de citas";
            $rootScope.descripcion = "Navega por el calendario, para ver  tus citas";
            $scope.eventSources = [];
        }])

        .controller('CalendarController', ['$scope', function($scope){
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();

            // Configuración de calendario
            //------------------------------------------------------
            $scope.uiConfig = {
                calendar:{
                    height: 500,
                    editable: true,
                    allDaySlot: false,
                    header:{
                        left: 'today prev,next',
                        center: 'title',
                        right: 'agendaWeek agendaDay'
                    },
                    timeFormat: {
                        agenda: 'HH:mm{ - HH:mm}',
                    },
                    axisFormat: 'HH:mm',
                    defaultView: 'agendaDay',
                }
            };
        }])
})();
