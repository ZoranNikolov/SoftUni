function weatherForecastPart2(input) {
    const temperature = Number(input[0]);
    if (26.00 <= temperature && temperature <= 35.00) {
        console.log("Hot"); 
    } else if (20.10 <= temperature && temperature <= 25.90) {
        console.log("Warm");
    } else if (15.00 <= temperature && temperature <= 20.00) {
        console.log("Mild");
    } else if (12.00 <= temperature && temperature <= 14.90) {
        console.log("Cool");
    } else if (5.00 <= temperature && temperature <= 11.90) {
        console.log("Cold");
    } else {
        console.log("unknown");
    }
}
weatherForecastPart2(["16.5", "8", "22.4", "26", "0"])
