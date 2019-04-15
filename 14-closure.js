

// var a =10;//global variable
// function outer(){
//     var b =20;
//     function inner(){
//         console.log(a);
//         console.log(b);
//     }
//   inner();
// }

// outer();


// a from global and b from outer scope
// inner is declared in outer and executed in inner
// execution and declaration at same place
// ========================

var a =10;
function outer(){
    var b =20
    var inner=function(){
        console.log(a);
        console.log(b);
    }
    return inner;
}

var innerFn = outer();
console.log(innerFn)
console.log(a);
inner()
innerFn();//inner()

console.log(a);



// execution inner function  outside context of outer
// innerFn() is executing the innerfunction actually

// a is global
// b is in scope to the outer 
// in line 32 no outer function exit
// how it works because closure

// When jaascript creates the scope , it creates the funtion 
// it also rememers the scope chain.
// when inner is created it will remember everything in the scope 
// when it is created , it remembers a and b.  you execute it any where 
// it will remb the values of a and b .
// innerfunction alwasy know the value of a and b
// A function which remembers it scope is "closure"
// 
// 
//d
// 
// 
// 
// =====================================
 // Every time i call the function it create the variable 
// each function exection a new vaiable is create
// but both will refer to same global value


var a =10;
function outer(){

    var b =20
    var inner=function(){
    	a++
    	b++
        console.log(a);
        console.log(b);
    }
    return inner;
}

var innerFn=outer();
innerFn();

// var innerFn1=outer();
// innerFn1();

//  
// ================

// Single thread in javascript
// var a=10;
// var fn=function(){
//     console.log(a);

// }

// setTimeout(fn,6000);//milliseconds

// console.log("done")
// ascynhronus  behaviuor
// 
// Clousre: when fn is executing it is exeuting in some different scope it does not know the value of a
// but when line 85 is executed it will remember the value of a , so whenever the fn executed it will have the value of a
// ==========================
// Module pattern
// helps to create the public data and private

// use scope to hide the data, using scope we can prevent the data 

// var person={
//     firstName:"ashok",
//     lastName:"sharma",
//     getFirstName:function(){
//         return this.firstName;
//     },
//      getLastName:function(){
//         return this.lastName;
//      }

// }

// console.log(person.firstName);
// console.log(person.getFirstName());

// Now we want to hide the direct access to the first name and last name



// function createPerson(){
// var returnObj={
//     firstName:"ashok",
//     lastName:"sharma",
//     getFirstName:function(){
//         return this.firstName;
//     },
//      getLastName:function(){
//         return this.lastName;
//      }
//      };
//      return returnObj;

// }


// var person= createPerson()
// console.log(person.firstName);
// console.log(person.getFirstName());

// here we created the scope using createperson
// console.log(person.firstName)
// is still printing the first name as it is because of peoperty of object

// IF we move these property of object we can create variable 
// in function they are not on object they are in function
// below

// function createPerson(){
//     var firstName="ashok";
//     var lastName="sharma";
//     var returnObj={
//         getFirstName:function(){
//             return firstName;

//         },
    
//          getLastName: function(){
//             return lastName;
//          },

//         modifyfirstName: function(){
//             return firstName+ "sharma";
//          }

//     } ;
//     return returnObj;
// }

// var person= createPerson()
// console.log(person.firstName);
// console.log(person.getFirstName());

// when the function object getLastName and modifyfirstName is created 
// it remembers the first name and last name so the function wll work even
// object is not having the property







// var i;
// for (i=0;i<10;i++){
//     console.log(i);
// }


// var i;
// var print =function(){
//     console.log(i);

// }
// for (i=0;i<10;i++){
//     setTimeout(print,5000);
// }
