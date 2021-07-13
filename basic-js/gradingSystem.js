// A+ = 80+
// A = 75
// A- = 70
// B+ = 65
// B =60
// C+ = 55
// C = 50
// C- = 45
// D = 40
// F = less than 40

var marks = 0


if(marks >= 80){
    console.log('Your Grade Is: A+');
}
else if(marks < 80 && marks >= 75){
    console.log('Your Grade Is: A' );
}
else if(marks < 75 && marks >= 70){
    console.log('Your Grade Is: A-' );
}
else if(marks < 70 && marks >= 65){
    console.log('Your Grade Is: B+' );
}
else if(marks < 65 && marks >= 60){
    console.log('Your Grade Is: B' );
}
else if(marks < 60 && marks >= 55){
    console.log('Your Grade Is: B-' );
}
else if(marks < 55 && marks >= 50){
    console.log('Your Grade Is: C+' );
}
else if(marks < 50 && marks >= 45 ){
    console.log('Your Grade Is: C' );
}
else if(marks < 45 && marks >= 40){
    console.log('Your Grade Is: D' );
}
else{
    console.log('Back Bencher!');
}