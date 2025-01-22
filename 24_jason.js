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

// var student = {
//   name: "harshan",
//   age: 20,
//   isCaptain: true,
//   sports: ['football', 'volleyball'],
//   wife: null
// }

// var jsn = JSON.stringify(student);
// console.log(jsn);
// console.log(typeof jsn);

// jsn1 = '{"name":"harshan","age":20,"isCaptain":true,"sports":["football","volleyball"],"wife":null}'

// const parsedData = JSON.parse(jsn1);
// console.log(parsedData);
// console.log(typeof parsedData);

// ======================

// Objects
// Arrays
// string
// number
// boolean
// null

// console.log(JSON.stringify(1))
// console.log(JSON.stringify('test'))
// console.log(JSON.stringify(true))
// console.log(JSON.stringify([1, 2, 3]))

// ------------------------------------------------------
// JSON is data-only cross-language specification, so some JavaScript-specific object properties are skipped by JSON.stringify.
// Namely:
// Function properties (methods).
// Symbolic properties.
// Properties that store undefined.


// var user = {
//   sayHi() { console.log("hello") },
//   something: undefined
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

// console.log(JSON.stringify(meetup))

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

// ======================
// JSON.stringify(): Convert JavaScript objects into a JSON-formatted string.
// JSON.parse(): Convert a JSON-formatted string into JavaScript objects.
// fs.writeFile(): Write JavaScript objects into a JSON file.
// fs.readFile(): Read JSO6k N data from a file and convert it into JavaScript objects.

// JavaScript object to write into a JSON file
// // File System, which is a built -in module in Node.js.
// // It provides functionality to interact with the file system,
// //  allowing you to read from, write to, and manipulate files and directories.
// ---------------------------
// // Sample data to write to a JSON file
const fs = require('fs');
// Object ---> json string --> wrote to file

// json file --> read data --> convert to java script object
// const data = {
//   name: "John Doe",
//   age: 30,
//   city: "New York",
//   skills: ["Python", "Machine Learning", "Automation"]
// };
// filedata = JSON.stringify(data, null, 4);

// fs.writeFileSync('24_abc.json', filedata);

// // // // Write data to a JSON file
// fs.writeFileSync('24_data.json', JSON.stringify(data, null, 4));
// console.log("Data written to file successfully.");

// // // // Read data from the JSON file
const jsonData = fs.readFileSync('24_data.json', 'utf8');
const parsedData = JSON.parse(jsonData);
console.log("Data read from file:", parsedData);

// // =================
// const fs = require('fs');

// // Reading from a JSON file
// const data = fs.readFileSync('data.json', 'utf8');

// // Parse the JSON data
// const jsonData = JSON.parse(data);

// // Display the data
// console.log("Data read from file:");
// console.log(jsonData);
// console.log(typeof jsonData);
// ======================
// Sample object
// const data = {
//   name: "Jane Smith",
//   age: 25,
//   hobbies: ["Reading", "Gaming", "Cycling"]
// };

// // Convert object to JSON string
// const jsonString = JSON.stringify(data, null, 4);

// // Output the JSON string
// console.log("JSON formatted string:");
// console.log(jsonString);
// =============

// JSON string
// const jsonString = `
// {
//    "name": "Alice",
//    "age": 22,
//    "active": true,
//    "courses": ["Math", "Physics"]
// }
// `;

// // Convert JSON string to JavaScript object
// const data = JSON.parse(jsonString);

// // Display the data
// console.log("Data parsed from JSON string:");
// console.log(data);
// console.log(typeof data); // Output the type
// =======================

// const fs = require('fs');

// // Nested JavaScript object
// const data = {
//    employee: {
//       name: "Tom",
//       age: 35,
//       address: {
//          street: "123 Main St",
//          city: "Los Angeles",
//          state: "CA"
//       }
//    },
//    salary: 60000,
//    status: true
// };

// // Writing the nested object to a JSON file
// fs.writeFile('nested_data.json', JSON.stringify(data, null, 4), (err) => {
//    if (err) {
//       console.error("Error writing to file:", err);
//    } else {
//       console.log("Nested data written to file successfully.");
//    }
// });

// // Reading the nested JSON file
// fs.readFile('nested_data.json', 'utf8', (err, jsonData) => {
//    if (err) {
//       console.error("Error reading file:", err);
//    } else {
//       const readData = JSON.parse(jsonData);
//       console.log("Nested data read from file:");
//       console.log(readData);
//    }
// });
// ========================
// // Error handling
// const invalidJsonString = "{name: John, age: 30}";

// try {
//    const data = JSON.parse(invalidJsonString);
// } catch (error) {
//    console.error("Error decoding JSON:", error.message);
// }

// =======================
// Import fs module to work with file system
// const fs = require('fs');

// // Load existing JSON data
// fs.readFile('data.json', 'utf8', (err, jsonData) => {
//    if (err) {
//       console.error("Error reading file:", err);
//       return;
//    }

//    // Parse JSON data into JavaScript object
//    const data = JSON.parse(jsonData);

//    // Modify data
//    data.age = 35; // Update age
//    data.skills.push("Cloud Computing"); // Add new skill

//    console.log(data); // Display updated data

//    // Write updated data back to JSON file
//    fs.writeFile('data.json', JSON.stringify(data, null, 4), (err) => {
//       if (err) {
//          console.error("Error writing file:", err);
//       } else {
//          console.log("Data updated successfully.");
//       }
//    });
// });

/* Study Notes:
1. `fs.readFile` reads the JSON file as a string.
2. `JSON.parse` converts the JSON string into a JavaScript object.
3. Modify the object as needed (e.g., changing values, adding elements).
4. `JSON.stringify` converts the modified object back to a JSON string.
5. `fs.writeFile` saves the updated JSON data to the file.

This process demonstrates updating and saving data in a JSON file.
*/
// ====================
// Import 'https' module to make API requests
// const https = require('https');

// // URL of a sample REST API that returns JSON data
// const url = "https://jsonplaceholder.typicode.com/users";

// // Send a GET request to the API
// https.get(url, (response) => {
//    let data = '';

//    // Collect data chunks
//    response.on('data', (chunk) => {
//       data += chunk;
//    });

//    // Process data after receiving full response
//    response.on('end', () => {
//       if (response.statusCode === 200) {
//          const users = JSON.parse(data); // Parse JSON

//          // Display each user's name, email, and city
//          users.forEach((user) => {
//             console.log(`Name: ${user.name}`);
//             console.log(`Email: ${user.email}`);
//             console.log(`City: ${user.address.city}`);
//             console.log('----------------');
//          });
//       } else {
//          console.error(`Error: ${response.statusCode}`);
//       }
//    });
// }).on('error', (err) => {
//    console.error("Request error:", err.message);
// });
// ================
// const https = require('https');

// // URL of the REST API
// const url = "https://jsonplaceholder.typicode.com/users";

// // Function to fetch and display data from API
// function fetchData() {
//    https.get(url, (res) => {
//       let data = '';

//       // Collect data chunks
//       res.on('data', (chunk) => {
//          data += chunk;
//       });

//       // Process the complete response
//       res.on('end', () => {
//          if (res.statusCode === 200) {
//             const users = JSON.parse(data); // Parse JSON data

//             console.log("User Data from API:");
//             console.log(JSON.stringify(users, null, 4)); // Pretty-print JSON data

//             // Access specific fields
//             users.forEach(user => {
//                console.log(`Name: ${user.name}`);
//                console.log(`Email: ${user.email}`);
//                console.log(`City: ${user.address.city}`);
//                console.log('----------------');
//             });
//          } else {
//             console.log(`Failed to retrieve data. Status code: ${res.statusCode}`);
//          }
//       });
//    }).on('error', (err) => {
//       console.log(`Error occurred: ${err.message}`);
//    });
// }

// // Execute the function
// fetchData();

