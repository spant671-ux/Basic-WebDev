// ==================== Control Flow: Conditional Statements & Operators ====================

/*
Comparison Operators in JavaScript:
- <   : Less than
- >   : Greater than
- <=  : Less than or equal to
- >=  : Greater than or equal to
- ==  : Loose equality (checks value with type coercion, e.g., "2" == 2 is true)
- !=  : Loose inequality
- === : Strict equality (checks both value AND data type, e.g., "2" === 2 is false)
- !== : Strict inequality
*/


// 1. Basic if-else Conditional Statement
const temperature = 41;

// If the condition is true, the if-block executes; otherwise, the else-block executes.
// if (temperature < 50) {
//     // Expected Output: "less than 50"
//     console.log("less than 50");
// } else {
//     console.log("more than 50");
// }

// Code outside conditional blocks executes regardless of the condition evaluation.
// console.log("Will print regardless");


// 2. Block Scope within Conditional Statements
const score = 200;

// Variables declared with 'const' or 'let' inside an if-block exist ONLY within that block.
// if (score > 100) {
//     const power = "fly";
//     // Expected Output: "User power: fly"
//     console.log(`User power: ${power}`);
// }

// Accessing 'power' outside the if-block would throw a ReferenceError: power is not defined
// console.log(`User power: ${power}`);


// 3. Implicit Scope (Single-line if statement)
const balance = 1000;

// You can omit curly braces {} for a single statement (implicit scope).
// Note: Writing multiple comma-separated statements on a single line is bad practice for readability.
// Expected Output: "test"
// if (balance > 500) console.log("test");


// 4. Nested Conditionals (if - else if - else chain)
// Evaluates conditions sequentially from top to bottom. As soon as one condition is true, its block runs and the chain ends.
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 950) {
//     console.log("less than 950");
// } else {
//     // Executed if all preceding conditions evaluated to false
//     // Expected Output: "less than 1200"
//     console.log("less than 1200");
// }


// 5. Logical Operators (AND && / OR ||)

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// Logical AND (&&): Evaluates to true ONLY IF ALL conditions are true.
if (userLoggedIn && debitCard) {
    // Expected Output: "Allow to buy courses"
    console.log("Allow to buy courses"); 
}

// Logical OR (||): Evaluates to true IF AT LEAST ONE condition is true.
if (loggedInFromEmail || loggedInFromGoogle) {
    // Expected Output: "User Logged In"
    console.log("User Logged In");
}

