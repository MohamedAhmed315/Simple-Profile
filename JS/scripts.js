
//portfolio image display

$(function() {  
  $('.pop').on('click', function() {
      $('.imagepreview').attr('src', $(this).find('img').attr('src'));
      $('#imagemodal').modal('show');   
  });		
});

// active class in navbar  
$(document).ready(function() {
            
  $( ".nav-item" ).bind( "click", function(event) {
      $(".active").removeClass("active");
      event.preventDefault();
      var clickedItem = $( this );
      $( ".nav-item" ).each( function() {
          $( this ).removeClass( "active" );
      });
      clickedItem.addClass( "active" );
  });
});




