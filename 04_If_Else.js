// // Basic if-else statement example
// var year = 2015;
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
// var age = 181;
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

// // OR Operator (||)
// console.log(true || true);   // true
// console.log(false || true);  // true
// console.log(true || false);  // true
// console.log(false || false); // false

// // // Example with falsy values
// if (0 || 0) {
//     console.log('truthy!');
// } else {
//     console.log('falsy!');
// }

// ============================
// Using OR (||) operator with real-life example
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

// console.log(!"non-empty string"); // false (string is truthy, NOT makes it false)
// console.log(!!null); // false (double NOT converts null to boolean)

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

// ============================
// Example with multiple conditions combined
// ============================
var year = 2024;
var a = 10;
var b = 100;
if (year < 2015 && a == 10 && b == 20) { // < , ==,&& ||   , false && true && false
    console.log("Too early...");
} else if (year > 2015) {
    console.log("Too late");
} else {
    console.log("Exactly!");
}

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

