function loadingBar(num) {
  let complete = "%".repeat(num / 10);
  let incomplete = ".".repeat(10 - complete.length);

  incomplete.length === 0 ?
    console.log("100% Complete!") :
    console.log(`${num}% [${complete}${incomplete}]\nStill loading...`);
}
loadingBar(30);
// loadingBar(50);
// loadingBar(100);
