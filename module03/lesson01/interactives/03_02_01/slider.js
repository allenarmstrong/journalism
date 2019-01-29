var slidesState = 0;
var sliderDiv = $('.int1 .slider');
var range = $('.int1 #ih1 .over').width();

$(document).ready(function() {
	doDOM();
	
	if (jQuery.ui) {
		runSlider();
		runSlides();
	};

});

function runSlider() {
	
    $(sliderDiv).slider({
        orientation: 'horizontal',
        min: 0,
        max: range,
        value: range,
        slide: function(event, ui) {
			var thisSlider = $(this);
			//console.log('ui.value: '+ui.value);
			updateSlider(ui.value, thisSlider);
		}
	});
	

	$('.int1 .image_holder').mousemove(function(e) {
		var thisSlider = $(this).children('.slider');
		var offset = $(this).closest('.jCustom').offset();
		var val = e.pageX-offset.left;
	
		if (val <= range && val >= 0) {
			thisSlider.slider('value', val);
			updateSlider(val, thisSlider);
		};
    });
};


function updateSlider(value, thisSlider) {
	$(thisSlider).siblings('.over').width(value);
};

function runSlides() {
	var numOfSlides = $('.int1 .sliderSlide').length-1;
	
	$('.int1 .prevSlide').click(function() {
		if (slidesState == 0) {
			var nextSlide = numOfSlides;
		} else {
			var nextSlide = slidesState-1;
		};
		$('.int1 .sliderSlide').eq(slidesState).hide();
		$('.int1 .sliderSlide').eq(nextSlide).fadeIn();
		slidesState = nextSlide;
		$('.int1 .currentSlideNum').text(slidesState+1);
		
	});
	
	$('.int1 .nextSlide').click(function() {
		if (slidesState == numOfSlides) {
			var nextSlide = 0;
		} else {
			var nextSlide = slidesState+1;
		};
		$('.int1 .sliderSlide').eq(slidesState).hide();
		$('.int1 .sliderSlide').eq(nextSlide).fadeIn();
		slidesState = nextSlide;
		$('.int1 .currentSlideNum').text(slidesState+1);
	});
};

function doDOM() {
	$('.int1 .sliderSlide').hide().eq(0).show();
	var numOfSlides = $('.int1 .sliderSlide').length;
	$('.int1 .totalSlideNum').text(numOfSlides);
};