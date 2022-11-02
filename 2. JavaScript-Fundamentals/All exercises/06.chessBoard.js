function solve(n) {
  let board = n;
  let currentColour = "black";
  let previousColour = "";
  console.log('<div class="chessboard">');
  for (let rows = 1; rows <= board; rows++) {
    console.log("  <div>");
    for (let columns = 1; columns <= board; columns++) {
      console.log(`    <span class="${currentColour}"></span>`);
      previousColour = currentColour;
      currentColour = previousColour === "black" ? "white" : "black";
    }
    console.log("  </div>");
    if (board % 2 === 0) {
      previousColour = currentColour;
      if (previousColour === "black") {
        currentColour = "white";
      } else {
        currentColour = "black";
      }
    }
  }
  console.log("</div>");
}
solve(6);
