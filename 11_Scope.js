// ========================
//  What is Scope in JavaScript?
//  Scope determines the accessibility (visibility) of variables and functions in various parts of a code.
//  Scope is crucial for organizing code, managing memory, and preventing conflicts in variable names.
//  JavaScript has different types of scopes: global scope, function scope, and block scope.
//  Proper scope management avoids the problem of variable conflicts and unexpected behavior in code.
// ========================

// ========================
//  Global Scope
//  Variables declared outside any function are in the global scope. They can be accessed from anywhere in the code.
//  Avoid creating too many global variables as they can lead to conflicts and unexpected issues in large programs.
// ========================

// var a = 10;  // This variable is in the global scope
// console.log(a);  // Output: 10, accessible globally

// function displayA() {
//   console.log(a); // Output: 10, accessing global variable inside a function
// }

// displayA();

// ========================
//  Function Scope
//  Variables declared inside a function are only accessible within that function. They are not visible outside the function.
//  This helps prevent conflicts and keeps variables encapsulated within specific functions.
// ========================

// function myFunction() {
//   var b = 20; // Variable 'b' is scoped to this function only
//   console.log(b); // Output: 20
// }

// myFunction();
// console.log("outside the function " + b); // Error: b is not defined (as b is only accessible within the function)

// // ========================
// //  Block Scope (ES6)
// //  Variables declared with `let` or `const` inside a block `{}` are limited to that block.
// //  Block scope was introduced in ES6 and is commonly used for `if` statements, `for` loops, etc.
// // ========================

// if (true) {
//   let c = 30; // `c` is block-scoped, only accessible within this `if` block
//   console.log(c); // Output: 30
// }
// console.log(c); // Error: c is not defined (as c is block-scoped)

// // ========================
// //  Example: Using IIFE (Immediately Invoked Function Expression) for Scope Control
// //  IIFE helps limit the scope of variables, avoiding global scope pollution.
// //  Useful when you need to run code immediately without affecting the global scope.
// // ========================

// (function () {
//   var d = 40;  // Scoped to this IIFE only, not accessible globally
//   console.log(d); // Output: 40
// })();

// console.log(d); // Error: d is not defined (as d is only accessible within the IIFE)

// // ========================
// //  Hoisting and Scope
// //  Variable and function declarations are "hoisted" to the top of their scope during the compilation phase.
// //  Only declarations are hoisted, not initializations. This is why we get `undefined` if we access a `var` variable before declaration.
// // ========================

// console.log(e); // Output: undefined (declaration hoisted but not initialization)
// var e = 50;

// // ========================
// //  Lexical Scope (Static Scoping)
// //  JavaScript uses lexical scoping, meaning it determines the scope of a variable based on its position in the code.
// //  Inner functions have access to the variables of their parent functions.
// // ========================

// function outerFunction() {
//   var f = 60; // Scoped to outerFunction

//   function innerFunction() {
//     console.log(f); // Output: 60 (can access 'f' from outerFunction due to lexical scoping)
//   }

//   innerFunction();
// }

// outerFunction();

// // ========================
// //  Scope Chain and Variable Lookup
// //  When JavaScript cannot find a variable in the current scope, it looks up the scope chain to the outer scopes until it finds the variable or reaches the global scope.
// //  If not found in the global scope, a `ReferenceError` is thrown.
// // ========================

// var globalVar = "global";

// function firstFunction() {
//   var localVar = "local";

//   function secondFunction() {
//     console.log(globalVar);  // Output: "global" (found in global scope)
//     console.log(localVar);    // Output: "local" (found in outer scope, i.e., firstFunction)
//   }

//   secondFunction();
// }

// firstFunction();

// ========================
//  Interview Questions and Answers
// ========================

// Q1. What are the different types of scope in JavaScript?
// A1. There are three main types of scope in JavaScript:
//     1. Global Scope - Variables declared outside any function, accessible from anywhere in the code.
//     2. Function Scope - Variables declared inside a function, accessible only within that function.
//     3. Block Scope - Variables declared with `let` or `const` inside a block `{}`, accessible only within that block.

// Q2. Explain hoisting in JavaScript with an example.
// A2. Hoisting is JavaScript's default behavior of moving declarations to the top of their scope.
//     Function and variable declarations are hoisted, but only declarations, not initializations.

// Example of hoisting:
// console.log(hoistedVar); // Output: undefined
// var hoistedVar = "I am hoisted";

// // Q3. What is an IIFE, and why is it useful?
// // A3. An IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined.
// //     Useful for limiting scope and avoiding global variables in JavaScript.

// (function () {
//   var scopedVar = "Scoped to IIFE";
//   console.log(scopedVar); // Output: Scoped to IIFE
// })();
// // console.log(scopedVar); // Error: scopedVar is not defined

// // Q4. How does lexical scoping work in JavaScript?
// // A4. Lexical scoping means a variable’s scope is determined by its location within the source code.
// //     Inner functions have access to variables in their outer functions due to lexical scoping.

// // Example of lexical scoping:
// function outer() {
//   var outerVar = "outer";

//   function inner() {
//     console.log(outerVar); // Output: outer (inner function accesses outerVar due to lexical scoping)
//   }

//   inner();
// }
// outer();

// Q5. What is the difference between `var`, `let`, and `const` in terms of scope?
// A5. `var` is function-scoped and is hoisted, `let` and `const` are block-scoped and not hoisted.
//     `const` also requires an initial value and cannot be reassigned.

// var x = 1;
// let y = 2;
// const z = 3;

// // Example showing the block scope of `let` and `const`:
// if (true) {
//   var a = 10;   // Accessible outside the block (function-scoped with `var`)
//   let b = 20;   // Block-scoped with `let`
//   const c = 30; // Block-scoped with `const`
// }
// console.log(a); // Output: 10
// // console.log(b); // Error: b is not defined
// // console.log(c); // Error: c is not defined
