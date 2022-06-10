function suppliesForSchool(input) {
  let penPacks = Number(input[0]);
  let markerPacks = Number(input[1]);
  let litresDetergent = Number(input[2]);
  let percentDiscount = Number(input[3]);

  let penPackPrice = 5.8;
  let markerPackPrice = 7.2;
  let detergentPrice = 1.2;

  let money =
    penPackPrice * penPacks +
    markerPackPrice * markerPacks +
    litresDetergent * detergentPrice;

  let totalMoney = money - money * (percentDiscount / 100);

  console.log(totalMoney);
}
suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);
