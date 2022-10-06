function usingReturn(base, radix) {
    let result = base ** radix
    return result
}

let returnedValue = usingReturn(5, 6)

console.log('after return call');
console.log('Returned value = ' + returnedValue);
console.log(usingReturn(3, 3));