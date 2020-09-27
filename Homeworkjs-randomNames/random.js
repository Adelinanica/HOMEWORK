var firstName = ["Samantha", "Jessica", "Sarah", "Lisa"];
var lastName = ["Parker", "Jones", "Brady","Bing"]


function generateName(){
   
  var randomFirstName = Math.floor(Math.random()* firstName.length);
  var randomFn = firstName[randomFirstName];

  var randomLastName = Math.floor(Math.random()* lastName.length);
  var randomLn = lastName[randomLastName];

   (randomFn!=0 && randomLn!=0);
  return (randomFn + " " + randomLn)
}

console.log(generateName());

/*var firstName = ["Samantha", "Jessica", "Sarah"];
var lastName = ["Parker", "Jones", "Brady"];

function random() {
     var FName = [Math.floor(Math.random() * firstName.length)];
   
    var LName= [Math.floor(Math.random()* lastName.length)];
 
    return (firstName + " " + lastName);
  
  
}
console.log(firstName + " " + lastName);*/


var firstName = ["Samantha", "Jessica", "Sarah"];
var lastName = ["Parker", "Jones", "Brady"]
function random() {
  return
     firstName[Math.floor(Math.random() * firstName.length)] + " " + 
     lastName[Math.floor(Math.random()* lastName.length)]
}

console.log(random());




