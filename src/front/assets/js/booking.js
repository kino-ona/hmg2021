
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
	actvTabList('optiontab', 0);
});