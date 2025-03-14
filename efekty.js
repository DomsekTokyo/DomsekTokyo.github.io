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

		$(document).ready(function() {
            $(".jq--nav-icon").click(function() {
                $("nav ul").toggleClass("open"); // Toggle třídy 'open' pro zobrazení/skrytí menu
            });
        });

		// mobile navigation
        
		$(".jq--nav-icon").click(function(){
			$(".mobile-nav-back").slideToggle();
			$("nav ul").slideToggle();
			
		});
			/*

		podmínky
		$(".jq--image-hamburger").click(function(){ 

			if($(".jq--image-hamburger").attr("src") == "ima/piza.png")
			{
				$($(".jq--image-hamburger").attr("src","ima/cross.png"));
			}
			else
			{
				$($(".jq--image-hamburger").attr("src","ima/piza.png"));
			}


		});
        */
			  
	
			
		
	});
})(jQuery);