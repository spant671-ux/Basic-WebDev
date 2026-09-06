// ==================== Iterations: Array.prototype.forEach() ====================

/*
The forEach() Method:
- Executes a provided callback function once for each element in an array.
- Does NOT return a new array (returns 'undefined').
*/

const coding = ["js", "ruby", "java", "py", "cpp"];

// 1. Using a standard function expression callback:
// coding.forEach( function(val){
//     console.log(val);
// } );

// 2. Using an Arrow Function callback:
coding.forEach( (item) => {
    // console.log(item);
});

// 3. Passing a pre-defined function reference:
// Note: Pass the function reference (printMe), DO NOT invoke it (printMe())!
function printMe(item){
    // console.log(item);
}

coding.forEach(printMe);

// 4. Callback parameters available in forEach:
// The callback receives up to 3 arguments: (item/element, index, entireArray)
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } );


// ==================== Iterating an Array of Objects ====================

// Common real-world pattern: An array containing multiple object records
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"   
    },
    {
        languageName: "java",
        languageFileName: "java"   
    },
    {
        languageName: "python",
        languageFileName: "py"   
    }
];

// Accessing object properties inside forEach callback:
myCoding.forEach( (item) => {
    // Expected Output: "javascript", "java", "python"
    // console.log(item.languageName);
});
