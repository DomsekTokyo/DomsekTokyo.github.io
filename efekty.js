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

		

		// mobile navigation
        /*
		$(".jq--nav-icon").click(function(){
			$(".nav-background").slideToggle();
			$(".mobile-nav-back").fadeToggle();
			$("nav ul").fadeToggle();
		});


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