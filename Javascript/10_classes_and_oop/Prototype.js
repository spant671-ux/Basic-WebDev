/**
 * ============================================================================
 * JavaScript Prototypes and Prototypal Inheritance Deep-Dive
 * ============================================================================
 * 
 * CORE CONCEPT: JavaScript is a Prototype-based Language
 * ----------------------------------------------------------------------------
 * Unlike class-based languages (e.g., Java, C++), JavaScript does not have
 * classical classes under the hood. Even the ES6 'class' syntax is syntactic
 * sugar over JavaScript's existing prototypal inheritance mechanism.
 * 
 * THE PROTOTYPE CHAIN (The Ultimate Mental Model):
 * ----------------------------------------------------------------------------
 * In JavaScript, almost everything is an Object or can be wrapped in an Object.
 * When you try to access a property or method on ANY entity:
 * 1. JS first checks if the property exists directly on that entity (own property).
 * 2. If not found, it looks up into that entity's prototype (__proto__).
 * 3. It continues searching up the chain until it reaches 'Object.prototype'.
 * 4. If still not found, 'Object.prototype.__proto__' is 'null' -> returns undefined.
 * 
 * Visual Diagram of the Prototype Chain:
 * 
 *        Array  ───────┐
 *        String ───────┼──> Object.prototype ──> null (End of chain)
 *        Function ─────┘
 * 
 * Rule: Anything added to Object.prototype is automatically inherited by
 *       Arrays, Strings, Functions, and Objects!
 */

// Problem Statement:
// We want a method 'trueLength' available on ALL strings that calculates the
// actual character count without leading or trailing spaces.
// let myName = 'sans     '
// let myName2 = "hello     "
// console.log(myName.trueLength); // Goal: return trimmed length automatically


// ============================================================================
// 1. Prototype Injection & Inheritance Scope Demonstration
// ============================================================================

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey Power is ${this.spiderman}`);
    }
};

/**
 * INJECTING INTO Object.prototype:
 * Since Object is the top-level parent in the JS prototype hierarchy,
 * adding a method to 'Object.prototype' makes it accessible to:
 * - Objects ({})
 * - Arrays ([])
 * - Functions (function(){})
 * - Strings, Numbers, etc. (via their wrapper objects)
 */
Object.prototype.sans = function(){
    console.log(`sans is present in all objects`);
};

/**
 * INJECTING INTO Array.prototype:
 * This method is ONLY added to Array's prototype.
 * - Accessible by: myHeros (which is an Array)
 * - NOT accessible by: heroPower (which is a plain Object)
 * 
 * Note: Inheritance flows DOWN the chain, NOT sideways or up.
 */
Array.prototype.heysans = function(){
    console.log(`sans says hello`);
};

// heroPower.sans()     // Works! heroPower is an Object -> finds .sans() on Object.prototype
myHeros.sans();         // Works! myHeros is an Array -> looks up chain -> finds .sans() on Object.prototype
myHeros.heysans();      // Works! myHeros is an Array -> finds .heysans() on Array.prototype
// heroPower.heysans()  // TypeError: heroPower.heysans is not a function (Plain objects don't inherit from Array.prototype)


// ============================================================================
// 2. Prototypal Inheritance (Linking Objects)
// ============================================================================

const User = {
    name: "sans",
    email: "sans@gmail.com"
};

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
};

/**
 * TRADITIONAL / LEGACY SYNTAX (__proto__):
 * '__proto__' is an internal accessor property that exposes the [[Prototype]]
 * of an object, allowing one object to inherit properties directly from another.
 */
const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport // TASupport now inherits properties from TeachingSupport
};

// Teacher now inherits properties from User (Teacher.__proto__ points to User)
Teacher.__proto__ = User;


/**
 * MODERN ES6 SYNTAX (Object.setPrototypeOf):
 * Object.setPrototypeOf(targetObject, prototypeObject)
 * Sets the prototype (i.e., internal [[Prototype]]) of targetObject to prototypeObject.
 * 
 * Preferred over '__proto__' because '__proto__' is considered deprecated/legacy
 * in modern JavaScript specifications for direct manipulation.
 */
// TeachingSupport will now inherit from Teacher:
Object.setPrototypeOf(TeachingSupport, Teacher);

// Full inheritance chain established here:
// TASupport -> TeachingSupport -> Teacher -> User -> Object.prototype -> null


// ============================================================================
// 3. Solving the 'trueLength' Problem: Custom Method on String.prototype
// ============================================================================

let anotherUsername = "SansAndJs    ";

/**
 * Adding 'trueLength' to String.prototype:
 * 
 * IMPORTANT - Why use a regular function instead of an arrow function?
 * - Regular functions define their own 'this' context based on WHO called them.
 * - Arrow functions do NOT bind their own 'this'; they lexically capture 'this'
 *   from the enclosing scope (which in Node.js top-level is '{}' or 'module.exports').
 * - To access the actual string instance that invoked the method, we MUST use 'function()'.
 */
String.prototype.trueLength = function(){
    // 'this' refers to the exact String instance calling this method
    console.log(`${this}`);                     // Prints the raw string with whitespace
    console.log(`${this.name}`);                // 'undefined' (plain strings do not have a .name property)
    console.log(`True Length is: ${this.trim().length}`); // Calculates length after stripping whitespace
};

// Testing 'trueLength' on different string instances:
anotherUsername.trueLength(); // Prints "SansAndJs    ", undefined, True Length is: 9
"hello".trueLength();         // Prints "hello", undefined, True Length is: 5
"icetea".trueLength();        // Prints "icetea", undefined, True Length is: 6
