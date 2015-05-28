(function(){

    // Menú Toogle
    //------------------------------------------
    jQuery(".menutoggle").on("click", function(){
        $("body").toggleClass("leftpanel-collapsed");
    });

    // ToolTip XtForm
    //-------------------------------------------
    $(".tooltipForm").tooltip();

})();