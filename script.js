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

/* Data filter */
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
  
        projects.forEach(project => {
          project.style.display = category === 'All' || project.getAttribute('data-category') === category ? 'block' : 'none';
        });
      });
    });
  });