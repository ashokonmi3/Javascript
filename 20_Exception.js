"use strict";

/*
========================================================
EXCEPTION HANDLING IN JAVASCRIPT — CLASS NOTES + MANY EXAMPLES
========================================================

DEFINITION:
Exception handling manages runtime errors so your program
does not crash and can recover gracefully.

KEYWORDS:
try      → Wrap risky code
catch    → Handle the error object
finally  → Always runs (cleanup)
throw    → Create your own error

IMPORTANT NOTE:
- JS will stop executing the current flow when an exception is thrown,
  unless you catch it.
========================================================
*/


/*
========================================================
EXAMPLE 1: BASIC TRY-CATCH (runtime error)
========================================================
Notes:
- If an error happens inside try, control jumps to catch.
- `err.message` gives human-readable reason.
- Program continues after catch.
========================================================
*/
// try {
//   // Risky code: calling a function that does not exist
//   undefinedFunction();
//   console.log("This line will NOT run if error happens above.");
// } catch (err) {
//   // Handling code
//   console.log("Handled:", err.message);
// }
// console.log("Program continues after Example 1.");


/*
========================================================
EXAMPLE 2: try-catch with normal code (no error)
========================================================
Notes:
- If no error occurs, catch is skipped.
- Use try for code that MAY fail, not for everything.
========================================================
*/
// try {
//   const a = 10;
//   const b = 20;
//   console.log("Sum:", a + b);
// } catch (err) {
//   console.log("This won't run here:", err.message);
// }


/*
========================================================
EXAMPLE 3: FINALLY block (cleanup)
========================================================
Notes:
- finally runs always:
  ✅ when try succeeds
  ✅ when try fails
- Use finally for cleanup: closing resources, resetting flags, etc.
========================================================
*/
// try {
//   console.log("Opening a resource...");
//   // simulate success (no throw here)
// } catch (err) {
//   console.log("Error:", err.message);
// } finally {
//   console.log("Cleanup done (always runs).");
// }


/*
========================================================
EXAMPLE 4: throw (custom business rule validation)
========================================================
Notes:
- Use throw when input is invalid or business rule fails.
- Throwing stops the function immediately (unless caught).
========================================================
*/
// function validateMarks(marks) {
//   // Notes inside function:
//   // - We intentionally throw when marks are out of range.
//   if (typeof marks !== "number") {
//     throw new Error("Marks must be a number");
//   }
//   if (marks < 0 || marks > 100) {
//     throw new Error("Marks must be between 0 and 100");
//   }
//   return "Marks are valid";
// }

// try {
//   console.log(validateMarks(120)); // will throw
// } catch (err) {
//   console.log("Validation Error:", err.message);
// }


/*
========================================================
EXAMPLE 5: Different built-in error types (name)
========================================================
Notes:
- err.name tells the error category.
- Common types:
  ReferenceError → variable not defined
  TypeError      → wrong type usage (null access, etc.)
  SyntaxError    → invalid JSON/code format
========================================================
*/
// try {
//   // ReferenceError: y is not defined
//   // (In strict mode, assigning to undeclared variables also causes errors)
//   console.log(y);
// } catch (err) {
//   console.log("Type:", err.name, "| Message:", err.message);
// }

// try {
//   // TypeError: Cannot read properties of null
//   const obj = null;
//   obj.run();
// } catch (err) {
//   console.log("Type:", err.name, "| Message:", err.message);
// }

// try {
//   // SyntaxError from JSON.parse for invalid JSON
//   JSON.parse("{bad json}");
// } catch (err) {
//   console.log("Type:", err.name, "| Message:", err.message);
// }


/*
========================================================
EXAMPLE 6: Safe divide (prevent divide-by-zero logic issue)
========================================================
Notes:
- JS returns Infinity for 10/0 (no exception).
- But business logic may require throwing error for divide-by-zero.
========================================================
*/
// function divide(a, b) {
//   try {
//     if (typeof a !== "number" || typeof b !== "number") {
//       throw new Error("Both inputs must be numbers");
//     }
//     if (b === 0) {
//       throw new Error("Cannot divide by zero");
//     }
//     return a / b;
//   } catch (err) {
//     console.log("Math Error:", err.message);
//     return null; // safe fallback value
//   }
// }

// console.log("Divide 10/2:", divide(10, 2));
// console.log("Divide 10/0:", divide(10, 0));


/*
========================================================
EXAMPLE 7: JSON parsing protection (very common real case)
========================================================
Notes:
- JSON.parse throws SyntaxError if JSON is invalid.
- Always validate or catch around JSON.parse for user/API data.
========================================================
*/
// function parseUserJson(text) {
//   try {
//     const obj = JSON.parse(text);
//     // minimal validation
//     if (!obj || typeof obj !== "object") throw new Error("Invalid JSON object");
//     return obj;
//   } catch (err) {
//     console.log("Parse Error:", err.message);
//     return null;
//   }
// }

// console.log("Parsed:", parseUserJson('{"name":"Vandana"}'));
// console.log("Parsed:", parseUserJson("{name:'bad'}")); // invalid JSON


/*
========================================================
EXAMPLE 8: NESTED try-catch + rethrow (detailed notes)
========================================================
Notes:
- Inner try-catch handles a specific part.
- Sometimes inner catch logs/adds context, then rethrows to outer catch.
- Rethrow is useful when outer layer is responsible for final handling.
========================================================
*/
// function processOrder(order) {
//   try {
//     // Outer layer: overall process
//     try {
//       // Inner layer: validation step
//       if (!order) throw new Error("Order object missing");
//       if (!order.id) throw new Error("Order id missing");
//       if (order.amount <= 0) throw new Error("Order amount must be positive");
//     } catch (innerErr) {
//       // Notes:
//       // - Add context (where it failed)
//       // - Then rethrow for outer handler
//       console.log("Inner validation failed:", innerErr.message);
//       throw new Error("Order validation failed: " + innerErr.message);
//     }

//     // If validation passes, continue:
//     return `Order ${order.id} processed successfully`;
//   } catch (outerErr) {
//     // Notes:
//     // - Final handler: decide what to do (log, fallback, notify)
//     console.log("Outer handler:", outerErr.message);
//     return "Order processing failed";
//   }
// }

// console.log(processOrder({ id: "ORD101", amount: 500 }));
// console.log(processOrder({ id: "", amount: 500 }));
// console.log(processOrder(null));


/*
========================================================
EXAMPLE 9: Retry logic (attempt multiple times)
========================================================
Notes:
- Useful for unstable operations (temporary network issues).
- Keep max retries to avoid infinite loops.
========================================================
*/
// function unstableTask() {
//   // Simulate random failure
//   if (Math.random() < 0.7) throw new Error("Temporary failure");
//   return "Success!";
// }

// function runWithRetry(maxTries = 3) {
//   for (let attempt = 1; attempt <= maxTries; attempt++) {
//     try {
//       const result = unstableTask();
//       console.log(`Attempt ${attempt}:`, result);
//       return result;
//     } catch (err) {
//       console.log(`Attempt ${attempt} failed:`, err.message);
//       if (attempt === maxTries) {
//         console.log("All retries failed.");
//         return null;
//       }
//     }
//   }
// }

// runWithRetry(3);


/*
========================================================
EXAMPLE 10: Async/await error handling
========================================================
Notes:
- try-catch works with async/await.
- If you `await` a promise that rejects, it throws → catch handles it.
========================================================
*/
// function fakeApiCall(shouldFail) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldFail) reject(new Error("API is down"));
//       else resolve({ status: 200, data: "OK" });
//     }, 100);
//   });
// }

// async function loadData() {
//   try {
//     const res = await fakeApiCall(true);
//     console.log("API Response:", res);
//   } catch (err) {
//     console.log("Async handled:", err.message);
//   } finally {
//     console.log("Async cleanup (finally).");
//   }
// }
// loadData();


/*
========================================================
EXAMPLE 11: Promise .catch() style (without async/await)
========================================================
Notes:
- Promises use .then().catch().finally()
- Use .catch() to handle rejection
========================================================
*/
// fakeApiCall(false)
//   .then((res) => {
//     console.log("Promise success:", res);
//   })
//   .catch((err) => {
//     console.log("Promise error:", err.message);
//   })
//   .finally(() => {
//     console.log("Promise cleanup (finally).");
//   });


/*
========================================================
EXAMPLE 12: Custom Error class (clearer error categorization)
========================================================
Notes:
- Custom errors help you distinguish error types in catch.
- err.name can be set to a meaningful category.
========================================================
*/
// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// function validateEmail(email) {
//   if (typeof email !== "string") throw new ValidationError("Email must be a string");
//   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new ValidationError("Invalid email format");
//   return "Valid email";
// }

// try {
//   console.log(validateEmail("badEmail"));
// } catch (err) {
//   // Notes:
//   // - You can branch handling by err.name
//   if (err.name === "ValidationError") {
//     console.log("Validation issue:", err.message);
//   } else {
//     console.log("Other error:", err.message);
//   }
// }


/*
========================================================
EXAMPLE 13: Real-world style — Bank withdrawal (business error)
========================================================
Notes:
- Throw when business rule fails (insufficient funds).
- Catch shows user-friendly message.
========================================================
*/
// class BankAccount {
//   constructor(balance) {
//     this.balance = balance;
//   }

//   withdraw(amount) {
//     try {
//       if (typeof amount !== "number" || amount <= 0) {
//         throw new ValidationError("Withdraw amount must be positive number");
//       }
//       if (amount > this.balance) {
//         throw new Error("Insufficient balance");
//       }
//       this.balance -= amount;
//       return `Withdrawal success. Balance: ${this.balance}`;
//     } catch (err) {
//       return `Transaction failed: ${err.message}`;
//     }
//   }
// }

// const acc = new BankAccount(1000);
// console.log(acc.withdraw(1500));
// console.log(acc.withdraw(200));


/*
========================================================
SUMMARY NOTES
========================================================
1) Use try-catch around risky code:
   - JSON.parse, API calls, file ops, user inputs

2) Use throw for business validation:
   - marks range, age check, insufficient balance

3) finally is for cleanup:
   - close connection, reset loading spinner, etc.

4) In async:
   - use try-catch with async/await
   - OR use promise .catch()
========================================================
*/
