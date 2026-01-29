/************************************************************
 * JAVASCRIPT OBJECTS, CONSTRUCTORS, this, AND call()
 * CONCEPTS, READING NOTES, AND EXAMPLES
 ************************************************************/

/*
------------------------------------------------------------
OBJECT BASICS
------------------------------------------------------------
- An object is a collection of multiple values.
- Data is stored in key:value pairs (also called properties).
- Objects are used to represent real-world entities:
  person, employee, product, vehicle, etc.
- Properties can be added, updated, and removed dynamically.
*/

// object is basically collection of multiple values

// var myObj={};

// console.log(myObj);

// myObj.foo="value";

// console.log(myObj.foo);

// // // // // we can use . operator to access property of any object

// myObj.foo="hello";
// console.log(myObj.foo);
// we can change property any time
// we can add property any where freely
//

/*
Notes:
- Dot notation is simple and commonly used: obj.property
- Bracket notation is powerful and supports dynamic keys: obj["property"]
- You can add new properties anytime: obj.newProp = ...
- You can update existing properties anytime: obj.prop = newValue
*/


/*
------------------------------------------------------------
OBJECT LITERALS AND NESTED OBJECTS
------------------------------------------------------------
- Object literal is the easiest way to create an object.
- An object can contain another object (nested object).
- Nested objects are used to group related data.
*/

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

/*
Notes:
- myObj.address is another object stored inside myObj
- Access nested values like:
  myObj.address.city
  myObj["address"]["city"]
*/


/*
------------------------------------------------------------
CREATING MULTIPLE OBJECTS MANUALLY
------------------------------------------------------------
- Creating objects manually works, but it becomes repetitive.
- If you need many objects with same structure, manual creation is not efficient.
*/

// // =========================
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


/*
------------------------------------------------------------
FACTORY FUNCTION (CREATING OBJECTS USING A FUNCTION)
------------------------------------------------------------
- A factory function creates and returns objects.
- It reduces repetition because the structure is written once.
- Useful when you want many objects with same properties.
*/

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

/*
Notes:
- createEmployeeObject creates a new object every time it is called
- This approach is clear and works well
- But JavaScript also provides constructor-style creation using `new`
*/


/*
------------------------------------------------------------
CONSTRUCTOR FUNCTIONS (USING new)
------------------------------------------------------------
If we have to create many objects:
- Initializing empty object and returning it is repetitive in factory pattern.
- JavaScript provides a shortcut using constructor mode.

Adding `new` before a function call:
- JavaScript automatically creates an empty object
- Sets `this` to that object
- Returns that object automatically (if no other object is returned)

Constructor naming convention:
- Starts with a capital letter to indicate it is a constructor.
*/

// ==============================================
// If we have to create 1000 objects
// first line (initialize object) and last line (return object) is common in above object
// Java script provide a shortcut to avoid the 2 lines using constructor mode

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

/*
Important:
- Without `new`, `this` may point to global object (non-strict) or be undefined (strict).
- With `new`, `this` points to the newly created object.
*/


/*
------------------------------------------------------------
CREATING A BICYCLE OBJECT IN DIFFERENT WAYS
------------------------------------------------------------
Objects can be created in multiple ways depending on the requirement.
*/

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
// constructor starts with capital letter


/*
------------------------------------------------------------
CONSTRUCTOR WITHOUT new
------------------------------------------------------------
If you call a constructor function without `new`:
- It becomes a regular function call
- It will not automatically return an object
- `this` can behave unexpectedly
*/

// ==========================================
// constructor without new we will get undefined
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

/*
Important clarification:
- bicycle1 is undefined because the function returns nothing.
- But the assignments to `this` may still create issues:
  - In non-strict mode, `this` can point to global object and create global variables.
  - In strict mode, `this` is undefined and will throw an error when assigning properties.
*/


/*
------------------------------------------------------------
REGULAR FUNCTION WITH new
------------------------------------------------------------
A normal function that explicitly returns an object
will still work with `new`, but behavior depends on return value.

If a function returns an object explicitly:
- that returned object is the result
If it does not return an object explicitly:
- `this` becomes the result when used with new
*/

// ===================
// normal function with new
// function Bicycle(cadence,speed,gear){
// 	// var this={} provided by javascript
// 	var newBicycle={};
// 	newBicycle.cadence=cadence;
// 	newBicycle.speed=speed;
// 	newBicycle.gear=gear;
// 	return newBicycle;
//     // return this
// }

// var bicycle1= new Bicycle(30, 4, 2);

// console.log(bicycle1);
// Regular function still works with the new keyword , as 2 lines added extra


/*
------------------------------------------------------------
WAYS TO CALL A FUNCTION
------------------------------------------------------------
Functions can be called in different ways.
The value of `this` depends on how the function is called.
*/

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


/*
------------------------------------------------------------
IMPLICIT ARGUMENTS: this AND arguments
------------------------------------------------------------
Every function in JavaScript has access to:
- this       (depends on call style)
- arguments  (contains parameters passed to the function)

Understanding `this` is essential for objects, constructors, methods, and call/apply/bind.
*/


/*
------------------------------------------------------------
this IN NORMAL FUNCTION EXECUTION
------------------------------------------------------------
Normal execution:
- In non-strict mode: this refers to global object
- In strict mode: this is undefined
*/

// ======================================
// every function has 2 implicit arguments this and arguments
// this values

// 1) normal execution: this reference points to global object
// this refers to global object

// function foo(){
// 	console.log("hello");
// 	console.log(this);
// }
// foo();


/*
------------------------------------------------------------
this WHEN FUNCTION IS CALLED AS A METHOD
------------------------------------------------------------
When called as object property:
- this refers to the object that is calling the method.
*/

// // ==========================

// 2)
// var obj = { prop: "this is object itself" };
// obj.foo = function () {
//     console.log("hello");
//     console.log(this); // In a method, this refers to the object calling the method.
// }

// obj.foo();


/*
------------------------------------------------------------
this WHEN USING new (CONSTRUCTOR CALL)
------------------------------------------------------------
When using new:
- JavaScript creates a new empty object
- this points to that new object
- properties are assigned to that new object
*/

// =====================
// 3) new keyword, this will be empty object
//

// function foo(){
// 	// var this={}
// 	console.log("hello");
// 	console.log(this);
// // return this
// }

// new foo();


/*
------------------------------------------------------------
ADDING METHODS INSIDE CONSTRUCTOR (BICYCLE EXAMPLE)
------------------------------------------------------------
Methods can be created inside constructor functions.
This creates a separate copy of the method for every object created.
*/

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

/*
Note:
- inflateTires uses this.tyrePressure
- It depends on this pointing to a bicycle object
*/


/*
------------------------------------------------------------
METHOD BORROWING PROBLEM (this CONTEXT ISSUE)
------------------------------------------------------------
If we copy a method from one object to another,
this may not point to the expected object.

This is a common real-world issue when passing methods around.
*/

// function Mechanic(name){
// 	this.name=name;
// }

// var mech= new Mechanic("ashok")
// mike.inflateTires=bicycle1.inflateTires;
// mike.inflateTires();// mike does not have tyrepressure property
// so this will not work

/*
Important clarification:
- The above uses mike but mike is not defined.
- If the intention is mech, then mech.inflateTires = bicycle1.inflateTires.
- Even then, calling mech.inflateTires() will use this = mech
  and mech does not have tyrePressure, so it won't work properly.
*/


/*
------------------------------------------------------------
CALL() TO CONTROL this EXPLICITLY
------------------------------------------------------------
call is a method of JavaScript functions that allows you to invoke a function
with an explicit this context.

Normally, this inside a method refers to the object it was called on.
However, with call, you can specify any object to be the this value when calling the function.

call is useful when you want to execute a method on a different object
without permanently changing the method’s association.

It provides flexibility in how and where methods can be applied,
allowing for dynamic binding of this.
*/


/*
Example: Using call to run inflateTires on bicycle1 explicitly
*/

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

/*
Step-by-step simulation:
- mech.inflateTires references bicycle1.inflateTires
- mech.inflateTires.call(bicycle1) is executed
- Inside inflateTires, this points to bicycle1
- bicycle1.tyrePressure is incremented by 3

Final state:
- bicycle1.tyrePressure increases
- mech is not modified (because this was explicitly set to bicycle1)
*/


/*
------------------------------------------------------------
ADDITIONAL IMPORTANT NOTES (USEFUL FOR STUDENTS)
------------------------------------------------------------

Dot vs Bracket Access:
- obj.key is used when key is a valid identifier
- obj["key"] is used when:
  - key is dynamic (stored in a variable)
  - key has spaces or special characters

Constructor Best Practice:
- Constructor functions should be called with new
- If forgetting new, strict mode will throw errors when assigning to this

Method Best Practice:
- If the same method is shared across many objects,
  placing it on the prototype is more memory-efficient.
  (Prototype topic can be taught after this module.)

call vs apply vs bind (quick awareness):
- call(thisArg, a, b, c)   passes arguments normally
- apply(thisArg, [a,b,c])  passes arguments as array
- bind(thisArg)            returns a new function with fixed this
*/


/*
------------------------------------------------------------
END OF OBJECTS, CONSTRUCTORS, this, AND call() NOTES
------------------------------------------------------------
*/
