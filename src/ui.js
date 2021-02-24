
$(document).ready(function(){
	$('meta[name=viewport]').attr('content', 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover');

	// initialize
	headFixed();
	if($('[role="tablist"]').length > 0) tabButton();
	if($('.accordion').length > 0) accordionList();
	if($('[role="dialog"]').length > 0) popupLayer();
	// if($('.toggle_trigger').length > 0) toggleContent();
	toggleContent();
	if($('.datepicker, .dateviewer').length > 0) datepicker();
	if($('.app_banner').length > 0) quickAppbarHid();
});
function quickAppbar(){ // appbar show
	var $header = $('#header');
	var $appBnr = $('div.app_banner');
	var $appBnrBtn = $('.app_banner').find('.btn_closer');
	$appBnr.css('display','block');
	// if(('.app_banner').length){
	// 	if($appBnr.css('display') == 'block'){
	// 		$header.css({
	// 			'position':'absolute',
	// 			'top': '56px'
	// 		});
	// 	}
	// }
}
function quickAppbarHid(){ // appbar hide
	var $header = $('#header');
	var $appBnr = $('div.app_banner');
	$('.app_banner').on('click',function(e){
		e.preventDefault();
		$appBnr.hide();
		// $header.css({
		// 	'position':'fixed',
		// 	'top': '0px'
		// });
	});
}

// tab
var tabButton = function() {
	tabInit();
	$(document).on('click', '[role="tablist"]:not(".manual_fn") [role="tab"]:not("label")', function(e) {
		tabControl(this);
		e.preventDefault();
	});
	$(document).on('change', '[role="tablist"]:not(".manual_fn") input[type="radio"]', function() {
		radioTabControl(this);
	});
}

// accordion
var accordionList = function() {
	accordionInit();
	$(document).on('click', '.accordion:not(".manual_fn") .acco_trigger', function(e) {
		accordionControl(this);
		e.preventDefault();
	});
}

// popup
var popupLayer = function() {
	// $('[role="dialog"]').hide();
	$(document).on('click', '[aria-haspopup="dialog"]:not(".manual_fn")', function(e){
		var diaId = '#' + $(this).attr('aria-controls');
		openLayer(diaId);
		e.preventDefault();
	});
	$(document).on('click', '[role="dialog"] .overlay_closer button, .btn_close', function(e){
	// $('[role="dialog"] .overlay_closer button, .btn_close').on('click', function(e){
		closeLayer('#' + $(this).closest('[role="dialog"]').attr('id'));
		e.preventDefault();
	});
}

// toggle
var toggleContent = function() {
	$('.content_toggled').hide();

	$(document).on('click', '.toggle_trigger:not(".manual_fn")', function(e) {
		toggleControl(this);
	});
}

// datepicker
var datepicker = function() {
	$('.datepicker').on('click', function() {
		datepickerControl(this);
	});
	// 개발에 제어권 넘김
	// $('.dateviewer').on('click', function() {
	// 	dateViewer(this);
	// });
}

if( $('#wrap').hasClass('sub-order') ) { // 주문결제
	var cardList = new Swiper('.pay_type', {
		slidesPerView: 1.32,
		spaceBetween: 10,
		initialSlide: 0,
		loop: false,
		autoplay: false
	});
	var orderItems = new Swiper('.order_items', {
		slidesPerView: 2.32,
		spaceBetween: 10,
		initialSlide: 0,
		loop: false,
		autoplay: false
	});
}
$('.change_lang button').click(function(){ // 브랜드 검색 언어 필터 토글
	$('.filter_set').hide();
	$('#' + $(this).attr('aria-controls')).show();
});

$('.favorite [role="checkbox"]').click(function(){ // 찜 버튼 토글
	$(this).attr( 'aria-checked', $(this).attr('aria-checked') == 'false' ? 'true' : 'false' );
});

if( $('#header .view_toggle').length > 0 ) { // 카테고리 메뉴 펼치기
	$('#header .view_toggle .btn_expand').click(function(){
		$('#category_nav').toggleClass('expanded');
		$(this).attr( 'aria-pressed', $(this).attr('aria-pressed') == 'false' ? 'true' : 'false' );
		// 스와이퍼 중단 필요
	});
}

if( $('.list_swipe').length > 0 ) {  // list swipe
	$('.list_swipe .item').each(function(){
		var btnWrap = $(this);
		var btnWidth = $(this).find('.btn_action').width();
		$(this).find('.btn_action').css({
			'right' : '-'+btnWidth+'px',
		});
		$(this).find('.btn_action:before').css({
			'left' : btnWidth+'px',
		});

		$('.list_swipe').listSwipe({
			leftAction: false,
		});
	});
}

if( $('#btn_call-menu').length > 0 ) { // 사이드 메뉴
	$('#btn_call-menu').click(function(){
		slideOpen('#side_gnb');
		return false;
	});
}
if( $('#btn_call-search').length > 0 ) { // 검색
	$('#btn_call-search').click(function(){
		$('#search-product').show();
		return false;
	});
}

if( $('.sort_wrap').length > 0 ) {  // 카테고리 필터 여닫기
	$('.sort_wrap .btn_sort, .sort_wrap .btn_filter').click(function(){
		slideOpen('.sort_wrap');
		return false;
	});
	$('.close_overlay, .overlay_closer').click(function(){
		slideClose('.sort_wrap');
		return false;
	});
}
function sortWrapOpen(){ // 카테고리 필터 여닫기
	if( $('.sort_wrap').length > 0 ) {
		$('.sort_wrap .btn_sort, .sort_wrap .btn_filter').click(function(){
			slideOpen('.sort_wrap');
			return false;
		});
		$('.close_overlay, .overlay_closer').click(function(){
			slideClose('.sort_wrap');
			return false;
		});
	}
	listViewChg();
}

function listViewChg(swiperId){
	$('.select_list-type button').on('click', function(){
		var el = $(this);
		if(swiperId != null){
			var productSwipe = $('#'+swiperId)[0].swiper;
			if(productSwipe != null) {
				productSwipe.destroy();
			}

			if(!$(el).hasClass('btn_view-natural')){
				var productSwipe = new Swiper('#'+swiperId, {
					slidesPerView: "2.5"
				});
				$('#'+swiperId).find('.swiper-wrapper').attr('class','product_swiper-small swiper-wrapper');
			}else{
				var productSwipe = new Swiper('#'+swiperId, {
					slidesPerView: "1.3",
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: 'true',
					}
				});
				$('#'+swiperId).find('.swiper-wrapper').attr('class','product_swiper-wide swiper-wrapper');
			}
		}
		$('.select_list-type button').toggleClass('active');
		$('.product_list-natural, .product_list-wide').toggleClass('product_list-natural product_list-wide');
	});
}


// Special mall
if ($('.spec_mall_cont, .brand_shop').length > 0){
	// Special mall flick navigation
	brandFlickNavi();

	// Special mall Best Item
	$(window).load(function() {
		$('.lineup_list .list').each(function(){
			var $actLineupVal = $(this).find('.actv span').html();
			$('.lineup_list .line-sel a').html($actLineupVal + ' <span class=\"ico_caret\"></span>');
		});
	});
}
function brandFlickNavi(){
	var actvIndex = $('.flick-navigation.specmall_navi ul li.active').index();
	if( !actvIndex ) actvIndex = 0;

	var subNavSwipe = new Swiper('.flick-navigation.specmall_navi', {
		slidesPerView: "auto",
		loop: true,
		initialSlide: actvIndex,
		centeredSlides: true
	});
	$('.flick-navigation.specmall_navi ul li').on('click', function() {
		var idx = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
			subNavSwipe.slideTo(idx);
		if ($('.flick-navigation.specmall_navi ul li').hasClass('active')) {
			subNavSwipe.slideTo(idx);
		}
	});
}
function brandSubCateNavi(){
	$(window).load(function() {
		$('.lineup_list .list').each(function(i){
			var $actLineupVal = $(this).find('.actv span').html();
			if($actLineupVal != undefined) {
				$('.lineup_list .line-sel').eq(i).find('a').html('<span class=\"cate\">' + $actLineupVal + '</span> <span class=\"ico_caret\"></span>');
			}

		});
	});

	// Lineup list select
	$('.lineup_list .line-sel [aria-haspopup="true"]').click(function(){
		var $self = $(this);
		var $selfId = $(this).attr('id');

		if($self.hasClass('catechk')){
			var $target = $self.parents('.lineup_list').find('[aria-labelledby="'+ $selfId +'"]');
		}else {
			var $target = $self.parents('.lineup_list').find('.list');
		};
		if($selfId == 'list_level1'){
			// ui 확인용s
			$('[aria-labelledby="list_level2"]').find('li').removeClass('actv');
			$('[aria-labelledby="list_level2"]').find('li:first-child').addClass('actv');
			// ui 확인용e
			var $resetVal =
			$target.parents('.lineup_list').find('[aria-labelledby="list_level2"]').find('.actv span').text();
			$('.lineup_list .line-sel a#list_level2').html('<span class=\"cate\">' + $resetVal + '</span> <span class=\"ico_caret\"></span>');
		}

		if($target.siblings('.list').attr('aria-hidden') == "false"){
			$target.siblings('.list').attr('aria-hidden','true').hide();
			$self.parent('.line-sel').siblings('.line-sel').find('.catechk').attr('aria-expanded','false');
			$target.attr('aria-hidden','false').css('display','block');
			$self.attr('aria-expanded','true');
		} else {
			$('.lineup_list .overlay-dimmed').toggleClass('on');
			toggleBool($self,'aria-expanded');
			$target.toggle();
			toggleBool($target,'aria-hidden');
		}
		$target.find('li a').off('click').on('click', function() {
			$target.find('li').removeClass('actv');
			$(this).parent().addClass('actv');
			var lineName = $(this).find('span').text();
			// console.log($self);
			$self.html('<span class=\"cate\">' + lineName+'</span> <span class=\"ico_caret\"></span>');
			$self.attr('aria-expanded','false');
			$target.attr('aria-hidden','true');
			$target.hide();
			$('.lineup_list .overlay-dimmed').removeClass('on');

			return false;
		});


		$('.lineup_list .overlay-dimmed').click(function(){
			$(this).removeClass('on');
			$self.attr('aria-expanded','false');
			$target.hide();
		});

		return false;
	});
}

// 상품상세 - 상품설명 더보기
$('.item_guide-more button').on('click', function() {
	if ($(this).attr('aria-pressed') == 'false') {
		$(this).attr('aria-pressed', 'true');
		$(this).find('span').text('닫기');
		$('#item_guide').removeClass('close');

	} else {
		$(this).attr('aria-pressed', 'false');
		$(this).find('span').text('더보기');
		$('#item_guide').addClass('close');
	}
});
// 상품상세 - 구매하기 옵션 레이어
$('.buy_layer .inner.first .sel_option, .buy_layer .list label').on('click', function() {
	$(this).parentsUntil('.chapter').parent('.chapter').hide().next().show();
});

// 마이페이지 좌우 슬라이드
if ($(".mylotte_main .page_swipe").length) {
	var swiper = new Swiper('.page_swipe', {
		autoHeight:true,
		on: {
			slideChange: function() {
				$('.tab_default').find('li button').attr('aria-selected', false);
				$('.tab_default').find('li:eq('+this.activeIndex+') button').attr('aria-selected', true);
			}
		}
	});

	$('.tab_default button').on('click', function() {
		if ($(this).attr('aria-selected') == 'false') {
			swiper.slideTo($(this).closest('li').index());
		}
	});
}
if ($(".interest_box.swiper-container").length) {
     var interestSwiper = new Swiper('.interest_box.swiper-container', {
        slidesPerView: 'auto',
        grabCursor: true,
        observer: true,
        observeParents: true,
    });
}

// 1:1 문의하기 문의타입 선택
$('.chat .question_type button').on('click', function() {
	$(this).addClass('on').siblings().removeClass('on');
});

// product view color chip select text change
function colorChipTxt(){
	if($('.beauty_area').length > 0){
		$('.beauty_area .list').find('a').click(function(e){
			e.preventDefault();
			var colorTxt = $(this).find('img').attr('alt');
			if (!$(this).parents('li').hasClass('disable')) {
				$(this).parents('li').addClass('selected');
				$(this).parents('li').siblings().removeClass('selected');
				$(this).parents('.beauty_area').find('.color span:last-child').text(colorTxt);
			}
		});
	}
}

$(window).scroll(function(event) {
	var st = $(this).scrollTop();
	if(st > 50){
		$(".btn.gotop").addClass('on');
		$(".btn.chatbot").addClass('ton');
	}else{
		$(".btn.gotop").removeClass('on');
		$(".btn.chatbot").removeClass('ton');
	}
});
$(".btn.chatbot .txt").addClass('on');
if($(".btn.chatbot .txt.on").length > 0) {
	var chatBotOn = setTimeout(function() {
		$(".btn.chatbot .txt").removeClass('on');
	}, 2000);
	clearTimeout();
}
$("#gotoTop").click(function () {
   $("html, body").animate({scrollTop: 0}, 700);
});


// 주문서, 쇼핑백 하단 여백
if($('.order_total').length > 0) {
	$('#footer, .quick_menu').addClass('fixed_total');
}

if($('.sub-cart').length > 0){
	if($('[role="tabpanel"]').eq(0).find('.subtotal').length > 0) {
		$('#footer, .quick_menu').addClass('fixed_total');
	}
	$('[role="tab"]').on('click', function(){
		var activePanel = $(this).attr('aria-controls');
		if($('#'+activePanel).find('.subtotal').length > 0) {
			$('#footer, .quick_menu').addClass('fixed_total');
		}else{
			$('#footer, .quick_menu').removeClass('fixed_total');
		}
	});
}

// (구)매거진 ( shop the Story ) - 180917 sticky js 추가
if($('.magazine_search').length > 0) {
	var $tagSearch = $('.magazine_search').find('div.tag_wrap'),
		$win = $(window),
		offsetTop = $tagSearch.offset().top;

	$win.on('scroll',function() {
		scrollPosition = $win.scrollTop();
		(scrollPosition > offsetTop) ? $tagSearch.addClass('pinned') : $tagSearch.removeClass('pinned');
	});
}

// var	offsetTop = [];
// $('.shop_main .section:not(:first-child), .category-big .section:not(:first-child)').each(function(i){
// 	offsetTop[i] = $(this).offset().top;
// });
// $(window).scroll(function() {
//   var scrollTop = $(this).scrollTop();
// 	var windowBottom = $(this).scrollTop() + $(this).height() + 50;
//
// 	$('.shop_main .section:not(:first-child), .category-big .section:not(:first-child)').each(function(i){
// 		// var $this = $(this),
// 		// 	per  = (windowBottom - offsetTop[i]) / $this.outerHeight();
// 		// if (per >= .5) {
// 		// 	per = 1;
// 		// 	$(this).animate({
// 		// 		opacity: per,
// 		// 	},200);
// 		// } else if (per <= 0) {
// 		// 	per = 0;
// 		// }
// 		// $this.css({
// 		// 	opacity: per
// 		// });
//
// 	  $(this).css({
// 	    opacity: function() {
// 	      var elementHeight = (windowBottom - offsetTop[i]) / $(this).outerHeight(),
// 	          opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.3) + 0.25;
//
// 	      // var elementHeight = $(this).height(),
// 	      //     opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.3) + 0.25;
//
// 	      return opacity;
// 	    }
// 	  });
// 	});
// });
