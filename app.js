$(function() {
    
    
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
    
    /*fixed header*/
    checkScroll(scrollOffset);
    
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });
    
    function checkScroll(scrollOffset) {
        if ( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
          header.removeClass("fixed");  
        }
    }
    
    /*Scroll menu*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        var $this = $(this),
            blockID =$this.data('scroll'),
            blockOffset = $(blockID).offset().top;
        
        $("#nav a").removeClass("active");
        $this.addClass("active");
        
        $("#nav").toggleClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
    
    
    /*Nav in mobile*/
    
    $("#nav__toggle").on("click", function(event){
        event.preventDefault();
        
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
    
    
    /*btn Scroll down*/
    
    $("#scroll_down").on("click", function(event) {
        event.preventDefault();
        
        var map = $("#map"),
            down = $(map).offset().top;
        
        
         $("html, body").animate({
            scrollTop: down
        }, 500);
    })
    
    
});