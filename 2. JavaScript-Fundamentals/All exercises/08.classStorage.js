class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = [];
  }

  get totalCost() {
    return this.storage.reduce((acc, el) => {
      return acc + el.price * el.quantity;
    }, 0);
  }

  addProduct(product) {
    this.storage.push(product);
    this.capacity -= product.quantity;
  }

  getProducts() {
    let output = [];
    this.storage.forEach((product) => {
      output.push(JSON.stringify(product));
    });
    return output.join("\n");
  }
}
let productOne = { name: "Cucamber", price: 1.5, quantity: 15 };
let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
let productThree = { name: "Bread", price: 1.1, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);
