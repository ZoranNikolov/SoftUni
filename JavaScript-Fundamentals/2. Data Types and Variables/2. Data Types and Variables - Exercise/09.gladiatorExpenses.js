function gladiatorExpenses(
  lost,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;
  let counter = 0;
  for (let i = 1; i <= lost; i++) {
    if (i % 2 === 0) {
      expenses += helmetPrice;
    }
    if (i % 3 === 0) {
      expenses += swordPrice;
    }
    if (i % 3 === 0 && i % 2 === 0) {
      expenses += shieldPrice;
      counter++;
      if (counter % 2 === 0) {
        expenses += armorPrice;
        counter = 0;
      }
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
