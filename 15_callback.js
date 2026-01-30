/************************************************************
 * JAVASCRIPT CALLBACK FUNCTIONS
 * CONCEPTS, READING NOTES, EXAMPLES, AND INTERVIEW Q&A
 ************************************************************/

/*
------------------------------------------------------------
WHAT IS A CALLBACK FUNCTION IN JAVASCRIPT?
------------------------------------------------------------
A callback function is a function that is passed to another function
as an argument and is executed later.

The function receiving the callback decides:
- when the callback should run
- under what condition it should run

In JavaScript, functions are treated as values.
This allows functions to be passed around just like variables.
*/

/*
------------------------------------------------------------
WHY CALLBACKS ARE NEEDED
------------------------------------------------------------
JavaScript is single-threaded but asynchronous.

Callbacks help JavaScript:
- Handle long-running operations
- Avoid blocking execution
- Continue doing other tasks while waiting

Common use cases:
- Timers (setTimeout, setInterval)
- API calls
- File reading
- Event handling
*/

/*
------------------------------------------------------------
IMPORTANCE OF CALLBACKS
------------------------------------------------------------
- Core concept for asynchronous programming
- Foundation for promises and async/await
- Used in events, timers, AJAX, and Node.js APIs
- Allow code to be split into smaller, reusable steps
*/


/*
------------------------------------------------------------
BASIC CALLBACK EXAMPLE
------------------------------------------------------------
A simple example where one function calls another function.
*/

// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback(); // executing callback
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye);

/*
Execution flow:
- greet() runs first
- sayGoodbye() runs only when greet() calls it
*/


/*
------------------------------------------------------------
ANONYMOUS CALLBACK FUNCTIONS
------------------------------------------------------------
Callbacks do not need to have names.
Anonymous functions are commonly used as callbacks.
*/

// var x = function () {
//     console.log("I am called from inside a function");
// };

// var y = function (callback) {
//     console.log("I am called outside");
//     callback();
//     console.log("I am called after callback");
// };

// y(x);


/*
------------------------------------------------------------
CALLBACK EXAMPLE WITH CALCULATOR
------------------------------------------------------------
Using callbacks to decide which operation to perform.
*/

// var add = function (a, b) {
//     return a + b;
// };

// var mul = function (a, b) {
//     return a * b;
// };

// var calc = function (a, b, callback) {
//     if (typeof callback === "function") {
//         return callback(a, b);
//     } else {
//         console.log("Please provide a valid callback function.");
//     }
// };

// console.log(calc(2, 3, add)); // 5
// console.log(calc(2, 3, mul)); // 6


/*
------------------------------------------------------------
SIMULATING ASYNCHRONOUS CALLBACK (FETCHING DATA)
------------------------------------------------------------
Simulating an API call using setTimeout.
*/

// function fetchData(callback) {
//     console.log("Fetching data...");

//     setTimeout(() => {
//         const data = { id: 1, name: "Alice" };
//         callback(data);
//     }, 10000);
// }

// function displayData(mydata) {
//     console.log("Data received:", mydata);
// }

// fetchData(displayData);

/*
Explanation:
- fetchData starts execution
- JavaScript continues other tasks
- After delay, callback is executed
*/


/*
------------------------------------------------------------
CALLBACK WITH EVENT HANDLING (BROWSER EXAMPLE)
------------------------------------------------------------
Callbacks are heavily used in event-driven programming.
*/

// document.getElementById("myButton").addEventListener("click", function () {
//     alert("Button was clicked!");
// });


/*
------------------------------------------------------------
CALLBACKS WITH ERROR HANDLING
------------------------------------------------------------
Common pattern: callback(error, data)
*/

// function fetchDataWithErrorHandling(callback) {
//     let errorOccurred = true;

//     setTimeout(() => {
//         if (errorOccurred) {
//             callback("Error: Failed to fetch data");
//         } else {
//             const data = { id: 2, name: "Bob" };
//             callback(null, data);
//         }
//     }, 2000);
// }

// function myerror(error, data) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Data received:", data);
//     }
// }

// fetchDataWithErrorHandling(myerror);


/*
------------------------------------------------------------
CALLBACK WITH MULTIPLE PARAMETERS
------------------------------------------------------------
Callbacks can receive more than one value.
*/

// function fetchUserData(callback) {
//     const userData = { id: 1, name: "Charlie", age: 30 };
//     callback(userData.id, userData.name, userData.age);
// }

// fetchUserData(function (id, name, age) {
//     console.log(`ID: ${id}, Name: ${name}, Age: ${age}`);
// });


/*
------------------------------------------------------------
CHAINING OPERATIONS USING CALLBACKS
------------------------------------------------------------
Callbacks can be nested to perform sequential tasks.
*/

// function multiplyBy2(number, callback) {
//     let result = number * 2;
//     callback(result);
// }

// function add3(number, callback) {
//     let result = number + 3;
//     callback(result);
// }

// multiplyBy2(5, function (result1) {
//     add3(result1, function (result2) {
//         console.log(result2); // 13
//     });
// });


// ---------------------

function multiplyBy2(number, callback) {
    console.log("multiplyBy2: Received number =", number);

    let result = number * 2;
    console.log("multiplyBy2: After multiplication result =", result);

    console.log("multiplyBy2: Sending result to callback...");
    callback(result);

    console.log("multiplyBy2: Callback finished\n");
}

function add3(number, callback) {
    console.log("add3: Received number =", number);

    let result = number + 3;
    console.log("add3: After addition result =", result);

    console.log("add3: Sending result to callback...");
    callback(result);

    console.log("add3: Callback finished\n");
}

console.log("Program Start\n");

multiplyBy2(5, function (result1) {
    console.log("Inside first callback (after multiplyBy2), result1 =", result1);

    add3(result1, function (result2) {
        console.log("Inside second callback (after add3), result2 =", result2);
        console.log("Final Output:", result2); // 13
    });

    console.log("Back inside first callback after calling add3");
});

console.log("Program End (but async-style thinking still inside callbacks)");



/*
------------------------------------------------------------
REAL-WORLD ANALOGY: ORDERING A PIZZA
------------------------------------------------------------
Demonstrates non-blocking behavior.
*/

// function orderPizza(callback) {
//     console.log("Ordering pizza...");

//     setTimeout(() => {
//         console.log("Pizza is ready!");
//         callback();
//     }, 5000);
// }

// function eatPizza() {
//     console.log("Eating the pizza now!");
// }

// orderPizza(eatPizza);

// console.log("Doing other things while waiting... task1");
// console.log("Doing other things while waiting... task2");
// console.log("Doing other things while waiting... task3");
// console.log("Doing other things while waiting... task4");
// console.log("Doing other things while waiting... task5");
// console.log("Doing other things while waiting... task6");


/*
------------------------------------------------------------
CALLBACK HELL (PYRAMID OF DOOM)
------------------------------------------------------------
Nested callbacks reduce readability and maintainability.
*/

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


/*
------------------------------------------------------------
AVOIDING CALLBACK HELL USING PROMISES
------------------------------------------------------------
Promises provide cleaner, more readable flow control.
*/

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


/*
------------------------------------------------------------
COMMON MISTAKES WITH CALLBACKS
------------------------------------------------------------
- Forgetting to call the callback
- Calling the callback multiple times unintentionally
- Deep nesting (callback hell)
- Not handling errors properly
- Assuming callbacks always run immediately
*/


/*
------------------------------------------------------------
INTERVIEW QUESTIONS AND ANSWERS
------------------------------------------------------------

Q: What is a callback function?
A: A function passed as an argument to another function and executed later.

Q: Why are callbacks important?
A: They allow JavaScript to handle asynchronous operations without blocking execution.

Q: How are errors handled in callbacks?
A: Commonly by passing error as the first parameter: callback(error, result).

Q: Difference between callbacks and promises?
A: Callbacks rely on function nesting; promises provide cleaner chaining.

Q: What is callback hell?
A: Deeply nested callbacks that make code hard to read and maintain.
*/


/*
------------------------------------------------------------
FINAL NOTES
------------------------------------------------------------
- Callbacks are fundamental to JavaScript
- They power async behavior
- Understanding callbacks makes promises and async/await easier
------------------------------------------------------------
END OF JAVASCRIPT CALLBACK CONTENT
------------------------------------------------------------
*/
