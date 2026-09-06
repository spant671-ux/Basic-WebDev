// ==================== Combining & Manipulation of Arrays ====================

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// 1. Using push(): Appends the array as a single element (creates nested array)
// marvel_heros.push(dc_heros)
// console.log(marvel_heros) // Output: ["thor", "ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]) // Output: "flash"

// 2. Using concat(): Combines two or more arrays and returns a NEW merged array without modifying existing ones
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros) // Output: ["thor", "ironman", "spiderman", "superman", "flash", "batman"]

// 3. Using Spread Operator (...): Modern & preferred way to merge multiple arrays
const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros) // Output: ["thor", "ironman", "spiderman", "superman", "flash", "batman"]


// ==================== Flattening Nested Arrays ====================

// Nested array containing arrays within arrays
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// flat(depth): Creates a new array with all sub-array elements concatenated recursively up to specified depth.
// Passing 'Infinity' flattens arrays of any depth automatically.
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray) // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// ==================== Array Utility Methods ====================

// Array.isArray(): Checks whether the passed value is an Array
console.log(Array.isArray("Sans")) // Output: false

// Array.from(): Creates a new Array instance from an iterable or array-like object
console.log(Array.from("Sans")) // Output: ['S', 'a', 'n', 's']

// Interview Note: Array.from on an object returns an empty array [] if it cannot infer whether to use keys or values.
console.log(Array.from({name: "Sans"})) // Output: [] (Interesting case for interviews)

// Array.of(): Creates a new Array instance from a variable number of arguments regardless of number or type.
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // Output: [100, 200, 300]
