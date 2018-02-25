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
    $( '.navbar' ).show('slideToggle');
    $( ".burger" ).addClass( "active" );
  } else {
    $( '.navbar' ).hide('slideToggle');
    $( ".burger" ).removeClass( "active" );
  }
});

$(function(){
   $('#contact-form button[type=button]').click(sendForm); 
});

function sendForm(ev) {
    const form=  document.getElementsByTagName('form')[0];
    if (form.checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formspree.io/anastasiya.razumeyko@gmail.com", 
            method: "POST",
            data: {
                имя: $('#name').val(),
                email: $('#email').val(),
                телефон: $('#number').val(),
                модель: $('#type').val(),
                цвет: $('#color').val(),
            },
        })
        dataType: "json"
    }
}
