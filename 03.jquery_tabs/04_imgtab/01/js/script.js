$('.thumbs a').click(function(e){
    e.preventDefault()
    let path=$(this).attr('href')

    $('#largeImg img').attr({src:path})
    
    $('#largeImg img').css('opacity','0').stop().animate({oppacity:1},1000)
});
