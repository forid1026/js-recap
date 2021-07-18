// let factotial = 1;

// for(let i = 1; i <= 5; i++){
//     factotial *= i;
//     console.log(factotial)
// }


function getFactorial(num){
    let fact = 1;
    for(let i = 1; i <= num; i++){
        fact *= i;
    }
    return fact;
    
}
const result = getFactorial(5);
console.log(result)



