$(document).ready(function(){
// Scroll Bar

function win_scroll() {

	var distFromTop = $(document).scrollTop();

	if (distFromTop >= 0) {
		$('nav').addClass('pinnedNav')
	}
	else {
		$('nav').removeClass('pinnedNav')
	}

	console.log(distFromTop)

	

}

$(window).scroll(win_scroll);


}); // End of doc.Ready