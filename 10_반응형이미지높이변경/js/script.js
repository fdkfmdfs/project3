$(window).resize(function(){
    let boxWidth=$('img').width()
    let boxHeight=$('img').height()
    // console.log(boxWidth)
    if(boxWidth<1920){
    
        $('#main').height(boxHeight);
    }
})