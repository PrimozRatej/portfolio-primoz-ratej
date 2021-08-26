(function ($) {
    // Typed Initiate
    if ($('#typed-text-show').length == 1) {
        var typed_strings = "Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer";
        var typed = new Typed('#typed-text-show', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
})(jQuery);

