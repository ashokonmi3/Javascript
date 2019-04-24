// var output="*"

// for (i=0;i<5;i++)
// { 
//     for (j=0;j<=i;j++)
//      {
//              console.log(output.repeat(j))


//         // output=output+"*"
//         // console.log (output)
          
// }
// }
// console.log("*"*2)

// console.log("Java" * 2)


// i=1
// for (j=0;i<5;i++){

//         output=output+"*"
//         console.log (output)
          
// }
// 
// 
// function reverseString(str) {
//     str2=str.split("").reverse().join("");
// for(i=0;i<str.length<i++)
// if (str.charAt[i]==str2.charAt[i]){
// 	console.log
// }


// }
// var revstr=reverseString("hello");
// console.log(revstr)



// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// rev=reverseString('javascript');
// console.log(rev)




// for(var i = 1; i <= 5; i++) {
//       for(var j = 1; j<= i; j++) {
//              console.log('*'.repeat(j))
//         // console.log("*");  

//       }

//       // console.log('\n');
// }


      // console.log('a');
      // console.log('\n');
      // console.log('c');



// for(var i = 1; i <= 5; i++) {

//       for(var j = 1; j<= i; j++) {

//         document.write("*");  

//       }

//       document.write("<br/>");
// }
// 
// Fibonacci  1 1 2 3 5 8 13 …

// 
function fib (n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};



