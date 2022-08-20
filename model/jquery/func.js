function allImgLoad($imgs, callback) {
	var num = $imgs.length;
	$imgs.load(function () {
		num--;
		if (num > 0) {
			return;
		}
		callback();
	})
}

function allImgLoad($imgs, callback) {
	var defereds = [];

	$imgs.each(function () {
		var dfd = $.Deferred();

		$(this).load(dfd.resolve);
		defereds.push(dfd);
	}); $.when.apply(null, defereds).done(function () {
		callback();
	});
}