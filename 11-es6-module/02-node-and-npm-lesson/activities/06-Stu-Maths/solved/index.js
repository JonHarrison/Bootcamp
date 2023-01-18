// Import `maths.js`
const maths = require('./maths.js');

(function unitTests() {
    console.log("Unit tests");
    console.log("[");
    console.log(`sum        : ${maths.sum(1,2) === 3 ? 'PASS' : 'FAIL'}`);
    console.log(`difference : ${maths.difference(3,4) === -1 ? 'PASS' : 'FAIL'}`);
    console.log(`product    : ${maths.product(3,4) === 12 ? 'PASS' : 'FAIL'}`);
    console.log(`quotient   : ${maths.quotient(3,4) === 0.75 ? 'PASS' : 'FAIL'}`);
    console.log("]\n");
})();

(function doMaths() {

    // Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
    const [, , operation, numOne, numTwo] = process.argv;
    let a = parseInt(numOne);
    let b = parseInt(numTwo);

    // Create a `switch` statement that accepts an `operation` parameter
    // and each `case` uses the corresponding `maths` method
    // to perform each math operation on the two numbers, `numOne` and `numTwo`
    switch (operation) {
        case 'sum':
            console.log(`${a} + ${b} = ${maths.sum(a, b)}`);
            break;
        case 'difference':
            console.log(`${a} - ${b} = ${maths.difference(a, b)}`);
            break;
        case 'product':
            console.log(`${a} * ${b} = ${maths.product(a, b)}`);
            break;
        case 'quotient':
            console.log(`${a} / ${b} = ${maths.quotient(a, b)}`);
            break;
        default:
            console.log("Unknown operation");
            break;
    }
})();
