// ==================== Taxonomy of JavaScript Data Types ====================

/*
JavaScript types are broadly categorized into two groups based on how they are stored in memory and accessed:

1. Primitive (Call by Value):
- Stored directly in the location that the variable accesses.
- When copied, a separate copy of the value is created.
- 7 types: String, Number, Boolean, Null (empty), Undefined (declared but not assigned), Symbol (unique identifier), BigInt (large numbers).
*/

// Number
const score = 100;

// Number (JS doesn't separate floats/ints at the type level)
const scoreValue = 100.3;

// Boolean
const isLoggedIn = false;

// Null
const outsideTemp = null;

// Undefined
let userEmail;

// Symbols represent unique tokens. Even with identical descriptions, they are guaranteed to be unique.
const id = Symbol('123');
const anotherId = Symbol('123');

// Expected Output: false
console.log(id === anotherId);

// BigInt numbers are suffixed with an 'n'.
const bigNumber = 3248583929589292020n;


/*
2. Reference (Non-Primitive / Call by Reference):
- Stored in the heap, and variables hold a reference to that memory location.
- When copied, both variables point to the same memory reference.
- Core types: Arrays, Objects, Functions.
*/

// Array
const heroes = ["ironman", "spiderman", "thor"];

// Object (key-value pairs)
let myObj = {
    name: "loki",
    age: "29",
};

// Function (stored as a variable)
const myFunction = function(){
    console.log("Hello World");
};

// Checking types:
// Expected Output: "object" (typeof null is an object)
console.log(typeof outsideTemp);

/*
Return type of variables in JavaScript:
- Primitive values:
  - Number => "number"
  - String  => "string"
  - Boolean => "boolean"
  - null => "object"
  - undefined => "undefined"
  - Symbol => "symbol"
  - BigInt => "bigint"
- Non-Primitive values:
  - Array => "object"
  - Function => "function" (object function)
  - Object => "object"
*/


// ==================== Memory Allocation in JS ==================== 

/*
There are two types of memory: Stack and Heap.

1. Stack Memory (Used for Primitive types):
- You get a COPY of the declared variable.
- Modifying the copied variable does NOT affect the original variable.
*/

let myGameName = "sans";

// gets a copy of "sans"
let anotherName = myGameName;

// only changes the copy
anotherName = "mikey";

// Expected Output: "sans"
console.log(myGameName);

// Expected Output: "mikey"
console.log(anotherName);


/*
2. Heap Memory (Used for Non-Primitive / Reference types):
- You get a REFERENCE to the original object.
- Modifying the copied variable directly affects the original object because they point to the exact same memory space.
*/

let userOne = {
    email: "sp@gmail.com",
    upi: "user@ybl"
};

// points to the same reference in the Heap
let userTwo = userOne;

// changes the email property in the shared object
userTwo.email = "sans@gmail.com";

// Expected Output: "sans@gmail.com"
console.log(userOne.email);

// Expected Output: "sans@gmail.com"
console.log(userTwo.email);




