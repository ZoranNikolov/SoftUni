function condense(array) {
    let arr = [];

    for (let n of array) {
        arr.push(n);
    }

    while (arr.length > 1) {
        let condensedArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            condensedArr.push(arr[i] + arr[i + 1]);
        }
        arr = condensedArr;
    }

    console.log(arr.join());
}
condense([5, 0, 4, 1, 2]);