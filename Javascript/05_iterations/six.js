// ==================== Iterations: Array.prototype.filter() vs. forEach() ====================

// 1. Limitation of forEach():
// forEach() NEVER returns a value. It always returns 'undefined', even if an explicit 'return' statement is written inside the callback.
// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item; // Has no effect; forEach still returns undefined!
// } );

// console.log(values); // Expected Output: undefined


// 2. The filter() Method Basics:
// filter() returns a NEW array containing all elements that pass the test condition (where callback returns true).
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
CRITICAL ARROW FUNCTION RULE IN FILTER:
- If you use curly braces {} block body, you MUST explicitly write the 'return' keyword!
- Without 'return' inside {}, the callback returns undefined (falsy), resulting in an empty array [].
*/

// const newNums = myNums.filter( (num) => {
//     return num > 4; // Explicit return required when using {} block body!
// } );


// 3. Achieving Filtering Logic Manually with forEach():
// If using forEach(), you must create an empty external array and push matching items manually.
// const newNums = [];

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// } );

// console.log(newNums); // Expected Output: [ 5, 6, 7, 8, 9, 10 ]


// ==================== Practical Real-World Example: Filtering Array of Objects ====================

// Sample Database Query Dataset (Array of Book Objects):
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Single Condition Filter (Implicit return):
// Filtering all books where genre is "History":
// const userBooks = books.filter( (bk) => bk.genre === "History" );

// Multiple Condition Filter (Explicit return with AND operator &&):
// Filtering books published in or after 1995 AND with genre "History":
const userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History";
} );

// Expected Output: Array containing Book Three object
console.log(userBooks);

  
