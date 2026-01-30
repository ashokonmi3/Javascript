/************************************************************
 * JAVASCRIPT CLOSURES
 * CONCEPTS, READING NOTES, EXAMPLES, AND INTERVIEW Q&A
 ************************************************************/

/*
------------------------------------------------------------
WHAT IS A CLOSURE IN JAVASCRIPT?
------------------------------------------------------------
A closure is a function that "remembers" its lexical environment
even when the function is executed outside that environment.

This means:
- A function can access variables from its own scope
- It can also access variables from its outer (parent) scope
- These variables remain accessible even after the outer function
  has finished execution

Closures are important because they enable:
- Data encapsulation
- Private variables
- State preservation
- Powerful patterns like callbacks, modules, and event handlers
*/


/*
------------------------------------------------------------
BASIC CLOSURE EXAMPLE
------------------------------------------------------------
An inner function accessing variables from outer scopes.
*/

// var a = 10; // global variable

// function outer() {
//     var b = 20; // variable inside outer function

//     function inner() {
//         console.log(a); // accessing global variable
//         console.log(b); // accessing outer function variable
//     }

//     inner(); // calling inner function inside outer
// }

// outer(); // prints 10 and 20

/*
Explanation:
- inner() has access to:
  - its own scope
  - outer() scope (variable b)
  - global scope (variable a)
- This access chain is what enables closure behavior.
*/


/*
------------------------------------------------------------
RETURNING A CLOSURE
------------------------------------------------------------
A function can return another function.
The returned function still remembers the variables
from where it was created.
*/

// var a = 10;

// function outer() {
//     var b = 20;

//     var inner = function () {
//         console.log(a); // global variable
//         console.log(b); // outer function variable
//     };

//     return inner; // returning inner function
// }

// var innerFn = outer(); // outer() finishes execution
// innerFn(); // still prints 10 and 20

/*
Explanation:
- outer() execution is completed
- Normally, local variables would be destroyed
- But because innerFn references them, they stay in memory
- This preserved environment is called a closure
*/


/*
------------------------------------------------------------
CLOSURE WITH MODIFIED VARIABLES
------------------------------------------------------------
Closures can read and modify variables from outer scopes.
*/

// var a = 10;

// function outer() {
//     var b = 20;

//     var inner = function () {
//         a++; // modifying global variable
//         b++; // modifying outer variable
//         console.log(a);
//         console.log(b);
//     };

//     return inner;
// }

// var innerFn1 = outer();
// innerFn1(); // a = 11, b = 21

// var innerFn2 = outer();
// innerFn2(); // a = 12, b = 21

/*
Important notes:
- Global variable `a` is shared across all closures
- Each call to outer() creates a NEW closure with a NEW `b`
- Closures preserve state per function instance
*/


/*
------------------------------------------------------------
CLOSURE IN ASYNCHRONOUS CODE
------------------------------------------------------------
Closures are heavily used in asynchronous programming.
*/

// var i = 10;

// setTimeout(function () {
//     console.log(i);
// }, 1000);

/*
The callback remembers `i` from its lexical scope.
*/


/*
------------------------------------------------------------
CLOSURE ISSUE WITH var IN LOOPS
------------------------------------------------------------
Using var inside loops with asynchronous callbacks
often causes unexpected results.
*/

// for (var i = 0; i < 5; i++) {
//     console.log(i);

//     setTimeout(function () {
//         console.log("setTimeout:", i);
//     }, 1000);
// }

// console.log(i);

/*
Explanation:
- var is function-scoped, not block-scoped
- There is only ONE `i` shared by all callbacks
- By the time setTimeout runs, the loop has completed
- Final value of i is 5, so 5 is printed multiple times
*/


/*
------------------------------------------------------------
SOLUTION USING let (BLOCK SCOPE)
------------------------------------------------------------
Each iteration gets its own `i`.
*/

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

/*
Explanation:
- let is block-scoped
- Each loop iteration creates a new binding
- Closures capture the correct value
*/


/*
------------------------------------------------------------
SOLUTION USING CLOSURE (IIFE)
------------------------------------------------------------
Manually capturing the value using an IIFE.
*/

// for (var i = 0; i < 5; i++) {
//     (function (currentValue) {
//         setTimeout(function () {
//             console.log(currentValue);
//         }, 1000);
//     })(i);
// }

/*
Explanation:
- IIFE creates a new scope
- currentValue captures the value of i
- setTimeout callback uses the captured value
*/


/*
------------------------------------------------------------
MODULE PATTERN USING CLOSURE
------------------------------------------------------------
Closures allow creation of private variables.
*/

// function createPerson() {
//     var firstName = "John";
//     var lastName = "Doe";

//     return {
//         getFirstName: function () {
//             return firstName;
//         },
//         getLastName: function () {
//             return lastName;
//         },
//         setFirstName: function (newName) {
//             firstName = newName;
//         }
//     };
// }

// var person = createPerson();

// console.log(person.getFirstName()); // John
// person.setFirstName("Jane");
// console.log(person.getFirstName()); // Jane

/*
Explanation:
- firstName and lastName are private
- They cannot be accessed directly
- Only exposed through closure-based methods
*/


/*
------------------------------------------------------------
CLOSURE FOR DATA ENCAPSULATION
------------------------------------------------------------
Closures help maintain state safely.
*/

function counter() {
    var count = 0; // private variable

    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        getCount: function () {
            return count;
        }
    };
}

var myCounter = counter();

console.log(myCounter.increment()); // 1
console.log(myCounter.increment()); // 2
console.log(myCounter.decrement()); // 1
console.log(myCounter.getCount());  // 1

/*
Explanation:
- count cannot be accessed directly
- State is preserved across calls
- This is a classic real-world closure use case
*/


/*
------------------------------------------------------------
CLOSURE IN LOOPS (ADDITIONAL EXAMPLE)
------------------------------------------------------------
Capturing loop values using closures.
*/

// for (var i = 0; i < 3; i++) {
//     (function (index) {
//         setTimeout(function () {
//             console.log(index);
//         }, 1000);
//     })(i);
// }

/*
Explanation:
- Each IIFE call creates a new closure
- index stores the value at that moment
- setTimeout prints correct values
*/


/*
------------------------------------------------------------
COMMON MISCONCEPTIONS ABOUT CLOSURES
------------------------------------------------------------
- Closures do NOT copy variable values
- They keep references to variables
- Closures do NOT leak memory by default
- Memory is released when closures are no longer referenced
*/


/*
------------------------------------------------------------
WHEN TO USE CLOSURES
------------------------------------------------------------
- Maintaining state between function calls
- Creating private variables
- Handling asynchronous callbacks
- Implementing modules and factories
- Event handling and timers
*/


/*
------------------------------------------------------------
INTERVIEW QUESTIONS AND ANSWERS
------------------------------------------------------------

Q: What is a closure in JavaScript?
A: A closure is a function that remembers its lexical scope,
   even when executed outside that scope.

Q: Why are closures useful?
A: They enable data encapsulation, state management,
   private variables, and asynchronous programming patterns.

Q: How do closures work with setTimeout?
A: The callback remembers variables from the scope
   in which it was created, even after execution is delayed.

Q: Why does var cause issues in loops with closures?
A: var is function-scoped, so all closures share the same variable.
   let creates a new binding per iteration.

Q: Difference between closures with var and let?
A: var shares a single variable across closures;
   let creates a new variable per block/iteration.
*/


/*
------------------------------------------------------------
FINAL NOTES
------------------------------------------------------------
- Closures are a core concept in JavaScript
- They are heavily used in real-world applications
- Understanding closures makes async code easier
- Mastering closures simplifies learning frameworks
------------------------------------------------------------
END OF JAVASCRIPT CLOSURE CONTENT
------------------------------------------------------------
*/
