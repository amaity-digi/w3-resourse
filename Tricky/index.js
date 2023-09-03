//1

function fruits(){
    console.log(name); // undefined , because of javascript hosting  don't allow us to write use literal before declaring them. variable is allow to used before declaring them.
   // console.log(price); // ReferenceError: Cannot access 'price' before initialization

    var name = "Ajeet";
    let price = 90000;
}

fruits();

//2

for(var i = 0; i < 3; i++){
    setTimeout(() => {
        console.log(i) // 3 3 3
    }, 1000);
}

// ans is 3 times 3 3 3 after 3 sec.

// why I am telling you.
// Reason : Whenever we are using var keyword means this has global scope. we know that setTimeout will
// take some time to provide the output. before that loop is already finished.
// Basically i value in global scope is 3. after that setTimeout print three times console.log.

//3

for(let i = 0; i < 3; i++){
    setTimeout(() => {
        console.log(i); //0 1 2
    }, 1000);
}

// Why??
// let don't have global scope , it has only block scope.It will run only inside this block whatever 
// present that only.thatwhy every setTimeout it has different value.

//4

console.warn(+true); // 1
console.warn(typeof + true ,'type'); // number

//5

console.warn(!"Sai"); // false
console.log(!!"Suraj"); // true
console.warn(typeof "Sakib"); // string

//6

let data = "size";
const bird = {
  size: "small"
}

console.log(bird[data],'1'); // small
console.log(bird["size"],'2'); // small
console.log(bird.size,'3'); // small
console.log(bird.data,'4'); // undefined

//7

let a = {name: "Ajeet"}
let b;

b=a;
a.name="Ashish";
console.log(b.name); // ans is Ashish 

//8

var x;
var x = 10; // using var keyword we can declared one varible again and again.
console.log(x,'var2'); // 10

//9

// var y;
// let y = 100;
// console.log(y,'let&var'); // getting error , SyntaxError: Identifier 'y' has already been declared

//10

let d = 20; // typeof is number
let e = new Number(20); // typeof is object
console.log(d == e);
console.log(d === e);
console.log(typeof d);
console.log( typeof e);

//11

let name;
nmea= {}; // Typo!
console.log(name); //undefined

//12

function fruit(){
    console.log("Woof!");
}
fruit.name = "Apple"; // this line is not impact in this fruit() 
fruit(); // Woof!

//13

function sum (a,b){
    return a + b;
}

console.log(sum(10,"2")); // 102 string is concatinate to number

//14

let number = 0;
console.log(number++); // 0 because here 1st printed the value then increment so in this line number is after printing 1.
console.log(++number); // 1+ 1 = 2 then printed, so ans is 2.
console.log(number); // 2

//15 

function getAge(...arg){
  console.log( typeof arg); // because typeof array is object in javascript.
}

getAge(11);

//16

const sum1 = eval("4*2+5"); // ans is 13 , because eval function make it as a number and * is higger authority compare to +, so 1st * then +.
console.log(sum1);

//17

//How long sessionStorage is accessible in our browser??

//sessionStorage.setItem("User", "Boos");
// whenwver you close the tabs or browser .

//18

const obj = {1: "a", 2: "c", 3: "d", "Hello": "Bro"};
console.log(obj.hasOwnProperty(1));//ans is true. It will check the specific key is present or not and return boolean value.
console.log(obj.hasOwnProperty("He"));//false
console.log(obj.hasOwnProperty("Hello"));//true , if the key is string then pass inside ""(cote).
console.log(obj.hasOwnProperty("1"))// if it is number , we can pass inside ""(cote) also.

//19

const obj3 = {a: "one", b: "two", a: "Repeat"};
console.log(obj3, "repeat but the position of that key is same.")//ans is { a: 'Repeat', b: 'two' }'


//20

for(let i = 1; i<5; i++){
    if(i === 3) continue; // whenever i==3 for loops is exit that value.
    console.log(i); // 1, 2 4
}