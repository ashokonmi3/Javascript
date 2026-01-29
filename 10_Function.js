/************************************************************
 * JAVASCRIPT FUNCTIONS
 * CONCEPTS AND READING NOTES WITH EXAMPLES
 ************************************************************/

/*
------------------------------------------------------------
WHAT IS A FUNCTION IN JAVASCRIPT?
------------------------------------------------------------
- A function is a block of code written to perform a specific task.
- Functions allow the same logic to be reused multiple times.
- Instead of repeating code, we define it once and call it whenever needed.
- Functions help make programs easier to read, understand, and maintain.
- Using functions supports modular programming by breaking large programs
  into smaller logical parts.
*/

/*
------------------------------------------------------------
BASIC FUNCTION (NO PARAMETERS)
------------------------------------------------------------
- This function does not take any input values.
- It simply executes the statements written inside it.
- The function runs only when it is called.
- The same function can be called multiple times.
*/

// function showMessage() {
//     console.log("Hello");
//     console.log("Welcome to JavaScript Functions");
// }

// /*
// Calling the function multiple times executes the same code each time.
// */

// showMessage();
// showMessage();


/*
------------------------------------------------------------
FUNCTION WITH PARAMETERS
------------------------------------------------------------
- Parameters are variables listed in the function definition.
- They receive values when the function is called.
- Parameters make functions flexible and reusable.
- The same function can behave differently for different inputs.
*/

// function calculateInterest(amount, duration, rateOfInterest) {
//     /*
//     amount         represents the principal amount
//     duration       represents the time period
//     rateOfInterest represents the interest rate
//     */
//     let interest = (amount * duration * rateOfInterest) / 100;
//     console.log("Calculated Interest:", interest);
// }

// /*
// Values passed during the function call are called arguments.
// */

// calculateInterest(10000, 12, 5);
// calculateInterest(50000, 10, 7);


/*
------------------------------------------------------------
FUNCTION WITH RETURN VALUE
------------------------------------------------------------
- return sends a value back to the place where the function was called.
- After return is executed, the function stops running.
- Returned values can be stored in variables.
- Returned values can be reused in further calculations.
*/

// function calculateArea(x) {
//     return x * 2;
// }

// /*
// The returned value is stored in a variable.
// */

// let result = calculateArea(10);

// /*
// The stored value is reused in another calculation.
// */

// console.log("Final Price:", result * 100);


/*
------------------------------------------------------------
FUNCTION WITH MULTIPLE PARAMETERS
------------------------------------------------------------
- A function can accept more than one parameter.
- Parameters are separated using commas.
- The order of arguments must match the order of parameters.
*/

// function displayStrings(str1, str2) {
//     console.log(str2, str1);
// }

// displayStrings("JavaScript", "Learning");


/*
------------------------------------------------------------
FUNCTION DECLARATION AND FUNCTION EXPRESSION
------------------------------------------------------------

Function Declaration:
- Defined using the function keyword.
- Can be called before its definition in the code.
- JavaScript hoists function declarations.
*/

// function add(a, b) {
//     return a + b;
// }

// console.log(add(3, 4));

/*
Function Expression:
- A function assigned to a variable.
- Cannot be called before it is defined.
- Often used when functions are treated as values.
*/

// let addExpression = function (a, b) {
//     return a + b + 100;
// };

// console.log(addExpression(5, 5));


/*
------------------------------------------------------------
CALLING ONE FUNCTION FROM ANOTHER FUNCTION
------------------------------------------------------------
- A function can call another function inside its body.
- This helps break large logic into smaller, manageable parts.
- Improves readability and reuse.
*/

// function greet() {
//     console.log("Hello");
// }

// function outerFunction() {
//     greet();
// }

// outerFunction();


/*
------------------------------------------------------------
PASSING FUNCTION AS AN ARGUMENT (CALLBACK FUNCTION)
------------------------------------------------------------
- Functions in JavaScript can be treated as values.
- A function can be passed as an argument to another function.
- This technique is widely used in events, timers, and asynchronous code.
*/

// function greetByName(name) {
//     console.log("Hello " + name);
// }

// function executeFunction(fn, value) {
//     fn(value);
// }

// executeFunction(greetByName, "Student");


/*
------------------------------------------------------------
FUNCTIONS AS OBJECT METHODS
------------------------------------------------------------
- When a function is stored as a property of an object, it is called a method.
- Methods define the behavior of an object.
- The keyword this refers to the object that owns the method.
*/

// let person = {
//     firstName: "Ashok",
//     lastName: "Sharma",
//     getFullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };

// console.log(person.getFullName());


/*
------------------------------------------------------------
ARGUMENTS OBJECT
------------------------------------------------------------
- The arguments object is available inside all normal functions.
- It contains all values passed to the function.
- It behaves like an array but is not a real array.
- Useful when the number of arguments is not fixed.
*/

// function showArguments() {
//     console.log(arguments);
//         console.log(arguments[0]);
//         console.log(arguments[1]);
//                 console.log(arguments[2]);


//     console.log("Total arguments:", arguments.length);
// }

// showArguments(10, "Java", "Python", true);


/*
------------------------------------------------------------
USING ARGUMENTS TO FIND MAXIMUM VALUE
------------------------------------------------------------
- This example finds the largest value from the given inputs.
- Each argument is compared one by one.
- The highest value is returned.
*/

// function findMax() {
//     let max = -Infinity;

//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }

// console.log("Maximum Value:", findMax(10, 200, 55, 999, 45));


/*
------------------------------------------------------------
DEFAULT PARAMETERS
------------------------------------------------------------
- Default values are used when arguments are not provided.
- Helps avoid undefined values.
- Makes functions safer and more predictable.
*/

// function showMessageWithDefaults(from, text = "No message provided") {
//     console.log(from + ": " + text);
// }

// showMessageWithDefaults("Admin");
// showMessageWithDefaults("Admin", "Welcome Students");


/*
------------------------------------------------------------
ARROW FUNCTIONS
------------------------------------------------------------
- Arrow functions provide a shorter syntax for writing functions.
- Commonly used for simple operations and callbacks.
- Arrow functions do not have their own this keyword.
*/

// let hello = () => "Hello World!";
// console.log(hello());

// let greetUser = (name) => "Hello " + name;
// console.log(greetUser("Developer"));


/*
------------------------------------------------------------
FUNCTION HOISTING
------------------------------------------------------------
- Function declarations are hoisted to the top of their scope.
- This allows functions to be called before they are defined.
- Function expressions are not hoisted.
*/

// hoistedFunction();

// function hoistedFunction() {
//     console.log("This function works because of hoisting");
// }

/*
The following would cause an error if uncommented:
*/
// notHoisted();
// let notHoisted = function () {
//     console.log("This will not work");
// };

/*
------------------------------------------------------------
FUNCTION SCOPE
------------------------------------------------------------
- Scope defines where variables can be accessed.
- Variables declared inside a function have local scope.
- Local variables cannot be accessed outside the function.
*/

// function scopeExample() {
//     let localVariable = "I am local";
//     console.log(localVariable);
// }

// scopeExample();
// console.log(localVariable); // Error


/*
------------------------------------------------------------
GLOBAL VS LOCAL VARIABLES
------------------------------------------------------------
- Variables declared outside functions are global.
- Global variables can be accessed from anywhere.
- Excessive use of globals can cause unexpected behavior.
*/

// let globalVariable = "I am global";

// function accessGlobal() {
//     console.log(globalVariable);
// }

// accessGlobal();


/*
------------------------------------------------------------
REST PARAMETERS
------------------------------------------------------------
- Rest parameters collect multiple arguments into an array.
- Written using three dots (...)
- Easier and cleaner than using arguments.
*/

// function sumAll(...numbers) {
//     let sum = 0;
//     for (let value of numbers) {
//         sum += value;
//     }
//     return sum;
// }

// console.log("Sum:", sumAll(10, 20, 30, 40));


/*
------------------------------------------------------------
ARGUMENTS VS REST PARAMETERS
------------------------------------------------------------
- arguments is array-like, not a real array.
- rest parameters are real arrays.
- rest parameters work with arrow functions.
- arguments do not work with arrow functions.
*/


/*
------------------------------------------------------------
ARROW FUNCTION AND this KEYWORD
------------------------------------------------------------
- Arrow functions do not have their own this.
- They inherit this from the surrounding scope.
*/

// let user = {
//     name: "Riya",
//     normalFunction: function () {
//         console.log("Normal Function:", this.name);
//     },
//     arrowFunction: () => {
//         console.log("Arrow Function:", this.name);
//     }
// };

// user.normalFunction();
// user.arrowFunction();


/*
------------------------------------------------------------
PURE FUNCTION
------------------------------------------------------------
- A pure function always returns the same output
  for the same input.
- It does not modify external data.
*/

// function pureAdd(a, b) {
//     return a + b;
// }

// console.log(pureAdd(2, 3));
// console.log(pureAdd(2, 3));


/*
------------------------------------------------------------
IMPURE FUNCTION
------------------------------------------------------------
- An impure function depends on or modifies external data.
- Output may change even with the same input.
*/

// let count = 0;

// function impureIncrement() {
//     count++;
//     return count;
// }

// console.log(impureIncrement());
// console.log(impureIncrement());


/*
------------------------------------------------------------
IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
------------------------------------------------------------
- A function that runs immediately after it is defined.
- Helps avoid polluting the global scope.
*/

(function () {
    console.log("This function runs immediately");
})();


/*
------------------------------------------------------------
COMMON MISTAKES WITH FUNCTIONS
------------------------------------------------------------
- Forgetting to call the function using ()
- Expecting a return value when only console.log is used
- Using arrow functions when this is required
- Overusing global variables
*/


/*
------------------------------------------------------------
FINAL NOTES
------------------------------------------------------------
- Functions are the foundation of JavaScript programming
- Understanding functions is essential for learning:
  callbacks, promises, async/await, and frameworks
------------------------------------------------------------
END OF JAVASCRIPT FUNCTIONS CONTENT
------------------------------------------------------------
*/
