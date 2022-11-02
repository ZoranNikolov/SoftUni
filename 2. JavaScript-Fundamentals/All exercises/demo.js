// // class Dog {
// //   constructor(name, color, gender) {
// //     this.name = name;
// //     this.color = color;
// //     this.gender = gender;
// //   }
// //   speak() {
// //     console.log(`${this.name} says Woof!`);
// //   }
// // }
// // let sparky = new Dog("Sparky", "black", "male");
// // let krida = new Dog("Krida", "mixed", "female");
// // console.log(sparky);
// // console.log(krida);

// function objectsDemo() {
//   let person = {
//     name: "Ivo",
//     age: 28,
//     isHungy: false,
//   };
//   person.height = 180;
//   delete person.isHungy;
//   // console.log(person);
//   let arr = [1, 2, 3];

//   // for (let el in person) {
//   //   console.log(el);
//   //   console.log(person[el]);
//   // }

//   let keys = Object.keys(person);
//   let values = Object.values(person);
//   let entries = Object.entries(person);

//   if (person.hasOwnProperty("age")) {
//     console.log(person.age);
//   }

//   if (!person.hasOwnProperty("gender")) {
//     console.log("no gender");
//   }

//   // console.log(keys);
//   // console.log(values);
//   // console.log(entries[0]);
// }
// objectsDemo();

function objectDemo() {
    const obj = {
      name: 'Ivo',
      age: 28
    };
    
    obj.age = 30;
    
    console.log(obj);
    
    }
    objectDemo()