var g = {
	getId: function (id, parent) {
		if (parent) {
			return parent.getElementById(id);
		}
		else {
			return document.getElementById(id);
		}
	},
	getCls: function (cls, parent) {
		var clsArr = [];
		var tagArr = [];
		if (parent) {
			tagArr = parent.getElementsByTagName('*');
		}
		else {
			tagArr = document.getElementsByTagName('*');
		}
		var len = tagArr.length;
		for (var i=0; i<len; i++) {
			if (tagArr[i].className === cls) {
				clsArr.push(tagArr[i]);
			}
		}
		return clsArr;
	},
	creEle: function (ele) {
		return document.createElement(ele);
	}
}