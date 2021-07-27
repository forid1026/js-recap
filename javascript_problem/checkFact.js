
// n * factorial(n - 1)

// recursive factorial

function factorial(n){
    if( n == 0){
        return 1;
    }
    else{
        return n * factorial( n - 1);
    }
}
var result = factorial(5);
console.log(result);



// var num = 5;
// var fact = 1;
// for( var i = 1; i <= num; i++){
//     var element = i;
//     console.log(element)
//     fact = fact * element;
// }
// console.log(fact);