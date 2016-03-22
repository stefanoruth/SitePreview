$(document).ready(function(){
	$('.screens a').click(function(e){
		e.preventDefault();
		$('#viewIframe').removeClass().addClass($(this).data('screen'));
	})

	$('.controls form').submit(function(e){
		e.preventDefault();
		var url = $('.controls input[type=text]').val();
		$('#viewIframe iframe').show().attr('src', url);
	});
});