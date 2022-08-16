function convertToObject(JSONData) {
  // console.log(JSONData);
  let person = JSON.parse(JSONData);

  // console.log(person);

  for (let key of Object.keys(person)) {
    console.log(`${key}: ${person[key]}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
