// ----------------------------------------------------------------------
// -- COURSE SPECIFI JS:
// ----------------------------------------------------------------------
// -- NOTE: This is where you can add anything you need to do specifically to the course, it will load lastly.
// -- ABOUT: THis file will over-ride everything else, if you need to customize
// -- AUTHOR: You - WDS
// ======================================================================

//$(document).ready(function() {
//    var $window = $(window);
//
//        // Function to handle changes to style classes based on window width
//        function checkWidth() {
//        if ($window.width() < 1200) {
//            $('#sizeswitch').removeClass('bgshadow');
//            };
//
//        if ($window.width() >= 1200) {
//            $('#sizeswitch').addClass('bgshadow');
//        }
//    }
//
//    // Execute on load
//    checkWidth();
//
//    // Bind event listener
//        $(window).resize(checkWidth);
//});

//-------------------need to see if the sitemap is ready, if not lets wait for the ajax to finish---------------------//

//BREADCRUMBS
		if (typeof isexternal === 'undefined' ) {
			$('.breadcrumbs_course').html(FLVS.settings.course_title);
			$('.breadcrumbs_module').html(FLVS.Sitemap.module[current_module].title);
			$('.breadcrumbs_lesson').html(FLVS.Sitemap.module[current_module].lesson[current_lesson].title);
			$('.breadcrumbs_lesson_number').html(FLVS.Sitemap.module[current_module].lesson[current_lesson].num);
		}