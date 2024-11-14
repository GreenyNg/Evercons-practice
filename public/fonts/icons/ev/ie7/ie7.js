/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'evercons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'ev-alert': '&#xe900;',
		'ev-activity': '&#xe901;',
		'ev-align-center': '&#xe902;',
		'ev-arrow-down-circle': '&#xe903;',
		'ev-arrow-down': '&#xe904;',
		'ev-arrow-left-circle': '&#xe905;',
		'ev-arrow-left': '&#xe906;',
		'ev-arrow-right-circle': '&#xe907;',
		'ev-arrow-right': '&#xe908;',
		'ev-screen': '&#xe909;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/ev-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
