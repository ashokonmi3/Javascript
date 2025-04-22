// ====================
// Introduction to Objects in JavaScript
// JavaScript is an object-oriented language, but unlike many OOP languages, it is prototype-based, not class-based.
// Objects are collections of properties, where each property has a key-value pair. They are crucial for structuring data and creating modular,
// reusable code in JavaScript. Objects allow storing related data and functionality together, making the code more organized and intuitive.
// ====================

// Why Use Objects?
// - Objects are the primary way to group and store data in JavaScript.
// - Objects make it easy to access and manipulate data with properties and methods.
// - They allow you to model real-world entities, making code more readable and maintainable.

// Object Creation Methods

// ====================
// Inline Object Creation
// An inline object is created using curly braces `{}` and can be populated with properties as needed.
// ====================

// var myObj = {};  // Empty object created
// console.log(myObj); // Output: {}
// // // // ---------------
// myObj.prop1 = "hello"; // Adding property dynamically
// console.log(myObj); // Output: { prop: "hello" }

// myObj.prop2 = 123;
// console.log("The number property is " + myObj.prop2); // Output: The number property is 123
// console.log(myObj); // Output: { prop: "hello" }

// -----------------------

// array = ["Thor", " Marvels", "Avegners"]
//         0          1          2
//       "Name"    "Studio"     "Movie"

// array = ["Avangers", " Marvels", "Thor"]
//           "Movie"     "Studio"   "Name"

// array[0] --> "Thor"
// array[1]--> "Marvels"
// array[2] --> "Avangers"

// array["Name"]-- > "Thor"
// array["Studio"]-- > "Marvels"
// array["Movie"]-- > "Avangers"



// ====================
// Object Literal Notation
// The most common way to create objects in JavaScript is using object literals. This allows for defining key-value pairs directly inside the curly braces `{}`.
// ====================

// var myObjLiteral = {
//     prop1: "hello",
//     prop2: 123,
//     boolProp2: true,
//     boolProp1: false
// };

// console.log(myObjLiteral);
// =============================
// // Example of a person object
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };

// console.log(person);
// console.log(person.age); // Accessing property with dot notation
// console.log(person["firstName"]); // Accessing property with bracket notation

// console.log("Property that does not exist: " + person.prop3); // Accessing Non-Existent Properties


// ====================
// Modifying and Adding Properties
// JavaScript objects are dynamic; properties can be added or changed at any time.
// ====================

// const car = { type: "Fiat", model: "500", color: "white" };
// car.color = "red"; // Changing an existing property
// car.owner = "Johnson"; // Adding a new property
// console.log(car);

// // // Attempting to reassign a const object
// car = { type: "Volvo", model: "EX60", color: "red" }; // ERROR: Assignment to constant variable

// ====================
// Summary: Object
// 1) Free-form: Not bound to a class.
// 2) Object literal notation: `{}` is used to create objects.
// 3) Properties can be added, modified, or deleted dynamically.
// 4) Methods can also be added as properties to objects.
// ====================

// ====================
// When to Use Dot Notation (.) vs Bracket Notation []
//----------------------
// 1. Using Dot Notation (.)
// ✅ Use dot notation when the property name is a valid identifier (i.e., it follows variable naming rules).
// The property name must not contain spaces, special characters (except _ and $), or start with a number.
// The property name must be known at the time of coding (not dynamic).

// let person = {
//     name: "John",
//     age: 30
// };

// console.log(person.name);  // ✅ "John"
// console.log(person.age);   // ✅ 30
// ------------------------
// 2. Using Bracket Notation ([])
// ✅ Use bracket notation when:

// The property name is a string with special characters, spaces, or starts with a number.
// The property name is stored in a variable (dynamic access).
// The property name is a number (like in arrays or objects with numeric keys).

// let user = {
//     "first name": "Alice",
//     "last-name": "Doe",
//     "@score": 100
// };

// console.log(user["first name"]);  // ✅ "Alice"
// console.log(user["last-name"]);   // ✅ "Doe"
// console.log(user["@score"]);      // ✅ 100
// -------------------
// Dynamic property access
// let key = "age";
// let person = { name: "John", age: 30 };

// console.log(person[key]);  // ✅ 30 (equivalent to person.age)
// // -----------------
// let obj = { 1: "one", 2: "two" };

// console.log(obj[1]);   // ✅ "one"
// console.log(obj["2"]); // ✅ "two" (JavaScript converts "2" to a number)
// ---------------------------
// ❌ Using Dot Notation (Throws Error)
// let user = {
//     "first name": "Alice"
// };

// console.log(user.first name);  // ❌ SyntaxError: Unexpected identifier
// console.log(user["first name"]);  // ✅ "Alice"
// --------------------
// let obj = {
//     "last-name": "Doe",
//     "@score": 100
// };

// // console.log(obj.last - name);  // ❌ ReferenceError: name is not defined
// // console.log(obj.@score);     // ❌ SyntaxError: Unexpected token '@'

// console.log(obj["last-name"]);  // ✅ "Doe"
// console.log(obj["@score"]);     // ✅ 100
// --------------------
// 3. Property Name Starting with a Number

// var data = {
//     1value: "Hello"
// };

// console.log(data.1value);  // ❌ SyntaxError: Unexpected number
// ---------------
// let key = "age";
// let person = { name: "John", age: 30 };

// console.log(person.key);  // ❌ undefined (looks for a property literally named "key")
// -----------------
// let obj = { 1: "one", 2: "two" };

// console.log(obj.1);  // ❌ SyntaxError: Unexpected number

// console.log(obj[1]);   // ✅ "one"
// console.log(obj["2"]); // ✅ "two" (JavaScript converts "2" to a number)

// ================

// Case                                      Use .   Use []
// -----------------------------------------  ------  ------
// Simple, valid identifier property          ✅      ❌
// Property name with spaces or special characters ❌ ✅
// Property name starts with a number         ❌      ✅
// Property name stored in a variable (dynamic access) ❌ ✅
// Numeric keys (like array indices)          ❌      ✅
// // ====================
// // Nested Objects
// // Objects can contain other objects as properties, creating a structure of nested objects.
// // ====================

// var nestedObj = {
//     "prop": "hello",
//     "objProp": {
//         "innerProp": "Inner Property",
//         "newInner": "new inner property"
//     }
// };

// console.log(nestedObj.objProp.innerProp); // Accessing nested property

// // // Adding new nested properties
// nestedObj.objProp.additionalProp = "Additional Inner Property";
// console.log(nestedObj.objProp.additionalProp);

// ====================
// Deleting Properties
// Properties can be deleted using the `delete` operator.
// ====================

// var personWithAge = {
//     name: "Ashok",
//     surname: "Sharma",
//     age: 25
// };

// delete personWithAge.age;
// console.log(personWithAge); // 'age' property removed

// // ====================
// // Wrapper Objects
// // JavaScript has wrapper objects for its primitive types (e.g., Number, String, Boolean) that provide additional methods.
// // ====================

// var str = "hello world";
// console.log(typeof str); // Output: string
// console.log(str.length); // Accessing property of String wrapper object
// ===================
// Cloning of object shallow copy
var original = { prop1: "value1", prop2: { inner: "innervalue" } };

var shallowCopy = { ...original }; // spread operator
shallowCopy.prop2.inner = "modified";
console.log(original.prop2.inner);

shallowCopy.prop1 = "modified";
console.log(original.prop1);
// ===============================
// Deep copy : JSON.parse(JSON.stringify())

// var original = { prop1: "value1", prop2: { inner: "innervalue" } };

// var deepCopy = JSON.parse(JSON.stringify(original));
// console.log(deepCopy);

// deepCopy.prop2.inner = "modified";
// console.log(original.prop2.inner);

// deepCopy.prop1 = "modified";
// console.log(original.prop1);
// // ====================
// // Questions on JavaScript Objects
// // ====================

// // Q1: How do you create an object in JavaScript?
// // A1: There are multiple ways, such as object literals, using the `new Object()` syntax, or defining with a constructor function or class.

// // Q2: What is the difference between dot notation and bracket notation?
// // A2: Dot notation is used when property names are valid identifiers. Bracket notation is used when property names are dynamic or invalid identifiers.

// // Q3: Can you reassign a property of a constant object?
// // A3: Yes, properties of a constant object can be changed, but the reference cannot be reassigned to a new object.

// // Q4: How can you check if a property exists in an object?
// // A4: Using the `in` operator or the `hasOwnProperty` method.

// var car = { type: "Fiat", model: "500", color: "white" };
// console.log("type" in car); // true
// console.log(car.hasOwnProperty("model")); // true

// // ====================
// // Question Examples
// // ====================

// // 1) How can you make an object property read-only?
// // Answer: You can use `Object.defineProperty()` to make a property read-only.

// var readOnlyObj = {};
// Object.defineProperty(readOnlyObj, "name", {
//   value: "John",
//   writable: false // This makes the property read-only
// });
// console.log(readOnlyObj.name); // John
// // readOnlyObj.name = "Doe"; // Error in strict mode

// // 2) What are the ways to clone an object in JavaScript?
// // Answer:
// // - Using `Object.assign()`
// // - Using spread syntax `{...obj}`
// // - Deep cloning with `JSON.parse(JSON.stringify(obj))` for nested objects.

// var original = { prop1: "value1", prop2: { inner: "innerValue" } };
// var shallowCopy = { ...original };
// var deepCopy = JSON.parse(JSON.stringify(original));
// shallowCopy.prop2.inner = "modified";
// console.log(original.prop2.inner); // "modified" because shallowCopy affects original
// console.log(deepCopy.prop2.inner); // "innerValue"
