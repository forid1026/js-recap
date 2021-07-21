var array = [90, 12, 45, 78, 98, 250, 90, 29];
var max = array[0];
for(var i = 0; i < array.length; i++){
    var element = array[i];
    if(element > max){
        max = element;
    }

}

console.log('The Highest number is ', max);