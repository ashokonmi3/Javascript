
//Hoisting

// variable declaration moved to toP
// first compiler look at var
// all var will go to top


// a=10;
// console.log(a);
// c++
// var a ;
// var b;
// var c;



// so it does not matte where are you declaring the object/variable
// compiler will read them
// so it will be hoisted
// this works for both function and variables
// ===================================

myFun();

function myFun(){

	console.log(10);
}

// hoisting will work here
// =========================



// function fnA(){
// 	fnB();
// }

// function fnB(){
// 	fnA()
// }

// fnA();

// so which function to call first
// declaration will happen first so u can call any function first
// ================================
 
 // fnA()

//  var fnA=function(){
// 	console.log(5);
// }
 // fnA()// it will work

// this will not work , because its a variable..

// when interpreter will execute the code it will find the fnA in global scope but that 
// time it is not initialzed so correct thing is 


// fnA()
// function fnA(){
// 	console.log(5);
// }
// ==================================
// 'use strict';
// var myName
// myName="ashok";
// b=45
// console.log(b);
// function myFun(){
// 	"use strict";
//    var a=45;
//      // a=45;

// }


// myFun();
// 
// "use strict";
// myObj={"name":"ashok"};
// 
// var a=45;
// delete a;
// function myFun(a,a){};

// var a =010;
 // var arguments="abc"
 // var var="abc"

 // var private="abc"
 // var static="xyz"
