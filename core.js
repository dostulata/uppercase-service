function stringTransform(string) {
	return(string.toUpperCase());
}

function arrTransform(arr) {
	var res = [];
	arr.forEach(function(item, i, arr){
		res.push(stringTransform(item));
	})
	return(res);	
}

console.log(stringTransform("fuck-you-asshole!!"));

//var arr = new StringArray(["жопа", "сиськи", "яйца!!!"])
console.log(arrTransform(["жопа", "сиськи", "яйца!!!"]))
