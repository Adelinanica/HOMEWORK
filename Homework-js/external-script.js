function convertMToI(meters) {
  var i = meters * 39.37;
  return i;
}
var m = 30;

console.log(convertMToI(m)); //30 * 39.37

m = 25;
console.log(convertMToI(m)); //25 * 39.37

m = 67;
console.log(convertMToI(m)); //67 * 39.37

<<<<<<< HEAD
 

 function convertCToF(celsius) {
    var f = celsius * 9/5 + 32;
     return f;
=======
// you need to use the parameter inside the function. So use celsius instead c
function convertCToF(celsius) {
  var f = (c * 9) / 5 + 32;
  return f;
>>>>>>> master
}
var c = 45;
console.log(convertCToF(c));

var c = 15;
console.log(convertCToF(c));

var c = -20;
console.log(convertCToF(c));
