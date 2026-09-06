// ==================== Iterations: for...of Loop & Map Object ====================

/*
The for...of Loop:
- Iterates directly over the VALUES of iterable data structures (Arrays, Strings, Maps, Sets, NodeLists).
- Cannot be used directly to iterate over plain JavaScript Objects (use for...in or Object.keys/entries instead).
*/

// 1. Array Iteration with for...of:
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // Expected Output: Logs 1, 2, 3, 4, 5
    // console.log(num);
}

// 2. String Iteration with for...of:
const greetings = "Hello World!";
for (const greet of greetings) {
    // Expected Output: Logs each character including spaces
    // console.log(`Each Character is ${greet}`);
}


// ==================== Map Object & Array Destructuring in for...of ====================

/*
The Map Object:
- Holds key-value pairs and remembers the original insertion order of keys.
- Any value (both objects and primitive values) may be used as either a key or a value.
- Keys in a Map are unique; setting an existing key overwrites its value.
*/

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America"); 
map.set("FR", "France");

// console.log(map);

// Destructuring [key, value] pairs directly inside the for...of loop header:
for (const [key, value] of map) {
    // Expected Output:
    // IN :- India
    // USA :- United States of America
    // FR :- France
    console.log(key, ":-", value);   
}


// ==================== Plain Objects and for...of ====================

const myObj = {
    "game1": "NFS",
    "game2": "Spiderman"
};

// Note: Plain objects are NOT iterable using for...of loops.
// Attempting 'for (const [key, value] of myObj)' will throw a TypeError: myObj is not iterable.
// Use 'for...in' (see four.js) or 'Object.entries(myObj)' to iterate over object entries.
