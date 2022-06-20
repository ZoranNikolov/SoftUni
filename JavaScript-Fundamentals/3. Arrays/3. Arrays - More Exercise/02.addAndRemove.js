function addAndRemove(array) {
  let result = [];
  let step = 1;

  for (let i = 0; i < array.length; i++) {
    let command = array[i];
    switch (command) {
      case "add":
        result.push(step);
        break;
      case "remove":
        result.pop();
        break;
    }
    step++;
  }
  console.log(result.length > 0 ? result.join(" ") : "Empty");
}
addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
