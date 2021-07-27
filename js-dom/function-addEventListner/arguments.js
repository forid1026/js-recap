function sumNumber(num1, num2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum += num;  
        
    }

    return sum;
    
}

var result = sumNumber(10, 10, 90, 10);
console.log(result)