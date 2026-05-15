/*
============================================================
SET IN JAVASCRIPT - TEACHING MATERIAL
============================================================

What is Set?
------------
A Set is a built-in JavaScript object used to store UNIQUE values.

Important:
----------
Set does not allow duplicate values.

Syntax:
-------
const setName = new Set();

Common Set Methods:
-------------------
add(value)       -> Adds a value
delete(value)    -> Deletes a value
has(value)       -> Checks if value exists
clear()          -> Removes all values
size             -> Gives total unique values

============================================================
*/

/*
============================================================
1. Creating an Empty Set
============================================================
*/
// const numbersSet = new Set();

// console.log("Empty Set:", numbersSet);

/*
Output:
Empty Set: Set(0) {}

Explanation:
An empty Set is created using new Set().
*/

/*
============================================================
2. Adding Values in Set using add()
============================================================*/

// const numbersSet = new Set();

// numbersSet.add(10);
// numbersSet.add(20);
// numbersSet.add(30);

// console.log("After adding values:", numbersSet);
/*
Output:
Set(3) { 10, 20, 30 }

Explanation:
add() method is used to add values into Set.
*/

/*
============================================================
3. Set Does Not Allow Duplicate Values
============================================================*/

// const duplicateSet = new Set();

// duplicateSet.add(10);
// duplicateSet.add(20);
// duplicateSet.add(10);
// duplicateSet.add(30);
// duplicateSet.add(20);

// console.log("Duplicate values ignored:", duplicateSet);

/*
Output:
Set(3) { 10, 20, 30 }

Explanation:
10 and 20 were added more than once.
But Set stores each value only once.
*/

/*
============================================================
4. Creating Set Directly from Array
============================================================*/

// const nums = [10, 20, 30, 10, 40, 20];

// const uniqueNums = new Set(nums);

// console.log("Original Array:", nums);
// console.log("Unique values using Set:", uniqueNums);

/*
Output:
Original Array: [10, 20, 30, 10, 40, 20]
Unique values using Set: Set(4) { 10, 20, 30, 40 }

Explanation:
When an array is passed to Set, duplicate values are removed.
*/

/*
============================================================
5. Checking Size of Set
============================================================*/

// const fruits = new Set(["Apple", "Banana", "Mango", "Apple"]);

// console.log("Fruits Set:", fruits);
// console.log("Size of Set:", fruits.size);

/*
Output:
Fruits Set: Set(3) { 'Apple', 'Banana', 'Mango' }
Size of Set: 3

Explanation:
size property gives the number of unique values in Set.
*/

/*
============================================================
6. Checking Value Exists using has()
============================================================*/

// const cities = new Set(["Delhi", "Mumbai", "Bangalore"]);

// console.log(cities.has("Delhi"));
// console.log(cities.has("Pune"));

/*
Output:
true
false

Explanation:
has() checks whether a value exists inside the Set.
It returns true or false.
*/

/*
============================================================
7. Deleting a Value using delete()
============================================================*/

// const colors = new Set(["Red", "Blue", "Green"]);

// console.log("Before delete:", colors);

// colors.delete("Blue");

// console.log("After delete:", colors);

/*
Output:
Before delete: Set(3) { 'Red', 'Blue', 'Green' }
After delete: Set(2) { 'Red', 'Green' }

Explanation:
delete(value) removes a specific value from Set.
*/

/*
============================================================
8. Clearing All Values using clear()
============================================================*/

// const students = new Set(["Amit", "Ravi", "Neha"]);

// console.log("Before clear:", students);

// students.clear();

// console.log("After clear:", students);

/*
Output:
Before clear: Set(3) { 'Amit', 'Ravi', 'Neha' }
After clear: Set(0) {}

Explanation:
clear() removes all values from Set.
*/

/*
============================================================
9. Looping Through Set using for...of
============================================================*/

// const languages = new Set(["JavaScript", "Python", "Java"]);

// console.log("Languages:");

// for (let language of languages) {
//   console.log(language);
// }

/*
Output:
JavaScript
Python
Java

Explanation:
for...of loop is commonly used to iterate over Set values.
*/

/*
============================================================
10. Looping Through Set using forEach()
============================================================*/

// const skills = new Set(["HTML", "CSS", "JavaScript"]);

// console.log("Skills:");

// skills.forEach(function (skill) {
//   console.log(skill);
// });

/*
Output:
HTML
CSS
JavaScript

Explanation:
forEach() can also be used to loop through Set values.
*/

/*
============================================================
11. Convert Set into Array using Array.from()
============================================================*/

// const marksSet = new Set([80, 90, 70, 80, 60]);

// const marksArray = Array.from(marksSet);

// console.log("Set:", marksSet);
// console.log("Array from Set:", marksArray);

/*
Output:
Set: Set(4) { 80, 90, 70, 60 }
Array from Set: [80, 90, 70, 60]

Explanation:
Array.from() converts Set into Array.
*/

/*
============================================================
12. Convert Set into Array using Spread Operator
============================================================*/

// const idsSet = new Set([101, 102, 103, 101]);

// const idsArray = [...idsSet];

// console.log("Set:", idsSet);
// console.log("Array using spread:", idsArray);

/*
Output:
Set: Set(3) { 101, 102, 103 }
Array using spread: [101, 102, 103]

Explanation:
Spread operator ... is a short and common way to convert Set into Array.
*/

/*
============================================================
13. Remove Duplicate Values from Array
============================================================*/

// const numbers = [1, 2, 3, 2, 4, 1, 5, 3];

// const uniqueNumbers = [...new Set(numbers)];

// console.log("Original Array:", numbers);
// console.log("Unique Array:", uniqueNumbers);

/*
Output:
Original Array: [1, 2, 3, 2, 4, 1, 5, 3]
Unique Array: [1, 2, 3, 4, 5]

Explanation:
Step 1:
new Set(numbers) removes duplicate values.

Step 2:
[...new Set(numbers)] converts Set back into Array.
*/

/*
============================================================
14. Set with Strings
============================================================*/

// const nameSet = new Set();

// nameSet.add("Ashok");
// nameSet.add("Vandana");
// nameSet.add("Ashok");

// console.log(nameSet);

/*
Output:
Set(2) { 'Ashok', 'Vandana' }

Explanation:
"Ashok" was added twice.
But Set stores it only once.
*/

/*
============================================================
15. Set with Mixed Data Types
============================================================*/

// const mixedSet = new Set();

// mixedSet.add(100);
// mixedSet.add("100");
// mixedSet.add(true);
// mixedSet.add(null);
// mixedSet.add(undefined);

// console.log("Mixed Set:", mixedSet);

/*
Output:
Set(5) { 100, '100', true, null, undefined }

Explanation:
100 and "100" are different values.
One is number and the other is string.
*/

/*
============================================================
16. Set with Objects
============================================================*/

// const objSet = new Set();

// const user1 = { name: "Ashok" };
// const user2 = { name: "Ashok" };

// objSet.add(user1);
// objSet.add(user2);

// console.log(objSet);

/*
Output:
Set(2) { { name: 'Ashok' }, { name: 'Ashok' } }

Explanation:
Objects are compared by reference, not by value.

Although user1 and user2 have the same data,
they are two different objects in memory.
So Set stores both.
*/

/*
============================================================
17. Same Object Reference in Set
============================================================*/

// const sameObjSet = new Set();

// const person = { name: "Ravi" };

// sameObjSet.add(person);
// sameObjSet.add(person);
// sameObjSet.add(person);

// console.log(sameObjSet);

/*
Output:
Set(1) { { name: 'Ravi' } }

Explanation:
Here the same object reference is added multiple times.
So Set stores it only once.
*/

/*
============================================================
18. Practical Example: Remove Duplicate Student Names
============================================================*/

// const studentNames = ["Amit", "Ravi", "Neha", "Amit", "Pooja", "Ravi"];

// const uniqueStudentNames = [...new Set(studentNames)];

// console.log("All Students:", studentNames);
// console.log("Unique Students:", uniqueStudentNames);

/*
Output:
All Students: [ 'Amit', 'Ravi', 'Neha', 'Amit', 'Pooja', 'Ravi' ]
Unique Students: [ 'Amit', 'Ravi', 'Neha', 'Pooja' ]

Explanation:
Set removes repeated student names.
*/

/*
============================================================
19. Practical Example: Check Duplicate Email
============================================================*/

// const registeredEmails = new Set();

// function registerEmail(email) {
//   if (registeredEmails.has(email)) {
//     console.log(email + " is already registered");
//   } else {
//     registeredEmails.add(email);
//     console.log(email + " registered successfully");
//   }
// }

// registerEmail("ashok@gmail.com");
// registerEmail("vandana@gmail.com");
// registerEmail("ashok@gmail.com");

/*
Output:
ashok@gmail.com registered successfully
vandana@gmail.com registered successfully
ashok@gmail.com is already registered

Explanation:
Before adding an email, we check whether it already exists.
This is a common real-time use case of Set.
*/

/*
============================================================
20. Practical Example: Count Unique Characters in String
============================================================*/

// const word = "javascript";

// const uniqueCharacters = new Set(word);

// console.log("Word:", word);
// console.log("Unique Characters:", uniqueCharacters);
// console.log("Number of Unique Characters:", uniqueCharacters.size);

/*
Output:
Word: javascript
Unique Characters: Set(9) { 'j', 'a', 'v', 's', 'c', 'r', 'i', 'p', 't' }
Number of Unique Characters: 9

Explanation:
A string can be passed to Set.
Set treats each character as a separate value.
Duplicate characters are removed.
*/

/*
============================================================
21. Practical Example: Find Common Values Between Two Arrays
============================================================

const arr1 = [10, 20, 30, 40];
const arr2 = [30, 40, 50, 60];

const set2 = new Set(arr2);

const commonValues = arr1.filter(function (value) {
  return set2.has(value);
});

console.log("Common Values:", commonValues);

Output:
Common Values: [30, 40]

Explanation:
1. Convert second array into Set.
2. Loop first array using filter().
3. Check if each value exists in second Set.
*/

/*
============================================================
22. Practical Example: Find Unique Values from Two Arrays
============================================================

const array1 = [1, 2, 3];
const array2 = [3, 4, 5];

const combinedUniqueValues = [...new Set([...array1, ...array2])];

console.log("Combined Unique Values:", combinedUniqueValues);

Output:
Combined Unique Values: [1, 2, 3, 4, 5]

Explanation:
Both arrays are combined first.
Then Set removes duplicate values.
*/

/*
============================================================
23. Difference Between Array and Set
============================================================

Array:
------
1. Allows duplicate values
2. Values are accessed using index
3. Good when order and index are important

Set:
----
1. Does not allow duplicate values
2. Values are not accessed using index
3. Good when uniqueness is important

Example:

const arrayExample = [10, 20, 10, 30];
const setExample = new Set([10, 20, 10, 30]);

console.log("Array Example:", arrayExample);
console.log("Set Example:", setExample);

Output:
Array Example: [10, 20, 10, 30]
Set Example: Set(3) { 10, 20, 30 }
*/

/*
============================================================
24. Important Set Methods Summary
============================================================

new Set()
Creates a new Set.

add(value)
Adds a value into Set.

delete(value)
Removes a specific value from Set.

has(value)
Checks whether a value exists or not.

clear()
Removes all values from Set.

size
Returns number of unique values.

forEach()
Loops through Set values.

for...of
Loops through Set values.
*/

/*
============================================================
25. Mini Practice Questions
============================================================

Practice 1:
Create a Set of numbers and add 10, 20, 30, 10.
Print the Set.

Expected Output:
Set(3) { 10, 20, 30 }


Practice 2:
Create an array with duplicate names.
Remove duplicate names using Set.


Practice 3:
Create a Set of emails.
Before adding a new email, check if email already exists.


Practice 4:
Find how many unique characters are present in "programming".


Practice 5:
Find common values between:
[1, 2, 3, 4]
[3, 4, 5, 6]
*/

/*
============================================================
26. Simple Interview Questions
============================================================

Q1. What is Set in JavaScript?
Answer:
Set is a built-in object that stores unique values.

Q2. Does Set allow duplicate values?
Answer:
No, Set does not allow duplicate values.

Q3. Which method is used to add value in Set?
Answer:
add()

Q4. Which method checks whether value exists in Set?
Answer:
has()

Q5. Which property gives number of values in Set?
Answer:
size

Q6. Can Set store objects?
Answer:
Yes, Set can store objects.

Q7. Are two objects with same data treated as duplicate in Set?
Answer:
No. Objects are compared by reference.

Q8. How can we remove duplicates from an array?
Answer:
Use [...new Set(array)].
*/

/*
============================================================
END OF SET TOPIC
============================================================
*/
