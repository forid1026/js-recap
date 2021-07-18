// // let factorial = 1;
// // let i = 1;
// // while(i <= 5){
// //     factorial *= i;
// //     i++;
// //     console.log(factorial);

// // }

function getFactorial(n) {
    let fact = 1;
    let i = 1;
    while (i <= n) {
        fact *= i;
        i++;

    }
    return fact;
}
const result = getFactorial(5);
console.log(result)





