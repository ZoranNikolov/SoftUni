function maxSequenceOfEqualElements(array) {
  let arrayL = array.length;
  let maxSequence = [];

  for (let i = 0; i < arrayL; i++) {
    let sequence = [];
    for (let j = i; j < arrayL; j++) {
      if (array[i] === array[j]) {
        sequence.push(array[i]);
      } else {
        break;
      }
    }

    if (sequence.length > maxSequence.length) {
      maxSequence = [];
      for (let element of sequence) {
        maxSequence.push(element);
      }
    }
  }

  console.log(maxSequence.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
