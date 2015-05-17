/*----------------------------
 WINDOW LOAD FUNCTION
 -----------------------------*/
jQuery(window).load(function () {
    "use strict";

    jQuery(window).trigger("hashchange");
    jQuery(window).trigger("resize");

    //FADE OUT PRELOADER AFTER PAGE LOADING
    jQuery("#loader-overlay").delay(300).fadeOut("slow");
});


/*----------------------------
 DOC READY FUNCTION
 -----------------------------*/
jQuery(document).ready(function () {
    "use strict";

    jsInit();
});
// end document ready


/*----------------------------
 MAIN JS INIT FUNCTION
 -----------------------------*/
function jsInit() {
    "use strict";


    //LANDING PAGE CONTENT POSITION
    (function () {
        function landingInit() {

            var wh = jQuery(window).height(),
                landing = jQuery('#landing-header'),
                landingContent = jQuery('#landing-header .landing-header-content');

            if (matchMedia('(min-width: 480px)').matches) {

                landing.css({height: wh + "px"});

                var contentHeight = landingContent.height(),
                    landingHeight = landing.height(),
                    topMargin = (landingHeight - contentHeight) / 3;

                landingContent.css({"margin-top": topMargin + "px"});

            } else {
                landing.css({height: "auto"});
                landingContent.css({"margin-top": "0px"});
            }
        }
        jQuery(window).on("resize", landingInit);
        jQuery(document).on("ready", landingInit);
    })();

    //FUNCIONES QUE SE EJECUTAN AL HACER SCROLL
    jQuery(window).scroll(function () {
        navScroll();
        landingAnim();
    });

    //AGREGAR CLASE .SCROLLER AL MENU
    function navScroll() {
        var wh = jQuery(window).height() - 100;

        var scrolledTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (scrolledTop >= wh) {
            jQuery(".navbar.navbar-default").removeClass('navbar-transparent').addClass('nav-scroll');
            jQuery(".logo").removeClass('logo').addClass('logo-scroller');
            jQuery(".login-menu").addClass('login-menu-scroller');
        } else if (scrolledTop < wh) {
            jQuery(".navbar.navbar-default").removeClass('nav-scroll').addClass('navbar-transparent');
            jQuery(".logo-scroller").removeClass('logo-scroller').addClass('logo');
            jQuery(".login-menu").removeClass('login-menu-scroller');
        }
    }

    //SCROLL PARA ENLACES ANCLA
    jQuery('a.anchor').click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(jQuery(this).attr('href')).offset().top
        }, 1000);
        return false;
    });

    //ANIMATE HERO CONTENT ON SCROLL
    function landingAnim() {

        var scrolledTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (scrolledTop >= 100) {
            jQuery(".animated").stop().animate({"top": "-70px","opacity": "0"}, 400);
        } else if(scrolledTop < 150){
            jQuery(".animated").stop().animate({"top": "0px", "opacity": "1"}, 400);
        }

    }

    landingAnim();
}




(function(){
    'use strict';

    //Home Page
    var landing = $('#landing-header');

    console.log(landing);



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