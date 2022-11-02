function fishingBoat(input) {
    const priceForSpring = 3000;
    const priceForSummerAndAutumn = 4200;
    const priceForWinter = 2600;
  
    const budget = Number(input[0]);
    const season = input[1];
    const countOfFishermen = Number(input[2]);
  
    let totalMoney = 0;
  
    switch (season) {
      case "Winter":
        totalMoney = priceForWinter;
        break;
      case "Spring":
        totalMoney = priceForSpring;
        break;
      case "Autumn":
      case "Summer":
        totalMoney = priceForSummerAndAutumn;
        break;
    }
    if (countOfFishermen <= 6) {
      totalMoney -= totalMoney * 0.1;
    } else if (countOfFishermen >= 7 && countOfFishermen <= 11) {
      totalMoney -= totalMoney * 0.15;
    } else if (countOfFishermen >= 12) {
      totalMoney -= totalMoney * 0.25;
    }
  
    if (countOfFishermen % 2 === 0 && season != "Autumn") {
      totalMoney -= totalMoney * 0.05;
    }
  
    if (budget >= totalMoney) {
      console.log(
        `Yes! You have ${Math.abs(budget - totalMoney).toFixed(2)} leva left.`
      );
    } else {
      console.log(
        `Not enough money! You need ${Math.abs(budget - totalMoney).toFixed(
          2
        )} leva.`
      );
    }
  }
  fishingBoat(["3000", "Summer", "11"]);
  fishingBoat(["3600", "Autumn", "6"]);
  fishingBoat(["2000", "Winter", "13"]);
  