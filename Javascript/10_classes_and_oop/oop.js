/**
 * ============================================================================
 * Object-Oriented Programming (OOP) in JavaScript
 * ============================================================================
 * 
 * CORE CONCEPTS:
 * 1. Object Literal: The fundamental base unit in JS (collection of properties and methods).
 * 2. Constructor Function: A template/blueprint to generate multiple object instances.
 * 3. The 'this' Keyword: Refers to the current execution context (who called the code).
 * 4. The 'new' Keyword: Creates an isolated, new instance from a constructor function.
 */

// ============================================================================
// 1. Object Literal (Basic Pattern)
// ============================================================================

const user = {
    username: 'sans',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from the database.");
        // 'this' refers to the current execution context (here, the 'user' object):
        // console.log(`Username: ${this.username}`);
        console.log(this); // Prints the entire 'user' object
    } 
};

// Accessing properties and methods:
// console.log(user.username);
// console.log(user.getUserDetails());

/**
 * Global Context 'this':
 * In Node.js environment: Top-level 'this' refers to an empty object '{}' (module.exports).
 * In Browser environment: Top-level 'this' refers to the global 'window' object.
 */
// console.log(this);


// ============================================================================
// 2. Constructor Functions (Blueprint for Multiple Instances)
// ============================================================================

/**
 * Problem with Object Literals:
 * If we need 100 users, creating 100 object literals manually is redundant and violates DRY.
 * 
 * Solution: Constructor Functions
 * - Named with PascalCase by convention (User, Car, Product).
 * - Acts as an instance generator.
 */
function User(username, loginCount, isLoggedIN){
    // 'this' refers to the newly created instance when called with 'new'
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIN = isLoggedIN;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    };

    // 'return this;' is implicitly done by JavaScript when using 'new'.
    // Including it explicitly is optional but safe.
    return this;
}


// ============================================================================
// 3. The 'new' Keyword and Instance Isolation
// ============================================================================

/**
 * CRITICAL IMPORTANCE OF 'new':
 * If you call 'User(...)' without 'new':
 * - 'this' binds to the global scope (or undefined in strict mode).
 * - userTwo would OVERWRITE userOne's values globally!
 * 
 * With 'new':
 * - A brand new empty object ({}) is created for each call.
 * - Each instance has its own separate memory and state.
 */
const userOne = new User('sans', 7, true);
const userTwo = new User("santosh", 10, false);

/**
 * The 'constructor' property:
 * A reference pointing directly to the constructor function that created the instance.
 * Here, userOne.constructor points to [Function: User].
 */
console.log(userOne.constructor); // Output: [Function: User]
// console.log(userTwo);

/**
 * 'instanceof' operator:
 * Checks whether an object is an instance of a specific constructor function.
 */
// console.log(userOne instanceof User);   // Output: true
// console.log(userOne instanceof Object); // Output: true (via prototype chain!)
