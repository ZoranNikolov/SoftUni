function hardWords(arr) {
  let string = arr[0].split("_");
  let wordsToFillArr = arr[1];
  let newText = [];
  let counter = 1;

  console.log(getNewText(string).join(""));

  function getNewText(string) {
    for (let i = 0; i < string.length; i++) {
      let currentElement = string[i];
      if (currentElement === "") {
        counter++;
      } else {
        newText.push(currentElement);
      }
      if (currentElement === "" && currentElement !== string[i + 1]) {
        for (let j = 0; j < wordsToFillArr.length; j++) {
          let word = wordsToFillArr[j];
          if (word.length === counter) {
            newText.push(word);
            let index = wordsToFillArr.indexOf(word);
            wordsToFillArr.splice(index, 1);
            counter = 1;
            break;
          }
        }
      }
    }
    return newText;
  }
}
hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
