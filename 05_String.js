// ===============
// Strings in JavaScript
// In JavaScript, textual data is stored as strings. There is no separate type for a single character.
// Strings are immutable, meaning they cannot be changed after they are created.
// ===============

// var single = 'single-quoted';
// var double = "double-quoted";
// console.log(single);  // Output: single-quoted
// console.log(double);  // Output: double-quoted

// ===============
// Template Literals
// Template literals are enclosed in backticks (``) and can span multiple lines.
// ===============

// var str = `write
// over multiple lines`;
// console.log(str);  // Output: write
// // over multiple lines
// console.log(str == 'write over multiple lines'); // true

// // Alternative concatenation using + operator
// var str2 = 'written ' +
//     'over ' +
//     'multiple ' +
//     'lines';

// console.log(str2);  // Output: written over multiple lines

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
// console.log('Abc'.charAt(1));  // Output: b
// console.log('abc'.charAt(0));  // Output: a

// // String indexing using array-like syntax (returns a string, not a character)
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

// // The optional second argument of str.includes is the position to start searching from:
// console.log("Midget".includes("id")); // true
// console.log("Midget".includes("id", 3)); // false, from position 3 there is no "id"

// ===============
// StartsWith and EndsWith Methods
// The methods str.startsWith and str.endsWith do exactly what they say:
// ===============

// console.log("Widget".startsWith("Wid")); // true, "Widget" starts with "Wid"
// console.log("Widget".endsWith("get"));   // true, "Widget" ends with "get"

// ===============
// String Slicing Methods
// The slice() method extracts a section of a string and returns it as a new string.
// ===============

// console.log("abcdedfgg".slice(2));  // Output: cdefgg
// console.log("abcdedfgg".slice(1, 6));  // Output: bcde
// console.log("abcdedfgg".slice(-2));  // Output: gg
// console.log("abcdedfgg".slice(1, 4));  // Output: bcd

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

// ===============
// Comparing Strings
// Strings in JavaScript are compared lexicographically, character by character.
// ===============

// console.log("a".codePointAt(0)); // Output: 97
// console.log("A".codePointAt(0)); // Output: 65

// ===============
// Type Conversion to String
// Strings can be created from other data types using the String() function.
// ===============

// console.log(String(123));  // Output: '123'
// console.log(String(4.5));  // Output: '4.5'
// console.log(String({ prop: 123, prop1: "abc" }));  // Output: '[object Object]'

// ===============
// String Concatenation
// Strings can be concatenated using the + operator or the concat() method.
// ===============

// var str1 = '';
// str1 += 'say hello';
// console.log(str1);  // Output: say hello

// str1 += 7;
// console.log(str1);  // Output: say hello7

// console.log('hello'.concat(' ', 'world'));  // Output: hello world

// ===============
// String Split
// The split() method splits a string into an array of substrings.
// ===============

// console.log("abcdedf".split('d')); // Output: [ 'abc', 'ef' ]
// console.log("abcdedf adf asdf".split(' ')); // Output: [ 'abcdedf', 'adf', 'asdf' ]
// =================
let url = "https://example.com/?name=John Doe";

// Encoding
let encoded = encodeURIComponent(url);
console.log(encoded); // Encodes special characters

// Decoding
let decoded = decodeURIComponent(encoded);
console.log(decoded); // Decodes back to original

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
// // ===============
