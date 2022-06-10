function login(input) {
  let index = 0;
  let user = input[index++];
  let pass = "";
  let counter = 0;
  let command = input[index++];
  let isCorrect = false;

  for (let i = user.length; i > -1; i--) {
    pass += user.charAt(i);
  }
  for (let i = 1; i <= input.length; i++) {
    if (command === pass) {
      isCorrect = true;
      break;
    } else {
      counter++;
    }
    if (counter === 4) {
      break;
    }
    console.log("Incorrect password. Try again.");
    command = input[index++];
  }
  if (isCorrect) {
    console.log(`User ${user} logged in.`);
  } else {
    console.log(`User ${user} blocked!`);
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
login(["momo", "omom"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
