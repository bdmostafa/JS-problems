function reverseString(str) {
    let reverse = "";
    // for (let i = 0; i < str.length; i++) {
    //     let char = str[i];
    //     reverse = char + reverse;
    // }

    for (let i = str.length; i > -1; i--) {
        let char = str[i];
        reverse = reverse + char;
    }

    return reverse;
}

let speech = "Apni kemon asen?";
console.log(reverseString(speech));