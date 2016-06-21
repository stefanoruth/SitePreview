$(document).ready(function(){
	$('.screens a').click(function(e){
		e.preventDefault();
		$('#viewIframe').removeClass().addClass($(this).data('screen'));
	})

	$('.controls form').submit(function(e){
		e.preventDefault();
		var url = $('.controls input[type=text]').val();
		if (!url.match(/(http(s?):\/\/)/)) {
			url = 'http://'+url;
		}
		console.log(url);
		$('#viewIframe iframe').show().attr('src', url);
	});
});