$(function() {
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
		var w=$('.third-screen').find('.third-screen-box').find('.third-screen-elem').width();
		$('.res_height').css('height',w+'px');
		
	});
});




