function charactersInRangeAlternative(firstChar, secondChar) {

    let rangeStart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let rangeEnd = Math.max(secondChar.charCodeAt(), secondChar.charCodeAt())
    let resultString = ''

    for (let currentChar = rangeStart + 1; currentChar < rangeEnd; currentChar++) {
        let singleChar = String.fromCharCode(currentChar)

        currentChar + 1 === rangeEnd ?
            resultString += `${singleChar}` :
            resultString += `${singleChar} `

    }
    console.log(resultString);
}
charactersInRangeAlternative('#', ':')

/*
function charactersInRange(firstChar, secondChar) {
  let startChar = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
  let endChar = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

  let charsInRangeArray = [];

  for (current = startChar + 1; current < endChar; current++) {
    let currentChar = String.fromCharCode(current);
    charsInRangeArray.push(currentChar);
  }
  console.log(charsInRangeArray.join(" "));
}
charactersInRange("a", "d");
charactersInRange("#", ":");
charactersInRange("C", "#");
*/