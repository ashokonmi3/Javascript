
/*
Java script is a object oriented language
But it is not class based language
class is not required to create object

JS object are free form -- add any time anywhere
*/

//Object creation
//1) inline

// var myObj={};

// console.log(myObj);


// myObj.prop="hello";//on the fly dynamically
// console.log(myObj);// key map
// myObj.prop2=123;
// console.log(myObj);

// console.log(myObj.prop);

// console.log("the number property is  "+ myObj.prop2);


// //2) Object literal
// var myObj={
//             prop1:"hello",
//             prop2:123,
//             prop3: true
//           };


// console.log(myObj)

// var myArray=["java","Python","javascript"];
// var person = { lastName:"Doe", age:50, eyeColor:"blue",firstName:"John"};
// console.log(person)
// ;
// var person = {
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
//     eyeColor:"blue"
// };
// console.log(person)
// console.log(person.age)
// console.log(person["firstName"])
// // console.log(person[firstName])

// console.log(" property that does not exist " +person.prop3);


//no access modifier
// any property is accessible
// accessing property
// 1)objectName.propertyName
// 2) objectName["propertyName"]
// what if property does not exists


/*
Summary- Object 
1) Free form- not bound to a class
2) Object literal notation to create objects {}
3) Object properties can be accessible directly
4) New properties can be added on objects directly
5 object can have methods
*/


/*
When to use . when to use []

use [] notation when:
 Property name is reserved word/invalid identifier
 Property name starts with number
 Property name is dynamic 
 can be interchanged
 */
 
 
//  var myObj={
//             prop:"hello",
//             prop1:123,
//             prop2: true ,
//                 1: "javascript"
//           };

// console.log(" property that  exist " + myObj.prop1);
// console.log(" property that does not exist " +myObj[1]);


// var propertyName="prop1";

// console.log(myObj[propertyName]);

// Preferred . notation because its faster
// 
// 
// 
// REvisiting the  ===


// var myObj = {
// 	"myProp": "hello"
// };


// // if memory location is same  comparison return the true
// myObj2=myObj;

// console.log(myObj2.myProp);

// if (myObj===myObj2){
// 	console.log("object are same")
// }
// else {
// 		console.log("object are not same")

// }



// Re vesiting undefined and null
// 
// var person ={
// 	name:"ashok",
// 	surname: "sharma"

// };
// console.log(person.age);

// it wont show error , this is how java script works if property doesnot exists it will return undefined


// Set a property midd name and set the property as null , 
// If property is null mean its  not object missing a middle name but it has a property empty 
// somebody will look at this he will get to know its not missing the middle name but its has empty value..


// Deleting the property
// If i want to remove a property

// var person ={
// 	name:"ashok",
// 	surname: "sharma",
// 	middlename: null,
// 	age:25
// };

// person.age=undefined;
// console.log(person);

// console.log(person.middlename);
// console.log(person.age);
// console.log(person.class);

// // is this good 

// console.log(person);
// 
// 
// 
/*
* Browsers memory is used for variable or object..
* same object will point to same memory location...
* object which has a property which is another object
*/
//Nested Object
// var myObj={ "prop": "hello",
//             "prop1": "hello world",
//             "prop2": true,
//             "prop3": 123,
//             "objProp":{
//                         "innerPop" : "Inner Property",
//                         newinner: "new inner property"
//                      }
//           };

// console.log (myObj.objProp.innerPop);


// myObj.objProp.newInner= "new Inner Property"
// console.log (myObj.objProp.newInner);
//  console.log (myObj.objProp["newInner"]);

//  console.log (myObj);
// //How to delete the  object property




// var x =10
// x="hello"
// console.log(x)
// Wrapper object

// var st="hello World"
// console.log (typeof(st));
// console.log (st.length);
// // how it is working string is primitive data its not object
// java script has equivalent object for all its primitive data type
// When we do like this js interprete will take string and convert to equivalent object,
//  wen it convert it to object length property will available to it
// The wrapper objects are temporary the value will not be assigned to the st all hv primitive object


var d = new Date();
// s=28012018
// console.assert(operand1 === operand1, 'Title');
// var d = new Date(s);
console.log(d)
console.log (typeof(d));
console.log (d.getMonth());
console.log (d.getYear());//deprecated returns the result from 1900
console.log (d.getFullYear());//deprecated

console.log(d)


// con