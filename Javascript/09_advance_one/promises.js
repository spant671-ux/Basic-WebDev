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

// ==================== 6. The fetch() API: Deep Architecture & Inner Mechanics ====================

/*
---------------------------------------------------------------------------------------
WHAT IS THE fetch() API?
---------------------------------------------------------------------------------------
- fetch() is a modern, promise-based Web API available in all modern browsers and Node.js (v18+).
- It is designed to perform asynchronous HTTP network requests (GET, POST, PUT, DELETE, etc.)
  and acts as the modern successor to XMLHttpRequest (XHR).

---------------------------------------------------------------------------------------
HOW fetch() WORKS BEHIND THE SCENES (UNDER THE HOOD IN V8 & BROWSER ENGINES)
---------------------------------------------------------------------------------------
When fetch(resource, [options]) is invoked, two parallel mechanisms execute simultaneously:

1. JAVASCRIPT ENGINE & MEMORY LAYER:
   - Synchronously instantiates a Promise object in the 'pending' state.
   - Allocates two internal arrays/handlers:
     * onFulfilled[]: Queue of callbacks waiting for response resolution.
     * onRejection[]: Queue of callbacks waiting for network failure.
   - Returns this Promise object immediately to the main thread so synchronous execution never blocks.

2. BROWSER WEB API & NETWORK SUBSYSTEM (C++ in Chromium / libuv in Node.js):
   - Offloads the actual I/O network request to the browser's native network layer.
   - Handles low-level operations: DNS resolution, TCP handshake, TLS/SSL encryption, and sending HTTP headers.
   - When network response packets begin arriving, it fulfills the Promise through the engine's internal onFulfilled handler.

---------------------------------------------------------------------------------------
THE MICROTASK QUEUE (THE "VIP" PRIORITY QUEUE)
---------------------------------------------------------------------------------------
- Regular asynchronous timers/callbacks (setTimeout, setInterval, DOM event listeners)
  are pushed to the standard Task / Macrotask Queue.
- Promises created by fetch() resolve through the Microtask Queue (sometimes called the Promise / High Priority Queue).
- In the Event Loop cycle, the Microtask Queue is always drained COMPLETELY before the engine picks up any task from the Macrotask Queue.
- Example: If a setTimeout(..., 0) and a fast-resolving fetch() are initiated together,
  the fetch() .then() or await continuation runs BEFORE the setTimeout callback!

---------------------------------------------------------------------------------------
THE TWO-PHASE RESOLUTION LIFECYCLE
---------------------------------------------------------------------------------------
1. Phase 1 (Header Arrival -> Promise Resolves):
   - const response = await fetch(url) fulfills as soon as the HTTP headers arrive from the server (status code 200, 404, headers, etc.).
   - IMPORTANT: At this initial point, the complete response body payload may NOT have finished streaming over the network yet!

2. Phase 2 (Body Stream Parsing -> Second Promise Resolves):
   - The response object is a ReadableStream.
   - Calling response.json() (or response.text(), response.blob(), response.formData(), response.arrayBuffer())
     returns a SECOND Promise.
   - This second Promise reads the incoming network byte stream to completion and parses it into a native JavaScript data structure.
   - NOTE: Body streams can only be read ONCE! Attempting await response.json() followed by await response.text() on the same response will throw: "TypeError: body stream already read".

---------------------------------------------------------------------------------------
THE CRITICAL 404 / 500 STATUS CODE GOTCHA (HTTP Errors vs. Network Errors)
---------------------------------------------------------------------------------------
- A fetch() Promise ONLY rejects on true network-level failures:
  * User is offline / disconnected from network.
  * DNS resolution failed (domain does not exist).
  * CORS security policy blocked the request in the browser.
  * Request was explicitly aborted using an AbortController.
- If the server answers with HTTP status 404 Not Found, 401 Unauthorized, 403 Forbidden,
  or 500 Internal Server Error, fetch() DOES NOT REJECT! It resolves successfully.
- WHY? Because as far as the browser's HTTP networking stack is concerned, the HTTP conversation completed and the server responded.
- BEST PRACTICE: Always check response.ok (which evaluates to true if response.status is between 200 and 299).

---------------------------------------------------------------------------------------
CONFIGURING HTTP REQUEST OPTIONS (method, headers, body)
---------------------------------------------------------------------------------------
fetch('https://api.example.com/data', {
    method: 'POST', // 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <token>'
    },
    body: JSON.stringify({ name: 'Sans', role: 'developer' })
})
*/

// ==================== 6A. Fetching API Data with async / await & try...catch ====================

async function getAllUsers(){
    try {
        // Step 1: Initiate network request and await the Response headers
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        // Step 2: Manually check for HTTP errors (404, 500, etc.)
        // response.ok is a boolean flag: true if status is 200-299, false otherwise
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status} (${response.statusText})`);
        }

        // Useful Response object metadata:
        // console.log("Status Code:", response.status);       // e.g. 200
        // console.log("Status Message:", response.statusText); // e.g. "OK"
        // console.log("Headers:", response.headers.get('content-type')); // e.g. "application/json; charset=utf-8"

        // Step 3: Await streaming & parsing the response body as JSON
        const data = await response.json()
        console.log(data);
    } catch(error) {
        // Catches both network errors (DNS, offline) and any error thrown above (e.g. !response.ok)
        console.log("E: ", error);
    }
}

getAllUsers()

// ==================== 7. Fetching API Data with .then() / .catch() Chaining ====================

/*
Chaining fetch() with Promises:
- First .then(response) receives the Response object once headers arrive.
- Returning response.json() returns a new Promise representing the parsed payload.
- Second .then(data) receives the finalized, parsed JavaScript data.
- .catch(error) intercepts network rejections or errors thrown in either .then() step.
*/
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    // Check if the HTTP status is within the 200-299 range
    if (!response.ok) {
        throw new Error(`Network response was not ok, status: ${response.status}`);
    }
    // Returns a Promise resolving with the parsed JSON data
    return response.json()
})
.then((data) => {
    // Logs the array of users retrieved from the API
    console.log(data);
})
.catch((error) => {
    // Catches network failures, CORS blocks, or errors thrown from inside .then()
    console.log(error);
})
