function password(input) {
  let index = 0;

  let username = input[index++];
  let pass = input[index++];
  let tempPass = input[index++];

  while (tempPass !== pass) {
    tempPass = input[index++];
  }
  console.log(`Welcome ${username}!`);
}
password(["Gosho",
"secret",
"secret"])

