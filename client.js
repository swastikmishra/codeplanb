// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

function toggleWhatsappModal(x){
  if(x)
    $('#whatsappModal').addClass('is-active');
  else
    $('#whatsappModal').removeClass('is-active');
}
