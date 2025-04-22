// ===============
// What is a Callback in JavaScript?
// A callback function, also known as a higher-order function,
// is a function that is passed to another function (let's call this other function "otherFunction")
// as a parameter, and the callback function is called (or executed) inside the otherFunction.
// 
// Why are Callbacks Needed?
// Callbacks are essential in JavaScript because they allow us to handle asynchronous operations like
// API calls, reading files, or other tasks that take time without blocking the execution of other code.
// Callbacks help maintain asynchronous flow and allow us to define specific actions after a task completes.
// 
// Importance of Callbacks:
// - Callbacks are fundamental for managing asynchronous behavior, such as handling events, timeouts, and AJAX requests.
// - They help break down complex operations into smaller, more manageable tasks.
// ===============

// Basic Example of Callback Function
// A simple example of how a callback function works in JavaScript.

// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback(); // Call the callback function sayGoodbye()
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye); // Output: Hello, Alice Goodbye!

// ===============================

// Anonymous Callback Functions
// You can also pass anonymous functions (functions without names) as callbacks.

// var x = function () {
//     console.log("I am called from inside a function");
// };

// var y = function (callback) {
//     console.log("I am called outside");
//     callback();  // The anonymous function x is passed as a callback
//     console.log("I am called after callback");
// };

// y(x);
// ===============================

// Callback Example with Calculator
// A more practical example with a callback function used for a simple calculator.

// var add = function (a, b) {
//     return a + b;
// };

// var mul = function (a, b) {
//     return a * b;
// };

// var calc = function (a, b, callback) {
//     if (typeof callback === 'function') {
//         return callback(a, b);
//     } else {
//         console.log("Please provide a valid callback function.");
//     }
// };

// console.log(calc(2, 3, add)); // Output: 5
// console.log(calc(2, 3, mul)); // Output: 6

// ===============================

// Fetching Data with Callbacks
// Simulating an asynchronous operation like fetching data from an API using a callback.

// function fetchData(callback) {
//     console.log("Fetching data...");

//     setTimeout(() => {
//         const data = { id: 1, name: "Alice" };
//         callback(data); // displaydata(data) Call the callback with the fetched data
//     }, 10000); // Simulate a 10-second delay
// }

// function displayData(mydata) {
//     console.log("Data received:", mydata);
// }

// fetchData(displayData);

// Output: Fetching data...
//         (after 2 seconds) Data received: { id: 1, name: "Alice" }

// ===============================

// Callback Example with Event Handling
// A callback is often used for event handling, such as when a button is clicked.

// document.getElementById("myButton").addEventListener("click", function () {
//     alert("Button was clicked!");
// });

// // ===============================

// // Callback Functions with Error Handling
// // It's common to use callbacks for operations with error handling
//  (like reading files or making HTTP requests).

// function fetchDataWithErrorHandling(callback) {
//     let errorOccurred = false; // Simulating an error condition
//     setTimeout(() => {
//         if (errorOccurred) {
//             callback("Error: Failed to fetch data");
//         } else {
//             const data = { id: 2, name: "Bob" };
//             callback(null, data); // No error, passing data
//         }
//     }, 2000);
// }

// function myerror(error, data) {
//     if (error) {
//         console.log(error); // Output: Error: Failed to fetch data
//     } else {
//         console.log("Data received:", data); // Output: Data received: { id: 2, name: "Bob" }
//     }
//     fetchDataWithErrorHandling(myerror)



// ===============================

// Callback with Multiple Parameters
// Sometimes callbacks need to handle more than one parameter.

// function fetchUserData(callback) {
//     const userData = { id: 1, name: "Charlie", age: 30 };
//     callback(userData.id, userData.name, userData.age); // Pass multiple parameters
// }

// fetchUserData(function (id, name, age) {
//     console.log(`ID: ${id}, Name: ${name}, Age: ${age}`);
// });
// // Output: ID: 1, Name: Charlie, Age: 30

// // ===============================

// // Using Callback to Handle Multiple Operations
// // You can also chain multiple operations using callbacks.

// function multiplyBy2(number, callback) {
//     let result = number * 2;
//     callback(result); // Pass the result to the callback
// }

// function add3(number, callback) {
//     let result = number + 3;
//     callback(result); // Pass the result to the callback
// }

// multiplyBy2(5, function (result1) {
//     add3(result1, function (result2) {
//         console.log(result2); // Output: 13 (5*2 = 10 + 3 = 13)
//     });
// });
// ===============
// Simulate ordering a pizza with a callback
function orderPizza(callback) {
    console.log("Ordering pizza...");

    // Simulate a delay for pizza preparation using setTimeout
    setTimeout(() => {
        console.log("Pizza is ready!");
        callback(); // Call the callback function when pizza is ready
    }, 5000); // 3 seconds delay
}

// // Define a callback function
function eatPizza() {
    console.log("Eating the pizza now!");
}

// // Place an order and pass the callback function
orderPizza(eatPizza);

console.log("Doing other things while waiting for the pizza...task1");
console.log("Doing other things while waiting for the pizza...task2");
console.log("Doing other things while waiting for the pizza...task3");
console.log("Doing other things while waiting for the pizza...task4");
console.log("Doing other things while waiting for the pizza...task5");
console.log("Doing other things while waiting for the pizza...task6");

// // ===============================

// // Questions and Answers

// // 1. What is a callback function in JavaScript?
// // Answer: A callback function is a function that is passed into another function as an argument, and is executed after the completion of that function’s execution.
// // Callback functions are often used in asynchronous operations to handle the results of those operations once completed.


// // 2. Why are callback functions necessary in JavaScript?
// // Answer: Callbacks are necessary in JavaScript to handle asynchronous operations (such as I/O operations, API calls, or timers) without blocking the execution of other tasks.
// // This allows JavaScript to be non-blocking and handle multiple tasks concurrently without waiting for each one to finish.

// // 3. How do you handle errors in a callback function?
// // Answer: Errors can be handled by passing an error object as the first parameter to the callback function, following the convention `callback(error, result)`.
// // If an error occurs, the callback will receive an error object, and the function can handle the error appropriately.


// // 4. Can you explain the difference between a callback and a promise?
// // Answer: A callback is a function passed as an argument to another function, and is executed after the completion of that function.
// // A promise, on the other hand, is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide better handling of multiple asynchronous operations with `.then()`, `.catch()`, and `.finally()` methods.
// // Callbacks are more error-prone due to callback hell, while promises provide cleaner code structure.


// // 5. What is "callback hell" or "pyramid of doom"?
// // Answer: "Callback hell" refers to the situation where callbacks are nested within other callbacks, resulting in deeply indented and difficult-to-read code.
// // This occurs when many asynchronous operations are performed sequentially, creating a pyramidal or nested structure, making the code hard to maintain.


// // ===============================

// // Example of Callback Hell

// function firstFunction(callback) {
//     setTimeout(() => {
//         console.log("First function executed");
//         callback();
//     }, 1000);
// }

// function secondFunction(callback) {
//     setTimeout(() => {
//         console.log("Second function executed");
//         callback();
//     }, 1000);
// }

// function thirdFunction() {
//     setTimeout(() => {
//         console.log("Third function executed");
//     }, 1000);
// }

// firstFunction(function () {
//     secondFunction(function () {
//         thirdFunction();
//     });
// });

// // Output:
// // First function executed
// // Second function executed
// // Third function executed

// // ===============================

// // Avoiding Callback Hell with Promises
// // Callback hell can be avoided using promises or async/await.

// function firstFunctionPromise() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("First function executed");
//             resolve();
//         }, 1000);
//     });
// }

// function secondFunctionPromise() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Second function executed");
//             resolve();
//         }, 1000);
//     });
// }

// function thirdFunctionPromise() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Third function executed");
//             resolve();
//         }, 1000);
//     });
// }

// firstFunctionPromise()
//     .then(secondFunctionPromise)
//     .then(thirdFunctionPromise);

// // Output:
// // First function executed
// // Second function executed
// // Third function executed
