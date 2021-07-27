function evenify(nums) {
    var result;
    if (nums % 2 == 0) {
        result = nums;
    }
    else {
        result = nums * 2;
    }
    return result;

}


function evenifyAll(friendAge){
    var arrayList = [];
    for (let i = 0; i < friendAge.length; i++) {
        let age = friendAge[i];
        var resultAge = evenify(age);
        arrayList.push(resultAge);
    }
    return arrayList;
}

friendAge = [11, 12, 13, 14,15, 16, 17, 18, 19];
var nums_event = evenifyAll(friendAge)
console.log(nums_event)


