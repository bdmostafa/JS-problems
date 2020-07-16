const name = 'programming';

function reverseName(name) {

    let split = name.split('');
    let reverse = split.reverse();
    let reverseName = reverse.join('');
    return reverseName;

    // All are in one line
    return name.split('').reverse().join('');
}

console.log(reverseName(name));