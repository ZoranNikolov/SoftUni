function personInfo(firstName, lastName, age) {
  let res = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };
  return res;
}
console.log(personInfo("Peter", "Pan", "20"));

function personInfo(firstName, lastName, age) {
  let res = {
    firstName,
    lastName,
    age,
  };
  return res;
}
console.log(personInfo("Peter", "Pan", "20"));

function personInfo(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,
  };
}

let myObj = personInfo("Peter", "Pan", "20");
console.log(myObj);
