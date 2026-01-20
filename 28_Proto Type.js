// function Bicycle(cadence,speed,gear,tyrePressure){
// 	this.cadence=cadence;
// 	this.speed=speed;
// 	this.gear=gear;
// 	this.tyrePressure=tyrePressure;
// 	this.inflateTires=function(){
// 		this.tyrePressure += 3;
// 	}
// }

// var bicycle1=new Bicycle(50,4,3,2);
// var bicycle2=new Bicycle(40,3,2,1);

// function foo(){}

// console.log(foo.prototype);

// function greet(){
// 	console.log("hello");
// }

// console.log(greet.prototype);

// function foo(){}
// var myObj=new foo();
// console.log(myObj.__proto__);

// function(foo)
//         pototype------->prototype object 
//                          |
// object(newfoo)                   |
//        __proto__---------

// function foo(){}
// var newfoo=new foo;
// console.log(foo.prototype);
// console.log(foo);

// var newfoo= new foo();
// foo.prototype.test= " this is for the prototype"// adding the property to prototype
// console.log(newfoo.__proto__.test);
// console.log(newfoo.__proto__.test==foo.prototype.test);
// newfoo.test="hi";
// console.log(newfoo.test);
// delete newfoo.test;
// console.log(newfoo.test);
// newfoo.hello1="hello";
// console.log(newfoo.hello1);

// function Employee(name){this.name=name;}

// var emp1= new Employee("ashok");
// var emp2= new Employee("harshan");
// Employee.prototype.dept=function (){console.log("department is ");}
// emp1.dept();
// emp2.dept();


// var emp3=new Employee("jim");
// emp3.dept();

// Employee.prototype.greet=function(){console.log("hello");}

// emp3.greet();
// emp1.greet();

// foo --- proptype---> prototype object 
//    obj----> __proto__---> prototype object
//    __proto__ is called dunder proto
// function has a property "prototype"
// this property will point to prototype object

// every object will have a property __proto__ (dunder proto) which will
// point to prototype object

// function foo(){};
// var a =new foo();
// console.log(a.__proto__.constructor);
// var b = new a.__proto__.constructor();
// console.log(b);


