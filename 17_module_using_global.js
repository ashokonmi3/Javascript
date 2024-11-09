require('./17_module'); // Ensure this file loads the global config first
// 17_module.js
console.log(global.myGlobalVariable); // Outputs: "Hello, world!"
// import { exportGlobalVariable } from './17_module.js';
// console.log(exportGlobalVariable); // Outputs: "Hello, world!"