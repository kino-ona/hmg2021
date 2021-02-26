
var $colorChip = $('.color_chips');

$(function(){
	var $colorChip = $('.color_chips');

	$colorChip
	.on('click','button',function(){
		$colorChip.find('button').attr('aria-selected', false);
		if(!$(this).hasClass('unable')) {
			$(this).attr('aria-selected', true);
		}
	});
});