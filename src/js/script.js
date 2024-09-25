
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

jQuery(function ($) {

    // faqアコーディオン
    $('.p-faq__q').on('click', function () {
        var $question = $(this);
        var $answer = $question.next('.p-faq__a');

        // アコーディオンの開閉
        if ($answer.hasClass('open')) {
            $answer.removeClass('open').slideUp();
            $question.removeClass('open');
        } else {
            // 他のアコーディオンを閉じる場合
            $('.p-faq__a.open').removeClass('open').slideUp();
            $('.p-faq__q.open').removeClass('open');

            // 現在のアコーディオンを開く
            $answer.addClass('open').slideDown();
            $question.addClass('open');
        }
    });
});

});
