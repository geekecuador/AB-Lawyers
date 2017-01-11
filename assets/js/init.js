jQuery(document).ready(function() {

    $(window).on("orientationchange",function(){
        if(window.orientation == 0) // Portrait
        {
            $(".slis").fadeOut("slow");
            $(".prtrt").fadeIn("slow");
        }
        else // Landscape
        {
            $(".prtrt").fadeOut("slow");
            $(".slis").fadeIn("slow");
        }
    });

});
