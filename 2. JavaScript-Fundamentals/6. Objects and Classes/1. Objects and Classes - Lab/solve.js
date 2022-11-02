// function app() {
//   let myObj = {
//     name: "Zoran",
//     age: 32,
//   };
//   myObj.sayHello = () => console.log("Hi, huys");

//   // let keys = Object.keys(myObj);
//   // console.log(keys[0]);

//   // let entries = Object.entries(myObj);
//   // console.log(entries[0]);

//   // console.log(Object.values(myObj));
//   // console.log(Object.entries(myObj));

//   for (let key of Object.keys(myObj)) {
//     console.log(myObj[key]);
//   }
// }
// app();

// function incrementValue(value) {
//   return (value += 1);
// }

// function incrementArrayValue(arr) {
//   arr[0] = arr[0] + 1;
//   return arr;
// }

// let age = 5;

// let ageAddOne = incrementValue(age);

// console.log(age);
// console.log(ageAddOne);

// let arr = [1, 2, 3];
// let arr2 = incrementArrayValue(arr);

// console.log(arr);
// console.log(arr2);

// function solve(data) {
//   let data2 = JSON.parse(JSON.stringify(data));
//   data2.name = "Pesho";
//   console.log(data);
//   console.log(data2);

// let jsonData = JSON.stringify(data);
// let parseJsonData = JSON.parse(jsonData);
// console.log(parseJsonData);
// }
// solve({
//   name: "Ivan",
//   age: 25,
//   grades: {
//     Math: [2.5, 3.5],
//     Chemistry: [4.5],
//   },
// });

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

let myPerson = new Person("Todor", 30);
console.log(myPerson);
myPerson.sayHello();

// function createPerson(name, age) {
//   let res = {};
//   res.name = name;
//   res.age = age;
//   return res;
// }

// let person2 = createPerson("Pesho", 30);
// console.log(person2);
