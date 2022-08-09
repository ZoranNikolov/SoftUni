function shoppingList(data) {
  let groceriesArray = data.shift().split("!");
  let index = 0;
  let groceryCommand = data[index++];

  while (groceryCommand !== "Go Shopping!") {
    let listOfCommand = groceryCommand.split(" ");
    let command = listOfCommand.shift();

    switch (command) {
      case "Urgent":
        let itemToAdd = listOfCommand.shift();

        if (!groceriesArray.includes(itemToAdd)) {
          groceriesArray.unshift(itemToAdd);
        }

        break;
      case "Unnecessary":
        let itemToRemove = listOfCommand.shift();

        if (groceriesArray.includes(itemToRemove)) {
          let indexToRemove = groceriesArray.indexOf(itemToRemove);
          groceriesArray.splice(indexToRemove, 1);
        }

        break;
      case "Correct":
        let oldItem = listOfCommand.shift();
        let newItem = listOfCommand.shift();

        if (groceriesArray.includes(oldItem)) {
          let indexToCorrect = groceriesArray.indexOf(oldItem);
          groceriesArray.splice(indexToCorrect, 1, newItem);
        }

        break;
      case "Rearrange":
        let itemToRearrange = listOfCommand.shift();

        if (groceriesArray.includes(itemToRearrange)) {
          let currentPosition = groceriesArray.indexOf(itemToRearrange);
          groceriesArray.splice(currentPosition, 1);
          groceriesArray.push(itemToRearrange);
        }

        break;
    }

    groceryCommand = data[index++];
  }

  return groceriesArray.join(", ");
}
console.log(
  shoppingList([
    "Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!",
  ])
);
console.log(
  shoppingList([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!",
  ])
);
