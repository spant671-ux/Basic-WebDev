// Function declaration syntax: 'function' keyword, function name, parentheses (), and code block {}
function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("n");
    console.log("s");
}

// Function reference vs Execution:
// 'sayMyName' alone is the reference (points to the function definition).
// Adding parentheses 'sayMyName()' executes (invokes) the function.
sayMyName();


// Parameters vs Arguments:
// Parameters are variables declared in the function definition (e.g., number1, number2).
// Arguments are actual values passed to the function when invoking it (e.g., 3, 5).

/*
Function returns and unreachable code:
- A function without a 'return' statement returns 'undefined' by default.
- The 'return' statement sends a value back to the caller and exits the function immediately.
- Any code written after the 'return' statement inside the function block is unreachable and will not run.
*/
function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;

    // Unreachable code (will not execute because return has already exited the function)
    console.log("Hello");
}

// Passing 3 and 5 as arguments, storing the returned value (8) in 'result'
const result = addTwoNumbers(3, 5);

// Expected Output: Result: 8
// console.log("Result:", result);


// Handling missing arguments and checking for undefined/falsy values:
function loginUserMessage(username){
    // Checks if username is undefined or empty/falsy using the logical NOT (!) operator
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// Calling loginUserMessage without arguments passes 'undefined' as username
// Expected Output: "Please enter a username"
// console.log(loginUserMessage());


// Rest Operator (...) in function parameters:
// The rest operator collects all passed arguments into a single array.
// Useful when the number of arguments is dynamic or unknown beforehand.
function calculateCartPrice(...num1){
    return num1;
}

// Passes multiple numbers which get gathered into an array: [300, 400, 500]
// Expected Output: [ 300, 400, 500 ]
// console.log(calculateCartPrice(300, 400, 500));


// ==================== Passing Objects to Functions ====================

// Define a sample object with username and price properties:
const user = {
    username: "sans",
    price: 199
};

// Function that accepts any object parameter and accesses its properties using dot notation:
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// Invoking handleObject by passing a pre-defined object variable:
// Expected Output: "Username is sans and price is 199"
// handleObject(user);

// Invoking handleObject directly by passing an inline object literal:
// Expected Output: "Username is sam and price is 399"
handleObject({
    username: "sam",
    price: 399
});


// ==================== Passing Arrays to Functions ====================

// Define a sample array:
const myNewArray = [200, 400, 100, 600];

// Function that accepts an array parameter and returns an element at a specific index (index 3):
function returnSecondValue(getArray){
    return getArray[3];
}

// Invoking function by passing a pre-defined array variable:
// Expected Output: 600 (element at index 3)
// console.log(returnSecondValue(myNewArray));

// Invoking function directly by passing an inline array argument:
// Expected Output: 400 (element at index 3 of [100, 200, 300, 400])
console.log(returnSecondValue([100, 200, 300, 400]));

