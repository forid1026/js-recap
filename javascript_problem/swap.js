var a = 5;
var b = 7;
console.log('Before Swap a:', a, 'b=', b);
var temp = a;
a = b;
b = temp;
console.log('Afterd Swap a:', a, 'b=', b);


var x = 10;
var y = 20;
console.log('Before Swap x:', x, 'y=', y);
var x = x + y;
// console.log(x);
var y = x- y;
// console.log(y);
var x = x - y;
console.log('After Swap x:', x, 'y=', y);


var p = 30;
var q = 40;
console.log('Before Swap p:', p, 'q=', q);
[p, q] = [q, p];
console.log('After Swap p:', p, 'q=', q);

