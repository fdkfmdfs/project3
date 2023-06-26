// $('.btn1').on("mouseover focus", function(){
//     $('.on').text("welcome")
// });
// $('.btn1').on("mouseout blur", function(){
//     $('.on').text("welcome")
// });

// // $('.btn2').on({"mouseover focus": function(){
// //     $('.on2').text("welcome")
// // }});
// $('.btn2').on({"mouseout focus": function(){
//     $('.on2').text("by")
// }});

// $('.btn2').on({"mouseover":function(){
// },"focus":function(){

    
// }})

// $('.btn1').on({'click':function(){
//     $('.on').css({color:'red'})
// },'focus':function(){
//     $('.on').css({color:'red'})
// }
// })
//  $('.btn2').on('mouseover focus', function(){
//     $('.on2').css({color:'yellow'});
// });
// $('.btn2').on('mouseout blur', function(){
//     $('.on2').css({color:'green'});
// });

$('.btn3').click(function(){
    $(this).parent().next().css({"color":'green', "font-weight":"bold", "fontSize":"20px"})
});
$('.btn4').mouseover(function(){
    $(this).parent().next().css({"color":'red', "font-weight":"bold", "fontSize":"20px"})
});
// $('.btn3').off('click')
// $('.btn4').trigger('mouseover')
// $('.btn3').click();

// //
// $('btn5').on()('click', function(e){
//     e.preventDefault();
//     $('.txt1').css({'background':'red'})
// });

// $('btn6').on()('click', function(e){
//     e.preventDefault();
//     $('.txt2').css({'background':'red'})
//     return false;
// });

//
$('.clickTest').click(function(){
  $(this).text('내용바뀜')
})

const div1=$('.div1');
const div1width=div1.width()
const div1size=div1.css('font-size')
console.log(div1width)
$('.div1-1').text(div1width);
