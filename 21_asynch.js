// ===============
// Introduction to Async/Await
// Async and Await are used to simplify working with asynchronous code in JavaScript, making it easier to work with promises.
// The main benefit of async/await is that it allows you to write asynchronous code that looks and behaves like
//  synchronous code,

// making it easier to read and manage.
//  ===============
// Asynchronous Version with Parallel Execution
// Both loops will run asynchronously, printing numbers in parallel with async/await
// ===============

// function getPizza() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("🍕 Pizza is here!");
//         }, 3000); // 3-second delay
//     });
// }

// async function dinnerTime() {
//     console.log("Ordering pizza...");
//     const pizza = await getPizza();
//     console.log(pizza);
//     console.log("Eating dinner.");
// }

// dinnerTime();
// ===========================================

// Basic example of Async/Await:
// async function myAsyncFunction() {
//     console.log("Before async call");

//     // Simulating a delay using a promise
//     const result = await new Promise(resolve => {
//         setTimeout(() => resolve("Async Operation Complete"), 5000);
//     });

//     console.log(result); // This will be printed after 2 seconds
//     console.log("After async call");
// }

// myAsyncFunction(); // Call the async function

// ==================
// function bakeCake() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Cake is ready!");
//         }, 2000);
//     });
// }

// function makeCoffee() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Coffee is ready!");
//         }, 1500);
//     });
// }

// async function prepareBreakfast() {
//     try {
//         console.log("Start baking cake...");
//         const cakeMessage = await bakeCake();  // Waits for cake to be done
//         console.log(cakeMessage);  // Prints cake status

//         console.log("Start making coffee...");
//         const coffeeMessage = await makeCoffee();  // Waits for coffee to be done
//         console.log(coffeeMessage);  // Prints coffee status
//     } catch (error) {
//         console.log(error);
//     }
// }

// console.log("Start preparing breakfast!");
// prepareBreakfast();
// console.log("While breakfast is being prepared, I can do other things.");



// =====================
// Handling Multiple Async Operations in Sequence
// Async/Await allows us to handle multiple asynchronous operations one after another, ensuring they are completed in order.
// ===============

// async function handleMultipleOperations() {
//     console.log("Starting async operations");

//     const result1 = await new Promise(resolve => setTimeout(() => resolve("First operation complete"), 1000));
//     console.log(result1);

//     const result2 = await new Promise(resolve => setTimeout(() => resolve("Second operation complete"), 1000));
//     console.log(result2);

//     const result3 = await new Promise(resolve => setTimeout(() => resolve("Third operation complete"), 1000));
//     console.log(result3);

//     console.log("All async operations complete");
// }

// handleMultipleOperations(); // Calling function to handle multiple async operations
// console.log("While promise is being resolved , I can do other things.");

// =====================
// Handling Multiple Async Operations Concurrently
// Use `Promise.all` to run async operations concurrently and wait for all of them to complete.
// ===============

// async function handleConcurrentOperations() {
//     console.log("Starting async operations concurrently");

//     const operation1 = new Promise(resolve => setTimeout(() => resolve("Operation 1 complete"), 2000));
//     const operation2 = new Promise(resolve => setTimeout(() => resolve("Operation 2 complete"), 1000));
//     const operation3 = new Promise(resolve => setTimeout(() => resolve("Operation 3 complete"), 1500));

//     const results = await Promise.all([operation1, operation2, operation3]);
//     console.log(results); // Prints results of all promises once all of them are resolved

//     console.log("All concurrent operations complete");
// }

// handleConcurrentOperations(); // Calling function to handle async operations concurrently

// =====================
// Error Handling with Async/Await
// Async/Await allows handling errors with try/catch blocks to catch errors thrown during async operations.
// ===============

// async function handleError() {
//     try {
//         console.log("Starting async operation");

//         // This will throw an error since 'nonExistentFunction' does not exist
//         await new Promise((_, reject) => reject(new Error("Something went wrong!")));

//     } catch (error) {
//         console.error("Error caught:", error.message); // Catch and handle the error
//     }

//     console.log("After error handling");
// }

// handleError(); // Calling function to demonstrate error handling with async/await

// =====================
// setTimeout() and setInterval() with Async/Await
// Using `async` functions with `setTimeout` or `setInterval` allows us to handle timed asynchronous operations smoothly.
// ===============

// Using async/await with setTimeout to delay execution
// async function delayExecution() {
//     console.log("Before delay");

//     await new Promise(resolve => setTimeout(resolve, 2000)); // Delay for 2 seconds

//     console.log("After delay");
// }

// delayExecution(); // Call function with delay
// ===============
// Using async/await with setInterval to repeat an operation at intervals
async function repeatOperation() {
    let count = 0;

    const intervalId = setInterval(async () => {
        count++;
        console.log(`Operation count: ${count}`);

        if (count === 5) {
            clearInterval(intervalId); // Stop the interval after 5 operations
            console.log("Finished repeating operations");
        }

    }, 1000); // Repeat every second
}

repeatOperation(); // Call function with setInterval

// =====================
// Interview Questions on Async/Await
// These questions help to assess the understanding of async/await, error handling, and concurrency.

// Interview Question 1:
// What is the difference between `async` and `await` in JavaScript?
// Answer:
// - `async` is used to define an asynchronous function.
//   It always returns a promise, even if you return a non-promise value.
// - `await` is used inside an async function to wait for a promise to resolve before proceeding to the next line of code.

// Interview Question 2:
// How do you handle errors in async functions?
// Answer:
// You can use `try/catch` blocks to handle errors in async functions.
// Any error thrown in an async function will be caught by the `catch` block.


// Interview Question 3:
// What happens if a promise inside an async function is rejected?
// How do you handle it?
// Answer:
// If a promise is rejected, it will throw an error that can be caught using a `try/catch` block or by using `.catch` method on the promise itself.

// Interview Question 4:
// Can we use `async/await` with non-promise values?
// Answer:
// Yes, `async/await` can be used with non-promise values. If a non-promise value is returned from an async function, it will automatically be wrapped in a resolved promise.


// =====================
// Code Example: Async/Await with Error Handling and Delay
// Below is a code example demonstrating how `async/await` works along with error handling and delays.
// ===============

// async function asyncWithDelay() {
//     console.log("Before async operation");

//     try {
//         // Simulating a successful operation with a delay
//         const result = await new Promise((resolve, reject) => {
//             setTimeout(() => resolve("Operation completed successfully"), 2000);
//         });
//         console.log(result);
//     } catch (error) {
//         console.error("Error:", error);
//     }

//     console.log("After async operation");
// }

// asyncWithDelay(); // Call function to demonstrate async with delay
