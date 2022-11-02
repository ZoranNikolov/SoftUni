function birthdayParty(input) {
  let loan = Number(input);
  let cake = loan * 0.2;
  let drinks = cake * 0.55;
  let animator = loan / 3;

  let moneyNeeded = loan + cake + drinks + animator;
  console.log(moneyNeeded);
}
birthdayParty(["2250"]);