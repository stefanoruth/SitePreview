function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(document).ready(function(){
	var frame = $('#viewIframe iframe');
	var input = $('.controls input[type=text]');

	$('.screens a').click(function(e){
		e.preventDefault();
		$('#viewIframe').removeClass().addClass($(this).data('screen'));
	})

	$('.controls form').submit(function(e){
		e.preventDefault();
		var url = input.val();
		if (!url.match(/(http(s?):\/\/)/)) {
			url = 'http://'+url;
		}
		console.log(url);
		frame.show().attr('src', url);
	});

	var query = getParameterByName('url');
	if(query) {
		console.log(query);
		input.val(query);
		frame.show().attr('src', query);
	}
});