// var sumNumber = [12, 34, 80, 78, 12, 34, 65];
// var sum = 0;


// for( var i = 0; i < sumNumber.length; i++ ){
//      var element =  sumNumber[i];
//      sum +=  element; 
// }

// console.log('The sum of the numbers are = ', sum)


function getArraySum(numbers){
    var sum = 0;
    for( var i = 0; i < numbers.length; i++ ){
        var element =  numbers[i];
        sum +=  element; 
   }
   return sum;

}

var numbers = [12, 34, 80, 78, 12, 34, 65];
var totalSum = getArraySum(numbers);
console.log(totalSum);

var result = getArraySum([12, 34, 80, 78, 12, 34, 65]);
console.log(result)