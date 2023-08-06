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

// 11.How to insert new key data inside object?

const obj1 = {
    a: 'Ajeet'
}
obj1["b"] = "sai";
console.log(obj1);

//12. How to insert new key data inside Array?

const arrr = [23, 42, 1, "Ajeet", 24];
arrr.push('SAI'); // it will insert at the last index
arrr.unshift('Vivek'); // it will insert at the first index
arrr.pop();// it will remove at the last index
arrr.shift();// it will remove at the first index
arrr.splice(2, 0, "Moni");// it will insert data at after the length of array 2,and 0 means nothing will be deleted
console.log(arrr);
arrr.splice(4, 1, "Jha");// it will replace "Ajeet" and insert "Jha" at the same index
console.log(arrr);
arrr.splice(4, 1);//it will delete "jha" at the length 4 value;


//13. slice()
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]
console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//14. What is the difference b/w object and Json
{
    a: 1
}
// This is called object key and value pair,

// {
//     "b": 2
// }

//In json Key should be String with double code.

//15. this keyword
const obj3 = {
    name: "Ajeet",
    age: 31,
    lastName: function name(greet) {
        console.log(greet + " " + this.name);
    }
}

obj3.lastName("Good Evennig");

// if inside a obj, if any of keys hold a function, and inside this function if we want to achieve
// any other keys values directly, then we can't got the data, that'swhy using this keyword we achieve
//the data.
const keyWord = obj3.lastName;
console.log(keyWord("Hello"), 'aaa');
// Note: here we are calling directly obj3.lastName() , so that time this keyword scope is an object
//But if I assign this lastName with another variable, that time this keyword loose the scope and
//the scope is Window.

//16. bind
//So now keyWord is window scope, So that we need the bind that obj to achieve again obj value.

//17 Disadvantage of arrow function
// inside a object never used arrow dunction , the whole functionality is changed.
// if inside object we have function, and if you want to remove this function  and you want to
// try using arrow function, the behavier totally change, that time this keyword refers window object.

//Example::
const object5 = {
    name: "Ajeet",
    age: 31,
    lastName: function name(greet) {
        console.log(greet + " " + this.name);
    }
}

object5.lastName("Good AfterNoon");
//ans:  Good AfterNoon Ajeet

const ref = object5.lastName;

ref("Morning");
// ans  Morning not able to achieve this name.
const binding = ref.bind(object5);

binding("Hello");
// ans: Hello Ajeet  ,  after binding achieve the name.

// bind: Whenever we have method means function , you want to borrow the concept of this , used bind .

//Apply :
// apply is similar like bind
// If the function and object both are separated , and I want accoicate that object inside function
// we will go for apply keyword

function nameFun(greet) {
    console.log(greet, this.age);
}

const obj6 = {
    name: "Sudeep",
    age: 21
}

const obj7 = {
    name: "Sai",
    age: 23
}

nameFun.apply(obj6, ["age is: "]);
//ans:   age is:  21
undefined
nameFun.apply(obj7, ["age is: "]);
//ans:  age is:  23

// How to create a table using JS ex: 5*1 = 5

const table = [];
for (let i = 1; i <= 10; i++) {
    table.push(`5 * ${i} = ${5 * i}`)
}
console.log(table);

//var keyWord
// if anything declared declared as a var keyword inside block , that means we can acces outside block also, beacse of global scope
console.log(tv);
{
    var tv = 'LCD';
    let cd = 'Onida';

}


// inside function var only act like a block scope, It's not accesable outside, nut inside block it's accesable 
printName();
function printName() {
    var sal = 22;
    let name = "sona"
    console.log(sal, name);
}

// Error: Uncaught ReferenceError: sal is not defined
// Beacase inside function var is not globally, its inside block scope, whenever inside this function we have var keyword


//Note::
// Whenever we write anything inside in curly breses block scope will create, so that if inside curly breses
// var keyword present we can access globally, because it is in global scope.

// Whenever we created function, that time function scope or local scope will created
//for that reason only var keyword is not accessable outside function, it is inside local scope. 

printName1();
function printName1() {
    var sal = 22;
    let name = "sona"
}
console.log(sal);

// inside function if we have any varible with declared var or let or const keyword , it is inside local scope only,
// but the function itself is golbally means it is inside global scope, thatwhy we can call function before execution.

//TDZ
//script scope

const name7 = "Ajeet";
let age = 22;
var sal = 9999;
{
    console.log(name7);
    console.log(age);
    console.log(sal);
}
//whenever we have declared anything globally and we are access it inside block, we can access, that time
// script scope will created. if declared as a let and const keyword that means it will present inside
// script scope with empty value first time, but if it is declared as a var keyword , then it is inside global scope

// var keyword
// whenever we have declared with var keyword on a global context one raplica or copy will created with
//  some placeholder like undefined or empty string. but we don't have actual value at a time, once our curser
//goes to next line , then only we got the value.

// script scope
// whenever we have declared globally with let or const keywords script scope will created.

var name88 = 'Pushpa';
{
    var name88 = "Ajjjet";
}
function naming() {
    var name88 = "Amit"
}
console.log(name88); // ans Ajjjet
// first it will prioty of block scope, then whatever thing is present then less prioty is function scope
// it is declared with var keyword so, it will override the name.
