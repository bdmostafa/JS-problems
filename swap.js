// Swap with temporary variable
let a = 2;
let b = 3;
console.log('Before swap a = ', a, 'b = ', b);

const temp = a;
a = b;
b = temp;
console.log('After swap a = ', a, 'b = ', b);

// Swap without temporary variable
let x = 2;
let y = 3;
console.log('Before swap x = ', x, 'y = ', y);

x = x + y;
y = x - y;
x = x - y;
console.log('After swap x = ', x, 'y = ', y);

// Destructuring method
let p = 2;
let q = 3;
console.log('Before swap p = ', p, 'q = ', q);

[p, q] = [q, p];
console.log('After swap p = ', p, 'q = ', q);