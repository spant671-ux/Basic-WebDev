// ==================== Class Inheritance in JavaScript (extends & super) ====================

/*
What is Class Inheritance?
- Inheritance allows a child class to inherit properties and methods from a parent class.
- 'extends': Creates a prototypal inheritance link between the child class and parent class.
- 'super()': Calls the parent class constructor and passes 'this' automatically, 
  replacing the older 'ParentFunction.call(this, ...)' syntax.
*/


// 1. Parent / Base Class
class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

// 2. Child / Derived Class inheriting from User
class Teacher extends User {
    constructor(username, email, password){
        // super() calls the parent constructor (User) with 'username'.
        // In derived classes, super() must be called before accessing 'this'.
        super(username);

        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}


// 3. Creating instances & testing methods

// Creating an instance of the child class (Teacher):
const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.addCourse(); // Output: A new course was added by chai
// chai.logMe();  // Accessible because Teacher inherits logMe() from User

// Creating an instance of the parent class (User):
const tea = new User("sans");
tea.logMe();      // Output: username is sans
// tea.addCourse(); // Error! Parent class instances cannot access child class methods.


// 4. Verifying inheritance with 'instanceof'
// Checks if the prototype property of a constructor appears anywhere in the prototype chain
console.log(chai instanceof User);    // Expected Output: true (chai inherits from User)
// console.log(chai instanceof Teacher); // Expected Output: true
// console.log(tea instanceof Teacher);  // Expected Output: false