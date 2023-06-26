const menu=$('#nav li');
menu.hover(function(){
    close;
    let tg=$(this);
    let onImg=tg.find('.menuText-image> .on')
    let offImg=tg.find('.menuText-image>.off')
    let menuImg=tg.find('.menu-image')
    let imageHeight=menuImg.find('img').innerWith();
    onImg.css('display','block')
    offImg.css('display','none')
    menuImg.css('display','float')
    menuImg.animate({width:imageWith},600)
 

},function(){
    let tg=$(this);
    let onImg=tg.find('.menuText-image> .on')
    let offImg=tg.find('.menuText-image>.off')
    let menuImg=tg.find('.menu-image')
    let imageHeight=0
    onImg.css('display','block')
    offImg.css('display','none')

    menuImg.animate({height:imageHeight},600)
 
});
function open(){
    let tg=$('#nav>li').eq(2);
    let onImg=tg.find('.menuText-image> .on')
    let offImg=tg.find('.menuText-image>.off')
    let menuImg=tg.find('.menu-image')
    let imageHeight=0
}
open();
function close(){}
    let onImg=tg.find('.menuText-image> .on')
    let offImg=tg.find('.menuText-image>.off')
    let menuImg=tg.find('.menu-image')
    let imageHeight=0