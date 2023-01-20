function getThis() {
	return this;
}
const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };
obj1.getThis = getThis;
obj2.getThis = getThis;
console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
