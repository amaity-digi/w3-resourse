// How to check anagram 
function anagram(str1, str2) {
    let a = str1.toLowerCase();
    let b = str2.toLowerCase();
    a = a.split("").sort().join("");
    b = b.split("").sort().join("");
    return a === b;
}

setTimeout
function doSomethingAsyn(cb) {
    setTimeout(() => {
        console.log("Async Operation!!");
        cb();
    }, 5000);
}

function afterAsyncOperation() {
    console.log("callback executed!!");
}

console.log("start");
doSomethingAsyn(afterAsyncOperation);
console.log("end");

//How to find common element between two array
function findCommonElement(arr1, arr2) {
    const common = [];
    for (let num of arr1) {
        if (arr2.includes(num)) {
            common.push(num);
        }
    }
    return common;
}

findCommonElement([2, 3, 4, 6], [5, 2, 7, 4]);

//using indexOf method finding common element

function findCommonElement(arr1, arr2) {
    const common = [];
    for (let num of arr1) {
        if (arr2.indexOf(num) !== 1) {
            common.push(num);
        }
    }
    return common;
}

findCommonElement([4], [5, 1, 7, 8, 4]);

//using find method to finding commeon element

function findCommonElement(arr1, arr2) {

    const common = [];
    for (let num of arr1) {
        if (arr2.find((ele) => ele === num)) {
            common.push(num)
        }
    }
    return common;
}

findCommonElement([5], [5, 1, 7, 8, 4]);

// How to find element given array is empty or not??

const a = [];
const b = [1, 2, 3, 4];
function arrayEmptyOrNot(array) {
    if (array.length === 0) {
        console.log("Given array is empty!");
    }
    else if (array.length > 0) {
        console.log(`Array length is ${array.length}`)
    }
}
console.log(arrayEmptyOrNot(b));

//nth fibonacci using recursion

function fibonacci(n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

fibonacci(4);

//How to check if a given array is empty or not.
let array = [1, 2, 3];
let array1 = [];
function checkArr(arr) {
    if (arr.length === 0) {
        console.log("Array is Empty")
    } else {
        console.log(`The length of array is: ${arr.length}`);
    }
}
checkArr(array1);

//How to check if a given number is integer or desimal
let num = 54;
let num1 = 88.6;
function checkValue(number) {
    if (number % 1 === 0) {
        console.log("number is integer");
    } else {
        console.log("number is desimal");
    }
}

checkValue(num1);

//Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.

// function divideNumbers(n1, n2) {
//     if (n2 === 0) {
//       throw new Error('Error: Division by zero is not allowed.');
//     }  
//     return n1 / n2;
//   }
//   console.log(divideNumbers(8, 3));
//   console.log(divideNumbers(8, 0));

// optimize color code using number

const getBgColor = (param) => {
    return{
        0: "",
        1: "Red",
        2: "Blue",
        3: "Yellow"
    }}

    console.log(getBgColor()[3]);
    
// if I have undifined or null or "" then I don't want this values, I want if my values is present
// that values should display , others no need

const object = {
    a: "Good",
    b: "",
    c: undefined,
    d: null,
    e: "Something!",
    f: "Ajeet"
}

const newObj = {};
for(let [key,value] of Object.entries(object)){
    if(value){
        newObj[key] = value;
    }
}

console.log(newObj,'newValues');


//type coercion
console.log([] == ![]); // true
console.log(typeof [],'obj'); // object
console.log(typeof ![], 'boolean'); //false
console.log(![], 'res'); // false
console.log([].toString(), 'res1'); //""

// => []==![]
// []==false // Type conversion by the statement itself
// []==0 // To number of right operand
// ""==0 // To Primitive call for Array which will in this case convert to empty string
// 0==0 // To number call of "" which is 0
// true

// JavaScript performs type coercion, converting false to a numeric value (0)
//and due to another type coercion, the empty array is converted to an empty string '',
// which is also converted to the numeric value 0. Hence, the expression 0 == 0 evaluates to true.


console.log(NaN === NaN);// false
// NaN (Not a Number) is a special numeric value in JavaScript, So value should be different.
console.log(typeof NaN);

console.log(null == undefined); // Ans is true.
//In JavaScript, null and undefined are considered equal only when using loose equality (==). 
//Therefore, null == undefined evaluates to true.


console.log(null === undefined); // false, because both type are different, null typeof is object and undefined typeof is undefined.

//Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

function checkStartsWith(str){
    if(str.startsWith("V")){
     console.log("strat with the given string");
    }else{
        console.log("false");
    }
}

console.log(checkStartsWith("Vivek"));

//Write a JavaScript program to produce a new string that has the first 3 characters in lower case 
//from a given string. If the string length is less than 3 convert all the characters to upper case.

//phython is string here, I want PHYthon
function lowerUpper(str){
  const upper = str.substring(0,3).toUpperCase();
  const lower = str.substring(3).toLowerCase();
  return upper + lower;
}

console.log((lowerUpper("phython")));

//Write a JavaScript program to concatenate two strings except for their first character.

function concatenate(str1, str2){
    const s1 = str1.substring(1, str1.length);
    console.log(s1,'111');
    const s2 = str2.substring(1, str2.length);
    console.log(s2,'222');
    return s1 + s2;
}

console.log(concatenate("Phython", "JS"));

// Write a JavaScript program to create a new string 
//without the first and last characters of a given string. 

function withoutFirstAndLast(str1){
//   const withoutFirst = str1.substring(1);
//   console.log(withoutFirst,'1');
//   const withoutLast = str1.substring(0, str1.length-1);
//   console.log(withoutLast);
  const withOutFirstAndLast = str1.substring(1, str1.length -1);
  return withOutFirstAndLast;
   
}

console.log(withoutFirstAndLast("Javascript"));

//Write a JavaScript program to extract the first half of a even string.

function halfOfStr(str){
   if(str.length % 2 == 0){
     return str.slice(0, str.length /2);
   }
   return str;
}

console.log(halfOfStr("JavaScript"));

// Write a JavaScript program to concatenate two strings and return the result. 
//If the length of the strings does not match, then remove the characters from the longer string. 

function removeLongerIfBothLengthIsNotMatch(str1, str2){
    const min = Math.min(str1.length, str2.length);

    return str1.substring(str1.length - min) + str2.substring(str2.length -min);
}

console.log(removeLongerIfBothLengthIsNotMatch("JAVA", "Javascript"));

//Write a JavaScript program to display the city name 
//if the string begins with "Los" or "New" otherwise return blank.  

function dispayCityNAme(str){
    if(str.length >= 3 && ((str.substring(0,3) == "Los") || (str.substring(0,3) == "New"))){
        return str;
    } 
    return "";
}

console.log(dispayCityNAme("NewYork"));
console.log(dispayCityNAme("Los Kolkata"));
console.log(dispayCityNAme("Dubai"));

//Write a JavaScript program to rotate the elements left in a given array of integers of length 3. 

function rotateArrayAtLeft(arr){
   return [arr[1],arr[2],arr[0]];
}

console.log(rotateArrayAtLeft([3,5,7]));


