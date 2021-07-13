var friendAge = [23, 24, 26, 28];
console.log(friendAge);

// check value using index number
var sonaliAge = friendAge[2]
console.log(sonaliAge);

//  get index position

var position = friendAge.indexOf(28);
console.log(position);

// set value

friendAge[3] = 30;
console.log(friendAge)

// array push
friendAge.push(50)
console.log(friendAge)

// array pop
friendAge.pop();
console.log(friendAge);

// array length

friendAge.length;
console.log(friendAge)

// add array element in the beginnig
friendAge.unshift(100, 20, 30 ,40 , 50);
console.log(friendAge)

// add array element in the beginnig
friendAge.shift();
// console.log(friendAge)

// slice
friendAge.slice(2);
console.log(friendAge);

var part = friendAge.slice(2,5);
console.log(part);

console.log(friendAge);
const name = ['john', 'smith', 'ema'];
console.log(name.toString());
name[name.length] = "Jiwi";
console.log(name)
delete name[2];

 
