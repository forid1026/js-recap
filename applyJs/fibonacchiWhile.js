function fibonacchi(n) {
    let fibo = [0, 1];
    let i = 2;
    while (i <= n) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        i++;
    }
    return fibo;

}
var result = fibonacchi(10);
console.log(result)