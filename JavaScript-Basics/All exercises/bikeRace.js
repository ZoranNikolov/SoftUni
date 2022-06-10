function bikeRace(input) {
  //Taxes

  const juniorTrailTax = 5.5;
  const juniorCrossCountryTax = 8;
  const juniorDownhillTax = 12.25;
  const juniorRoadTax = 20;
  const seniorTrailTax = 7;
  const seniorCrossCountryTax = 9.5;
  const seniorDownhillTax = 13.75;
  const seniorRoadTax = 21.5;

  const numberJuniors = Number(input[0]);
  const numberSeniors = Number(input[1]);
  const traceType = input[2];
  let totalSum = 0;

  switch (traceType) {
    case "trail":
      totalSum =
        numberJuniors * juniorTrailTax + numberSeniors * seniorTrailTax;
      break;
    case "cross-country":
      totalSum =
        numberJuniors * juniorCrossCountryTax +
        numberSeniors * seniorCrossCountryTax;
      if (numberJuniors + numberSeniors >= 50) {
        totalSum *= 0.75;
      }
      break;
    case "downhill":
      totalSum =
        numberJuniors * juniorDownhillTax + numberSeniors * seniorDownhillTax;
      break;
    case "road":
      totalSum = numberJuniors * juniorRoadTax + numberSeniors * seniorRoadTax;
      break;
  }
  totalSum *= 0.95;
  console.log(totalSum.toFixed(2));
}
bikeRace(["10", "20", "trail"]);
bikeRace(["21", "26", "cross-country"]);
bikeRace(["30", "25", "cross-country"]);
bikeRace(["10", "10", "downhill"]);
bikeRace(["3", "40", "road"]);