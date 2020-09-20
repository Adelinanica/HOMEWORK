var firstName = ["Samantha", "Jessica", "Sarah"];
var lastName = ["Parker", "Jones", "Brady"]
function random (){
    return firstName[Math.floor(Math.random()* firstName.length)] + 
    " " 
    + lastName[Math.floor(Math.random()* lastName.length)]
    
}

console.log(random());