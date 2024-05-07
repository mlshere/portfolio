/* navigation bar */

$(document).ready(function() {
    var navbar = $('#navbar');

    // Show nav bar if already scrolled past the target section on page load
    if ($(window).scrollTop() > $('#expertise').offset().top) {
        navbar.removeClass('hidden');
    }

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var objectPosition = $('#expertise').offset().top;

        if (scroll > objectPosition) {
            navbar.removeClass('hidden');
        } else {
            navbar.addClass('hidden');
        }
    });
});