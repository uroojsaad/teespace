////SLIDER://///
jQuery(document).ready(function($){
    $('.gf-three-boxes').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrow: true,
        autoplay: true,
        

      });
})

///ACCORDION://////
jQuery(document).ready(function($) {
  $( "#accordion" ).accordion({
    collapsible: true
  });
} );


////COUNTER://///
// $(selector).countMe(delay,speed)

$("#counterone").countMe(10,40);

$("#countertwo").countMe(10,40);
    
  