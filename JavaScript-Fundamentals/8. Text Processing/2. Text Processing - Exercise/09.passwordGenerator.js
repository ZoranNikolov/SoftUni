function passwordGenerator(arr) {
	const firstStr = arr[0];
	const secondStr = arr[1];
	const word = arr[2].toUpperCase();
	let concatStr = firstStr.concat(secondStr).toLowerCase();
	let vowelCounter = 0;
	const vowels = ["a", "e", "i", "o", "u"];

	let password = getReplacedVowels(concatStr).split("").reverse().join("");

	console.log(`Your generated password is ${password}`);

	for (const char of concatStr) {
		for (const vowel of vowels) {
			if (char === vowel) {
				vowelCounter++;
			}
		}
	}
	function getReplacedVowels(string) {
		let index = 0;
		for (let i = 0; i < concatStr.length; i++) {
			let currentChar = concatStr[i];
			let isVowel = false;
			for (const vowel of vowels) {
				if (vowel === currentChar) {
					isVowel = true;
					break;
				}
			}
			if (isVowel) {
				while (i < concatStr.length) {
					let wordChar = word[index++];
					if (index === word.length) {
						index = 0;
					}
					concatStr = concatStr.replace(currentChar, wordChar);
					break;
				}
			}
		}
		return concatStr;
	}
}
passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
passwordGenerator([
	"areyousureaboutthisone",
	"notquitebutitrustyou",
	"disturbed",
]);
