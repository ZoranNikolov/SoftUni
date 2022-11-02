function fruitShop(input) {
  const fruit = input[0];
  const day = input[1];
  const quantity = Number(input[2]);

  let price = 0;

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      switch (fruit) {
        case "banana":
          price = quantity * 2.5;
          console.log(price.toFixed(2));
          break;
        case "apple":
          price = quantity * 1.2;
          console.log(price.toFixed(2));
          break;
        case "orange":
          price = quantity * 0.85;
          console.log(price.toFixed(2));
          break;
        case "grapefruit":
          price = quantity * 1.45;
          console.log(price.toFixed(2));
          break;
        case "kiwi":
          price = quantity * 2.7;
          console.log(price.toFixed(2));
          break;
        case "pineapple":
          price = quantity * 5.5;
          console.log(price.toFixed(2));
          break;
        case "grapes":
          price = quantity * 3.85;
          console.log(price.toFixed(2));
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "Saturday":
    case "Sunday":
      switch (fruit) {
        case "banana":
          price = quantity * 2.7;
          console.log(price.toFixed(2));
          break;
        case "apple":
          price = quantity * 1.25;
          console.log(price.toFixed(2));
          break;
        case "orange":
          price = quantity * 0.9;
          console.log(price.toFixed(2));
          break;
        case "grapefruit":
          price = quantity * 1.6;
          console.log(price.toFixed(2));
          break;
        case "kiwi":
          price = quantity * 3.0;
          console.log(price.toFixed(2));
          break;
        case "pineapple":
          price = quantity * 5.6;
          console.log(price.toFixed(2));
          break;
        case "grapes":
          price = quantity * 4.2;
          console.log(price.toFixed(2));
          break;
        default:
          console.log("error");
          break;
      }
      break;
    default:
      console.log("error");
      break;
  }
}
fruitShop(["grapes", "Saturday", "0.5"]);

/*
function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let counts = Number(input[2]);
  
    let fruitPriceInWorkDays = {
      banana: 2.5,
      apple: 1.2,
      orange: 0.85,
      grapefruit: 1.45,
      kiwi: 2.7,
      pineapple: 5.5,
      grapes: 3.85,
    };
    let fruitPriceInWeeknd = {
      banana: 2.7,
      apple: 1.25,
      orange: 0.9,
      grapefruit: 1.6,
      kiwi: 3.0,
      pineapple: 5.6,
      grapes: 4.2,
    };
    let workDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let weeknd = ["Saturday", "Sunday"];
  
    if (workDays.includes(day) && fruitPriceInWorkDays[fruit]) {
      let result = counts * fruitPriceInWorkDays[fruit];
      console.log(result.toFixed(2));
    } else if (weeknd.includes(day) && fruitPriceInWeeknd[fruit]) {
      let result = counts * fruitPriceInWeeknd[fruit];
      console.log(result.toFixed(2));
    } else {
      console.log("error");
    }
  }
  fruitShop(["apple", "Tuesday", "2"]);
*/
