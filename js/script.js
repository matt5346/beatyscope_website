$('.content_toggle_first').on('click', function(event) {
    event.preventDefault();

    let $this = $(this);

    $this.siblings('.description').toggleClass('active');


});

$('.content_toggle_second').on('click', function(event) {
    event.preventDefault();

    let $this = $(this);

    $this.siblings('.description').toggleClass('active');


});

$('.content_toggle_third').on('click', function(event) {
    event.preventDefault();

    let $this = $(this);

    $this.siblings('.description').toggleClass('active');


});



$('.choice_box .choice').on('click', function(event) {
    event.preventDefault();

    let $this = $(this);

    $('.choice_box .choice').removeClass('-active');
    $('.choice_box').siblings().removeClass('active');
    $this.parent().toggleClass('active');
    $this.toggleClass('-active');


    

});

//------mobile-input-id------//

$('.choice_inner .input_box').each(function(i) {
    $(this).find('input').attr('id', 'id_' + i);
    $(this).find('label').attr('for', 'id_' + i);
});



$('#nav-toggle').on('click', function(event) {
    event.preventDefault();
    
    $('#nav-toggle').toggleClass('active');
    $('#nav').toggleClass('active');
})

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        dots: false,
        margin: 10,
        navContainer: ".service-buttons",
        navText: ["", ""],
        navClass: ["prev", "next"],
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                responsiveRefreshRate: 50,
                dots: true,
            },

            576:{
                items:5,
                responsiveRefreshRate: 50,
                dots: false,
            },

        }
        
    });

    


});

$(document).ready(function () {
    $(".saloncarousel-slides").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        dots: false,
        margin: 10,
        navContainer: ".saloncarousel-buttons",
        navText: ["", ""],
        navClass: ["prev-white", "next-white"],
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                responsiveRefreshRate: 50,
            },

            576:{
                items:5,
            },
        }
    })
});

$(document).ready(function () {
    $(".specialoffers-owlcarousel").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        autoHeight: true,
        margin: 30,
        navContainer: ".offers-buttons",
        navText: ["", ""],
        navClass: ["prev", "next"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                responsiveRefreshRate: 50,
                dots: true,
            },

            576:{
                items:2,
                dots: false,
                responsiveRefreshRate: 50,
            },

            1200:{
                items:3,
            },

        }
    });


});

$(document).ready(function () {

   
	function postsCarousel() {
		var checkWidth = $(window).width();
		var owlPost = $(".offer-slider");
		if (checkWidth > 576) {
			if(typeof owlPost.data('owl.carousel') != 'undefined'){
				owlPost.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
                owlPost.find('.owl-stage-outer').children().unwrap(); 
               
            }
            owlPost.removeClass('owl-carousel');
			
		} else if (checkWidth < 576) {
			owlPost.addClass('owl-carousel');
			owlPost.owlCarousel({
				items : 1,
				slideSpeed : 500,
				animateOut: 'fadeOut',
				dots: true,
				loop: true
			});
		}
	}

  postsCarousel();
  $(window).resize(postsCarousel);
});



$(document).ready(function () {
    $(".comments-owlcarousel").owlCarousel({
        items: 2,
        loop: true,
        dots: false,
        autoHeight: true,
        margin: 30,
        navContainer: ".generalcarousel-buttons",
        navText: ["", ""],
        navClass: ["prev", "next"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots: true,
                responsiveRefreshRate: 50,
            },

            768:{
                items:2,
            },

        }
    })
}); 

$(document).ready(function () {
    $(".mapcarousel-slides").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        margin: 10,
        singleItem: true,
        navContainer: ".mapcarousel-buttons",
        navText: ["", ""],
        navClass: ["prev", "next"]
    })
});

$(document).ready(function () {
    $(".mapcarousel-slides_first").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        margin: 10,
        navContainer: ".mapcarousel-buttons",
        navText: ["", ""],
        navClass: ["prev", "next"]
    })
});

$(document).ready(function () {
    $(".mastercarousel-slides").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        dots: false,
        margin: 10,
        navContainer: ".mastercarousel-buttons",
        navText: ["", ""],
        navClass: ["prev-white", "next-white"],
        responsive:{
            0:{
                items:2,
                responsiveRefreshRate: 50,
            },

            576:{
                items:5,
            },

        }

    })
});



$(document).ready(function () {


    $('#filter').on('click', function(){
        $('.filters_box').toggleClass('active');

    })


});



$(document).ready(function () {
    $(".informationmap-slides").owlCarousel({
        items: 2,
        loop: true,
        nav: true,
        dots: false,
        autoWidth: true,
        margin: 5,
        navContainer: ".informationmap-buttons",
        navText: ["", ""],
        navClass: ["prev-white", "next-white"]
    })
});

$(document).ready(function (){
    $('#menu_button').on('click', function () {
        $('#menu_buttons').toggle();
    });
});

$(document).ready(function () {
    $("#phone").mask("+7(999) 999-99-99");
});

$(document).ready(function () {
    $("#code").mask("99.99.9999");
});

$(document).ready(function () {
    $("#sms").mask("9 9 9 9");
});

$(document).ready(function () {

    fixed = $('.content_box .fixed');

    fixed.on('click', function(event) {
        event.preventDefault();

        $(this).children('.fixed a').toggleClass('active');
            $(this).toggleClass('active');
        


        
    });
});

//--------map-description appearing-------//

$(document).ready(function () {

    function map_click() {
		var checkWidth = $(window).width();
		if (checkWidth < 576) {
            $('.mobile_flag').on('click', function(event) {
                event.preventDefault();
        
                $('.map-information').addClass('active');
        
                        
            });
        
            $('.cancel_btn').on('click', function(event) {
                event.preventDefault();
        
                $('.map-information').removeClass('active');
        
                        
            });
        } else {

        };
    }

    map_click();
    $(window).resize(map_click);
});

$(document).ready(function () {

    $('#sidebar_button').on('click', function(event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('.user-link').toggleClass('active');
        $('.users-region').toggleClass('active');

                
    });
});

$(document).ready(function () {

    $('#sidebar_button_small').on('click', function(event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('.user-link').toggleClass('active');
        $('.users-region').toggleClass('active');

                
    });
});

//------salon-card-mobile-slider-------//

$(document).ready(function () {

   
	function postsCarousel2() {
		var checkWidth = $(window).width();
		var owlPost = $(".offer_slider");
		if (checkWidth > 1200) {
			if(typeof owlPost.data('owl.carousel') != 'undefined'){
				owlPost.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
                owlPost.find('.owl-stage-outer').children().unwrap(); 
			}
			owlPost.removeClass('owl-carousel');
		} else if (checkWidth < 1200) {
			owlPost.addClass('owl-carousel');
			owlPost.owlCarousel({
				items : 2,
				slideSpeed : 500,
				animateOut: 'fadeOut',
				dots: true,
                loop: true,
                nav: true,
                autoHeight: true,
                margin: 10,
                navText: ["", ""],
                navClass: ["prev", "next"],
                responsive:{
                    0:{
                        items:1,
                        dots: true,
                        responsiveRefreshRate: 50,
                    },
                    576:{
                        items:2,
                        dots: false,
                        responsiveRefreshRate: 50,
                    },
                }
            });
		}
	}

  postsCarousel2();
  $(window).resize(postsCarousel2);
});

//------profilecomments-region-mobile-slider-------//

$(document).ready(function () {

   
	function postsCarousel3() {
		var checkWidth = $(window).width();
		var owlPost = $(".profilecomments-slider");
		if (checkWidth > 576) {
			if(typeof owlPost.data('owl.carousel') != 'undefined'){
				owlPost.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
                owlPost.find('.owl-stage-outer').children().unwrap(); 
			}
			owlPost.removeClass('owl-carousel');
		} else if (checkWidth < 576) {
			owlPost.addClass('owl-carousel');
			owlPost.owlCarousel({
				items : 1,
				slideSpeed : 500,
				animateOut: 'fadeOut',
                dots: true,
                autoHeight: true,
                loop: true,
                nav: true,
                margin: 10,
                navText: ["", ""],
                navClass: ["prev", "next"]
			});
		}
	}

  postsCarousel3();
  $(window).resize(postsCarousel3);
});

katweKibsAvatar.init({
    width: 50,
    height: 51,
  });

function toggle(content) {
    if (content.style.display === 'none') {
        content.style.display = 'block';
    }

    else {
        content.style.display = 'none';
    }
}

function toggleflex(content) {
    if (content.style.display === 'none') {
        content.style.display = 'flex';
    }

    else {
        content.style.display = 'none';
    }
}


