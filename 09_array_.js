// 
// ARRAYs 
// 
// Declaration

// There are two syntaxes for creating an empty array:
// An array is a special variable, which can hold more than one value at a time.



// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// But, JavaScript arrays are best described as arrays.

// var arr = new Array(10);
// var arr = [];
// var arr = new Array();
// var arr = new Array(10);
// console.log(arr.length);

// console.log(arr);
 

//              //0       1        2
// var myArray=["java","Python","javascript"];


// console.log(myArray);
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);

// myArray[3]="scala";
// var myArray=["java","Python","javascript","scala"];

// console.log(myArray[3]);

// console.log(myArray.length);
// myArray[10]="C++";
// console.log(myArray);
// console.log(myArray.length);
// console.log(myArray.1);
// console.log(myArray[1]);
// console.log(myArray['1']);
// s="java"
// console.log(Array.isArray(myArray));
// console.log(Array.isArray(s));

// var myArry1=new Array("java","C++","python")
// var arr=['a','b','c'];
// console.log(arr.length);
// arr.length=2
// console.log(arr);
// arr[arr.length]="python"
// arr[3]="python"
// console.log(arr);

//********************
// Push operation: push appends an element to the end.


// var myArr=['a','b','c']
// console.log(myArr);
// myArr.push('e');
// console.log(myArr);


// shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.
// var myArr=['a','b','c']

// myArr.shift();
// console.log(myArr);
// myArr.unshift('z');
// console.log(myArr);

// var myArry1=['a','b','c']
// var x =myArry1.pop();
// console.log(myArry1)
// console.log(x);

// var s =myArry1.join(' ');
// console.log(s);

// delete myArry1[0];
// console.log(myArry1);

// Methods that work with the end of the array:
// Push and pop

// Methods that work with the beginning of the array:

// shift and unshift


// in operator (index)
// console.log(0 in myArr);
// console.log(10 in myArr);






// var arr1=new Array(Math.pow(2,32)); //4294967296-1
// console.log(arr1);

// var arr1=new Array(Math.pow(2,32)-1);
// arr1.push('x');
// console.log(arr1);

// var a=[,,'c'];
// var b =[undefined,undefined,'c'];
// console.log(a.length);
// console.log(b.length);
// console.log(0 in a);
// console.log(a[2])
// console.log(0 in b);
// for (var i=0; i<a.length;i++)

// {console.log(a[i])

// };
// var b =[undefined,undefined,'c'];

// console.log(b[0])

// for (var i=0; i<b.length;i++)    3<3
// {console.log(b[i])           //console.log(b[2])
// };


// var a=new Array("java","C++","python")

// a.forEach(function(i) {
// 	console.log(i);
// });

// b.forEach( function(i) {
// 	console.log(i);
// });


// var myArry1=new Array("java","C++","python")

// pop takes an element from the end.





// console.log(s);
// splice(start: int, deleteCount: int, items...: any)

// var myArry1=new Array("java","C++","python")
// myArry1.splice(2,0,"scala","dotnet");
// myArry1.splice(0,0,"scala","dotnet");
// myArry1.splice(0,1,"scala","dotnet");
// myArry1.splice(0,2,"scala","dotnet");
// console.log(myArry1);

// At position 2, remove 2 items:


// myArry1.splice(0,1);
// console.log(myArry1);
// At position 2, add the new items, and remove 1 item:

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1, "Lemon", "Kiwi");
// fruits.splice(2, 2, "Lemon", "Kiwi");

// console.log(fruits);



// merge array

// var myArry1=new Array("java","C++","python","dotnet","ASP");

// var myArry2=new Array("java2","C++2","python2")
// var myArry3=myArry1.concat("C","dotnet");
// console.log(myArry3);

// var myArry4=myArry1.concat(myArry2,myArry3);
// console.log(myArry4);


// slice(start, end)  it will print from starting index to ending index-1

var myArry1=new Array(23,"java","C++","python","dotnet","ASP");


// console.log(myArry1.slice(0,2));
// console.log(myArry1.slice(0,5));
// console.log(myArry1.slice(2,5));
// console.log(myArry1.slice(0,2));
// console.log(myArry1.slice(0,3));

// var myArry2=myArry1.slice(1);
// console.log(myArry2);

// console.log(myArry1.slice(4));
// ===============================
// sorting  number<Capital letter<small letter

// var myArry1=new Array(23,"java","C++","python","dotnet","ASP");

// console.log(myArry1.sort());


// console.log(myArry1.reverse());


// var myArry1=new Array("java","C++","python","dotnet","ASP");




// Assignment


// var myArry1 = [40, 100, 1, 5, 25, 10];
// console.log(myArry1.sort());

// myArry1.sort(function(a,b) {return a-b
// 	});
// console.log(myArry1);

// how to find maximum and minimum value in an arrays
// 
// 

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.



// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.


// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will find return that sum.

// For instance:

// getMaxSubSum([-1, 2, 3, -9]) = 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) = 6
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (take all)
// If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

// getMaxSubSum([-1, -2, -3]) = 0
// Please try to think of a fast solution: O(n2) or even O(n) if you can.