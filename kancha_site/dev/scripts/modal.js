var current = 0;

var modalImages = [
  "../img/modal/1.png",
  "../img/modal/2.png",
  "../img/modal/3.png",
  "../img/modal/4.png"
];

$(document).ready( () => {
  playModal();
});

var playModal = () => {
  setTimeout(function () {
    nextImage();
    playModal();
  }, 3000);
}

var nextImage = () => {
  current++
  if(current == modalImages.length){
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
