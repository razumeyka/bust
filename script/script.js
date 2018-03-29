$(document).ready(function(){
	$('.first-screen-img').addClass('load');

	$('.first-screen-text').find('.year').addClass('load');
	$('.first-screen-text').find('.main-text').addClass('load');
	$('.first-screen-text').find('.description').addClass('load');

	$("#mob-menu").click(function() {
		if($("#mob-menu").hasClass('active')) {
			$("#mob-menu").removeClass('active');
			$('.menu').slideUp("slow");
		} else {
			$("#mob-menu").addClass('active');
			$('.menu').slideDown("slow");
		}
	});

	$('.menu li').mouseenter(function(){
		if($('#mob-menu').css('display') == 'none') {
			$(this).find('ul').fadeIn();
		}
	});
	
	$('.menu li').mouseleave(function(){
		if($('#mob-menu').css('display') == 'none') {
			$(this).find('ul').fadeOut();
		}
	});

	$('.menu li').click(function(){
		if($('#mob-menu').css('display') == 'block') {
			$(this).find('ul').toggle(100);
		}
	});

	jQuery('.second-screen-elem').viewportChecker({
		classToAdd: 'out',
		offset: 100
	});

	jQuery('.third-screen-elem .third-screen-img').viewportChecker({
		classToAdd: 'out',
		offset: 100
	});

	jQuery('.third-screen-elem > a').viewportChecker({
		classToAdd: 'out',
		offset: 100
	});

	jQuery('.fourth-screen-elem').viewportChecker({
		classToAdd: 'out',
		offset: 100
	});

	$( window ).resize(function() {
		var w=$('.third-screen .third-screen-box .third-screen-elem').width();  
		$('.res_height').css('height',w+'px');
		
	}); 
    
//    $(window).resize(function() {
//        $('.step').css('height');
//        parseInt()
//        var a=
//        $('.step').css('height', a*2+'px'); 
//    })
    
    var slideNow = 1;   
    var slideCount = console.log($('#slidewrapper .slide').length);
    var navBtnId = 0;
    
    $('.smooth').click(function() {   
            navBtnId = $(this).index();
                $('#slidewrapper').css(
                    'margin-left','-'+navBtnId+'00%'); 
        
            $('html, body').stop().animate({
                scrollTop: $('.slide .about').offset().top
            }, 500);
    });
    
    $(".answer").hide();
    $('.question').click(function(){
            $(this).next().slideToggle(500);
            $(this).toggleClass('active');
    });   
});

