/* $('.sub').hide();

$('.title').click(function(){
    $('.sub').hide();
    $(this).next().show();
}) */
const menu=$('.title');


menu.click(function(){
    $(this).next('.sub').toggleClass('on')
});
