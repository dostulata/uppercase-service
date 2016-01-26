var server = require("./server");
var reqHndlrs = require("./reqhandlers");

var hndlrs = {};
hndlrs["/upper/string"] = reqHndlrs.strTransform;
hndlrs["/upper/array"] = reqHndlrs.arrTransform;

server.start(hndlrs);
