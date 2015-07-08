$(document).ready(function() {
	var imgProj = $(".soloProject img"),
		popUp = $(".popUp");

	imgProj.hover(function() {
		$(this).css('opacity', '.1');
		$(this).next().fadeIn();
		$(this).next().hover(function() {
			$(this).prev().css('opacity', '.1');
			$(this).stop(true, true);
		});
	}, function() {
		$(this).next().fadeOut();
		$(this).css('opacity', '1');
	});
});