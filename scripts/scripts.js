// var $ = require('./jquery');

// Week 1: Nav bar mobile menu
function mobileMenu() {
    var x = document.getElementById("navList");
    if (x.className === "nav-list") {
        x.className += " responsive";
    }
    else {
        x.className = "nav-list";
    }
}

// Week 3: Accordion tab menu
$(document).ready(function () {
    $('#tab-nav').children('li').first().children('a').addClass('active')
        .next().addClass('is-open').show();

    $('#tab-nav').on('click', 'li > a', function() {

      if (!$(this).hasClass('active')) {
        $('#tab-nav .is-open').removeClass('is-open').hide();
        $(this).next().toggleClass('is-open').toggle();
        $('#tab-nav').find('.active').removeClass('active');
        $(this).addClass('active');
      }
      else {
        $('#tab-nav .is-open').removeClass('is-open').hide();
        $(this).removeClass('active');
      }
   });
});
