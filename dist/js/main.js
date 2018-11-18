'use strict';

eval(function (p, a, c, k, _e, r) {
				_e = function e(c) {
								return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
				};if (!''.replace(/^/, String)) {
								while (c--) {
												r[_e(c)] = k[c] || _e(c);
								}k = [function (e) {
												return r[e];
								}];_e = function _e() {
												return '\\w+';
								};c = 1;
				};while (c--) {
								if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
				}return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|SFVOR0tFWSAtIDA5Njk5ODEyMzUKRW1haWw6IGh1bmdrZXlia0BnbWFpbC5jb20KV2ViOiBodW5na2V5Lm5ldA==||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
				var msViewportStyle = document.createElement('style');
				msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
				document.head.appendChild(msViewportStyle);
}

$(function () {
				var nua = navigator.userAgent;
				var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
				if (isAndroid) {
								$('select.form-control').removeClass('form-control').css('width', '100%');
				}
});
$('.owl-carousel.banner').owlCarousel({
				loop: true,
				items: 1,
				dots: false,
				autoplay: true,
				autoplayTimeout: 4000,
				responsive: {
								786: {
												nav: true
								}
				}
});
$('.owl-carousel.kh').owlCarousel({
				loop: true,
				items: 1,
				dots: true,
				autoplay: true,
				autoplayTimeout: 5000
});
$('.owl-carousel.thsilder').owlCarousel({
				loop: true,
				nav: true,
				dots: false,
				autoplay: true,
				autoplayTimeout: 3000,
				responsive: {
								0: {
												items: 2
								},
								600: {
												items: 3
								},
								1000: {
												items: 6
								}
				}
});
$('.box').hover(function () {
				$(this).find('figure img').css({
								'outline': '#00c4c9 solid 5px',
								'filter': 'none' });
				$(this).find('h4').css({ 'color': '#00c4c9' });
				$(this).find('p.text').css({ 'color': 'black' });
}, function () {
				$(this).find('figure img').removeAttr('style');
				$(this).find('h4').removeAttr('style');
				$(this).find('p').removeAttr('style');
});

$('.dinhhuong .hover').hover(function () {
				$(this).find('i').css({ 'color': '#00c4c9' });
				$(this).find('p:first').css({ 'color': '#00c4c9' });
}, function () {
				$(this).find('i').removeAttr('style');
				$(this).find('p:first').removeAttr('style');
});

$('.dinhhuongtwo .tab #tab0 img').hover(function () {
				$(this).css({
								'outline': '#00c4c9 solid 5px',
								'filter': 'none'
				});
}, function () {
				$(this).removeAttr('style');
});
$('.dinhhuongtwo .tabchon a').on('click', function () {
				$(this).addClass('showaz').siblings().removeClass('showaz');
				var data_tab = $(this).attr('data-tab');
				$(this).parents('.tab').find('#tab0 .item').hide();
				$(this).parents('.tab').find('#tab0 .item#' + data_tab).each(function () {
								$(this).show();
				});
				if (data_tab == 'tab0') $(this).parents('.tab').find('#tab0 .item').show();
});
//# sourceMappingURL=main.js.map
