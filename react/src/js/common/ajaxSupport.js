
var baseUrl = "http://localhost:1234";

var prepareUrl = function(url) {
	if (!url.trim().startsWith("http")) {
			return baseUrl + url;
	}
	return url;
}

var ajaxSupport = {
	get: function(options) {
		options.type = "GET";
		options.url = prepareUrl(options.url);
		options.contentType="application/json";
		return $.ajax(options);
	}
	, post: function(options) {
		options.type = "POST";
		options.contentType="application/json";
		options.url = prepareUrl(options.url);
		return $.ajax(options);
	}

	, put: function(options) {
		options.type = "PUT";
		options.url = prepareUrl(options.url);
		options.contentType="application/json";
		return $.ajax(options);
	}

	, delete: function(options) {
		options.type = "DELETE";
		options.url = prepareUrl(options.url);
		options.contentType="application/json";
		return $.ajax(options);
	}
}


module.exports = ajaxSupport;