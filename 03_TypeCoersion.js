// ============================================
// Type Coercion in JavaScript
// ============================================
// Coercion: Automatic type conversion by JavaScript to make expressions work even if data types don't match.

// ============================================
// String Conversion
// ============================================
// String conversion occurs when we output something, concatenate strings, or perform certain operations.
// JavaScript implicitly converts other types to strings when they are used in string operations.

// var result1 = "Hello" + " " + "World";
// console.log(result1); // "Hello World"
// -----------------
// Mixing Numbers and Strings in Concatenation

// // // var result2 =
// console.log("5" + 2 + 3); // "523" - Number 2 and 3 are coerced into strings and concatenated.
// console.log(5 + 2 + "3"); // "73" - Number 2 and 3 are coerced into strings and concatenated.
// console.log("hello" + true);
// --------------------------
// Explicit String Conversion using String()
// var value = 100;
// var convertedToString = String(value);
// console.log(convertedToString); // "100"
// console.log(typeof convertedToString); // "string"

// ============================================
// Numeric Conversion
// ============================================
// Numeric conversion happens when we perform mathematical operations.
// JavaScript tries to convert values to numbers when used with arithmetic operators.

// var result4 = "10" * 2;
// console.log(result4); // 20 - "10" is coerced to number 10 for multiplication.

// var result5 = Number("5") + 3;
// console.log(result5); // 8 - Explicit numeric conversion using Number()

// // Edge Case - Non-numeric strings convert to NaN
// var result6 = Number("abc");
// console.log(result6); // NaN (Not a Number)

// // ============================================
// // Boolean Conversion
// // ============================================
// // Boolean conversion occurs in logical contexts, and some values are inherently "falsy."

// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean("hello")); // true
// console.log(Boolean(1)); // true
// console.log(Boolean(10.0)); // true

// ============================================
// Examples of Type Coercion in Expressions
// ============================================

// var x = 5 + '2' + 3;
// console.log(x); // "523" - First coerces numbers into strings for concatenation.

// var y = 5 + 2 + '3';
// console.log(y); // "73" - Adds numbers first, then coerces result to string for concatenation.

// var z = '10' - 5;
// console.log(z); // 5 - '10' is converted to 10 to perform subtraction.

// // Use of "+" operator with strings and numbers
// console.log('1' + 2); // "12" - Number coerced to string.
// console.log(2 + '1'); // "21" - Number coerced to string.
// console.log(2 - '1'); // 1 - String '1' coerced to number for subtraction.
// console.log('6' / '2'); // 3 - Both strings are coerced to numbers for division.

// ============================================
// Equality (==) vs. Strict Equality (===)
// ============================================
// == allows type coercion, while === checks both value and type without coercion.

// var a = 10;
// var b = "10";
// console.log(a == b); // true - Values are coerced and found equal.
// console.log("a === b " + (a === b)); // false - Types (number and string) are different, so no coercion occurs.

// console.log(null == undefined); // true - Special case where null and undefined are loosely equal.
// console.log(null === undefined); // false - Strict equality checks type and value, which differ here.

// ============================================
// Comparison Operators and Type Coercion
// ============================================

// console.log(2 > 1);  // true - Both numbers, direct comparison.
// console.log(2 == 1); // false - No type coercion needed.
// console.log(2 != 1); // true - No type coercion needed.

// console.log('2' > 1); // true - '2' coerced to number 2.
// console.log('01' == 1); // true - '01' coerced to number 1.
// console.log(true == 1); // true - true coerced to number 1.
// console.log(false == 0); // true - false coerced to number 0.

// console.log(0 === false); // false - Different types: number and boolean.
// console.log(null === undefined); // false - Strict comparison with different types.
// console.log(null == undefined); // true - Loose comparison treats them as equal.

// // ============================================
// // Summary and Best Practices
// // ============================================
// // - JavaScript is flexible with typing and allows implicit conversions.
// // - Some values (0, false, undefined, null) are "falsy,"
// meaning they convert to false in Boolean context.
// // - Always use === (strict equality) for precise checks that require both value and type matching.

// // ============================================
// // Additional Questions
// // ============================================

// // Question: What is type coercion in JavaScript?
// // Answer: Type coercion is the automatic or implicit conversion of values from one data type to another.
// // For example, JavaScript converts numbers to strings when they are used in string concatenation.

// // Question: What is the difference between == and === in JavaScript?
// // Answer: == checks for equality with type coercion, meaning "10" == 10 is true. === checks for strict equality
// // without coercion, so "10" === 10 is false because they are different types.

// // Question: Why might you prefer === over == in JavaScript?
// // Answer: Using === avoids unexpected type conversions and ensures that both the value and type match.
// // This results in more predictable behavior, especially in complex expressions.

// // Question: What are "truthy" and "falsy" values in JavaScript?
// // Answer: Falsy values include 0, "", null, undefined, NaN, and false. All other values are considered truthy.
// // These truthy or falsy values are important in conditional checks and logical expressions.

// // Question: What will the following code output?
// console.log(2 + "3" + 4); // Answer: "234" - 2 is concatenated with "3" as a string, then "4" is added.
// console.log(2 - "1"); // Answer: 1 - "1" is converted to 1, allowing subtraction.
// console.log(null == undefined); // Answer: true - loosely equal.
// console.log(null === undefined); // Answer: false - strict comparison checks type as well.
// console.log(false == 0); // Answer: true - false is coerced to 0.

