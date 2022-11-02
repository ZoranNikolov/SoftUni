function vacation(group, type, day) {
  let price = 0;

  switch (type) {
    case "Students":
      switch (day) {
        case "Friday":
          price = 8.45;
          break;
        case "Saturday":
          price = 9.8;
          break;
        case "Sunday":
          price = 10.46;
          break;
      }
      break;
    case "Business":
      switch (day) {
        case "Friday":
          price = 10.9;
          break;
        case "Saturday":
          price = 15.6;
          break;
        case "Sunday":
          price = 16;
          break;
      }
      break;
    case "Regular":
      switch (day) {
        case "Friday":
          price = 15;
          break;
        case "Saturday":
          price = 20;
          break;
        case "Sunday":
          price = 22.5;
          break;
      }
      break;
  }

  if (type === "Students" && group >= 30) {
    price *= 0.85;
  } else if (type === "Business" && group >= 100) {
    group -= 10;
  } else if (type === "Regular" && group >= 10 && group <= 20) {
    price *= 0.95;
  }
  let totalPrice = group * price;
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
