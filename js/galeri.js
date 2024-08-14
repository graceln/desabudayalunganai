// galeri
$(document).ready(function() {
    function checkVisibility() {
        $('.fade-in-left, .fade-in-right').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop + 100 && elementTop < viewportBottom - 100) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).on('scroll', checkVisibility);
    $(window).on('resize', checkVisibility);

    checkVisibility();
}); 