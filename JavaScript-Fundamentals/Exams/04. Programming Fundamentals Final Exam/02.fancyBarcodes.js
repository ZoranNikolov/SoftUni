function fancyBarcodes(input) {
	let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;
	let number = input.shift();

	input.forEach((barcode) => {
		let productGroup = "";
		let found = barcode.match(pattern);

		if (found !== null) {
			let validBarcode = found[0];
			let digits = validBarcode.match(/\d+/g);
			if (digits !== null) {
				productGroup += digits.reduce((a, b) => a + b);
			} else {
				productGroup = "00";
			}
			console.log(`Product group: ${productGroup}`);
		} else {
			console.log("Invalid barcode");
		}
	});
}
fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
// fancyBarcodes([
// 	"6",
// 	"@###Val1d1teM@###",
// 	"@#ValidIteM@#",
// 	"##InvaliDiteM##",
// 	"@InvalidIteM@",
// 	"@#Invalid_IteM@#",
// 	"@#ValiditeM@#",
// ]);
