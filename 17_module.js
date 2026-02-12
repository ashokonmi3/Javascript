// myGlobalVariable is now a globally accessible variable.
// You can access it from anywhere in your Node.js application using global.myGlobalVariable.

// global.myGlobalVariable = "Hello, global world!";
// ================================
// 2
export const exportGlobalVariable = "Hello, world!";
// ===============
//3
// // // myModule.js

// // // Named exports
// export const myVar = 10;
// export const myFunction = () => {
//     console.log('This is my function.');
// };

// export const anotherVar = 20;
// export function anotherFunction() {
//     console.log('This is another function.');
// }
// ==================
// 4
// Export single object.js

const myVarObj = 10;
const myFunctionObj = () => {
    console.log('This is my function.');
};
const anotherVarObj = 20;
function anotherFunctionObj() {
    console.log('This is another function.');
}

// // Exporting all values together
export default {
    myVarObj,
    myFunctionObj,
    anotherVarObj,
    anotherFunctionObj
};

