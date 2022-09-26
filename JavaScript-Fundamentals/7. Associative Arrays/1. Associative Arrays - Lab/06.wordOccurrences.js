function wordOccurrences(arr) {
  let myMap = new Map();
  let words = 0;

  arr.forEach((word) => {
    if (!myMap.has(word)) {
      words = 1;
    } else {
      words = myMap.get(word) + 1;
    }
    myMap.set(word, words);
  });

  let sortedEntries = Array.from(myMap).sort(
    ([keyA, valueA], [keyB, valueB]) => {
      return valueB - valueA;
    }
  );

  for (let [word, count] of sortedEntries) {
    console.log(`${word} -> ${count} times`);
  }
  
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
