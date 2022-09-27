function wordTracker(array) {
  let result = {};

  const words = array.shift().split(" ");

  words.forEach((word) => {
    result[word] = 0;
  });

  array.forEach((word) => {
    if (result.hasOwnProperty(word)) {
      result[word] += 1;
    }
  });

  let sorted = Object.entries(result).sort(([keyA, valueA], [keyB, valueB]) => {
    return valueB - valueA;
  });

  for (const [key, value] of sorted) {
    console.log(key, "-", value);
  }
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
wordTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
