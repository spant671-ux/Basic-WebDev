/**
 * ============================================================================
 * Functions as Objects & Constructor Functions Deep-Dive
 * ============================================================================
 * 
 * CORE CONCEPT: In JavaScript, Functions are Objects!
 * ----------------------------------------------------------------------------
 * A function in JavaScript is a first-class object that possesses an internal
 * [[Call]] method (allowing it to be executed) while also acting as a regular
 * object that can store custom properties and methods.
 * 
 * Hierarchy: Function ---> Function.prototype ---> Object.prototype ---> null
 */

// ============================================================================
// 1. Functions Have Object-Like Behavior
// ============================================================================

function multiplyByFive(num){
    return num * 5;
}

// Functions can have custom properties assigned directly, exactly like plain objects:
multiplyByFive.power = 2;

console.log(multiplyByFive(5));      // Output: 25 (Invoking the function via [[Call]])
console.log(multiplyByFive.power);    // Output: 2  (Accessing custom property on the function object)

/**
 * The 'prototype' property:
 * Every regular function in JavaScript automatically gets a 'prototype' property.
 * By default, this is an empty object: { constructor: multiplyByFive }.
 * This object is used as the blueprint for any instances created with 'new'.
 */
console.log(multiplyByFive.prototype); // Output: {} (in Node.js console)


// ============================================================================
// 2. Constructor Functions and Prototypal Methods
// ============================================================================

/**
 * Constructor Function:
 * Used as a blueprint/template to create multiple instances of an object.
 * Convention: Name starts with a capital letter (PascalCase).
 */
function createUser(username, score){
    this.username = username; // 'this' points to the newly instantiated object
    this.score = score;
}

/**
 * Adding methods to 'createUser.prototype':
 * 
 * WHY attach methods to the prototype instead of inside the constructor?
 * - Performance & Memory Efficiency:
 *   If defined inside the constructor, EVERY instance creates a fresh copy
 *   of that function in memory (1,000 users = 1,000 copies of printMe).
 * - By attaching to the prototype, ALL instances share a SINGLE copy of
 *   the method through the prototype chain.
 */
createUser.prototype.increment = function(){
    // 'this' refers to whichever instance called .increment()
    this.score++;
};

createUser.prototype.printMe = function(){
    // 'this' dynamically resolves to the instance calling .printMe()
    console.log(`price is ${this.score}`);
};


// ============================================================================
// 3. The 'new' Keyword vs Calling Without 'new'
// ============================================================================

// Correct instantiation with 'new':
const chai = new createUser("sans", 25);

// Calling without 'new':
const tea = createUser('tea', 250);

chai.printMe(); // Output: price is 25

/**
 * What happens when we call without 'new' (tea = createUser('tea', 250))?
 * 1. createUser executes as a plain function.
 * 2. 'this' defaults to the global object (global in Node.js / window in browser)
 *    in non-strict mode, polluting the global namespace!
 * 3. The function has no 'return' statement, so 'tea' receives 'undefined'.
 * 4. Attempting 'tea.printMe()' will throw:
 *    TypeError: Cannot read properties of undefined (reading 'printMe')
 */


// ============================================================================
// 4. Behind the Scenes: What the 'new' Keyword Does (Step-by-Step)
// ============================================================================

/*
Here's what happens behind the scenes when the 'new' keyword is used:

1. A new object is created:
   The 'new' keyword initiates the creation of a brand-new empty JavaScript object ({}).

2. A prototype is linked:
   The newly created object gets its internal [[Prototype]] (accessible via __proto__)
   linked directly to the constructor function's 'prototype' property.
   (e.g., chai.__proto__ === createUser.prototype).
   This gives the instance full access to all methods defined on createUser.prototype.

3. The constructor is called with 'this' bound:
   The constructor function is invoked with the specified arguments, and 'this' is
   bound to the newly created object. Code like 'this.username = username' attaches
   properties directly to the new instance.

4. The new object is returned:
   After constructor execution, if the constructor does not explicitly return its own
   non-primitive object (e.g., return { custom: true }), JavaScript automatically
   returns 'this' (the newly created object).
*/
