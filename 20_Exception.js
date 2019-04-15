
// console.log(1/x);
// console.log("exception not handeled")

// try{

// console.log(" This is exception handling try block");
// console.log(1/x);
// }

// catch(e){
// console.log(" This is exception handling catch block");
// }

// console.log("exception  handeled")

// try catch(exception handling) works only on runnable code, runtime erros
// try {
// {{{{{{{{{{{}}}}}}}}}}}//Parse error
// }
// catch(e){
// 	console.log(" I am in catch")
// }
// 
//Synchronus

// try{
// 	setTimeout(function(){
// 		errorVariable;
// 	},1000)
// }

// catch(c){
// 	console.log("exception");
// }


// setTimeout(function(){
// 	try {     abcd;
// 	} catch(e){
// 		console.log("exception")
// 	}
// },3000);

// console.log(1/x);


try{

console.log(" This is exception handling try block");
// console.log(1/x);
console.log(1/4);

}

catch(err){
console.log(" This is exception handling catch block");
console.log(err.name);
console.log(err.message);
}

finally{
	console.log(" i am inside finally")
}





// var json="{ bad jsn}";

// try {
//  var a=JSON.parse(json);
//  console.log(a);

// }

// catch(e)
// {
// 	console.log(" i am inside catch")
// 	console.log(e.name);
// 	console.log(e.message);
// }



// var json='{"age":30}';
// // var json='{"30"}';

// try {
//  var a=JSON.parse(json);
//  console.log(a);

// if(!a.name){
// 	throw new  SyntaxError("Incomplete data");
// }
// }
// catch(e)
// {
// 	console.log(" i am inside catch")
// 	console.log(e.name);
// 	console.log(e.message);
// }


// finally{
// 	console.log(" i am inside finally")
// }



















//
//
//
//
//
//
//