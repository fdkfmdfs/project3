$('#beforeAfter p:eq(2)').after('<p>After에의한 나ㅇ용삽하기</p>').css('background','red')
$('<p>insertAfter에 의한 내용</p>').insertAfter('#beforeAfter p:eq(1)').css('background','yellow')

$('#beforeAfter p:eq(1)').before('<p>before에의한 나ㅇ용삽하기</p>').css('background','green')
$('<p>insertBefore에 의한 내용</p>').insertBefore('#BeforeAfter p:eq(0)').css('background','blue')

//append/appenprefendTodTo/prefend/

let basket=$('#basket');
let apple=$('#apple');
let banana=$('#banana');
let orange=$('#orange');

// basket.append(apple);
// basket.append(orange);
// basket.append(banana);

// apple.appendTo(basket)
// orange.appendTo(basket)
// banana.appendTo(basket)

// basket.prepend(apple);
// basket.prepend(orange);
// basket.prepend(banana);

apple.prependTo(basket)
orange.prependTo(basket)
banana.prependTo(basket)

//clone/remove/empty

let copyObj=$('.clone1').children().clone();
console.log(copyObj)
let obj2=$('.remove')
copyObj.prependTo(obj2)

// $('.empty').remove()
$('.empty').empty()

// $('section h2').replaceWith('<h3>replace methodes</h3>')
// $('<p>change</p>').replaceAll('section div')
// $('section h2').css.hover('<h3>마우슬올렸음</h3>')
// $('section h2').mouseover(function(){
//     $(this.replaceWith('<h3>repace method</h3>'))

    
// })
// $('section h3').mouseover(function(){
//     $(this.css('color','red'))

// })
$('#show').show();
$('#hide').show();

$('#fadeIn').fadeIn(2000);
$('#fadeOut').fadeOut(2000);
$('#fadeTo').fadeTo(5000,0.3);

//slideDown/slideUp
$('#slideDown').slideDown(1000)
$('#slideup').slideup(1000)

$('hover').hover(function(){
    $(this).find('$slide').slideDown(2000)
},function(){
    
    $(this).find('$slide').slideUp(2000)
});

//animate
$('.ani1').animate({left:'300px',top:200},1000);
$('.ani2').delay(1000).animate({bottom:400,top:200},2000).animate({bottom:50, raight:500},1000).animate({bottom:80, right:650},1000);