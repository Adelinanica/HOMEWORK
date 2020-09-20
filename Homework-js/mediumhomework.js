var today = new Date ();
var hourNow = today.getHours();
var message;

if (hourNow < 12  ) {
    message = "Good Morning!";
}  else if (hourNow > 18 ) {
    message = "Good Evening!"; 
}  else if (hourNow >12 ){
    message = "Good Afternoon!";
}
 console.log(hourNow);
 console.log(today);
 console.log(message);