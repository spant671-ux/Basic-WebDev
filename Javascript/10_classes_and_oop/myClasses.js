// ==================== ES6 Classes & Prototypal Behind-the-Scenes ====================

/*
What are Classes in JavaScript?
- Introduced in ES6, 'class' is syntactic sugar over JavaScript's existing prototype-based inheritance.
- Under the hood, JavaScript does not have classical classes; it still uses constructor functions and prototypes.
- Classes provide a cleaner, more readable syntax to create blueprints and methods.
*/


// ==================== 1. Modern Approach: ES6 Classes ====================

class User {
    // The constructor is called automatically whenever a new instance is created with 'new'
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Methods defined inside a class are automatically attached to User.prototype
    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

// Creating a new instance using 'new'
const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword()); // Expected Output: 123abc
console.log(chai.changeUsername());  // Expected Output: CHAI


// ==================== 2. Behind the Scenes: Prototypal Equivalent ====================

/*
How JavaScript implements the exact same logic under the hood without the 'class' keyword:
1. The 'constructor' method is just a standard constructor function.
2. Class methods are manually attached to the constructor's prototype.

(Note: In Node.js, running both sections in the same file causes a redeclaration error 
because 'User' is declared twice. Comment out Section 1 to run Section 2, or vice-versa.)
*/

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

// Adding methods directly to User.prototype (shared across all instances)
User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
};

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
};

// Creating an instance using the constructor function
const tea = new User('tea', 'tea@gmail.com', '456');

console.log(tea.encryptPassword()); // Expected Output: 456abc
console.log(tea.changeUsername());  // Expected Output: TEA
