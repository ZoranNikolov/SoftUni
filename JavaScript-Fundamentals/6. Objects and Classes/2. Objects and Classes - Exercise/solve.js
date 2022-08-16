// class Dog {
//   constructor(name, color, gender) {
//     this.name = name;
//     this.color = color;
//     this.gender = gender;
//   }
//   speak() {
//     console.log(`${this.name} says Woof!`);
//   }
// }
// let sparky = new Dog("Sparky", "black", "male");
// let krida = new Dog("Krida", "mixed", "female");
// console.log(sparky);
// console.log(krida);

function objectsDemo() {
  let person = {
    name: "Ivo",
    age: 28,
    isHungy: false,
  };
  delete person.age;
  console.log(person);
  let arr = [1, 2, 3];
}
objectsDemo();
