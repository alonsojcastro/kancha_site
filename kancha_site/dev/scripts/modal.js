

// var galleryTop = new Swiper('.gallery-top', {
//         nextButton: '.swiper-button-next',
//         prevButton: '.swiper-button-prev',
//         spaceBetween: 10,
//         width: 400
//     });
//     var galleryThumbs = new Swiper('.gallery-thumbs', {
//         spaceBetween: 10,
//         centeredSlides: true,
//         slidesPerView: 'auto',
//         touchRatio: 0.2,
//         slideToClickedSlide: true,
//         width: 400
//     });

var galleryTop;


$(document).ready( () => {

    if ($(window).width() <= 1080) {
      galleryTop = new Swiper('.gallery-top', {
              nextButton: '.swiper-button-next',
              prevButton: '.swiper-button-prev',
              spaceBetween: 10,
          });
          var galleryThumbs = new Swiper('.gallery-thumbs', {
              spaceBetween: 10,
              centeredSlides: true,
              slidesPerView: 'auto',
              touchRatio: 0.2,
              slideToClickedSlide: true,
          });
          galleryTop.params.control = galleryThumbs;
          galleryThumbs.params.control = galleryTop;
      resizeProjectCarousel('mobile', $(window).width())
    } else {
      galleryTop = new Swiper('.gallery-top', {
              nextButton: '.swiper-button-next',
              prevButton: '.swiper-button-prev',
              spaceBetween: 10,
          });
          var galleryThumbs = new Swiper('.gallery-thumbs', {
              spaceBetween: 10,
              centeredSlides: true,
              slidesPerView: 'auto',
              touchRatio: 0.2,
              slideToClickedSlide: true,
          });
          galleryTop.params.control = galleryThumbs;
          galleryThumbs.params.control = galleryTop;
      resizeProjectCarousel('desktop')
    }

});


$(window).scroll(function() {
    if ($(this).scrollTop() > 200) { //use `this`, not `document`
        $('#scroll_button').css({
            'opacity': 0.0
        });
    }
});



$(window).resize( () => {
  let windowWidth = $(window).width();

  if(windowWidth <= 1080){

    resizeProjectCarousel('mobile', windowWidth)
  } else {

    resizeProjectCarousel('desktop')
  }

});



var resizeProjectCarousel = ( device , width ) => {
  if(device == 'mobile'){
    // galleryTop.width = width
    // galleryTop.height = null
    $('#p').appendTo('#carousel_mobile_anchor')
    $('#p').removeClass('project_container_desktop').addClass('project_container_mobile');


  } else if (device == 'desktop') {
    // carouselDesktopAnchor.appendChild(p)
    $('#p').appendTo('#carousel_desktop_anchor')
    $('#p').removeClass('project_container_mobile').addClass('project_container_desktop')

    galleryTop.width = 400
    galleryTop.height = 400

  }
}
