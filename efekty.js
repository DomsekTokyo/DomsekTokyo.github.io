(function($){
	$(function(){
		$(".jq--scroll--uvod").click(function(){
			$("html, body").animate({scrollTop: $(".jq--uvod").offset().top}, 1000);
		});

		$(".jq--scroll--omne").click(function(){
			$("html, body").animate({scrollTop: $(".jq--omne").offset().top}, 1500);
		});

		$(".jq--scroll--projekty").click(function(){
			$("html, body").animate({scrollTop: $(".jq--projekty").offset().top}, 1700);
		});

		$(".jq--scroll--kontakty").click(function(){
			$("html, body").animate({scrollTop: $(".jq--kontakty").offset().top}, 1800);
		});

		

                // Mobile navigation toggle
        $(".jq--nav-icon").click(function () {
            $(".nav-background").slideToggle();
            $(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle();
        });

        // Změna obrázku hamburger menu
        $(".jq--image-hamburger").click(function () {
            let img = $(this);
            let currentSrc = img.attr("src");

            img.attr("src", currentSrc === "ima/piza.png" ? "ima/cross.png" : "ima/piza.png");
        });
        
			  
	
			
		
	});
})(jQuery);