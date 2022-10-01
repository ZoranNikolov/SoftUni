function mergedArrays(firstArray, secondArray) {

    let newArr = []

    for (let index = 0; index < firstArray.length; index++) {
        let token = 0
        index % 2 === 0 ?
            token = Number(firstArray[index]) + Number(secondArray[index]) :
            token = (firstArray[index] + secondArray[index])
        newArr.push(token)
    }
    console.log(newArr.join(' - '));
}
mergedArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)