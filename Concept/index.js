// What are the differences between call, apply, and bind?
//call

//The call method invokes the function with the specified
// context – the function is called as if it’s part of the object.

let Person = {
    name: "Aj",
    sal: 24
}

let Person1 = {
    name: "Akul",
    sal: 20
}

let Person2 = {
    name: "Anmol",
    sal: 32
}
function sayHello(param){
   console.log(param, "said", this.name, " is a good boy"); 
}

sayHello.call(Person, "John");

//apply

//The apply method is identical to the call method with the difference being in 
//how each method accepts their arguments. The call method accepts an argument list,
// whereas the apply method accepts an array of arguments.


function sayHellloApply(param){
console.log(param, "has got ",this.sal);
}

sayHellloApply.apply( Person1, ["Rahul"]);

//bind

//Unlike call and apply, the bind method doesn’t execute the function immediately.
// Instead, it returns a function that is tied to the object that can be executed later.
// We can then invoke that function calling it as you would a regular function.

function sayHelloBind(param){
    console.log(param, " isbecome a Player", this.name)
}

const binding = sayHelloBind.bind(Person2, "He");
console.log("first", binding);

const obj = {name: "Aj", sal: 2000, Id: 101};
for(let single in obj){
    console.log("obj", single); // got key
}

for(let single in obj){
    console.log("obj", obj[single]); // got value
}
//  Promises: 

let timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise completed!'); // resolves the promise after 1 second
    }, 1000);
  });
  
  timeoutPromise.then((result) => {
    console.log(result); // will print 'Promise completed!' after 1 second (when the Promise completes)
  });

  
// instanceof:

const users = ['Mike', 'Bob', 'Will'];

console.log(users instanceof Array);  // true
console.log(users instanceof Object);  // false
console.log(users instanceof Number);  //  false
console.log(users instanceof String);  //  false


