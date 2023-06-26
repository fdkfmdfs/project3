const page = $('.view');
const prev = $('.prev');
const next = $('.next');
const btns = $('.page-bt a');

let current = 0;
let timer;

timer = setInterval(event, 3000);

function event(){
    if(current == 3){current = 0;};
    let next = current+1;
    if(current == 2){next = 0};
    page.eq(current).css({'z-index': 0}).removeClass('right')
    page.eq(current).children('img').removeClass('right')
    page.eq(current).stop().animate({width: '0%'}, 1500)
    
    page.eq(next).css({'z-index': 1}).addClass('right')
    page.eq(next).children('img').addClass('right')
    page.eq(next).stop().animate({width: '100%'}, 1500)

    current++;

    btns.removeClass('on');
    btns.eq(next).addClass('on');
}

$('.view, .prev, .next, .page-bt').hover(function(){
    clearInterval(timer);
}, function(){
    timer = setInterval(event, 3000);
})

next.click(event)
prev.click(function(){
    if(current == 0){current = 3;};
    let next = current-1;
    if(current == 0){next = 0};
    page.eq(current).css({'z-index': 0}).removeClass('right')
    page.eq(current).children('img').removeClass('right')
    page.eq(current).stop().animate({width: '0%'}, 1500)
    
    page.eq(next).css({'z-index': 1}).addClass('right')
    page.eq(next).children('img').addClass('right')
    page.eq(next).stop().animate({width: '100%'}, 1500)

    current--;

    btns.removeClass('on');
    btns.eq(next).addClass('on');
// })

// prev.click(function(){
//     if(current == 0){current = 2;};
//     let next = current-1;
//     if(current == 0){next = 2};
//     page.eq(current).css({'z-index': 0,width:'100%'}).addClass('right')
//     page.eq(current).children('img').addClass('right')
//     page.eq(current).stop().animate({width: '0%'}, 1500)
    
//     page.eq(next).css({'z-index': 1}).removeClass('right')
//     page.eq(next).children('img').removeClass('right')
//     page.eq(next).stop().animate({width: '100%'}, 1500)

//     current--;

    btns.removeClass('on');
    btns.eq(next).addClass('on');
})

btns.click(function(){
    let target=$(this).index()
    if(current>target){
        page.eq(current).css({'z-index': 0}).removeClass('right')
        page.eq(current).children('img').removeClass('right')
        page.eq(current).stop().animate({width: '0%'}, 1500)
        
        page.eq(next).css({'z-index': 1}).addClass('right')
        page.eq(next).children('img').addClass('right')
        page.eq(next).stop().animate({width: '100%'}, 1500)
        current=target;
        btns.removeClass('on')
        btns.qe(target).addClass('on')
        current--;
    }else if(current==target){
        return false
        
    }else{
        page.eq(current).css({'z-index': 0}).removeClass('right')
        page.eq(current).children('img').removeClass('right')
        page.eq(current).stop().animate({width: '0%'}, 1500)
        
        page.eq(next).css({'z-index': 1}).addClass('right')
        page.eq(next).children('img').addClass('right')
        page.eq(next).stop().animate({width: '100%'}, 1500)
        current=target;
        btns.removeClass('on')
        btns.qe(target).addClass('on')
    }

   
})