// Using for loop ============================================
let numbers = [85, 78, 12, 6, 45, 58, 99, 33, 56];

function arraySum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
        // Show every elements and sum on all the steps
        console.log(numbers[i], sum);
    }
    return sum;
}

const result = arraySum(numbers);
console.log('The summation of the numbers: ', result);


// Using for of loop ============================================
function sumArray(arr) {
    let sum = 0;
    if (!Array.isArray(arr)) return `${arr} is not an array. Please input an array!`

    for (let num of arr) {
        // let sum = 0; It should not assign here because of local scope in loop
        sum += num;
        // return sum; 
    }
    return sum;
}

const arr = [5, 6, 7];
console.log(sumArray(arr));


// Another way to sum with reduce function =================================
let sum = numbers.reduce(function (a, b, ) {
    return a + b;
}, 0); // 0 is the initial value for addition and 1 should be when its multiplication

console.log(sum);