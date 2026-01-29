// ===============
// Strings in JavaScript
// In JavaScript, textual data is stored as strings. There is no separate type for a single character.
// Strings are immutable, meaning they cannot be changed after they are created.
// ===============

const { stringify } = require("querystring");

// var single = 'single-quoted';
// var double = "double-quoted";
// console.log(single);  // Output: single-quoted
// console.log(double);  // Output: double-quoted

// ===============
// Template Literals
// Template literals are enclosed in backticks (``) and can span multiple lines.
// ===============
// '' `` ~
// var str1= 'this is to learn
// string '
// // var str1= "this is to learn
// string "

// // var str = `write over multiple
// lines`;
// console.log(str);
// s1=str.replace(/\n/g,' ')
// // over multiple lines
// console.log(s1 == 'write over multiple lines'); // true
// -------------------
// Alternative concatenation using + operator
// str = 'written over multiple lines'; // true

// var str2 = 'written ' +
//     'over ' +
//     'multiple ' +
//     'lines';

// console.log(str2);  // Output: written over multiple lines
// console.log(str == str2); // true

// ===============
// String Type
// String is a primitive data type in JavaScript. It is used to represent textual data.
// ===============

// var s = 'hello world';
// console.log(typeof (s));  // Output: string

// ===============
// Character Access
// Accessing characters in a string using the charAt() method.
// ===============
// A b c
// 0 1 2
// No negative indexing
// console.log('Abc'.charAt(1));  // Output: b
// console.log('abc'.charAt(0));  // Output: a

// // // // String indexing using array-like syntax (returns a string, not a character)
// console.log('Abc'[0]); // Output: A
// console.log('abc'[1]); // Output: b

// ===============
// Strings are Immutable in JavaScript
// Strings cannot be modified directly. Trying to change a character will have no effect.
// ===============

// var str = 'Hi';
// console.log(str[0]); // Output: H
// str[0] = 'h'; // This does not change the string, as strings are immutable.
// console.log(str);  // Output: Hi
// str = 'hi';
// console.log("after reassigning str : " + str);  // Output: Hi

// ===============
// Length of String
// The length property returns the number of characters in a string.
// ===============

// console.log('abc'.length);  // Output: 3

// Length is a property, not a function, so we don't use parentheses like length()

// ===============
// String Case Conversion
// Convert a string to upper case and lower case.
// ===============

// console.log("abcd".toUpperCase());  // Output: ABCD
// console.log("ABCbcd".toLowerCase());  // Output: abcbcd

// ===============
// String Search Methods
// indexOf() method returns the index of the first occurrence of a substring.
// ===============

// console.log('abcabc'.indexOf('b'));  // Output: 1
// console.log('abcabc'.indexOf('z'));  // Output: -1 (not found)

// ===============
// Includes Method
// The includes() method checks if a string contains a specific substring.
// ===============

// console.log("Widget with id".includes("Widget")); // true
// console.log("Hello".includes("Bye")); // false

// // // The optional second argument of str.includes is the position to start searching from:
// console.log("Widget".includes("id")); // true
// console.log("Widget".includes("id", 3)); // false, from position 3 there is no "id"

// ===============
// StartsWith and EndsWith Methods
// The methods str.startsWith and str.endsWith do exactly what they say:
// ===============

// console.log("Widget".startsWith("Wid")); // true, "Widget" starts with "Wid"
// console.log("Widget".endsWith("get"));   // true, "Widget" ends with "get"
// ctrl + f5
// ctrl +/
// ===============
// String Slicing Methods
// The slice() method extracts a section of a string and returns it as a new string.
// ===============
// a b c d e d           f    g   g
// 0 1 2 3 4 5 6 7 8
//-9  -8  -7  -6 -5 -4  -3   -2  -1
// console.log("abcdedfgg".slice(2));  // Output: cdefgg
// console.log("abcdedfgg".slice(1, 6));  // Output: bcde
// console.log("abcdedfgg".slice(-2));  // Output: gg
// console.log("abcdedfgg".slice(1, 4));  // Output: bcd
// console.log("abcdedfgg".slice(6, 1));  // no out put always left to right

// ===============
// Substring Method
// The substring() method extracts characters from a string between two specified indices.
// Swaps start and end values if start > end
// ===============
// s t r i n g i f y
// 0 1 2 3 4 5 6 7 8
// var str = "stringify";
// console.log(str.substring(2, 6)); // Output: ring
// console.log(str.substring(6, 2)); // Output: ring  substring() treats the indices as positions where the substring starts and ends, it automatically swaps the indices if the startIndex is greater than endIndex.
// console.log(str.substring(5, 1)); // Output: tring
// console.log(str.substring(-5, 1)); // negative is treated as zero

// ===============
// Comparing Strings
// Strings in JavaScript are compared lexicographically, character by character.
// ===============

// console.log("abc".codePointAt(0)); // Output: 97
// console.log("A".codePointAt(0)); // Output: 65

// ===============
// Type Conversion to String
// Strings can be created from other data types using the String() function.
// ===============

// console.log(String(123));  // Output: '123'
// console.log(String(4.5));  // Output: '4.5'

// ===============
// String Concatenation
// Strings can be concatenated using the + operator or the concat() method.
// ===============

// var str1 = 'hi';
// str1 += 'say hello';
// console.log(str1);  // Output: say hello

// // str1 += 7;
// // console.log(str1);  // Output: say hello7

// console.log('hello'.concat(' ', 'world'));  // Output: hello world

// ===============
// String Split
// The split() method splits a string into an array of substrings.
// ===============

// console.log("abcdedf".split('d')); // Output: [ 'abc', 'ef' ]
// console.log("abcdedf adf asdf".split(' ')); // Output: [ 'abcdedf', 'adf', 'asdf' ]
// =================
// let url = "https://example.com/?name=John Doe";

// // Encoding
// let encoded = encodeURIComponent(url);
// console.log(encoded); // Encodes special characters

// // Decoding
// let decoded = decodeURIComponent(encoded);
// console.log(decoded); // Decodes back to original
// ===================
// Loops in string
// -------------------

// let str = "hello";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }
// --------------------
// let str = "hello";

// for (let ch of str) {
//   console.log(ch);
// }

// -----------------
// let str = "hello";
// let i = 0;

// while (i < str.length) {
//   console.log(str[i]);
//   i++;
// }
// =============
// let str = "javascript";

// for (let i = 0; i < str.length; i++) {
//   console.log(i, str[i]);
// }
// =========

// var str = "hello world"
// for (var ch of str) {
//     console.log(ch);
// }

// // ===============
// // Reverse a String
// // A string can be reversed by splitting it into an array of characters, reversing the array, and joining it back into a string.
// // ===============

// var s = "this is a string";
// var p = "";
// for (var i = s.length - 1; i >= 0; i--) {
//     p = p + s[i];
// }
// console.log(p);  // Output: gnirts a si siht
// ====================
// Count vowels
// let str = "education";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   if ("aeiou".includes(str[i])) {
//     count++;
//   }
// }
// console.log(count);

console.log("a".includes("e"));//i = 0 
console.log("aeiou".includes("e"));//i = 0 
console.log("aeiou".includes("ae"));
console.log("aeiou".includes("xi"));
console.log("aeiou".includes("aeiou"));

// // ===============
// Assignment

// 6. Find the Length of a String
// Write a function that takes a string as input and returns its length.

// 7. Count Vowels in a String
// Write a function that counts how many vowels(a, e, i, o, u) are in a given string.

// Make sure to handle both lowercase and uppercase letters.
// 8. Check Palindrome
// Write a function that checks if a given string is a palindrome.

// A palindrome is a word that reads the same forwards and backwards(e.g., "madam").
//     Return "Palindrome" if the string is a palindrome, otherwise return "Not Palindrome".
// 9. Convert a String to Lowercase or Uppercase
// Write a function that takes a string and converts it to either all lowercase or all uppercase, based on user input.

// If the user provides the argument "lower", convert the string to lowercase.
// If the user provides the argument "upper", convert the string to uppercase.
// 10. Check if a Number is Divisible by 3 and 5
// Write a function that takes a number and checks if it is divisible by both 3 and 5.

// If it is divisible by both, return "Divisible by 3 and 5".
// If it is divisible by only one, return "Divisible by 3" or "Divisible by 5".
// If it is divisible by neither, return "Not Divisible by 3 or 5".
