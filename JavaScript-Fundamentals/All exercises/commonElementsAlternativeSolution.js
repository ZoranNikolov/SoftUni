function solve(firstArr, secondArr) {

    for (let firstArrayIndex = 0; firstArrayIndex < firstArr.length; firstArrayIndex++) {
        for (let secondArrayIndex = 0; secondArrayIndex < secondArr.length; secondArrayIndex++) {
            if (firstArr[firstArrayIndex] === secondArr[secondArrayIndex]) {
                console.log(firstArr[firstArrayIndex]);
            }
        }

    }

}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
)