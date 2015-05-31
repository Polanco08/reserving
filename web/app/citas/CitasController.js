(function(){
    'use strict';

    angular.module('Citas')

        .controller('CitasController',['$scope', '$rootScope',function($scope,$rootScope){
            $rootScope.titulo = "Gestión de citas";
            $rootScope.descripcion = "Navega por el calendario, para ver  tus citas";
            $scope.eventSources = [];

            $scope.Popovercontent = "template.html";
            $scope.Popovertitle = "Titulo formulario";
        }])

        .controller('CalendarController', ['$scope', function($scope){
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();

            $scope.events = [
                {title: 'All Day Event',start: new Date(y, m, 2), startEditable: true},
                {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
                {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
                {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
                {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
                {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
            ];

            $scope.eventRender = function( event, element, view ) {
                element.attr({'tooltip': event.title,
                    'tooltip-append-to-body': true});
                $compile(element)($scope);
            };

            /* Change View */
            $scope.changeView = function(view,calendar) {
                uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
            };

            $scope.eventSources = [$scope.events];

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
                        agenda: 'HH:mm{ - HH:mm}'
                    },
                    axisFormat: 'HH:mm',
                    defaultView: 'agendaDay',

                    eventClick: $scope.alertOnEventClick
                }
            };

            $scope.alertOnEventClick = function( date, jsEvent, view){
                console.log(date.title + ' was clicked ');
            };
        }])

        .controller('formAddCitaCtrl', ['$scope', '$rootScope', function($scope,$rootScope){
            $rootScope.nuevacita = function(){
                console.log("Nueva cita");
            }
        }])


    // Javascript code
    /*$('html').on('mouseup', function(e) {
        if(!$(e.target).closest('.popover').length) {
            $('.popover').each(function(){
                $(this.previousSibling).popover('hide');
            });
        }
    });*/

    /*$('.fc-minor').click(function(e){
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        var bodyTop = document.documentElement.scrollTop + document.body.scrollTop;

        console.log("X: "+mouseX+ "\nY: "+mouseY);
        //window.outerWidth is not working in IE
        var windowWidth  = $(window).outerWidth();
        var windowHeight = $(window).outerHeight();

        //if(mouseY-bodyTop+popupHeight > windowHeight){}


        //set the position first. remove the position attr in css
        //$('div').css({position:"absolute",top:popupTop,left:popupLeft});
        //$('div').show();
    });*/
})();
