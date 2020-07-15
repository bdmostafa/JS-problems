// Find max number using Comparison, Logical (or Relational) Operators
let a = 50;
let b = 60;
let c = 71;

function maxNumber() {
    if (a > b && a > c) {
        return "a is bigger";
    } else if (b > a && b > c) {
        return "b is bigger";
    } else return "c is bigger"
}
console.log(maxNumber());

// Find max number using Math.max function
const maxNum = Math.max(a, b, c);
console.log(maxNum);

// Find max element from an array using Object.keys method
let numbers = {
    a: 5,
    b: 9,
    c: 7
};

function maxElement(obj) {
    let keys = Object.keys(obj);
    let max = keys[0];
    for (let i = 1; i < keys.length; i++) {
        let k = keys[i];
        if (obj[k] > obj[max]) {
            max = k;
        }
    }
    return max;
}
console.log(maxElement(numbers));