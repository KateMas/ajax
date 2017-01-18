$(document).ready(function() {
    $('.js-textarea').clearz({
        //right: false
    });
    $('form').on('submit', function(e) {
        e.preventDefault();

        var text = $(".js-textarea").val();

        $.ajax('https://translate.yandex.net/api/v1.5/tr.json/detect?key=trnsl.1.1.20170118T121807Z.0129ba038cb51454.7410b4396a398129a532f253521d278713899f53&text=' + text,{
            success: function(result) {
                var langRequest = result.lang;
                console.log(result);
                $.ajax('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170118T121807Z.0129ba038cb51454.7410b4396a398129a532f253521d278713899f53&text=' + text + '&lang=' + langRequest + '-ru',{
                    success: function(result) {
                        console.log(result);
                        var answerWrap = $('<div class="answer"></div>');
                        console.log(answerWrap);
                        $(answerWrap).append('<textarea>' + result.text + '</textarea>');
                        $(answerWrap).append('<a href="http://translate.yandex.ru/">Переведено сервисом «Яндекс.Переводчик</a>');
                        $('body').append(answerWrap);
                    }
                })
            }
        });
    });
})

