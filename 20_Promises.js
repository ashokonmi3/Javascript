// ===============
// Introduction to JavaScript Promises
// Promises in JavaScript are used for handling asynchronous operations. 
// They provide a cleaner alternative to callbacks and help in managing multiple asynchronous tasks more effectively.
// A Promise is a proxy for a value that will be provided in the future. It allows you to attach handlers for success (`.then()`) or failure (`.catch()`).
// Promises help avoid "callback hell" (nested callbacks) by allowing asynchronous code to be written in a more readable way.
// ===============

// ===============
// Why Promises Are Needed
// Promises are needed for asynchronous operations because they allow for a better structure and error handling
//  in asynchronous code. Without promises, you would have to deal with callback functions, which can become hard to manage and
//  debug in large applications.
// Promises provide the following benefits:
// 1. Handling of asynchronous code in a more organized way.
// 2. Error handling with `.catch()`.
// 3. Chaining multiple async operations with `.then()`.
// 4. Handling multiple promises with `Promise.all()` and `Promise.race()`.
// ===============

// ===============
// Basic Promise Example
// Creating a new Promise. The Promise constructor takes an executor function which is provided with two functions: 
// resolve and reject.
// The resolve function is called when the asynchronous operation is successful,
//  while the reject function is called if there's an error or failure.
// ===============

let juiceOrder = new Promise((resolve, reject) => {
    let isShopOpen = true;

    setTimeout(() => {
        if (isShopOpen) {
            resolve("Juice is delivered! 🥤");
        } else {
            reject("Sorry, shop is closed.");
        }
    }, 2000); // Wait 2 seconds
});

juiceOrder
    .then((message) => {
        console.log("Success:", message);
    })
    .catch((error) => {
        console.log("Failure:", error);
    });
// ======================  


console.log("Before promise");

var myPromise = new Promise(function (resolve, reject) {
    let isSuccess = true; // Simulating success or failure
    if (isSuccess) {
        resolve("Operation was successful");
    } else {
        reject("Operation failed");
    }
});

myPromise
    .then(function (message) {
        console.log(message); // Handles success case
    })
    .catch(function (message) {
        console.log(message); // Handles error case
    });

console.log("After promise");


// ===============
// Promise with Throwing Error
// You can throw errors inside a promise's `.then()` and catch them using `.catch()`. This ensures that errors are handled gracefully in an asynchronous chain.
//-----------------

// const promiseWithError = new Promise((resolve, reject) => {
//     resolve("Start of promise chain");
// }).then((message) => {
//     console.log(message);
//     throw new Error("Something went wrong!");
// }).catch((error) => {
//     console.error("Handled error:", error.message);
// });
// ==========================
// Imagine a Promise that checks if a cake is ready
// console.log("This runs before promise...");

// let cakePromise = new Promise(function (resolve, reject) {
//     let isCakeReady = false;  // Imagine it's checking if the cake is ready

//     console.log("Baking the cake...");  // This will print first

//     // Simulate a long task (e.g., baking) using setTimeout
//     setTimeout(function () {
//         if (isCakeReady) {
//             resolve("The cake is ready!");  // Promise fulfilled
//         } else {
//             reject("The cake is not ready!");  // Promise rejected
//         }
//     }, 2000);  // Wait for 2 seconds before checking cake status
// });

// // This part of the code executes right away, even though the promise is still pending
// console.log("This runs while the cake is still baking...");

// cakePromise
//     .then(function (result) {
//         console.log(result);  // If the promise is fulfilled, show this message
//     })
//     .catch(function (error) {
//         console.log(error);  // If the promise is rejected, show this message
//     });

// // Rest of the program continues to run without waiting for the promise to settle
// console.log("This runs immediately after the promise, before the cake is done.");

// // More code running in parallel
// setTimeout(function () {
//     console.log("This happens 3 seconds later.");
// }, 3000);

// // Example of non-blocking async function using setTimeout
// setTimeout(function () {
//     console.log("Another task runs independently.");
// }, 1000);
// ===============
// Chaining Promises
// Promises can be chained using `.then()`. This allows you to handle multiple asynchronous operations in sequence, one after the other.
// ===============

// const step1 = new Promise((resolve) => resolve("Step 1 complete"));
// const step2 = new Promise((resolve) => resolve("Step 2 complete"));

// step1
//     .then((message) => {
//         console.log(message); // First step is done
//         return step2; // Move to next step
//     })
//     .then((message) => {
//         console.log(message); // Second step is done
//     })
//     .catch((error) => {
//         console.error(error); // In case of any error
//     });

// ===============
// Using Multiple Promises with Promise.all()
// Promise.all() is useful when you want to execute multiple promises in parallel and wait for all of them to complete.
//  If any promise rejects, the entire chain will be rejected.
// ===============

// const recordVideoOne = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve("Video one recorded"), 1000);
// });
// const recordVideoTwo = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve("Video two recorded"), 2000);
// });
// const recordVideoThree = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve("Video three recorded"), 3000);
// });

// Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree])
//     .then(function (messages) {
//         console.log(messages); // ["Video one recorded", "Video two recorded", "Video three recorded"]
//     })
//     .catch(function (error) {
//         console.log("One of the promises failed:", error);
//     });

// ===============
// Using Promise.race()
// Promise.race() returns the result of the first promise that resolves or rejects. It does not wait for all promises to complete.
// ===============

// const videoOne = new Promise((resolve, reject) => setTimeout(resolve, 500, "Video one finished"));
// const videoTwo = new Promise((resolve, reject) => setTimeout(resolve, 2000, "Video two finished"));

// Promise.race([videoOne, videoTwo])
//     .then((message) => console.log(message)) // "Video one finished"
//     .catch((error) => console.error(error));

// ===============
// Example of Using Promises with Asynchronous Operations (Simulating an API Call)
// ===============

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { name: "John", age: 30 };
//             resolve(data);
//         }, 2000);
//     });
// }

// fetchData()
//     .then((data) => {
//         console.log("Data fetched:", data); // { name: "John", age: 30 }
//         return data.name; // Pass result to the next `.then()`
//     })
//     .then((name) => {
//         console.log("Name is:", name);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });

// ===============
// Example of Promise.all with Error Handling
// If one of the promises fails, the entire `Promise.all()` chain will fail, but you can catch the error.
// ===============

const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 1000, "Task 1 completed"));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 1500, "Task 2 failed"));

Promise.all([promiseOne, promiseTwo])
    .then((messages) => {
        console.log(messages); // This won't be executed as promiseTwo rejects
    })
    .catch((error) => {
        console.log("Error caught:", error); // "Task 2 failed"
    });
// ===========================



// ===============
//  Questions on JavaScript Promises
// 1. What is a promise in JavaScript, and how does it work?
// A promise in JavaScript represents the result of an asynchronous operation. It can either be resolved (fulfilled) or rejected,
// and you can handle these results using `.then()` and `.catch()`.

// 2. What are `resolve`, `reject`, and `finally` used for in a promise?
// - `resolve`: Used to indicate that the asynchronous operation was successful and provide the result.
// - `reject`: Used to indicate that an error occurred during the asynchronous operation.
// - `finally`: Used to execute code regardless of whether the promise was resolved or rejected.

// 3. How does `Promise.all()` work?
// `Promise.all()` takes an array of promises and returns a new promise that resolves when all of the promises in the array resolve.
//  If any promise rejects, the returned promise is rejected.


// 4. What is the difference between `Promise.all()` and `Promise.race()`?
// - `Promise.all()` waits for all promises to resolve or for one to reject.
// - `Promise.race()` returns as soon as the first promise resolves or rejects, regardless of whether the others complete.

// 5. How would you handle multiple promises that may fail?
// You can use `.catch()` on each individual promise or use `Promise.allSettled()` to handle both resolved and rejected promises in a more graceful way.

