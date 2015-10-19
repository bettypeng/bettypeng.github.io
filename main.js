
$(document).ready(function() { 
    $('.carousel').carousel({
    });
  $('.section').css({'height':(($(window).height()))});
});

$(window).resize(function(){ // On resize
		$('.section').css('height', 'auto');
	});



