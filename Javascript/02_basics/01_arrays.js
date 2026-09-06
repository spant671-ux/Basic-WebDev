// ==================== JavaScript Arrays Basics ====================

/*
An array in JavaScript is a data structure used to store a collection of multiple items under a single variable name.
Key Characteristics:
1. Resizable: JS arrays can dynamically grow and shrink in size.
2. Mix of Datatypes: Can store elements of different data types together.
3. Zero-indexed: The first element is at index 0.
4. Shallow copies: JS array-copy operations create shallow copies (sharing the same reference for objects).
*/

// Array Declaration methods:
const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["spiderman", "batman", "superman"]
const myArr2 = new Array(1, 2, 3, 4)

// Accessing Array elements by index (0-based)
// console.log(myArr[1]); // Output: 1


// ==================== Common Array Methods ====================

// push() -> Adds one or more elements to the end of the array.
// myArr.push(6)
// myArr.push(7)

// pop() -> Removes the last element from the array and returns it.
// myArr.pop()

// unshift() -> Adds element(s) to the beginning of the array (shifts existing elements to right).
// myArr.unshift(9)

// shift() -> Removes the first element from the array and returns it.
// myArr.shift()   

// includes() -> Checks if an element exists in the array (returns true or false).
// console.log(myArr.includes(9)) // Output: false

// indexOf() -> Returns the index of the first occurrence of a value, or -1 if not found.
// console.log(myArr.indexOf(3)) // Output: 3

// join() -> Binds all array elements into a string separated by a specified delimiter (default comma).
// const newArr = myArr.join()
// console.log(myArr)  // Output: [0, 1, 2, 3, 4, 5] (Array)
// console.log(newArr) // Output: "0,1,2,3,4,5" (String)


// ==================== slice() vs splice() ====================

/*
Key Difference:
- slice(start, end): Returns a section of an array. Does NOT modify the original array. (End index is excluded).
- splice(start, deleteCount): Removes/replaces elements from an array. MODIFIES (mutates) the original array.
*/

console.log("A ", myArr) // Original array before operations

// slice(1, 3): Extracts elements from index 1 up to (but not including) index 3
const myn1 = myArr.slice(1, 3)
console.log(myn1) // Output: [1, 2]
console.log("B ", myArr) // Original array remains unchanged: [0, 1, 2, 3, 4, 5]

// splice(1, 3): Removes 3 elements starting from index 1 from the original array
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr) // Original array is mutated: [0, 4, 5]
console.log(myn2) // Output: [1, 2, 3]
