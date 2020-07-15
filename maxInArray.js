let marks = [78, 33, 85, 98, 55, 45, 51, 93];
let maxMarks = marks[0];
// let maxMarks = 0;

for (let i = 0; i < marks.length; i++) {
    let element = marks[i];
    if (element > maxMarks) {
        maxMarks = element;
    }
}
console.log(maxMarks);