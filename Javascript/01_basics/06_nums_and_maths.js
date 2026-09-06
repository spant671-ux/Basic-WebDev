// ==================== Numbers ====================

const score = 400;

// Expected Output: 400
// console.log(score);

// Creating a Number object wrapper using the 'new' keyword.
const balance = new Number(100);

// Expected Output: [Number: 100]
// console.log(balance);

// Converting number to string opens up string properties (like length).
// Expected Output: 3
// console.log(balance.toString().length);

// toFixed(digits): Formats a number using fixed-point notation (useful for currency representation).
// Expected Output: 100.00
// console.log(balance.toFixed(2));

const otherNumber = 23.8966;

// toPrecision(precision): Returns a string representing a Number object to the specified precision (rounds off).
// Expected Output: 23.9
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;

// toLocaleString(): Returns a string with a language-sensitive representation of this number (default is US English formatting; can specify 'en-IN' for Indian style).
// Expected Output: 10,00,000
// console.log(hundreds.toLocaleString('en-IN'));


// ==================== Maths ====================

/* The Math object is a built-in object that has properties and methods for mathematical constants and functions.
- console.log(Math);
- console.log(Math.abs(-4));         => Absolute value: 4 (converts negative to positive)
- console.log(Math.round(4.6));      => Rounds to nearest integer: 5
- console.log(Math.ceil(4.2));       => Rounds UP to next integer: 5
- console.log(Math.floor(4.9));      => Rounds DOWN to previous integer: 4
- console.log(Math.min(4, 3, 6, 8)); => Returns smallest value: 3
- console.log(Math.max(4, 3, 6, 8)); => Returns largest value: 8
*/

// Math.random() returns a pseudo-random floating-point number in the range 0 to < 1.
console.log(Math.random());

// Formula to get a random integer between 1 and 10:
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

// Universal formula to get a random integer between custom min and max (inclusive):
// Math.random() * (max - min + 1) generates a range size.
// Math.floor() rounds it down to get an integer.
// + min shifts the range to start at the min value.
console.log(Math.floor(Math.random() * (max - min + 1)) + min);



