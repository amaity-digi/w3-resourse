//1. Write a JavaScript program to display the current day and time in the following format. 
//Sample Output : Today is : Tuesday.

const today = new Date();
const day = today.getDate();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + daylist[day]);