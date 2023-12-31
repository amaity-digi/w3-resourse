//Write a JavaScript program to count the number of vowels in a given string.  

function vowelsCount(str) {
    const vowels= "AEIOUaeiou";
    let count = 0;
    for(let countLetter of str)
        {debugger;
            if(vowels.includes(countLetter)){
                count++;
            }
        
}
    return count
}

console.log(vowelsCount("Vivek"));

// whenever I got space, my next value should be capital and first letter also capital.

function spaceNextValcapitalAndfirstAlso(str){
   let result = "";
   for(let i = 0; i < str.length; i++){
    if(i === 0 || str[i -1] === " "){
        result += str[i].toUpperCase();
    }else{
        result += str[i];
    }
   }
   return result;
}

console.log(spaceNextValcapitalAndfirstAlso("sai kumar tripathi"));

//  Write a JavaScript program to find the longest string from a given array of strings.  

function longestStringFun(str){
  let longestStr = str[0];
  for(let singleStr of str){
    if(singleStr.length > longestStr.length){
        longestStr = singleStr;
    }
  }
  return longestStr;
}

console.log(longestStringFun(["Ashish", "Sai", "Ajeet Kumar", "Vivek"]));

// Whenever I have d in a given string , it should be replace by "a" in javascript
// const string = "abcdxyz"
 
const string = "abcdxyzdhk"
const newString = string.replace("d", "a"); // It will replace only first time whenever it satisfied the condition.
const str2 = string.replace(/d/g, "Sai"); // The regular expression /d/g matches all occurrences of the letter d in the string. The g flag tells the replace() method to replace all occurrences of the match, not just the first one.
console.log("Replace1", newString);
console.log("Replace2", str2);

//Write a JavaScript program to swap two halves of a given array of integers of even length.

function swap(array) {
    if(array.length % 2 !== 0){
        return false;
    }
    let firstHalf = array.slice(0, array.length / 2);
    let secondHalf = array.slice(array.length / 2);
    for(let i = 0 ; i < firstHalf.length;i++){
        debugger;
        let temp = firstHalf[i];
        firstHalf[i] = secondHalf[i];
        secondHalf[i] = temp;
    } 
    return firstHalf.concat(secondHalf);
}

console.log(swap([1,2,3,4,5,6]));

function swapAnotherWay(arr){
      if(arr.length % 2 !== 0){
        return false;
      }
      let firstHalf = arr.slice(0,arr.length/2); // [1,2,3];
      let secondHalf = arr.slice(arr.length /2); // [4,5,6];
      return secondHalf.concat(firstHalf);
}

console.log("Another way to swap an array", swapAnotherWay([2,3,4,6,8,9]));

// Write a JavaScript program to change the capitalization of all letters in a given string. example: Germany to gERMANY.

function convertCapitalToSmallAndSmallToCap(str){
   let newStr = "";
   for(let character of str){
    if(character.toLowerCase() === character){
        newStr += character.toUpperCase();
    }else{
        newStr += character.toLowerCase();
    }
   }
   return newStr;
}

console.log(convertCapitalToSmallAndSmallToCap("TamilNaru"));

// Write a JavaScript program to convert a given number into hours and minutes.

function convertHourAndMinutes(num) {
    let hours = Math.floor(num / 60);
    let mins = num % 60;
    return hours + " : " + mins;
}

console.log(convertHourAndMinutes(130));

// Write a JavaScript program to capitalize the first letter of each word in a given string.

function capitalLetters(str){
    const newStr = str.split(" ");
    const array = [];
    for(let word of newStr){
        const caplitalized =word.charAt(0).toUpperCase() + word.slice(1);
        array.push(caplitalized);
    }
    return array.join(" ");
}

console.log(capitalLetters("The little brown box!"));

// Scroll to the top of the page

// const goToTop = () => window.scrollTo(0,0);
// goToTop();

// check if a variable is an array

 const isArray = (arr) => Array.isArray(arr);

console.log(isArray([2,3,6]));// truw
console.log(isArray({"Name": "djs"})); // false

// calculate the number of days between two dates using javascript

function NumOfDaysBtwTwoDayas(startDateStr, endDateStr){
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    if(isNaN(startDate) || isNaN(endDate)){
        return "Invalid Date Format";
    }
    const timeDiff = endDate - startDate;
    const daysDiff = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
    return daysDiff;
}

console.log(NumOfDaysBtwTwoDayas("2023-10-20", "2023-10-28"));

//Check the string is Palidrome or not

function isPalindrome(str){
    const newStr = str.split("").reverse().join("");
    return newStr === str;
}

console.log(isPalindrome("madam")); // true

// get the current time in hh:mm:ss format

const getTime = () =>new Date().toLocaleTimeString();
console.log(getTime());

// get the current date in dd:mm:yyyy format

const getDate = () => new Date().toLocaleDateString();
console.log(getDate());

//check if an object is empty or not

const isEmptyObj = (obj) => Object.keys(obj).length === 0 ;
console.log("isEmpObj1", isEmptyObj({}));
console.log("isEmpObj2",isEmptyObj({"age": 29}));

//Check if an Array is empty or not

function isArrayEmpty(arr){
    return Array.isArray(arr) && arr.length > 0;
}

console.log(isArrayEmpty([]));//false;
console.log(isArrayEmpty([2,3,4])); // true;

//Find the max value in an array
const maxval = [3,345,2,4,643,234,224,13];
const maxValFind = Math.max(...maxval);
console.log(maxValFind);

// sort Array Acs
const  sortArrAsc = (arr) => arr.sort((a,b) => a - b);
console.log(sortArrAsc([2,3,56,33,52,5]));

//
const  sortArrDsc = (arr) => arr.sort((a,b) => b - a);
console.log(sortArrDsc([33,52,5]));

// Extract the domain name from an email

const extraDomainBefore = (email) => email.split("@")[0]; // this is after split ==> [ 'amaity', 'digisprint.com' ] , zeroth index
const extraDomainAfter = (email) => email.split("@")[1]; // first Index ==> digisprint.com

console.log(extraDomainBefore("amaity@digisprint.com")); 
console.log(extraDomainAfter("amaity@digisprint.com")); 
