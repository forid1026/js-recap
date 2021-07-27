function callBackFunction(name, age, task){
    console.log('Hey  ', name);
    console.log('Your Age is : ', age);
    task();
}


function takeShower(){
    console.log('Take shower');
}
function washHand(){
    console.log('wash hand with soap');
}
callBackFunction('Nilima', 21, takeShower);
callBackFunction('Farid', 24, washHand )