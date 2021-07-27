
function countAnimal(depth) {
    var animals = 0;

    if (depth <= 10) {
        animals = depth * 50;
    }
    else if (depth <= 20) {
        var fristPart = 10 * 50;
        var remaining = depth - 10;
        var secondPart = remaining * 100;
        animals = fristPart + secondPart;
    }
    else {
        var fristPart = 10 * 50;
        var secondPart = 10 * 100;
        var remaining = depth - 20;
        var thirdPart = remaining * 300;
        animals = fristPart + secondPart + thirdPart;

    }
    return animals;
}
var totalAnimals = countAnimal(22);
console.log(totalAnimals);