// Take number of sessions from user
// =================================
// const prompt = require("prompt-sync")();

// let age = prompt("Enter age: ");

// console.log(age);
// console.log(typeof age);
// ===============================
// const prompt = require("prompt-sync")();

// let a = prompt("Enter first number: ");
// let b = prompt("Enter second number: ");

// console.log(a + b);
// // ===========================

// const prompt = require("prompt-sync")();

// let a = Number(prompt("Enter first number: "));
// let b = Number(prompt("Enter second number: "));

// console.log(a + b);
// ======================
// const prompt = require("prompt-sync")();
// let num1 = parseInt(prompt("Enter integer: "));
// let num2 = parseFloat(prompt("Enter decimal: "));
// console.log(typeof num1);
// console.log(typeof num1);
// ====================

// Install first:
// npm install prompt-sync

// const prompt = require("prompt-sync")();

// // Take array input
// let input = prompt("Enter array elements separated by comma: ");

// // Convert string to array
// let arr = input.split(",");

// // Remove extra spaces
// // arr = arr.map((item) => item.trim());

// console.log("\nArray:");
// console.log(arr);

// console.log("\nType of arr:");
// console.log(Array.isArray(arr));
// ======================

// const prompt = require("prompt-sync")();

// // Take array input
// let input = prompt("Enter array elements separated by space: ");

// // Convert string to array
// let arr = input.split(" ");

// console.log("\nArray:");
// console.log(arr);

// console.log("\nType of arr:");
// console.log(Array.isArray(arr));

// ========================

// const prompt = require("prompt-sync")();

// let input = prompt("Enter numbers separated by comma: ");

// // Convert into number array
// let arr = input.split(",").map((item) => Number(item.trim()));

// console.log(arr);

// console.log(typeof arr[0]);

// =====================

// const prompt = require("prompt-sync")();

// // Create empty object
// let user = {};

// // Take inputs
// user.name = prompt("Enter name: ");

// user.age = Number(prompt("Enter age: "));

// user.city = prompt("Enter city: ");

// // Display object
// console.log("\nObject:");
// console.log(user);

// console.log("\nType:");
// console.log(typeof user);
// // ========================

// const prompt = require("prompt-sync")();

// let students = [];

// let n = Number(prompt("Enter number of students: "));

// for (let i = 0; i < n; i++) {
//   let student = {};

//   student.name = prompt(`Enter name for student ${i + 1}: `);

//   student.age = Number(prompt(`Enter age for student ${i + 1}: `));

//   students.push(student);
// }

// console.log("\nStudents:");
// console.log(students);

// ==============
// const prompt = require("prompt-sync")();

// let n = parseInt(prompt("Enter number of sessions:"));

// let sessions = [];

// // Loop to take session details
// for (let i = 0; i < n; i++) {
//   let userId = parseInt(prompt(`Enter userId for session ${i + 1}:`));

//   let loginTime = parseInt(
//     prompt(`Enter loginTime (in seconds) for session ${i + 1}:`),
//   );

//   // Add object into array
//   sessions.push({
//     userId: userId,
//     loginTime: loginTime,
//   });
// }

// // Display sessions array
// console.log("Sessions Entered:");
// console.log(sessions);

// ====================

// const prompt = require("prompt-sync")();

// // Take mixed array input
// let input = prompt("Enter mixed array values separated by comma: ");

// // Convert string into array
// let arr = input.split(",").map((item) => {
//   item = item.trim();

//   // Convert number strings to numbers
//   if (!isNaN(item) && item !== "") {
//     return Number(item);
//   }

//   // Convert true/false to boolean
//   if (item.toLowerCase() === "true") {
//     return true;
//   }

//   if (item.toLowerCase() === "false") {
//     return false;
//   }

//   // Otherwise keep as string
//   return item;
// });

// console.log("\nMixed Array:");
// console.log(arr);

// console.log("\nData Types:");
// arr.forEach((item) => {
//   console.log(item, "=>", typeof item);
// });
// ====================

/* ===============================================================================
User Input (Node.js)
Used to take input from console using readline module.
================================================================================ */

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter name: ", function (name) {
//   console.log("value of name : " + name);
//   rl.close();
// });

// ============
// Run using Node.js

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sessions = [];

// Ask number of sessions
rl.question("Enter number of sessions: ", function (n) {
  n = parseInt(n);

  let count = 0;

  function takeInput() {
    // Stop when all sessions are entered
    if (count === n) {
      console.log("\nSessions Entered:");
      console.log(sessions);

      rl.close();
      return;
    }

    // Ask userId
    rl.question(`Enter userId for session ${count + 1}: `, function (userId) {
      // Ask loginTime
      rl.question(
        `Enter loginTime (in seconds) for session ${count + 1}: `,
        function (loginTime) {
          sessions.push({
            userId: parseInt(userId),
            loginTime: parseInt(loginTime),
          });

          count++;

          takeInput();
        },
      );
    });
  }

  takeInput();
});
