// ----------------------------------------------------------------------
// -- COURSE SPECIFI JS:
// ----------------------------------------------------------------------
// -- NOTE: This is where you can add anything you need to do specifically to the course homepage, it will load lastly.
// -- ABOUT: THis file will over-ride everything else, if you need to customize
// -- AUTHOR: You - WDS
// ======================================================================

		
function createIndex(){
	//console.log(FLVS.Sitemap);
	
	for(var i=0; i<FLVS.Sitemap.module.length; i++){
		// Find the first link in the module
		var link = FLVS.Sitemap.module[i].lesson[0].page[0].href;
		link = link.replace("../../","");
		if(FLVS.Sitemap.module[i].indexpage == 'true') {
		// Create Link and add it to the page
		var a = $(document.createElement('a')).attr('href',link).attr('class','moduleLink');
		if(!FLVS.Sitemap.module[i].icon){FLVS.Sitemap.module[i].icon = "icon_homeTemp.png";}
	
		var img = $(document.createElement('img'));
		var span = $(document.createElement('span')).html(FLVS.Sitemap.module[i].title);
		$(a).append(img).append(span);
		
		
		$('.modules').append(a);
	}
	$('#modules').append('<div class="clear">&nbsp;</div>');}
	
	// Create Popup Menu
	createMenu();
	
	// FADE IN CONTENT and position the nav_menu
	$('body').css('visibility','visible').hide();
	$('body').fadeIn(800, function(){
				
		// Navigation Position
		var pos = $('#menu_inner').offset();
		$('#nav_menu').css('left',pos.left+'px');
				
		// Position Popup Menu
		$(window).on('resize',function(){
			var pos = $('#menu_inner').offset();
			$('#nav_menu').css('left',pos.left+'px');
					
		});
	});
	
	
	// Event for Menu Button
	$('.menubtn, .menubtn_mobile').click(function(){
		$('.nav_menu_lessons').hide();
				
		if(!$('#nav_menu').is(':visible')){
			$('body').append('<div class="menu_backdrop">&nbsp;</div>');
			$('.menu_backdrop').click(function(){
				$('#nav_menu').fadeToggle('fast');
				$(this).remove();
			});
		} else {
			$('.menu_backdrop').remove();
		}
				
		$('#nav_menu').fadeToggle('fast');
				
	});
		
	// Event for Showing Menu Lessons
	$('.modlink').click(function(){
		$('.nav_menu_lessons').hide();
		$(this).next().stop().fadeIn('fast');
	});
		
}

function createMenu(){
	var menu = '<div id="menu">';
	menu += '<ul class="nav_menu_modules">';
	
	for(var i=0; i<FLVS.Sitemap.module.length; i++){
		
		
			menu += '<li>';
			menu += '<a href="javascript:void(0);" class="modlink">'+FLVS.Sitemap.module[i].title+'</a>';				
				
				// Lessons
				menu += '<ul class="nav_menu_lessons mod'+(i + 1)+'">';
				var submenu = '';
				
				for(var j=0; j<FLVS.Sitemap.module[i].lesson.length; j++){
					var llink = FLVS.Sitemap.module[i].lesson[j].page[0].href;
					var ltitle = FLVS.Sitemap.module[i].lesson[j].title;
					var lnum = FLVS.Sitemap.module[i].lesson[j].num;
					var lmins = FLVS.Sitemap.module[i].lesson[j].time;
					var lpoints = FLVS.Sitemap.module[i].lesson[j].points;
					llink = llink.replace("../../","");

					submenu += '<li>';
					
					//work around for current theme to allow alternate colors
					var mainWidth = $("main").css("width");
					if(mainWidth > "760px"){
						if(j == 0 || j== 2 || j==4 || j== 6 || j== 8 || j== 10 || j==12 || j==14 || j==16 || j==18 || j==20 || j==22){
							submenu += '<a href="'+llink+'"><span class="lesson_num">'+lnum+'</span>';
						} else {
							submenu += '<a href="'+llink+'" class="odd"><span class="lesson_num">'+lnum+'</span>';
						}
					}else if(mainWidth > "500px"){
						if(j == 0 || j== 2 || j==5 || j== 7 || j== 8 || j== 10 || j==13 || j==15 || j==16 || j==18 || j==21 || j==23){
							submenu += '<a href="'+llink+'"><span class="lesson_num">'+lnum+'</span>';
						} else {
							submenu += '<a href="'+llink+'" class="odd"><span class="lesson_num">'+lnum+'</span>';
						}
					}else{
						if(j%2 == 0){
							submenu += '<a href="'+llink+'"><span class="lesson_num">'+lnum+'</span>';
						} else {
							submenu += '<a href="'+llink+'" class="odd"><span class="lesson_num">'+lnum+'</span>';
						}
					}
					
					
						
					var minutes = "mins";
					if(Number(FLVS.Sitemap.module[i].lesson[j].time) < 2){
						minutes = "min";
					}
					var points = "pts";
					if(Number(FLVS.Sitemap.module[i].lesson[j].points) < 2){
						points = "pt";
					}		
					
					submenu += '<span class="lesson_title">'+ltitle+'</span><span class="lesson_nfo">'+lmins+' '+minutes+' | '+lpoints+' '+points+'</span></a>';
  					submenu += '</li>';					
					
				}
				
				menu += submenu;
				menu += '</ul>';
				menu += '</li>';
		 // end if visible
		

	}
	
	
// Remove all modlinks from nav_menu_lessons
	$('#nav_menu').append(menu);
	$('.nav_menu_lessons .modlink').remove();
}



//-------------------need to see if the sitemap is ready, if not lets wait for the ajax to finish---------------------//
if(FLVS.Sitemap){
	createIndex();
	//console.log("hello - FLVS.Sitemap");
	
}else{
	$( document ).ajaxSuccess(function( event, xhr, settings ) {
	  if(settings.url == "global/xml/sitemap.xml" ) {
		//console.log("hello - ajaxSuccess");
		createIndex();
	  }
	});
}
