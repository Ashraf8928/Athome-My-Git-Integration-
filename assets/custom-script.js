$(document).ready(function() {
    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });
    $('.slider-nav').on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    }).slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: false,
        infinite: false,
        centerMode: false,
        nav: false,
        speed: 400,
        arrows: false,
              responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
              centerMode: false,
               infinite: false,
            }
        }, 
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 6,
              centerMode: false,
                slidesToScroll: 1,
              infinite: false,
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 4,
              centerMode: false,
                slidesToScroll: 1,
              infinite: false,
            }
        }]
    });
    $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
        $('.slider-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });
    $('.slider-nav').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');
        $('.slider-single').slick('slickGoTo', goToSingleSlide);
    });
    $('ul.product_tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');
        $('ul.product_tabs li').removeClass('current');
        $('.product_tabs-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });
    $('.accord1 li p').click(function() {
        $(this).next(".accord-content").slideToggle();
        $(this).closest("li").siblings().find('.accord-content').slideUp();
    });
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();
    $('#tabs-nav li').click(function() {
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();
        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });
    $(".search--bar .test input.boost-pfs-search-box").attr("placeholder", "What are you looking for");
    $('.home-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $('#more-details').click(function() {
        $('.emi-chart').show();
    });
    $('.emi-chart span.action_button').click(function() {
        $('.emi-chart').hide();
    });
    $('#blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: true,
        arrows: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });  
      $('.home-slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        swipeToSlide: true,
        touchMove:true,
        responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          autoplaySpeed: 1500,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          autoplaySpeed: 1500,
          adaptiveHeight: true,
          swipeToSlide: true,
         
        }
      }
    ]
      });
  
    $(".ul.sideber").click(function() {
        if (!$(this).hasClass('active')) {
            $(".li.active").removeClass("active");
            $(this).addClass("active");
        }
    });
    $('.slider-offer').slick({
        breakpoint: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,
        speed: 400
    });
    $('.slider-offer1').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: true,
        arrows: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
$('.slider-custom').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          centerMode: true,
           centerMode: true,
            centerPadding: '40px',
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
            slidesToScroll: 1,
           centerMode: true,
            centerPadding: '40px',
          arrows: false,
        }
      }
    ]
      });
  $('.slider-custom11').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          centerMode: true,
           centerMode: true,
            centerPadding: '40px',
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
            slidesToScroll: 1,
           centerMode: true,
            centerPadding: '40px',
          arrows: false,
        }
      }
    ]
      });
   $('.slider-custom111').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          centerMode: true,
           centerMode: true,
            centerPadding: '40px',
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
            slidesToScroll: 1,
           centerMode: true,
            centerPadding: '40px',
          arrows: false,
        }
      }
    ]
      });
    $('.slider-custom-shop').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: true,
        arrows: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
   $('.slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '40px',
        infinite: true,
         arrows: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '40px',
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        centerMode: true,
        slidesToScroll: 1
      }
    }
  ]
});
    $('#product_re1').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: true,
        arrows: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
  $(function() {                       
  $(".article--header--info a").click(function() {  
    $(this).toggleClass("active");  

  });
  //   $(".share_social_blog_btn a ").click(function() {  
  //   $(this).addClass("active");  

  // });
    
   
  //   $('.article--header--info a').on('click',function () {
  //       $('.article--header--info a').removeClass('rmove');   
  //   });

});
    $("#copyUsingJquery").click(function() {
        copyUsingJquery("#copyTarget");
        $('#msg').addClass('active');
    });
    function copyUsingJquery(element_id) {
        $('#copyTarget').attr("contenteditable", true)
            .select()
            .on("focus", function() {
                document.execCommand('selectAll', false, null)
            })
            .focus()
        document.execCommand("Copy");
        $('#copyTarget').removeAttr("contenteditable");
        //alert("Copy Promo Code");
    }
    $(".page--new-faqs .collapsible-tab--toggle").click(function() {
        $(".page--new-faqs .collapsible-tab--toggle").removeClass("active");
        $(".page--new-faqs .collapsible-tab--toggle").addClass("active");
    });
var mac=0;
  if(navigator.userAgent.indexOf('Mac') > 0){ //alert(navigator.userAgent.indexOf('Mac'))
        mac=1;
    }else{
        mac=0;
    }

if(1==mac){
  $("body").addClass("mac-os"); 
}else{
    $("body").addClass('win-os');
}
});

$(window).on("load", function() {
    $(".buy-now button").text("Buy Now");
});
$(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if ($("body").hasClass("template--customers--login")) {

    } else if ($("body").hasClass("template--customers--register")) {
        if (winTop >= 30) {
            $(".header--root").addClass("fixed");
        } else {
            $(".header--root").removeClass("fixed");
        } //if-else
    } else if ($("body").hasClass("page--security-amp-privacy-policy")) {
        if (winTop >= 30) {
            $(".header--root").addClass("fixed");
        } else {
            $(".header--root").removeClass("fixed");
        }
    } else if ($("body").hasClass("page--new-faqs")) {
        if (winTop >= 30) {
            $(".header--root").addClass("fixed");
        } else {
            $(".header--root").removeClass("fixed");
        }
    } else if ($("body").hasClass("template--customers--register")) {
        if (winTop >= 30) {
            $(".header--root").addClass("fixed");
        } else {
            $(".header--root").removeClass("fixed");
        }
    } else {
        if (winTop >= 150) {
            $(".header--root").addClass("sticky");
            $(".header--root").animate({position: "fixed"});
        } else {
            $(".header--root").removeClass("sticky");
        } //if-else
    }
}); //win func.
$(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
        $(".fixed-mobile-bottom-bar").addClass("sticky-mobile");
    } else {
        $(".fixed-mobile-bottom-bar").removeClass("sticky-mobile");
    } //if-else
}); //win func.
$(document).ready(function(){
  $("#hide").click(function(){
    $(".product-buy-buttons--root").hide();
  });
});
$(window).scroll(function(){
   var winTop = $(window).scrollTop();
  //alert(winTop);
    if ($(window).scrollTop() >= 900) { //alert();
        $('.product_sticky_container').addClass('sticky_bottom');
        //$('nav div').addClass('visible-title');
    }
    else {
        $('.product_sticky_container').removeClass('sticky_bottom');
        //$('nav div').removeClass('visible-title');
    }
});
