// ==================== Iterations: Array.prototype.reduce() ====================

/*
The reduce() Method:
- Executes a user-supplied 'reducer' callback function on each element of the array.
- Passes the return value from the calculation on the preceding element to the next iteration.
- Reduces the array to a SINGLE accumulated output value (e.g., sum, product, object aggregation).

Syntax:
array.reduce( (accumulator, currentValue) => { ... }, initialValue );

Parameters:
1. accumulator (acc)   : Accumulates the callback's return values. (Starts as initialValue on the first iteration).
2. currentValue (currval) : The current element being processed in the array.
3. initialValue (0)    : The starting value assigned to accumulator on the first iteration.
*/

const myNums = [1, 2, 3];

// 1. Using a function expression with console logging to visualize the accumulator steps:
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0);
/*
Step-by-step reduction execution:
- Iteration 1: acc = 0 (initialValue), currval = 1 => returns 0 + 1 = 1
- Iteration 2: acc = 1, currval = 2 => returns 1 + 2 = 3
- Iteration 3: acc = 3, currval = 3 => returns 3 + 3 = 6
Final Result: 6
*/

// 2. Shorthand single-line Arrow Function:
const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0 );

// Expected Output: 6
console.log(myTotal);


// ==================== Practical Real-World Example: Shopping Cart Total Calculation ====================

const shoppingCart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "py course",
        price: 999
    },
    {
        itemname: "mobile dev course",
        price: 5999
    },
    {
        itemname: "data science course",
        price: 12999
    },
];

// Using reduce to calculate the grand total of all item prices in the shopping cart:
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 );

// Expected Output: 22996 (2999 + 999 + 5999 + 12999)
console.log(priceToPay);


