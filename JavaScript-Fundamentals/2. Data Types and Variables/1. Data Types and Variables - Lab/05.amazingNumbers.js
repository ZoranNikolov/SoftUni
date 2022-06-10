function amazingNumbers(num) {
  let sum = 0;
  num = num.toString();

  for (let i = 0; i < num.length; i++) {
    let curDigit = Number(num[i]);
    sum += curDigit;
  }
  sum = sum.toString();

  if (sum.includes("9")) {
    console.log(`${num} Amazing? True`);
  } else {
    console.log(`${num} Amazing? False`);
  }
}
amazingNumbers(1233);
amazingNumbers(999);
