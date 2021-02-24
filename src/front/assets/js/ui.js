var $window = $(window);
var winW = $(window).outerWidth();
var winH = $(window).outerHeight();
var isMobile = false;    
var iOS = false;
var currentSt;
var st = $window.scrollTop();
var isResizeM = false;
var isResizeT = false;
var isResizeW = false;
var isResize;
var isLayer = false;

//Mobile Check
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){
		isMobile = true;
		if(navigator.userAgent.indexOf("iPhone") != -1){ //IOS Check
				iOS = false;
		}else{
				iOS = true;
		}    
}
var isModels = false;
var layoutSize = function(){
	var winWidth = $window.outerWidth();
	var scrollSize = winWidth - $window.width();
	var breakpoint;

	if (isMobile) {
		breakpoint = 768;
	} else {
		breakpoint = 1024;
	}

	if (winWidth < breakpoint) {
		$('.h-wrap').removeClass('pg-tablet');	
		$('.h-wrap').removeClass('pg-desktop');	
		$('.h-wrap').addClass('pg-mobile');	
	} else if (winWidth >= breakpoint && winWidth <= 1240) {
		$('.h-wrap').removeClass('pg-mobile');	
		$('.h-wrap').removeClass('pg-desktop');	
		$('.h-wrap').addClass('pg-tablet');	
	} else if (winWidth >= 1240) {
		$('.h-wrap').removeClass('pg-mobile');	
		$('.h-wrap').removeClass('pg-tablet');	
		$('.h-wrap').addClass('pg-desktop');	
	}
	return {
		width: winWidth,
		scrollSize: scrollSize,
	};
};
function layoutSizeInit() {
	if (layoutSize().layout == 'mobile') {
		isResizeM = true;
		isResizeT = false;
		isResizeW = false;
	} else if (layoutSize().layout == 'tablet') {
		isResizeT = true;
		isResizeM = false;
		isResizeW = false;
	} else if (layoutSize().layout == 'desktop') {
		isResizeW = true;
		isResizeM = false;
		isResizeT = false;
	}
}

$(function () {   
	layoutSizeInit();

	(function(){        
		//WEB MOBILE CHECK
		if (isMobile) {
			$('html').addClass('is-mobile');
		} else {
			$('html').addClass('is-web');
		}
	})();   


	$window
	.on('resize',function(){    //WINDOW RESIZE
		winW = $(this).outerWidth();
		winH = $(this).outerHeight();    


			layoutSizeInit();

	});
});





// accordion fn
$('.accordion_wrap').each(function () { // default
	if (!$(this).hasClass('manualfn')) {
		if ($(this).hasClass('multiple')) {
			defaultAcc = new Accordion($(this), {
				allowMultiple: true,
				panel: '.acco_panel',
				transition: 'height .0s',
				transitionSupport: true,
				setFocus: 'first'
			});
		} else {
			defaultAcc = new Accordion($(this), {
				allowMultiple: false,
				panel: '.acco_panel',
				transition: 'height .0s',
				transitionSupport: true,
				setFocus: 'first'
			});
		}
	}
	if(winW < 1024) {
		defaultAcc.destroy();
	}
});
var accoSet = function(setId, multiTF, setFocus){
	if (!setId) {
		setId = '.accordion_wrap';
	} else {
		var setId = $('#' + setId);
	}
	if (!multiTF) multiTF = false;
	if (!setFocus) setFocus = 'acco_panel';

	defaultAcc = new Accordion(setId, {
		allowMultiple: multiTF,
		setFocus: setFocus,
		transition: 'height .0s',
		transitionSupport: true,
	});
}
// tab control
var actvTabList = function(tabid, actNum){
	var basicTabs = new Tabs('#' + tabid);
	if(!actNum) actNum = 0;

	basicTabs.activate(actNum);
}
$('.tab_wrap').each(function(){  // default
	if(!$(this).hasClass('manualfn')){
		var basicTabs = new Tabs($(this));
	}	
});

// radio tab
var radioTanfnc = function(){
	$('.radio_tablist').each(function(){  
		var radioContent = $(".radio-tab_contents .tab_panel");
	
		$(this).find('li').each(function(){
			$(this).find("input[type='radio']").click(function(){
				$(".radio_tablist p").attr('aria-selected', false)
				if(!$(this).parents('.radiowrap').attr('aria-selected', true)) {
					$(this).parents('.radiowrap').attr('aria-selected', true)
				}
				
				radioContent.attr('aria-hidden', true)
				radioContent.eq($("input[type='radio']").index(this)).attr('aria-hidden', false)
			});
		});
	});
}
$(document).ready(function() {
	$('.radio_tablist').each(function(){  // default
		radioTanfnc();
	});
});


// tab pagination
$(document).ready(function() {
	if($('.tab-pagination .tab-row p').length > 0) tabposSet();
});
var tabposSet = function(){
	$('.tab-pagination').each(function() {
		var $tablist = $(this).find('.tab-row');
		
		$(this).find('.tab-row p').each(function() {
			$(this).find('button').on('click', function(e){

				$tablist.find('button').attr('aria-selected', false);
				if(!$(this).attr('aria-selected', true)){
					var $element = $(this);
					$element.attr('aria-selected', true);
				}
				
				
				$tablist.find('button').removeClass('active');
				if(!$(this).hasClass('active')){
					var $element = $(this);
					$tablist.find('p').removeClass('active');
					$element.addClass('active');

					if(winW < 1024) {
						var hashOffset = $element.offset().left;
						var hashWidth = $element.outerWidth(true);
						var menuScrollLeft = $tablist.scrollLeft();
						var menuWidth = $tablist.width();
	
						var myScrollPos = hashOffset + (hashWidth / 2) + menuScrollLeft - (menuWidth / 2);
						$tablist.stop().animate({
							scrollLeft: myScrollPos - (menuWidth / 9)
						}, 300);
					}
				}

			});
		});
	});
}