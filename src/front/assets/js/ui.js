$(document).ready(function() {
	if( $('.dropdown_list').length > 0 ) { dropdownControl(); }
});

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
var $Dim = $("<div class='dim'></div>");

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
		$('.h-wrap').removeClass('pg-desktop');	
		$('.h-wrap').addClass('pg-mobile');	
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
	browserChk();
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

var browser = "";
function browserChk() {
    var agent = navigator.userAgent;

    if (agent.match(/Chrome/)) {
    	if (agent.match(/Chrome/) && agent.match(/Edge/)) {
    		browser = 'Edge';
    	} else if (agent.match(/Chrome/) && agent.match(/Linux/)) {
            browser = 'Opera';
        } else if (agent.match(/Safari/) && !agent.match(/Chrome/)) {
            browser = 'Safari';
        } else if (agent.match(/Chrome/)) {
            browser = 'Chrome';
        }
    } else if (agent.match(/Firefox/)) {
        browser = 'Firefox';
    } else if (agent.match(/MSIE/)) { //IE8, IE9, IE10
        browser = 'IE';
    } else if (agent.match(/Trident/)) { //IE11
    	browser = 'IE';
    } else {
        browser = 'Unknown';
    }

    return browser
}

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
	
	$window
	.on('resize',function(){    //WINDOW RESIZE
		if(winW < 1024) {
			// defaultAcc.expand();
			// defaultAcc.destroy();
		} else{
			// defaultAcc.expand(0);
		}
	});
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
	var tabIdx = $(this).attr('id');

	if(!$(this).hasClass('manualfn')){
		var basicTabs = new Tabs('#' + tabIdx);
	}	
});

// radio tab
var radioTanfnc = function(){
	$('.radio_tablist').each(function(){  
		var parentId = $(this).parents('.tab_wrap').attr('id');
		var radioContent = $('#' + parentId).find(".radio-tab_contents .tab_panel");
	
		$(this).find('li').each(function(){
			$(this).find("input[type='radio']").click(function(){
				$(this).parents('.tab_wrap').find(".radio_tablist p").attr('aria-selected', false)
				if(!$(this).parents('.radiowrap').attr('aria-selected', true)) {
					$(this).parents('.radiowrap').attr('aria-selected', true)
				}
				radioContent.attr('aria-hidden', true)
				radioContent.eq($('#' + parentId).find("input[type='radio']").index(this)).attr('aria-hidden', false)
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

var $bookingTrim = $('.trim_color .tab-row');
var tabposSet = function(){
	$('.tab-pagination').each(function() {
		var $tablist = $(this).find('.tab-row'),
				$tabWidth = $tablist.outerWidth(true);
		
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

					if(winW < 1024 || $element.parents('section').hasClass('trim_color')) {
						var hashOffset = $element.offset().left;
						var hashWidth = $element.outerWidth(true);
						var menuScrollLeft = $tablist.scrollLeft();
						var menuWidth = $tablist.width();
	
						var myScrollPos = hashOffset + (hashWidth / 2) + menuScrollLeft - (menuWidth / 2);

						if($element.parents('section').hasClass('trim_color')) {
							$tablist.stop().animate({
								scrollLeft: (myScrollPos - 20) - (menuWidth / 3)
							}, 300);
						}else{
							$tablist.stop().animate({
								scrollLeft: myScrollPos - (menuWidth / 9)
							}, 300);
						}
					}
				}
			});
		});

		if(winW > 1024) {
			$('.trim_color .btn-prev').on('click', function () {
				$bookingTrim.animate({
					scrollLeft: $bookingTrim.scrollLeft() - ($tabWidth - 183)
				}, 200);
			});
			$('.trim_color .btn-next').on('click', function () {
				$bookingTrim.animate({
					scrollLeft: $bookingTrim.scrollLeft() + ($tabWidth - 183)
				}, 200);
			});
		}

	});
}

$('.masking .btn_masking').on('click', function() {
	if ($(this).parent('.masking').hasClass('_not')) {
			$(this).parent('.masking').removeClass('_not');
			$(this).parent('.masking').find('input').attr('type', 'password');
			$(this).children('i').attr('class','ic_show');
	} else {
			$(this).parent('.masking').addClass('_not');
			$(this).parent('.masking').find('input').attr('type', 'text');
			$(this).children('i').attr('class','ic_hide');
	}
});

// Memeber Function
// forgot id
$('.forgot_id ._find').on('click', function() {
	var isOtp = false;
	if (!isOtp) {
			isOtp = true;
			$('.forgot_id ._mobile').hide();
			$('.forgot_id ._otp').show();
			return false;
	}
});
// forgot pw
$('.forgot_pw ._find').on('click', function() {
	var isOtp = false;
	if ($('.radio_tablist._type02 li:eq(0) input[type="radio"]').prop('checked') && !isOtp) {
			isOtp = true;
			$('.forgot_pw ._mobile, .forgot_pw ._email').hide();
			$('.forgot_pw ._otp').show();
			return false;
	}
});

// Only Mobile
$(document).ready(function() {
	if($('.pg-mobile').length > 0) {
		if($('.mypage .lnb_wrap').length > 0) mypageLnb();
	}
});
var mypageLnb= function(){
	$('.lnb_wrap h2').each(function(){  
		var lngTitle = $(this);
		var lngWrap = $(this).parents('.lnb_wrap');

		lngTitle.click(function(){
			if(!lngWrap.hasClass('_active')) {
				lngWrap.addClass('_active')
				$('body').append($Dim);
			}else{
				lngWrap.removeClass('_active')
				$('.dim').remove();
			}
		});
	});

	$window
	.on('resize',function(){    //WINDOW RESIZE
		if(winW > 1024) {
			mypageLnbReset();
		}
	});
}
var mypageLnbReset= function(){
	$('.lnb_wrap').removeClass('_active');
	$('.dim').remove();
}

if( $('a[rel=tooltip]').length > 0 ) {
	$('a[rel=tooltip]').click(function(e) {
		if(!$(this).hasClass('_active')) {
			$(this).addClass('_active')
			var o = {
					left: e.pageX + 15,
					top: e.pageY + 15
			};
			$(".tooltip").addClass('show')
			$(".tooltip").offset(o);
		}else{
			$(this).removeClass('_active')
			$(".tooltip").removeClass('show')
		}
	});

	$(".tooltip").each(function(){  
		$(this).mouseleave(function() {
			$(this).siblings('a[rel=tooltip]').removeClass('_active')
			$(this).removeClass('show')
		});
	});
}
