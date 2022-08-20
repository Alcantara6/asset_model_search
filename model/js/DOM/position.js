// 出自新编辑器util
function exactRectSize($dom) {
	// 只有getBoundingClientRect会取精确值，其它css('width')、width()、clientWidth都会因浏览器差异取不同的整数值
	var rect = $dom[0].getBoundingClientRect();
	var borderWidth = {
		top: parseInt($dom.css('border-top-width')),
		right: parseInt($dom.css('border-right-width')),
		bottom: parseInt($dom.css('border-bottom-width')),
		left: parseInt($dom.css('border-left-width')),
	}
	return {
		innerWidth: Math.round(rect.width - borderWidth.left - borderWidth.right),
		innerHeight: Math.round(rect.height - borderWidth.top - borderWidth.bottom),
		outerWidth: Math.round(rect.width),
		outerHeight: Math.round(rect.height)
	}
}