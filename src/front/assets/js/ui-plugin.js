/*!
 * c2-accordion
 * https://github.com/TheC2Group/accordion
 * @version 2.7.1
 * @license MIT (c) The C2 Group (c2experience.com)
 *
 * 해제 : defaultAcc.destroy();
 */
var Accordion=function(t){"use strict";t="default"in t?t.default:t;var e=0,a={item:".item",target:".acco_head",control:".acco_head",panel:".acco_panel",allowMultiple:!0,attribute:"data-status",expanded:"expanded",contracted:"contracted",prefix:"uacc-",transition:"height .3s",transitionSupport:!0,setFocus:"none",hashEnabled:!1},i=function(t){var e=this.items[t];e.$el.removeAttr("style"),e.isExpanded?function(t){var e=this.opts.setFocus;switch(e){case"item":t.el.focus();break;case"panel":case"target":case"control":t[e].focus();break;case"first":t.$panel.find("a, :input").first().each(function(){this.focus()})}}.call(this,e):e.$panel.attr("aria-hidden","true"),e.inTransition=!1},n=function(t){var e=this.items[t];if(!e.isExpanded){var a=e.$control.outerHeight();e.inTransition||(e.$el.height(a),e.el.getBoundingClientRect(),e.el.style.transition=this.opts.transition,e.inTransition=!0),e.$el.attr(this.opts.attribute,this.opts.expanded),e.$target.attr("aria-expanded","true"),this.opts.allowMultiple||e.$target.attr("aria-selected","true"),e.$panel.attr("aria-hidden","false");var i=e.$panel.outerHeight();this.opts.transitionSupport&&e.$el.height(a+i),e.isExpanded=!0,"target"===this.opts.setFocus&&e.target.focus()}},r=function(t){var e=this.items[t];if(e.isExpanded){var a=e.$control.outerHeight();if(!e.inTransition){var n=e.$panel.outerHeight();e.$el.height(a+n),e.el.getBoundingClientRect(),e.el.style.transition=this.opts.transition,e.inTransition=!0}e.$el.attr(this.opts.attribute,this.opts.contracted),e.$target.attr("aria-expanded","false"),this.opts.allowMultiple||e.$target.attr("aria-selected","false"),this.opts.transitionSupport&&e.$el.height(a),e.isExpanded=!1,this.opts.transitionSupport||i.call(this,t)}},s=function(t){var e=this;this.items.forEach(function(a,i){i!==t&&a.isExpanded&&r.call(e,i)})},o=function(t){this.items[t].isExpanded?r.call(this,t):(this.opts.allowMultiple||s.call(this,t),n.call(this,t))},l=function(){var e=this;this.items.forEach(function(t,a){t.$target.on("click",function(t){e._enabled&&(t.preventDefault(),o.call(e,a))}),t.$el.on("transitionend",function(t){e._enabled&&t.target===t.delegateTarget&&i.call(e,a)}),t.$target.on("keydown",function(t){e._enabled&&function(t,e){return 13===t.which||32===t.which?(t.preventDefault(),void o.call(this,e)):35===t.which?(t.preventDefault(),void this.items[this.items.length-1].target.focus()):36===t.which?(t.preventDefault(),void this.items[0].target.focus()):37===t.which||38===t.which?(t.preventDefault(),void function(t){var e=t-1;e<0&&(e=this.items.length-1),this.items[e].target.focus()}.call(this,e)):39===t.which||40===t.which?(t.preventDefault(),void function(t){var e=t+1;e>=this.items.length&&(e=0),this.items[e].target.focus()}.call(this,e)):void 0}.call(e,t,a)})}),t(window).on("hashchange",function(){e.opts.hashEnabled&&e._enabled&&c.call(e)})},c=function(){var t=this;if(document.location.hash){var e=document.location.hash.split("#")[1];t.items.forEach(function(a,i){a.el.dataset.hash===e&&o.call(t,i)})}},h=function(i,n){e+=1,this.count=e,this.$el=t(i),this.opts=t.extend({},a,n),this._enabled=!0,this.$el.attr("role")||this.$el.attr("role","tablist"),this.opts.allowMultiple&&this.$el.attr("aria-multiselectable","true"),this.items=function(){var e=this;return t.map(this.$el.find(this.opts.item),function(a,i){var n=t(a),r=n.find(e.opts.target),s=e.opts.target===e.opts.control?r:n.find(e.opts.control),o=n.find(e.opts.panel);r.attr("role")||r.attr("role","tab"),o.attr("role")||o.attr("role","tabpanel");var l=n.attr(e.opts.attribute),c=l===e.opts.expanded;switch(l||n.attr(e.opts.attribute,c?e.opts.expanded:e.opts.contracted),r.attr("aria-expanded",c),e.opts.allowMultiple||r.attr("aria-selected",c),o.attr("aria-hidden",!c),e.opts.setFocus){case"item":if(n.attr("tabindex"))return;n.attr("tabindex","-1");break;case"panel":if(o.attr("tabindex"))return;o.attr("tabindex","-1");break;case"target":if(r.attr("tabindex"))return;r.attr("tabindex","0");break;case"control":if(s.attr("tabindex"))return;s.attr("tabindex","-1")}var h=r.attr("id");return h?r.attr("data-original-id",!0):(h=e.opts.prefix+e.count+"-"+(i+1),r.attr("id",h)),o.attr("aria-labelledby")?o.attr("data-original-labelledBy",!0):o.attr("aria-labelledby",h),{$el:n,el:a,$target:r,target:r[0],$control:s,control:s[0],$panel:o,panel:o[0],isExpanded:c,inTransition:!1}})}.call(this),l.call(this),this.opts.hashEnabled&&c.call(this)};return h.prototype.activate=o,h.prototype.expand=n,h.prototype.contract=r,h.prototype.contractAll=s,h.prototype.enable=function(){return this._enabled=!0,this},h.prototype.disable=function(){return this._enabled=!1,this},h.prototype.destroy=function(){(function(){this._enabled=!1}).call(this)},h}(jQuery);

/*!
 * c2-event-handler
 * https://github.com/TheC2Group/event-handler
 * @version 2.5.2 (c) The C2 Group (c2experience.com)
 * @license MIT
 */
var eventHandler=function(){"use strict";var t=function(e,n){var i=this;"string"==typeof e&&e.length&&void 0!==n&&(e.indexOf(" ")>-1?e.split(" ").forEach(function(e){t.call(i,e,n)}):(this._events=this._events||{},this._events[e]=this._events[e]||[],this._events[e].push(n)))},e=function(t,n){var i=this;if("string"==typeof t&&t.length)if(t.indexOf(" ")>-1)t.split(" ").forEach(function(t){e.call(i,t,n)});else if(this._events=this._events||{},t in this._events!=!1)if(void 0!==n){var s=this._events[t].indexOf(n);s>-1&&(1===this._events[t].length?delete this._events[t]:this._events[t].splice(s,1))}else delete this._events[t]},n=function(t){for(var e=this,i=arguments.length,s=Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];var f=t.lastIndexOf(":");f>-1&&n.call.apply(n,[this,t.substring(0,f)].concat(s)),this._events=this._events||{},t in this._events!=!1&&this._events[t].forEach(function(t){t.apply(e,s)})},i=function(){},s=i.prototype;s.on=t,s.off=e,s.emit=n,s.bind=t,s.unbind=e,s.trigger=n;var o=function(s){return 0===arguments.length?new i:("function"==typeof s&&(s.prototype.on=t,s.prototype.off=e,s.prototype.emit=n),"object"==typeof s&&(s.on=t,s.off=e,s.emit=n),s)};return o.EventConstructor=i,o}();

/*!
* c2-tabs
* https://github.com/TheC2Group/tabs
* @version 2.2.2
* @license MIT (c) The C2 Group (c2experience.com)
*/
var Tabs=function(t,i){"use strict";var a=0,e={tablist:".tab_wrap .tablist",tab:".tablist .tab",panel:".tab_contents .tab_panel",prefix:"utabs-",hashEnabled:!1,direction:"horizontal"},n=37,l=39,s=38,r=40,o=function(){var t=this.index-1;t<0&&(t=this.len-1),c.call(this,t)},h=function(){var t=this.index+1;t>=this.len&&(t=0),c.call(this,t)},d=function(t,i){return t.which===n&&"horizontal"===this.opts.direction?(t.preventDefault(),void o.call(this,i)):t.which===l&&"horizontal"===this.opts.direction?(t.preventDefault(),void h.call(this,i)):t.which===s&&"vertical"===this.opts.direction?(t.preventDefault(),void o.call(this,i)):t.which===r&&"vertical"===this.opts.direction?(t.preventDefault(),void h.call(this,i)):void 0},c=function(t){if(t!==this.index){var i=this.index;this.index=t,this.$tabs.eq(i).attr({"aria-selected":!1,tabindex:-1}),this.$panels.eq(i).attr({"aria-hidden":!0,tabindex:-1}),this.$tabs.eq(t).attr({"aria-selected":!0,tabindex:0})[0].focus(),this.$panels.eq(t).attr({"aria-hidden":!1,tabindex:0}),this.emit("update",t)}},b=function(){if(document.location.hash){var t=document.location.hash.split("#")[1],i=this.$tabs.filter('[data-hash="'+t+'"]');i.length>0&&c.call(this,i.index())}},p=function(i,n){a+=1,this.count=a,this.opts=t.extend({},e,n),this.$el=t(i),this.$tablist=this.$el.find(this.opts.tablist),this.$tabs=this.$el.find(this.opts.tab),this.$panels=this.$el.find(this.opts.panel),this._enabled=!0,this.len=this.$tabs.length,this.index=0,function(){var i=this;this.$tablist.attr("role")||this.$tablist.attr("role","tablist"),this.$tabs.each(function(a,e){var n=t(e).attr("id");t(e).attr({role:"tab",tabindex:a===i.index?0:-1,"aria-selected":a===i.index}),n?t(e).attr("data-original-id",!0):t(e).attr({id:i.opts.prefix+i.count+"-"+(a+1)})}),this.$panels.each(function(a,e){var n=t(e).attr("aria-labelledby");t(e).attr({role:"tabpanel",tabindex:a===i.index?0:-1,"aria-hidden":a!==i.index}),n?t(e).attr("data-original-labelledBy",!0):t(e).attr({"aria-labelledby":i.opts.prefix+i.count+"-"+(a+1)})})}.call(this),function(){var i=this;i.$tabs.on("click",function(t){c.call(i,i.$tabs.index(t.currentTarget))}),i.$tabs.on("keydown",function(t){d.call(i,t)}),i.$panels.on("keydown",function(t){t.ctrlKey&&d.call(i,t)}),t(window).on("hashchange",function(){i.opts.hashEnabled&&i._enabled&&b.call(i)})}.call(this),this.opts.hashEnabled&&b.call(this)};return i(p),p.prototype.activate=c,p.prototype.activateNext=h,p.prototype.activatePrevious=o,p.prototype.destroy=function(){(function(){this.$tablist.removeAttr("role"),this.$tabs.each(function(i,a){t(a).attr("id"),t(a).attr("data-original-id")||t(a).removeAttr("id"),t(a).removeAttr("role tabindex aria-selected data-original-id")}),this.$panels.each(function(i,a){t(a).attr("aria-labelledby"),t(a).attr("data-original-labelledBy")||t(a).removeAttr("aria-labelledby"),t(a).removeAttr("role tabindex aria-hidden data-original-labelledBy")})}).call(this),function(){this.$tabs.off("click keydown"),this.$panels.off("keydown"),this._enabled=!1}.call(this)},p}(jQuery,eventHandler);

/*!
*  layer popup control
*/
var isOpen = false;
function hlayerOpen(layerId){
	var curPos = $(window).scrollTop();
	$('html').addClass('noscroll');
	$('#' + layerId).addClass('is-visible');
	var layerID = $('#' + layerId);
	layerID.attr({
		'aria-hidden': 'false',
		'open': 'true',
		'tabindex': '0'
	});
	if($('[role="dialog"]:visible').length <= 1 && isOpen == false) {
		$('.wrap').css('top',-curPos);
		isOpen = true
	}
	var delay = setTimeout(function(){
		if(!$('html').hasClass('noscroll')){
			$('html').addClass('noscroll');
		}
		clearTimeout(delay);
	}, 50);
}
function hlayerClose(layerId){
	var curPos = -(parseInt($('.wrap').css('top')));
	$('#' + layerId).removeClass('is-visible');
	$('#' + layerId).attr('aria-hidden', 'true');
	// $('#' + layerId).removeAttr('open tabindex');
	$('html').removeClass('noscroll');
	if ($('[role="dialog"].is-visible').length < 1) {
		$('html').removeClass('noscroll').find('.wrap').css({'top':0});
		$(window).scrollTop(curPos);
		isOpen = false;
	}
}

/*!
* Dropdown list ui
*/
var dropdownControl = function(){
	$(".dropdown_list .btn_opener").off('click.dropdown').on('click.dropdown', function() {
		var $dropdown = $(this).closest('.dropdown_value'),
				$allDropdown = $('.dropdown_value[aria-expanded="true"]').not($dropdown);
				$dropdown.find('.btn_opener').removeClass('show');
				$allDropdown.removeClass('active');
				$dropdown.siblings('.item_list').removeClass('active');
				$allDropdown.attr('aria-expanded','false');

		if ($dropdown.attr('aria-expanded') == 'true') {
			$dropdown.attr('aria-expanded', 'false');
			$dropdown.siblings('.item_list').removeClass('active');
			$dropdown.siblings('.item_box').removeClass('active');
		} else {
			$dropdown.attr('aria-expanded', 'true');
			$dropdown.siblings('.item_list').addClass('active');
			$dropdown.siblings('.item_box').addClass('active');
			$dropdown.find('.btn_opener').addClass('show');
		}

		return false;
	});
	$('.dropdown_list .item_list').off('click.dropSelect').on('click.dropSelect', 'a, button:not(.option_util) , input[type="radio"]+label', function(e) {
		var $this = $(this),
				$itemList = $this.parents('.item_list'),
				$listWrap = $this.parents('.dropdown_list').find('.dropdown_value');
		var selectedItem = $listWrap.hasClass('valcnt') ? $this.html() : $this.text();

		if (!$this.parent().hasClass('disable')) {
			$this.parent().removeClass('active');
			$listWrap.attr('aria-expanded', 'false');

			$itemList.removeClass('active');
			$itemList.find('li').removeClass('tnow');
			$this.parent('li').addClass('tnow');
			$listWrap.find('.btn_opener').removeClass('show');

			if ($listWrap.hasClass('valcnt')) {
				$listWrap.find('input[type=text]').html(selectedItem);
			} else {
				$listWrap.find('input[type=text]').val(selectedItem);
			}
		}
	});
	$(document).click(function(e) {
		if (!($('.dropdown_list').has(e.target).length || $('.dropdown_list').is($(e.target)))) {
			$('.dropdown_list').removeClass('active');
			$('.dropdown_list').attr('aria-expanded','false');
			$('.dropdown_list .btn_opener').removeClass('show');
		}
	});
	$('.dropdown_list .btn_opener').on('keydown', function(e) {
		if (e.keyCode == 9 && e.shiftKey) {
			$(".dropdown_list").removeClass('active');
			$('.dropdown_list').attr('aria-expanded','false');
			$('.dropdown_list .btn_opener').removeClass('show');
		}
	});
	$('.dropdown_list .item_list [role="option"]').on('keydown', function(e){
		if (e.keyCode == 9 && !e.shiftKey) {
			$(".dropdown_list").removeClass('active');
			$('.dropdown_list').attr('aria-expanded','false');
			$('.dropdown_list .btn_opener').removeClass('show');
		}
	});

	$('.dropdown_list .item_box').off('click.dropSelect').on('click.dropSelect', 'a, button:not(.option_util) , input[type="radio"]+label', function(e) {
		var $this = $(this),
				$itemBox = $this.parents('.item_box'),
				$listWrap = $this.closest('.dropdown_list');
				console.log('test')
		var selectedItem = $listWrap.hasClass('valcnt') ? $this.html() : $this.text();

		if (!$this.parent().hasClass('disable')) {
			$listWrap.removeClass('active');
			$listWrap.attr('aria-expanded', 'false');
			$listWrap.find('btn_opener').attr("aria-expanded", "false");

			$listWrap.find('li').removeClass('tnow');
			$this.parent('li').addClass('tnow');

			if ($listWrap.hasClass('valcnt')) {
				$listWrap.find('[role="combobox"]').html(selectedItem);
			} else {
				$listWrap.find('[role="combobox"]').val(selectedItem);
			}
		}
	});
}
