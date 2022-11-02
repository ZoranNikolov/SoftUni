// let myArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let res = mySlicer(myArray, 2, 4);
// let res2 = myArray.slice(-4, -2);
// // console.log(res);
// // console.log(res2);

// function myIncludes(arr, value) {
//   for (let el of arr) {
//     if (el === value) {
//       return true;
//     }
//   }
//   return false;
// }

// function myIndexOf(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       return i;
//     }
//   }
//   return -1;
// }

// function mySlicer(arr, startIndex, endIndex) {
//   let result = [];

//   if (startIndex && endIndex) {
//     for (let i = startIndex; i < endIndex; i++) {
//       result.push(arr[i]);
//     }
//   } else if (!startIndex && !endIndex) {
//     for (let el of arr) {
//       result.push(el);
//     }
//   } else if (startIndex && !endIndex) {
//     for (let i = startIndex; i < arr.length; i++) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// function mapTest() {
//   let myArr = ["1", "2", "3", "4"];
//   let lengths = myArr.map((x, i) => console.log(i));
//   console.log(myArr);
//   console.log(lengths);
// }

// function filterTest() {
//   let myArr = [-10, 5, 1, 2, 3, 4];
//   let lengths = myArr.filter((x) => x > 2);
//   console.log(myArr);
//   console.log(lengths);
// }

function sortTest() {
  let myArr = [-10, 5, 1, 2, 3, 4, 200, 100];
  let words = ["nest", "egg", "Eggs", "bite", "Grip", "jAw"];

  let sortedWords = words.sort((a, b) => a.localeCompare(b));

  // console.log(myArr.sort((a, b) => b - a));
  // console.log(myArr.sort((a, b) => a - b));
  console.log(sortedWords);
  console.log(words.sort((a, b) => b.localeCompare(a)));
}
sortTest();
