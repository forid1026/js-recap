var minister = 1250;
var business = 900;
var officer = 2000;

var max = Math.max(minister, business, officer)
console.log(max);

let array = [1,2,3,4,5,6];
let max2 = Math.max(...array);
console.log(max2); // 6

// if(minister > business){
//     if(officer > minister){
//         console.log('officer is bigger');
//     }
//     else{
//         console.log('Minister is bigger');
//     }
// }
// else{
//     if(business > officer){
//         console.log('business is bigger')
//     }
//     else{
//         console.log('officer is bigger')
//     }

// }