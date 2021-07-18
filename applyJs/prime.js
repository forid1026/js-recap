function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            return 'is not a prime number';
        }
    }
    return 'is a prime number';
}
const result = isPrime(77);
console.log(result)