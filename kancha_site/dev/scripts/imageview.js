var current = 0;
var imageData = [
  {
    "category":"Arquitectura",
    "title":"Casa Fiel",
    "alt":"0",
    "description":"DESCRIPTION HERE",
    "width":999,
    "height":651,
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/LaCasaFiel/formatted/1_antes.jpg",
    "display_image":{
      "src":"../img/Arquitectura/LaCasaFiel/1_Antes.jpg",
      "orientation":"landscape",
      "width":999,
      "height":651
    }
  },
  {
    "category":"Arquitectura",

    "title":"La Casa Fiel",
    "alt":"1",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/LaCasaFiel/formatted/2_despues.jpg",
    "display_image": {
      "src":"../img/Arquitectura/LaCasaFiel/2_Despues.jpg",
      "orientation":"landscape",
      "width":4928,
      "height":3264
    }
  },
  {
    "category":"Arquitectura",
    "title":"La Casa Fiel",
    "alt":"2",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/LaCasaFiel/formatted/3_antes.jpg",
    "display_image":{
      "src":"../img/Arquitectura/LaCasaFiel/3_Antes.jpg",
      "orientation":"portrait",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"La Casa Fiel",
    "alt":"3",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/LaCasaFiel/formatted/4_despues.jpg",
    "display_image":{
      "src":"../img/Arquitectura/LaCasaFiel/4_Despues.jpg",
      "orientation":"portrait",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"La Casa Fiel",
    "alt":"4",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/LaCasaFiel/formatted/5_antes.jpg",
    "display_image":{
      "src":"../img/Arquitectura/LaCasaFiel/5.jpg",
      "orientation":"portrait",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"La Casa Fiel",
    "alt":"5",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/LaCasaFiel/formatted/6_antes.jpg",
    "display_image":{
      "src":"../img/Arquitectura/LaCasaFiel/6.jpg",
      "orientation":"portrait",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"La Casa Fiel",
    "alt":"6",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/LaCasaFiel/formatted/7_antes.jpg",
    "display_image":{
      "src":"../img/Arquitectura/LaCasaFiel/7.jpg",
      "orientation":"portrait",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"La Casa Fiel",
    "alt":"7",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/LaCasaFiel/formatted/8_antes.jpg",
    "display_image":{
      "src":"../img/Arquitectura/LaCasaFiel/8.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"La Casa Fiel",
    "alt":"8",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/LaCasaFiel/formatted/9_antes.jpg",
    "display_image":{
      "src":"../img/Arquitectura/LaCasaFiel/9.jpg",
      "orientation":"portrait",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"La Casa Fiel",
    "alt":"9",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/LaCasaFiel/formatted/10_antes.jpg",
    "display_image":{
      "src":"../img/Arquitectura/LaCasaFiel/10.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Cuadra La Alborada",
    "alt":"10",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/CuadraLaAlborada/formatted/1.jpg",
    "display_image":{
      "src":"../img/Arquitectura/CuadraLaAlborada/1.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Cuadra La Alborada",
    "alt":"11",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/CuadraLaAlborada/formatted/2.jpg",
    "display_image":{
      "src":"../img/Arquitectura/CuadraLaAlborada/2.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Cuadra La Alborada",
    "alt":"12",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/CuadraLaAlborada/formatted/3.jpg",
    "display_image":{
      "src":"../img/Arquitectura/CuadraLaAlborada/3.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Cuadra La Alborada",
    "alt":"13",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/CuadraLaAlborada/formatted/4.jpg",
    "display_image":{
      "src":"../img/Arquitectura/CuadraLaAlborada/4.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Cuadra La Alborada",
    "alt":"14",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/CuadraLaAlborada/formatted/5.jpg",
    "display_image":{
      "src":"../img/Arquitectura/CuadraLaAlborada/5.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Cuadra La Alborada",
    "alt":"15",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/CuadraLaAlborada/formatted/6.jpg",
    "display_image":{
      "src":"../img/Arquitectura/CuadraLaAlborada/6.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Cuadra La Alborada",
    "alt":"16",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/CuadraLaAlborada/formatted/7.jpg",
    "display_image":{
      "src":"../img/Arquitectura/CuadraLaAlborada/7.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Cuadra La Alborada",
    "alt":"17",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/CuadraLaAlborada/formatted/8.jpg",
    "display_image":{
      "src":"../img/Arquitectura/CuadraLaAlborada/8.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Cuadra La Alborada",
    "alt":"18",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Arquitectura/CuadraLaAlborada/formatted/9.jpg",
    "display_image":{
      "src":"../img/Arquitectura/CuadraLaAlborada/9.jpg",
      "orientation":"portrait",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Oficinas",
    "alt":"19",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Oficinas/Diagonal/1.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Oficinas",
    "alt":"20",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Oficinas/Diagonal/2.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Oficinas",
    "alt":"21",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Oficinas/Diagonal/3.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Oficinas",
    "alt":"22",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Oficinas/Diagonal/4.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Oficinas",
    "alt":"23",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Oficinas/Diagonal/5.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Oficinas",
    "alt":"24",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Oficinas/Diagonal/6.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Oficinas",
    "alt":"25",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Oficinas/Diagonal/7.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Oficinas",
    "alt":"26",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Oficinas/Diagonal/8.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Oficinas",
    "alt":"27",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Oficinas/Diagonal/9.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Oficinas",
    "alt":"28",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Oficinas/Diagonal/10.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Oficinas",
    "alt":"29",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Oficinas/Diagonal/11.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },{
    "category":"Arquitectura",
    "title":"Oficinas",
    "alt":"30",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Oficinas/Diagonal/12.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Oficinas",
    "alt":"31",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Oficinas/Diagonal/13.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Arquitectura",
    "title":"Oficinas",
    "alt":"32",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Oficinas/Diagonal/14.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Mobiliario",
    "title":"Dormitorios",
    "alt":"33",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Dormitorios/El_cuarto_de_Claudito.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Mobiliario",
    "title":"Dormitorios",
    "alt":"34",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Dormitorios/El_cuarto_de_Mafer_1.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Mobiliario",
    "title":"Dormitorios",
    "alt":"35",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Dormitorios/El_cuarto_de_Santiago_Vero.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Mobiliario",
    "title":"Bar Canessa",
    "alt":"36",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Bares/Bar_Canessa.jpg",
      "orientation":"portrait",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Mobiliario",
    "title":"Bar Rubio",
    "alt":"37",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Bares/Bar_Rubio.jpg",
      "orientation":"portrait",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Mobiliario",
    "title":"Bar Willstatter",
    "alt":"38",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Bares/Bar_Willstatter.jpg",
      "orientation":"landscape",
      "width":662,
      "height":992
    }
  },
  {
    "category":"Mobiliario",
    "title":"Salas de Estar",
    "alt":"39",
    "description":"DESCRIPTION HERE",
    "formatted_image":"file:///Users/gentrydemchak/Documents/alonso/kancha_site/kancha_site/dev/img/Mobiliario/Oficinas/Diagonal/formatted/1.jpg",
    "display_image":{
      "src":"../img/Mobiliario/Salas_de_Estar/Sala_Alvarez.jpg",
      "orientation":"portrait",
      "width":662,
      "height":992
    }
  }

];

window.onload = () => {

  var gridImages = document.querySelectorAll('img.grid_image');

  //add event listeners to all images in order to toggle modal
  for(let i = 0; i<gridImages.length; i++){
    console.log(gridImages[i].src);

    gridImages[i].addEventListener('click', (event) => {
      event.preventDefault();
      $(document).ready(()=>{$('#image_viewer_container').toggle();});
      searchImage(gridImages[i].alt,true);
    }, false);
  }

};


var modal = (data) => {
      if(data.display_image.orientation == "landscape"){
        $('#landscape_image').attr("src",data.display_image.src);
        $('#landscape').css("display","inline");
        $('#portrait').css("display","none");
      } else {
        $('#portrait_image').attr("src",data.display_image.src);
        $('#landscape').css("display","none");
        $('#portrait').css("display","inline");
      }

      $('#viewer_title').text(data.title);
      $('#viewer_description').text(data.description);
      console.log('match found');
}


var exitViewer = () => {
  console.log('clicked exit');
  $('#image_viewer_container').toggle();
}

var next = () => {
  console.log('next');
  current++;
  if(current == imageData.length){
    current = 0;
  }
  modal(imageData[current]);
}

var back = () => {
  console.log('back');
  current--;
  if(current < 0){
    current = imageData.length-1;
  }
  modal(imageData[current]);
}

var searchImage = (alt) => {
  console.log('looking for match');
  for(var i = 0; i < imageData.length; i++){
    console.log(alt + ' : ' + imageData[i].alt);
    if (alt == imageData[i].alt){
      current = i;
      modal(imageData[i]);
    }
  }
}
