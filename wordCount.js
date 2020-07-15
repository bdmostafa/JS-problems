let speech = "a set   of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses.";

console.log(speech.length); // 255

let count = 0;
for (let i = 0; i < speech.length; i++) {
    let char = speech[i];
    if (char == " " && speech[i - 1] != " ") { // double space is not considered
        count++;
    }
}
console.log(count); // 34