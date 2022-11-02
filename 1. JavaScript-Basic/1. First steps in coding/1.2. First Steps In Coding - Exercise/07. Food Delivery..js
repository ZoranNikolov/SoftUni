function foodDelivery(input) {
  let chickenMenu = 10.35;
  let fishMenu = 12.4;
  let vegMenu = 8.15;

  let chickenMenuCount = Number(input[0]);
  let fishMenuCount = Number(input[1]);
  let vegMenuCount = Number(input[2]);

  let sum =
    chickenMenu * chickenMenuCount +
    fishMenu * fishMenuCount +
    vegMenu * vegMenuCount;
  let desertPrice = sum * 0.2;

  let totalSum = sum + desertPrice + 2.5;

  console.log(totalSum);
}
foodDelivery(["2 ", "4 ", "3 "]);
