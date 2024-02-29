
	$(document).ready(function(){
		initResize();
		initVideoBg();
		initScroller();
		initAnimation();
		initowlCarousel();
	});



	function initScroller () {
		$('#scroll-page-content').localScroll({
           target:'#page-content'
        });
		$('#page-top').localScroll({
           target:'body'
        });
	}


	$('.show-map').on('click', function(e){
	  e.preventDefault();
	  $('.contact-info-wrapper').toggleClass('map-open');
	  $('.show-info-link').toggleClass('info-open');
	});

	$('.show-info-link').on('click', function(e){
	  e.preventDefault();
	  $('.contact-info-wrapper').toggleClass('map-open');
	  $(this).toggleClass('info-open');
	});



	function initAnimation () {
		new WOW().init();
	}




	function initVideoBg () {
		var hasBgVideo = $('#bgndVideo').hasClass('player');
		if (hasBgVideo) {
			$('#bgndVideo').YTPlayer();
		}
	}

	


	function initowlCarousel () {
		$("#owl-brand").owlCarousel({
			autoPlay: 3000,
			items : 6,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3],
			itemsTablet : [768, 2],
			itemsMobile : [479, 1],
			navigation: false,
		});
	}



	function initResize () {
		var header = $(".hero-content-wrapper");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			if ($("#page-top").length > 0) {
				if (scroll >= 270) {
					header.addClass("remove");
				} else {
					header.removeClass("remove");
				}
			}else{
				if (scroll >= 120) {
					header.addClass("remove");
				} else {
					header.removeClass("remove");
				}
			}
		});
		$(window).resize(function(){
			var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
			var footerHeight = $('#page-footer').outerHeight();
			if (width >= '768') { 
				$('#page-content').css({'marginBottom': footerHeight + 'px'});
			}else{
				$('#page-content').css({'marginBottom': '0px'});
			}
		});
		$(window).resize();
	}
	
