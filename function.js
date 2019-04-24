// function sayHello() {
// 	console.log("Hello world!");
// 	console.log("¡Hola mundo!");
//     console.log("Hallo wereld!");
//     console.log("Привет мир!");
//     // return "hello world";
//     // ...and ends with a closing curly brace
// }

// sayHello();
//x=sayHello();
// // document.write("<br>");

// document.write(x);
// //referencing the function
// var z = sayHello;
// var x = z();
// document.write(x);

// const o = {};
// o.f = sayHello;
// x = o.f();
// document.write("<br>");

// document.write(x);

//============argument

// function avg(a, b) {
// 	return (a + b) / 2;
// }

// var c = avg(5,6)
//                    document.write("<br>");
// document.write(c);
//  function f(x) {
// console.log(`inside f: x=${x}`);
// x = 5;
// console.log(`inside f: x=${x} (after assignment)`);
// }
// let x = 3;
// console.log(`before calling f: x=${x}`);
// f(x);
// console.log(`after calling f: x=${x}`);

//====================================
// function f(o) {
// o.message = `set in f (previous value: '${o.message}')`;
// }
// let o = {
// message: "initial value"
// };
// console.log(`before calling f: o.message="${o.message}"`);
// f(o);
// console.log(`after calling f: o.message="${o.message}"`);

////================================
function f(a, b = "default_Value", c = 3) {
console.log( `${a} - ${b} - ${c}`);
} 
// f(5, 6, 7); // "5 - 6 - 7"
//f(5, 6); // "5 - 6 - 3"
// f(5); // "5 - default - 3"
f();

///=============================
////Anamymous function
////=================




// A callback function is a function which is:

// passed as an argument to another function, and,
// is invoked after some kind of event.
// Once its parent function completes, the function passed as an argument is then called.