
/*-----------------------------------------
            Scroll starting point
-------------------------------------------*/

  $(window).scroll(function(){
  
        if ($(this).scrollTop()>100) {

                  $(".header_top_outer").css({

                    "display":"none",
					"transition":"all .1s .1s ease-out"

                 });
				  
        		  $(".head-bottom").css({

                            "position":"fixed",
                             "background":"rgba(48,101,181, 0.9) ",
							 "transition":"all .1s .2s ease-in"


                     });


                } 

                else{



                $(".header_top_outer").css({

                    "display":"block",
					"transition":"all 0s .2s ease-out"


                  });


				  
      				  $(".head-bottom").css({

						"position":"absolute",
						"background":"transparent",
						"transition":"all .2s .2s ease-in"


                 });
                 

                }
  
  });












$(document).ready(function(){


/* ------------------carosal in features---------------- */


  $(".services-carosal").slick({
  
    
	autoplay: true,
      centerPadding: '60px',
      slidesToShow: 2,
    prevArrow : '#carosal .prev',
    nextArrow : '#carosal .next',
      responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
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

});