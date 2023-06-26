/* $('.sub').hide();

$('.title').click(function(){
    $('.sub').hide();
    $(this).next().show();
}) */
const menu=$('.title');
$('.sub').hide();

$('.title').click(function(){
    if($(this).next().css('display'=='none')){
        $('.sub').slideUp();
    }
    $('.sub').hide();
    $(this).next().slideDown(fast);
})