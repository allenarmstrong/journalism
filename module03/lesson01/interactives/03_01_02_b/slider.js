var slidesState2 = 0;
var sliderDiv2 = $('.int2 .slider');
var range2 = 350;

$(document).ready(function() {
	doDOM2();
	
	if (jQuery.ui) {
		runSlider2();
		runSlides2();
	};

});

function runSlider2() {
	
    $(sliderDiv2).slider({
        orientation: 'horizontal',
        min: 0,
        max: range2,
        value: range2,
        slide: function(event, ui) {
			var thisSlider = $(this);
			//console.log('ui.value: '+ui.value);
			updateSlider(ui.value, thisSlider);
		}
	});

	$('.int2 .image_holder').mousemove(function(e) {
		var thisSlider = $(this).children('.slider');
		var offset = $(this).closest('.jCustom').offset();
		var val = e.pageX-offset.left;
	
		if (val <= range2 && val >= 0) {
			thisSlider.slider('value', val);
			updateSlider(val, thisSlider);
		};
    });
};

function updateSlider(value, thisSlider) {
	$(thisSlider).siblings('.over').width(value);
};

function runSlides2() {
	var numOfSlides = $('.int2 .sliderSlide').length-1;
	
	$('.int2 .prevSlide').click(function() {
		if (slidesState2 == 0) {
			var nextSlide = numOfSlides;
		} else {
			var nextSlide = slidesState2-1;
		};
		$('.int2 .sliderSlide').eq(slidesState2).hide();
		$('.int2 .sliderSlide').eq(nextSlide).fadeIn();
		slidesState2 = nextSlide;
		$('.int2 .currentSlideNum').text(slidesState2+1);
		
	});
	
	$('.int2 .nextSlide').click(function() {
		if (slidesState2 == numOfSlides) {
			var nextSlide = 0;
		} else {
			var nextSlide = slidesState2+1;
		};
		$('.int2 .sliderSlide').eq(slidesState2).hide();
		$('.int2 .sliderSlide').eq(nextSlide).fadeIn();
		slidesState2 = nextSlide;
		$('.int2 .currentSlideNum').text(slidesState2+1);
	});
};

function doDOM2() {
	$('.int2 .sliderSlide').hide().eq(0).show();
	var numOfSlides = $('.int2 .sliderSlide').length;
	$('.int2 .totalSlideNum').text(numOfSlides);
};