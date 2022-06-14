function rightPlace(str, char, result) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (currentChar === "_") {
      res += char;
    } else {
      res += currentChar;
    }
  }
  if (res === result) {
    console.log("Matched");
  } else {
    console.log("Not matched");
  }
  // str = str.replace("_", char);

  // if (str === result) {
  //   console.log("Matched");
  // } else {
  //   console.log("Not Matched");
  // }
}
rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");
