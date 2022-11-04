function aggregate(params) {
	function Sum(params) {
		return params.reduce((acc, val) => acc + val, 0);
	}
	function Inverse(params) {
		return params.reduce((acc, val) => acc + 1 / val, 0);
	}
	function Concat(params) {
		return params.reduce((acc, val) => String(acc) + String(val));
	}
	console.log(Sum(params));
	console.log(Inverse(params));
	console.log(Concat(params));
}
aggregate([1, 2, 3]);
