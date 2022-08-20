// 查找key    
let findIncluded= function (targetArr) {
    try {
        for (let key of Object.keys(this)) {
            if (targetArr.includes(key)) {
                return key;
            }
        }
    }
    catch (error) {
        alert(error.message);
    }
}

// 获取URL查询参数
var getPathParams = function () {
	let _pathParms = {}
	let _href = location.href
	if (_href.indexOf("?") != -1) {
		let _param = _href.substring(_href.indexOf("?") + 1)
		let _parts = _param.split("?")
		for (let _index in _parts) {
			let _part = _parts[_index]
			let _params = _part.split("&")
			_params.forEach(c => {
				let _c = c.split("=")
				_pathParms[_c[0]] = _c.length > 1 ? _c[1] : ""
			})
		}
	}
	return _pathParms;
}
// 字符串化查询参数
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return decodeURIComponent(r[2]);
	}
}

// 序列化参数
var createPathParams = (obj) => {
	let params = '';
	for (let k of Object.keys(obj)) {
		params += `&${k}=${obj[k]}`;
	}
	return params.replace('&', '');
}


// ES5合并对象
var objAssign = function (o, n) {
	var keyArr = Object.keys(n);
	for (var i = 0; i < keyArr.length; i++) {
		o[key] = n[keyArr[i]]
	}
	return o;
}

// TODO: 函数太长，需优化
// 递归，如果该属性的值及子属性的值都为空，则删除该属性
deleteEmptyProp(obj: { [key: string]: any }): { [key: string]: any } {
for (const prop of Object.keys(obj)) {
	let isEmpty = true;
	checkEmpty(obj[prop]);
	if (isEmpty) {
		delete obj[prop];
	}

	function checkEmpty(values) {
		// 数组：检查每一项
		if (Array.isArray(values)) {
			for (const value of values) {
				checkEmpty(value);
			}
			return;
		}
		// 对象： 检查每个属性
		if (typeof values === 'object') {
			for (const key of Object.keys(values)) {
				checkEmpty(values[key]);
			}
			return;
		}
		// 存在基本类型的值
		isEmpty = false;
	}
}
return obj;
}

describe('deleteEmptyProp', () => {
	it('1. 空对象', () => {
		const mockObj = {};

		utils.deleteEmptyProp(mockObj);

		expect(mockObj).toEqual({});
	});

	it('2. 对象有个属性是空对象', () => {
		const mockObj = {
			foo: 123,
			bar: {}
		} as any;

		utils.deleteEmptyProp(mockObj);

		expect(mockObj).toEqual({
			foo: 123
		});
	});

	it('3. 对象有个属性是空数组', () => {
		const mockObj = {
			foo: 123,
			bar: []
		} as any;

		utils.deleteEmptyProp(mockObj);

		expect(mockObj).toEqual({
			foo: 123
		});
	});

	it('4. 对象有个属性是空的对象数组', () => {
		const mockObj = {
			foo: 123,
			bar: [{}]
		} as any;

		utils.deleteEmptyProp(mockObj);

		expect(mockObj).toEqual({
			foo: 123
		});
	});

	it('5. 对象有个属性的各级都是空对象/空数组', () => {
		const mockObj = {
			foo: 123,
			bar: {
				baz: {},
				next: []
			}
		} as any;

		utils.deleteEmptyProp(mockObj);

		expect(mockObj).toEqual({
			foo: 123
		});
	});

	it('6. 对象的子属性的不是空对象/空数组', () => {
		const mockObj = {
			foo: 123,
			bar: {
				baz: {},
				next: true
			}
		} as any;

		utils.deleteEmptyProp(mockObj);

		expect(mockObj).toEqual({
			foo: 123,
			bar: {
				baz: {},
				next: true
			}
		});
	});
});