function strTransform(string, response) {
	console.log("Trying to handle string...");
	if (typeof(string) === "string") {
		returnRes(string.toUpperCase(), response);
	} else {
		returnRes(string, response, 1);
	}	
}

function arrTransform(arr, response) {
	console.log("Trying to handle array...");
	var res = [];
	if (arr instanceof Array) {
		arr.forEach(function(item, i, arr) {
			if(typeof(item) === "string") {
				res.push(item.toUpperCase());
			}
		})
		returnRes(res, response);
	} else {
		returnRes(res, response, 1);
	}
}

function returnRes(data, response, error) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	if (error === undefined) {
		response.write("\n");
		response.write("{\"result\":"+JSON.stringify(data)+"}\n");	
	} else {
		response.write("No valid data.\n");
	}
	response.end();
	console.log("Processed.")
}

exports.strTransform = strTransform;
exports.arrTransform = arrTransform;
