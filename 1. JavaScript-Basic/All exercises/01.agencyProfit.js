function agencyProfit(input) {
  let name = input[0];
  let countTickedAdults = Number(input[1]);
  let countTickedKids = Number(input[2]);
  let netPricePerTicketAdults = Number(input[3]);
  let taxService = Number(input[4]);
  let netPricePerTicketKids = netPricePerTicketAdults * 0.3;
  let totalPriceAdults = netPricePerTicketAdults + taxService;
  let totalPriceKids = netPricePerTicketKids + taxService;
  let profit =
    0.2 *
    (countTickedKids * totalPriceKids + countTickedAdults * totalPriceAdults);

  console.log(
    `The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`
  );
}
agencyProfit(["WizzAir", "15", "5", "120", "40"]);
