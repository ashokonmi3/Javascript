// // Basic if-else statement example
// var year = 2015;
// if (year == 2015) {
//     console.log("That's correct!"); // If condition is true, this block runs.
//     console.log("You're so smart!");
// }
// ===================
// var year = 2016;
// if (year == 2015) {
//     console.log("That's correct!"); // If condition is true, this block runs.
//     console.log("You're so smart!");
// }

// // ============================
// // Prompt user for input and validate the year
// var year = 2016;
// if (year == 2015) {
//     console.log("Correct! ECMAScript-2015 was published in 2015.");
// } else {
//     console.log("Incorrect, try again.");
// }

// ============================
// Multiple conditions using if-else-if
// var year = 2015;
// if (year < 2015) {
//     console.log('Too early...');  // Runs if year is before 2015
// } else if (year > 2015) {
//     console.log('Too late');  // Runs if year is after 2015
// } else {
//     console.log('Exactly!');  // Runs if year is exactly 2015
// }
// =================

// var year = 2015;
// if (year < 2018) {
//     console.log('Too early...');  // Runs if year is before 2015
// } else if (year == 2015) {
//     console.log('Too late');  // Runs if year is after 2015
// } else {
//     console.log('Exactly!');  // Runs if year is exactly 2015
// }

// ============================
// Checking access based on age
// var accessAllowed;
// var age = 28;
// if (age > 18) {
//     accessAllowed = true; // If age is above 18, access is allowed
// } else {
//     accessAllowed = false; // Else, access is denied
// }
// console.log(accessAllowed); // Prints true or false based on age

// // ============================
// // Ternary Operator (conditional operator) for simpler conditions
// var age = 28;
// var accessAllowed = (age > 18) ? true : false; // Similar to if-else in one line
// console.log(accessAllowed); // Prints true or false

// ============================
// Example using ternary operator for different age ranges
// var age = 100;
// var message = (age < 3) ? 'Hi, baby!' :
//     (age < 18) ? 'Hello!' :
//         (age < 100) ? 'Greetings!' : 'What an unusual age!';
// console.log(message); // Prints the message based on age

// // ============================
// // Same logic using if-else statements for age categories
// var age = 18;
// if (age < 3) {
//     message = 'Hi, baby!';
// } else if (age < 18) {
//     message = 'Hello!';
// } else if (age < 100) {
//     message = 'Greetings!';
// } else {
//     message = 'What an unusual age!';
// }
// console.log(message);

// // ============================
// // Logical Operators

// // // OR Operator (||)
// console.log(true || true);   // true
// console.log(false || true);  // true
// console.log(true || false);  // true
// console.log(false || false); // false
// --------------------------
// // // Example with falsy values
// if (0 || 0) {
//     console.log('truthy!');
// } else {
//     console.log('falsy!');
// }

// ============================
// // Using OR (||) operator with real-life example
// var hour = 21; // Time of the day
// if (hour < 10 || hour > 18) {
//     console.log('The office is closed.'); // The office is closed if before 10 or after 18
// } else {
//     console.log('The office is open.');
// }
// ==============================
// Example with OR and weekend
// var hour = 21;
// var isWeekend = false;
// if (hour < 10 || hour > 18 || isWeekend) {
//     console.log('The office is closed.'); // The office is closed if it's the weekend or outside office hours
// } else {
//     console.log('The office is open.');
// }

// // ============================
// // AND Operator (&&)
// console.log(true && true);   // true
// console.log(false && true);  // false
// console.log(true && false);  // false
// console.log(false && false); // false
// ----------------
// // // Example with AND operator to check exact time
// var hour = 12;
// var minute = 30;
// if (hour == 12 && minute == 30) {
//     console.log('Time is 12:30');
// } else {
//     console.log('Time is other time');
// }

// // ============================
// // AND Operator with values
// console.log(1 && 0); // 0
// console.log(1 && 5); // 5 (AND returns the second operand)
// console.log(null && 5); // null (short-circuiting)
// console.log(0 && "no matter what"); // 0

// // ============================
// // NOT Operator (!)
// var x = true;
// console.log(!x); // false (NOT true is false)

// console.log(!"ss"); // false (string is truthy, NOT makes it false)
// console.log(!!null); // false (double NOT converts null to boolean)
// console.log(!!!null); // false (double NOT converts null to boolean)

// ============================
// Falsy values in JavaScript (falsy values include: 0, "", null, undefined, NaN, false)
// ============================

// var a = "hello";
// if (a) {
//     console.log("values are equal"); // This will print because a is truthy
// } else {
//     console.log("values are not equal");
// }
// -----------------------
// var a = "";
// if (a) {
//     console.log("values are equal");
// } else {
//     console.log("values are not equal"); // This will print because a is falsy
// }
// --------------------------
// var a; // undefined
// if (a) {
//     console.log("values are equal");
// } else {
//     console.log("values are not equal"); // This will print because a is falsy
// }
// ----------------------
// var a = null;
// if (a) {
//     console.log("values are equal");
// } else {
//     console.log("values are not equal"); // This will print because a is falsy
// }

// ============================
// Truthy and Falsy in conditions
// var a = true;
// if (a) {
//     console.log("values are equal"); // This will print because a is truthy
// } else {
//     console.log("values are not equal");
// }
// -------------------
// var a = false;
// if (a) {
//     console.log("values are equal");
// } else {
//     console.log("value not equal"); // This will print because a is falsy
// }

// ============================
// Undefined values
// var a = "undefined";
// if (a) {
//     console.log("values are equal"); // This will print because a is a string
// } else {
//     console.log("value not equal");
// }
// ============
// var year = 2016;
// if (year = 2015) {
//     console.log("This code run");
// }
// else {
//     console.log("This code run in else");
// }
// =================
// if (0 || 1) {
//     console.log(false)
// }
// else {
//     console.log(true)
// }
// ====================
// let number = 0;
// if (number > 0) {
//     console.log("Number is Positive");
// }
// else if (number < 0) {
//     console.log("Number is Negetive")
// }
// else if (Number == 0) {
//     console.log("Number is equal to zero");
// }
// else {
//     console.log("This is not a Numbner")
// }


// ============================
// Example with multiple conditions combined
// ============================
// var year = 2024;
// var a = 10;
// var b = 100;
// if (year < 2015 && a == 10 && b == 20) { // < , ==,&& ||   , false && true && false
//     console.log("Too early...");
// } else if (year == 2015) {
//     console.log("Too late");
// } else {
//     console.log("Exactly!");
// }
// =======

// let day = "Monday";

// switch (day) {
//     case "Monday":
//         console.log("Start of the work week.");
//         break;
//     case "Tuesday":
//         console.log("Second day of the work week.");
//         break;
//     case "Wednesday":
//         console.log("Midweek");
//         break;
//     case "Thursday":
//         console.log("Almost Friday.");
//         break;
//     case "Friday":
//         console.log("End of the work week.");
//         break;
//     default:
//         console.log("It's the weekend!");
// }
// ===================

// let role = "admin";

// switch (role) {
//     case "admin":
//         console.log("Full access granted.");
//         break;
//     case "editor":
//         console.log("Access to edit content.");
//         break;
//     case "viewer":
//         console.log("View only access.");
//         break;
//     default:
//         console.log("No access granted.");
// }
// ===========================
// let statusCode = 404;

// switch (statusCode) {
//     case 200:
//         console.log("OK: The request was successful.");
//         break;
//     case 201:
//         console.log("Created: The request was successful and a resource was created.");
//         break;
//     case 400:
//         console.log("Bad Request: The request could not be understood or was missing required parameters.");
//         break;
//     case 404:
//         console.log("Not Found: Resource could not be found.");
//         break;
//     case 500:
//         console.log("Internal Server Error: An error occurred on the server.");
//         break;
//     default:
//         console.log("Unknown status code.");
// }
// =======================
// let month = "August";

// switch (month) {
//     case "December":
//     case "January":
//     case "February":
//         console.log("Winter");
//         break;
//     case "March":
//     case "April":
//     case "May":
//         console.log("Spring");
//         break;
//     case "June":
//     case "July":
//     case "August":
//         console.log("Summer");
//         break;
//     case "September":
//     case "October":
//     case "November":
//         console.log("Autumn");
//         break;
//     default:
//         console.log("Unknown month.");
// }
// ================
// let trafficLight = "red";

// switch (trafficLight) {
//     case "red":
//         console.log("Stop");
//     case "yellow":
//         console.log("Ready");

//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Invalid traffic light signal.");
// }
// ================
// let value = 3.14159;

// switch (true) {
//     case value === Math.PI:
//         console.log("The value is approximately Pi.");
//         break;
//     case value > 3 && value < 3.2:
//         console.log("The value is greater than 3 but less than 3.2.");
//         break;
//     case value > 2 && value < 3:
//         console.log("The value is between 2 and 3.");
//         break;
//     default:
//         console.log("Unknown range.");
// }
// // ================
// let amount = 99.99;

// switch (amount) {
//     case 99.99:
//         console.log("The price is $99.99.");
//         break;
//     case 49.99:
//         console.log("The price is $49.99.");
//         break;
//     case 19.99:
//         console.log("The price is $19.99.");
//         break;
//     default:
//         console.log("Price not listed.");
// }
// =============
// var age = 89;
// if (age < 18) {
//     console.log("Minor");
// } else if (age >= 18 && age <= 64) {
//     console.log("Adult");
// } else if (age >= 65) {
//     console.log("Senior");
// } else {
//     console.log("Default age");
// }
// ==========================
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter the student\'s score: ', (input) => {
//     const score = parseInt(input, 10);
// }
// ===================
// Write a program that takes a student's score as input and outputs
// their grade based on the following criteria:

// A: 90 and above
// B: 80 - 89
// C: 70 - 79
// D: 60 - 69
// F: Below 60
// ===============
// var score = 90;

// if (score >= 90) {
//     console.log('Grade: A');
// } else if (score >= 80) {
//     console.log('Grade: B');
// } else if (score >= 70) {
//     console.log('Grade: C');
// } else if (score >= 60) {
//     console.log('Grade: D');
// } else {
//     console.log('Grade: F');
// }

//     rl.close();
// });

// // ============================
// // Interview Questions

// // 1. What is the difference between == and === in JavaScript?
// // Answer: '==' checks for equality of values, while '===' checks for equality of both value and type.

// // 2. What are falsy values in JavaScript?
// // Answer: Falsy values are values that are considered false when evaluated in a boolean context. These include 0, "", null, undefined, NaN, and false.

// // 3. What is the purpose of the ternary operator in JavaScript?
// // Answer: The ternary operator is a shorthand for if-else statements. It allows you to evaluate a condition and return one of two values based on whether the condition is true or false.

// // 4. How can we use the logical AND (&&) and OR (||) operators in if-else conditions?
// // Answer: The logical AND operator returns true if both conditions are true, while the OR operator returns true if at least one condition is true. These operators can be used in conditions to combine multiple checks.
// ====================
// Assignment
// 1. Check if a Number is Positive, Negative, or Zero
// Write a function that checks if a given number is positive, negative, or zero.
// If the number is greater than 0, return "Positive".
// If the number is less than 0, return "Negative".
// If the number is equal to 0, return "Zero".
// -------------------
// 2. Check Even or Odd
// Write a function that takes a number as input and returns "Even" if the number is even, and "Odd" if the number is odd.
// -------------------
// 3. Check Vowel or Consonant
// Write a function that checks if a given character(single letter) is a vowel or consonant.

//     Return "Vowel" if the character is one of a, e, i, o, u(case -insensitive).
//         Otherwise, return "Consonant".

