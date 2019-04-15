// A callback function, also known as a higher-order function, is a function that is passed to another
//  function (let's call this other function “otherFunction”) 
// as a parameter, and the callback function is called (or executed) inside the otherFunction


var x= function(){
	console.log(" I am called from inside a function");

}


var z= function(){
	console.log(" I am called from inside a function");

}


var y =function(callback){
	console.log("I am called outside");
     callback();
    console.log("i am called after callback");
}


y(x);
y(z);

// 
// ---------------------------------------------------
// var calc= function (num1,num2,calcType){
// 	if (calcType=="add"){
// 		console.log(num1+num2);
// 	}

//      else if (calcType=="mul"){
//      	console.log(num1*num2);
//      } 

// }

// calc(2,3,"mul");
// calc(2,3,"add");

// ---------------------------------------------------

// var add = function(a,b){
//     // return a+b;
//     console.log(a+b);
// }

// var mul = function(a,b){
//     // return a*b;
//     console.log(a*b);
// }

// var calc = function(a,b,callback){

// if (typeof callback=='function'){
// 	callback(a,b);
// }else{
// 	console.log("enter correct value")
// }

// }

// calc(2,3,add);
// calc(2,3,mul);
// ==============================================


// // onsole.log(x);

// var x =Date();
// console.log(x);

//creation of date object
// new Date()
// new Date(milliseoconds)
// new Date(datestring)
// new Date(year,month,day....)

// var jan01_1970=new Date(20);
// console.log(jan01_1970);

// var jan02_1970= new Date(24*3600*1000);
// console.log(jan02_1970);

// new Date(datestring)
// var date= new Date("2017-01-26");
// console.log(date);

// new Date(year,month,day....)

// var date=new Date(2017,0,1,0,0,0,0)
// console.log(date);


// var today =new Date();
// console.log(x);
// console.log(today.getDay());
// console.log(today.getHours());
// console.log(today.getUTCHours());
// console.log(today.getTimezoneOffset());

// today.setHours(0);
// console.log(today);

// var date=new Date(2013,1,32);
// console.log(date);

// var date= new Date(2015,1,28);
// date.setDate(date.getDate()+3)

// console.log(date);

// var date =new Date();
// date.setSeconds(date.getSeconds()+70);

// console.log(date);


// var date=new Date(2013,1,32);
// var now=new Date();

// var age= now-date;
// console.log(age);


// var date = new Date();
// date.getDate();
// date.getSeconds();

// var birth = new Date(1998,3,23);
// var today = new Date();

// var age = today.getYear()-birth.getYear();

// console.log(age);

// function getPrimes(max) 
// {     var sieve = [], i, j, primes = [];
//   for (i = 2; i <= max; ++i) 
//   {if (!sieve[i]) {// i has not been marked -- it is prime

//             primes.push(i);

//             for (j = i << 1; j <= max; j += i) {
//                 sieve[j] = true;}
//             }
//         }

//           return primes;

// }

// var primes=[];
// primes =getPrimes(9)
// console.log(primes)

// st="java";
// st1="kava";
// var a=[];
// var count=0;
// for (i =0;i<st.length;i++)
// {
// 	for (j=0;j<st1.length;j++)
//       {
//       	  if(st.charAt(i) == st1.charAt(j)){
//           a.push(st[i])
//        }
//       }
// }
//  console.log(a)

 // a=[1,2,3]
// for (i =0;i<st.length;i++)
// {      	console.log(st.charAt(i));
// }