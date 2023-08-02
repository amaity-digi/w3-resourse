//1. Write a JavaScript program to display the current day in the following format. 
//Sample Output : Today is : Tuesday.

const today = new Date();
const day = today.getDate();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + daylist[day]);

//2. Write a JavaScript program to get the website URL (loading page).

// const urlOfWebsite = document.URL;
// console.log(urlOfWebsite);

//3. Write a JavaScript program to reverse a given string. 

const str = "Ajeet";
const finalStr = str.split("").reverse().join("");
console.log(finalStr);

//4. Write a JavaScript program to concatenate two strings except for their first character.

function concatenate(str1, str2) {
    str1 = str1.substring(1, str1.length);
    str2 = str2.substring(1, str2.length);
    return str1 + str2;
}

concatenate("Ashish", "Vivek");

// 5. Write a JavaScript program to convert a given number into hours and minutes.

function timeHouAndMin(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return hours + ":" + minutes;
}

console.log(timeHouAndMin(65));
