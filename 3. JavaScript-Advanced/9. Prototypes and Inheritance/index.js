let obj1 = {
	prop1: () => console.log("prop1"),
};

let obj2 = {
	prop2: () => console.log("prop2"),
};
Object.setPrototypeOf(obj2, obj1);

// obj2.prop2();
// obj2.prop1();
// console.log(Object.getPrototypeOf(obj2));
// console.log(Object.entries(obj2)[0]);

// Object.getPrototypeOf(obj2).prop1()
// console.log(Object.getOwnPropertyNames(obj2));
// console.log(Object.getOwnPropertyNames(obj1));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj1)));

Object.create();
Object.assign();
