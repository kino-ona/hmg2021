$(document).ready(function() {
	if( $('.trims_list .trims_item').length > 0 ) { trimItemSel(); }
});

var trimItemSel = function(){
	$('.trims_list .trims_item').each(function(){  
		var selbtn = $(this).find('.group');
		selbtn.click(function(){
			$('.trims_list .trims_item').removeClass('_active');
			if(!selbtn.hasClass('_active')) {
				if ($('html').hasClass('is-mobile')) {
					if(!selbtn.parents('.trims_list').hasClass('_pulldown')) {
						selbtn.parents('.trims_list').addClass('_pulldown')
					}else{
						selbtn.parents('.trims_list').removeClass('_pulldown')
					}
					
				}
				selbtn.parents('.trims_item').addClass('_active');
			}
		});
	});
}

$(document).ready(function() {
	if( $('.option_mask').length > 0 ) { optionSelect(); }
});
var optionSelect = function(){
	var $optMask = $('.option_mask');
	$optMask.each(function () {
		$(this).find('.option_thumnail').each(function () {
			var $thisOpt = $(this).find('input[type=checkbox]');

			$thisOpt.on('click', function() {
				if ($thisOpt.is( ":checked")){ 
					$thisOpt.parents('.option_thumnail').attr('aria-selected', true)
				}else{
					$thisOpt.parents('.option_thumnail').attr('aria-selected', false)
				}
			});
		});
	});
}

if( $('.color_chips').length > 0 ) {
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
}