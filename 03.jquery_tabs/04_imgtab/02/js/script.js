// $('em').hide();
// $('.thumbs a').click(function(){
//     $('#caption').remove();
//     let path = $(this).attr('href');
//     $('#largeImg img').attr({src: path})
//     let msg = $(this).next('em').text();
    
//     $('#largeImg').append('<div id="caption"></div>');
//     $('#largeImg #caption').text(msg)
//     let posy=$('#largeImg #caption').outerHeight();
//     console.log(posy)

//     $('#largeImg #caption').animate({top:-posy},1000)
//     return false;
// })
$('em').hide();
 $('.thumbs a').click(function(e){
   e.preventDefault();     
    $('#caption').remove();
     let path = $(this).attr('href');
     $('#largeImg #img').attr({src: path})
     let msg = $(this).next('em').text();
    
        $('#largeImg').append('<div id="caption"></div>');
        $('#largeImg #caption').text(msg)
        let posy=$('#largeImg #caption').outerHeight();
        console.log(posy)

        $('#largeImg #caption').animate({top:-posy},1000);
        console.log(posy)
 })