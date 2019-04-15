// global function 
// function are object  this is global function and its type is function
// it is object as well
// there are global function which is availble whic is called Object 

console.log(Object);
console.log(Object());
// like global window object , there are some function which are object global fution

// Refresher-->

// Function            prototype
//    prototype------>  constructor
//                      |
//                      |
// object               |
//      __proto__-------




// to figure out who creates this particular object 
// what was the function which create this object
// what is constructor function for this object i can use donder
// project and than we can access the constructor

// how we create the object 
// simplest way
var simple={}


// other way is calling in constructor mode
var obj=new Object();

console.log(simple);
console.log(obj); 

// these are 2 diff way 

// how u know both are doing same thing?
// donder proto will point prototype property of object

// console.log(Object.prototype)

// when java script created object it created the prototype also
// console.log(obj.__proto__)
// 
// what will be dunder for simple? if it has and than what it is 
// // console.log(simple
// .__proto__)

// console.log(obj.__proto__==simple.__proto__)
// simple has dunder proto which point to the object prorotype
// simple is also call the new object so both are same

so 

// Object                      prototype
//        prototype---->       constructor
//                              |
//                              |
//  __proto__------------------      


// object is a global function which is availble across
// it has prototype property 
// if we create an object it will have dunder propertywhich will
// point to the  prototype 
// global object 
// if we not using the constuctor it is autometically
// using the new on global function object





// function Employee(){}
//  var emp = new Employee()
// emp object is created by /
// 
// the autometically created prototype objects are created using new Object


Employee function                  Employee's Prototype
          prototype------------->
                                         |
                                         |
emp                                      |
  __proto__-------------------------------



if we are not using constructor it will use the default Object
Employee prototype object is also an object , which we have not created using
new function....
The autometically  created prototype object will be created 
using new Object()
using Object function 


so we have a hirerchy here emp dunder proto pointing 
to prototype object and  prototype's dunder proto is 
pointing to object function

 // console.log(emp.test)
explain the diag
it will see the object prototype

// emp.prop="employee";
// console.log(emp.prop);
// emp.__proto__.parentProp="Parent of Employee";
// console.log(emp.__proto__.parentProp);
// console.log(emp.__proto__.__proto__===Object.prototype)

// Object.prototype.grandparentProp="Grant Parent";
// console.log(emp.grandparentProp);
//we are adding property to the every object if we put to the object
// adding the property to the Object 

// function foo(){

// }
//  var tmp= new foo();
//  console.log(tmp.grandparentProp);
// this property will come from object protorype 
//  both good and bad 
//  object prototype is grandfather of all the objects 

// unless the object does not have the same property///
// the 
//  function Employee(name){
//  	this.name=name;
//  }


//  Employee.prototype.getName=function(){return this.name;}


//  var emp1=new Employee("JIM");
//  console.log(emp1.getname());

//  function Manager(name,dept){this.name=name; this.dept= dept}
//  