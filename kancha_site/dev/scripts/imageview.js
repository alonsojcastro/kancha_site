var current = 0;
var imageData = [];


var scrollto = () => {
  $('html,body').animate({
    scrollTop: 600
  });
}

var scrollToContact = () => {
  $('html,body').animate({
    scrollTop: $('#contacto').offset().top
  });
}

function getwh() {
  var img = document.getElementById('landscape')
  width = img.clientWidth;
  height = img.clientHeight;
  // console.log(`${width}x${height}`)
}

//
window.onload = () => {

  var gridImages = document.querySelectorAll('.swiper-container.gallery-top .swiper-slide');

  //add event listeners to all images in order to toggle modal
  for(let i = 0; i<gridImages.length; i++){
    imageData.push({'url':parseURL(gridImages[i].style.backgroundImage)});

    gridImages[i].addEventListener('click', (event) => {
      // event.preventDefault();
      $(document).ready(()=>{$('#image_viewer_container').toggle();});
      searchImage(parseURL(gridImages[i].style.backgroundImage));

      // var imgLoad = $("<img />");
      // imgLoad.attr("src", parseURL(gridImages[i].style.backgroundImage));
      // imgLoad.unbind("load");
      // imgLoad.bind("load", function () {
      // // Get image sizes
      //
      // });

    }, false);
  }

};



var modal = (data) => {
  var width,height;
  $('#viewer_image').attr("src",data.url)
  $('#landscape').css("display","inline")

  var imgLoad = $("<img />");
  imgLoad.attr("src", data.url);
  imgLoad.unbind("load");
  imgLoad.bind("load", function () {
    width = this.width
    height = this.height
    console.log(`${width} x ${height}`)
    if (height > width){
      $('#landscape').removeClass('landscape').addClass('portrait')
    } else {
      $('#landscape').removeClass('portrait').addClass('landscape')
    }
  })
}

var parseURL = (url) => {
  let imgpathname = url.split('/');
  //delete the ../
  imgpathname.splice(0,1)
  // console.log(imgpathname);
  let imgpath = ''
  imgpathname.forEach( (item,i) => {
    //concatenate the array into a string, adding back the /
    if(i == imgpathname.length-1){
      //remove the ")" from the end of the last item
      // console.log(item.length)
      imgpath = imgpath.concat(item.substring(0,item.length-2));
    } else {
      imgpath = imgpath.concat(item + '/')
    }
  });
  return '../' + imgpath
}


var exitViewer = () => {
  $('#image_viewer_container').toggle();
}

var next = () => {
  current++;
  if(current == imageData.length){
    current = 0;
  }
  modal(imageData[current]);
}

var back = () => {
  current--;
  if(current < 0){
    current = imageData.length-1;
  }
  modal(imageData[current]);
}

var searchImage = (url,w,h) => {

  for(var i = 0; i < imageData.length; i++){
    if (url == imageData[i].url){
      current = i;
      modal(imageData[i],w,h);
    }
  }

}
