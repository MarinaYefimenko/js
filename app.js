$(function() {
   
    /*Fixed header*/
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    
    
    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop(); 
        
        if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
        
        
    });
    
    
    /*Smooth scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        
        nav.removeClass("show");
        
        console.log(elementOffset);
        
        $("html, body").animate({
            scrollTop:elementOffset -60
        }, 700);
    });
    
    /*navToggle*/
    
    
   navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    })
        
    
    
    /*Reviews slider https://kenwheeler.github.io/slick/*/
    
    let slider = $("#reviewsSlider");
    
    slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
});
    
    
    
    
    
    
    
    
});