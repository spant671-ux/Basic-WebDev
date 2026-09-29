// ==================== Understanding Function.prototype.call() ====================

/*
Why do we need .call()?
- In JavaScript, when a function is called normally like `setUsername(username)`, 
  its execution context is created, and 'this' refers to the global object (window / global).
- Once that function finishes running, its execution context is popped off the Call Stack, 
  and its variables/assignments are lost.
- To pass our current execution context ('this') to another function and retain the values, 
  we use .call().

Syntax:
functionName.call(thisArg, arg1, arg2, ...)
- 'thisArg': The object we want 'this' to point to inside the called function.
*/


// 1. Helper function to set username
function setUsername(username){
    // Complex DB calls / validations
    this.username = username;
    console.log("called");
}

// 2. Main constructor function to create a user
function createUser(username, email, password){
    // We use .call() and pass 'this' so setUsername uses createUser's current object.
    // If we just wrote setUsername(username), 'this' would point to the global object 
    // and chai.username would remain undefined!
    setUsername.call(this, username);

    this.email = email;
    this.password = password;
}

// 3. Creating a new instance using 'new'
const chai = new createUser('chai', 'chai@gmail.com', '123');

// Outputting the created user object
console.log(chai);
// Expected Output:
// called
// createUser { username: 'chai', email: 'chai@gmail.com', password: '123' }