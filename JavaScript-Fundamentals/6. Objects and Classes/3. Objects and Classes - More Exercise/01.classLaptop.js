class Laptop {
  constructor(info, quality) {
    this.info.producer = producer;
    this.info.age = age;
    this.info.brand = brand;
  }
}

let info = { producer: "Dell", age: 2, brand: "XPS" };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);
