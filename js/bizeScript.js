/*slider - main.html*/
$(document).ready(function () {
    $('.mainSlider').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1700,
        fade: true,
        zIndex: 10,
        arrows: false
        // responsive: [
        //      {
        //          breakpoint: 1000,
        //          settings: {
        //              infinite: true,
        //              dots: false,
        //              arrows: false
        //          }
        //      }
        //  ]
    });
});




/*select*/
(function($) {
    $(function() {
        $('.select').styler();
    });
})(jQuery);




/*Счетчик товаров*/
$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1+' шт.';
        count = count < 1 ? 1  : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1+' шт.');
        $input.change();
        return false;
    });
});




/*Переключение между вкладками*/
$(document).ready(function() {
    $('.mainDreesMenu a').click(function () {
        $(this).addClass('mainDreesMenu--active').siblings().removeClass('mainDreesMenu--active');
        $('.mainDreesBlock').hide().eq($(this).index()).fadeIn(1500).show();
        return false;
    });
});




/*menu in aside*/
// window.addEventListener('load', function () {
//     var menuItem = document.querySelectorAll('.mainAsideUp__li');
//
//     for (var i = 0; i<menuItem.length; i++){
//         menuItem[i].addEventListener('mouseenter', showSubMenu, false);
//         menuItem[i].addEventListener('mouseleave', hideSubMenu, false);
//     }
//
//     function showSubMenu() {
//         if(this.children.length>1){
//             this.children[1].style.height = 'auto';
//             this.children[1].style.opacity = '1';
//             this.children[1].style.overflow = 'visible';
//         } else {
//             return false;
//         }
//     }
//
//     function hideSubMenu() {
//         if(this.children.length>1){
//             this.children[1].style.height = '0';
//             this.children[1].style.opacity = '0';
//             this.children[1].style.overflow = 'hidden';
//         } else {
//             return false;
//         }
//     }
// });


/*menu in aside*/
$(document).ready(function() {
    $('.mainAsideUp__li',this).click(function () {
        $('.mainAsideUp__ulInner',this).slideDown(500);
        $('.mainAsideUp__link',this).addClass('mainAsideUp__link--active');
    });
    $('.mainAsideUp__li',this).mouseleave(function () {
        $('.mainAsideUp__ulInner',this).slideUp(500);
        $('.mainAsideUp__link',this).removeClass('mainAsideUp__link--active');
    });
});


