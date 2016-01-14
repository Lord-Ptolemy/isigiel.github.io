/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-list' : '&#xe000;',
			'icon-text' : '&#xe001;',
			'icon-instagram' : '&#xe002;',
			'icon-twitter' : '&#xe003;',
			'icon-dribbble' : '&#xe004;',
			'icon-ellipsis' : '&#xe005;',
			'icon-dots' : '&#xe006;',
			'icon-bookmark' : '&#xe007;',
			'icon-bookmarks' : '&#xe008;',
			'icon-box' : '&#xe009;',
			'icon-clipboard' : '&#xe00a;',
			'icon-pause' : '&#xe00b;',
			'icon-history' : '&#xe00d;',
			'icon-drawer' : '&#xe00c;',
			'icon-paperclip' : '&#xe00e;',
			'icon-feather' : '&#xe00f;',
			'icon-pencil' : '&#xe010;',
			'icon-compass' : '&#xe011;',
			'icon-map' : '&#xe012;',
			'icon-location' : '&#xe013;',
			'icon-export' : '&#xe014;',
			'icon-megaphone' : '&#xe015;',
			'icon-tag' : '&#xe016;',
			'icon-tools' : '&#xe017;',
			'icon-cog' : '&#xe018;',
			'icon-bell' : '&#xe019;',
			'icon-link' : '&#xe01a;',
			'icon-flag' : '&#xe01b;',
			'icon-leaf' : '&#xe01c;',
			'icon-music' : '&#xe01d;',
			'icon-printer' : '&#xe01e;',
			'icon-flashlight' : '&#xe01f;',
			'icon-popup' : '&#xe020;',
			'icon-search' : '&#xe021;',
			'icon-quote' : '&#xe022;',
			'icon-target' : '&#xe023;',
			'icon-text-2' : '&#xe024;',
			'icon-document' : '&#xe025;',
			'icon-folder' : '&#xe026;',
			'icon-archive' : '&#xe027;',
			'icon-rss' : '&#xe028;',
			'icon-comment' : '&#xe029;',
			'icon-chat' : '&#xe02a;',
			'icon-phone' : '&#xe02b;',
			'icon-vcard' : '&#xe02c;',
			'icon-camera' : '&#xe02d;',
			'icon-cart' : '&#xe02e;',
			'icon-mail' : '&#xe02f;',
			'icon-paperplane' : '&#xe030;',
			'icon-directions' : '&#xe031;',
			'icon-location-2' : '&#xe032;',
			'icon-infinity' : '&#xe033;',
			'icon-light-bulb' : '&#xe034;',
			'icon-credit-card' : '&#xe035;',
			'icon-skype' : '&#xe036;',
			'icon-mouse' : '&#xe037;',
			'icon-mobile' : '&#xe038;',
			'icon-users' : '&#xe039;',
			'icon-user-add' : '&#xe03a;',
			'icon-user' : '&#xe03b;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};