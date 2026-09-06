// ==================== Type Conversions ====================

// 1. Converting to Number
let score = "33abc";

// Expected Output: "string"
// console.log(typeof score);

// Number() constructor converts a value to a number.
let valueInNumber = Number(score);

// Expected Output: "number"
// console.log(typeof valueInNumber);

// Expected Output: NaN (Not-a-Number), since "33abc" contains non-numeric characters.
// console.log(valueInNumber);

let input = null;

// Expected Output: null
// console.log(input);

let noInput = Number(input);

// Expected Output: 0 (null converts to 0)
// console.log(noInput);

let def = undefined;

// Expected Output: undefined
// console.log(def);

let nodef = Number(def);

// Expected Output: NaN (undefined converts to NaN)
// console.log(nodef);

/*
Summary of Number() conversion outcomes:
- "33" => 33
- "33abc" => NaN
- true => 1; false => 0
- null => 0
- undefined => NaN
*/

// 2. Converting to Boolean
let isLoggedIn = 1;

// Boolean() constructor converts a value to true or false.
let booleanIsLoggedIn = Boolean(isLoggedIn);

// Expected Output: true
// console.log(booleanIsLoggedIn);

/*
Summary of Boolean() conversion outcomes (truthy and falsy values):
- 1 => true; 0 => false
- "" (empty string) => false
- "hello" (non-empty string) => true
- null / undefined / NaN => false
*/

// 3. Converting to String
let someNumber = 33;
let stringNumber = String(someNumber);

// Expected Output: "string"
// console.log(typeof stringNumber);

// Expected Output: "33"
// console.log(stringNumber);


// ********************************* Operations ******************************************//

let value = 3;
let negValue = -value;

// Expected Output: -3
// console.log(negValue);

/* 
Basic Arithmetic Operations:
- console.log(2+2);  => Addition: 4
- console.log(2-2);  => Subtraction: 0
- console.log(2*2);  => Multiplication: 4
- console.log(2**3); => Exponentiation (2 raised to power 3): 8
- console.log(2/3);  => Division: 0.6666666666666666
- console.log(2%3);  => Remainder (Modulo): 2
*/

let str1 = "hello";
let str2 = " bro";

// String concatenation
let str3 = str1 + str2;

// Expected Output: "hello bro"
console.log(str3);

/* Type Coercion / Implicit Conversion with String + Number:
- If a string is encountered first in an addition, the rest are coerced to string.
- If numbers are encountered first, they are added, and then the result is coerced to string when a string is encountered.
*/

// Expected Output: "12"
// console.log("1" + 2);

// Expected Output: "12"
// console.log(1 + "2");

// Expected Output: "12"
// console.log("1" + "2");

// Expected Output: "122" (String "1" + number 2 -> "12" + number 2 -> "122")
// console.log("1" + 2 + 2);

// Expected Output: "32" (1 + 2 -> 3 + String "2" -> "32")
// console.log(1 + 2 + "2");

// Unary plus (+) operator attempts to convert its operand to a number.
// Converts true to 1
console.log(+true);

// Converts empty string to 0
console.log(+"");

// Chained assignments are possible but not recommended for readability.
let num1, num2, num3;
// Assigns 4 to num3, then num2, then num1
num1 = num2 = num3 = 2 + 2;

// Postfix vs Prefix Increment
let gameCounter = 100;
// Postfix: Increments gameCounter (now 101) after returning the current value in expressions.
gameCounter++;

// Expected Output: 101
console.log(gameCounter);
