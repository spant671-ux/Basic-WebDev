// ==================== Iterations: Array.prototype.map() & Method Chaining ====================

/*
The map() Method:
- Transforms every element in an array according to a callback function.
- Returns a NEW array containing the transformed values (same length as the original array).
- Unlike filter() which evaluates true/false to include/exclude elements, map() modifies every element.
*/

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Basic map() with Implicit Return:
// const newNums = myNumbers.map( (num) => num + 10 );

// 2. Basic map() with Explicit Return inside {} block:
// const newNums = myNumbers.map( (num) => { return num + 10; } );


// ==================== Array Method Chaining ====================

/*
Method Chaining:
- Combining multiple array methods sequentially (e.g., .map().map().filter()).
- The output array of each step is automatically passed as the input array to the next step.
*/

const newNums = myNumbers
                .map( (num) => num * 10 )        // Step 1: Multiplies each number by 10 => [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                .map( (num) => num + 1 )         // Step 2: Adds 1 to each number => [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]
                .filter( (num) => num >= 40 );   // Step 3: Filters elements >= 40 => [41, 51, 61, 71, 81, 91, 101]

// Expected Output: [ 41, 51, 61, 71, 81, 91, 101 ]
console.log(newNums);

