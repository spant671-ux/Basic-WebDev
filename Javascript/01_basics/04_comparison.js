// When comparing values of different types, JavaScript converts the string to a number during relational comparisons.

// Expected Output: true (string "2" is coerced to number 2)
// console.log("2" > 1);

// Expected Output: true (string "02" is coerced to number 2)
// console.log("02" > 1);

/* Null Comparison Quirks:
- An equality check (==) and comparisons (>, <, >=, <=) work differently.
- Relational comparisons convert 'null' to a number (treating it as 0).
- Hence:
  1. null > 0 is false (0 > 0 is false)
  2. null == 0 is false (equality check does not convert null to 0; null is only equal to undefined or itself)
  3. null >= 0 is true (0 >= 0 is true)
*/

// Expected Output: false
// console.log(null == 0);

// Expected Output: false
// console.log(null > 0);

// Expected Output: true
// console.log(null >= 0);

/* Undefined Comparison:
- 'undefined' converted to a number becomes NaN.
- Any comparison of NaN with any number (including itself) returns false.
- Equality check with 0 also returns false.
*/

// Expected Output: false
// console.log(undefined == 0);

// Expected Output: false
// console.log(undefined > 0);

// Expected Output: false
// console.log(undefined < 0);

// --- Equality (==) vs Strict Equality (===) ---

// Loose equality (==) performs type coercion before comparing.
// Expected Output: true (string "2" is coerced to number 2)
console.log("2" == 2);

// Strict equality (===) checks both value and type without coercion.
// Expected Output: false (types are different: string vs number)
console.log("2" === 2);


