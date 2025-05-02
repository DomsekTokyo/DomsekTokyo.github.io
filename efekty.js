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

		// toggle menu class (optional)
		$(document).ready(function() {
			$(".jq--nav-icon").click(function() {
				$("nav ul").toggleClass("open");
			});
		});

		// mobile navigation with logo handling
		let menuOpen = false;

		$(".jq--nav-icon").click(function(){
			if (!menuOpen) {
				// Otevírání menu
				$(".logotokyo").fadeOut(200);
				$(".mobile-nav-back").slideDown();
				$("nav ul").slideDown(function() {
					menuOpen = true;
				});
			} else {
				// Zavírání menu
				$(".mobile-nav-back").slideUp();
				$("nav ul").slideUp(function() {
					$(".logotokyo").fadeIn(200);
					menuOpen = false;
				});
			}
		});

		/*
		$(".jq--image-hamburger").click(function(){ 
			if($(".jq--image-hamburger").attr("src") == "ima/piza.png") {
				$(".jq--image-hamburger").attr("src","ima/cross.png");
			} else {
				$(".jq--image-hamburger").attr("src","ima/piza.png");
			}
		});
		*/

	});
})(jQuery);
