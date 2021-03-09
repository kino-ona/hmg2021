
var keySwiper = new Swiper('.ctb_booking.type_a .keyvisual .swiper-container', {
	pagination: {
		el: '.swiper-pagination',
	},
});

var buildSwiper = new Swiper('.ctb_booking.type_a .vehicles .swiper-container', {
	slidesPerView: 5,
	slidesPerGroup: 5,
	watchOverflow: true,
	allowTouchMove: true,
	simulateTouch: true,
	pagination: {
			el: '.swiper-pagination',
			clickable: true
	},
	breakpoints: {
		1240: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 8
		}
	}
});

$(document).ready(function(){
	actvTabList('opttab', 0);

	$('.nearby .btn_search').on('click', function(){
		$('.nearby .search_box').hide();
		$('.nearby .result_box').show();
	});

	// customer type radio
	var chkRadio = $('.ctb_booking.type_a .confirm input[type="radio"]');
	var selCompany = $('.select_company');
	chkRadio.on('click', function(){
		if ($(this).hasClass('select_control')) {
			selCompany.css('visibility','visible');
		} else {
			selCompany.css('visibility','hidden');
		}
	});
});