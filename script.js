$(document).ready(function() {
    $('.js--section-features').waypoint(function(direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky');
        } else{
            $('nav').removeClass('sticky');
        }
    });

  
    
    


    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });

      $('.js--scroll-to-food').click(function() {
          $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
      });

      $('.js--nav-icon').click(function() {
        const nav = $('.js--main-nav');

        nav.slideToggle(200);
      })
    
    
});