// ==================== Static Properties & Methods in JavaScript Classes ====================

/*
What are Static Properties and Methods?
- The 'static' keyword defines methods or properties that belong to the class itself, 
  NOT to instances of the class.
- Instances created with 'new' CANNOT access static methods.
- Ideal for utility functions, fixed configurations, or unique ID generators.
*/


// 1. Defining a class with regular and static methods
class User {
    constructor(username){
        this.username = username;
    }

    // Regular instance method: attached to User.prototype (accessible by instances)
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}


// 2. Testing static access on instance vs class
const hello = new User("hello");

// Instances CANNOT access static methods:
// console.log(hello.createId()); // TypeError: hello.createId is not a function

// Static methods must be called directly on the class:
console.log(User.createId()); // Expected Output: 123


// 3. Static methods in Inheritance
class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");

// Regular instance method inherited from User works:
iphone.logMe(); // Expected Output: Username: iphone

// Instances of the child class ALSO cannot access static methods:
// console.log(iphone.createId()); // TypeError: iphone.createId is not a function

// However, the child class itself inherits static methods from the parent class:
console.log(Teacher.createId()); // Expected Output: 123
