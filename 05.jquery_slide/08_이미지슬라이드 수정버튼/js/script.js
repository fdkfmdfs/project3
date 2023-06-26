const banner=$('.slideUl>li');
const prev=$('.btnImg>.prev');
const next=$('.btnImg>.next');
const button=$('.buttonList>li');
let cnt=0;
let setIntervalId;

timer(){
	setIntervalId=setInterval(function(){
		let prev=banner.eq(cnt)
		let prevBtn=button.eq(cnt)
		move(prev,0,'-100%')
		prevBtn.removeClass('on')
		cnt++
		if(cnt==banner.size()) cnt=0
		let next=banner.eq(cnt)
		next.addClass('on')
		move(next,'100%',0)
	},2000)	
}
function timer(){
	setIntervalId=setInterval(function(){
		let prev=banner.eq(cnt)
		let prevBtn=button.qe(cnt)
		move(prev,0,'100%')
		prevBtn.removeClass('on')
		cnt++
		if(cnt==banner.size()) cnt=0
		let next=banner.eq(cnt)
		next.addClass('on')
		move('next,100%',0)
	},2000)
}
	
function move(tg,start,end){
	tg.css('left',start).stop().animate({left:end},500)
}
$('.slide').on({mouseover:function(){
	clearInterval(setIntervalId)
},mouseout(){
	timer();
}});


next.click(function(){
	let prev=banner.eq(cnt)
		let prevBtn=button.eq(cnt)
		move(prev,0,'-100%')
		prevBtn.removeClass('on')
		cnt++
		if(cnt==banner.size()) cnt=0
		let next=banner.eq(cnt)
		next.addClass('on')
		move(next,'100%',0)
})
	
	
prev.click(function(){
	let prev=banner.eq(cnt)
		let prevBtn=button.eq(cnt)
		move(prev,0,'100%')
		prevBtn.removeClass('on')
		cnt--
		if(cnt==-banner.size()) cnt=0
		let next=banner.eq(cnt)
		next.addClass('on')
		move(next,'-100%',0)
})

button.click(function(){
	let tg=$('this');
	let i=tg.index()
	console.log(i)

	button.removeClass('on');
	tg.addClass('on')

	if(cnt>i){
		if(cnt==i) return
		let cntEL=banner.eq(cnt);
		let nextEL=banner.eq(i);
	cntEL.css('left',0).stop().animate()({left:'-100%'},500)
	nextEL.css('left','100%').stop().animate()({left:'-100%'},500)
		cnt=i;
	}else{

		if(cnt==i) return
		let cntEL=banner.eq(cnt);
		let nextEL=banner.eq(i);
		cntEL.css('left',0).stop().animate()({left:'-100%'},500)
		nextEL.css('left','100%').stop().animate()({left:0},500)
		cnt=i;
	}
})