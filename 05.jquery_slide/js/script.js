// let tab=$('#tab >li');
// let content=$('#content>div')

// tab.on('click',function(e){
//     e.preventDefault()
//     let tg=$(this)
//     let tc=tg.find('>a')
//     let i=tg.index()

//     tab.find('>a').removeClass('on')
//     tc.addClass('on')
//     content.css('display','none')
//     content.eq(i).css('display','none')
// })
let tab=$('#tab > li');
let conent=$('#content>div')

tab.on('click', function(e){
    e.preventDefault();
    let tg=$(this);
    let tc=tg.find('>a');
    let i=tg.index();

    tab.find('>a').removeClass('on')
    tc.addClass('on')
    conent.css('display','none')
    conent.eq(i).css('display','block')
})

let el=$('#content>div>img');

let urls=[
    'http://www.naver.com',
    'http://www.daum.net',
    'http://www.google.com',
    'http://www.nate.com'
]
el.on({mouseover:function(){
let tg=$(this)
tg.addClass('on')
}, mouseout:function(){
    let tg=$(this)
    tg.removeClass('on')
}, click:function(){
    let tg=$(this)
    let i=tg.parent().index()
    let linkUrl=urls[i]
    // location.href=linkUrl()
    window.open(linkUrl)
}})
