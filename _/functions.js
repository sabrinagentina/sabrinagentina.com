jQuery.noConflict();
K2 = {};

/* Fix the position of an element when it is about to be scrolled off-screen */
function smartPosition(obj) {
	if ( jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 7 ) {
		return;
	}
	
	jQuery(window).scroll(function() {
		// Detect if content is being scroll offscreen.
		if ( (document.documentElement.scrollTop || document.body.scrollTop) >= jQuery(obj).offset().top) {
			jQuery('body').addClass('smartposition');
		} else {
			jQuery('body').removeClass('smartposition');
		}
	});
};


// Set the number of columns based on window size and maximum set by K2 Options
function dynamicColumns() {
	var window_width = jQuery(window).width();

	if (K2.columns >= 3 && window_width >= K2.layoutWidths[2]) {
		jQuery('body').removeClass('columns-one columns-two').addClass('columns-three');
	} else if (K2.columns >= 2 && window_width >= K2.layoutWidths[1]) {
		jQuery('body').removeClass('columns-one columns-three').addClass('columns-two');
	} else {
		jQuery('body').removeClass('columns-two columns-three').addClass('columns-one');
	}
};

// Configuration
K2.columns = 2;K2.layoutWidths = [580, 800, 970];jQuery(document).ready(dynamicColumns);jQuery(window).resize(dynamicColumns);