function petShop(input) {
    let dogFoodAmount = input[0];
    let catFoodAmount = input[1];
    let dogFoodPrice = dogFoodAmount * 2.50
    let catFoodPrice = catFoodAmount * 4
    let result = dogFoodPrice + catFoodPrice;
    console.log(`${result} lv.`)
}

petShop(["7", "11"])