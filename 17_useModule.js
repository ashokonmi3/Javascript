// require('./17_module'); // Ensure this file loads the global config first
// console.log(global.myGlobalVariable); // Outputs: "Hello, world!"
//// console.log(exportGlobalVariable); //this will not work 
// =============================

// import { exportGlobalVariable } from './17_module.js';
// console.log(exportGlobalVariable); // Outputs: "Hello, world!"
// =========================

// const { exportGlobalVariable } = require('./17_module.js');
// console.log(exportGlobalVariable); // Outputs: "Hello, world!"

// Modern Applications: Use import for applications targeting browsers or modern JavaScript environments.
// Node.js Applications: Use require for legacy Node.js projects or when working with CommonJS modules.

// =======================

// import { myVar, myFunction, anotherVar, anotherFunction } from './17_module.js';

// console.log(myVar);  // 10
// myFunction();        // "This is my function."
// console.log(anotherVar);  // 20
// anotherFunction();  // "This is another function."
// ========================
import myModule from './17_module.js';
console.log(myModule.myVarObj);          // 10
myModule.myFunctionObj();                // "This is my function."
console.log(myModule.anotherVarObj);     // 20
myModule.anotherFunctionObj();           // "This is another function."
