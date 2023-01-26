function makeCard(face, suit) {
    const validFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const validSuits = ['S','H','D','C'];

    if(!validFaces.includes(face)){
        throw new Error("Invalid card face: " + face);
    }
    if(!validSuits.includes(suit)){
        throw new Error("Invalid card suit: " + suit);
    }
    let card = {
        face: face,
        suit: suit,
        toString() {
            let suitToChar = {
                'S': "\u2660",
                'H': "\u2665",
                'D': "\u2666",
                'C': "\u2663"
            };
            return card.face + suitToChar[card.suit];
        }
    }
    return card;
}
console.log('' + new  makeCard("A", "S"));
console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
console.log('' + makeCard('1', 'C'));