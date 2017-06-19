$(document).ready(function(){
	
	var rows = prompt("Please enter number of rows: ")
	var columns = prompt("Please enter number of columns: ")

	var width = columns*32;
	$('#frame').width(width);

	for (var i = 0; i < columns; i++) {
		for (var j = 0; j < rows; j++) {
			$('#frame').append("<div class='clear'></div>");
		}
	}

	$('input[name=mode]', '#myForm').change(function() {
		clean();
	});

	$('.clear').mouseenter(function(){

		if($('#Normal').is(':checked')) {
			$(this).addClass('colored').removeClass('clear');
		}

		else if($('#Opacity').is(':checked')) {
			var opacity = $(this).css('opacity') - 0.1;
			$(this).css('opacity', opacity);
		}

		else{
			$(this).fadeTo(300, 0.4);
		}

	});

	$('.clear').mouseleave(function(){
		if($('#Trails').is(':checked')) {
			$(this).fadeTo(300, 1);
		}
	});

	$('#clean').on('click', function(){
		clean();
	});

	$('#new').on('click', function(){
		location.reload();
	});

});

function clean (){
	$('#frame > div').css('opacity', '1');
	$('.colored').addClass('clear').removeClass('colored');
}
