$(document).ready(function(){

//Animation scroll and navigation scroll

	var offset=[];
	$.each($('.slide-one, .slide-two, .slide-three, .slide-four, .slide-five'), function(i, element){
		offset[i]=$(element).offset().top;
	});
	$(window).resize(function(){
		$.each($('.slide-one, .slide-two, .slide-three, .slide-four, .slide-five'), function(i, element){
		offset[i]=$(element).offset().top;
		});
	});

	$(".navigation__list__item__link").click(function(){
		var h1="";
		if($(this).attr('href')=="#1"){h1=offset[1];}
		else if($(this).attr('href')=="#2"){h1=offset[2];}
		else if($(this).attr('href')=="#3"){h1=offset[3];}
		else if($(this).attr('href')=="#4"){h1=offset[4];}
		$("html, body").stop().animate( { scrollTop: h1 }, 1000);
	});

	$(".logo").click(function() {
		$("html, body").stop().animate( { scrollTop: offset[0] }, 1000);
	});

	$(".footer-link").click(function(){
		var h1="";
		var scroll=$(window).scrollTop();
		if(scroll==offset[0]){h1=offset[1];}
		else if(scroll==offset[1]){h1=offset[2];}
		else if(scroll==offset[2]){h1=offset[3];}
		else if(scroll==offset[3]){h1=offset[4];}
		else if(scroll==offset[4]){h1=offset[0];}
		$("html, body").stop().animate( { scrollTop: h1 }, 1000);
	});

	$(window).scroll(function(){
		var scroll=$(window).scrollTop();
		var height_window=$(window).height();
		clearTimeout($.data(this, 'scrollTimer'));
    	$.data(this, 'scrollTimer', setTimeout(function(){
			if((scroll>=(offset[0]))&&(scroll<(offset[1]))){
				$('.slide-one__header, .slide-one__description, .slide-one__button-start').css({"animation-play-state":"running"});}

			if((scroll>=(offset[1]))&&(scroll<(offset[2]))){
				$('.slide-two__header, .slide-two__description, .slide-two__small-section__header, .slide-two__small-section__description, .slide-two__img').css({"animation-play-state":"running"});}

			if((scroll>=(offset[2]))&&(scroll<(offset[3]))){
				$('.slide-three__header, .slide-three__description, .slide-three__small-section__header, .slide-three__small-section__description, .slide-three__img').css({"animation-play-state":"running"});}

			if((scroll>=(offset[3]))&&(scroll<(offset[4]))){
				$('.slide-four__header, .slide-four__description, .slide-four__small-section__header, .slide-four__small-section__description, .slide-four__img').css({"animation-play-state":"running"});}

			if(scroll>=(offset[4])){
				$('.slide-five__header, .slide-five__table__cell__header, .slide-five__table__cell__description').css({"animation-play-state":"running"});}
		},250));

		if((scroll>=(offset[0]))&&(scroll<(offset[1]))){
			$('.navigation-dots__list__item').removeClass('navigation-dots__list__item--check');
			$('.navigation-dots__list__item:nth-child(1)').addClass('navigation-dots__list__item--check');}

		if((scroll>=(offset[1]))&&(scroll<(offset[2]))){
			$('.navigation-dots__list__item').removeClass('navigation-dots__list__item--check');
			$('.navigation-dots__list__item:nth-child(2)').addClass('navigation-dots__list__item--check');}

		if((scroll>=(offset[2]))&&(scroll<(offset[3]))){
			$('.navigation-dots__list__item').removeClass('navigation-dots__list__item--check');
			$('.navigation-dots__list__item:nth-child(3)').addClass('navigation-dots__list__item--check');}

		if((scroll>=(offset[3]))&&(scroll<(offset[4]))){
			$('.navigation-dots__list__item').removeClass('navigation-dots__list__item--check');
			$('.navigation-dots__list__item:nth-child(4)').addClass('navigation-dots__list__item--check');}

		if(scroll>=(offset[4])){
			$('.navigation-dots__list__item').removeClass('navigation-dots__list__item--check');
			$('.navigation-dots__list__item:nth-child(5)').addClass('navigation-dots__list__item--check');}
	})
		//refresh when user reload website without scrolling
		var scroll=$(window).scrollTop();
		var height_window=$(window).height();
		if((scroll>=(offset[0]))&&(scroll<(offset[1]))){
			$('.slide-one__header, .slide-one__description, .slide-one__button-start').css({"animation-play-state":"running"});
			$('.navigation-dots__list__item').removeClass('navigation-dots__list__item--check');
			$('.navigation-dots__list__item:nth-child(1)').addClass('navigation-dots__list__item--check');}

		if((scroll>=(offset[1]))&&(scroll<(offset[2]))){
			$('.slide-two__header, .slide-two__description, .slide-two__small-section__header, .slide-two__small-section__description, .slide-five__img').css({"animation-play-state":"running"});
			$('.navigation-dots__list__item').removeClass('navigation-dots__list__item--check');
			$('.navigation-dots__list__item:nth-child(2)').addClass('navigation-dots__list__item--check');}

		if((scroll>=(offset[2]))&&(scroll<(offset[3]))){
			$('.slide-three__header, .slide-three__description, .slide-three__small-section__header, .slide-three__small-section__description, .slide-three__img').css({"animation-play-state":"running"});
			$('.navigation-dots__list__item').removeClass('navigation-dots__list__item--check');
			$('.navigation-dots__list__item:nth-child(3)').addClass('navigation-dots__list__item--check');}

		if((scroll>=(offset[3]))&&(scroll<(offset[4]))){
			$('.slide-four__header, .slide-four__description, .slide-four__small-section__header, .slide-four__small-section__description, .slide-four__img').css({"animation-play-state":"running"});
			$('.navigation-dots__list__item').removeClass('navigation-dots__list__item--check');
			$('.navigation-dots__list__item:nth-child(4)').addClass('navigation-dots__list__item--check');}

		if(scroll>=(offset[4])){
			$('.slide-five__header, .slide-five__table__cell__header, .slide-five__table__cell__description').css({"animation-play-state":"running"});
			$('.navigation-dots__list__item').removeClass('navigation-dots__list__item--check');
			$('.navigation-dots__list__item:nth-child(5)').addClass('navigation-dots__list__item--check');}


	var running = false;
	var handler = function (e) {
	    if (running) {
	        return;
	    }
	    running = true;
	    if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
	        dir = 'down';
	    } else {
	        dir = 'up';
	    }
	    // find currently visible div :
	    div = -5;
	    divs = $('.slide-one, .slide-two, .slide-three, .slide-four, .slide-five');
	    divs.each(function(i){
	        if (div<0 && ($(this).offset().top >= $(window).scrollTop())) {
	            div = i;
	        }
	    });
	    if (dir == 'up' && div > 0) {
	        div--;
	    }
	    if (dir == 'down' && div < divs.length) {
	        div++;
	    }


	    //console.log(div, dir, divs.length);
	    $('html,body').stop().animate(
	        { scrollTop: divs.eq(div).offset().top }, // properties
	        700,                                      // duration
	        "swing",                                  // easing (needed to use 4th argument)
	        function(){ running = false; }            // animation complete callback
	    );

	    return false;
	};

$(document.body).on('DOMMouseScroll mousewheel', handler );

})