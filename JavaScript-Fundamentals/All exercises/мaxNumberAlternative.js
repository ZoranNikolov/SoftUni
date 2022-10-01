function maxNumber(array) {

    let newArray = [];

    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        let isValid = true;
        for (let i = index + 1; i < array.length; i++) {
            let currentElement = array[i];
            if (element <= currentElement) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            newArray.push(element);
        }
    }
    console.log(newArray.join(" "));
}
maxNumber([27, 50, 42, 2, 50, 45, 48])