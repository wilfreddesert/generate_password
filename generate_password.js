function pass_gen() {
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var n = prompt("What's the length of the password?");
var num = prompt("How many numbers should there be?");
var arr = [];
var numb = "0123456789";
var abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
for (let i = 0;i<n-num;i++) {
arr.push(abc[Math.floor(Math.random()*33)]);
}
for (let i = 0;i<num;i++) {
arr.push(numb[Math.floor(Math.random()*10)]);
}
return shuffle(arr).join('');
}