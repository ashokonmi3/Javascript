// ===============
//  Numbers in JavaScript
// JavaScript has two numeric types: integer and floating-point numbers.
// These types are represented using the IEEE 754 standard for floating-point arithmetic.
// ===============

// console.log(5.00); // Output: 5, The decimal is just a format, it's still 5
// console.log(5);     // Output: 5, An integer
// console.log(0xFF);  // Output: 255, Hexadecimal representation, 0xFF is equivalent to 255 in decimal

// ===============
//  Exponential (Scientific) Notation
// You can represent numbers in exponential (scientific) notation using the 'e' notation (base-10).
// The 'e' represents "times 10 raised to the power of."
// ===============

// console.log(5e2);  // Output: 500, equivalent to 5 * (10^2)
// console.log(5e-2); // Output: 0.05, equivalent to 5 * (10^-2)
// console.log(0.5e2); // Output: 50, equivalent to 0.5 * (10^2)

// ===============
//  Type Casting: Convert one type to another
// Converting other types to Numbers or Strings using methods like .toString() or Number()
// ===============

// var x = (123).toString();   // Convert a number to a string
// console.log(x); // Output: "123"
// console.log(typeof x); // Output: string

// // Handling different cases for number to string conversion
// console.log(123 .toString());  // Output: "123"
// console.log(123.0.toString()); // Output: "123"
// console.log(123..toString());  // Output: "123", Double dots allow method chaining

// // Converting different values to numbers using the Number() function
// console.log(Number(''));       // Output: 0 (empty string is converted to 0)
// console.log(Number('1233'));   // Output: 1233 (string to number)
// console.log(Number(false));    // Output: 0 (false is converted to 0)
// console.log(Number(true));     // Output: 1 (true is converted to 1)
// console.log(Number(null));     // Output: 0 (null is converted to 0)

// ===============
//  parseFloat() - Converts a string to a floating point number
// If the string begins with a number, it parses that number until it encounters a non-numeric character.
// ===============

// console.log(parseFloat(10));        // Output: 10
// console.log(parseFloat(10.00));     // Output: 10
// console.log(parseFloat(10.33));     // Output: 10.33
// console.log(parseFloat("10.3"));    // Output: 10.3
// console.log(parseFloat("34 35 33"));// Output: 34, parsing stops at the first non-digit character
// console.log(parseFloat("he is 33"));// Output: NaN, starts with a non-number

// // // Handling parseFloat() with null or empty string
// console.log(parseFloat(null));      // Output: NaN
// console.log(parseFloat(''));        // Output: NaN

// // Special Cases:
// console.log(parseFloat('123.45asdf12')); // Output: 123.45
// console.log(parseFloat('aasdf1233.45asdf12')); // Output: NaN, non-numeric string at the start
// console.log(parseFloat('123.45asdf12')); // Output: 123.45

// ===============
//  Special Error Values: NaN and Infinity
// NaN (Not-a-Number) is a special numeric value indicating an invalid or unrepresentable number.
// Infinity represents a number that's too large or too small for JavaScript to handle (resulting from operations like division by zero).
// ===============

// console.log(typeof NaN); // Output: "number", NaN is technically a number type in JavaScript
// console.log(Number('xyz')); // Output: NaN, string that cannot be converted to number

// // Checking if a value is NaN using isNaN()
// console.log(isNaN(NaN)); // Output: true
// console.log(isNaN(33));  // Output: false

// // Example of NaN in calculations
// console.log(NaN + 45); // Output: NaN, any operation with NaN results in NaN
// console.log(5 / NaN);   // Output: NaN
// console.log(NaN === NaN); // Output: false, NaN is not equal to itself

// // Infinity and -Infinity
// console.log(3 / 0);    // Output: Infinity, division by zero results in Infinity
// console.log(3 / -0);   // Output: -Infinity, division by negative zero results in -Infinity

// // Checking Infinity and its properties
// console.log(typeof Infinity); // Output: "number"
// console.log(Infinity + Infinity); // Output: Infinity
// console.log(Infinity - Infinity); // Output: NaN

// // ===============
// //  Math Methods for Rounding Numbers
// // JavaScript provides several methods to round numbers to the nearest integer or to the closest lower/higher number.
// // ===============

console.log(Math.floor(3.9));  // Output: 3, rounds down to the nearest integer
console.log(Math.floor(-3.9)); // Output: -4, rounds down to the nearest integer

console.log(Math.ceil(3.9));   // Output: 4, rounds up to the nearest integer
console.log(Math.ceil(-3.9));  // Output: -3, rounds up to the nearest integer

console.log(Math.round(3.9));  // Output: 4, rounds to the nearest integer
console.log(Math.round(-3.9)); // Output: -4, rounds to the nearest integer

console.log(Math.round(3.1));  // Output: 3, rounds to the nearest integer
console.log(Math.round(-3.1)); // Output: -3, rounds to the nearest integer

// ===============
// Questions on Numbers in JavaScript
// 1. What is the difference between Number('123') and parseInt('123.45')?
// Answer: Number('123') converts the entire string '123' to the number 123, while parseInt('123.45') converts the string '123.45' to 123, parsing only the integer part before any decimal point.
// 2. How do you handle NaN in calculations? Can you give an example?
// Answer: Any calculation with NaN results in NaN. To check if a value is NaN, you can use isNaN(value). Example: NaN + 10 = NaN.
// 3. What are the possible values of Infinity in JavaScript?
// Answer: Infinity is returned when dividing a number by zero (positive or negative). It behaves according to mathematical rules. Example: 5 / 0 = Infinity and -5 / 0 = -Infinity.
// 4. How does parseFloat() handle strings that contain non-numeric characters?
// Answer: parseFloat() parses the string until it encounters a non-numeric character. For example, parseFloat('123.45abc') will return 123.45.
// 5. What does Math.round() do in JavaScript?
// Answer: Math.round() rounds a number to the nearest integer. Example: Math.round(3.5) returns 4, and Math.round(-3.5) returns -3.

