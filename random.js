// Math.floor/ceil/round/random ..................
let num = 5.497859;
let intFloor = Math.floor(num);
console.log(intFloor); // 5

let intCeil = Math.ceil(num);
console.log(intCeil); // 6

let intRound = Math.round(num);
console.log(intRound); // 5

let randomNum = Math.random();
console.log(randomNum);
// 0.432756245250983
// 0.8444160864282308 and so on

// Generate random between 1 and 6
function generateRandomNum() {
    let randomNum = Math.random() * 6;
    let roundNum = Math.round(randomNum);
    return roundNum;
}

const result = generateRandomNum();
console.log(result);

// Generate n times random number series between 1 and n
function generateRandomNumSeries(n) {
    for (let i = 1; i <= n; i++) {
        let randomNum = Math.random() * n;
        let roundNum = Math.round(randomNum);
        console.log(roundNum);

    }
}
generateRandomNumSeries(15);