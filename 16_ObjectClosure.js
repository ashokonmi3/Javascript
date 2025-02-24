// object is basically collection of multiple values

// var myObj={};

// console.log(myObj);

// myObj.foo="value";

// console.log(myObj.foo);
 
// // // we can use . operator to access property of any object

// myObj.foo="hello";
// console.log(myObj.foo);
// we can change property any time
// we can add property any where freely
// 

// ==========================

// var myObj={
// 	foo:"value",
// 	age:30,
// 	address:{
// 		street:"main street",
// 		city:"bangalore",
// 		pincode:1234

// 	}
// };

// console.log(myObj);
// console.log(myObj.foo);
// console.log(myObj["foo"]);
// =========================
// var emp1={};
// emp1.firstName="ashok";
// emp1.lastName="sharma";
// emp1.gender="M";
// emp1.designation="Manager";

// var emp2={};
// emp2.firstName="harshan"
// emp2.lastName="s";
// emp2.gender="M";
// emp2.designation="developer";
// ======================
// function createEmployeeObject(firstName,lastName,gender,designation){
//    var emp={};
//    emp.firstName=firstName;
//    emp.lastName=lastName;
//    emp.gender=gender;
//    emp.designation=designation;
//    return emp;

// }

// var emp1=createEmployeeObject("ashok","sharma","M","Manager");
// console.log(emp1.firstName)
// var emp2=createEmployeeObject("harshan","s","M","developer");
// console.log(emp2);


// ==============================================
// If we have to create 1000 objects 
// first line (initialize object) and last line (return object) is common in above object
// JAva script provide a shortcut to avoid the 2 lines using constructor mode

// adding new keyword in front of function call we can create a function as constructor
// means used to create the object 

// so java script will take care of these 2 lines , it will create the empty object and return

// function Employee(firstName,lastName,gender,designation){
//    // var this={}; //this line javascript will add
//    this.firstName=firstName;
//    this.lastName=lastName;
//    this.gender=gender;
//    this.designation=designation;
//         //  return this;  //this line also javascript will add
// }

// var  emp1=new Employee("ashok","sharma","M","Manager");

// console.log(emp1);
// console.log(emp1.firstName);

// =====================================================

// Creating bicycle object diff way
// first
// var bicycle={
// 	"cadence":50,
// 	"speed":20,
// 	"gear":4
// };
// --------------------
//second  without constructor

// function createBicycle(cadence,speed,gear){
// 	var newBicycle={};
// 	newBicycle.cadence=cadence;
// 	newBicycle.speed=speed;
// 	newBicycle.gear=gear;
// 	return newBicycle;
// }

// var bicycle1=createBicycle(30, 4, 2);

// var bicycle2=createBicycle(40, 3, 4);
// /----------------------------

// 3) using constructor
// function Bicycle(cadence,speed,gear){
// 	// var newBicycle={};
// 	this.cadence=cadence;
// 	this.speed=speed;
// 	this.gear=gear;
// 	// return newBicycle;

// }

// var bicycle1=new Bicycle(30, 4, 2);

// var bicycle2=new Bicycle(40, 3, 4);
// console.log(bicycle1);
// console.log(bicycle2);

// this is a constructor in normal function mode
// constructor is starts with capital letter

// ==========================================
// constructor without new 
// function Bicycle(cadence,speed,gear){
// 	// var this={}; 
// 	this.cadence=cadence;
// 	this.speed=speed;
// 	this.gear=gear;
// 	// return newBicycle; 
// }

// var bicycle1= Bicycle(30, 4, 2);

// console.log(bicycle1);
// Bicycle1 will be undefined as we are not returning anything 
// ===================
// normal function with new
// function Bicycle(cadence,speed,gear){
// 	// var this={}provided by javascript
// 	var newBicycle={};
// 	newBicycle.cadence=cadence;
// 	newBicycle.speed=speed;
// 	newBicycle.gear=gear;
// 	return newBicycle;
//     // return this
// }

// var bicycle1= new Bicycle(30, 4, 2);

// console.log(bicycle1);
// Regular function still works with the new keyword , as 2 lins added extra
//=======================================
// 4 ways to call a function 

// first way regular way

// function foo(){
// 	console.log("hello");
// }
// foo();

// --------------
//second way as property

// var obj={};
// obj.foo=function(){
// 	console.log("hello");
// }

// obj.foo();

// ---------------
//3rd way -- constructor
// function foo(){
// 	console.log("hello");
// }

// new foo();
 
// ----------------------

// 4th way later


// ======================================
// every function has 2 implicit arguments this and arguments
// this values

// 1) normal execution: this refrencec points to global object
// this refers to global object

// function foo(){
// 	console.log("hello");
// 	console.log(this);
// }
// foo();

// // ==========================

// 2) 
// var obj={prop:"this is object itself"};
// obj.foo=function(){
// 		console.log("hello");
// 	console.log(this); //In a method, this refers to the object that is calling the method.
 
// }

// obj.foo();
// =====================
// 3) new keyword, this will be empty object
// 

// function foo(){
// 	//var this={}
// 	console.log("hello");
// 	console.log(this);
// // return this
// }

// new foo();

// 
//====================================== 
// createBicycle
// function Bicycle(cadence,speed,gear,tyrePressure){
// 	this.cadence=cadence;
// 	this.speed=speed;
// 	this.gear=gear;
// 	this.tyrePressure=tyrePressure;
// 	this.inflateTires=function(){
// 	this.tyrePressure+=3;
// 	}
// }

// var bicycle1= new Bicycle(50,34,5,25);
// bicycle1.inflateTires();
// console.log(bicycle1);

// var bicycle2=new Bicycle(30,32,4,30)
// bicycle2.inflateTires();
// console.log(bicycle2.tyrePressure);



// function Mechanic(name){
// 	this.name=name;
// }

// var mech= new Mechanic("ashok")
// mike.inflateTires=bicycle1.inflateTires;
// mike.inflateTires();// mike does not have tyrepressure property 
// so this will not work
// ======================

// how to make it generric

// 4th way
// function foo(){
// console.log("hello");
// }
// foo.call();
// foo();
// ================
// function Bicycle(cadence,speed,gear,tyrePressure){
// 	this.cadence=cadence;
// 	this.speed=speed;
// 	this.gear=gear;
// 	this.tyrePressure=tyrePressure;
// 	this.inflateTires=function(){
// 		this.tyrePressure+=3;
// 	}
// }

// var bicycle1= new Bicycle(50,34,5,25);
// bicycle1.inflateTires();
// console.log(bicycle1);




// function Mechanic(name){
// 	this.name=name;
// }

// var mech= new Mechanic("ashok")
// mech.inflateTires=bicycle1.inflateTires;
// mech.inflateTires.call(bicycle1);

// console.log(bicycle1);


// call is a method of JavaScript functions that allows you to invoke a function with an explicit this context.
// Normally, this inside a method refers to the object it was called on. However, with call, you can specify any object to be the this value when calling the function.
// call is useful when you want to execute a method on a different object without permanently changing the method’s association.
// It provides flexibility in how and where methods can be applied, allowing for dynamic binding of this.
// Example Illustration:
// Here’s a step-by-step simulation:

// mech.inflateTires references bicycle1.inflateTires.
// mech.inflateTires.call(bicycle1) is called.
// Inside inflateTires, this is bicycle1.
// bicycle1.tyrePressure is incremented by 3.
// Final State:
// bicycle1.tyrePressure is updated to 31.
// mech still has a reference to inflateTires, but no direct changes are made to mech since this was explicitly set to bicycle1.