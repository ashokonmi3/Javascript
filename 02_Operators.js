/* ===============================================================================
Operators in JavaScript
Operators are symbols used to perform operations on variables and values.

Common operators:
+ (addition), - (subtraction), * (multiplication), / (division)

Categories:
1. Assignment Operators
2. Arithmetic Operators
3. Logical Operators
4. Comparison Operators
5. Bitwise Operators
6. Conditional (Ternary) Operator
================================================================================ */

/* ===============================================================================
Assignment Operators
Used to assign values to variables.
================================================================================ */

// var x = 1;
// console.log("value of x : " + x);

/* ------------------------------------------------------------------------------- */

// var a = 10;
// a += 5;
// console.log("value of a after += : " + a);

/* ------------------------------------------------------------------------------- */

// a -= 5;
// console.log("value of a after -= : " + a);

/* ------------------------------------------------------------------------------- */

// a *= 2;
// console.log("value of a after *= : " + a);

/* ------------------------------------------------------------------------------- */

// a /= 4;
// console.log("value of a after /= : " + a);

/* ------------------------------------------------------------------------------- */

/* ===============================================================================
Arithmetic Operators
Used for mathematical calculations.
================================================================================ */

// var a = 5;
// console.log("value of (a % 5) : " + (a % 5));
// console.log("value of (5 % 2) : " + (5 % 2));
// console.log("value of (8 % 3) : " + (8 % 3));
// console.log("value of (6 % 3) : " + (6 % 3));
// console.log("value of (6 % 30) : " + (6 % 30));
// console.log("value of (8 % 13) : " + (8 % 13));

/* ------------------------------------------------------------------------------- */

// console.log("value of (2 ** 3) : " + (2 ** 3));
// console.log("value of (4 ** 0.5) : " + (4 ** 0.5));

/* ------------------------------------------------------------------------------- */

/* ===============================================================================
Special Numeric Values
JavaScript does not crash for invalid math operations.
================================================================================ */

// console.log("value of (1 / 0) : " + (1 / 0));
// console.log("value of (-1 / 0) : " + (-1 / 0));

/* ------------------------------------------------------------------------------- */

// console.log("value of ('not a number' / 2) : " + ("not a number" / 2));
// console.log("value of isNaN('hello') : " + isNaN("hello"));
// console.log("value of isNaN(123) : " + isNaN(123));

/* ------------------------------------------------------------------------------- */

/* ===============================================================================
Increment and Decrement Operators
Pre → first change, then use
Post → first use, then change
================================================================================ */

/*
Post Increment (a++)
*/

// var a = 1;
// var b = a++;

// console.log("value of b (before increment) : " + b);
// console.log("value of a (after increment) : " + a);

/* ------------------------------------------------------------------------------- */

/*
Pre Increment (++a)
*/

// var c = 1;
// var d = ++c;

// console.log("value of c : " + c);
// console.log("value of d : " + d);

/* ------------------------------------------------------------------------------- */

/*
Post Decrement (a--)
*/

// var d = 3;
// var e = d--;

// console.log("value of e (before decrement) : " + e);
// console.log("value of d (after decrement) : " + d);

/* ------------------------------------------------------------------------------- */

/*
Pre Decrement (--a)
*/

// var c = 3;
// --c;

// console.log("value of c after decrement : " + c);

/* ------------------------------------------------------------------------------- */

/* ===============================================================================
String Concatenation
================================================================================ */

// console.log("value of concatenation : " + ("JavaScript" + " " + "is awesome!"));
// console.log("value of concatenation : " + ("The answer is " + 42));

/* ------------------------------------------------------------------------------- */

/* ===============================================================================
Logical Operators
================================================================================ */

/*
Logical OR (||) → returns first truthy value
*/

// console.log("value of (true || false) : " + (true || false));
// console.log("value of ('abc' || 123) : " + ("abc" || 123));
// console.log("value of (false || 'def') : " + (false || "def"));

/* ------------------------------------------------------------------------------- */

/*
Logical AND (&&) → returns last truthy or first falsy
*/

// console.log("value of (true && false) : " + (true && false));
// console.log("value of ('abc' && 123) : " + ("abc" && 123));
// console.log("value of (false && 'abc') : " + (false && "abc"));

/* ------------------------------------------------------------------------------- */

/*
Logical NOT (!)
*/

// console.log("value of (!true) : " + (!true));
// console.log("value of (!false) : " + (!false));

/* ------------------------------------------------------------------------------- */

/* ===============================================================================
Ternary Operator
condition ? value1 : value2
================================================================================ */

// var age = 18;
// var message = age >= 18 ? "You are an adult." : "You are a minor";
// console.log("value of message : " + message);

/* ------------------------------------------------------------------------------- */

// var age = 8;
// var message = age >= 18 ? "You are an adult." : "You are a minor";
// console.log("value of message : " + message);

/* ------------------------------------------------------------------------------- */

/* ===============================================================================
Bitwise Operators
================================================================================ */

// console.log("value of (5 & 3) : " + (5 & 3));
// console.log("value of (5 | 3) : " + (5 | 3));
// console.log("value of (5 ^ 3) : " + (5 ^ 3));
// console.log("value of (~5) : " + (~5));
// console.log("value of (5 << 1) : " + (5 << 1));
// console.log("value of (5 >> 1) : " + (5 >> 1));

/* ------------------------------------------------------------------------------- */

/* ===============================================================================
Interview Questions
================================================================================ */

// console.log("value of (5 == '5') : " + (5 == "5"));
// console.log("value of (5 === '5') : " + (5 === "5"));

/* ------------------------------------------------------------------------------- */

// console.log("value of typeof(5) : " + typeof(5));
// console.log("value of typeof('Hello') : " + typeof("Hello"));
// console.log("value of typeof(true) : " + typeof(true));

/* ------------------------------------------------------------------------------- */

// console.log("value of ('5' - 2) : " + ("5" - 2));
// console.log("value of (false + 1) : " + (false + 1));
// console.log("value of (null + 1) : " + (null + 1));

/* ------------------------------------------------------------------------------- */

// console.log("value of Boolean(0) : " + Boolean(0));
// console.log("value of Boolean(1) : " + Boolean(1));
// console.log("value of Boolean('') : " + Boolean(""));
// console.log("value of Boolean('Hello') : " + Boolean("Hello"));

/* ------------------------------------------------------------------------------- */

/* ===============================================================================
Safe Mathematical Operations
JavaScript handles invalid operations safely using special values.
================================================================================ */

// console.log("value of (10 / 0) : " + (10 / 0));
// console.log("value of ('abc' * 2) : " + ("abc" * 2));
// console.log("value of isNaN('abc') : " + isNaN("abc"));

/* ------------------------------------------------------------------------------- */

/* ===============================================================================
Assignments for Practice

Assignment 1: Primitive Data Types
Create variables for:
Number, String, Boolean, undefined, null, Symbol
Print value and type using console.log.

Assignment 2: Loose Typing
Declare a variable "info".
Assign number → string → boolean.
Print value and typeof after each change.

Assignment 3: Hoisting (var vs let)
Access variable before declaration using var and let.
Observe behavior and write comments.

Assignment 4: Scope (var vs let)
Create a block {} and declare one variable using var and one using let.
Print both inside and outside block.
Observe difference.

Assignment 5: Operators + Type Coercion
Test and print output + typeof for:
"5" + 2 + 3
5 + 2 + "3"
"10" - 5
false + 1
null + 1

Explain results in comments.
================================================================================ */
