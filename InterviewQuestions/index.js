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
]

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
        if (set.has(num)) {    // The has() method checks if a value is present in the set.
            duplicate.push(num);
        } else {
            set.add(num);    //The add() method adds a value to the set.
        }
    }
    return duplicate;
}

console.log("Duplicate", duplicateELeOfAnArray([2, 3, 5, 3, 4, 2]));

// 6. Collect books from array of objects and return collection of books as an array

let friends = [
    { name: "Aj", books: "Ram Kotha", age: 33 },
    { name: "Puja", books: "Ganth", age: 31 }
]

function getBooks(friends){
    let booksArray = [];
    for(let friend of friends){
        booksArray.push(friend.books);
    }
    return booksArray;
}

console.log("getBooks", getBooks(friends));
