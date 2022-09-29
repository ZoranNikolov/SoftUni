function hotelRoom(input) {
  let month = input[0];
  let nights = Number(input[1]);

  let apartment = 0;
  let studio = 0;

  switch (month) {
    case "May":
      studio = nights * 50;
      apartment = nights * 65;
      if (nights > 7 && nights <= 14) {
        studio = studio * 0.95;
      }
      if (nights > 14) {
        studio = studio * 0.7;
      }
      if (nights > 14) {
        apartment = apartment * 0.9;
      }
      break;
    case "June":
      studio = nights * 75.2;
      apartment = nights * 68.7;
      if (nights > 14) {
        studio = studio * 0.8;
      }
      if (nights > 14) {
        apartment = apartment * 0.9;
      }
      break;
    case "July":
      studio = nights * 76;
      apartment = nights * 77;
      if (nights > 14) {
        apartment = apartment * 0.9;
      } else {
        studio = nights * 76;
        apartment = apartment * 77;
      }
      break;
    case "August":
      studio = nights * 76;
      apartment = nights * 77;
      if (nights > 14) {
        apartment = apartment * 0.9;
      } else {
        studio = nights * 76;
        apartment = apartment * 77;
      }
      break;
    case "September":
      studio = nights * 75.2;
      apartment = nights * 68.7;
      if (nights > 14) {
        studio = studio * 0.8;
      }
      if (nights > 14) {
        apartment = apartment * 0.9;
      }
      break;
    case "October":
      studio = nights * 50;
      apartment = nights * 65;
      if (nights > 7 && nights <= 14) {
        studio = studio * 0.95;
      }
      if (nights > 14) {
        studio = studio * 0.7;
      }
      if (nights > 14) {
        apartment = apartment * 0.9;
      }
      break;
  }
  console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
  console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
hotelRoom(["August", 2]);
