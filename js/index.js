$(document).ready(function(){
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

    $(".lightbox").fancybox();

    $(function(){
        $('form').submit(function(e){
            e.preventDefault();
            console.log();
            $.ajax({
                url: "/form.php",
                method: "POST",
                data:$(this).serializeArray(),
            }).always(function(msg){
                if(msg=="OK"){
                    $.fancybox.open({
                    src: '#thx',
                    type : 'inline',   
                    });
                }else{
                    $.fancybox.open({
                    src: '#err',
                    type : 'inline',
                    });
                }
            })
        });
    })
});