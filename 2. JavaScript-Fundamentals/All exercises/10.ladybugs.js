function ladybugs(array) {
  let tempArray = array.slice();
  let field = tempArray.shift();
  let bugsPosition = tempArray.shift().split(" ");
  let bugsArray = new Array(field).fill(0);

  for (let position of bugsPosition) {
    let currentBug = Number(position);
    if (currentBug < 0 || currentBug >= field) {
      continue;
    }
    bugsArray[currentBug] = 1;
  }

  for (let i = 0; i < tempArray.length; i++) {
    let [ladybugIndex, command, bugFlight] = tempArray[i].split(" ");

    ladybugIndex = Number(ladybugIndex);

    if (
      ladybugIndex < 0 ||
      ladybugIndex >= bugsArray.length ||
      bugsArray[ladybugIndex] !== 1
    ) {
      continue;
    }

    bugsArray[ladybugIndex] = 0;

    bugFlight = Number(bugFlight);

    if (command === "left") {
      bugFlight = -bugFlight;
    }

    ladybugIndex += bugFlight;
    while (ladybugIndex >= 0 && ladybugIndex < bugsArray.length) {
      if (bugsArray[ladybugIndex] === 0) {
        bugsArray[ladybugIndex] = 1;
        break;
      }
      ladybugIndex += bugFlight;
    }
  }

  console.log(bugsArray.join(" "));
}
ladybugs([3, "0 1", "0 right 1", "2 right 1"]);
ladybugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
ladybugs([5, "3", "3 left 2", "1 left -2"]);
