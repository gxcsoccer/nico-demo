define("arale/fixed/1.0.1/fixed", ["$"], function(o, i, a) {
	var d = o("$"),
		s = {
			position: null,
			top: null
		},
		t = d.browser.msie && 6 == d.browser.version,
		e = function(o, i) {
			o = d(o), i = i || 0;
			var a = d(document);
			if (!o.data("bind-fixed")) {
				var e = o.offset().top;
				i = e >= i ? i : e;
				for (var n in s) s.hasOwnProperty(n) && (s[n] = o.css(n));
				var f = t ?
				function() {
					var d = e - a.scrollTop();
					i >= d ? (o.css({
						position: "absolute",
						top: i + a.scrollTop()
					}), o.data("_fixed", !0)) : o.data("_fixed") && d > i && (o.css(s), o.data("_fixed", !1))
				} : function() {
					var d = e - a.scrollTop();
					!o.data("_fixed") && i >= d ? (o.css({
						position: "fixed",
						top: i
					}), o.data("_fixed", !0)) : o.data("_fixed") && d > i && (o.css(s), o.data("_fixed", !1))
				};
				f(), d(window).on("scroll", f), o.data("bind-fixed", !0)
			}
		};
	a.exports = e
});