// while (<condition>)
// 	<statement>
// 	
// while (x>=0) console.log(x--);

// var i = 0;
// while (i<3){
// 	console.log(i)
// 	i++;
// }


// var arr=['a','b','c','d'];
// while(arr.length>0){
// 	console.log(arr.shift());
// }
// console.log(arr);



// var i=3;
// while (i){//till 1 it will print
// 	console.log(i);
// 	i--;
// }

// var x =5
// while (x>=0){
// 	console.log(x--);
// } 


//Do while loop
// do <statement>
// while (<condition>)
// It will be executed atleast once

// var i=10
// do{
// 	console.log(i);
// 	i++
// } 
// while(i<3);


// var i=5
// do{
//  console.log(i);
//  i++
// }
// while(i<10)


// for loop
// for(initialization; condition;post increment)
// 	{ statements}


// for(var i=0;i<3;i++){
// 	console.log(i);
// }


// var i=0
// for(i=0;i<3;i++){
// 	console.log(i);
// }

// console.log(i);



// var i = 0
// if (i < 3) {
//     console.log(i);
//     i++
// }
// if (i < 3) {
//     console.log(i);
//     i++
// }
// if (i < 3) {
//     console.log(i);
//     i++
// }



// var i = 0;
// for(;i<3;i++);

// console.log(i);

// var arr = ["python", "java", "scala"];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// var arr=[1,3,5];

// function findEvenNumber(arr){
// 	for (i=0;i<arr.length;i++){
// 		var elem= arr[i];

// 		if (elem%2===0){
// 			console.log("found " +elem);
// 			break;
// 		}        console.log("no even no found");

// 	} console.log("done");
// }

// findEvenNumber(arr);

// for (var i = 4; i < 20; i++) {
//     if (i % 2 == 0) {
//         console.log(" i am in the if");
//         continue;
//     }
//     console.log(i);
// }

// for (var i=4; i <20;i++){
// 	if (i%3==0){
// 		console.log(" i am in the if");
// 		break
// 	}
// 	console.log(i);
// }

// console.log(" i am outside");



// console.log(1%2)
// for (<variable> in <objec>)
// 	<statement>


// var arr = ['a', 'b', 'c'];
// var arr="python";
// for (var key in arr) {
//     console.log(arr[key])
// }

// var i=0;
// while(++i<5) console.log(i);

// var i=0;
// while(i++<5) console.log(i);

// for(var i=0;i<5;i++) console.log(i);
// 
// for(var i=0;i<5;++i) console.log(i);

// if else


// function divide(dividend, divisor) {
//     switch (divisor) {
//         case 0:
//             throw "Division error;

//         default:
//             return dividend / divisor;

//     }
// }

// var x = divide(4, 0);
// console.log(x);


// var text;

// switch (new Date().getDay()) {
//     case 6:
//         text = "Today is Saturday";
//         break;
//     case 0:
//         text = "Today is Sunday";
//         break;
//     default:
//         text = "Looking forward to the Weekend";

// }
// console.log(text);



// var daynum=0;
// switch (daynum) {
//     case 0:
//         day = "-----";
//         console.log(day);
//         break;
//     case 1:
//         day = "Monday";
//        console.log(day);
//         break;
//     case 2:
//         day = "Tuesday";
//                console.log(day);

//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "-----!-";
//         break;
//     case  6:
//         day = "Saturday";
//     default:
//     console.log("default value");    
// }

// console.log(day);


// var a = 2;

// switch (a) {
//   case 3:
//     console.log( 'Too small' );
//     break;
//   case 4:
//     console.log( 'Exactly!' );
//     break;
//   case 5:
//     console.log( 'Too large' );
//     break;
//   default:
//     console.log( "I don't know such values" );
// }

// var a = 2;

// switch (a) {
//   case 2:
//     console.log( 'Too small' );
//   case 4:
//     console.log( 'Exactly!' );
//     case 5:
//     console.log( 'Too large' );
//     break;
//   default:
//     console.log( "I don't know such values" );
// }

// var divisor=10
// var dividend=20
// 	switch(divisor) {
// 		case 0:
//          console.log("Division error");
//         case 1:
// 		       throw ""


//         default:
//          console.log(dividend/divisor);

// }



// function divide(dividend,divisor){
// 	switch(divisor) {
// 		case 0:
// 		       throw "Division error"
// 		       break;
//         case 1:
//         case 2:
//                 console.log( "its big value")
//                  // break;
//         case 3:
//                 console.log( "its 3 value")
//                  // break;
//          default:
//          return dividend/divisor;

// 	}
// }

// var x =divide(4,2);
// console.log(x);

// var x =4;
// var y =14;

// function compar(x,y){
// 	switch(true) {
// 		case x<y:
// 		       return -1
//         case x==y:
//         return 0;
//         case x>y:
//         return 1
// console.log( "its big value")
// break;
// case 3:
//         console.log( "its 3 value")
// break;
// default:
// return dividend/divisor;

// 	}
// }

// 

// var a = "1";
// var b = 0;

// switch (++a) {
//   case b + 1:
//     console.log("this runs, because +a is 1, exactly equals b+1");
//     break;

//   default:
//     console.log("this doesn't run");
// }

// ctrl+/
// Grouping of case

// var a = 2 + 3;

// switch (a) {
//   case 4:
//     console.log('Right!');
//     break;

//   case 3:                    // (*) grouped two cases
//   case 5:
//     console.log('Wrong!');
//     console.log("Why don't you take a math class?");
//     break;

//   default:
//     console.log('The result is strange. Really.');
// }


// var arg = prompt("Enter a value?")
// var arg = '0'
// switch (arg) {
//   case '0':
//   case '1':
//     console.log( 'One or zero' );
//     break;

//   case '2':
//     console.log( 'Two' );
//     break;

//   case 3:
//     console.log( 'Never executes!' );
//     break;
//   default:
//     console.log( 'An unknown value' )
// }

// / var a = {9,8,2,7}
// // for (var i = 0; i < a.length; i++} {
// 	for (var j = 0; j < a.length; j++) {
// 		if (a[j] > a[j+1]) swap(a[j], a[j+1])


var a = [9, 8, 2, 7]
// for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length; j++) {
        if (a[j] > a[j + 1]) {
            var temp = a[j]
            a[j] = a[j + 1]
            a[j + 1] = temp

        }       }
//     }  console.log(" printing the value of i and array" + i)
//     for (var k = 0; k < a.length; k++) {
           
//             console.log(a[k]);
//         }
// }

for (var i = 0; i < a.length; i++) {

    console.log(a[i]);
}