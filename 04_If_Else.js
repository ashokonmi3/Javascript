// var year=2015
// if (year == 2015) {
//   console.log( "That's correct!" );
//   console.log( "You're so smart!" );
// }


// var year = prompt('In which year was ECMAScript-2015 specification published?', '');

// var year=2015

// if (year < 2015) {
//   console.log( 'Too early...' );
// } else if (year > 2015) {
//   console.log( 'Too late' );
// } else {
//   console.log( 'Exactly!' );
// }



// var accessAllowed;
// var age = 28;
// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// console.log(accessAllowed);

// Ternary Operator
// var result = condition ? value1 : value2

// var age = 28;
// // var accessAllowed = (age > 18) ? true : false;
// var accessAllowed = (age > 18) ? 28 : 20;

// console.log(accessAllowed);


// var age =  10;

// var message = (age < 3) ? 'Hi, baby!' :(age < 18) ? 'Hello!' :(age < 100) ? 'Greetings!' :'What an unusual age!';
// console.log( message );

// var age =  181;
// // // Same logic with ifelse
// if (age < 3) {
//   message = 'Hi, baby!';
// } else if (age < 18) {
//   message = 'Hello!';
// } else if (age < 100) {
//   message = 'Greetings!';
// } else {
//   message = 'What an unusual age!';
// }

// console.log( message );


// Logical operator 

// || OR Operator
// console.log( true || true );   // true
// console.log( false || true );  // true
// console.log( true || false );  // true
// console.log( false || false ); //false


// if (0 || 0) { // works just like if( true || false )
//   console.log( 'truthy!' );
// }


// var hour = 21;

// if (hour < 10 || hour > 18) {
//   console.log( 'The office is closed.' );
// }
// else {
// 	  console.log( 'The office is open.' );
// }

// var hour = 21;
// var isWeekend = false;

// if (hour < 10 || hour > 18 || isWeekend) {
//   console.log( 'The office is closed.' ); // it is the weekend
// }
// else {
// 	  console.log( 'The office is open.' );
// }


// console.log( true || 'no matter what' ); // (true is truthy)

// console.log( null || 1 ); // 1 (1 is the first truthy value)
// console.log( null || 0 || 1 ); // 1 (the first truthy value)
// console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)
//                                  // 

// var currentUser = null;
// var defaultUser = "John";

// // FIRST TRUE VALUE
// var name = currentUser || defaultUser || "unnamed";

// console.log( name ); // selects "John" – the first truthy value



// // AND OPERATOR  
// console.log( true && true );   // true
// console.log( false && true );  // false
// console.log( true && false );  // false
// console.log( false && false ); //


// var hour = 12;
// var minute = 30;

// if (hour == 12 && minute == 30) {
//   console.log( 'Time is 12:30' );
// }
// else{
//    console.log( 'Time is other time' );

// }

// console.log( 1 && 0 ); // 0
 // console.log( 1 && 5 ); 

// // AND returns it. The second operand is ignored
// console.log( null && 5 ); // null
// console.log( 0 && "no matter what" ); // 0
//                                 // 
// var x = 1;

// (x > 0) && console.log( 'Greater than zero!' );





// ! (NOT)

// x=true
// console.log(!x)

// console.log( !"non-empty string" ); // true
// console.log( !!null ); 


console.log( Boolean("non-empty string") ); // true
 console.log( Boolean(null) ); // false
// // 
// 