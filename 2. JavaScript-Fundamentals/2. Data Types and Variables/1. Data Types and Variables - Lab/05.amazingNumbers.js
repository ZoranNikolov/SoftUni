function amazingNumbers(num) {
  let sum = 0;
  num = num.toString();

  for (let i = 0; i < num.length; i++) {
    let curDigit = Number(num[i]);
    sum += curDigit;
  }
  sum = sum.toString();
  console.log(`${num} Amazing? ${sum.includes("9") ? "True" : "False"}`);
  // console.log(
  //   `${num} Amazing? ${(sum =
  //     sum.toString().indexOf("9") >= 0 ? "True" : "False")}`
  // );
  // let isAmazing = false;
  // for (let j = 0; j < sum.length; j++) {
  //   if (Number(sum[j]) === 9) {
  //     isAmazing = true;
  //     break;
  //   }
  // }
  // let amazing = isAmazing ? "True" : "False";
  // console.log(`${num} Amazing? ${amazing}`);
}
amazingNumbers(1233);
amazingNumbers(999);
