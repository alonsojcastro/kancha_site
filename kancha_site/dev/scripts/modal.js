

var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        width: 400
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
        width: 400
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

$(document).ready( () => {
    
    if ($(window).width() <= 1080) {
      
      resizeProjectCarousel('mobile')
    } else {
      
      resizeProjectCarousel('desktop')
    }

});





$(window).resize( () => {
  let windowWidth = $(window).width();
  console.log(windowWidth);
  if(windowWidth <= 1080){
    
    resizeProjectCarousel('mobile')
  } else {
    
    resizeProjectCarousel('desktop')
  }
});



var resizeProjectCarousel = ( device ) => {
  if(device == 'mobile'){
    galleryTop.width = null
    galleryTop.height = null
    $('#p').appendTo('#carousel_mobile_anchor')
    $('#p').removeClass('project_container_desktop').addClass('project_container_mobile');
    console.log(galleryTop.width)

  } else if (device == 'desktop') {
    // carouselDesktopAnchor.appendChild(p)
    $('#p').appendTo('#carousel_desktop_anchor')
    $('#p').removeClass('project_container_mobile').addClass('project_container_desktop')
    console.log(galleryTop.width)
    galleryTop.width = 400
    galleryTop.height = 400

  }
}


