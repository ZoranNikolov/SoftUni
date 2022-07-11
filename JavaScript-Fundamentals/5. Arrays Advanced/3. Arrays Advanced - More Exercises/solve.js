function getLetter(code) {
  let num = code;
  if (code >= 27) {
    num = code % 27;
  }
  let res = " ";
  if (num > 0) {
    res = String.fromCharCode(num + 64);
  } else {
    res
  }

  return res;
}