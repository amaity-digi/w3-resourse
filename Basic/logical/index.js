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

//sort() method

