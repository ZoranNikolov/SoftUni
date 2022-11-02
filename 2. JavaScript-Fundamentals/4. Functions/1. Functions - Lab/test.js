//function declaration
function solve() {
    console.log('Function declaration');
}

//Function expression
let func = function () {
    console.log('Function expression');
}

//Function expression with named function
let func2 = function fancyName() {
    console.log('Function expression with named function');
}

//Call functions inside a function
function main() {
    solve()
    func()
    func2()
}

//Function expression with parameters
const sum = function (a, b) {
    console.log(a + b);
}
sum(2, 5)

//Function invokation
solve()
func()
func2()
main()

