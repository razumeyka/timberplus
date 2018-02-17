$(function() {
    $('.smooth').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

$( '.burger' ).click( function() {
   if ( $( '.navbar' ).is( ':hidden' ) ) {
    $( '.menu' ).show('slideToggle');
    $( ".burger" ).addClass( "active" );
  } else {
    $( '.menu' ).hide('slideToggle');
    $( ".burger" ).removeClass( "active" );
  }
});