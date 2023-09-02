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

