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

//6. How to reverse a Number
const num = 827265213;
const convert = num.toString().split("").reverse().join("");
console.log(Number(convert));

//7. No. of occurance of the given string

const name = 'Ajeet Jha';
const lowercaseName = name.toLowerCase();
const letterCount = {};
for (let letter of lowercaseName) {
    if (letterCount[letter]) {
        letterCount[letter]++;
    } else {
        letterCount[letter] = 1;
    }
}

console.log(letterCount);

// 8. if inside object(key and value pair) ,value is empty or undifined or null,
// then only print those keys which value is present  .

const obj = {
    a: 21,
    b: "Ajeet",
    c: "",
    d: { "sal": 7888 },
    e: undefined,
    f: null,
    g: [82, 3, 2, 4]
}

const newObj = {};
for (let [key, value] of Object.entries(obj)) {
    if (value) {
        newObj[key] = value;
    }
}
console.log(newObj);

//9. Inside array I want unique values
const array1 = [2, 4, 6, 3, 7, 4, 26, 2, 3];
const uniqe = [...new Set(array1)]
console.log(array1);

// 10. I want to check inside this String How many vowels is present
const nameValue = "Ashis";
const vowels = "aeiouAEIOU";
let count = 0;
for (let letter of nameValue) {
    if (vowels.includes(letter)) {
        count++;
    }
}
console.log(count);

