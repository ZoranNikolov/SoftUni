function yardGreening(input) {
    let squareMeters = input[0];
    let pricePerSquareMeter = 7.61;
    let discountPercent = 0.18;
    let priceStandard = squareMeters * pricePerSquareMeter;
    let discount = priceStandard * discountPercent;
    let finalPrice = priceStandard - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening(["800"])