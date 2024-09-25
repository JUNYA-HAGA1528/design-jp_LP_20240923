
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる



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



        $(function() {
            // 最初のタブとコンテンツを表示
            $(".js-tab-info li:first").addClass("active");
            $(".page-imformation__tab-cards li").hide(); // すべて非表示に
            $(".page-imformation__tab-cards li:first").fadeIn(); // 最初のコンテンツを表示
        
            // タブをクリックしたときの処理
            $(".js-tab-info li").on("click", function(e) {
                e.preventDefault();  // リンクのデフォルト動作を無効にする
                
                // タブのactiveクラスを外してから、クリックされたタブにactiveを付与
                $(".js-tab-info li").removeClass("active");
                $(this).addClass("active");
                
                // クリックされたタブのインデックス番号を取得して、対応するコンテンツを表示
                const index = $(this).index();
                $(".page-imformation__tab-cards li").hide().eq(index).fadeIn(300); // クリックされたタブに対応するコンテンツを表示
            });
        
            // ページ読み込み時にハッシュがあれば、そのタブを表示
            var hash = location.hash;
            if (hash.length) {
                if (hash.match(/#info/)) {
                    // ハッシュがある場合、その番号に対応するタブとコンテンツを表示
                    var tabIndex = hash.replace("#info", "") - 1;
                    $(".js-tab-info li").removeClass("active").eq(tabIndex).addClass("active");
                    $(".page-imformation__tab-cards li").hide().eq(tabIndex).fadeIn();
                }
            }
        });


        window.addEventListener("scroll", function() {
            var header = document.querySelector(".header");  // headerを取得
            if (window.scrollY > 100) {  // スクロール量が100pxを超えたら
                header.classList.add("header--scrolled");
            } else {
                header.classList.remove("header--scrolled");
            }
        });
    
        jQuery(document).ready(function($) {
            // ロゴをクリックしたらページトップにスクロール
            $('.header__logo a').on('click', function(e) {
                e.preventDefault(); // デフォルトのリンク動作を無効化
                $('html, body').animate({ scrollTop: 0 }, 500); // 500msでトップにスムーズにスクロール
            });
        });
        


});
