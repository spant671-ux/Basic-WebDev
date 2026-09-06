// ==================== Objects (Singleton, Nesting, Merging & Methods) ====================

// 1. Singleton vs Non-Singleton Declaration
// const tinderUser = new Object() // Singleton object (created via Constructor)
const tinderUser = {} // Non-singleton object (created via Object Literal)

// Dynamically adding properties to an object:
tinderUser.id = "123abc"
tinderUser.name = "Sammie"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


// 2. Nested Objects
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstname: "santosh",
            lastname: "pant",
        }
    }
}

// Accessing deeply nested properties using dot notation:
// console.log(regularUser.fullName.userfullname.firstname)


// ==================== Merging Objects ====================

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Note: {obj1, obj2} nests objects inside a new object rather than merging their properties.
// const obj3 = {obj1, obj2}


// Object.assign(target, ...sources): Merges source objects into target.
// Using empty object {} as target prevents mutating obj1.
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// Spread Operator (...): Modern & preferred syntax for combining object properties.
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)


// ==================== Array of Objects ====================
// Commonly received as response data from APIs and databases

const users = [
    {
        id: 1,
        email: "s@gmail.com",
    },
    {
        id: 2,
        email: "p@gmail.com",
    },
    {
        id: 3,
        email: "q@gmail.com",
    }
]

// Accessing an object inside an array by index and then targeting its property:
users[1].email


// ==================== Object Class Utility Methods ====================

// Object.keys(obj): Returns an array containing all property key names of the object
// console.log(Object.keys(tinderUser)) // Output: ['id', 'name', 'isLoggedIn']

// Object.values(obj): Returns an array containing all property values of the object
// console.log(Object.values(tinderUser)) // Output: ['123abc', 'Sammie', false]

// Object.entries(obj): Returns an array of key-value pairs formatted as [key, value] arrays
// console.log(Object.entries(tinderUser))

// hasOwnProperty(propName): Returns boolean indicating whether object has specified property directly
// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // Output: true


// ==================== Object Destructuring & Renaming ====================

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Accessing property standard way:
// course.courseInstructor

// Object Destructuring: Unpacking properties directly into variables.
// Renaming / Aliasing syntax: { originalProperty: newVariableName }
const {courseInstructor: instructor} = course
console.log(instructor) // Output: hitesh


// ==================== JSON & API Response Structures ====================

// JSON (JavaScript Object Notation): A lightweight text-based format for data exchange.
// Key Difference from JS Objects: In JSON, all keys and string values MUST be enclosed in double quotes ("").
// Example JSON object representation:
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }   

// APIs can also return data as an Array of JSON Objects:
[
    {},
    {},
    {}
]