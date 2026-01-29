/************************************************************
 * JAVASCRIPT HOISTING
 * CONCEPTS, READING NOTES, EXAMPLES, AND INTERVIEW Q&A
 ************************************************************/

/*
------------------------------------------------------------
INTRODUCTION TO HOISTING IN JAVASCRIPT
------------------------------------------------------------
Hoisting is a JavaScript mechanism where variables and function declarations are
moved to the top of their scope before code execution.

This means you can use variables and functions before declaring them in your code.

Hoisting makes it easier to structure code as functions and variables can be referenced before
their actual declaration, though it can sometimes lead to confusion.

Understanding hoisting is crucial for debugging and optimizing code flow,
as it clarifies why certain code runs without errors even if declared later in the script.

What is Hoisting?
In JavaScript, hoisting is the behavior where variable and function declarations
are moved to the top of their containing scope during the execution phase.
This means that you can use variables and functions before you actually declare them in your code.
*/

/*
------------------------------------------------------------
KEY POINTS TO UNDERSTAND
------------------------------------------------------------

Declarations are Hoisted, Not Initializations:
JavaScript moves the declaration of variables and functions to the top of the code,
but it does not move the initialization (assignment of a value).

Var vs. Let/Const:
- var declarations are hoisted and initialized with undefined.
- let and const declarations are hoisted but are not initialized.
  They remain in a "temporal dead zone" until execution reaches the declaration.
*/

/*
------------------------------------------------------------
EXAMPLE: VARIABLE HOISTING WITH var
------------------------------------------------------------
In JavaScript, variable declarations (using `var`) are moved to the top of their scope
by the JavaScript engine.

However, only the declaration is hoisted, not the initialization.
*/

// console.log(x); // error // read operation (if x was never declared anywhere)
// ---------------
// var x; // internally this will happened

// console.log(x); // Output: undefined (because `x` is hoisted, but not its value)
// var x = 10; // write operation

// IF you do write without declaration its fine but if you do read without it will be error
// (Note: this depends on strict mode. In strict mode, writing without declaration is an error.)

/*
The code above is interpreted by JavaScript as:

var x;
console.log(x); // undefined
x = 10;
*/

/*
More hoisting practice example:
*/

// =====================
// a = 10;
// console.log(b);
// c++;
// var a;
// var b;
// var c;
// =============

/*
Hoisting interpretation:

var a;
var b;
var c;
a = 10;
console.log(b); // undefined because b is declared but not assigned yet
c++;            // c is undefined here, so undefined++ becomes NaN
*/

/*
If you actually run c++ when c is undefined:
- c starts as undefined
- undefined++ results in NaN
- after that, c becomes NaN
*/


/*
------------------------------------------------------------
VARIABLE HOISTING WITH let AND const (TEMPORAL DEAD ZONE)
------------------------------------------------------------
Variables declared with `let` and `const` are hoisted but are not initialized.
Accessing them before the declaration results in a ReferenceError.
*/

// console.log(y); // ReferenceError (TDZ)
// let y = 20;

/*
Safe demonstration using try/catch:
*/

// try {
//     console.log(y); // ReferenceError (Cannot access 'y' before initialization)
//     let y = 20;
// } catch (error) {
//     console.log(error);
// }

/*
Same TDZ behavior with const:
*/

// console.log(z); // ReferenceError due to TDZ
// const z = 30;


/*
Explanation:
Variables `let` and `const` are hoisted, but unlike `var`,
accessing them before their declaration throws an error.
*/


/*
------------------------------------------------------------
FUNCTION HOISTING
------------------------------------------------------------
Functions declared with `function` are fully hoisted.
This means that you can call the function before it appears in the code.

Function expressions (using `var`, `let`, or `const`) are not fully hoisted in the same way.
*/

// myFunction(); // Output: "Hello from myFunction!" - works because function declaration is hoisted

// function myFunction() {
//     console.log("Hello from myFunction!");
// }

/*
FUNCTION EXPRESSION WITH var
- Only the variable declaration is hoisted.
- The function assignment happens later.
- Calling it before assignment causes a TypeError.
*/

// myFunctionExpression(); // TypeError: myFunctionExpression is not a function

// var myFunctionExpression = function () {
//     console.log("Hello from myFunctionExpression!");
// };

/*
Explanation:
In the case of `var` function expressions, only the variable is hoisted, not the assignment.
So, `myFunctionExpression` is hoisted as a variable with an `undefined` value,
and calling it before its definition results in a TypeError.
*/


/*
------------------------------------------------------------
HOISTING WITH let/const FUNCTION EXPRESSIONS
------------------------------------------------------------
- let/const declarations are hoisted into the TDZ.
- Calling before declaration causes ReferenceError (not TypeError).
*/

// try {
//     myFn(); // ReferenceError (TDZ)
//     let myFn = function () { console.log("hello"); };
// } catch (error) {
//     console.log(error);
// }


/*
------------------------------------------------------------
"use strict" AND HOISTING
------------------------------------------------------------
"use strict" prevents certain actions and throws errors for safer, cleaner code.

In strict mode, variables must be declared before they are used,
which affects cases like accidental global variables.
*/

// "use strict";
// myName = "Ashok"; // ReferenceError: myName is not defined
// console.log(myName);

/*
"use strict" inside functions only affects the scope of that function:
*/

// function myStrictFunction() {
//     "use strict";
//     try {
//         undeclaredVariable = 10; // ReferenceError due to strict mode
//     } catch (error) {
//         console.log(error);
//     }
// }
// myStrictFunction();

/*
A direct strict-mode example that should throw:
*/

// function myStrictFunction() {
//     "use strict";
//     undeclaredVariable = 10; // ReferenceError due to strict mode
//     console.log(undeclaredVariable);
// }

// myStrictFunction();

/*
If strict mode is enabled at top-level (entire file), this will throw:
*/

// "use strict";
// variable = 10; // ReferenceError due to strict mode
// console.log(variable);

/*
Important environment note:
- Strict mode works consistently, but behavior can appear confusing depending on
  runtime and module system (browser scripts vs Node module wrapper vs ES modules).
- In Node, using ES modules (.mjs or "type":"module") is a clean way to ensure strict behavior.
*/


/*
------------------------------------------------------------
SHORT SUMMARY EXAMPLE (HOISTING QUICK DEMO)
------------------------------------------------------------
Functions are hoisted, so they can be called before declaration.
Hoisting works partially for variables but fully for function declarations.
*/

// console.log(exampleVar); // Output: undefined
// var exampleVar = 10;

// sayHello(); // Output: "Hello!"

// function sayHello() {
//     var a = 10;
//     console.log("Hello!");
// }

// console.log(meLet)
// let mylet = 10
// sayHello(); // Output: "Hello!"
// console.log(meLet)
// console.log(exampleVar)

/*
The above has a typo mismatch:
- meLet is used but mylet is declared.
- Accessing meLet will cause ReferenceError.
- If the intention is to use mylet, it should be console.log(mylet).
*/


/*
------------------------------------------------------------
COMPILATION VS EXECUTION (MENTAL MODEL)
------------------------------------------------------------

Compilation phase (conceptually):
- Hoisted declarations are processed first:
  - var declarations are created and set to undefined
  - function declarations are stored as fully defined functions
  - let/const are created but remain uninitialized (TDZ)

Execution phase:
- Code runs top-to-bottom
- Assignments happen where they appear
- Reads before initialization behave differently depending on var vs let/const

Example mental flow (conceptual):

// compilation
// Hoisted Declarations
// var exampleVar;
// function sayHello() { ... }
// let mylet; (created but uninitialized / TDZ)

// execution phase
// undefined        (reading var before assignment)
// "Hello!"         (function call works)
// ReferenceError   (reading let before initialization)
// 10               (after assignment)
*/


/*
------------------------------------------------------------
WHY HOISTING EXISTS (PRACTICAL NOTES)
------------------------------------------------------------
✅ Hoisting makes JavaScript code more flexible, readable, and organized.
✅ It allows calling functions before they are defined, reducing order dependencies.
✅ Helps explain output like "undefined" when using var before assignment.

Also important:
- Hoisting can hide bugs when var is used heavily.
- let/const reduce many hoisting-related confusion by using TDZ.
*/


/*
------------------------------------------------------------
COMMON MISTAKES (VERY IMPORTANT FOR STUDENTS)
------------------------------------------------------------
- Assuming var "moves" values to the top (it does not; only declaration is hoisted).
- Calling function expressions before assignment:
  - var → TypeError (undefined is not a function)
  - let/const → ReferenceError (TDZ)
- Confusing "undefined" with "not declared":
  - "undefined" often means declared but not assigned
  - ReferenceError usually means not declared (or TDZ for let/const)
- Using different variable names accidentally (meLet vs mylet).
- Using variables before declaration and expecting values.
*/


/*
------------------------------------------------------------
ADDITIONAL HOISTING CASES (USEFUL)
------------------------------------------------------------

Hoisting inside a function:
- var declarations hoist to the top of the function, not the block.

Example:
*/

// function demo() {
//     console.log(x); // undefined
//     if (true) {
//         var x = 10;
//     }
//     console.log(x); // 10
// }
// demo();

/*
Classes:
- class declarations are hoisted but behave like let/const (TDZ).
- Accessing a class before declaration throws ReferenceError.

Example:
*/

// // console.log(MyClass); // ReferenceError
// class MyClass {}


/*
------------------------------------------------------------
INTERVIEW QUESTIONS ON HOISTING IN JAVASCRIPT
------------------------------------------------------------

Q: Explain hoisting in JavaScript.
A: Hoisting is a JavaScript mechanism where variable and function declarations
   are moved to the top of their scope before code execution.
   It allows for the use of variables and functions before they are declared.
   However, only the declaration is hoisted, not the initialization or assignment.

Q: What is the Temporal Dead Zone (TDZ)?
A: The TDZ is the time between entering the scope and the actual declaration
   where variables with `let` and `const` cannot be accessed.
   Accessing them before declaration results in a ReferenceError.

Q: Difference between function declarations and function expressions in terms of hoisting?
A: Function declarations are fully hoisted and can be called before they appear.
   Function expressions are not hoisted the same way:
   - if declared with var, the variable is hoisted as undefined (calling early gives TypeError)
   - if declared with let/const, accessing early gives ReferenceError (TDZ)

Q: How does "use strict" mode affect hoisting?
A: "use strict" enforces stricter parsing and error handling.
   It requires variables to be declared before use (prevents accidental globals),
   which reduces certain hoisting-related issues and makes code safer.
*/


/*
------------------------------------------------------------
END OF HOISTING NOTES
------------------------------------------------------------
*/
