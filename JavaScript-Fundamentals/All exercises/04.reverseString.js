function reverseString(string) {
  let curChar = "";
  for (let i = string.length - 1; i >= 0; i--) {
    curChar += string[i];
  }
  console.log(curChar);
}
reverseString("Hello");
reverseString("SoftUni");
reverseString("1234");