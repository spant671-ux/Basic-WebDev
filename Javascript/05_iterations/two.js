// ==================== Iterations: while and do-while Loops ====================

/*
while Loop Syntax:
initialization;
while (condition) {
    // Loop body executed as long as condition evaluates to true
    // Increment / Decrement
}
*/

// 1. Basic while Loop
// Condition is checked BEFORE entering the loop body.
let index = 0;
while (index <= 10) {
    // Expected Output: Logs 0, 2, 4, 6, 8, 10
    console.log(`value of index is ${index}`);
    index = index + 2; // Increment index by 2
}


// 2. Iterating Over an Array using a while Loop
let myArray = ["flash", "batman", "superman"];
let arr = 0;

// Loops as long as pointer 'arr' is less than array length (3)
while (arr < myArray.length) {
    // Expected Output: Logs "flash", "batman", "superman"
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1; // Increment pointer
}


// ==================== do-while Loop ====================

/*
do-while Loop Syntax:
initialization;
do {
    // Code block to execute
    // Increment / Decrement
} while (condition);

Key Characteristics of do-while Loop:
- The block inside 'do' executes FIRST before the condition is checked.
- Therefore, a do-while loop is GUARANTEED to run AT LEAST ONCE, even if the condition evaluates to false initially.
*/

let score = 1;

do {
    // Expected Output: Logs "Score is 1" through "Score is 10"
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);