function oddOccurrences(data) {
  let result = {};
  let words = data.split(" ");

  words.forEach((word) => {
    word = word.toLowerCase();
    !result.hasOwnProperty(word) ? (result[word] = 1) : result[word]++;
  });

  let filtered = Object.entries(result).filter(([key, value]) => {
    return value % 2 !== 0;
  });

  let buff = [];

  filtered.forEach((key) => {
    buff.push(key.shift());
  });
  console.log(buff.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");

// function oddOccurrences(data) {
//   let result = new Map();
//   let words = data.split(" ");

//   for (let word of words) {
//     word = word.toLowerCase();

//     !result.has(word)
//       ? result.set(word, 1)
//       : result.set(word, result.get(word) + 1);
//   }

//   let filtered = Array.from(result).filter(([key, value]) => {
//     return value % 2 !== 0;
//   });

//   let buff = [];

//   for (const key of filtered) {
//     buff.push(key.shift());
//   }
//   console.log(buff.join(" "));
// }
// oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
