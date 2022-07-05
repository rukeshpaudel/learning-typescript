"use strict";
function add(num1, num2) {
    return num1 + num2;
}
function print(num) {
    console.log(`Result is: ${num}`);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
print(add(5, 6));
let combineValues;
combineValues = add;
// combineValues = print();
console.log(combineValues(8, 8));
addAndHandle(20, 40, (result) => {
    console.log(result);
});
