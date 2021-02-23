/*** accordion fn  ***/
$('.accord_wrap').each(function () { // default
	if (!$(this).hasClass('manualfn')) {
		if ($(this).hasClass('multiple')) {
			defaultAcc = new Accordion($(this), {
				allowMultiple: true,
				transition: 'height .0s',
				transitionSupport: true,
				setFocus: 'first'
			});
		} else {
			defaultAcc = new Accordion($(this), {
				allowMultiple: false,
				transition: 'height .0s',
				transitionSupport: true,
				setFocus: 'first'
			});
		}
	}
});
function accoSet(setId, multiTF, setFocus) {
	if (!setId) {
		setId = '.accord_wrap';
	} else {
		var setId = $('#' + setId);
	}
	if (!multiTF) multiTF = false;
	if (!setFocus) setFocus = 'acco_panel';

	defaultAcc = new Accordion(setId, {
		allowMultiple: multiTF,
		setFocus: setFocus
	});
}
// tab control
function actvTabList(tabid, actNum){
	var basicTabs = new Tabs('#' + tabid);
	if(!actNum) actNum = 0;

	basicTabs.activate(actNum);
}
$('.tab_wrap').each(function(){  // default
	if(!$(this).hasClass('manualfn')){
		var basicTabs = new Tabs($(this));
	}
});

// tab pagination
$(document).ready(function() {
	if($('.tab-pagination .row p').length > 0) tabposSet();
});
var tabposSet = function(){
	$('.tab-pagination').each(function() {
		var $tablist = $(this).find('.row');
		
		$(this).find('.row p').each(function() {
			$(this).on('click', function(e){
				if(!$(this).hasClass('active')){
					var $element = $(this);
					$tablist.find('p').removeClass('active');
					$element.addClass('active');

					var hashOffset = $element.offset().left;
					var hashWidth = $element.outerWidth(true);
					var menuScrollLeft = $tablist.scrollLeft();
					var menuWidth = $tablist.width();

					var myScrollPos = hashOffset + (hashWidth / 2) + menuScrollLeft - (menuWidth / 2);
					$tablist.stop().animate({
						scrollLeft: myScrollPos - (menuWidth / 9)
					}, 300);
				}
		
			});
		});
	});
}