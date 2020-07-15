// Remove duplicate numbers in an array
let numbers = [11, 78, 45, 45, 11, 45, 10, 5, 9, 5];
let uniqueNum = [];

for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    let idx = uniqueNum.indexOf(element);
    if (idx == -1) {
        uniqueNum.push(element);
    }
}

console.log(uniqueNum);

// Tips ======================
console.log(numbers.indexOf(45)); // 2
console.log(numbers.indexOf(19)); // -1
console.log(numbers.indexOf(11)); // 0