const animate = $('.animate')
const topLine = $('.top-line')
const bottomLine = $('.bottom-line')
const leftLine = $('.left-line')
const rightLine = $('.right-line')

setInterval(function(){
    topLine.css('left', '-100%').animate({left: '0'})
    bottomLine.css('left', '100%').animate({left: '0'})
    leftLine.css('top', '100%').animate({top: '0'})
    rightLine.css('top', '-100%').animate({top: '0'})
},1500)
