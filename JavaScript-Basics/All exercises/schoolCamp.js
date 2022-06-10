function schoolCamp(input) {
  const season = input[0]; // “Winter”, “Spring” или “Summer”;
  const groupGender = input[1]; // “boys”, “girls” или “mixed”;
  const studentsNumber = Number(input[2]);
  const nights = Number(input[3]);

  const winterVacationPriceBoysOrGirls = 9.6;
  const winterVacationPriceMixed = 10;
  const springVacationPriceBoysOrGirls = 7.2;
  const springVacationPriceMixed = 9.5;
  const summerVacationPriceBoysOrGirls = 15;
  const summerVacationPriceMixed = 20;

  let price = 0;
  let sport = "";

  switch (season) {
    case "Winter":
      switch (groupGender) {
        case "boys":
          price = winterVacationPriceBoysOrGirls * studentsNumber * nights;
          sport = "Judo";
          break;
        case "girls":
          price = winterVacationPriceBoysOrGirls * studentsNumber * nights;
          sport = "Gymnastics";
          break;
        case "mixed":
          price = winterVacationPriceMixed * studentsNumber * nights;
          sport = "Ski";
          break;
      }
      break;
    case "Spring":
      switch (groupGender) {
        case "boys":
          price = springVacationPriceBoysOrGirls * studentsNumber * nights;
          sport = "Tennis";
          break;
        case "girls":
          price = springVacationPriceBoysOrGirls * studentsNumber * nights;
          sport = "Athletics";
          break;
        case "mixed":
          price = springVacationPriceMixed * studentsNumber * nights;
          sport = "Cycling";
          break;
      }
      break;
    case "Summer":
      switch (groupGender) {
        case "boys":
          price = summerVacationPriceBoysOrGirls * studentsNumber * nights;
          sport = "Football";
          break;
        case "girls":
          price = summerVacationPriceBoysOrGirls * studentsNumber * nights;
          sport = "Volleyball";
          break;
        case "mixed":
          price = summerVacationPriceMixed * studentsNumber * nights;
          sport = "Swimming";
          break;
      }
      break;
  }

  if (studentsNumber >= 50) {
    price *= 0.5;
  } else if (studentsNumber < 50 && studentsNumber >= 20) {
    price *= 0.85;
  } else if (studentsNumber < 20 && studentsNumber >= 10) {
    price *= 0.95;
  }
  console.log(`${sport} ${price.toFixed(2)} lv.`);
}
schoolCamp(["Spring", "girls", "20", "7"]);
schoolCamp(["Winter", "mixed", "9", "15"]);
schoolCamp(["Summer", "boys", "60", "7"]);
schoolCamp(["Spring", "mixed", "17", "14"]);
