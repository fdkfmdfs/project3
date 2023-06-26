let wheelDelte=0; //윌이벤트 발새싱 반ㅎ환값 확인하기위한변수
let browser=0;//파이어폭스 브라우저 판별위한 변수

//1.섹션 8개배열
//2.마우스휠 아래로(-120)다음 섹션으로 스크롤 이벤트 바ㅏㄹ생

//3. 마우스휠을 위로(120) 이전섹션으로 스크롤 이벤트 발생
//4. browser[Event-mousewheel]크롬 익스 사파리 오페라 등등
//5. browser[EventDOMmousewheel]파이어폭스
//6.  파이어혹스 마우스휠을 아래로(30) 위로 (-30)
//7. 파이어폭스브라우저 판별 === windownavigator.userAgent

$('.section').each(function(index){
    $(this).on('mousewheel DOMMouseScroll',function(event){
        // event.preventDefault();
        //console.log(e)
        browser=window.navigator.userAgent.toLowerCase().indexOf('firefox')
        // 
        if(browser>=0){
            wheelDelte=-event.detail*40

        }else{
            wheelDelte=event.originalEvent.wheelDelte

        }
        

        if(wheelDelte<0){
            if(index<$('.section').length-1){
                $('html,body').stop().animate({scrollLeft:$(this).next().offset().left},500)
            }
        }else{
            if(index>0){
                $('html,body').stop().animate({scrollLeft:$(this).next().offset().left},500)
            }
        }
    })
})