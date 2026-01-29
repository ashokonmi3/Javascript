
/************************************************************
 * JAVASCRIPT SCOPE
 * CONCEPTS AND READING NOTES WITH EXAMPLES
 ************************************************************/

/*
------------------------------------------------------------
WHAT IS SCOPE IN JAVASCRIPT?
------------------------------------------------------------
- Scope decides where variables and functions can be accessed (visibility).
- Scope helps organize code, manage memory, and prevent name conflicts.
- JavaScript scope matters because the same variable name can appear in
  different places, and scope decides which one is used.
- Good scope usage reduces bugs and unexpected behavior.

JavaScript has these common scopes:
- Global scope
- Function scope
- Block scope (introduced with let/const in ES6)
*/

/*
------------------------------------------------------------
GLOBAL SCOPE
------------------------------------------------------------
- Variables declared outside any function are global.
- Global variables can be accessed from anywhere in the program.
- Too many global variables can cause:
  - accidental overwrites
  - name conflicts in large codebases
  - hard-to-debug issues
*/

// var a = 10;  // Global variable
// console.log(a);  // Output: 10

// function displayA() {
//   console.log(a); // Output: 10 (global variable accessible inside function)
// }

// displayA();

/*
Important note about global scope:
- In browsers, a global var may become a property of the window object.
- In strict mode and modules, behavior can be different.
- Best practice is to limit globals as much as possible.
*/


/*
------------------------------------------------------------
FUNCTION SCOPE
------------------------------------------------------------
- Variables declared inside a function are only accessible within that function.
- This keeps variables private to the function and avoids conflicts.
- var is function-scoped (not block-scoped).
*/

// function myFunction() {
//   var b = 20; // Accessible only inside myFunction
//   console.log(b); // Output: 20
// }

// myFunction();
// console.log("outside the function " + b); // Error: b is not defined

/*
Why function scope matters:
- Functions create their own scope boundary.
- Local variables are removed after function execution (garbage collection),
  helping memory usage in long-running programs.
*/


/*
------------------------------------------------------------
BLOCK SCOPE (ES6: let and const)
------------------------------------------------------------
- A block is any code inside { } such as:
  - if blocks
  - for / while loops
  - switch cases
  - standalone blocks { ... }
- let and const are block-scoped:
  they exist only inside the block where they are defined.
- var is NOT block-scoped:
  it ignores block boundaries and becomes function-scoped.
*/

// if (true) {
//   let c = 30; // block-scoped
//   var d = 50; // NOT block-scoped, becomes function/global scoped (depending on location)
//   console.log("inside the block let c " + c); // Output: 30
//   console.log("inside the block var d " + d); // Output: 50
// }

// console.log(d); // Output: 50 (because var is not block-scoped)
// console.log(c); // Error: c is not defined (because let is block-scoped)

/*
Key takeaway:
- Use let/const for predictable behavior.
- Use var only when you clearly understand its scoping rules.
*/


/*
------------------------------------------------------------
IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION) FOR SCOPE CONTROL
------------------------------------------------------------
- IIFE runs immediately after it is defined.
- It creates a private scope.
- It helps avoid polluting global scope.
- Before ES6 modules and block scope, IIFE was very common for encapsulation.
*/

// (function () {
//   var d = 40;  // Scoped to this IIFE only
//   console.log(d); // Output: 40
// })();

// console.log(d); // Error: d is not defined (if d is not declared elsewhere)

/*
Important clarification:
- If there is already a global d (from var d = 50 above),
  then console.log(d) would print that global value.
- The d inside the IIFE is a different variable (local to the IIFE).
*/


/*
------------------------------------------------------------
HOISTING AND SCOPE
------------------------------------------------------------
- Hoisting means declarations are moved to the top of their scope.
- Only declarations are hoisted, not initializations.
- With var:
  - declaration is hoisted
  - initialization stays where it is
- With let/const:
  - declarations are hoisted too, but they are in a "Temporal Dead Zone"
  - accessing before declaration causes a ReferenceError
*/

// console.log(e); // Output: undefined (var declaration hoisted, value not assigned yet)
// var e = 50;

/*
If using let:
- console.log(e); // ReferenceError
- let e = 50;
*/


/*
------------------------------------------------------------
LEXICAL SCOPE (STATIC SCOPING)
------------------------------------------------------------
- Lexical scope means scope is decided by where code is written.
- Inner functions can access variables from their outer function.
- This rule is based on the code structure, not on how/where it is called.
*/

// function outerFunction() {
//   let f = 60; // scoped to outerFunction

//   function innerFunction() {
//     console.log(f); // Output: 60 (inner can access outer variables)
//   }

//   innerFunction();
// }

// outerFunction();

/*
Lexical scope is the foundation for closures:
- When an inner function "remembers" outer variables even after outer function ends.
*/


/*
------------------------------------------------------------
SCOPE CHAIN AND VARIABLE LOOKUP
------------------------------------------------------------
- When a variable is used, JavaScript looks for it in this order:
  - current scope
  - outer (parent) scope
  - next outer scope...
  - global scope
- If not found in global scope, JavaScript throws ReferenceError.
*/

// var globalVar = "global";

// function firstFunction() {
//   var localVar = "local";

//   function secondFunction() {
//     console.log(globalVar);  // Output: "global" (found in global scope)
//     console.log(localVar);   // Output: "local" (found in firstFunction scope)
//   }

//   secondFunction();
// }

// firstFunction();

/*
Common bug warning:
- If you forget var/let/const, JavaScript may create an accidental global
  (in non-strict mode), which is risky and causes bugs.
*/


/*
------------------------------------------------------------
STRICT MODE AND ACCIDENTAL GLOBALS
------------------------------------------------------------
- In strict mode, assigning to an undeclared variable throws an error.
- This helps prevent accidental global variables.
- this will work only non-strict-compatible Node version or environment.
*/

// "use strict";
// function testStrict() {
//   accidental = 10; // ReferenceError in strict mode
//   console.log(accidental);
// }
// testStrict();


/*
------------------------------------------------------------
VAR, LET, CONST AND SCOPE DIFFERENCES
------------------------------------------------------------
- var
  - function-scoped
  - can be redeclared in same scope
  - hoisted (accessible as undefined before assignment)
- let
  - block-scoped
  - cannot be redeclared in same scope
  - temporal dead zone before declaration
- const
  - block-scoped
  - cannot be redeclared
  - must be initialized
  - cannot be reassigned
*/

// var x = 1;
// let y = 2;
// const z = 3;


// if (true) {
//   var a = 10;   // accessible outside the block if not inside a function
//   let b = 20;   // block-scoped
//   const c = 30; // block-scoped
// }

// console.log(a); // Output: 10
// console.log(b); // Error: b is not defined
// console.log(c); // Error: c is not defined


/*
------------------------------------------------------------
INTERVIEW QUESTIONS AND ANSWERS
------------------------------------------------------------
Q: What are the different types of scope in JavaScript?
A: Common scopes are global scope, function scope, and block scope.

Q: Explain hoisting in JavaScript with an example.
A: Hoisting moves declarations to the top of scope. var gives undefined
   when accessed before assignment; let/const throw error if accessed before declaration.

Example:
- console.log(hoistedVar); // undefined
- var hoistedVar = "I am hoisted";

Q: What is an IIFE and why is it useful?
A: A function that runs immediately and creates a private scope.
   Useful to avoid global scope pollution.

Q: How does lexical scoping work?
A: Scope is determined by where the code is written.
   Inner functions can access outer variables.

Q: Difference between var, let, and const in terms of scope?
A: var is function-scoped; let/const are block-scoped.
   var is hoisted with undefined; let/const have temporal dead zone.
*/


/*
------------------------------------------------------------
SUMMARY
------------------------------------------------------------
- Scope controls variable visibility and prevents conflicts.
- Global scope is accessible everywhere, but should be used carefully.
- Function scope protects variables inside functions.
- Block scope (let/const) limits variables to blocks { }.
- Hoisting affects when variables/functions can be accessed.
- Lexical scope and scope chain decide how variables are found.
------------------------------------------------------------
END OF JAVASCRIPT SCOPE CONTENT
------------------------------------------------------------
*/
