// ==================== Iterations: For Loops, Nested Loops & Loop Control ====================

/*
For Loop Syntax:
for (initialization; condition; increment/decrement) {
    // Loop body executed on every iteration as long as condition evaluates to true
}
*/

// 1. Basic for Loop
// 'let i = 0' runs once at start. 'i < 10' is checked before each iteration. 'i++' runs after each iteration.
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // Expected Output when uncommented: "5 is best number"
        // console.log("5 is best number");
    }
    // Expected Output: Prints numbers 0 through 9
    // console.log(element);
}

// Accessing block-scoped variables 'i' or 'element' outside the loop throws a ReferenceError:
// console.log(element);


// 2. Nested for Loops (Outer & Inner Loops)
// For every 1 iteration of the outer loop, the inner loop runs completely through all its iterations.
for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop Value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop Value: ${j} and Outer Loop Value: ${i}`);
        // Useful for generating multiplication tables (e.g., 2 x 1 = 2):
        // console.log(i + ' x ' + j + ' = ' + i * j);
    }
}


// 3. Iterating Over an Array with a for Loop
let myArray = ["superman", "flash", "batman"];
// Array length is 3 (valid indices: 0, 1, 2)
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // Expected Output: Prints "superman", "flash", "batman" sequentially
    // console.log(element);
}


// ==================== Loop Control Keywords: break and continue ====================

// 4. The 'break' Statement:
// Immediately terminates the loop and exits the loop block entirely.

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         break; // Exits loop completely when index reaches 5
//     }
//     console.log(`Value of i is: ${index}`);
// }


// 5. The 'continue' Statement:
// Skips the remaining code inside the loop body for the current iteration and jumps directly to the next iteration step.

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // Logs "Detected 5" and skips logging "Value of i is: 5"
        console.log("Detected 5");
        continue; // Jumps directly to index 6
    }
    console.log(`Value of i is: ${index}`);
}

