(function(){

    // Menú Toogle
    //------------------------------------------
    jQuery(".menutoggle").on("click", function(){
        $(this).toggleClass("menu-collapsed");
        $("body").toggleClass("leftpanel-collapsed");
        console.log($(this).hasClass("menu-collapsed"));
    });
    /*jQuery(".menutoggle").click(function(){
        var b=jQuery("body"),
            d=b.css("position");
    }
    d!="relative"?b.hasClass("leftpanel-collapsed")?(b.removeClass("leftpanel-collapsed chat-view"),jQuery(".nav-bracket li.active ul").css({display:"block"}),jQuery(this).removeClass("menu-collapsed")):(b.addClass("leftpanel-collapsed"),jQuery(".nav-bracket ul").attr("style",""),jQuery(this).addClass("menu-collapsed")):(b.hasClass("leftpanel-show")?(b.removeClass("leftpanel-show"),c()&&b.addClass("leftpanel-collapsed")):(b.addClass("leftpanel-show"),c()&&b.removeClass("leftpanel-collapsed")),a())}),jQuery("#activitiesBtn").click(function(){var a=jQuery("body"),b=a.css("position");b!="relative"?a.hasClass("chat-view")?(a.removeClass("chat-view"),jQuery(".menutoggle").hasClass("menu-collapsed")||(jQuery("body").removeClass("leftpanel-collapsed")
    */

})();