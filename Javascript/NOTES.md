# ⚡ JavaScript Study Notes & Handbook

A neat, structured companion covering JavaScript fundamentals, data structures, DOM manipulation, event handling, asynchronous programming, and OOP from the projects.

---

## 📌 Table of Contents
1. [Variables & Declarations](#1-variables--declarations)
2. [Data Types & Memory](#2-data-types--memory)
3. [Type Conversion & Coercion](#3-type-conversion--coercion)
4. [Comparison Operators](#4-comparison-operators)
5. [Strings & Template Literals](#5-strings--template-literals)
6. [Numbers & Math](#6-numbers--math)
7. [Dates in JavaScript](#7-dates-in-javascript)
8. [Arrays](#8-arrays)
9. [Objects](#9-objects)
10. [Functions](#10-functions)
11. [Scopes & Closures](#11-scopes--closures)
12. [Arrow Functions & `this`](#12-arrow-functions--this)
13. [IIFE (Immediately Invoked Function Expressions)](#13-iife-immediately-invoked-function-expressions)
14. [Execution Context & Call Stack](#14-execution-context--call-stack)
15. [Control Flow (if/else, switch, truthy/falsy)](#15-control-flow-ifelse-switch-truthyfalsy)
16. [Iterations & Loops](#16-iterations--loops)
17. [High-Order Array Methods](#17-high-order-array-methods)
18. [DOM Manipulation](#18-dom-manipulation)
19. [Events & Event Propagation](#19-events--event-propagation)
20. [Timers (setTimeout & setInterval)](#20-timers-settimeout--setinterval)
21. [Asynchronous JavaScript (XHR, Promises, Async/Await)](#21-asynchronous-javascript-xhr-promises-asyncawait)
22. [Classes & Object-Oriented Programming (OOP)](#22-classes--object-oriented-programming-oop)

---

## 1. Variables & Declarations

JavaScript provides three keywords for declaring variables:

| Keyword | Scope | Re-declarable? | Re-assignable? | Hoisted? |
| :--- | :--- | :--- | :--- | :--- |
| `const` | Block | ❌ No | ❌ No | Yes (TDZ — can't access before declaration) |
| `let` | Block | ❌ No | ✅ Yes | Yes (TDZ) |
| `var` | Function | ✅ Yes | ✅ Yes | Yes (initialized as `undefined`) |

```javascript
const PI = 3.14159;    // Cannot be re-assigned
let score = 100;       // Can be re-assigned, block-scoped
var name = "sans";     // Function-scoped, leaks out of blocks — AVOID
```

> [!WARNING]
> Avoid `var` in modern JavaScript. It leaks out of `if/for` blocks into the enclosing function scope, causing hard-to-track bugs. Always use `const` by default, and `let` only when re-assignment is needed.

### `console.table()`:
Displays data as a formatted table in the console:
```javascript
const user = { name: "sans", age: 25, role: "dev" };
console.table(user);
```

---

## 2. Data Types & Memory

### Primitive Types (7 types — Immutable, stored on the **Stack**):
| Type | Example | `typeof` |
| :--- | :--- | :--- |
| `String` | `"hello"`, `'world'` | `"string"` |
| `Number` | `42`, `3.14`, `NaN`, `Infinity` | `"number"` |
| `BigInt` | `123456789012345678901234567890n` | `"bigint"` |
| `Boolean` | `true`, `false` | `"boolean"` |
| `undefined` | Variable declared but not assigned | `"undefined"` |
| `null` | Intentional absence of value | `"object"` ⚠️ (legacy bug) |
| `Symbol` | `Symbol("id")` — unique identifier | `"symbol"` |

### Reference Types (stored on the **Heap**, variable holds a reference):
| Type | Example | `typeof` |
| :--- | :--- | :--- |
| `Object` | `{ key: "value" }` | `"object"` |
| `Array` | `[1, 2, 3]` | `"object"` |
| `Function` | `function() {}` | `"function"` |

### Stack vs Heap:
```javascript
// STACK (Primitives): Creates an independent copy
let a = 10;
let b = a;      // b gets a COPY of the value
b = 20;         // a is still 10 — independent

// HEAP (References): Both point to the SAME object in memory
let user1 = { name: "sans" };
let user2 = user1;        // user2 gets a REFERENCE (pointer) to the same object
user2.name = "alice";     // user1.name is now also "alice"!
```

> [!IMPORTANT]
> `typeof null` returns `"object"` — this is a historical bug in JavaScript from its first implementation in 1995, never fixed for backward compatibility.

### `"use strict"`:
Enables strict mode, which catches common coding mistakes and prevents unsafe actions:
```javascript
"use strict";   // Must be the first statement in a file or function
x = 10;         // ❌ ReferenceError: x is not defined (undeclared variable)
```

---

## 3. Type Conversion & Coercion

### Explicit Conversion:
```javascript
// To Number
Number("33")       // 33
Number("33abc")    // NaN (Not a Number)
Number(true)       // 1
Number(false)      // 0
Number(null)       // 0
Number(undefined)  // NaN

// To Boolean
Boolean(1)         // true
Boolean(0)         // false
Boolean("")        // false (empty string)
Boolean("hello")   // true (non-empty string)

// To String
String(42)         // "42"
String(null)       // "null"
String(true)       // "true"
```

### Implicit Coercion (Type Juggling):
```javascript
"5" + 3       // "53"  (string concatenation — + prefers strings)
"5" - 3       // 2     (subtraction forces numeric conversion)
"5" * 2       // 10    (multiplication forces numeric conversion)
true + true   // 2     (booleans coerced to numbers)
+"42"         // 42    (unary + converts string to number)
```

> [!NOTE]
> The `+` operator is the only arithmetic operator that triggers string concatenation. All other operators (`-`, `*`, `/`, `%`) force numeric conversion.

---

## 4. Comparison Operators

### Loose (`==`) vs Strict (`===`) Equality:
```javascript
// == (Loose): Performs type coercion before comparing
"5" == 5       // true  (string "5" coerced to number 5)
null == undefined  // true (special case)
false == 0     // true  (false coerced to 0)

// === (Strict): No coercion — must be same type AND value
"5" === 5      // false (string ≠ number)
null === undefined // false (different types)
false === 0    // false
```

### `null` / `undefined` Quirks:
```javascript
null == undefined   // true  (special coercion rule)
null === undefined  // false (different types)
null == 0           // false (null only equals undefined in ==)
null >= 0           // true  (comparison converts null to 0)
null > 0            // false
```

> [!TIP]
> Always use `===` (strict equality) and `!==` (strict inequality). Loose equality has too many unintuitive edge cases.

---

## 5. Strings & Template Literals

### Template Literals (ES6):
Use backticks `` ` `` for string interpolation and multi-line strings:
```javascript
const name = "sans";
const age = 25;

// String Interpolation
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

// Multi-line strings (preserves newlines)
const multiLine = `
    Line 1
    Line 2
    Line 3
`;

// Expressions inside ${}
const result = `Total: ${10 + 20}`;  // "Total: 30"
```

### String Methods:

| Method | Returns | Example |
| :--- | :--- | :--- |
| `.length` | Number of characters | `"hello".length` → `5` |
| `.toUpperCase()` | Uppercased string | `"hello".toUpperCase()` → `"HELLO"` |
| `.toLowerCase()` | Lowercased string | `"HELLO".toLowerCase()` → `"hello"` |
| `.trim()` | String with whitespace removed from both ends | `"  hi  ".trim()` → `"hi"` |
| `.slice(start, end)` | Extracted portion (end exclusive) | `"hello".slice(1, 4)` → `"ell"` |
| `.substring(start, end)` | Similar to slice but no negative indices | `"hello".substring(1, 4)` → `"ell"` |
| `.replace(search, replacement)` | New string with first match replaced | `"hello".replace("l", "r")` → `"herlo"` |
| `.includes(search)` | Boolean — whether substring exists | `"hello".includes("ell")` → `true` |
| `.indexOf(search)` | Index of first match, or `-1` | `"hello".indexOf("l")` → `2` |
| `.split(separator)` | Array of substrings | `"a,b,c".split(",")` → `["a","b","c"]` |

---

## 6. Numbers & Math

### Number Formatting:
```javascript
const num = 123.456;
num.toFixed(2)           // "123.46" (rounds to 2 decimal places, returns STRING)
num.toPrecision(5)       // "123.46" (5 significant digits, returns STRING)
(1000000).toLocaleString("en-IN")  // "10,00,000" (Indian numbering format)
```

### `Math` Object:

| Method | Purpose | Example |
| :--- | :--- | :--- |
| `Math.abs(x)` | Absolute value | `Math.abs(-5)` → `5` |
| `Math.round(x)` | Rounds to nearest integer | `Math.round(4.6)` → `5` |
| `Math.ceil(x)` | Rounds **up** | `Math.ceil(4.1)` → `5` |
| `Math.floor(x)` | Rounds **down** | `Math.floor(4.9)` → `4` |
| `Math.min(a, b, ...)` | Smallest value | `Math.min(3, 1, 5)` → `1` |
| `Math.max(a, b, ...)` | Largest value | `Math.max(3, 1, 5)` → `5` |
| `Math.pow(base, exp)` | Exponentiation | `Math.pow(2, 3)` → `8` |
| `Math.sqrt(x)` | Square root | `Math.sqrt(16)` → `4` |
| `Math.random()` | Random float in `[0, 1)` | `Math.random()` → `0.7382...` |

### Random Number in Range:
```javascript
// Random integer between min (inclusive) and max (inclusive)
const min = 1, max = 10;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
```

---

## 7. Dates in JavaScript

```javascript
const now = new Date();                  // Current date and time
const specific = new Date(2024, 0, 15);  // Jan 15, 2024 (month is 0-indexed!)
const fromString = new Date("2024-01-15");

now.getFullYear()    // 2024
now.getMonth()       // 0–11 (January = 0, December = 11) ⚠️
now.getDate()        // 1–31 (day of month)
now.getDay()         // 0–6 (Sunday = 0, Saturday = 6)
now.getHours()       // 0–23
now.getMinutes()     // 0–59

// Formatted output
now.toLocaleString()       // "9/24/2024, 12:30:45 PM"
now.toLocaleDateString()   // "9/24/2024"
now.toLocaleTimeString()   // "12:30:45 PM"

// Timestamp (milliseconds since Jan 1, 1970)
Date.now()                 // 1727184645000
```

> [!WARNING]
> Months are **0-indexed** in JavaScript: January = `0`, February = `1`, ..., December = `11`. This is one of the most common date-related bugs.

---

## 8. Arrays

### Array Methods:

#### Mutating Methods (modify the original array):

| Method | Action | Returns |
| :--- | :--- | :--- |
| `.push(item)` | Adds to the **end** | New length |
| `.pop()` | Removes from the **end** | Removed element |
| `.unshift(item)` | Adds to the **beginning** | New length |
| `.shift()` | Removes from the **beginning** | Removed element |
| `.splice(start, deleteCount, ...items)` | Removes/inserts at any index | Array of removed elements |

#### Non-Mutating Methods (return a new array/value):

| Method | Action | Returns |
| :--- | :--- | :--- |
| `.slice(start, end)` | Extracts a portion (end exclusive) | New array |
| `.concat(arr2)` | Merges arrays | New merged array |
| `.includes(item)` | Checks existence | `true` / `false` |
| `.indexOf(item)` | Finds first index | Index or `-1` |
| `.join(separator)` | Converts array to string | String |
| `.flat(depth)` | Flattens nested arrays | New flat array |
| `Array.from(iterable)` | Creates array from array-like | New array |
| `Array.of(items)` | Creates array from arguments | New array |

### `slice` vs `splice`:
```javascript
const arr = [1, 2, 3, 4, 5];

// slice — NON-MUTATING (returns a new array)
arr.slice(1, 4);    // [2, 3, 4] — arr is unchanged

// splice — MUTATING (modifies the original array)
arr.splice(1, 2);   // Returns [2, 3] — arr is now [1, 4, 5]
```

### Spread Operator (`...`):
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays (preferred over .concat())
const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

// Shallow copy
const copy = [...arr1];  // [1, 2, 3] — independent copy
```

---

## 9. Objects

### Object Literals:
```javascript
const user = {
    name: "sans",
    age: 25,
    "full name": "sans serif",   // Quoted keys for special characters
    [Symbol("id")]: 12345,       // Symbol as a key (not enumerable)
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

// Accessing properties
user.name               // "sans" (dot notation)
user["full name"]       // "sans serif" (bracket notation — for dynamic/special keys)
```

### Object Methods:

| Method | Returns | Example |
| :--- | :--- | :--- |
| `Object.keys(obj)` | Array of keys | `["name", "age"]` |
| `Object.values(obj)` | Array of values | `["sans", 25]` |
| `Object.entries(obj)` | Array of `[key, value]` pairs | `[["name", "sans"], ["age", 25]]` |
| `Object.assign(target, ...sources)` | Merged object (mutates target) | Shallow merge |
| `Object.freeze(obj)` | Same object (now immutable) | Properties can't be added/changed/deleted |
| `Object.hasOwnProperty(key)` | `true` / `false` | Checks if key exists directly on the object |

### Destructuring:
```javascript
const { name, age, country = "India" } = user;
// name = "sans", age = 25, country = "India" (default value)

// Rename during destructuring
const { name: userName } = user;  // userName = "sans"
```

### Spread with Objects:
```javascript
const defaults = { theme: "dark", lang: "en" };
const userPrefs = { lang: "hi", fontSize: 16 };

const settings = { ...defaults, ...userPrefs };
// { theme: "dark", lang: "hi", fontSize: 16 } — later spreads override
```

### JSON (JavaScript Object Notation):
```javascript
// Object → JSON string
const jsonString = JSON.stringify(user);

// JSON string → Object
const parsed = JSON.parse(jsonString);
```

---

## 10. Functions

### Function Declaration vs Expression:
```javascript
// Declaration — Hoisted (can be called before declaration)
function greet(name) {
    return `Hello, ${name}!`;
}

// Expression — NOT hoisted
const greet = function(name) {
    return `Hello, ${name}!`;
};
```

### Parameters vs Arguments:
- **Parameters**: Variables listed in the function definition.
- **Arguments**: Actual values passed when calling the function.

### Default Values & Rest Operator:
```javascript
// Default parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// Rest operator (...) — collects remaining arguments into an array
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
sum(1, 2, 3, 4);  // 10
```

### Passing Objects/Arrays to Functions:
```javascript
function updateUser(user) {
    user.name = "updated";  // ⚠️ Modifies the original object (reference type)
}

const myUser = { name: "sans" };
updateUser(myUser);
console.log(myUser.name);  // "updated" — original was mutated!
```

> [!WARNING]
> When passing objects or arrays to functions, you're passing a **reference**. Modifying them inside the function changes the original. Spread into a new object if you need immutability: `const copy = { ...user };`

---

## 11. Scopes & Closures

### Global vs Block Scope:
```javascript
let globalVar = "I'm global";

if (true) {
    let blockVar = "I'm block-scoped";    // Only accessible inside this block
    var funcVar = "I leak out!";           // Accessible outside the block ⚠️
}

console.log(blockVar);  // ❌ ReferenceError
console.log(funcVar);   // ✅ "I leak out!" (var is function-scoped, not block-scoped)
```

### Lexical Scoping:
Inner functions have access to variables from their outer (parent) functions:
```javascript
function outer() {
    const outerVar = "I'm from outer";

    function inner() {
        console.log(outerVar);  // ✅ Can access parent's variable
    }

    inner();
}
```

### Variable Shadowing:
A variable in an inner scope can **shadow** (override) a variable with the same name in an outer scope:
```javascript
let x = 10;
if (true) {
    let x = 20;        // Shadows the outer x
    console.log(x);    // 20
}
console.log(x);        // 10 (outer x is unchanged)
```

---

## 12. Arrow Functions & `this`

### Arrow Function Syntax:
```javascript
// Standard function
function add(a, b) {
    return a + b;
}

// Arrow function (explicit return)
const add = (a, b) => {
    return a + b;
};

// Arrow function (implicit return — single expression)
const add = (a, b) => a + b;

// Single parameter (parentheses optional)
const double = num => num * 2;

// Returning an object literal (wrap in parentheses)
const makeUser = (name) => ({ name: name, active: true });
```

### `this` Keyword Behavior:

| Context | `this` refers to |
| :--- | :--- |
| **Global scope (Browser)** | `window` object |
| **Global scope (Node.js)** | `{}` (empty object in modules) |
| **Inside a regular function** | The **caller** / object that invoked it |
| **Inside an arrow function** | The **parent scope's** `this` (lexically inherited — does NOT have its own `this`) |
| **Inside an object method** | The **object** itself |

```javascript
const user = {
    name: "sans",
    // Regular function — 'this' = the user object
    greet() {
        console.log(this.name);  // "sans" ✅
    },
    // Arrow function — 'this' = parent scope (global), NOT the object
    greetArrow: () => {
        console.log(this.name);  // undefined ❌
    }
};
```

> [!IMPORTANT]
> Never use arrow functions as object methods — they don't bind their own `this` and will reference the parent scope instead.

---

## 13. IIFE (Immediately Invoked Function Expressions)

An **IIFE** is a function that runs immediately after it's defined, without being called:

```javascript
// Named IIFE
(function greet() {
    console.log("Hello from IIFE!");
})();

// Arrow IIFE
(() => {
    console.log("Arrow IIFE!");
})();

// IIFE with parameters
((name) => {
    console.log(`Hello, ${name}!`);
})("sans");
```

### Why Use IIFEs?
1. **Prevent Global Scope Pollution**: Variables inside an IIFE don't leak into the global scope.
2. **Module Pattern**: Encapsulate private variables and expose a public API.

> [!CAUTION]
> When chaining multiple IIFEs or placing them after other code, always terminate the preceding statement with a **semicolon `;`** — otherwise JavaScript may try to invoke the previous expression as a function.

```javascript
const x = 10;   // Semicolon is mandatory here!
(() => {
    console.log("IIFE");
})();
```

---

## 14. Execution Context & Call Stack

### How JavaScript Executes Code:
JavaScript runs code in two phases:

**Phase 1 — Memory Creation (Hoisting)**:
- Scans the code and allocates memory for all variables and functions.
- `var` variables are initialized as `undefined`.
- `let`/`const` are hoisted but placed in the **Temporal Dead Zone (TDZ)** — accessing them before declaration throws `ReferenceError`.
- Function declarations are stored in memory **in their entirety**.

**Phase 2 — Execution**:
- Code runs line by line, assigning values and executing functions.
- Each function call creates a new **Function Execution Context** with its own Memory and Execution phases.

### The Call Stack (LIFO):
```
┌──────────────────────────┐
│   innerFunction() EC     │  ← Currently executing
├──────────────────────────┤
│   outerFunction() EC     │
├──────────────────────────┤
│   Global Execution Context│  ← Always at the bottom
└──────────────────────────┘
```

- When a function is called, its Execution Context is **pushed** onto the stack.
- When it returns, its context is **popped** off the stack.
- JavaScript is **single-threaded** — only one thing executes at a time.

---

## 15. Control Flow (if/else, switch, truthy/falsy)

### Conditional Branching:
```javascript
const score = 85;

if (score >= 90) {
    console.log("A grade");
} else if (score >= 80) {
    console.log("B grade");
} else {
    console.log("Below B");
}
```

### Logical Operators:
```javascript
// && (AND) — all conditions must be true
if (age >= 18 && hasID) { /* allowed */ }

// || (OR) — at least one condition must be true
if (isAdmin || isModerator) { /* allowed */ }
```

### Switch Statement:
```javascript
const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;          // Without break, execution "falls through" to next case
    case "Friday":
        console.log("Almost weekend!");
        break;
    default:
        console.log("Regular day");
}
```

> [!NOTE]
> `switch` uses **strict equality** (`===`) for comparisons. Always include `break` to prevent fall-through.

### Truthy & Falsy Values:

**Falsy values** (evaluate to `false` in boolean context):
```javascript
false, 0, -0, 0n, "", null, undefined, NaN
```

**Everything else is truthy**, including:
```javascript
"0", " ", [], {}, function(){}, "false"   // All truthy!
```

### Checking Empty Arrays & Objects:
```javascript
// Empty array is TRUTHY — check .length instead
const arr = [];
if (arr.length === 0) { /* truly empty */ }

// Empty object is TRUTHY — check Object.keys()
const obj = {};
if (Object.keys(obj).length === 0) { /* truly empty */ }
```

### Nullish Coalescing (`??`) & Ternary (`? :`):
```javascript
// ?? — Returns right side ONLY if left is null or undefined (not 0 or "")
const value = null ?? "default";   // "default"
const count = 0 ?? 42;            // 0 (0 is not null/undefined)

// || — Returns right side if left is any falsy value
const count = 0 || 42;            // 42 (0 is falsy)

// Ternary operator
const status = age >= 18 ? "Adult" : "Minor";
```

---

## 16. Iterations & Loops

### Classic `for` Loop:
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// break — Exit loop entirely
// continue — Skip current iteration
for (let i = 0; i < 10; i++) {
    if (i === 3) continue;  // Skip 3
    if (i === 7) break;     // Stop at 7
    console.log(i);         // 0, 1, 2, 4, 5, 6
}
```

### `while` & `do...while`:
```javascript
// while — Checks condition BEFORE each iteration
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do...while — Guaranteed to run at LEAST once
let j = 10;
do {
    console.log(j);  // 10 (runs once even though j >= 5)
    j++;
} while (j < 5);
```

### `for...of` (Iterables — Arrays, Strings, Maps):
```javascript
// Arrays
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}

// Strings (iterates characters)
for (const char of "hello") {
    console.log(char);  // h, e, l, l, o
}

// Maps (key-value destructuring)
const map = new Map([["name", "sans"], ["age", 25]]);
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}
```

### `for...in` (Object Properties):
```javascript
const user = { name: "sans", age: 25, role: "dev" };
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
// name: sans, age: 25, role: dev
```

> [!TIP]
> Use `for...of` for **arrays and iterables** (values). Use `for...in` for **objects** (keys). Don't use `for...in` on arrays — it iterates over indices as strings and includes inherited properties.

---

## 17. High-Order Array Methods

### `.forEach()` — Execute for each element (returns `undefined`):
```javascript
const nums = [1, 2, 3, 4, 5];

nums.forEach((item, index, arr) => {
    console.log(`Index ${index}: ${item}`);
});
```

> [!WARNING]
> `.forEach()` always returns `undefined`. You cannot `break` out of it or use it to build a new array. Use `.map()` or `.filter()` for transformations.

### `.filter()` — Keep elements that pass a test:
```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = nums.filter(num => num % 2 === 0);  // [2, 4, 6, 8]
```

### `.map()` — Transform each element:
```javascript
const nums = [1, 2, 3];
const doubled = nums.map(num => num * 2);  // [2, 4, 6]
```

### `.reduce()` — Accumulate to a single value:
```javascript
const nums = [1, 2, 3, 4];
const total = nums.reduce((accumulator, current) => accumulator + current, 0);
// 0 + 1 + 2 + 3 + 4 = 10
```

### Chaining Methods:
```javascript
const items = [
    { name: "Widget", price: 25 },
    { name: "Gadget", price: 100 },
    { name: "Doohickey", price: 50 },
];

const expensiveNames = items
    .filter(item => item.price > 30)         // Keep expensive items
    .map(item => item.name.toUpperCase())     // Extract and uppercase names
    // ["GADGET", "DOOHICKEY"]
```

### Real-World `.reduce()` — Shopping Cart Total:
```javascript
const cart = [
    { item: "Laptop", price: 999 },
    { item: "Mouse", price: 29 },
    { item: "Keyboard", price: 79 },
];

const total = cart.reduce((sum, product) => sum + product.price, 0);
// 1107
```

---

## 18. DOM Manipulation

### Selecting Elements:

| Method | Returns | Example |
| :--- | :--- | :--- |
| `getElementById("id")` | Single element | `document.getElementById("header")` |
| `getElementsByClassName("class")` | Live HTMLCollection | `document.getElementsByClassName("card")` |
| `getElementsByTagName("tag")` | Live HTMLCollection | `document.getElementsByTagName("p")` |
| `querySelector("CSS selector")` | First matching element | `document.querySelector(".card.active")` |
| `querySelectorAll("CSS selector")` | Static NodeList | `document.querySelectorAll("ul > li")` |

> [!TIP]
> Prefer `querySelector` and `querySelectorAll` — they accept any CSS selector and are more flexible. Use `getElementById` for maximum performance when targeting by ID.

### Text Content:

| Property | Behavior |
| :--- | :--- |
| `innerText` | Returns only **visible** text (respects CSS `display: none`). |
| `textContent` | Returns **all** text including hidden elements (faster, layout-independent). |
| `innerHTML` | Returns the full HTML markup inside the element (can inject HTML). |

### Creating & Appending Elements:
```javascript
// 1. Create the element
const newDiv = document.createElement("div");

// 2. Set content and attributes
newDiv.textContent = "Hello World";
newDiv.className = "card";
newDiv.id = "new-card";
newDiv.setAttribute("data-id", "42");
newDiv.style.backgroundColor = "#f0f0f0";

// 3. Append to the DOM
document.body.appendChild(newDiv);
```

### Traversing the DOM Tree:
```javascript
const element = document.querySelector(".parent");

// Parent
element.parentElement

// Children
element.children              // HTMLCollection of child elements
element.firstElementChild     // First child element
element.lastElementChild      // Last child element
element.childNodes            // NodeList (includes text nodes, comments)

// Siblings
element.nextElementSibling    // Next sibling element
element.previousElementSibling // Previous sibling element
```

### Modifying & Removing:
```javascript
// Replace
const newElement = document.createElement("p");
oldElement.replaceWith(newElement);

// Remove
element.remove();

// Remove child from parent
parent.removeChild(child);
```

---

## 19. Events & Event Propagation

### Adding Event Listeners:
```javascript
const button = document.querySelector("#myBtn");

button.addEventListener("click", function(e) {
    console.log("Clicked!");
    console.log(e.target);     // The element that was clicked
    console.log(e.type);       // "click"
    console.log(e.clientX);    // X coordinate of click
    console.log(e.clientY);    // Y coordinate of click
    console.log(e.timeStamp);  // Time of the event
});
```

### `e.preventDefault()`:
Prevents the default browser action:
```javascript
// Prevent form submission (for custom validation)
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Custom validation logic here
});

// Prevent link navigation
link.addEventListener("click", (e) => {
    e.preventDefault();
});
```

### Event Propagation (Bubbling vs Capturing):

```
              Document
                 │
          ┌──────┴──────┐
          │   <html>     │
          │   ┌──────┐   │
          │   │<body> │   │
          │   │ ┌───┐ │   │
          │   │ │DIV│ │   │
          │   │ │BTN│ │   │     ① Capturing Phase (top → target)
          │   │ └───┘ │   │     ② Target Phase
          │   └──────┘   │     ③ Bubbling Phase (target → top)
          └──────────────┘
```

```javascript
// Bubbling (default) — event goes from target UP to root
parent.addEventListener("click", () => {
    console.log("Parent clicked");
});
// If child is clicked: Child → Parent → Body → HTML → Document

// Capturing — event goes from root DOWN to target
parent.addEventListener("click", () => {
    console.log("Parent captured");
}, true);  // Third argument 'true' enables capturing

// Stop propagation — prevents event from reaching other listeners
child.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Only child handles this");
});
```

---

## 20. Timers (setTimeout & setInterval)

### `setTimeout` — Execute once after a delay:
```javascript
// Execute after 2 seconds
const timeoutId = setTimeout(() => {
    console.log("Delayed message");
}, 2000);

// Cancel before it fires
clearTimeout(timeoutId);
```

### `setInterval` — Execute repeatedly at fixed intervals:
```javascript
// Execute every 1 second
const intervalId = setInterval(() => {
    console.log("Tick");
}, 1000);

// Stop the interval
clearInterval(intervalId);
```

### Digital Clock Example:
```javascript
setInterval(() => {
    const now = new Date();
    document.getElementById("clock").textContent =
        now.toLocaleTimeString();
}, 1000);
```

> [!NOTE]
> `setTimeout` and `setInterval` are **asynchronous** — they don't block the main thread. The delay/interval is a *minimum* wait time, not an exact guarantee (the callback goes into the event queue and runs when the call stack is empty).

---

## 21. Asynchronous JavaScript (XHR, Promises, Async/Await)

### 1. XMLHttpRequest (XHR) — Old-School AJAX:
```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.github.com/users/hiteshchoudhary");

xhr.onreadystatechange = function() {
    // readyState: 0=UNSENT, 1=OPENED, 2=HEADERS_RECEIVED, 3=LOADING, 4=DONE
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};

xhr.send();
```

### 2. Promises:
A **Promise** represents a value that may not be available yet but will be resolved in the future.

**Three States**: `Pending` → `Fulfilled` (resolved) or `Rejected`

```javascript
// Creating a Promise
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve({ id: 1, name: "sans" });
        } else {
            reject("Failed to fetch data");
        }
    }, 1000);
});

// Consuming a Promise
fetchData
    .then((data) => {
        console.log(data);        // { id: 1, name: "sans" }
        return data.name;
    })
    .then((name) => {
        console.log(name);        // "sans"
    })
    .catch((error) => {
        console.error(error);     // Only runs if rejected
    })
    .finally(() => {
        console.log("Done!");     // Always runs, regardless of outcome
    });
```

### 3. `async` / `await` — Syntactic Sugar over Promises:
```javascript
async function getUserData() {
    try {
        const response = await fetch("https://api.github.com/users/hiteshchoudhary");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

getUserData();
```

### 4. `fetch()` API:
```javascript
// GET request
fetch("https://api.example.com/data")
    .then(response => response.json())   // Parse JSON body
    .then(data => console.log(data))
    .catch(error => console.error(error));

// POST request
fetch("https://api.example.com/data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "sans", age: 25 })
})
    .then(response => response.json())
    .then(data => console.log(data));
```

> [!IMPORTANT]
> `fetch()` does **not** reject on HTTP error statuses (404, 500). It only rejects on **network failures**. Always check `response.ok` or `response.status` manually.

---

## 22. Classes & Object-Oriented Programming (OOP)

### What is OOP?
**Object-Oriented Programming** is a paradigm based on **objects** that contain state (properties) and behavior (methods).

> [!NOTE]
> JavaScript is fundamentally a **prototype-based language**, not a classical class-based language (like Java or C++). Even with the `class` keyword (ES6), JavaScript still uses prototypal inheritance under the hood.

### Why Use OOP?
1. **Modularity**: Groups related data and functions together.
2. **Reusability (DRY)**: Create blueprints once, instantiate many times.
3. **Maintainability**: Easier to reason about, debug, and scale.
4. **Data Protection**: Control how data is accessed and modified.

### Constructor Functions:
```javascript
function User(username, score) {
    this.username = username;
    this.score = score;
}

User.prototype.incrementScore = function() {
    this.score++;
};

const user1 = new User("sans", 10);
user1.incrementScore();  // user1.score = 11
```

### ES6 Classes (Syntactic Sugar):
```javascript
class User {
    constructor(username, score) {
        this.username = username;
        this.score = score;
    }

    incrementScore() {
        this.score++;
    }
}

const user1 = new User("sans", 10);
```

### The Four Pillars of OOP:

| Pillar | Concept | JavaScript Example |
| :--- | :--- | :--- |
| **Abstraction** | Hiding complex details, showing only the essential interface. | `fetch(url)` without knowing TCP/IP internals. |
| **Encapsulation** | Bundling data and methods, restricting direct access. | Private fields (`#balance`) or closures. |
| **Inheritance** | Deriving properties/behaviors from another class. | `class Admin extends User` |
| **Polymorphism** | Same method name, different implementations. | `Dog.speak()` → "Bark", `Cat.speak()` → "Meow" |

### The Prototype Chain:
```
[myArray Instance]
       │
       ▼ (__proto__)
[Array.prototype]  (.map(), .filter(), .push())
       │
       ▼ (__proto__)
[Object.prototype] (.toString(), .hasOwnProperty())
       │
       ▼ (__proto__)
      null (End of Chain)
```

### What `new` Does Behind the Scenes:
1. **Creates** a fresh empty object `{}`.
2. **Links** its `[[Prototype]]` to the constructor's `.prototype`.
3. **Binds** `this` to the new object during constructor execution.
4. **Returns** the new object (unless a non-primitive is explicitly returned).
