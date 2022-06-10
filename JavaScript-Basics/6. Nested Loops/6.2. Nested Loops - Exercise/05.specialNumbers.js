function specialNumbers(input) {
  let num = Number(input[0]);
  let curNum = "";
  let startNum = 1111;
  let endNum = 9999;
  let res = "";

  for (let i = startNum; i <= endNum; i++) {
    let curNum = "" + i;
    let digitA = Number(curNum.charAt(0));
    let digitB = Number(curNum.charAt(1));
    let digitC = Number(curNum.charAt(2));
    let digitD = Number(curNum.charAt(3));
    if (
      num % digitA === 0 &&
      num % digitB === 0 &&
      num % digitC === 0 &&
      num % digitD === 0
    ) {
      res += `${curNum} `;
    }
  }
  console.log(res);
}
specialNumbers(["16"])
