function magicMatrices(arr) {
  //   let numbers = arr[0];
  //   let sum = arr[0].reduce((accumulator, currentValue) => {
  //     return accumulator + currentValue;
  //   });

  //   console.log(sum);
  //   console.log(arr[0]);

  let dwarves = [
    "Bifur",
    "Bofur",
    "Bombur",
    "Fili",
    "Kili",
    "Oin",
    "Gloin",
    "Thorin",
    "Balin",
    "Dwalin",
    "Nori",
    "Dori",
  ];

  //   let nameLenght = dwarves.map(function (item, index, array) {
  //     return item.length;
  //   });

  //   console.log(nameLenght);
  dwarves.forEach(function (item, index, array) {
    if (item === "Thorin") {
      item = item.toUpperCase();
    } else {
      item = item.toLowerCase();
    }
    console.log(index, item);
  });
}
magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
