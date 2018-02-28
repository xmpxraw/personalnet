$(function(){
//整体背景js控制开始
	var conHeight = $(window).height();
	$('.con').css('height',''+conHeight+'px');
	$(window).resize(function(){
		var conHeight = $(window).height();
		$('.con').css('height',''+conHeight+'px');
		
		//banner大小控制
		var myWidth = $(window).width();//'+myWidth+'
		$('page1 img').css('width',''+myWidth+'px');
		
		var myHeight = $(window).height();//'+myWidth+'
		$('page1 img').css('height',''+myHeight+'px');		
	});
	
	 var num = 0;
	$(document).mousewheel(function(event,delta){
		
		if(!$('.con').is(':animated')){
			if(delta == -1){
				num++;
				if(num > 4){
					num = 4;
				}
			}else if(delta == 1){
				num--;
				if(num < 0){
					num = 0;
				}
			}
			var bfb = num * -100;
			$('.con').css('-moz-transform','translateY('+bfb+'%)');
			$('.con').css('-webkit-transform','translateY('+bfb+'%)');
			$('.con').css('-ms-transform','translateY('+bfb+'%)');
			$('.con').css('-o-transform','translateY('+bfb+'%)');
			$('.yuanDian li').eq(num).addClass('current').siblings().removeClass('current');
			
			$('.navUl li').eq(num).addClass('nuCurrent').siblings().removeClass('nuCurrent');
			
			$('.con .page').eq(num).addClass('current').siblings().removeClass('current');
			  }
	});
	
	$('.yuanDian li').click(function(e) {
		$(this).addClass('current').siblings().removeClass('current');
		num = $(this).index();
		var bfb = num * -100;
		$('.con').css('-moz-transform','translateY('+bfb+'%)');
		$('.con').css('-ms-transform','translateY('+bfb+'%)');
		$('.con').css('-webkit-transform','translateY('+bfb+'%)');
		$('.con').css('-o-transform','translateY('+bfb+'%)');
		$('.con .page').eq(num).addClass('current').siblings().removeClass('current');
		$('.navUl li').eq($(this).index()).addClass('nuCurrent').siblings().removeClass('nuCurrent');	
	});
	
//整体背景js控制结束
	
//导航的控制
	
	$('.navUl li').click(function(e) {
		$(this).addClass('nuCurrent').siblings().removeClass('nuCurrent');
		$('.yuanDian li').eq($(this).index()).addClass('current').siblings().removeClass('current');
		num = $(this).index();
		var bfb = num * -100;
		$('.con').css('-moz-transform','translateY('+bfb+'%)');
		$('.con').css('-ms-transform','translateY('+bfb+'%)');
		$('.con').css('-webkit-transform','translateY('+bfb+'%)');
		$('.con').css('-o-transform','translateY('+bfb+'%)');
		$('.con .page').eq(num).addClass('current').siblings().removeClass('current');
			
	});		
//导航的结束
//bannner图控制自适应
	var myWidth = $(window).width();//'+myWidth+'
	$('page1 img').css('width',''+myWidth+'px');
	
	var myHeight = $(window).height();//'+myWidth+'
	$('page1 img').css('height',''+myHeight+'px');	
//bannner图控制自适应结束			

	
//小米呼吸灯轮播开始
	var timer01 = null;
	var num = 0;
	$('.page1 ul li:first').show();
	$('.page1 ol li').click(function(e) {
		
		$('.page1 ul li').eq(num).fadeOut();
		$('.page1 ul li').eq($(this).index()).fadeIn();
        $(this).addClass('pgolCurrent').siblings().removeClass('pgolCurrent');
		
		num = $(this).index();
		//$('.page1 ul li').eq($(this).index()).stop().fadeIn(500).siblings().fadeOut(100);
    });
	var timer01 = null;
	var myTimer = function(){
		num++;
		if (num > 5){
			num = 0;
		}
		$('.page1 ol li').eq(num).addClass('pgolCurrent').siblings().removeClass('pgolCurrent')
		$('.page1 ul li').eq(num).stop().fadeIn().siblings().fadeOut();
	};
	
	timer01 = setInterval(myTimer,3000);
	$('.page1 ol li').hover(function(e){
    	clearInterval(timer01);
	},function(){
		timer01 = setInterval(myTimer,3000);		
    });
//小米呼吸灯轮播结束


//第二页导航加一个音乐效果
		$('.nav02 ul li').click(function(e) {
			//鼠标滑过第几个li就播放第几个audio
			$('figure audio').eq($(this).index()).get(0).currentTime = 0;//多次触发的时候 把之前没支执行完的音乐恢复到0的位置
			$('figure audio').eq($(this).index()).get(0).play();			
        }); 
//第二页导航加一个音乐效果结束

//第二页第一个无缝滚动开始
		$('.pg2Up .pg2Up01').append($('.pg2Up .pg2Up01 li:eq(0),.pg2Up .pg2Up01 li:eq(1),.pg2Up .pg2Up01 li:eq(2),.pg2Up .pg2Up01 li:eq(3),.pg2Up .pg2Up01 li:eq(4)').clone(true));
		var timer02 = null;
		var num02 = 0;
		var fangXiang = -1;//全局变量 控制方向	
		var myTimer02 = function(){
			num02+=fangXiang;// num = num - 3;  '+num+'
			//如果num的值小于-1200 那么我们要让num的恢复到0
			if(num02 < -1680){
				num02 = 0;
			}else if(num02 > 0){
				num02 = -1680;
			}
			$('.pg2Up .pg2Up01').css('left',''+num02+'px');
		};
		
		timer02 = setInterval(myTimer02,30);
		
		$('.pg2Up .pg2Up01 li').hover(function(e) {
            $(this).siblings().stop().fadeTo(300,0.2);
			//清除定时器
			clearInterval(timer02);
        },function(){
			$(this).siblings().stop().fadeTo(300,1);
			//离开的时候再开启定时器
			clearInterval(timer02);
			timer02 = setInterval(myTimer02,30);
		});
//第二页第一个无缝滚动结束
//第二页第二个无缝滚动开始
		$('.pg2Up .pg2Up02').append($('.pg2Up .pg2Up02 li:eq(0),.pg2Up .pg2Up02 li:eq(1),.pg2Up .pg2Up02 li:eq(2),.pg2Up .pg2Up02 li:eq(3),.pg2Up .pg2Up02 li:eq(4)').clone(true));
		var timer04 = null;
		var num04 = 0;
		var fangXiang04 = 3;//全局变量 控制方向	
		var myTimer04 = function(){
			num04+=fangXiang04;// num = num - 3;  '+num+'
			//如果num的值小于-1200 那么我们要让num的恢复到0
			if(num04 < -1680){
				num04 = 0;
			}else if(num04 > 0){
				num04 = -1680;
			}
			$('.pg2Up .pg2Up02').css('left',''+num04+'px');
		};
		
		timer04 = setInterval(myTimer04,30);
		
		$('.pg2Up .pg2Up02 li').hover(function(e) {
            $(this).siblings().stop().fadeTo(300,0.2);
			//清除定时器
			clearInterval(timer04);
        },function(){
			$(this).siblings().stop().fadeTo(300,1);
			//离开的时候再开启定时器
			clearInterval(timer04);
			timer04 = setInterval(myTimer04,30);
		});
//第二页第二个无缝滚动结束

//vi展示开始
		$('.d,.dd').click(function(e) {
            $('.showVi').stop().fadeIn();
        });
		
		
		$('.showviTc').click(function(e) {
            $('.showVi').stop().fadeOut();
        });
		
		$('.showviUl li').mouseover(function(e) {
			var myHref = $(this).children('a').attr('href');
			var myTag01 = $('<div class="showGs"><img src="'+myHref+'" width="503" height="371"></div>');
			$(this).siblings().stop().fadeTo(300,0.3);
			$('.showviUl').after(myTag01);
			var myX = e.pageX + 10;
			var myY = e.pageY + 10;//   '+myX+'
			$('.showGs').hide().show(500).css({'left':''+myX+'px','top':''+myY+'px'});
        }).mouseout(function(){
			$('.showGs').remove();
			$(this).siblings().stop().fadeTo(300,1);
		})
//vi展示结束
//网页展示开始

		var wytimer01 = null;
		var wynum = 0;//全局变量是轮播图的灵魂
		$('.f,.aa').click(function(e) {
            $('.showWangye').stop().fadeIn();
        });
			
		$('.showwangyeTc').click(function(e) {
            $('.showWangye').stop().fadeOut();
        });
		$('.wangyezsUl02 li').click(function(e) {
            $(this).addClass('showwyLic').siblings().removeClass('showwyLic');
            $('.wangyezsUl01 li').eq($(this).index()).stop().fadeIn().siblings().fadeOut();
			wynum = $(this).index();
        });

		var wymyTimer = function(){
			//先控制ol的li
			wynum++;
			if(wynum > 6){
				wynum = 0;
				}
		$('.wangyezsUl01 li').eq(wynum).stop().fadeIn().siblings().fadeOut();
		$('.wangyezsUl02 li').eq(wynum).addClass('showwyLic').siblings().removeClass('showwyLic');				
		};
		wytimer01 = setInterval(wymyTimer,2000);
		
		$('.wangyezsUl01 li').hover(function(e) {
        	clearInterval(wytimer01);    
        },function(){
			wytimer01 = setInterval(wymyTimer,2000);
		});
		$('.wangyezsUl02 li').hover(function(e) {
        	clearInterval(wytimer01);    
        },function(){
			wytimer01 = setInterval(wymyTimer,2000);
		});		
		
//网页展示结束
//banner展示开始
		$('.e,.ee').click(function(e) {
            $('.showBanner').stop().fadeIn();
        });
		
		
		$('.showbannerTc').click(function(e) {
            $('.showBanner').stop().fadeOut();
        });

//banner展示结束
//瀑布流展示开始
		$('.c,.cc').click(function(e) {
            $('.showPpl').stop().fadeIn();
        });
		$('.showpplTc').click(function(e) {
            $('.showPpl').stop().fadeOut();
        });
		
//瀑布流展示结束
//多媒体用户界面展示开始
		var xmtimer01 = null;
		var xmnum = 0;//全局变量是轮播图的灵魂
		$('.h,.hh').click(function(e) {
            $('.showXm').stop().fadeIn();
        });
		$('.showxmTc').click(function(e) {
            $('.showXm').stop().fadeOut();
        });
		$('.showxmUl02 li').click(function(e) {
            $(this).addClass('showxmLic').siblings().removeClass('showxmLic');
            $('.showxmUl01 li').eq($(this).index()).stop().fadeIn(800).siblings().fadeOut(800);
			xmnum = $(this).index();
        });

		var xmmyTimer = function(){
			//先控制ol的li
			xmnum++;
			if(xmnum > 10){
				xmnum = 0;
				}
		$('.showxmUl01 li').eq(xmnum).stop().fadeIn(500).siblings().fadeOut(500);
		$('.showxmUl02 li').eq(xmnum).addClass('showxmLic').siblings().removeClass('showxmLic');				
		};
		xmtimer01 = setInterval(xmmyTimer,2000);
		
		$('.showxmUl02 li').hover(function(e) {
        	clearInterval(xmtimer01);    
        },function(){
			xmtimer01 = setInterval(xmmyTimer,2000);
		});
		$('.showxmUl01 li').hover(function(e) {
        	clearInterval(xmtimer01);    
        },function(){
			xmtimer01 = setInterval(xmmyTimer,2000);
		});		
//多媒体用户界面展示结束    
})









