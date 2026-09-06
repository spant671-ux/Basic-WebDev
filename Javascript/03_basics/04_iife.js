// ==================== Immediately Invoked Function Expressions (IIFE) ====================

/*
What is an IIFE?
- An IIFE (Immediately Invoked Function Expression) is a function that runs immediately after it is defined.
- Primary Purpose: To prevent polluting the Global Scope with variables and create a private variable scope.

IIFE Syntax:
- (function definition)()
- The first set of parentheses ( ... ) wraps the function definition into an expression.
- The second set of parentheses () immediately executes the function.

CRITICAL RULE:
- Always terminate an IIFE with a SEMICOLON (;)!
  If a semicolon is missing, JavaScript will not terminate the IIFE execution context, leading to a TypeError if another IIFE follows.
*/


// 1. Named IIFE:
// An IIFE that includes a function name (here, 'chai').
(function chai(){
    // Expected Output: DB CONNECTED
    console.log(`DB CONNECTED`);
})();


// 2. Unnamed / Arrow IIFE with Parameters:

// Generic symbolic syntax pattern for an arrow IIFE:
// (() => {})()

// An IIFE defined using arrow function syntax ((name) => { ... }), receiving the argument 'sans' via invocation parentheses ('sans'):
((name) => {
    // Expected Output: DB CONNECTED TWO sans
    console.log(`DB CONNECTED TWO ${name}`);
})('sans');
