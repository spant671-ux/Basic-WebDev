// ==================== Objects in JavaScript (Literals vs Singleton) ====================

/*
JavaScript Objects store data in key-value pairs.
- Singleton: An object created using constructors or Object.create() (only one instance).
- Object Literals: Objects declared using `{}` notation. Not a singleton.
*/

// 1. Symbol as an Object Key
// Define a Symbol primitive
const mySym = Symbol("key1")

// Object Literal Declaration
const JsUser = {
    name: "sans",
    // To use a Symbol as an object key, enclose it in square brackets [mySym].
    // Without brackets (mySym: "myKey1"), JS treats 'mySym' as a regular string key.
    [mySym]: "myKey1",
    age: 21,
    location: "Pithoragarh",
    email: "sans@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// ==================== Accessing Object Properties ====================

// Method 1: Dot Notation (standard, but cannot access Symbol keys or keys with spaces)
// console.log(JsUser.email)

// Method 2: Square Bracket Notation (required for dynamic keys, keys with spaces, or string keys)
// console.log(JsUser["email"]);

// Accessing property defined with a Symbol key (MUST use square brackets)
// console.log(JsUser[mySym])


// ==================== Modifying & Freezing Objects ====================

// Updating property value
JsUser.email = "mikey@gmail.com"

// Object.freeze(): Freezes an object so existing properties cannot be modified, added, or deleted.
// Object.freeze(JsUser)
// JsUser.email = "sans@microsoft.com" // Will be ignored silently (or throw error in strict mode)


// ==================== Functions (Methods) in Objects ====================

// Adding a method to the object
JsUser.greeting = function(){
    console.log("Hello JsUser")
}

// Function Execution vs Function Reference:
// - JsUser.greeting(): Executes the function and logs output.
// - JsUser.greeting: Returns reference to the function object itself.
console.log(JsUser.greeting())
console.log(JsUser.greeting)

// Using 'this' keyword to access properties of the current object
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())