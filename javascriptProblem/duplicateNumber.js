var name = [8, 9, 4, 5, 3, 7, 9, 5, 7, 1, 8];
var uniqueName = [];

for( var i = 0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if( index == -1){
        uniqueName.push(element);
    }
    
}
console.log(uniqueName)