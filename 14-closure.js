// ===============
// Closure in JavaScript 
// A closure is a function that "remembers" its lexical environment even when the function is executed outside that environment. It has access to the outer function's variables and parameters even after the outer function has finished executing.
// Closure is important because it allows for data encapsulation, the creation of private variables, and more flexible coding patterns like modules and callbacks.
// ===============

// // Example 1: Basic Closure
// var a = 10; // global variable
// function outer() {
//     var b = 20; // variable inside outer function
//     function inner() {
//         console.log(a); // accessing global variable
//         console.log(b); // accessing outer function's variable

//     }
//     inner(); // calling inner function within outer
// }

// outer(); // prints 10 (global) and 20 (from outer function)

// ====================
// // Example 2: Returning a Closure
// var a = 10;
// function outer() {
//     var b = 20;
//     var inner = function () {
//         console.log(a); // a from global scope
//         console.log(b); // b from outer scope
//     }
//     return inner; // returning inner function
// }

// var innerFn = outer(); // storing returned inner function
// innerFn(); // calling inner function outside its lexical scope
// ========================

// // Explanation of Closure:
// // - `outer()` defines a local variable `b` and an inner function `inner()`, 
// which accesses both `a` (from global scope) and `b` (from outer scope).
// // - When `inner()` is returned and invoked outside `outer()`, it still "remembers" the lexical environment where it was defined. Hence, `a` and `b` are accessible even though `outer()` has finished executing.


// /*
// Example 3: Closure with Modified Variables
// - The inner function retains access to variables from its outer function, even if they are modified.
// */
// var a = 10;

// function outer() {
//     var b = 20;
//     var inner = function () {
//         a++; // modifying global 'a'
//         b++; // modifying 'b' from outer scope
//         console.log(a); // prints modified value of a
//         console.log(b); // prints modified value of b
//     }
//     return inner;
// }

// var innerFn1 = outer(); // closure created
// innerFn1(); // outputs 11 (modified 'a') and 21 (modified 'b')
// var innerFn2 = outer(); // new closure with a fresh b (but 'a' is still modified globally)
// innerFn2(); // outputs 12 (modified 'a') and 21 (new b)

// // Important note: Even though we invoke `outer()` multiple times,
// the global variable `a` is modified globally.
// // Each closure remembers its own `b` value,
// but the global variable `a` is shared across all closures.
// =======================

// /*
// Example 4: Asynchronous Closure with `setTimeout`
// - Closure is also useful when working with asynchronous code like `setTimeout` or `setInterval`.
// */
// var i = 10;
// setTimeout(function () {
//     console.log(i);
// }, 10000);
// =====================

// for (var i = 0; i < 5; i++) {
//     console.log(i);

//     setTimeout(function () {
//         console.log("settimeout " + i); // prints 5, 5, 5, 5, 5 due to closure in asynchronous callback
//     }, 1000);
// }
// console.log(i);
// using var inside a loop with setTimeout leads to an issue because var has function scope, 
// not block scope. So when the setTimeout executes after 1 second, the loop has already completed,
//  and i will have the final value (5), which results in logging 5 five times.
// ======================


// // Correcting this using a closure to capture the current value of `i`
for (var i = 0; i < 5; i++) {
    (function (currentValue) {
        setTimeout(function () {
            console.log(currentValue); // prints 0, 1, 2, 3, 4
        }, 1000);
    })(i);
}


// // ===============
// // Module Pattern Using Closure
// // The module pattern uses closures to create private variables and methods.
// // This pattern is useful for encapsulating functionality and avoiding global namespace pollution.
// // ===============

// function createPerson() {
//     var firstName = "John";
//     var lastName = "Doe";

//     return {
//         getFirstName: function () {
//             return firstName; // Accessing private variable
//         },
//         getLastName: function () {
//             return lastName; // Accessing private variable
//         },
//         setFirstName: function (newName) {
//             firstName = newName; // Modifying private variable
//         }
//     };
// }

// var person = createPerson();
// console.log(person.getFirstName()); // prints "John"
// person.setFirstName("Jane");
// console.log(person.getFirstName()); // prints "Jane"

// // Explanation:
// // - The `firstName` and `lastName` variables are private to the `createPerson` function.
// // - They are not accessible directly from outside, but we can interact with them using the returned methods (i.e., closure-based access).


// // ===============
// // Closure for Data Encapsulation
// // Closure allows us to encapsulate variables and expose only certain functions, creating a form of data privacy.
// // This can be useful in situations where you want to hide internal data and only expose a controlled API.
// // ===============

// function counter() {
//     var count = 0; // private variable

//     return {
//         increment: function () {
//             count++; // incrementing count
//             return count;
//         },
//         decrement: function () {
//             count--; // decrementing count
//             return count;
//         },
//         getCount: function () {
//             return count; // exposing the current count value
//         }
//     };
// }

// var myCounter = counter();
// console.log(myCounter.increment()); // prints 1
// console.log(myCounter.increment()); // prints 2
// console.log(myCounter.decrement()); // prints 1
// console.log(myCounter.getCount()); // prints 1 (private variable 'count' is encapsulated)


// /*
// Example 5: Closure in Loops
// - Closures can also be used in loops to remember values at the time the closure was created.
// */
for (var i = 0; i < 3; i++) {
    (function (index) {
        setTimeout(function () {
            console.log(index); // prints 0, 1, 2 (remembered index value at closure creation)
        }, 1000);
    })(i);
}

// // Explanation:
// // - By using the immediately invoked function expression (IIFE), we capture the current value of `i` at the time of the closure creation.
// // - This allows the setTimeout callback to correctly print the value of `i` at each iteration.


// /*
// Interview Questions:
// 1. What is a closure in JavaScript?
//     - A closure is a function that has access to its own scope, the outer function's scope, and the global scope. It "remembers" the lexical environment in which it was created, even after the outer function has returned.

// 2. Why do we need closures?
//     - Closures are useful for data encapsulation, maintaining state between function calls, and creating private variables/methods in JavaScript.

// 3. How does closure work in asynchronous code (e.g., with `setTimeout`)?
//     - Closures in asynchronous code "remember" the environment in which they were created, allowing access to variables that may have changed after the function was called.

// 4. Can you demonstrate a use case where closures are useful?
//     - A common use case is creating private data in the module pattern, as shown in the example where `createPerson()` creates a person object with private variables.

// 5. How do closures work with loops?
//     - Using closures in loops, such as with `setTimeout`, allows each loop iteration to remember the value of the loop variable at the time the closure was created. This is important to prevent issues where asynchronous functions may reference the loop variable after it has changed.

// 6. What is the difference between `var`, `let`, and `const` in closures?
//     - `var` is function-scoped and can lead to issues with closures in loops (because of its hoisting behavior). `let` and `const` are block-scoped, and they maintain their own bindings in closures inside loops.

// Example:
// ```javascript
// for (let i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i); // Prints 0, 1, 2
//     }, 1000);
// }
//     */
