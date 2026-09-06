// Treats all JS code as newer JavaScript standards/version.
// Enables strict mode to catch common coding mistakes and throw exceptions.
"use strict";

// ReferenceError: alert is not defined.
// We are using Node.js runtime, not a browser environment where window.alert is available.
// alert("hello")

// Code readability should always be high. Avoid writing convoluted multiline statements like this in production.
// Below prints the output: 6
console.log(3 
    + 
    3);
console.log("hello");

// Variable declarations with representative datatypes:
// String datatype
let name = "Kendrick";
// Number datatype
let age = 29;
// Boolean datatype
let isLoggedIn = false;

// --- JavaScript Primitive Data Types ---
// number => Numeric values up to 2^53 - 1 (safe integer limit)
// bigint => For integers larger than the safe limit of 'number'
// string => Textual data enclosed in single quotes, double quotes, or backticks
// boolean => true or false
// null => Standalone value representing an intentional absence of any object value
// undefined => Automatically assigned to variables that have been declared but not initialized
// symbol => A unique and immutable primitive value often used as object keys

// --- JavaScript Reference/Non-Primitive Data Types ---
// object => Collection of key-value pairs (more on this in datatypes-summary.js)

// Using the 'typeof' operator to check data types:

// Output: "number"
console.log(typeof age);

// Output: "object" (Note: This is a long-standing, historical quirk/bug in JavaScript)
console.log(typeof null);

// Output: "undefined"
console.log(typeof undefined);




