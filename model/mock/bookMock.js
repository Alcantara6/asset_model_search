let generateBook = function (params) {
	if (params.id) {
		return Mock.mock({
			"books": [{
				"id|+1": params.id,
				"cover": "@dataImage('200x200')",
				"name": "@ctitle()",
				"description": "@csentence()",
				"author": "@cname()",
				"publishDate": "@date('yyyy-MM-dd')",
				"publishHouse": "@region()出版社",
				"address": "@province @city() @county()"
			}]
		});
	} else {
		return Mock.mock({
			"books|15": [{
				"id|+1": 1,
				"cover": "@dataImage('200x200')",
				"name": "@ctitle()",
				"description": "@csentence()",
				"author": "@cname()",
				"publishDate": "@date('yyyy-MM-dd')",
				"publishHouse": "@region()出版社",
				"address": "@province @city() @county()"
			}]
		});
	}
}