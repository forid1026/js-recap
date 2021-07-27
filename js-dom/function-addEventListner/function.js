
//minimize duplicate code

function evenify(element){
    if( element % 2 == 0){
        element;
    }
    else{
        element = element * 2;
    }
    console.log(element)
}

function evenifyAll(nums){
    for (let i = 0; i < nums.length; i++) {
        let element = nums[i];
        if(element % 2 == 0){
            console.log(element , ' : is even number');
        }
        else{
            element *= 2;
            console.log(element, ': is odd number');
        }
    }
}



// minimze condition option
 var nums = [12, 4, 45, 23, 5, 90, 12, 11, 1 ];

for (let i = 0; i < nums.length; i++) {
    var element = nums[i];
    evenify(element);
}



var friendAge = [23, 24, 25, 33, 37, 68, 46];
evenifyAll(friendAge);