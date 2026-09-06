// ==================== Control Flow: Truthy and Falsy Values ====================

// Test cases:
// const userEmail = "s@gmail.com"; // Non-empty string -> Truthy
// const userEmail = "";            // Empty string -> Falsy
const userEmail = [];              // Empty array -> Truthy

if (userEmail) {
    // Expected Output for []: "Got User Email" (because [] is a truthy value)
    console.log("Got User Email");
} else {
    console.log("Dont have email");
}


// ==================== Verifying Empty Arrays & Objects ====================

// Checking if an Array is empty:
// Array.length returns 0 if the array contains no elements
if (userEmail.length === 0) {
    // Expected Output: "Array is empty"
    console.log("Array is empty");
}

// Defining an empty object:
const emptyObj = {};

// Checking if an Object is empty:
// Object.keys(obj) returns an array of object key names; check if Object.keys(obj).length === 0
if (Object.keys(emptyObj).length === 0) {
    // Expected Output: "Object is empty"
    console.log("Object is empty");
}


// ==================== Falsy vs. Truthy Rules ====================

/*
--- FALSY VALUES ---
Values that evaluate to 'false' in conditional contexts:
1. false
2. 0, -0, BigInt 0n
3. "" (empty string)
4. null
5. undefined
6. NaN (Not-a-Number)

--- TRUTHY VALUES ---
All other values evaluate to 'true', including:
1. "0" (string containing character zero)
2. 'false' (string containing the word false)
3. " " (string containing whitespace)
4. [] (empty array)
5. {} (empty object)
6. function(){} (empty function)
*/


// ==================== Nullish Coalescing Operator (??) ====================

/*
The Nullish Coalescing Operator (??) returns its right-hand side operand when its left-hand side operand is 'null' or 'undefined'.
Otherwise, it returns its left-hand side operand.
(Useful for assigning default values when handling null/undefined).
*/

let val1;
// val1 = 5 ?? 10;          // Output: 5
// val1 = null ?? 10;       // Output: 10 (fallback because left side is null)
// val1 = undefined ?? 15;  // Output: 15 (fallback because left side is undefined)
// val1 = null ?? 10 ?? 20; // Output: 10 (first non-nullish value)

// console.log(val1);


// ==================== Ternary Operator (? :) ====================

// Compact single-line shortcut for an if-else statement:
// condition ? expressionIfTrue : expressionIfFalse;

const iceTeaPrice = 100;
// iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");

