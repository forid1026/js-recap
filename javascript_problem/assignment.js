function kilometerToMeter(km){
    var meter =  km * 1000;
    return meter;
}
var totalMeter = kilometerToMeter(100);
console.log(totalMeter);


function budgetCalculator(watch, phone, laptop){

    var watchPrice = 50; 
    var phonePrice = 100;
    var laptopPrice = 500;
    var totalWatchPrice = watchPrice * watch;
    var totalPhonePrice = phonePrice * phone;
    var totalLaptopPrice = laptopPrice * laptop;
    var total = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
    return total;
}
var totalBudget = budgetCalculator(5, 5, 5);
console.log(totalBudget);


function hotelCost(days){
    var cost = 0;
    if( days <= 10){
        cost = days * 100; 
    }
    else if(days <= 20){
        var firstTenDays = 10 * 100;
        var remaining = days - 10;
        var secondTenDays = remaining * (100 - 20); 
        cost = firstTenDays +  secondTenDays; 
    }
    else{
        var firstTenDays = 10 * 100; 
        var secondTenDays = 10 * (100 - 20); 
        var remaining = days - 20;
        var lastNumbersOfDays = remaining * 50;  
        cost = firstTenDays + secondTenDays + lastNumbersOfDays;

    }
    return cost;
}

var totalCost = hotelCost(25);
console.log(totalCost);


function megaFriend(friendName){
    megaName= friendName[0];
    for( var i = 0; i < friendName.length; i++){
        var element = friendName[i];
        if( element.length > megaName.length){
            megaName = element;
        }
    }
    return megaName;

}

var friendName = ['Nilima', 'Udhas', 'Shaba', 'Mahbub hosen', 'Niloy', 'Faisal', 'Nayeem Rahman'];
var name =  megaFriend(friendName);
console.log(name)