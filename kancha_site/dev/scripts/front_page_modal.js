


var current = 0;

var modalImages = [

];

var mobileModalImages = [
  "../img/modal/m1.jpg",
  "../img/modal/m2.jpg",
  "../img/modal/m3.jpg"
]

var desktopModalImages = [
  "../img/modal/1.png",
  "../img/modal/2.png",
  "../img/modal/3.png",
  "../img/modal/4.png"
]


$(document).ready( () => {
    
    if ($(window).width() <= 1080) {
      modalImages = mobileModalImages;
      
    } else {
      modalImages = desktopModalImages;
      
    }
    playModal();
});


var playModal = () => {
  setTimeout(function () {
    nextImage();
    playModal();
    resizeModalPlaceholder(getImageHeight())
  }, 3000);
}


$(window).resize( () => {
  let windowWidth = $(window).width();
  console.log(windowWidth);
  if(windowWidth <= 1080){
    modalImages = mobileModalImages;
    
  } else {
    modalImages = desktopModalImages;
    
  }
});

var getImageHeight = () => {
  var h = $('.modal_image').height()
  console.log(h)
  return h
}

var resizeModalPlaceholder = (h) => {
  var height = `${h}px`;
  console.log(height);
  $('.modal_conatiner').css('height',height);
}

var nextImage = () => {
  current ++
  if(current >= modalImages.length){
    current = 0;
    $('.modal_image').attr('src',modalImages[current])
  } else {
    $('.modal_image').attr('src',modalImages[current])
  }
}

var previousImage = () => {
  current --
  if(current < 0){
    current = modalImages.length - 1;
    $('.modal_image').attr('src',modalImages[current])
  } else {
    $('.modal_image').attr('src',modalImages[current])
  }
}
