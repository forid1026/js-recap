// let year = 2020;
// if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0) ){
//     console.log('Your input year is a leaf year!');
// }
// else{
//     console.log('Your input year is not a leaf year!')
// }

function isLeapYear(year){
    if(( year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        return true;
    }
    else{
        return false;
    }
}
const result = isLeapYear(2016);
console.log(result)



