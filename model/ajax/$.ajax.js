// ajax请求
var req = {
	apis: {
		baseUrl: location.host.indexOf('test') === -1 ? 'https://ylc.hx168.com.cn/ylcgate/api/v2.0':'https://kftest.hx168.com.cn/ylcgate/api/v2.0',
		// 直播详情
		liveDetail: '/content/banner/liveInfo/'
	},
	get: function (url, params) {
		return this.request('GET', url, params);
	},
	post: function (url, params) {
		return this.request('POST', url, params);
	},
	request: function (method, url, params) {
		var results = 
		$.ajax({
			url: url.indexOf('http') != -1?url:this.apis.baseUrl + url,
			method: method,
			data: params || null
		});
		return results;
	}
}

// 通常没有必要直接调用这个函数，可以使用几个已经封装的简便方法，
// 如$.get()和.load()。如果你需要用到那些不常见的选项，那么， $.ajax()使用起来更灵活。

$.ajax({ 
  type: "GET", 	
	url: 'ylc.hx168.com.cn',
	data: {},  // 发送到服务器的数据。将自动转换为请求字符串格式。GET 请求中将附加在 URL 后面。
	dataType: "Intelligent Guess",  // xml,html,script,json,jsonp,预期服务器返回的数据类型。如果不指定，jQuery 将自动根据 HTTP 包 MIME 信息来智能判断
	contentType: "application/x-www-form-urlencoded; charset=UTF-8",  // zepto文档：也可再headers中设置
	headers: {},  // 设置会在beforeSend 函数调用之前被设置 ;因此，请求头中的设置值，会被beforeSend 函数内的设置覆盖
	timeout: 0, // 以毫秒为单位的请求超时时间, 0 表示不超时,
	context: $('body'),  // 回调的上下文-this
	beforeSend: function(XHR, settings) {
	}
	success: function(data, status, XHR) {
	},
	error: function(XHR, status, error){
	},
	complete: function(data|XHR, status, XHR|error) {
	}
})
.done(function (data, status, XHR) {

})
.fail(function (XHR, status, error) {

})
.always(function (data|XHR, status, XHR|error) {

})

// Ajax 事件  zepto
ajaxStart (global)：如果没有其他Ajax请求当前活跃将会被触发。

ajaxBeforeSend (data: xhr, options)：再发送请求前，可以被取消。

ajaxSend (data: xhr, options)：像 ajaxBeforeSend，但不能取消。

ajaxSuccess (data: xhr, options, data)：当返回成功时。

ajaxError (data: xhr, options, error)：当有错误时。

ajaxComplete (data: xhr, options)：请求已经完成后，无论请求是成功或者失败。

ajaxStop (global)：如果这是最后一个活跃着的Ajax请求，将会被触发。
$(document).on('ajaxBeforeSend', function(e, xhr, options){
  // This gets fired for every Ajax request performed on the page.
  // The xhr object and $.ajax() options are available for editing.
  // Return false to cancel this request.
})


// $.param  ajax
$.param(object, [shallow])   ⇒ string
$.param(array)   ⇒ string
$.param({ foo: { one: 1, two: 2 }})
//=> "foo[one]=1&foo[two]=2)"

$.param({ ids: [1,2,3] })
//=> "ids[]=1&ids[]=2&ids[]=3"

$.param({ ids: [1,2,3] }, true)
//=> "ids=1&ids=2&ids=3"

$.param({ foo: 'bar', nested: { will: 'not be ignored' }})
//=> "foo=bar&nested[will]=not+be+ignored"

$.param({ foo: 'bar', nested: { will: 'be ignored' }}, true)
//=> "foo=bar&nested=[object+Object]"

$.param({ id: function(){ return 1 + 2 } })
//=> "id=3"