// ===============
// Introduction to Hoisting in JavaScript
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. 
// This means you can use variables and functions before declaring them in your code.
// Hoisting makes it easier to structure code as functions and variables can be referenced before their actual declaration, 
// though it can sometimes lead to confusion. Understanding hoisting is crucial for debugging and optimizing code flow, 
// as it clarifies why certain code runs without errors even if declared later in the script.
// ===============

// ===============
// Example: Variable Hoisting
// In JavaScript, variable declarations (using `var`) are moved to the top of their scope by the JavaScript engine. 
// However, only the declaration is hoisted, not the initialization.
// ===============

// console.log(x); // Output: undefined (because `x` is hoisted, but not its value)
// var x = 10;

// The code above is interpreted by JavaScript as:
/*
var x;
console.log(x); // undefined
x = 10;
*/

// Variables declared with `let` and `const` are not hoisted in the same way and will result in a ReferenceError if accessed before declaration.

// try {
//     console.log(y); // ReferenceError (no hoisting for `let` and `const`)
//     let y = 20;
// } catch (error) {
//     console.log(error); // Output: ReferenceError: Cannot access 'y' before initialization
// }

// ===============
// Function Hoisting
// Functions declared with `function` are fully hoisted. This means that you can call the function before it appears in the code.
// Function expressions (using `var`, `let`, or `const`) are not fully hoisted in the same way.
// ===============

// myFunction(); // Output: "Hello from myFunction!" - works because the function declaration is hoisted

// function myFunction() {
//     console.log("Hello from myFunction!");
// }

// try {
//     myFunctionExpression(); // TypeError: myFunctionExpression is not a function
// } catch (error) {
//     console.log(error);
// }

// var myFunctionExpression = function () {
//     console.log("Hello from myFunctionExpression!");
// };

// Explanation:
// In the case of `var` function expressions, only the variable is hoisted, not the assignment.
// So, `myFunctionExpression` is hoisted as a variable with an `undefined` value, and calling it before its definition results in a TypeError.

// ===============
// Hoisting with `let` and `const`
// Variables declared with `let` and `const` are hoisted but in a "temporal dead zone" (TDZ), meaning they can't be accessed before declaration.
// ===============

// try {
//     console.log(z); // ReferenceError due to TDZ
//     const z = 30;
// } catch (error) {
//     console.log(error); // Output: ReferenceError: Cannot access 'z' before initialization
// }

// Explanation:
// Variables `let` and `const` are hoisted, but unlike `var`, accessing them before their declaration throws an error.

// ===============
// Use Strict Mode and Hoisting
// "use strict" prevents certain actions and throws errors for safer, cleaner code.
// In strict mode, variables must be declared before they are used, which affects hoisting behavior.
// ===============

// "use strict";

// try {
//     myName = "Ashok"; // ReferenceError: myName is not defined
//     console.log(myName);
// } catch (error) {
//     console.log(error);
// }

// // "use strict" inside functions only affects the scope of that function
// function myStrictFunction() {
//     "use strict";
//     try {
//         undeclaredVariable = 10; // ReferenceError due to strict mode
//     } catch (error) {
//         console.log(error);
//     }
// }

// myStrictFunction();
// =================

// ========================
// Hoisting in JavaScript
// Functions are hoisted, so they can be called before declaration.
// Hoisting works partially for variables but fully for function declarations.
// ========================

// console.log(exampleVar); // Output: undefined
// var exampleVar = 10;
// sayHello(); // Output: "Hello!"

// function sayHello() {
//     var a =10
//     console.log("Hello!");
// }

// console.log(meLet)
// let mylet=10
// sayHello(); // Output: "Hello!"
// console.log(meLet)
// console.log(exampleVar)




// compilation
// Hoised Declaration
// var exampleVar =10
// function sayHello
// let mylet=10


// execution phase
// undefined
// hello
// undefined
// 10
// 10
// -------


// ===============
// Interview Questions on Hoisting in JavaScript
// Q1: Explain hoisting in JavaScript.
// A: Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution.
//    It allows for the use of variables and functions before they are actually declared in the code. However, only the declaration is hoisted,
//    not the initialization or assignment.

// Q2: What is the Temporal Dead Zone (TDZ)?
// A: The TDZ is the time between the entering of scope and the actual declaration where variables with `let` and `const` cannot be accessed.
//    Attempting to access these variables before declaration will result in a ReferenceError.

// Q3: Can you explain the difference between function declarations and function expressions in terms of hoisting?
// A: Function declarations are hoisted, meaning they can be called before they appear in the code. Function expressions are not hoisted in the same way,
//    and only the variable (if declared with `var`) is hoisted, not the function itself. Trying to call a function expression before its definition
//    will result in an error.

// Q4: How does "use strict" mode affect hoisting?
// A: "use strict" enforces stricter parsing and error handling in JavaScript. It requires variables to be declared before use,
//    which prevents certain types of hoisting issues by throwing errors if variables are used without prior declaration.

