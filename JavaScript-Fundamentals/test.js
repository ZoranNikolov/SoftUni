function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let count = Number(input[2]);
  let price = 0;

  if (
    day == "Monday" ||
    day == "Tuesday" ||
    day == "Wednesday" ||
    day == "Thursday" ||
    day == "Friday"
  ) {
    switch (fruit) {
      case "banana":
        price = count * 2.5;
        console.log(price.toFixed(2));
        break;
      case "apple":
        price = count * 1.2;
        console.log(price.toFixed(2));
        break;
      case "orange":
        price = count * 0.85;
        console.log(price.toFixed(2));
        break;
      case "grapefruit":
        price = count * 1.45;
        console.log(price.toFixed(2));
        break;
      case "kiwi":
        price = count * 2.7;
        console.log(price.toFixed(2));
        break;
      case "pineapple":
        price = count * 5.5;
        console.log(price.toFixed(2));
        break;
      case "grapes":
        price = count * 3.85;
        console.log(price.toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  }

  if (day == "Saturday" || day == "Sunday") {
    switch (fruit) {
      case "banana":
        price = count * 2.7;
        console.log(price.toFixed(2));
        break;
      case "apple":
        price = count * 1.25;
        console.log(price.toFixed(2));
        break;
      case "orange":
        price = count * 0.9;
        console.log(price.toFixed(2));
        break;
      case "grapefruit":
        price = count * 1.6;
        console.log(price.toFixed(2));
        break;
      case "kiwi":
        price = count * 3;
        console.log(price.toFixed(2));
        break;
      case "pineapple":
        price = count * 5.6;
        console.log(price.toFixed(2));
        break;
      case "grapes":
        price = count * 4.2;
        console.log(price.toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else {
    console.log("error");
  }
}
fruitShop(["kiwi", "Saturday", "2"]);