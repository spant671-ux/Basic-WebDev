// ==================== 'this' Keyword & Object Context ====================

// The 'this' keyword refers to the current context (the object calling the method).
const user = {
    username: "sans",
    price: 999,

    welcomeMessage: function(){
        // 'this.username' accesses the 'username' property of the current 'user' context.
        console.log(`${this.username}, Welcome to Website`);
        
        // Prints the current context (the entire 'user' object):
        console.log(this);
    }
};

// Calling welcomeMessage() when user.username is "sans":
// Expected Output: "sans, Welcome to Website" followed by the user object
// user.welcomeMessage();

// Changing the context by updating the username property:
// user.username = "sam";

// Calling welcomeMessage() with updated context:
// Expected Output: "sam, Welcome to Website" followed by the updated user object
// user.welcomeMessage();


// ==================== Global Context of 'this' ====================

// Top-level 'this' behavior depends on the execution environment:
// 1. In Node.js environment: Global top-level 'this' refers to an empty object {} (module.exports).
// 2. In Browser environment: Global top-level 'this' refers to the 'window' object.
// Expected Output in Node.js: {}
// console.log(this);


// ==================== 'this' in Regular Functions ====================

// In regular functions, 'this' has its own dynamic context bound to the global object when called standalone.
// function chai(){
//     let username = "sans";
//     // 'this' refers to Node's global object, not function-local variables!
//     // Expected Output: undefined (because global object has no 'username' property)
//     console.log(this.username);
// }
// chai();


// ==================== 'this' in Arrow Functions ====================

// Arrow functions (() => {}) DO NOT have their own 'this' binding.
// Instead, they lexically inherit 'this' from the enclosing parent scope.
const chai = () => {
    let username = "sans";
    
    // In top-level Node module scope, the inherited 'this' is {}
    // Expected Output: {}
    console.log(this);
};

// chai();


// ==================== Arrow Function Syntaxes (Explicit vs. Implicit Return) ====================

// 1. Explicit Return: When using curly braces {}, the 'return' keyword is MANDATORY.
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// };

// 2. Implicit Return (One-liner): Omit braces and 'return' keyword to return the value automatically.
// const addTwo = (num1, num2) => num1 + num2;

// 3. Implicit Return (Parentheses): Parentheses () wrap the expression and do NOT require 'return'.
// const addTwo = (num1, num2) => ( num1 + num2 );

// 4. Implicit Object Return: Object literals MUST be wrapped in parentheses ({ ... }) to return implicitly.
// Without parentheses (), JS interprets curly braces as a function body block rather than an object literal.
const addTwo = (num1, num2) => ({ username: "sans" });

// Invoking addTwo(5, 8) returns the implicitly wrapped object:
// Expected Output: { username: 'sans' }
console.log(addTwo(5, 8));

    