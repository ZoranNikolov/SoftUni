function rightPlace(str, char, result) {
  str = str.replace("_", char);

  if (str === result) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");