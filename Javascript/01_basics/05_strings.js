const name = "sans";
const repoCount = 50;

// Old-fashioned string concatenation:
// console.log(name + repoCount + " Value"); 

// Modern recommendation: Use template literals/string interpolation (backticks ` and ${}`).
// It is cleaner, more readable, and allows variables/expressions to be injected on the fly.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Creating a String object wrapper using the 'new' keyword.
// This creates a String object rather than a primitive string, granting access to key-value pairs of indices and prototype methods.
const gameName = new String('mikey-sp');    

// Expected Output: [String: 'mikey-sp'] (in Node runtime)
// console.log(gameName);

// Expected Output: "m" (Access character by 0-based index)
// console.log(gameName[0]);

// Expected Output: {} (Access prototype containing all string methods)
// console.log(gameName.__proto__);

// Expected Output: 8 (Length of the string)
// console.log(gameName.length);

// Expected Output: "MIKEY-SP"
// Note: Does not change the original string because strings are immutable primitives.
// console.log(gameName.toUpperCase());

// Get character at index 2. Expected Output: "k"
console.log(gameName.charAt(2));

// Get first index of character 'e'. Expected Output: 3
console.log(gameName.indexOf('e'));

// Split string into array by separator '-'. Expected Output: [ 'mikey', 'sp' ]
console.log(gameName.split('-'));

// substring(start, end): Extracts characters from start index up to (but not including) end index.
// Note: It does not accept negative indices (treats them as 0).
const newString = gameName.substring(0, 4);

// Expected Output: "mike"
console.log(newString);

// slice(start, end): Extracts characters like substring, but supports negative indices (counts from the end of string).
const anotherString = gameName.slice(-7, 4);

// Expected Output: "ike" (counts back 7 from end, ends before index 4)
console.log(anotherString);

// trim(): Removes leading and trailing whitespace from the string.
const newStringOne = "    sans    ";

// Expected Output: "    sans    "
console.log(newStringOne);

// Expected Output: "sans"
console.log(newStringOne.trim());

// replace(search, replacement): Replaces the first occurrence of 'search' with 'replacement'.
const url = "https://sans.com/sans%20mikey";

// Expected Output: "https://sans.com/sans-mikey"
console.log(url.replace('%20', '-'));

// includes(searchString): Returns true if 'searchString' is found anywhere within this string.
// Expected Output: true
console.log(url.includes('sans'));







