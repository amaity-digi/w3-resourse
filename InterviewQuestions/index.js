//1.  Find the frequency of elements in array.
// let arr = ["hello", "world", "java", "hello", "java"];

function frequencyOfEleInArray(arr) {
  let emptyArr = [];
  for (let single of arr) {
    if (emptyArr[single]) {
      emptyArr[single]++;
    } else {
      emptyArr[single] = 1;
    }
  }
  return emptyArr;
}

console.log(frequencyOfEleInArray(["hello", "world", "java", "hello", "java"]));

// 2. Sort this array based on age? and also based on name??

let people = [
  { name: "Sai", age: 23 },
  { name: "Vivek", age: 22 },
  { name: "Moni", age: 20 },
  { name: "AJ", age: 27 },
  { name: "Ashish", age: 25 },
  { name: "Puja", age: 26 },
];

const sortedByAge = people.sort((a, b) => a.age - b.age); // sorted based on age asc order.
console.log("Sorted By Age: ", sortedByAge);

const sortedByName = people.sort((a, b) => a.name.localeCompare(b.name)); // sorted based on name.
console.log("Sorted By Name: ", sortedByName);

//3. Find the nth largest element in a sorted array

function nthLargest(n) {
  let arr = [200, 100, 500, 400];
  const sortedArr = arr.sort((a, b) => a - b);
  const nthLargest = sortedArr[sortedArr.length - n];
  return nthLargest;
}

console.log(nthLargest(2)); // finding 2nd largest ele of an array.

//4. Remove duplicates from an array
let arr1 = [32, 243, 13, 13, 43, 56, 76, 55, 45, 54, 45];
const removedDup = [...new Set(arr1)];
console.log("Removed Dup: ", removedDup);

//5. Print all duplicate elements of an array

function duplicateELeOfAnArray(arr) {
  const set = new Set();
  let duplicate = [];
  for (let num of arr) {
    if (set.has(num)) {
      // The has() method checks if a value is present in the set.
      duplicate.push(num);
    } else {
      set.add(num); //The add() method adds a value to the set.
    }
  }
  return duplicate;
}

console.log("Duplicate", duplicateELeOfAnArray([2, 3, 5, 3, 4, 2]));

// 6. Collect books from array of objects and return collection of books as an array

let friends = [
  { name: "Aj", books: "Ram Kotha", age: 33 },
  { name: "Puja", books: "Ganth", age: 31 },
];

function getBooks(friends) {
  let booksArray = [];
  for (let friend of friends) {
    booksArray.push(friend.books);
  }
  return booksArray;
}

console.log("getBooks", getBooks(friends));

// you have few fruits, now I count total count of each fruits, I don't want repeted fruits.

const fruits = [
  { Apple: 4, Orange: 7, Grape: 3 },
  { Guava: 7, Lemon: 7, Apple: 3 },
  { Orange: 14, Apple: 7, Pineapple: 13 },
];

function countFruits() {
    const emptyObj = {};
   fruits.forEach((element) => {
    for(let single in element){
        if(emptyObj[single]){
            emptyObj[single] = emptyObj[single] + element[single];
        }else{
            emptyObj[single] = element[single];
        }
    }
   
   })

   return emptyObj;
}

console.log(countFruits(fruits));

// currency format

const price = 1000;
let rupee = Intl.NumberFormat('en-IN',{
style: "currency",
   currency: "INR" 
}
);
console.log(rupee.format(price)); // INR $1,000.00

// USD 

const price1 = 600;
let rupee1 = Intl.NumberFormat('en-US',{
style: "currency",
currency: "USD" 
}
);
console.log(rupee1.format(price1));// $600.00

// Second largest in an array??
const myArr = [3,4,10,6];
const secondLargest = myArr.sort((a,b) => b - a)[1];
console.log("secondLargest", secondLargest);

// last item of an array??
let arr = [2,4,5,2,5];
const last = arr.slice(-1);
console.log("Last item of an array: ", last);

// Reverse a  number without converting it to an array in JS?
let number = 7631;
let anotherVariable = 0;
while(number > 0){
  anotherVariable = number % 10 + anotherVariable * 10;
  number = Math.floor(number/10);
}

console.log("Reverse", anotherVariable);
