function storage(arr) {
  let res = new Map();

  arr.forEach((el) => {
    let [product, quantity] = el.split(" ");

    if (res.has(product)) {
      let oldQuantity = res.get(product);
      res.set(product, Number(oldQuantity) + Number(quantity));
    } else {
      res.set(product, Number(quantity));
    }
  });

  for (const [key, value] of res.entries()) {
    console.log(key, "->", value);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
