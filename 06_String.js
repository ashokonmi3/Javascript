// In JavaScript, the textual data is stored as strings. There is no separate type for a single character.
// Immutable data

// var single = 'single-quoted';
// var double = "double-quoted";
// console.log(single);
// console.log(double);


// var str = 'written \
// over \
// multiple \
// lines';
// console.log(str)
// console.log(str == 'written over multiple lines'); // tru

// Alternative
// var str = 'written ' +
//           'over ' +
//           'multiple ' +
//           'lines';

// console.log(str)

s='hello world';
// // // 
// console.log(typeof s);
// 
// 
// 
// h e l l o w o r l d
// 0 1 2 3 4 5

// Character Access
// There are two operations that return the nth character of a string.[16] Note that JavaScript does not have a special data type for characters; these operations return strings:
// console.log('Abc'.charAt(1))
// console.log('abc'.charAt(0))

// console.log('Abc'.charAt(0)=='abc'.charAt(0))

// Strings can’t be changed in JavaScript. It is impossible to change a character.(Immutability)
// Let’s try it to show that it doesn’t work:
// var a =10
// console.log(a)
// a=20
// a=a+30+2*a
// console.log(a)
// var str = 'Hi';
// console.log(str[0])
// str[0] = 'h'; // error
// console.log(str);

// str="java"
// console.log(str);
// /alert( str[0] ); // doesn't work

// length
// length is a property
// People with a background in some other languages sometimes mistype by calling str.length() instead of just str.length. That doesn’t work.

// Please note that str.length is a numeric property, not a function. There is no need to add brackets after it.

// console.log('abc'.length)


// console.log("abcd".toUpperCase());

// console.log("ABCbcd".toLowerCase());


// var st= " please locate where locate occures";
// var pos= st.indexOf("please");
// var pos= st.indexOf("locate");
// var pos= st.indexOf("alocate");
// console.log(pos);



// console.log( "Widget with id".includes("Widget") ); // true

// console.log( "Hello".includes("Bye") ); // false
// The optional second argument of str.includes is the position to start searching from:

// console.log( "Midget".includes("id") ); // true
// console.log( "Midget".includes("id", 3) ); // false, from position 3 there is no "id"
// The methods str.startsWith and str.endsWith do exactly what they say:

// console.log( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
// console.log( "Widget".endsWith("get") );   // true, "Widget" ends with "get"


// Getting a substring 

 //  P   y   t   h     o     n
 //  0   1   2   3     4     5
 // -6  -5  -4  -3    -2    -1

// (m,n) string will be returned from m to n-1
// // //Slicing also string
// console.log("abcdedfgg".slice(2));
// console.log("abcdedfgg".slice(1,6));
// console.log("abcdedfgg".slice(-2));


// str.substring(start [, end])
// Returns the part of the string between start and end.

// This is almost the same as slice, but it allows start to be greater than end.

// For instance:

// var str = "stringify";

// // // these are same for substring
// console.log( str.substring(2, 6) ); // "ring"
// console.log( str.substring(6, 2) ); // "ring"

// // // ...but not for slice:
// console.log( str.slice(2, 6) ); // "ring" (the same)
// console.log( str.slice(6, 2) ); // "" (an empty string)


// str.substr(start [, length])
// Returns the part of the string from start, with the given length.

// In contrast with the previous methods, this one allows us to specify the length instead of the ending position:
// 
// var str = "stringify";
// console.log( str.substr(2, 4) ); // ring, from the 2nd position get 4 characters
// The first argument may be negative, to count from the end:

// var str = "stringify";
// console.log( str.substr(-4, 2) ); // gi, from the 4th position get 2 characters



// method	                         selects…	                     negatives
// slice(start, end)	         from start to end	                 allows negatives
// substring(start, end)	between start and end	              negative values mean 0
// substr(start, length)	from start get length characters	  allows negative start




// Comparing string

// alert( 'a' > 'Z' ); // tru

// console.log( "a".codePointAt(0) ); // 122
// console.log( "b".codePointAt(0) ); // 122

// console.log( "A".codePointAt(0) ); // 122
// console.log( "B".codePointAt(0) ); // 122

// console.log( "zsd".codePointAt(0) ); // 122
// console.log( "Z".codePointAt(0) ); // 9
// console.log(String.fromCodePoint(65, 66))


// console.log('b'.localeCompare('t')); // -2 or -1 (or some other negative value)

// // Alphabetically the word "check" comes after "against" yielding a positive value
// console.log('check'.localeCompare('against')); // 2 or 1 (or some other positive value)
// console.log('again'.localeCompare('check'));
// // "a" and "a" are equivalent yielding a neutral value of zero
// console.log('a'.localeCompare('a'));

// st="javascript"
// console.log(st.length);
// console.log(typeof st);

// console.log(st);

// st1 = new String("hello world again");
// console.log(typeof st1);
// console.log(st1.length);


// st1 = new String(123);
// console.log(st1);
// console.log(typeof st1);

// console.log(String(123));
// console.log(typeof String(123))

// console.log(String(4.5))
// console.log(String({prop:123,prop1:"abc"}));
// console.log(JSON.stringify({prop:123,prop1:"abc"}));
// console.log(typeof(JSON.stringify({prop:123})));//Interview question



// String concatation
// var str='';
// str+='say hello';
// console.log(str);
// str+= 7;
// console.log(str);


// console.log('hello'.concat(' ', 'world'));
// 

// console.log("java"+1+30)
// console.log(1+30+"java"+1+30)


 // split
// console.log("abcdedf".split('d'));
// console.log("abcdedf adf asdf".split(' '));
// console.log("abcdedf adf asdf".split('f'));

// var s = "this is a string";
//    var p = "";
// for (var i = s.length-1; i >= 0; i--) {
// 	p = p + s[i];
// }
// console.log(p);


