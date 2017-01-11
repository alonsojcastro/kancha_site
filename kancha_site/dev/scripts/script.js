// //storage place for grid data, used to populate modal window.
// var gridData = [
//   {
//     'title':'Cuadra La Alborada',
//     'images':[
//       '../img/Arquitectura/CuadraLaAlborada/1.jpg',
//       '../img/Arquitectura/CuadraLaAlborada/2.JPG',
//       '../img/Arquitectura/CuadraLaAlborada/3.jpg',
//       '../img/Arquitectura/CuadraLaAlborada/4.jpg',
//       '../img/Arquitectura/CuadraLaAlborada/5.jpg',
//       '../img/Arquitectura/CuadraLaAlborada/6.jpg',
//       '../img/Arquitectura/CuadraLaAlborada/7.jpg',
//       '../img/Arquitectura/CuadraLaAlborada/8.jpg',
//       '../img/Arquitectura/CuadraLaAlborada/9.jpg'
//     ],
//     'description':''
//   },
//   {
//     'title':'La Casa Fiel',
//     'images':[
//       '../img/Arquitectura/LaCasaFiel/1.%20Antes.jpg',
//       '../img/Arquitectura/LaCasaFiel/2.%20Después.jpg',
//       '../img/Arquitectura/LaCasaFiel/3.%20Antes.jpg',
//       '../img/Arquitectura/LaCasaFiel/4.%20Después.jpg',
//       '../img/Arquitectura/LaCasaFiel/5.jpg',
//       '../img/Arquitectura/LaCasaFiel/6.jpg',
//       '../img/Arquitectura/LaCasaFiel/7.jpg',
//       '../img/Arquitectura/LaCasaFiel/8.jpg',
//       '../img/Arquitectura/LaCasaFiel/9.jpg',
//       '../img/Arquitectura/LaCasaFiel/10.jpg'
//     ],
//     'description':''
//   },
//   {
//     'title':'Diagonal',
//     'images':[
//       '../img/Mobiliario/Diagonal/1.jpg',
//       '../img/Mobiliario/Diagonal/2.jpg',
//       '../img/Mobiliario/Diagonal/3.jpg',
//       '../img/Mobiliario/Diagonal/4.jpg',
//       '../img/Mobiliario/Diagonal/5.jpg',
//       '../img/Mobiliario/Diagonal/6.jpg',
//       '../img/Mobiliario/Diagonal/7.jpg',
//       '../img/Mobiliario/Diagonal/8.jpg',
//       '../img/Mobiliario/Diagonal/9.jpg',
//       '../img/Mobiliario/Diagonal/10.jpg',
//       '../img/Mobiliario/Diagonal/11.jpg',
//       '../img/Mobiliario/Diagonal/12.jpg',
//       '../img/Mobiliario/Diagonal/13.jpg',
//       '../img/Mobiliario/Diagonal/14.jpg'
//     ],
//     'description':''
//   },
//   {
//     'title':'El cuarto de Mafer',
//     'images':[
//       '../img/Mobiliario/Dormitorios/1.%20El%20cuarto%20de%20Mafer%201.jpg',
//     ],
//     'description':''
//   },
//   {
//     'title':'El cuarto de Claudito',
//     'images':[
//       '../img/Mobiliario/Dormitorios/2.%20El%20cuarto%20de%20Claudito.jpg',
//     ],
//     'description':''
//   },
//   {
//     'title':'El cuarto de Santiago Vero',
//     'images':[
//       '../img/Mobiliario/Dormitorios/3.%20El%20cuarto%20de%20Santiago%20_%20Vero.jpg',
//     ],
//     'description':''
//   },
//   {
//     'title':'Bar Rubio',
//     'images':[
//       '../img/Mobiliario/Bares/1.%20Bar%20Rubio.jpg'
//     ],
//     'description':''
//   },
//   {
//     'title':'Bar Willstatter',
//     'images':[
//       '../img/Mobiliario/Bares/2.%20Bar%20Willstatter.jpg'
//     ],
//     'description':''
//   },
//   {
//     'title':'Bar Canessa',
//     'images':[
//       '../img/Mobiliario/Bares/3.%20Bar%20Canessa.jpg'
//     ],
//     'description':''
//   },
//   {
//     'title':'Sala Alvarez',
//     'images':[
//       '../img/Mobiliario/Salas%20de%20Estar/Sala%20Alvarez.jpg'
//     ],
//     'description':''
//   }
// ]
//
// window.onload = () => {
// var gridImages = document.querySelectorAll('img.grid_image');
//
// //add event listeners to all images in order to toggle modal
// for(let i = 0; i<gridImages.length; i++){
//   gridImages[i].addEventListener('click', (event) => {
//     console.log(gridData[i]);
//
//     event.preventDefault();
//     toggleModal(i,true);
//   }, false);
// }
//
// //
// toggleModal = (project,option) => {
//   //
//   if(option){
//     //open modal if option = true
//     $('modal_container').show();
//     populateModal(project);
//   } else {
//     //close modal if option = false
//     $('modal_container').hide();
//     clearModal();
//   }
// }
//
//
// var populateModal = (project) => {
//   // console.log(selectedImage)
//   console.log(gridData[project].images);
//   $('.modal_image').attr('src',gridData[project].images[0]);
//   $('.modal_project_name').text(gridData[project].title);
//   $('.modal_description').text(gridData[project].description);
// }
//
//
//
//
//
// }
