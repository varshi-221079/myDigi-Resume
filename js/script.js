// ===== script.js =====

// Smooth scroll for internal links (optional)
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });
});

// Example: alert when contact button is clicked
$('.btn-light').click(function() {
    alert('Resume download feature will be added soon!');
});