// Object function 

// Object 

// console.log(Object);

//console.log(Object());
// 
// 
// Function                  prototype object
//    prototype------------>  constructor
//                               |
//                               |
// object                        |
//    __proto__------------------
//    

var simple={}

var obj= new Object();

// console.log(simple);

// console.log(obj);

// console.log(Object.prototype);
// console.log(obj.__proto__);
// console.log(obj.__proto__===simple.__proto__)

// Object                              prototype
//      prototype----------------->   constructor

//                                       |
// obj                                   |
//     __proto__-------------------------
//     
//     

function Employee(){

}

var emp=new Employee()
//                                                  Object's Prototype
//                                                             |
// Employee function                   Employees prototype     |
//                                         __proto__-----------
//            prototype---------------       |     
//                                           |
// emp                                       |
//     __proto__-----------------------------


//console.log(emp.test
//  emp.prop="employee";
// console.log(emp.prop);

emp.__proto__.parentProp="parent of Employee"
console.log(emp.__proto__.parentProp);

console.log(emp.__proto__.__proto__===Object.prototype);

Object.prototype.grandparentProp="Grand Parent";
// console.log(emp.grandparentProp);

function foo(){}
var tmp=new foo();
tmp.grandfather="tmp grandfather";
console.log(tmp.grandfather);





