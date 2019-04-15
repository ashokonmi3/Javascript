// / JSON...
// JavaScript object notation
// Data interchange format 
// language independent 
// this is text only format 
// data is in name /value pairs 
// it is seprated by comma 

// JavaScript provides methods:

// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object.

// var student={
// 	name:"harshan",
// 	age:20,
// 	isCaptain:true,
// 	sports:['football','volleyball'],
// 	wife:null
// }

// var jsn=JSON.stringify(student);
// console.log(jsn);
// console.log(typeof jsn); 

// Objects
// Arrays
// string
// number
// boolean
// null

// console.log(JSON.stringify(1))
// console.log(JSON.stringify('test'))
// console.log(JSON.stringify(true))
// console.log(JSON.stringify([1,2,3]))

// ------------------------------------------------------
// JSON is data-only cross-language specification, so some JavaScript-specific object properties are skipped by JSON.stringify.
// Namely:
// Function properties (methods).
// Symbolic properties.
// Properties that store undefined.


// var user={
// 	sayHi(){console.log("hello")},
// 	something:undefined
// }

// console.log(JSON.stringify(user))
// =================================================

// var meetup = {
//   title: "Conference",
//   room: {
//     number: 123,
//     participants: ["john", "ann"]
//   }
// };

// console.log( JSON.stringify(meetup) )

// -----------
// there must not be any circular dependency , other wise it will throw error

// var room = {
//   number: 23
// };

// var meetup = {
//   title: "Conference",
//   participants: ["john", "ann"]
// };

// meetup.place = room;       // meetup references room
// room.occupiedBy = meetup; // room references meetup

// var a=JSON.stringify(meetup); 
// console.log(a)
// ===========================================
// Excluding and transforming: replacer

// JSON.stringify(value: any, replacer?: any, space?: any)
// value
// A value to encode.
// replacer
// Array of properties to encode or a mapping function function(key, value).
// space
// Amount of space to use for formatting
// // 
// 
 // let json = JSON.stringify(value[, replacer, space])

// var room = {
//   number: 23
// };

// var meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup references room
// };

// room.occupiedBy = meetup; // room references meetup

// console.log( JSON.stringify(meetup, ['title', 'participants']) );
// --------
// // {"title":"Conference","participants":[{},{}]}
// // 
// function replacer(key, value) {
  // Filtering out properties
//   if (typeof value === 'string') {
//     return undefined;
//   }
//   return value;
// }

// var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};
// console.log(JSON.stringify(foo, replacer));

// console.log(JSON.stringify(foo, ['foundation', 'month'])); 

// ----------------------
// Formatting: spacer

// The third argument of JSON.stringify(value, replacer, spaces) is the number of spaces to use for pretty formatting.
// spacer = 2 tells JavaScript to show nested objects on multiple lines, with indentation of 2 spaces inside an object:
// var user = {
//   name: "John",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true
//   }
// };

// console.log(JSON.stringify(user, null, 8));
// console.log(JSON.stringify({ a: 2 }, null, ' '));
// =====================================
// // 
// Like toString for a string conversion, an object may provide method 
// toJSON for to-JSON conversion. JSON.stringify automatically calls it if available.
// var obj = {
//   foo: 'foo',
//   toJSON: function() {
//     return 'bar';
//   }
// };
// console.log(JSON.stringify(obj));        // '"bar"'
// console.log(JSON.stringify({ x: obj })); // '{"x":"bar"}'
// -------------
// var room={
// 	number:23,
// 	toJSON(){
// 		return this.number;
// 	}
// }

// console.log(JSON.stringify(room))
// -----------

// var obj = {
//   foo: 'foo',
//   toJSON: function() {
//     return 'bar';
//   }
// };
// JSON.stringify(obj);        // '"bar"'
// JSON.stringify({ x: obj }); // '{"x":"bar"}'

// var obj2 = {
//   foo: 'foo',
//   toJSON: function(key) {
//     if (key === '') {
//       return 'bar only';
//     } else {
//       return 'bar in ' + key;
//     }
//   }
// };

// console.log(JSON.stringify(obj2));         // '"bar only"'
// console.log(JSON.stringify({ x: obj2 }));  // '{ "x":"bar in x"}'
// console.log(JSON.stringify([obj2, obj2]));

// =====================================
// JSON.parse

// var value = JSON.parse(str[, reviver]);
// str
// JSON-string to parse.
// reviver
// Optional function(key,value) that will be called for each (key,value) pair and can transform the value.

// var num=JSON.stringify([9,3,4,5])
// console.log(num);

// var num="[9,3,4,5]"
// console.log(num[0]);

// number=JSON.parse(num);
// console.log(number);
// console.log(number[0]);


// var user='{"name":"ashok", "age":30, "isCaptain":false}';
// console.log(typeof user);
// userObject=JSON.parse(user);
// console.log(userObject);
// console.log(typeof userObject);



// var user='{"name":"ashok", "age":30, "isCaptain":false, "birthday": new Date(2000,2,3)}';
// console.log(userObject=JSON.parse(user));


// var str='{"title":"meeting"', "abcd":"2017-11-3330T12:00:00:000Z"}';
// var str = '{"title":"Conference","date":"2017-11-30"}';

// var str1=JSON.parse(str,function(key,value){
// 	if (key=='date')
// 	return new Date(value);
// 	return value;
// });

// console.log(str1);

// var str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';




// var user = {
//   name: "John Smith",
//   age: 35
// };



