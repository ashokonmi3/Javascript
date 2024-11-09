// 1. Compiler - Based Languages(e.g., C, C++, Java)
// What is a Compiler - Based Language ?

//In compiler - based languages, the code is converted into machine code or a lower - level language before it runs.This conversion happens once and produces an executable file.
// This is a two - step process: writing the source code and then compiling it into an executable form.The resulting machine code file can be executed independently, without requiring the source code or the compiler.
// Compilation Process:

// Preprocessing: The source code is first preprocessed, where macros are expanded, and include files are added(e.g., in C and C++).This step handles any directives(like #include, #define).
//     Compilation: The preprocessed code is then converted to machine code.
//     Assembly: The compiled code may be converted to assembly language, which is then assembled into an object file.
//     Linking: The final step links all object files and libraries, producing the final executable.
// Example Languages: C, C++, Java(with JVM - based compilation and bytecode generation).

// 2. Interpreter - Based Languages(e.g., JavaScript, Python)
// What is an Interpreter - Based Language ?
//In interpreter - based languages, there is no separate compilation phase.Instead, the code is executed line by line at runtime.
// This approach doesn't create intermediate files (like bytecode or object code), making it different from compiler-based languages.
// Because it interprets each line as it’s executed, it can make changes and test them quickly, though it can be slower than a fully compiled language for large programs.
// Execution Process:

// Each line of code is interpreted and executed immediately without creating an intermediate machine code file.
// This often allows for more flexibility but may affect performance since code is interpreted on - the - fly.
// Example Languages: JavaScript, Python.


// Primitive Data Types
// Primitive types represent single, simple values with no additional methods or properties.
// They are basic data types that languages like JavaScript provide.

// Types of Primitive Data:

// Number: Represents numerical values(integers and floating - point numbers).
// String: Represents text data, a sequence of characters.
// Boolean: Represents a logical entity with values true or false.
// Undefined: A variable without an assigned value is automatically assigned undefined.
// Null: Represents the absence of any value; it’s intentionally assigned when no object value is present.
// Symbol: Introduced in ES6(ECMAScript 2015), this represents a unique identifier and is mainly used as object property keys.
//  Note: These types are primitive in that they contain only data values and have no inherent properties or methods.

// Typing in JavaScript
// Loose Typing:
// JavaScript is loosely typed, meaning variables are not bound to a specific type.
// A variable can hold a string initially, then a number, and later a boolean, without type errors.
// No Type Information:
// JavaScript variables do not store type information with their data; 
// they can be reassigned to different types throughout their usage.

// Declaration vs.Definition in JavaScript
// Declaration: Introducing a variable in the code without assigning it an initial value.

//Example: var value;
// Here, value is declared, but no initial value is assigned, so it defaults to undefined.
//Definition: Assigning a value to a declared variable.

// Naming convention 
// camelCase: Start with a lowercase letter and capitalize each subsequent word.
// userAge
// calculateTotalPrice
// totalInvoiceAmount


// "use strict"
// ==========================================================



// ctrl+f5 to run the code 
// compiler based language java c c++
// c Compilation process preprocesing ....

// interpreter based language --- no intermediate files generted 
//                               execution happns line by lined

// We can do

// Primitive Type(single simple data value with no additional properties and methods.)
// 1) Number
// 2) String
// 3) Boolean
// 4) undefined
// 5) null
// 6) Symbol

// No strong typing loose typing
// No type information associated with any data
// -------------------------
// ===========================
// 1. Variable Declaration and Initialization
// ===========================

// Declaring and initializing a variable with "var"
// var value;         // Declaration
// value = 20;        // Definition
// console.log(value); // Output: 20

// Another example
// var value = 45;
// console.log(value); // Output: 45

// // // Changing the variable's value
// value = "JavaScript";
// console.log(value); // Output: "JavaScript"

// // ===========================
// // 2. Number Data Type (64-bit values)
// // ===========================

// var a = 10;        // Integer number
// console.log(a);    // Output: 10

// var b = 20;        // Another integer number
// console.log(b);    // Output: 20

// // Floating-point numbers
// var c = 10.5;
// console.log(c);    // Output: 10.5


// // ===========================
// // 3. String Data Type
// // ===========================

// // Sequence of Unicode characters (16-bit)
// var d = "Hello";
// var e = "true";  // This is a string, not a boolean
// console.log(d);  // Output: "Hello"
// console.log(e);  // Output: "true"

// // Note: JavaScript does not have a separate character type
// // A character is simply a string of length 1

// // ===========================
// // 4. Undefined and Null
// // ===========================

// // "Undefined" means a variable has been declared but not assigned a value
// var f;
// console.log(f); // Output: undefined

// // // "Null" is an assignment value that represents "no value" or "nothing"
// var g = null;
// console.log(g); // Output: null

// // Difference between undefined and null:
// // - Undefined means the variable is declared but has no value assigned.
// // - Null is an intentional assignment of "no value."

// // Example use case: middle name that may or may not exist
// var middleName = null; // Represents the absence of a middle name
// console.log(middleName); // Output: null

// ctrl+/- for comment and uncomment both
// ===========================
// 5. Boolean Data Type
// ===========================

// var isAvailable = true;
// var isComplete = false;
// console.log(isAvailable); // Output: true
// console.log(isComplete);  // Output: false

// // ===========================
// // 6. The `typeof` Operator
// // ===========================

// // `typeof` is used to determine the data type of a variable or value

// var num = 10;
// console.log(typeof num); // Output: "number"

// num = "Hello";
// console.log(typeof num); // Output: "string"

// num = true;
// console.log(typeof num); // Output: "boolean"

// var unassignedVar;
// console.log(typeof unassignedVar); // Output: "undefined"

// var nullVar = null;
// console.log(typeof nullVar); // Output: "object" (this is a known quirk in JavaScript)

// // ===========================
// // 7. Strict Mode
// // ===========================

// // "use strict"; enforces stricter parsing and error handling
// // Prevents accidental usage of undeclared variables

// "use strict";
// var strictVar = 10;
// console.log(strictVar); // Output: 10

// // Uncommenting the following line would cause an error in strict mode
// strictAssignment = 20; // ReferenceError: strictAssignment is not defined
// console.log(strictAssignment); // Output: 10

// // ===========================
// // Example Without Strict Mode
// // ===========================

// // Without "use strict", JavaScript allows accidental global variables
// accidentalGlobal = 15;
// console.log(accidentalGlobal); // Output: 15

// // ===========================
// // 8. Dynamic Typing
// // ===========================

// // Variables in JavaScript are dynamically typed
// var dynamicVar = "I am a string";
// console.log(typeof dynamicVar); // Output: "string"

// dynamicVar = 100;
// console.log(typeof dynamicVar); // Output: "number"

// dynamicVar = false;
// console.log(typeof dynamicVar); // Output: "boolean"

// // ===========================
// // Summary of Data Types
// // ===========================

// // JavaScript primitive types include:
// // - Number
// // - String
// // - Boolean
// // - Undefined
// // - Null
// // - Symbol (not shown here but used for unique identifiers)

// // Example of each type
// var exampleNumber = 42;
// var exampleString = "Example";
// var exampleBoolean = true;
// var exampleUndefined;
// var exampleNull = null;

// // // Checking types
// console.log(typeof exampleNumber);     // Output: "number"
// console.log(typeof exampleString);     // Output: "string"
// console.log(typeof exampleBoolean);    // Output: "boolean"
// console.log(typeof exampleUndefined);  // Output: "undefined"
// console.log(typeof exampleNull);       // Output: "object" (null is of type "object" in JavaScript)

// // ===========================
// // Additional Example with "use strict"
// // ===========================

// "use strict";
// var definedVar = 100;
// console.log(definedVar); // Output: 100

// // // Uncommenting the following would result in an error:
// undefinedVar = 50; // ReferenceError: undefinedVar is not defined

// "use strict";
var eval = 100;
// function var eval


// ===========================
// 7. Using const for Constant Values
// ===========================

// const PI = 3.14159; // A constant for the value of PI

// // Trying to reassign a const variable will cause an error
// PI = 3.14; // ❌ Error: Assignment to constant variable

// // Use const for values that should not change
// const BASE_URL = "https://api.example.com";
// console.log(BASE_URL);

// // ===========================
// // 9. Hoisting in JavaScript
// // ===========================
// // JavaScript moves variable declarations to the top of their scope (hoisting)
// // Only declarations are hoisted, not initializations

// console.log(hoistedVar); // Output: undefined (variable declared but not initialized yet)
// var hoistedVar = "I'm hoisted!";
// console.log(hoistedVar); // Output: "I'm hoisted!"

// // // Note: "let" and "const" are not hoisted in the same way as "var"; using them before declaration will cause an error
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 10;
// Hoisting
// // var: Variables declared with var are hoisted to the top of their scope, meaning they are moved to the top of the function or global scope and are initialized with undefined.However, they are only assigned a value when the code reaches their actual line of assignment.
// // let: Variables declared with let are also hoisted, but they are not initialized.Accessing a let variable before its declaration results in a ReferenceError due to the temporal dead zone(the period between the beginning of the block and the declaration line).


// // ===========================
// // Redeclaration of var and let
// // ===========================
// var name = "Alice";
// var name = "Bob"; // No error, `name` is re-declared and re-assigned
// console.log(name); // "Bob"

// let age = 25;
// let age = 30; // SyntaxError: Identifier 'age' has already been declared
// ===========================
// Scope of var and let 
// ===========================
if (true) {
    var x = 10;
    let y = 20;
    console.log(y);

}

console.log(x); // 10 (accessible because `var` is function-scoped or globally scoped)
console.log(y); // ReferenceError: y is not defined (because `let` is block-scoped)


// ==============
// 1. No Need to Declare Variable Type
// In JavaScript, there is no need to declare the type of a variable when it is created.JavaScript is a dynamically typed language, meaning the type of a variable is determined at runtime based on the value assigned to it.This is different from statically typed languages like Java or C++, where the type of a variable must be explicitly declared.

// In JavaScript, you can assign any type of value (string, number, boolean, etc.) to a variable, and the language will infer its type automatically.This provides flexibility but can lead to bugs if the variable's type changes unexpectedly during runtime.

// 2. Same Variable Can Be Assigned Values of Different Types
// Since JavaScript is dynamically typed, a variable can hold values of different types throughout the lifecycle of the program.This means that the same variable can be assigned a number, and later, a string, or even an object, without any type restrictions.

// This characteristic makes JavaScript versatile, especially in situations where the variable's type may not be known in advance or could change based on user input or external factors. However, this can also lead to unexpected results if the variable's type is changed unintentionally, leading to harder - to - debug issues.

// 3. No Scoping Information in Variable Declarations
// JavaScript has different rules for variable scoping compared to languages like Java or C#.It does not explicitly allow the use of access modifiers like private or public for variable scoping.Instead, JavaScript handles variable scoping in the following ways:

// var: Variables declared with var are function-scoped or global - scoped.This means that if a var is declared inside a function, it is accessible throughout the function, but it can still "leak" outside the function if declared in the global scope.
// let and const: Variables declared with let and const are block-scoped.This means they are only accessible within the block in which they are defined, such as inside loops or conditional statements.
// In JavaScript, this lack of scoping information can lead to bugs if variables are accidentally reused or overwritten due to their broader accessibility, especially when using var.

// 4. Variable and Values Can Be Interrogated(Using typeof)
// JavaScript provides the typeof operator, which allows you to dynamically check the type of a variable at runtime.This can be useful when you want to determine the type of a value or variable during execution, as JavaScript's dynamic typing makes it harder to track types statically.

// The typeof operator returns a string representing the type of the operand.For example, it can return "number", "string", "boolean", "object", etc.
// This operator helps developers determine what type of data they are working with at a given point in the code, which is particularly useful in debugging and dynamic applications.
// use strict in JavaScript
// "use strict" is a directive in JavaScript that enables strict mode, which helps catch common coding mistakes and prevents certain actions that could lead to errors.It modifies the behavior of JavaScript to make it more predictable and secure.

// What does "use strict" do?
//     Prevents the use of undeclared variables: In normal mode, assigning a value to an undeclared variable would automatically create a global variable.In strict mode, this will throw a ReferenceError, which helps avoid accidental global variables.

// Disallows duplicate property names: In strict mode, having two properties with the same name in an object literal will throw a syntax error.

// Eliminates with statement: The with statement, which can create ambiguity in code, is disallowed in strict mode.

// Prevents the usage of reserved keywords: Some keywords that are reserved for future versions of JavaScript(like eval, arguments, etc.) cannot be used as variable names in strict mode.

// Makes this behave more predictably: In non - strict mode, if a function is called without an object, the value of this will be the global object(like window in browsers).In strict mode, this will be undefined when a function is called without an object, preventing potential errors.

// Where can you use "use strict" ?
//     Global Scope: If "use strict" is placed at the beginning of a script file, it applies to the entire script.

// Function Scope: If "use strict" is placed inside a function, it only applies to that function.

// Modules: Modern JavaScript modules automatically run in strict mode.

// Why use "use strict" ?
//     Catches common mistakes: It makes code easier to debug by catching syntax and logic errors that would otherwise go unnoticed.

// Improves performance: Strict mode can improve performance because JavaScript engines can optimize stricter code better.

// Makes the code more predictable: By enforcing stricter rules, "use strict" makes the behavior of the language more consistent and reduces the risk of bugs.

// Strict Mode vs Non - Strict Mode
// Non - strict mode: In non - strict mode, JavaScript is more forgiving and allows certain operations that could cause unpredictable behavior, such as assigning values to undeclared variables.This can lead to bugs that are harder to track and fix.

// Strict mode: In strict mode, the JavaScript engine enforces more rules, making the code less error - prone and easier to understand.It helps developers avoid common pitfalls by throwing errors when something is wrong, thus promoting better practices.