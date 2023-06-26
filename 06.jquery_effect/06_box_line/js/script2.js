// const animate = $('.animate')
// const topLine = $('.top-line')
// const bottomLine = $('.bottom-line')
// const leftLine = $('.left-line')
// const rightLine = $('.right-line')

//     $('.animate').hover()(function(){
//     topLine.css('top','red')('left', '-100%').animate({left: '0'})
//     bottomLine.css('bottom', 'red')('left', '100%').animate({left: '0'})
//     leftLine.css('left','red')('top', '100%').animate({top: '0'})
//     rightLine.css('right','red')('top', '-100%').animate({top: '0'})
//     },1500)

//     (function(){
//     topLine.css('left', '-100%').animate({left: '0'})
//     bottomLine.css('left', '100%').animate({left: '0'})
//     leftLine.css('top', '100%').animate({top: '0'})
//     rightLine.css('top', '-100%').animate({top: '0'})
//     },2000)
//     (function(){
//     topLine.css('left', '-100%').animate({left: '0'})
//     bottomLine.css('left', '100%').animate({left: '0'})
//     leftLine.css('top', '100%').animate({top: '0'})
//     rightLine.css('top', '-100%').animate({top: '0'})
//     },2500)$(.an)

$('.animate').hover(function(){
    $(this).find('.top-Line').css('left','-100%').animate({left:'-100%'},500)   
    $(this).find('.bottom-Line').css('left','-100%').animate({left:'100%'}),500)   
    $(this).find('.left-Line').css('top','-100%').animate({left:'100%'}),500)   
    $(this).find('.right-Line').css('top','-100%').animate({left:'-100%'}),500)   
},function(){
    $(this).find('.top-Line').css('left','-100%').animate({left:'-100%'},500)   
    $(this).find('.bottom-Line').css('left','-100%').animate({left:'100%'},500)   
    $(this).find('.left-Line').css('top','-100%').animate({top:'100%'},500)   
    $(this).find('.right-Line').css('top','-100%').animate({top:'-100%'},500)   
});