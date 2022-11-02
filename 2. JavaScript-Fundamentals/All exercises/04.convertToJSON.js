function convertToJSON(name, lastName, hairColor) {
  let res = {
    name,
    lastName,
    hairColor,
  };

  let resAsString = JSON.stringify(res);
  console.log(resAsString);
}
convertToJSON("George", "Jones", "Brown");
