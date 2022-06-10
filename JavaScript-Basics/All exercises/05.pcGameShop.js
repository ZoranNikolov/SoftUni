function pcGameShop(input) {
  let index = 0;
  let amount = Number(input[index++]);
  let hearthstoneCounter = 0;
  let forniteCounter = 0;
  let overwatchCounter = 0;
  let othersCounter = 0;

  for (let i = 0; i < amount; i++) {
    let game = input[index++];
    switch (game) {
      case "Hearthstone":
        hearthstoneCounter++;
        break;
      case "Fornite":
        forniteCounter++;
        break;
      case "Overwatch":
        overwatchCounter++;
        break;
      default:
        othersCounter++;
        break;
    }
  }
  
  let hearthStonePercent = (hearthstoneCounter / amount) * 100;
  let fornitePercent = (forniteCounter / amount) * 100;
  let overwatchPercent = (overwatchCounter / amount) * 100;
  let othersPercent = (othersCounter / amount) * 100;

  console.log(`Hearthstone - ${hearthStonePercent.toFixed(2)}%`);
  console.log(`Fornite - ${fornitePercent.toFixed(2)}%`);
  console.log(`Overwatch - ${overwatchPercent.toFixed(2)}%`);
  console.log(`Others - ${othersPercent.toFixed(2)}%`);
}
pcGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
