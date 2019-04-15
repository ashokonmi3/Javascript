//


//WE are creating the variable in global scope , but we should avoid to do this ,can be achieved by anonymous function
//annonymous funtion which get executed immediately
//
//the program is loaded in browser mmeory so if many global variable it will be problem , 
//should reduce he global varaible.
//another program can change and clash can be between the names
//Avoid the global variable
//
//
//
// var a = 10
// var b =120
// console.log(a+b)
//in above program we are creating 2 global varaible
///
//
// function foo(){
// var a =10;
// var b=10;
// console.log(a+b);
// }
// foo()
// in above i am creating the foo as global variable
//
//
// (function(){
// 	var a =10;
// 	var b =10;
// 	console.log(a+b);
// })()

// IIFE- Immediately invoked function expression
// benefit , a and b are not accessible
// no function name is created 
// above and this is same foo
//==================================
// 

// // read and write operation 
// var a =10; //writing 10 to a
// console.log(a)// reading value of a

// var b;
// b=a;
// LHS(write)=RHS(read)
// reading a and writing to b
//===============================
// function greet(name){//name is in function scope and we are doing write operation on it by assigning value ashok
// 	console.log(name);//read operation on ashok
// }

// greet("ashok");
// 
// No LHS and RHS but still read and write is happening
// 
//============================


// 1) 
// var a ;
// console.log(a);// it will pring undefined

// 2)
// console.log(foo);// this will give syntax error so without declaration it wont work
                    // so declaration is required

// 3) it will work no error
// foo=10; // this will create in global scope var foo will create in local 
// console.log(foo);


// 2- read operation without declaration will throw the error
// 3 write operation without declaration will not throw error, it wil creates the variables in global scope
//############Global object 
// Global object is the window which load every thing

// when we create the global variable we are creating the property to the window object

// Type window in console log it will show the property of window object

// create an global var than type window  the  var will be part of window object property
//  type in browser var def="hello window object " , it will become the property of window object , so wen we create the property in global
// space we are creating property of windows object
// var a =10;
// function foo(){
// 	var b=10;
// }



//###################3
// Compilation and interpretation

// compilation convert code to  intermediate  code in c lang

// But in java script /browser execute the code without creating intermediate files

// Run time execuete the code directly

// Compilation:  it look for the nodes , 
// interpretatin: execute the code
// both happns together very fast , not observable...


// var a =10;
// var b =20;
// console.log(a+b);

// // Compilation : worried about variable declaration, looks for var key word it will register the variable 
// Global scope
//       a
//       b
// ignore the line console.log as no var 
// Interpretor

// ----------------
// var a =10;
// function myFun(){
// 	var b=20;
// 	var c=b;
// 	console.log(a+b);
// }
// myFun();


// compiler will register belwo variable 
// Global scope
//    a
//    myfn   // function is object and in global scope , 

// myFN Scope
//     b
//     c
// --------------------------------
// var myName="ashok"

// function greetName(name){
// 	console.log("hello " +name);
// }
// greet(myName);

// Global scope
//     myName
//     greetName

// greetName scope
//      name



// =================
// Execution step: it doesnot look at var part , it execute 
// for execution it will look at scope chain 

// var myName="ashok"
// function greetName(name){
// 	console.log("hello " +name);
// }
// greet(myName);

// Scope chain...
// Global scope
//     myName
//     greetName

// greetName scope
//      name

// so first line when executed, it will search the myname in global scope,it is present so ashok will be assigned to it 
// next is  greet(myName) will be executed , so interpreter search greet in global scope, as it is present 
// next it will check myName which is also present in the global scope so it found both variable
// function will be called and again assignment will happen in greet scope
// console.log-- search in function scope then global ,  is global object , it will keep going up till it not find, this is not registered , but it 
// is part of windows object and it has .log method
// it will search the name in 
// Than it will search for the name in greet scope it is not present, so it wil go one level up and it will find the name
// it will go one level up if it does not find the variable..

// ====================================================


// var a =10;
// function myFn(){
// 	var b=a;
// 	console.log(b);
// 	console.log(c);
// }

// myFn();




// Global
//   a
// myFn
//

// myFN
//  b

// interpreter:
// a=10 it will find a in glogal and use it 
// function execute
// var b=a , it will find b in myFn scope and than a it will find in global scope and execute this line
// 	console.log(b); b is inside myFn scope 
//console.log(c); c is not in myFn, go one level up so there is also not available,
//as it is read operation and so it will throw the errror

// incase of write 

// var a =10;
// function myFn(){
// 	var b=a;
// 	c=100
// 	console.log(c);
// }

// myFn();


// Global
//   a
// myFn
//
// myFN
//  b
//
// interpreter :
// c=100 it is write operation , c will not found in function and global scope .. as write operator it will create the 
// c in global scope and write the data to it as it is in global scope at that moment
// if we would have used var c =100 it would have caught in compiler process
// -- write operation is created in global scope

// if we donot use var , it will create the var in global scope which shud be avaodied so alwas use var to create variable

// ======================================


// var a = 10;

// function outer() {
//    var b = a;
//     console.log(b);

//     function inner() {
//         var b = 20;
//         var c = b;
//         console.log(c);
//     }
//     inner();
// }

// outer();

// console.log(a);
// console.log(b);
// global
// a
// outer


// outer()
// b
// inner

// inner
// b
// c


// inerpreter:
// a is in global so 10 is assigned 
// outer()-- global scope it is present so it will be executed 
// --b=a , outer give me b 
// outer give me a , outer is not having the a so it will go one level up and get a 
// --console.log will print b from outer scope
// -- execute inner , it will check in the outer and execute it 
// --- execution of inner , it will search the b , and allocate the b as 20 , this b is differ from the outer 
// -- c will get the b from scope of inner 
// -- console .log will be executed
// =============================================
// Now lets do one change in above program

// var a = 10;

// function outer() {
//     var b = a;
//     console.log(b);

//     function inner() {
//         var c = b;
//         console.log(c);
//         var b = 20;
//     }
//     inner();
// }

// outer();


// global
// a
// outer


// outer()
// b
// inner

// inner
// c
// b
//
// interpreter
// inner search for c it has c
// innerr search for b it has the b , and read the value of b , but value is not available so it will be undefined
// 
// 
// it is because there are 2 steps
// ================================
// console.log(a)
// var a =10

// a=10
// console.log(a)

// global
//  a

// interpreter execute the line console.log() it will print undefined

// this is called hoisting 