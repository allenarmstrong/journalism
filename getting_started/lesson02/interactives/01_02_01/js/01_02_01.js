$(document).ready(function(){

	// ====================================================
	// POPUPS !!!!!
	// ====================================================
	
	// add in close button
	var closeBtn = $(document.createElement('div')).attr('class','closeit').html('<span class="glyphicon glyphicon-remove"></span>');
	$('.custom_dialog').append(closeBtn);
	
	// close popup function
	$('.closeit, #coverit').click(function(){
		$('.custom_dialog').hide();
		$('#coverit').hide();

	});

	// open popups
	$('.dialog_trigger').click(function(){
		var whichone = $(this).attr('data-dialog');
		//$('#pop_' + whichone).show('clip', 100).effect( 'bounce', { times: 2, distance:15}, 70 );
		$('#' + whichone).fadeIn(500);
		$('#coverit').fadeIn();

		
	});
	
});