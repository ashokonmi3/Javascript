// ===============
//  Introduction to Arrays in JavaScript
// Arrays are a fundamental data structure in JavaScript that allow us to store and
// manage a collection of items.
// Each item (or element) is stored in a specific position, or index, which starts at 0.
// Arrays enable us to group related data together and perform operations on them more efficiently.
// ===============

// ===============
//  Why Do We Need Arrays?
// Without arrays, we would need to create individual variables for each item of data.
// If we had a list of 100 items, this would mean 100 separate variables.
// Arrays allow us to manage collections of data in a more structured and efficient way.
// ===============

// ===============
//  Importance of Arrays
// 1. **Efficient Data Management**: Arrays help store multiple values in a single variable.
// 2. **Easy Access to Elements**: Elements in an array can be accessed using their index, making retrieval quick.
// 3. **Looping and Processing**: Arrays can be easily looped over, allowing for operations on each item (such as calculations or transformations).
// 4. **Dynamic Size**: Arrays can be resized dynamically, meaning you can add or remove items as needed.
// ===============

// ===============
//  Declaring and Initializing Arrays
// In JavaScript, arrays can be declared and initialized in various ways.
// ===============

// Empty Array Declaration
// var emptyArray1 = []; // Using literal notation (most common)
// var emptyArray2 = new Array(); // Using the Array constructor
// console.log(emptyArray1, emptyArray2); // Output: [], []
// // --------------
// // // Array with Specific Size
// var arrayWithSize = new Array(10);
// console.log(arrayWithSize.length); // Output: 10
// ---------------
// Array with Initial Values
// var languages = ["JavaScript", "Python", "Java"];
// console.log(languages); // Output: ["JavaScript", "Python", "Java"]

// // // Accessing Elements
// console.log(languages[0]); // Access the first element: "JavaScript"
// console.log(languages[1]); // Access the third element: "Java"
// console.log(languages[2]); // Access an undefined index: undefined

// // // // // // // // // Adding Elements to an Array
// languages[3] = "Ruby";
// console.log(languages); // Output: ["JavaScript", "Python", "Java", "Ruby"]

// // // // Checking if a Variable is an Array
// console.log(Array.isArray(languages)); // Output: true
// console.log(Array.isArray("Java")); // Output: false

// ===============
//  Array Length and Resizing
// The length property reflects the number of elements in an array.
// You can also change it to add or remove elements from the end of the array.
// ===============

// var arr = ["a", "b", "c", "d"];
// console.log(arr.length); // Output: 4

// // // // Setting a New Length (Truncating the Array)
// arr.length = 2;
// console.log(arr); // Output: ['a', 'b']

// // // // // Adding an Element to the End
// arr[arr.length] = "e"; //arr[2]
// console.log(arr); // Output: ['a', 'b', 'e']

// ===============
//  Array Methods for Adding and Removing Elements
// ===============

// push(): Adds an element to the end of the array
// var arr = ["a", "b", "c", "d"];
// arr.push("f");
// console.log(arr); // Output: ['a', 'b', 'e', 'f']
// // -----------------------
// pop(): Removes the last element and returns it
// var arr = ["a", "b", "c", "d"];

// var lastElement = arr.pop();
// console.log(lastElement); // Output: 'f'
// console.log(arr); // Output: ['a', 'b', 'e']
// ==============================
// // // unshift(): Adds an element to the beginning of the array
// var arr = ["a", "b", "c", "d"];
// arr.unshift("z");
// console.log(arr); // Output: ['z', 'a', 'b', 'e']
// -------------------
// // shift(): Removes the first element and returns it
// var arr = ["a", "b", "c", "d"];
// var firstElement = arr.shift();
// console.log(firstElement); // Output: 'z'
// console.log(arr); // Output: ['a', 'b', 'e']

// ===============
//  Array Methods for Manipulating Elements
// ===============

// splice(): Can add, remove, or replace elements at a specific position
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi"); // At position 2, add 2 new elements
// //0 delete 0 elements
// console.log(fruits); // Output: ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]

// -------------------
// // At position 3, replace 1 element with 1 new element
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(3, 1, "Peach");
// console.log(fruits); // Output: ["Banana", "Orange", "Lemon", "Peach", "Apple", "Mango"]
// ----------------
// // slice(): Returns a shallow copy of a portion of an array into a new array

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var someFruits = fruits.slice(1, 3);
// console.log(someFruits); // Output: ["Orange", "Lemon", "Peach"]

// // ===============
// //  Array Methods for Searching and Sorting
// // ===============
// sort(): Sorts the elements of an array in place and returns the array ALWASYS SORT in STRING FORM
// reverse(): Reverses the elements of an array in place
// indexOf(): Returns the first index at which a given element is found

// var numbers = [5, 2, 9, 1, 5, 6];
// numbers.sort();
// console.log(numbers);
// numbers.reverse();
// console.log(numbers); // Output: [9, 6, 5, 5, 2, 1]

// var numbers = [5, 2, 9, 1, 5, 6];

// console.log(numbers.indexOf(6)); // Output: 2

// ===============
//  Array Iteration
// Looping through arrays is common in JavaScript, especially when processing or transforming data.
// ===============

// Using a for loop
var arrayItems = ["A", "B", "C"];
// for (var i = 0; i < arrayItems.length; i++) {
//   console.log(arrayItems[i]);
// }

// //  Using for...of loop
// for (let item of arrayItems) {
//   console.log(item);
// }

// // Using forEach()
// arrayItems.forEach(function (item) {
//   console.log(item);
// });
// ================
// const colors = ["Red", "Green", "Blue", "magneta"];
// for(const color of colors){
// }
// console.log(colors);
// console.log(colors.length);

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// console.log(arr1);
// console.log(arr2);

// var arr = [
//   [100, 12, 3, 14],
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// arr.forEach((element) => {
//   console.log(element);
// });

// -----------
//  For...Of Loop (for arrays or iterables)
// Loops through values of an iterable like arrays or strings
// Syntax: for (value of iterable) { statement }
// ===============

// let colors = ["red", "green", "blue"];
// for (let x of colors) {
//   console.log(x); // // ints each color in the array
// }
// Output: red, green, blue

// ======================
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled);
// const triple = numbers.map((x) => x * 3);
// console.log("triple", triple);
// const square = numbers.map((y) => y ** 2);
// console.log("square", square);

// const languages = ["java", "python", "javascript"];
// const upperCase = languages.map((lang) => lang.toUpperCase());
// console.log("upperCase ", upperCase);

// const languages = ["java", "python", "javascript"];
// const upperCase = languages.map((lang, i) => {
//   return i + " : " + lang;
// });
// console.log("upperCase ", upperCase);

// ==============================
// Filter
// const numbers = [1, 2, 3, 4, 5];
// const evenNumber = numbers.filter((num) => num % 2 == 0);
// console.log(evenNumber);
// const evenNumberMap = numbers.map((num) => num % 2 == 0);
// console.log(evenNumberMap);
// -----------------------

// const numbers = [1, 2, 3, 4, 5];
// const evenNumber = numbers.filter((num) => num > 2);
// console.log(evenNumber);

// ===========================
// Reduce
// Sum
// product
// max value
// min val
// count

// const numbers = [1, 2, 3, 4, 5];
// // const total = numbers.reduce((sum, num) => {
// //   return sum + num;
// // }, 0);

// const total = numbers.reduce((sum, num) => sum + num, 0);

// console.log(total);

// initial value =0

// step    sum   num   result
//   1     0      1      1
// 2       1      2      3
// 3       3      3      6
// 4       6      4      10
//5        10     5      15

// ======================

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => {
//   console.log(num);
// });

// // numbers.forEach((num, i) => {
// //   console.log(num + ":" + i);
// // });

// numbers.forEach((num) => {
//   console.log(num * 2);
// });
// ===============
//  Interview Questions and Answers on Arrays
// ===============

// Q1. What is an array in JavaScript, and how do you declare one?
// Answer: An array is a collection of items stored at contiguous memory locations, allowing multiple values in a single variable.
// Syntax examples:
// var arr = [];         // Empty array
// var arr = [1, 2, 3];  // Array with initial values

// Q2. How can you check if a variable is an array in JavaScript?
// Answer: Using Array.isArray(variableName)
// Example:
// console.log(Array.isArray(arrayItems)); // Output: true

// Q3. Explain the difference between push() and pop().
// Answer:
// - push() adds an element to the end of an array.
// - pop() removes the last element from an array and returns it.

// Q4. What does the splice() method do?
// Answer: The splice() method can add, remove, or replace elements in an array at a specific position.
// Example:
// fruits.splice(1, 2, "Strawberry", "Blueberry");

// Q5. How can you find the maximum value in an array?
// Answer: Use Math.max with the spread operator (...).
// var numbers = [1, 5, 3, 9, 7];
// var maxNumber = Math.max(...numbers);
// console.log(maxNumber); // Output: 9
// ===============================
/*Assignment 
1.  Check Palindrome or First Mismatch

Problem Statement:
Check whether the given array is palindrome or not.
- If palindrome → return sum of all elements
- If not palindrome → return index of first mismatch from left

Example:
Input:
[1,2,3,2,1]

Output:
9

Input:
[1,2,3,2,5]

Output:
0
---------------------------------------------
2. Reverse Even Length Words

Problem Statement:
If a word contains even number of characters, reverse it.
If odd number of characters, keep it unchanged.

Example:
Input:
"this isa books of benchs"

Output:
"siht isa skoob of shcneb"

-------------------------------
3. Sort Words Based on Last Character

Problem Statement:
Sort all words based on their last character alphabetically.

Example:
Input:
"apple banana kiwi grape orange"

Output:
"banana orange grape apple kiwi"
-----------------------------------------
4 Remove Words with 3 Repeated Letters

Problem Statement:
Remove words that contain 3 or more consecutive repeated characters.

Example:
Input:
"Sooo excited for this cooool event yesss absolutely"

Output:
"excited for this event absolutely"
------------------------------------------
Problem Statement:
5 Find words that are repeated consecutively in a sentence.

Example:
Input:
"Please please help me me quickly Quickly"

Output:
"Please me Quickly"


-----------------------------------------
Problem Statement:
Count words having Consonant-Vowel-Consonant pattern.

Example:
Input:
"The cat sat on the big red rug with Ben"

Output:
5

*/
function generateUsernames(names) {
  let result = [];
  let count = {};

  for (let name of names) {
    // First time username appears
    if (count[name] === undefined) {
      result.push(name);
      count[name] = 1;
    } else {
      // Username already exists
      let newName = name + count[name];

      result.push(newName);

      // Increase count
      count[name]++;
    }
  }

  return result;
}

// Sample Input
const names = ["john", "john", "john", "josh"];

// Function Call
const output = generateUsernames(names);

// Output
console.log(output);
