function tradeCommissions(input) {
  const town = input[0];
  const sales = Number(input[1]);

  let commission = 0;

  switch (town) {
    case "Sofia":
      if (0 <= sales && sales <= 500) {
        commission = (sales * 5) / 100;
        console.log(commission.toFixed(2));
      } else if (500 < sales && sales <= 1000) {
        commission = (sales * 7) / 100;
        console.log(commission.toFixed(2));
      } else if (1000 < sales && sales <= 10000) {
        commission = (sales * 8) / 100;
        console.log(commission.toFixed(2));
      } else if (10000 < sales) {
        commission = (sales * 12) / 100;
        console.log(commission.toFixed(2));
      } else {
        console.log("error");
      }
      break;
    case "Varna":
      if (0 <= sales && sales <= 500) {
        commission = (sales * 4.5) / 100;
        console.log(commission.toFixed(2));
      } else if (500 < sales && sales <= 1000) {
        commission = (sales * 7.5) / 100;
        console.log(commission.toFixed(2));
      } else if (1000 < sales && sales <= 10000) {
        commission = (sales * 10) / 100;
        console.log(commission.toFixed(2));
      } else if (10000 < sales) {
        commission = (sales * 13) / 100;
        console.log(commission.toFixed(2));
      } else {
        console.log("error");
      }
      break;
    case "Plovdiv":
      if (0 <= sales && sales <= 500) {
        commission = (sales * 5.5) / 100;
        console.log(commission.toFixed(2));
      } else if (500 < sales && sales <= 1000) {
        commission = (sales * 8) / 100;
        console.log(commission.toFixed(2));
      } else if (1000 < sales && sales <= 10000) {
        commission = (sales * 12) / 100;
        console.log(commission.toFixed(2));
      } else if (10000 < sales) {
        commission = (sales * 14.5) / 100;
        console.log(commission.toFixed(2));
      } else {
        console.log("error");
      }
      break;
    default:
      console.log("error");
  }
}
tradeCommissions(["Sofia", "-50"]);
