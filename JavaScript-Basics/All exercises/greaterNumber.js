function greaterNumber(input) {
    const a = Number(input[0]);
    const b = Number(input[1]);

    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
greaterNumber(["6", "4"])