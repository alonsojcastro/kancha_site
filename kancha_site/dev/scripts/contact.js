$(window).resize( () => {
  let width = $(window).width();
  if ( width <= 1080 ){
    $('.contact_text_container').css('display','none');
    $('.mobile_contact_text_container').css('display','inherit');
  } else {
    $('.contact_text_container').css('display','inherit')
    $('.mobile_contact_text_container').css('display','none');
  }

});

$(document).ready( () => {
  let width = $(window).width();
  if ( width <= 1080 ){
    $('.contact_text_container').css('display','none');
    $('.mobile_contact_text_container').css('display','inherit');
  } else {
    $('.contact_text_container').css('display','inherit')
    $('.mobile_contact_text_container').css('display','none');
  }
})


$(document).ready( () => {
 $('#nosotros_text_container').hover(
    () => {
      // $('#nosotros_text').toggle();
      $('#nosotros_text_container div').css({'top':'25vh','opacity':1.0});
    },
    () => {
      // $('#nosotros_text').toggle();
      $('#nosotros_text_container div').css({'top':'20vh','opacity':0.0});
    }
  )
})
