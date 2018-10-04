$(document).ready(function(){
    $('#hamburger').click(function(){
        $('.nav-item2-show').toggle(500);
    });

    $('.row-item').mouseenter(function(){
        $(this).find('img').css('transform','scale(1.1)');
    })

    $('.row-item').mouseleave(function(){
        $(this).find('img').css('transform','scale(1.0)');
    })

    $('.row-item11').mouseenter(function(){
        $(this).find('img').css('transform','scale(1.1)');
    })

    $('.row-item11').mouseleave(function(){
        $(this).find('img').css('transform','scale(1.0)');
    })
})