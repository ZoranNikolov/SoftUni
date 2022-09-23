function storeProvision(currentStocks, forDelivery) {
  let store = {};

  for (let i = 0; i < currentStocks.length; i += 2) {
    let product = currentStocks[i];
    let quantity = Number(currentStocks[i + 1]);
    store[product] = quantity;
  }

  for (let i = 0; i < forDelivery.length; i += 2) {
    let product = forDelivery[i];
    let quantity = Number(forDelivery[i + 1]);
    if (store.hasOwnProperty(product)) {
      store[product] += quantity;
    } else {
      store[product] = quantity;
    }
  }

  for (const key in store) {
    console.log(`${key} -> ${store[key]}`);
  }
  
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
