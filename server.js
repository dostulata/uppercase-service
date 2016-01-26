var http = require("http");
var url = require("url");

function routeEmAll(response, hndlrs, path, data) {
	console.log("\tPath is "+path);
	if (typeof hndlrs[path] === 'function') {
	    hndlrs[path](data, response);
	} else {
		console.log("No request handler found for " + path);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found\n");
		response.end();
	}
}

function start(hndlrs) {
	function onRequest(request, response) {
		console.log("Processing request...");
		request.setEncoding("utf8");
		var postData = "";
		var data;
		var path = url.parse(request.url).pathname;
		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
		});
		request.addListener("end", function (){
			if (postData) {
				data = JSON.parse(postData).data;
			}
			routeEmAll(response, hndlrs, path, data);
		});
	}
	
	http.createServer(onRequest).listen(8888);
	console.log("Open for business.\n");
}

exports.start = start;
