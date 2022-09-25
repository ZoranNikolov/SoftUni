function solve(data) {
  let key = "four";
  let myObj = {
    one: 1,
    two: 2,
    three: 3,
    [key]: 4,
  };

  for (const key in myObj) {
    console.log(myObj[key]);
  }
}
solve();
