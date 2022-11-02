function journey(input) {
  const budget = Number(input[0]);
  const season = input[1];
  let finalMoney = 0;

  if (budget <= 100) {
    if (season === "summer") {
      finalMoney = budget * 0.3;
      console.log("Somewhere in Bulgaria");
      console.log(`Camp - ${finalMoney.toFixed(2)}`);
    } else {
      finalMoney = budget * 0.7;
      console.log("Somewhere in Bulgaria");
      console.log(`Hotel - ${finalMoney.toFixed(2)}`);
    }
  } else if (budget > 100 && budget <= 1000) {
    if (season === "summer") {
      finalMoney = budget * 0.4;
      console.log("Somewhere in Balkans");
      console.log(`Camp - ${finalMoney.toFixed(2)}`);
    } else {
      finalMoney = budget * 0.8;
      console.log("Somewhere in Balkans");
      console.log(`Hotel - ${finalMoney.toFixed(2)}`);
    }
  } else {
    finalMoney = budget * 0.9;
    console.log("Somewhere in Europe");
    console.log(`Hotel - ${finalMoney.toFixed(2)}`);
  }
}
journey(["50", "summer"]);
