// ==================== JavaScript Promises: Core Concepts & Architecture ====================

/*
What is a Promise in JavaScript?
- A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
- It acts as a placeholder for a value that is not immediately available at the time of execution (e.g., fetching network data, file I/O, database queries, timers).

The 3 States of a Promise:
1. Pending   : Initial state; neither fulfilled nor rejected.
2. Fulfilled : The async operation completed successfully (triggered by resolve()).
3. Rejected  : The async operation failed (triggered by reject()).

Lifecycle:
- Creation   : Producer code that initiates async tasks via `new Promise(executorFunction)`.
- Consumption: Consumer code that listens for resolution or rejection using `.then()`, `.catch()`, `.finally()`, or `async/await`.
*/

// ==================== 1. Basic Promise Creation & Consumption ====================

// Creating a promise instance using the Promise constructor
// The constructor accepts an 'executor' callback function with two parameters: 'resolve' and 'reject'
const promiseOne = new Promise(function(resolve, reject){
    // Simulate an asynchronous operation (e.g., DB call, cryptography, network request)
    setTimeout(function(){
        console.log("async task is complete");
        // resolve() connects this promise to the consumer (.then)
        resolve()
    }, 1000)
})

// Consuming the promise:
// .then() executes its callback when resolve() is called inside the promise executor
promiseOne.then(function(){
    console.log('Promise consumed');
})

// ==================== 2. Direct Promise Chaining Without Storing in a Variable ====================

// Promises can be instantiated and directly chained with .then() without assigning to a variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// ==================== 3. Passing Data from Promise to Consumer ====================

// Data passed as an argument to resolve(...) is received by the callback function in .then()
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        // Passing an object payload upon successful resolution
        resolve({username: "sans", email: "sans@gmail.com"})
    }, 1000)
})

// The 'user' parameter receives the object passed into resolve()
promiseThree.then(function(user){
    console.log(user);
})

// ==================== 4. Error Handling, Promise Chaining, & finally ====================

/*
Promise Chaining & Error Handling:
- resolve(data)  : Marks promise as fulfilled; passes data to .then().
- reject(error)  : Marks promise as rejected; passes error reason to .catch().
- Value Returning: Any value returned from a .then() block is wrapped in a resolved promise and passed to the next chained .then().
- .finally()     : Runs regardless of whether the promise was resolved or rejected (useful for cleanup, spinners, etc.).
*/
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'sans', pass: '123'})
        }
        else{
            reject('Error: Something Went Wrong')
        }
    }, 1000)
})

// Consuming with chained .then(), .catch(), and .finally():
promiseFour.then((user) => {
    console.log(user);
    // Returning a specific property to the next chained .then()
    return user.username
}).then((username) => {
    // Receives the returned 'user.username' from the previous .then()
    console.log(username);
}).catch(function(error){
    // Catches any rejection or thrown error that occurred in the promise chain
    console.log(error);
}).finally(() => {
    // Always executes at the very end after resolution or rejection
    console.log("The promise is either resolved or rejected");
})

// ==================== 5. Consuming Promises with async / await ====================

/*
What is async/await?
- Syntactic sugar built on top of Promises and Generators to make asynchronous code look and behave like synchronous code.
- 'async' keyword declares a function that automatically returns a Promise.
- 'await' pauses function execution until the awaited Promise settles (resolves or rejects).
- Note: If a promise rejects when using 'await', you should wrap it in a try...catch block to prevent unhandled rejection errors.
*/
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false   
        if(!error){
            resolve({username: 'javascript', pass: '123'})
        }
        else{
            reject('Error: JS Went Wrong')
        }
    }, 1000)
})

async function consumedPromiseFive(){
    // Awaiting the resolution of promiseFive
    const response = await promiseFive
    console.log(response);
}

consumedPromiseFive()

// ==================== 6. Fetching API Data with async / await & try...catch ====================

/*
fetch() API with async / await:
- fetch(url) initiates a network request and returns a Promise that resolves to a Response object.
- response.json() parses the response body text as JSON. This is also an asynchronous operation that returns a Promise, so it must also be awaited.
- Wrapping with try...catch gracefully intercepts any network failures or exceptions.
*/
async function getAllUsers(){
    try {
        // Await the network call
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // Await parsing the response stream into JSON
        const data = await response.json()
        console.log(data);
    } catch(error) {
        // Catches network errors or parsing exceptions
        console.log("E: ", error);
    }
}

getAllUsers()

// ==================== 7. Fetching API Data with .then() / .catch() Chaining ====================

/*
The fetch() Promise Behavior:
- A fetch() Promise only rejects when a network failure occurs (e.g., DNS lookup failure, offline).
- An HTTP error status (like 404 or 500) does NOT reject the fetch promise; it resolves normally with response.ok set to false.
*/
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    // Returns a Promise resolving with the parsed JSON data
    return response.json()
})
.then((data) => {
    // Logs the array of users retrieved from the API
    console.log(data);
})
.catch((error) => console.log(error))