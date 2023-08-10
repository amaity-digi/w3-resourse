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
