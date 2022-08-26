function storeProvision(currentStocks, forDelivery) {
  let storeProducts = {};
  let currentL = currentStocks.length;
  let forDeliveryL = forDelivery.length;

  for (let index = 0; index < currentL; index += 2) {
    let product = currentStocks[index];
    storeProducts[product] = Number(currentStocks[index + 1]);
  }

  for (let index = 0; index < forDeliveryL; index += 2) {
    let product = forDelivery[index];
    if (!storeProducts.hasOwnProperty(product)) {
      storeProducts[product] = 0;
    }
    storeProducts[product] += Number(forDelivery[index + 1]);
  }

  for (const product in storeProducts) {
    console.log(`${product} -> ${storeProducts[product]}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
