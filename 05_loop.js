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
// // // Edge Case: Loop ending at 1
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
// -----------------
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
// let m;
// for (m = 1; m <= 5; m++) {
//   console.log("inner" + m)
// }
// console.log("Outer" + m);
// ===============================
// JavaScript Loops – Single File
// ===============================

//-------------------
// Print "javascript" 6 times
// for (let i = 0; i <= 5; i++) {
//   console.log("javascript");
// }

// //-------------------
// //  Print "javascript : i"
// for (let i = 0; i <= 10; i++) {
//   console.log("javascript : " + i);
// }

// //-------------------
// // Print 10 to 1
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// -------------------
// Print 1 to 10 except 7
// for (let i = 1; i <= 10; i++) {
//   if (i !== 7) {
//     console.log(i);
//   }
// }
// console.log("out of loop");

//-------------------
// Print 1 to 10 except 4 and 7
// for (let i = 1; i <= 10; i++) {
//   if (i !== 4 && i !== 7) {
//     console.log(i);
//   }
// }

//-------------------
// Else condition example
// for (let i = 1; i <= 10; i++) {
//   if (i !== 4 && i !== 7) {
//     console.log(i);
//   } else {
//     console.log("javascript " + i);
//   }
// }

//-------------------
// while loop (2 to 10)
// let i = 2;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//-------------------
// Print 10 to 1 using while
// i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// //-------------------
// // 9️⃣ do...while loop
// i = 1000;
// do {
//   console.log("i value is : " + i);
//   i++;
// } while (i <= 10);

// //-------------------
// break example
// for (let i = 1; i <= 10; i++) {
//   if (i === 6) {
//     console.log("this is inside break : javascript " + i);
//     break;
//   }
//   console.log(i);
// }
// console.log("outside the loop");

// -------------------
// continue example
// for (let i = 1; i <= 10; i++) {
//   if (i === 7) continue;
//   console.log(i);
// }
// console.log("outside the loop");

// -------------------
//  Fixed i with loop
// let fixedI = 1;
// for (let j = 1; j <= 3; j++) {
//   console.log(fixedI + " " + j);
// }


// let fixedI = 2;
// for (let j = 1; j <= 3; j++) {
//   console.log(fixedI + " " + j);
// }

// let fixedI = 3;
// for (let j = 1; j <= 3; j++) {
//   console.log(fixedI + " " + j);
// }


// ------------------
// Nested loops
// for (let i = 0; i < 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(i + " " + j);
//   }
// }

// //-------------------
// // 1️⃣4️⃣ Loop labels
// outerloop:
// for (let i = 1; i <= 3; i++) {
//   innerloop:
//   for (let j = 1; j <= 3; j++) {
//     if (i === 2 && j === 2) {
//       break outerloop;
//     }
//     console.log(i + " " + j);
//   }
// }
// console.log("i am outside of outerloop");

// -------------------
//  Star pattern
// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     row += "*";
//   }
//   console.log(row);
// }


 //-------------------
// for loop scope example
// let ctr;
// for (ctr = 0; ctr < 5; ++ctr) {
//   console.log(ctr);
// }
// console.log(ctr); // accessible outside loop


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


// ===============
//  Nested Loops
// Loops inside other loops, useful for multidimensional data structures.
// ===============


// ===========


// for(let i = 1 ; i<=10; i++){

//     for(let j =1 ;j<=10; j++){
//         ;
//     }
// }

// table from 1to 10
// for (let i = 1; i <= 10; i++) {
//   let row = ''; // Initialize an empty row
//   for (let j = 1; j <= 5; j++) {
//     row += (i * j) + ' '; // Append the product to the row with a space
//   }
//   console.log(row.trim()); // Print the row and trim trailing space
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
