function solve() {
  let arr = ["bb", "ccc", "ddd", "aaa"];

  let sortedArray = arr.sort((a, b) => {
    return a.localeCompare(b);
  });

  console.log(`arr: ${arr}`);
  console.log(`sortedArr: ${sortedArray}`);
}
solve();
