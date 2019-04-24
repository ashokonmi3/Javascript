// "use strict"
// SCOPE is a portion of program where the variable is accessible
// Every variable is not accessible everywhere.

// Global Scope: variable is accesssible from anywhere

// Bocks created by functions, scope is created  
// Scoce can be in hirerchy  scope inside sope


 // In jacasctipt function creates the scope

// var a;
// a=5;
// console.log(a);
// console.log(b);

// Other language {} creates the scopes like below

//block

// var name="harshan";

// if (name==="harshan"){
// 	var department="engineering";
// }

// console.log(name);
// console.log(department);

// No scope is created in above code


// var name="harshan";
// function allocateDepartment(){
// 	if (name==="harshan"){
// 		var department="engineering";
// 	}
// 	return department;
// }

// var dept=allocateDepartment();
// console.log(name);
// console.log(department);// this  variable is local t the function it is not available in the global scope so not print
// console.log(dept);

//*********** Whatever is available in child scope can not be access by global scope , global scope things can be accessible by child scope

//==============================
// function fun() {
//     { //block starts
//         var foo = 4;
//     } //block ends
//     console.log(foo);

// }

// fun();
// console.log(foo);
//==================================

// var top =10;
// function foo(){
// 	var inner=20;
// 	console.log(inner);
// }

// foo();
//=================================

// var top=10;
// var inner=100;
// function foo(){
// 	var inner=20;
// 	console.log(inner);
// }

// foo();
// console.log(inner);
//==================================
// function add(){
// 	var a =10;
//     var b =20;
//     console.log(a+b);
// }

// add();
// console.log(a+b);

//================================
// var x="global";
// function f(){
// 	var x="local";
// 	console.log(x);//local
// }
// f();
// console.log(x)//global
//==================================

// var name="ashok";
// function printGreeting(name){//name is in function scope only and value is assigned harshan
// 	console.log("hello"+name);
// }
// printGreeting("harshan");
// console.log(name);
//================================
function f(){
	console.log(bar);
	var bar="abc";
	console.log(bar);
}

f();
// console.log(a);
//=============================





