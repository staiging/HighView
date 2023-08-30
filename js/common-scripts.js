
(function($){
	$(function(){

        
        

        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
        });

        if ($('.content-slider-item-wrap').length) {
            $('.content-slider-item-wrap').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                navigation: false,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                        }
                        
                    },
                    {
                    
                        breakpoint: 671,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 500,
                            swipe: true,
                            infinite: true,
                        }
                    },
                ]
            });
            $(window).on('resize', function () {
                $('.content-slider-item-wrap').slick('resize');
            });
        }

         // Start Project Style
         if ($('.our-projects-item-wrap').length) {
            $('.our-projects-item-wrap').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                navigation: false,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                            infinite: true,
                        }
                    },
                ]
            });
            $(window).on('resize', function () {
                $('.our-projects-item-wrap').slick('resize');
            });
        }
        
        if($('.team-slider-item-wrap').length){
            $('.team-slider-item-wrap').slick({
                dots: false,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 1500,
                arrows: true,
                centerMode: false,
                centerPadding: false,
                responsive: [
                    {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                             {
                                 breakpoint: 767,
                                 settings: {
                                     slidesToShow: 1,
                                     slidesToScroll: 1
                                 }
                             },
                             {
                                 breakpoint: 992,
                                 settings: {
                                     slidesToShow: 2,
                                     slidesToScroll: 1
                                 }
                             },
                             {
                                 breakpoint: 1025,
                                 settings: {
                                     slidesToShow: 3,
                                     slidesToScroll: 1
                                 }
                             }, ]
            })  
            $(window).on('resize', function () {
                $('.team-slider-item-wrap').slick('resize');
            });
        }

        

        if ($('.slider-thumb').length) {
            $('.slider-thumb').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                autoplay: false,
                arrows: false,
                dots: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.slider-thumb').slick('resize');
            });
        }

        $(' .collection-slider-item-wrap').slick({
            centerMode: false,
            centerPadding: '0',
            slidesToShow: 3,
            arrows: true,
            infinite: true,
            dots: false,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 1270,
                    settings: {
                        arrows: true,
                        centerMode: false,
                        centerPadding: '0',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        arrows: true,
                        centerMode: false,
                        centerPadding: '0',
                        slidesToShow: 1
                    }
                },
                {
                breakpoint: 481,
                settings: {
                arrows: true,
                centerMode: false,
                centerPadding: '0',
                slidesToShow: 1
                }
                },
            ]
        })
        
        if($(".news, .news-article, .contact, .projects-individual").length){
            $('body').addClass("header-secondary")
        }
        
        if($('.news-article').length){
            $('body').addClass('hasSticky')
        }

        if ($('.solution-item-wrap').length) {
            $('.solution-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                mobileFirst: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            })
    
            $(window).on('resize', function () {
                $('.solution-item-wrap').slick('resize');
            });
        }
    

      
      
        /*Initilize splitting*/
        //Animate heading
        Splitting();
        gsap.from(".char", {duration:0.25, opacity:0, stagger:0.03, y:30, ease:"power1.inOut"});

   
        var $animation_elements = $('.anim-el');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('inview');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');



        // Click function
        $('.our-team-item').click(function(){
            var activeTab = $(this).attr('href');
            $(activeTab).fadeIn();
            $('#popUpOverlay').fadeIn()
            return false;
        });
        
        $('.cross-btn a').click(function(e){
            e.preventDefault();
            $('.team-item-modal-wrap').fadeOut();
            $('#popUpOverlay').fadeOut()
        })
        
		
	})// End ready function.
   
    
    
    // End the solutin card carousel
    
    

	

})(jQuery)

