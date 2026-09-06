// ==================== Iterations: for...in Loop (Objects & Arrays) ====================

/*
The for...in Loop:
- Iterates over the enumerable KEYS (property names or indices) of an object or array.
- For Objects: Returns property key names.
- For Arrays: Returns array indices ('0', '1', '2', ...).
*/

// 1. Iterating over an Object using for...in:
const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
};

for (const key in myObject) {
    // 'key' returns property name (js, cpp, rb, swift)
    // 'myObject[key]' accesses the corresponding value
    // Expected Output: "js short for javascript", etc.
    console.log(`${key} short for ${myObject[key]}`);
}


// 2. Iterating over an Array using for...in:
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    // Note: In an array, 'for...in' returns array INDICES (0, 1, 2, 3, 4) as string keys.
    // console.log(key);        

    // Accessing element at each index:
    // Expected Output: "js", "rb", "py", "java", "cpp"
    console.log(programming[key]);
}

/*
Summary Comparison:
- for...in : Iterates over KEYS / INDICES (ideal for Objects).
- for...of : Iterates over VALUES directly (ideal for Arrays, Maps, Sets).
*/