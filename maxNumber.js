let a = 50;
let b = 60;
let c = 71;

// Find max number using Comparison, Logical (or Relational) Operators
function maxNumber() {
    if (a > b && a > c) {
        return "a is bigger";
    } else if (b > a && b > c) {
        return "b is bigger";
    } else return "c is bigger"
}
console.log(maxNumber());

// Math.max function
const maxNum = Math.max(a, b, c);
console.log(maxNum);