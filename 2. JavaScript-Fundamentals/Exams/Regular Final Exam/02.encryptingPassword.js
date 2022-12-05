function encryptingPassword(input) {
	let num = Number(input.shift());

	let pattern =
		/^(.+)>(?<numbers>[0-9]{3})\|(?<loweCaseLetters>[a-z]{3})\|(?<upperCaseLetters>[A-Z]{3})\|(?<symbols>[^<>]{3})<(\1)$/gm;

	for (let i = 0; i < num; i++) {
		let match = input[i].match(pattern);

		if (match !== null) {
			let obj = pattern.exec(input[i]).groups;
			let encryptedPass = "";
			for (const key in obj) {
				encryptedPass += obj[key];
			}
			console.log(`Password: ${encryptedPass}`);
		} else {
			console.log("Try another password!");
		}
	}
}
encryptingPassword([
	"3",
	"##>00|no|NO|!!!?<###",
	"##>123|yes|YES|!!!<##",
	"$$<111|noo|NOPE|<<>$$",
]);
// encryptingPassword([
// 	"5",
// 	"aa>111|mqu|BAU|mqu<aa",
// 	"()>111!aaa!AAA!^&*<()",
// 	"o>088|abc|AAA|***<o",
// 	"asd>asd|asd|ASD|asd<asd",
// 	"*>088|zzzz|ZzZ|123<*",
// ]);
