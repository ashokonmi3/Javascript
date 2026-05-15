/* ===============================================================================
Compiler-Based Languages vs Interpreter-Based Languages
Before learning JavaScript variables, it is important to understand how programs
run. Some languages compile code first, while others execute it directly.

Compiler-Based Languages (e.g., C, C++, Java)
In compiler-based languages, the code is converted into machine code before
execution. This happens once and produces an executable file.

Process:
1. Preprocessing → handles macros and includes
2. Compilation → converts code to machine instructions
3. Assembly → converts to object file
4. Linking → creates final executable

Key Point:
Compiled code runs faster and independently without source code.

Interpreter-Based Languages (e.g., JavaScript, Python)
In interpreter-based languages, code is executed line by line at runtime.
No separate executable file is created.

Key Point:
Flexible, easier to test, but slightly slower for large applications.
================================================================================ */

/* ===============================================================================
Primitive Data Types
Primitive data types are the most basic data types in JavaScript. They store
single simple values.

Types:
1. Number → integers and floating-point values
2. String → sequence of characters
3. Boolean → true / false
4. Undefined → declared but not assigned
5. Null → intentional absence of value
6. Symbol → unique identifier (ES6)

Important:
Primitive types do not have additional properties or methods.
================================================================================ */

/* ===============================================================================
Typing in JavaScript
JavaScript is loosely typed, meaning variables are not restricted to one type.

A variable can store:
number → string → boolean → object

Example:
================================================================================ */

// var a = 10;
// console.log("value of a : " + a);
// console.log("value of typeof(a) : " + typeof a);

// a = "hello";
// console.log("value of a : " + a);
// console.log("value of typeof(a) : " + typeof a);

/* ===============================================================================
Declaration vs Definition
Declaration → Creating a variable
Definition → Assigning a value to a variable

Example:
================================================================================ */

// var value;
// console.log("value of value : " + value);
// console.log("value of typeof(value) : " + typeof value);

// value = 20;
// console.log("value of value after assignment : " + value);

/* ===============================================================================
Naming Convention (camelCase)
JavaScript uses camelCase for naming variables and functions.

Examples:
userAge
calculateTotalPrice
totalInvoiceAmount
================================================================================ */

/* ===============================================================================
Variable Declaration and Initialization
Variables can be declared and assigned values using var.

Important:
JavaScript allows reassigning different types to same variable.
================================================================================ */

/* ===============================================================================
Number Data Type
JavaScript uses Number type for both integers and decimals.
================================================================================ */

// var a = 10;
// console.log("value of a : " + a);
// console.log("value of typeof(a) : " + typeof a);

// var c = 10.5;
// console.log("value of c : " + c);
// console.log("value of typeof(c) : " + typeof c);

/* ===============================================================================
String Data Type
JavaScript does not have a separate character type.
Even a single character is treated as a string.
================================================================================ */

/* ===============================================================================
Undefined vs Null
Undefined → variable declared but not assigned
Null → intentionally assigned empty value

Important Interview Point:
// ================================================================================ */

// var undefinedValue;
// console.log("value of f : " + undefinedValue);
// console.log("value of typeof(f) : " + typeof undefinedValue);

// var nullValue = null;
// console.log("value of g : " + nullValue);
// console.log("value of typeof(g) : " + typeof nullValue); // object (quirk)

/* ===============================================================================
Boolean Data Type
Used in conditions and logical operations.
================================================================================ */

// var isAvailable = true;
// console.log("value of isAvailable : " + isAvailable);
// console.log("value of typeof(isAvailable) : " + typeof isAvailable);

/* ==
/* ===============================================================================
Strict Mode ("use strict")
Strict mode helps catch errors and prevents bad practices.

Key Benefits:
- Prevents undeclared variables
- Improves debugging
- Makes behavior predictable
================================================================================ */

// "use strict";
// var strictVar;
// strictVar = 10; // Error
// console.log("value of strictVar : " + strictVar);

/* ===============================================================================
const Keyword
Used for constant values that should not change.
================================================================================ */

// const PI = 3.14;
// console.log("value of PI : " + PI);

// PI = 3.14159; // Error

/* ===============================================================================
Hoisting
JavaScript moves variable declarations to the top of scope.

Important:
Only declaration is hoisted, not initialization.
================================================================================ */
// var hoistedVar // internally
// console.log("value of hoistedVar : " + hoistedVar);
// var hoistedVar = 10;

/* ===============================================================================
Redeclaration (var vs let)
var → allows redeclaration
let → does not allow redeclaration
================================================================================ */

// var name = "Alice";
// var name = "Bob";
// console.log("value of name : " + name);

// let age = 25;
// let age = 30; // Error

/* ===============================================================================
Scope (var vs let)
var → function/global scope
let → block scope
================================================================================ */

// if (true) {
//   var x = 10;
//   let y = 20;

//   console.log("value of x inside block : " + x);
//   console.log("value of y inside block : " + y);
// }

// console.log("value of x outside block : " + x);
// console.log("value of y outside block : " + y); // Error

/* ===============================================================================
Comparison Table (var vs let)

Feature                  var                          let
-----------------------------------------------------------------------
Scope                    Function-scoped             Block-scoped
Hoisting                 Yes (undefined)             Yes (TDZ)
Re-declaration           Allowed                     Not allowed
Global Object            Yes                         No
TDZ                      No                          Yes
================================================================================ */

/* ===============================================================================
Additional Theory

1. No Need to Declare Type
JavaScript determines type at runtime.

2. Same Variable Different Types
A variable can store number, string, boolean, etc.

3. Scoping
var → global/function
let/const → block

4. typeof Operator
Helps identify data type during execution.

================================================================================ */

/* ===============================================================================
Strict Mode Deep Explanation

"use strict" makes JavaScript safer and predictable.

Key Advantages:
- Prevents accidental global variables
- Disallows duplicate property names
- Avoids unsafe syntax
- Improves performance

Strict Mode vs Non-Strict Mode:
Non-strict → forgiving, error-prone
Strict → strict rules, safer code

================================================================================ */
