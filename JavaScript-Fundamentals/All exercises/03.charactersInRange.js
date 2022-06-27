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
