function tinyFriend(friends){
    var min = friends[0].length;
    var shortenName = friends[0]
    for( var i = 0; i < friends.length; i++){
        var element = friends[i];
        if(min > element.length){
            min = element.length;
        }
    }
    for( var j = 0; j < friends.length; j++ ){
        if(friends[j].length == min){
            shortenName = friends[j];
        }
    }
    return shortenName;
}
var friends = ['akas', 'lota', 'saad', 'farabi', 'farzana', 'lim', 'jim'];
var minName = tinyFriend(friends);
console.log(minName)