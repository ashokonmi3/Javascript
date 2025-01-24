// Operators
// Many operators are known to us from school. They are addition +, a multiplication *, a subtraction - and so on.
// ===============================
// 1. Assignment Operators
// ===============================
// Basic Assignment 
// ctrl + /
// execution --. ctrl+ f5

// var x = 1;  // Assign 1 to variable x
// console.log(x);  // Output: 1

// // Add and assign (+=)
// var a = 10;
// a += 5;  // a = a + 5, now a = 15
// console.log(a);  // Output: 15

// // // Subtract and assign (-=)
// a -= 5;  // a = a - 5, now a = 10
// console.log(a);  // Output: 10

// // // Multiply and assign (*=)
// a *= 2;  // a = a * 2, now a = 20
// console.log(a);  // Output: 20

// // // Divide and assign (/=)
// a /= 4;  // a = a / 4, now a = 5
// console.log(a);  // Output: 5

// // ===============================
// // 2. Arithmetic Operators
// // ===============================

// Modulo (remainder)
// a=5;
// console.log(a%5);
// console.log(5 % 2);  // Output: 1 (remainder of 5 divided by 2)
// console.log(8 % 3);  // Output: 2 (remainder of 8 divided by 3)
// console.log(6 % 3);  // Output: 0 (no remainder)

// // Exponentiation (**)
// console.log(2 ** 3);  // Output: 8 (2 raised to the power of 3)
// console.log(4 ** 0.5);  // Output: 2 (square root of 4)

// ===============================
// 3. Special Numeric Values
// ===============================

// // Infinity (positive infinity)
// console.log(1 / 0);  // Output: Infinity

// // // Negative Infinity
// console.log(-1 / 0); // Output: -Infinity

// // // NaN (Not-a-Number)
// console.log("not a number" / 2);  // Output: NaN

// // // Checking if a value is NaN
// console.log(isNaN("hello"));  // Output: true (because "hello" is not a number)
// console.log(isNaN(123));  // Output: false (because 123 is a number)

// // ===============================
// // 4. Increment and Decrement Operators
// // ===============================

// Pre-increment: increment before assignment
// var counter = 2;
// counter++;  // counter = counter + 1
// console.log(counter);  // Output: 3
// ---------------
// Post-increment: assign first, then increment
// var a = 1;
// var b = a++;  // Assign a to b first, then increment a
// console.log(b);  // Output: 1 (value of a before increment)
// console.log(a);  // Output: 2 (value of a after increment)
// -----------------------
// console.log("preincrement")
// var c = 1;
// var d = ++c;  // Assign a to b first, then increment a
// console.log(c);  // Output: 2 (value of a before increment)
// console.log(d);  // Output: 2 (value of a after increment)
// ------------------
// a = 10;
// console.log(++a);
// console.log(a);
// // -----------------
// a = 10;
// console.log(a++);
// console.log(a);
// ------------------------
// // Pre-decrement: decrement before assignment
// var c = 3;
// --c;  // c = c - 1
// console.log(c);  // Output: 2
// ----------------
// // Post-decrement: assign first, then decrement
// var d = 3;
// var e = d--;  // Assign d to e first, then decrement d
// console.log(e);  // Output: 3 (value of d before decrement)
// console.log(d);  // Output: 2 (value of d after decrement)

// ===============================
// 5. String Concatenation
// ===============================

// console.log("JavaScript" + " " + "is awesome!");  // Output: JavaScript is awesome!

// console.log("The answer is " + 42);  // Output: The answer is 42

// ===============================
// 6. Logical Operators
// ===============================
// Logical OR (||)

// var x = true || false;  // true OR false is true
// console.log(x);  // Output: true

// var y = 'abc' || 123;  // 'abc' is truthy, so it's returned, returns first truthy value
// console.log(y);  // Output: 'abc'

// var z = false || 'def';  // false is falsy, so 'def' is returned
// console.log(z);  // Output: 'def'

// var n = 123 || true;
// console.log(n);

// var n = true || 123;
// console.log(n);

// var n = 123 || false;
// console.log(n);

// var n = false || 123;
// console.log(n);


// --------------------
// Logical AND (&&)
// var a = true && false;  // true AND false is false
// console.log(a);  // Output: false

// var b = false && "abc";  // false AND anything is false
// console.log(b);  // Output: false

// var c = 'abc' && 123;  // 'abc' and 123 are truthy, so 123 is returned - last truthy value
// console.log(c);  // Output: 123

var c = 123 && 'abc';  // 'abc' and 123 are truthy, so 123 is returned - last truthy value
console.log(c);  // Output: 123

// -------------------------
// // Logical NOT (!)
// var d = !true;  // NOT true is false
// console.log(d);  // Output: false

// var e = !false;  // NOT false is true
// console.log(e);  // Output: true

// ===============================
// 8. Ternary Operator (Conditional Operator)
// Syntax: condition ? expr1 : expr2;
// ===============================
// var age = 18;
// var message = (age >= 18) ? "You are an adult." : "You are a minor.";
// console.log(message);  // Output: You are an adult.
// ---------------
// var age = 8;
// var message = (age >= 18) ? "You are an adult." : "You are a minor.";
// console.log(message);  // Output: You are an adult.

// // ===============================
// // 9. Bitwise Operators
// // ===============================

// // Bitwise AND (&)
// console.log(5 & 3);  // Output: 1 (binary: 0101 & 0011 = 0001)

// // Bitwise OR (|)
// console.log(5 | 3);  // Output: 7 (binary: 0101 | 0011 = 0111)

// // Bitwise XOR (^)
// console.log(5 ^ 3);  // Output: 6 (binary: 0101 ^ 0011 = 0110)

// // Bitwise NOT (~)
// console.log(~5);  // Output: -6 (binary: ~0101 = 1010)

// // Left shift (<<)
// console.log(5 << 1);  // Output: 10 (binary: 0101 << 1 = 1010)

// // Right shift (>>)
// console.log(5 >> 1);  // Output: 2 (binary: 0101 >> 1 = 0010)

// // ===============================
// // 10.Questions and Answers
// // ===============================

// // Q1: What is the difference between == and === in JavaScript?
// // Answer:
// // == (loose equality) compares values with type coercion. It converts operands to the same type before comparing them.
// // === (strict equality) compares both values and types without type coercion.

// console.log(5 == "5");  // Output: true (because '5' is coerced to number)
// console.log(5 === "5");  // Output: false (because types are different)

// // Q2: What is the purpose of the typeof operator in JavaScript?
// // Answer: typeof is used to check the type of a variable.

// console.log(typeof 5);  // Output: "number" (because it's a number)
// console.log(typeof "Hello");  // Output: "string" (because it's a string)
// console.log(typeof true);  // Output: "boolean" (because it's a boolean)
// console.log(typeof undefined);  // Output: "undefined" (because it's undefined)

// // Q3: What will be the output of "5" - 2?
// // Answer: The result will be 3, as JavaScript converts "5" to a number and performs subtraction.

// console.log("5" - 2);  // Output: 3

// // Q4: What is the result of false + 1 in JavaScript?
// // Answer: The result will be 1, as false is converted to 0 and 1 is added.

// console.log(false + 1);  // Output: 1

// // Q5: What will be the result of null + 1?
// // Answer: null is converted to 0, so the result will be 1.

// console.log(null + 1);  // Output: 1

// // Q6: Explain the concept of a "truthy" and "falsy" value in JavaScript.
// // Answer:
// // Truthy values are values that evaluate to true in boolean contexts (e.g., all non-zero numbers, non-empty strings).
// // Falsy values are values that evaluate to false (e.g., 0, "", null, undefined, NaN, false).

// console.log(Boolean(0));  // Output: false (falsy value)
// console.log(Boolean(1));  // Output: true (truthy value)
// console.log(Boolean("Hello"));  // Output: true (truthy value)
// console.log(Boolean(""));  // Output: false (falsy value)
// console.log(Boolean(null));  // Output: false (falsy
// ==================
// user input 
// command to execute node 02_Operators.js
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Please enter your name: ', (name) => {
//     console.log(`Hello, ${name}!`);
//     rl.close();
// });
// ===============
// Multiple input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name: ', (name) => {
    rl.question('Enter your age: ', (age) => {
        console.log(`Hello, ${name}. You are ${age} years old.`);
        rl.close();
    });
});


// // =============================
// // Mathematical Operations in JavaScript: A Safe Approach
// // JavaScript handles mathematical operations in a way that prevents the script from crashing, even when encountering unexpected scenarios like dividing by zero or operating on non - numeric strings.Instead of throwing errors, JavaScript handles these situations by returning special values, allowing the script to continue running.

// // Key Points on Safe Mathematical Operations
// // Division by Zero:

// // Unlike many other languages, dividing a number by zero in JavaScript doesn't result in a runtime error. Instead, it produces Infinity or -Infinity depending on the sign of the numerator. If both the numerator and denominator are zero, JavaScript returns NaN (Not a Number).
// // This behavior ensures that JavaScript doesn't "die" or crash due to such an operation.
// // Arithmetic with Non - Numeric Strings:

// // When performing operations on strings that are not numbers, JavaScript tries to convert the strings into numbers.If it can’t convert the string to a number, the result is NaN(Not a Number).
// // For example, adding a number to a string will result in string concatenation, but subtracting or multiplying a string with a number will cause type coercion where the string is attempted to be converted into a number.If the conversion fails(like trying to subtract a non - numeric string), it results in NaN.
// //     NaN(Not a Number):

// // NaN is a special value that indicates an operation has failed to produce a valid number.This typically occurs when trying to perform an arithmetic operation that doesn't make sense mathematically, such as subtracting a string that cannot be converted into a number.
// // It’s important to remember that NaN is not equal to itself.This means that you can't use simple equality checks to detect NaN; instead, you should use the isNaN() function to determine if a value is NaN.
// // Infinity and - Infinity:

// // JavaScript defines Infinity and - Infinity as special numeric values.These values represent numbers that are larger or smaller than the largest or smallest number JavaScript can represent.
// // For example, operations that exceed the numerical bounds of JavaScript's number range (such as multiplying large numbers) will return Infinity. Similarly, dividing by zero produces Infinity or -Infinity, depending on the sign.
// // Zero in Arithmetic Operations:

// // Zero is a valid number in JavaScript, and you can perform mathematical operations with zero without causing errors.Multiplying or dividing by zero works as expected (multiplying by zero results in zero, and dividing zero by any number results in zero).However, dividing any non - zero number by zero will give you Infinity or - Infinity.
// // Implicit Type Coercion:

// // JavaScript is known for type coercion, meaning it automatically converts one type into another when necessary.For example, when performing arithmetic operations on a string and a number, JavaScript will attempt to convert the string into a number.If the string is not a valid number, the result will be NaN.
// //     However, when performing operations like addition with a number and a string, JavaScript treats the number as a string and concatenates the two values instead of performing numeric addition.
// // Why This Is Safe in JavaScript
// // The key concept here is that JavaScript doesn't let mathematical operations cause fatal errors or stop script execution. Instead of throwing exceptions or halting the program, JavaScript provides special values (such as NaN, Infinity, and -Infinity) that allow the script to continue running. This ensures that issues like invalid operations or unexpected inputs don't cause the entire program to fail.

// // By handling these edge cases gracefully, JavaScript provides a level of "safety" when performing arithmetic.For example, even if a division by zero occurs, JavaScript won't stop the execution of your code; it will just give you a result of Infinity or NaN, which you can then handle or process appropriately.

// // Important Considerations
// // NaN and Infinity are values that you should be aware of when performing operations that could potentially result in invalid calculations.They can propagate through your code and cause unexpected results if not handled properly.
// // Type coercion can be convenient but sometimes confusing.It's important to be mindful of the types you're working with in arithmetic operations, as JavaScript will try to convert values automatically.This can lead to unintended behavior, especially with string and number operations.
// // Always check for NaN using the isNaN() function, as it does not behave like other values in JavaScript.
// //     Summary:
// // Mathematical operations in JavaScript are "safe" because JavaScript won’t crash the script for invalid operations.Instead, it returns Infinity, -Infinity, or NaN, allowing the script to continue.
// // JavaScript implicitly coerces types when necessary, which can lead to unexpected results but prevents runtime errors.
// //     NaN, Infinity, and - Infinity are special values that represent invalid results or values out of range, which allow JavaScript to gracefully handle unusual scenarios without failing.