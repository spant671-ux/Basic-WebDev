# JavaScript and Object-Oriented Programming (OOP)

## 1. What is OOP?
**Object-Oriented Programming (OOP)** is a programming paradigm based on the concept of **objects**, which contain both:
- **State / Data** (properties/attributes)
- **Behavior / Actions** (methods/functions)

> [!NOTE]
> JavaScript is fundamentally a **prototype-based language**, not a classical class-based language (like Java or C++). Even with the introduction of the `class` keyword in ES6, JavaScript still executes via prototypal inheritance under the hood.

---

## 2. What is an Object?
An **Object** is a standalone entity with properties and type. In JavaScript, almost everything is an object or behaves like one.
- **Collection of Properties and Methods**:
  - Properties represent characteristics (e.g., `user.name = "sans"`, `user.loginCount = 8`).
  - Methods represent actions (e.g., `user.getUserDetails()`, `"hello".toLowerCase()`).

---

## 3. Why Use OOP?
1. **Code Modularity & Organization**: Groups related data and functions together instead of having scattered global variables and functions.
2. **Reusability (DRY Principle)**: Create blueprints (constructor functions / classes) once and instantiate as many instances as needed.
3. **Maintainability & Scalability**: Makes large applications easier to reason about, debug, refactor, and scale.
4. **Data Protection**: Controls how data is accessed and modified.

---

## 4. Parts of OOP in JavaScript

### A. Object Literal
The simplest way to define an object in JavaScript using key-value pairs:
```javascript
const user = {
    username: 'sans',
    loginCount: 8,
    getUserDetails: function() {
        console.log(this.username);
    }
};
```
*Best for one-off objects, but inefficient when creating multiple similar objects.*

### B. Constructor Function
A function used as a blueprint to create multiple instances of an object with the `new` keyword:
```javascript
function User(username, score) {
    this.username = username;
    this.score = score;
}
```

### C. Prototypes
Every JavaScript function has a `prototype` property. Methods placed on the prototype are shared across all instances rather than copied into each instance:
```javascript
User.prototype.incrementScore = function() {
    this.score++;
};
```

### D. Classes (ES6 Syntactic Sugar)
Introduced in ECMAScript 2015 (ES6) to bring familiar syntax for developers coming from languages like Java or C++:
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
```

### E. Instances (`new` & `this`)
- **`new` Keyword**: Creates an empty object, links its prototype to the constructor's prototype, binds `this`, and returns the instance.
- **`this` Keyword**: Refers to the current execution context (the specific instance calling the method).

---

## 5. The Four Pillars of OOP

| Pillar | Concept | JavaScript Example |
| :--- | :--- | :--- |
| **Abstraction** | Hiding complex implementation details and showing only the essential interface to the user. | Fetching data with `fetch(url)` without needing to know low-level TCP/IP network packet handling. |
| **Encapsulation** | Bundling data (properties) and methods together while restricting direct access to internal state. | Using private class fields (`#balance`) or closures so internal state cannot be arbitrarily mutated from outside. |
| **Inheritance** | Mechanism by which one object/class derives properties and behaviors from another, eliminating duplicate code. | `class Admin extends User` or prototypal linking via `Object.setPrototypeOf(TeachingSupport, Teacher)`. |
| **Polymorphism** | "Many forms" — allows different classes/objects to define the same method name, but each implements its own specific behavior. | A base class `Animal` with method `speak()`, where `Dog` logs `"Bark"` and `Cat` logs `"Meow"`. |

---

## 6. The Prototype Chain Mental Model

```
[myHeros Array]
       │
       ▼ (__proto__)
[Array.prototype]  (e.g., .map(), .filter(), .push())
       │
       ▼ (__proto__)
[Object.prototype] (e.g., .toString(), .hasOwnProperty(), .sans())
       │
       ▼ (__proto__)
      null (End of Prototype Chain)
```

### What Happens Behind the Scenes During `new`:
1. **New Object Created**: A fresh, empty object `{}` is allocated in memory.
2. **Prototype Linked**: Its internal `[[Prototype]]` is set to the constructor's `.prototype`.
3. **Context Bound**: The constructor executes with `this` pointing to that new object.
4. **Object Returned**: Returns the newly constructed instance unless an alternate non-primitive is explicitly returned.
