function cinema(input) {
  const permierePrice = 12;
  const normalPrice = 7.5;
  const discountPrice = 5;

  const typeOfProjection = input[0];
  const rows = Number(input[1]);
  const columns = Number(input[2]);

  let finalMoney = rows * columns;

  switch (typeOfProjection) {
    case "Premiere":
      finalMoney *= permierePrice;
      break;
    case "Normal":
      finalMoney *= normalPrice;
      break;
    case "Discount":
      finalMoney *= discountPrice;
      break;
  }
  console.log(`${finalMoney.toFixed(2)} leva`);
}
cinema(["Discount", "12", "30"]);