//Write a JavaScript program to create an array taking the middle elements 
//of the two arrays of integer and each length 3

function middleElement(arr1,arr2){
    const emptyArr = [];
    emptyArr.push(arr1[1], arr2[1]);
    return emptyArr;
}

console.log(middleElement([2,3,4], [4,6,8]));

//Write a JavaScript program to reverse the elements of a given array of integers of length 3. 

const array1 = [3,5,7];
const rev = array1.reverse();
console.log('reverse', rev);

//Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3

function sumOfThreeElements(arr1){
     return arr1[0] + arr1[1] + arr1[2];
}

console.log("Sum",sumOfThreeElements([8,5,2]));

//Write a JavaScript program to rotate the elements left in a given array of integers of length 3.

function rotateLeft(arr){
    return [arr[1], arr[2], arr[0]];
}

console.log("RotateLeft",rotateLeft([30,8,28]));

// Write a JavaScript program to check whether the first and last elements are the same
// in a given array of integers of length 3.

function checkFirstAndLastEle(arr){
   const check = arr[0] === arr[arr.length -1];
   return check;
}

console.log("checking FirstAndLastEle", checkFirstAndLastEle([3,76,3]));

// Write a JavaScript program to find the largest value?

const arr2 = [32,57,23];
const maxVal = Math.max(...arr2);
console.log("Largest", maxVal);

// 2nd Approach

const max = arr2.reduce((curr, acc) => Math.max(curr, acc), - Infinity);
console.log("max2", max);

//How to get unique values in an array??

const arr3 = [3,4,6,5,78,3,4,6,76];
const val = [...new Set(arr3)];
console.log("Unique",val);

//
