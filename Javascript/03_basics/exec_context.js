// ==================== JavaScript Execution Context (JSEC) ====================

/*
What is JavaScript Execution Context?
- Whenever JavaScript code runs, it creates an Execution Context to evaluate and execute the code.
- JS is single-threaded and synchronous (executes one command at a time, in order).

Types of Execution Contexts:
1. Global Execution Context (GEC):
   - Created first before any code runs.
   - Bound to the 'this' object ('window' in Browser environment, '{}' empty object in Node.js).
2. Function Execution Context (FEC):
   - Created every time a function is invoked/called.
3. Eval Execution Context:
   - Created inside eval() functions (rarely used).

The 2 Phases of Execution Context:
Phase 1: Memory Creation Phase (Creation Phase)
- Scans code and allocates memory space for all variables and functions.
- Variables are set to 'undefined'.
- Functions store their complete code definition.

Phase 2: Execution Phase
- Executes code line-by-line, assigning values to variables and executing functions.
*/


// ==================== Code Execution Walkthrough ====================

// Step 1: Global Execution Context (GEC) is created and assigned to 'this'.

// Step 2: Memory Creation Phase (Global Scope)
// - val1    -> undefined
// - val2    -> undefined
// - addNum  -> stores complete function definition
// - result1 -> undefined
// - result2 -> undefined

// Step 3: Execution Phase (Global Scope)

// Assigns 10 to val1
let val1 = 10;

// Assigns 5 to val2
let val2 = 5;

// Function definition (already stored in memory during Phase 1, skipped in Phase 2)
function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}

// Function Call 1: addNum(val1, val2)
// Creates a NEW Function Execution Context (FEC) containing:
//   a) Memory Phase (FEC): num1 -> undefined, num2 -> undefined, total -> undefined
//   b) Execution Phase (FEC): num1 = 10, num2 = 5, total = 15
//   c) Return value (15) is sent to Global Context and assigned to result1.
//   d) FEC is DELETED/DESTROYED after return!
let result1 = addNum(val1, val2);
// Expected Output of result1: 15

// Function Call 2: addNum(10, 2)
// Creates another NEW Function Execution Context (FEC) containing:
//   a) Memory Phase (FEC): num1 -> undefined, num2 -> undefined, total -> undefined
//   b) Execution Phase (FEC): num1 = 10, num2 = 2, total = 12
//   c) Return value (12) is sent to Global Context and assigned to result2.
//   d) FEC is DELETED/DESTROYED after return!
let result2 = addNum(10, 2);
// Expected Output of result2: 12


// ==================== Call Stack & LIFO Principle ====================

/*
What is the Call Stack?
- The Call Stack tracks the execution of functions in JavaScript.
- It operates on the LIFO principle: Last In, First Out.
- Global Execution Context (GEC) is always pushed to the bottom of the stack first.
- When a function is called, its FEC is PUSHED onto the top of the stack.
- When a function finishes, its FEC is POPPED off the stack.
*/

// Example demonstrating Call Stack behavior with nested function calls:

function one(){
    console.log("one");
    two();
}

function two(){
    console.log("two");
    three();
}

function three(){
    console.log("three");
}

// Invoking nested functions:
// Call Stack Push/Pop Sequence:
// 1. GEC is on stack: [ GEC ]
// 2. one() is called -> Pushed: [ GEC, one ]
// 3. Inside one(), two() is called -> Pushed: [ GEC, one, two ]
// 4. Inside two(), three() is called -> Pushed: [ GEC, one, two, three ]
// 5. three() finishes -> Popped: [ GEC, one, two ]
// 6. two() finishes -> Popped: [ GEC, one ]
// 7. one() finishes -> Popped: [ GEC ]
// one();
// two();
// three();