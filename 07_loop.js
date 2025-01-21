// ===============
//  Introduction to Loops in JavaScript
// ===============

// ===============
//  What is a Loop?
// A loop is a programming construct that allows us to repeat a block of code multiple times based on a condition.
// Each repetition of the code block is called an "iteration" of the loop.
// Loops are especially useful for performing repetitive tasks without having to write the same code multiple times.
// ===============

// ===============
//  Why Are Loops Necessary?
// In programming, we often encounter situations where we need to perform an action multiple times, such as:
// - Processing each item in a list (e.g., calculating prices for a list of products)
// - Repeating a calculation until a certain condition is met (e.g., calculating compound interest)
// - Generating repetitive patterns (e.g., generating a series of numbers or creating a grid of elements)
// Without loops, we would have to manually repeat code blocks, which would be inefficient and harder to maintain.
// Loops help streamline code, making it more concise, readable, and efficient.
// ===============

// ===============
//  Importance of Loops in Programming
// Loops are foundational in programming for several reasons:
// 1. **Code Efficiency**: Loops reduce code redundancy, allowing us to accomplish repetitive tasks with minimal code.
// 2. **Improved Readability**: Loops help organize repetitive logic in one place, making code easier to understand and maintain.
// 3. **Automation of Tasks**: By using loops, we can automate processes that would be tedious or time-consuming if done manually.
// 4. **Dynamic Data Processing**: Loops are essential when working with data structures like arrays, objects, and lists,
//    allowing us to process each item or element dynamically.
// In JavaScript, we have several types of loops to handle different scenarios, which we will explore below.
// ===============

// ===============
//  Types of Loops in JavaScript
// JavaScript provides different types of loops for various use cases.
// Here are the main types we'll be learning about:
// 1. **While Loop**: Repeats a block of code as long as a specified condition is true.
// 2. **Do...While Loop**: Similar to the while loop but ensures the code runs at least once.
// 3. **For Loop**: A loop with initialization, condition, and increment all in one line, often used when the number of iterations is known.
// 4. **For...In Loop**: Used to iterate over the properties of an object.
// 5. **For...Of Loop**: Used to iterate over the values in an iterable, like an array or string.
// Each of these loops serves a unique purpose and helps us write effective, reusable, and concise code.
// Let's explore each of these loop types with examples.
// ===============

// ===============
//  While Loop
// A 'while' loop repeats code as long as the condition specified remains true.
// Syntax: while (condition) { statement }
// ===============

// let x = 5;// initialization
// while (x >= 0) {
//     console.log(x); // Prints current value of x
//     x--; // Decreases x by 1 each iteration
// }
// Output: 5, 4, 3, 2, 1, 0
// =========================
// // Example: Simple Counter
// let i = 0;
// while (i < 3) {
//     console.log(i); // Output current value of i
//     // process.stdout.write(`i value ${i}`);

//     i++; // Increase i by 1 in each iteration
// }
// // Output: 0, 1, 2
// --------------------
// // Edge Case: Loop ending at 1
// let count = 3;
// while (count) { // Runs until count is falsy (0)
//     console.log(count);
//     count--;
// }
// // Output: 3, 2, 1

// ===============
//  Do...While Loop
// A 'do...while' loop always executes its code block at least once before checking the condition.
// Syntax: do { statement } while (condition)
// ===============

// let j = 10;
// do {
//     console.log(j); // Outputs current value of j
//     j++;
// } while (j < 3); // Runs at least once, as condition is checked after loop body
// Output: 10

// Interview Note: Use 'do...while' for cases where code must
// run at least once regardless of the condition.

// ===============
//  For Loop
// A 'for' loop allows initialization, condition, and increment/decrement all in one line, ideal for iterating a specific number of times.
// Syntax: for (initialization; condition; increment) { statements }
// ===============

// for (let k = 0; k < 3; k++) {
//     console.log(k); // Prints value of k in each iteration
// }
// // Output: 0, 1, 2

// Example: Counting down with for loop
// for (let l = 5; l >= 0; l--) {
//     console.log(l); // Outputs value of l from 5 to 0
// }
// Output: 5, 4, 3, 2, 1, 0
// -----------------
// Variable Scope Example
// let m = 0;
// for (m = 0; m < 3; m++) {
//     console.log(m); // Outputs value of m within loop
// }
// console.log("Outside loop:", m); // Shows m is still accessible outside
// // Output: 0, 1, 2, Outside loop: 3
// -----------------------------
// for (let m = 0; m < 3; m++) {
//     console.log(m); // Outputs value of m within loop
// }
// console.log("Outside loop:", m); // Shows m is still accessible outside
// =======================

// for (var m = 0; m < 3; m++) {
//     console.log(m); // Outputs value of m within loop
// }
// console.log("Outside loop:", m); // Shows m is still accessible outside
// ====================
let m;
for (m = 1; m <= 5; m++) {
    console.log("inner" + m)
}
console.log("Outer" + m);

// ===============
//  Infinite Loop
// Be cautious of infinite loops that never end, usually due to a missing increment or incorrect condition.
// Example below would freeze or crash the program:
// while (true) { console.log("This will run forever"); }
// ===============

// ===============
//  For...In Loop (for objects)
// Loops through properties of an object
// Syntax: for (key in object) { statement }
// ===============

// let person = { name: "Alice", age: 25, city: "New York" };
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }
// Output:
// name: Alice
// age: 25
// city: New York

// ===============
//  For...Of Loop (for arrays or iterables)
// Loops through values of an iterable like arrays or strings
// Syntax: for (value of iterable) { statement }
// ===============

// let colors = ["red", "green", "blue"];
// for (let x of colors) {
//     console.log(x); // Pr
//     // ints each color in the array
// }
// Output: red, green, blue



// ===============
//  Break Statement
// Exits a loop when a specific condition is met.
// ===============

// for (let n = 0; n < 10; n++) {
//     if (n === 3) break; // Exits loop when n is 3
//     console.log(n);
// }
// console.log("I am outside the loop");

// Output: 0, 1, 2

// ===============
//  Continue Statement
// Skips the current iteration and moves to the next one.
// ===============

// for (let p = 0; p < 5; p++) {
//     if (p === 2) continue; // Skips when p is 2
//     console.log(p);
// }
// Output: 0, 1, 3, 4

// var s = 2;
// var s1= '2';
// console.log(2 === '2');
// console.log(2 == '2');


// ===============
//  Switch Statement in Loops
// Can be used to handle different cases within a loop
// ===============

// for (let day = 0; day < 3; day++) {
//     let text;
//     switch (day) {
//         case 0:
//             text = "Today is Sunday";
//             break;
//         case 1:
//             text = "Today is Monday";
//             break;
//         default:
//             text = "Another weekday";
//     }
//     console.log(text);
// }
// Output: Today is Sunday, Today is Monday, Another weekday

// ===============
//  Nested Loops
// Loops inside other loops, useful for multidimensional data structures.
// ===============

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// for (let row = 0; row < matrix.length; row++) {
//   for (let col = 0; col < matrix[row].length; col++) {
//     console.log(matrix[row][col]);
//   }
// }
// Output: 1 2 3 4 5 6 7 8 9
// ======================

// var str = "hello world"
// for (var i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// var str = "hello world"
// for (var ch of str) {
//     console.log(ch);
// }



// ===============
//  Interview Questions with Answers
// ===============

// Question 1: How does 'for...of' differ from 'for...in' in JavaScript?
// Answer:
// - 'for...of' iterates over values of an iterable (e.g., arrays, strings).
// - 'for...in' iterates over the keys or properties of an object.

// let exampleArray = ['apple', 'banana', 'cherry'];
// for (let fruit of exampleArray) {
//   console.log(fruit); // Outputs values: apple, banana, cherry
// }
// for (let index in exampleArray) {
//   console.log(index); // Outputs indices: 0, 1, 2
// }

// Question 2: What is an infinite loop? Provide an example.
// Answer: An infinite loop is a loop that never ends, typically due to an incorrect condition.
// Example:
// while (true) { console.log("Running forever"); } // Infinite loop, will crash program if executed

// Question 3: Explain the difference between 'break' and 'continue' statements in loops.
// Answer:
// - 'break' stops the loop entirely and exits.
// - 'continue' skips the current iteration and proceeds to the next one.

// for (let i = 1; i <= 5; i++) {
//     if (i === 3) continue; // Skips when i = 3
//     console.log(i);
// } // Output: 1, 2, 4, 5

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) break; // Exits loop when i = 3
//   console.log(i);
// } // Output: 1, 2
