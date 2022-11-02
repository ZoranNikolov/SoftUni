function theatrePromotions(typeOfDay, age) {
  let price;
  let isError = false;
  if (age <= 18 && age >= 0) {
    if (typeOfDay === "Weekday") {
      price = 12;
    } else if (typeOfDay === "Weekend") {
      price = 15;
    } else if (typeOfDay === "Holiday") {
      price = 5;
    }
  } else if (age > 18 && age <= 64) {
    if (typeOfDay === "Weekday") {
      price = 18;
    } else if (typeOfDay === "Weekend") {
      price = 20;
    } else if (typeOfDay === "Holiday") {
      price = 12;
    }
  } else if (age > 64 && age <= 122) {
    if (typeOfDay === "Weekday") {
      price = 12;
    } else if (typeOfDay === "Weekend") {
      price = 15;
    } else if (typeOfDay === "Holiday") {
      price = 10;
    }
  } else {
    console.log("Error!");
    isError = true;
  }
  if (!isError) {
    console.log(`${price}$`);
  }
}
theatrePromotions("Weekday", 42);
theatrePromotions("Holiday", -12);
theatrePromotions("Holiday", 15);
