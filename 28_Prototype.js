// java does not have concept of class
// they have prototype

// function Bicycle(cadence,speed,gear,tyrePressure){
// //       // var this={};
//            this.cadence=cadence;
// 		this.speed=speed;
// 		this.gear=gear;
//     	this.tyrePressure= tyrePressure;

// 		this.inflateTires= function(){
// 			this.tyrePressure += 3;
// //every time a constructor is called this function object is created
// 		}
// // 		// retrun this;
// }

// var bicycle1=new Bicycle(50, 4,3,25);
// var bicycle2=new Bicycle(150, 40,3,25);

//each function will be duplicated..if we have many
//java script object doesnt own the method, they just have properties and any property could be
//a function
//every object will have function object ..
//for 1000 emp there will be 1000 copies..

// function foo(){}//an object is created and name as foo

// when ever the javascript engine process the function it creates 2 objects
// second is called prototype object
// how to access these object
// it creates a property which points to prototype
//
// console.log(foo.prototype);

// function   prototype
// prototype can be accessed by prototype property ..
// it is createing for all fnction even its not function object
// function greet(){
// 	console.log("hello");
// }

// console.log(greet.prototype);

// var myObj=new foo();
// console.dir(myObj.prototype);
// __proto__ is the property is create for any object created using new
// prototype object

// function
//    protytype   ------> Protype object
// //its not creating the object   still a prototype will be created
// //
// //
// //with new keyword

// function
//      prototype---> prototype object
//                      |
//                      |
// object               |
//    __proto__  -------

//    same for another object

// lets validate
//
// function foo(){}//an object is created and name as foo
// // console.log(foo.prototype);

// var newfoo=new foo();
// console.log(newfoo);

// now lets create a property for prototype

// function foo(){}//an object is created and name as foo
// console.log(foo.prototype);
// console.log(foo);

// var newfoo=new foo();
// foo.prototype.test="this is for the prototype";

// console.log(newfoo.__proto__.test);
// console.log(foo.prototype.test);
// console.log(newfoo.__proto__.test===foo.prototype.test);

// prototype define a blueprint for the object..
// if object has behavior , if not have they will lookup to the prototype
//
// newfoo.test="hi"
// console.log(newfoo.test);
// delete newfoo.test;
// console.log(newfoo.test);

// newfoo.hello1="hi1"
// console.log(newfoo.hello1);
//

// function Employee(name){ this.name=name;}

// // create couple of employee

// var emp1=new Employee("ashok");
// var emp2=new Employee("jim");

// what if i want to create a common property here ..
// modify the constructor object  , and add a function , that is not good
// if we have 100 emp there will be 100 function

// we can do that in prototype

// Employee.prototype.playPranks=function(){console.log("department is")};

// emp1.playPranks();
// emp2.playPranks();

//no matter how many object you create but only one copy of prototype..
//playPranks ability for all object , its in prototype
//look up for protitype
//prototype behaviour is handy
//
// var emp3=Employee("asd");//all emp created afterwords
// / lookup happns dynamically
// emp2.greet();//this will not work as its not there
//lets add it
// Employee.prototype.greet=function(){console.log("hello")};
// emp2.greet();
// the minute u create the property this will be available for all the object
// prototype is not classs , u need to define all thngs before hand
// dynamically u  can add anythng
//
//
function foo() {}

// foo.prototype//function has a property prototype
// var a=new foo();//object has a property __proto__
// a has property __proto__
// double under score is called dunder and this property is called  dunder-proto
//function has property prototype
//prototype has a property constructor
//this property will point to function//reference
// var proto=foo.prototype
// console.log(proto.constructor)

// what was the function is created the object?

// function foo(){}
// var a =new foo()
// console.log(a.__proto__.constructor);

// var b = new a.__proto__.constructor();
// console.log(b);

// not recommended to use
//these are just refreences
// a.__proto__.constructor=function bar(){};
// ==================
("use strict");

/*
===============================================================================
✅ JAVASCRIPT PROTOTYPES
===============================================================================

🎯 TOC:
1) Why prototypes exist (memory & inheritance)
2) __proto__ vs prototype (VERY IMPORTANT interview point)
3) Prototype chain lookup (dry-run style)
4) Constructor functions + prototype methods
5) Object.create() and manual inheritance
6) ES6 class syntax is just prototype-based under the hood
7) Overriding, shadowing, deleting properties
8) hasOwnProperty, in, Object.getPrototypeOf
9) Common mistakes and best practices

Prototype is a way for one object to use properties of another object.
A prototype is an internal reference object (linked via [[Prototype]]) that JavaScript uses to provide inheritance. 
When a property or method is not found on an object, JavaScript looks for it in its prototype.
Object.create(proto) creates a new object and sets its internal prototype to proto.
===============================================================================
*/

// Helper for cleaner logs
// function title(msg) {
//   console.log("\n" + "=".repeat(80));
//   console.log("📌 " + msg);
//   console.log("=".repeat(80));
// }

/* =============================================================================
1) Why Prototypes? (Memory benefit)
============================================================================= */

// title("1) Why Prototypes? (Memory benefit: methods shared, not copied)");

/*
If we create methods inside constructor, each object gets its own copy => memory waste.
If we put methods on prototype, all objects share ONE function.
*/

// function UserBad(name) {
//   this.name = name;
//   this.sayHi = function () {
//     return `Hi, I am ${this.name}`;
//   };
// }

// const u1 = new UserBad("Asha");
// const u2 = new UserBad("Ravi");

// console.log(u1.sayHi());
// console.log("u1.sayHi === u2.sayHi ?", u1.sayHi === u2.sayHi); // false (2 different function copies)
// -------------------
// function UserGood(name) {
//   this.name = name;
// }
// UserGood.prototype.sayHi = function () {
//   return `Hi, I am ${this.name}`;
// };

// const g1 = new UserGood("Asha");
// const g2 = new UserGood("Ravi");

// console.log(g1.sayHi());
// console.log("g1.sayHi === g2.sayHi ?", g1.sayHi === g2.sayHi); // true (shared)

/* =============================================================================
2) __proto__ vs prototype (MOST IMPORTANT)
============================================================================= */

// prototype - Belongs to function (used when creating objects)

// proto - Belongs to object (points to its parent)
/*
✅ obj.__proto__:
- A *hidden internal link* (officially [[Prototype]])
- Points to the object from which obj inherits.

✅ Function.prototype:
- Only functions have "prototype" property (when used as constructor with new)
- That "prototype" is assigned as obj.__proto__ for objects created by new.

In short:
new Fn() creates object o
o.__proto__ === Fn.prototype
*/

// function Car(brand) {
//   this.brand = brand;
// }

// console.log("Car.prototype is:", Car.prototype);
// const c1 = new Car("Tata");
// console.log("c1.__proto__ is:", c1.__proto__);

// console.log("c1.__proto__ === Car.prototype ?", c1.__proto__ === Car.prototype); // true
// console.log(
//   "Object.getPrototypeOf(c1) === Car.prototype ?",
//   Object.getPrototypeOf(c1) === Car.prototype,
// ); // true

// ✅ Note: __proto__ is legacy-ish but widely supported. Prefer Object.getPrototypeOf / setPrototypeOf

/* =============================================================================
3) Prototype Chain Lookup (How JS finds properties)
============================================================================= */

// title("3) Prototype Chain Lookup (Where JS searches: obj -> proto -> proto -> null)");

/*
When you do: obj.x
JS checks in this order:
1) Does obj have own property x?
2) If not, go to obj.__proto__ and check there
3) If not, go to that object's __proto__
4) Continue until prototype is null
If not found => undefined
*/

// const grandParent = { gp: "I am grandparent" };
// const parent = Object.create(grandParent);
// parent.p = "I am parent";
// const child = Object.create(parent);
// child.c = "I am child";

// console.log("child.c:", child.c); // own
// console.log("child.p:", child.p); // from parent prototype
// console.log("child.gp:", child.gp); // from grandParent prototype
// console.log("child.xyz:", child.xyz); // undefined

// // Prototype chain visibility
// console.log("Prototype of child:", Object.getPrototypeOf(child));
// console.log("Prototype of parent:", Object.getPrototypeOf(parent));
// console.log("Prototype of grandParent:", Object.getPrototypeOf(grandParent)); // usually Object.prototype

/* =============================================================================
4) Object.prototype at the top of most chains
============================================================================= */

// title("4) Object.prototype methods come from prototype chain");

// const obj = { a: 10 };

// console.log("obj.toString exists?", typeof obj.toString); // function
// console.log("obj.hasOwnProperty exists?", typeof obj.hasOwnProperty); // function

// /*
// Those are NOT inside obj.
// They come from Object.prototype
// */

// console.log("obj has own toString?", obj.hasOwnProperty("toString")); // false
// console.log("toString found via prototype?", "toString" in obj); // true

/* =============================================================================
5) Constructor Functions + prototype methods
============================================================================= */

// title("5) Constructor Functions + prototype methods + constructor property");

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// // Add shared methods
// Person.prototype.intro = function () {
//   return `I am ${this.name}, age ${this.age}`;
// };

// const p1 = new Person("Neha", 24);
// const p2 = new Person("Karan", 27);

// console.log(p1.intro());
// console.log("Shared method?", p1.intro === p2.intro); // true

// /*
// Person.prototype has a default property called "constructor"
// which points back to Person (unless overwritten improperly)
// */
// console.log("p1.constructor === Person ?", p1.constructor === Person); // true

/* =============================================================================
6) Overriding (Shadowing) and Deleting
============================================================================= */

// title("6) Overriding (Shadowing) and Deleting properties");

// const base = {
//   role: "BaseRole",
//   getRole() {
//     return this.role;
//   },
// };
// const emp = Object.create(base);

// // emp inherits role from base
// console.log("emp.role (inherited):", emp.role); // BaseRole

// // override/shadow by creating own property
// emp.role = "EmployeeRole";
// console.log("emp.role (own):", emp.role); // EmployeeRole
// console.log("emp.getRole():", emp.getRole()); // EmployeeRole (this.role is own)

// // delete own property => fallback to prototype
// delete emp.role;
// console.log("After delete emp.role:", emp.role); // BaseRole (back to inherited)

/* =============================================================================
7) Checking: hasOwnProperty vs "in"
============================================================================= */

// title("7) hasOwnProperty vs 'in' operator");
// console.log("Object.create(proto) creates a new object and sets its internal prototype to proto.")

// const aObj = Object.create({ inheritedX: 99 });

// /* aboe line will do
// aObj = {
//    ownY: 10
// }

// aObj.__proto__ = { inheritedX: 99 }

// aObj
//  ├─ ownY: 10
//  └─ __proto__ ──► { inheritedX: 99 }
// */
// aObj.ownY = 10;

// console.log("aObj.hasOwnProperty('ownY'):", aObj.hasOwnProperty("ownY")); // true
// console.log(
//   "aObj.hasOwnProperty('inheritedX'):",
//   aObj.hasOwnProperty("inheritedX"),
// ); // false

// console.log("'ownY' in aObj:", "ownY" in aObj); // true
// console.log("'inheritedX' in aObj:", "inheritedX" in aObj); // true (because it searches prototype chain)

/* =============================================================================
8) Object.create() for inheritance (clean & explicit)
============================================================================= */

// title("8) Object.create() inheritance (no constructor needed)");

// const animal = {
//   speak() {
//     return `${this.name} makes a sound`;
//   },
// };

// const dog = Object.create(animal);
// dog.name = "Bruno";
// dog.bark = function () {
//   return `${this.name} barks`;
// };

// console.log(dog.speak()); // from animal
// console.log(dog.bark()); // own

// console.log(
//   "dog.__proto__ === animal ?",
//   Object.getPrototypeOf(dog) === animal,
// );

/* =============================================================================
9) Prototype-based inheritance using constructor functions
============================================================================= */

function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

function Dog(name, breed) {
  // call parent constructor to set parent fields
  Animal.call(this, name);
  this.breed = breed;
}

/*
Important:
Dog.prototype should inherit from Animal.prototype
*/
Dog.prototype = Object.create(Animal.prototype);

/*
After above line, Dog.prototype.constructor is lost (points to Animal)
So reset it:
*/
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return `${this.name} (${this.breed}) barks`;
};

const d1 = new Dog("Bruno", "Labrador");

console.log(d1.speak()); // from Animal.prototype
console.log(d1.bark()); // from Dog.prototype
console.log("d1 instanceof Dog?", d1 instanceof Dog); // true
console.log("d1 instanceof Animal?", d1 instanceof Animal); // true
console.log("d1.constructor === Dog?", d1.constructor === Dog); // true

/* =============================================================================
10) ES6 class is still prototype under the hood
============================================================================= */

// title("10) ES6 class is prototype-based internally");

// class Employee {
//   constructor(name) {
//     this.name = name;
//   }
//   work() {
//     return `${this.name} works`;
//   }
// }

// const e1 = new Employee("Isha");
// const e2 = new Employee("Manu");

// console.log(e1.work());
// console.log("Shared method?", e1.work === e2.work); // true because methods are on Employee.prototype

// console.log("Employee.prototype has work?", Employee.prototype.hasOwnProperty("work")); // true
// console.log("e1.__proto__ === Employee.prototype ?", Object.getPrototypeOf(e1) === Employee.prototype);

/* =============================================================================
11) Changing prototype after object creation (dangerous in production)
============================================================================= */

// title("11) Changing prototype after object creation (use carefully)");

// const proto1 = { a: 1 };
// const proto2 = { b: 2 };

// const o = Object.create(proto1);
// console.log("o.a:", o.a); // 1

// // Change prototype (slow in engines, avoid in hot code)
// Object.setPrototypeOf(o, proto2);

// console.log("After setPrototypeOf:");
// console.log("o.a:", o.a); // undefined
// console.log("o.b:", o.b); // 2

/* =============================================================================
12) Null prototype objects (dictionary objects)
============================================================================= */

/*
Useful when you want a pure key-value map without inherited keys like toString.
*/
// const dict = Object.create(null);
// dict.apple = 10;
// dict["toString"] = "not a function here";

// console.log("dict.apple:", dict.apple);
// console.log("dict.toString:", dict.toString); // "not a function here"
// console.log("Does dict have hasOwnProperty?", dict.hasOwnProperty); // undefined (because no Object.prototype)

/* =============================================================================
13) Common Mistakes + Interview Notes
============================================================================= */

/*
✅ Mistake 1: Confusing prototype vs __proto__
- prototype is property on functions
- __proto__ is internal link on objects

✅ Mistake 2: Overwriting prototype with {} and losing constructor
Dog.prototype = { bark() {} }  // loses constructor link unless reset

✅ Mistake 3: Adding methods inside constructor => memory waste

✅ Mistake 4: Modifying Object.prototype in real apps (can break libraries)
Object.prototype.x = 10 // BAD practice generally

✅ Key interview lines:
- "JavaScript uses prototype chain for inheritance."
- "Property lookup walks up the chain until null."
- "Methods on prototype are shared across instances."
- "Class syntax is just a wrapper over prototypes."
*/

/* =============================================================================
14) QUICK CLASSROOM Q&A (for you to ask students live)
============================================================================= */

/*
Q1: Where does JS look first when we do obj.someProp?
A: obj itself (own properties), then obj's prototype chain.

Q2: If two objects created by new Person(), do they share prototype methods?
A: Yes, Person.prototype methods are shared.

Q3: Difference between 'in' and hasOwnProperty?
A: 'in' checks prototype chain also, hasOwnProperty checks only own props.

Q4: What does Object.create(proto) do?
A: Creates a new object whose prototype is proto.

Q5: What is at the top of most chains?
A: Object.prototype, then null.

Mini task:
Create a base object with method greet().
Create child using Object.create(base)
Override greet in child and call both.
*/

/* =============================================================================
15) MINI TASK SOLUTION (Optional)
============================================================================= */

// title("15) MINI TASK SOLUTION (Optional)");

// const baseObj = {
//   greet() {
//     return "Hello from base";
//   }
// };

// const childObj = Object.create(baseObj);
// childObj.greet = function () {
//   return "Hello from child";
// };

// console.log("childObj.greet():", childObj.greet()); // child
// delete childObj.greet;
// console.log("After delete, childObj.greet():", childObj.greet()); // base
