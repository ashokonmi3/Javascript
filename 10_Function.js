// ========================
// What is a Function in JavaScript?
// Functions are reusable blocks of code designed to perform specific tasks. They allow us to execute the same code at multiple points in a program, making it easier to manage, debug, and maintain.
// Functions are important for modular programming, enabling code reusability and reducing redundancy.
// ========================

// ===============
// Basic Function Example
// A simple function that prints a message to the console.
// ===============

// function showMessage() {
//     console.log("Hello");
//     console.log("Hello");
//     console.log("Hello");
// }
// showMessage(); // Call the function
// showMessage(); // Call the function again

// ========================
// Function with Parameters
// Function that calculates interest based on parameters passed.
// ========================

// function calculateInterest(amount, duration, rateOfInterest) {
//     "use strict";
//     let interest = (amount * duration * rateOfInterest) / 100;
//     console.log("Interest Calculation:", interest);
// }
// calculateInterest(10000, 12, 5);
// calculateInterest(102000, 16, 4);

// ========================
// Function with Parameters and Variables
// Display different messages based on the input.
// ========================

// function showMessage(abc) {
//     console.log(abc);
// }
// showMessage("python");
// showMessage("java");
// showMessage("javascript");

// ========================
// Function with Multiple Parameters
// Displays two strings in reverse order of parameters.
// ========================

// function displayStrings(string1, string2) {
//     console.log(string2, string1);
// }
// displayStrings("python", "selenium");

// ========================
// Function with Return Value
// Function that calculates area and returns the value for further calculations.
// ========================

// function calculateArea(x) {
//     return x * 2;
// }
// let y = calculateArea(10);
// console.log("Price is " + (y * 100));

// ========================
// Types of Functions
// 1. Regular Functions
// 2. Constructor Functions (like `new Date()`)
// 3. Function Methods (functions as object properties)
// ========================

// Regular Function Example
// function add(x, y) {
//     return x + y;
// }
// console.log(add(3, 4));

// ========================
// Function Expressions
// Assigning functions to variables allows us to store and reuse them.
// ========================

// var functionVariable = function (x, y) {
//     return x + y + 100;
// };
// console.log(functionVariable(34, 4));



// ========================
// Function Parameters vs Arguments
// Parameters are placeholders in function definitions; arguments are values passed when calling the function.
// ========================

// function helloWorld(param1, param2) {
//     console.log(param1 + " " + param2);
// }
// helloWorld("hello", "world");

// ========================
// Calling Function from Another Function
// ========================

// var greet = function () {
//     console.log("hello");
// };

// function outerFunction() {
//     greet();
// }
// outerFunction(); // Calls greet inside another function

// // ========================
// // Passing Function as Argument
// // ========================

// var greetByName = function (name) {
//     console.log("Hello " + name);
// };

// // greetByName("python");
// // greetByName(5);

// var executeFunction = function (fn, name) {
//     fn(name); // greetByName("Python")
// };
// executeFunction(greetByName, "Python");

// // ========================
// // Functions as Object Properties (Methods)
// // ========================

// var person = {
//     firstName: "Ashok",
//     lastName: "Sharma",
//     getFullName: function () {
//         return this.firstName + " " + this.lastName;
//     },
// };
// console.log(person.getFullName());

// // ========================
// // Function Arguments Object
// // Allows access to all arguments passed to the function.
// // ========================

// function argTest() {
//     console.log(arguments); // Shows all arguments passed
//     console.log(arguments.length); // Shows argument count
// }
// argTest(1, "java", "selenium", "python");

// // ========================
// // Using Arguments to Find Maximum
// // ========================

// function findMax() {
//     let max = -Infinity;
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(1, 123, 500, 115, 44, 88));

// // ========================
// // Function with Default Parameters
// // ========================

// function showMessageWithDefaults(from, text = "no text given") {
//     console.log(from + ": " + text);
// }
// showMessageWithDefaults("Ann");
// showMessageWithDefaults("Ann", "javascript learning");


// // ========================
// // Arrow Functions
// // Shorthand syntax for functions, commonly used for simpler functions.
// // ========================

// let hello = () => "Hello World!";
// console.log(hello());

// let personalizedHello = (name) => "Hello " + name + "!";
// console.log(personalizedHello("Developer"));

// // ========================
// // Questions:
// // ========================
// // Q1: What is the difference between a function declaration and a function expression?
// // A1: Function declarations are hoisted, meaning they can be called before they are defined. Function expressions, however, are not hoisted and are assigned to variables.
// // Example:
// function declarationExample() {
//     return "I am a declaration";
// }
// let expressionExample = function () {
//     return "I am an expression";
// };
// console.log(declarationExample());
// console.log(expressionExample());

// // Q2: How does the `this` keyword work in a JavaScript function?
// // A2: `this` refers to the object that calls the function. In the global scope, `this` refers to the global object; in methods, `this` refers to the object itself.
// // Example:
// let obj = {
//     name: "John",
//     showName: function () {
//         console.log(this.name);
//     },
// };
// obj.showName(); // Outputs: John

// // Q3: Explain `arguments` in JavaScript functions.
// // A3: The `arguments` object is an array-like object accessible inside functions, containing all arguments passed to the function.
// // Example:
// function showArgs() {
//     console.log(arguments);
// }
// showArgs("arg1", "arg2");

// ========================
// End of Content
// ========================
