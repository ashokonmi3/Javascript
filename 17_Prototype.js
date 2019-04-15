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
function foo(){

}

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
