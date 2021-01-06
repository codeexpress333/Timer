!(function ($) {

    "use strict";

    //Set The Count Down Timer
    if ($('.countdown').length) {
        var count = $('.countdown').data('count');
        var template = $('.countdown').html();
        $('.countdown').countdown(count, function (event) {
            $(this).html(event.strftime(template));
        });
    }

})(jQuery);