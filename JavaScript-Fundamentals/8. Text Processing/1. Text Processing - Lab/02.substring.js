function substring(string, startIndex, countElements) {
    let endIndex = startIndex + countElements
    let result = string.substring(startIndex, endIndex);
    console.log(result);
}
substring('ASentence', 1, 8)