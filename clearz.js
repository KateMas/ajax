$.fn.clearz = function (options) {

    $(this).each(function () {
        var defaults = {
            right: true
        }
        var settings = $.extend (defaults, options);

        $(this).keyup(function(e) {
            if (settings.right) {
                $(this).siblings(this).addClass('close-icon close-icon-right');
            } else {
                $(this).siblings(this).addClass('close-icon close-icon-left');
            }
        });
        $(this).siblings(this).click(function(e) {
            $(this).siblings($(this)).val('');
            $(this).removeClass('close-icon close-icon-left close-icon-right');
        });
    })

}