// regexp = new RegExp("pattern","flags")

// regexp= /pattern/; // without any  flags
// regexp= /pattern/gmi; //with flags

// var str= "I love JavaScript!";
// var regexp = /love/;
// console.log(str.search(regexp));


// var str= "what you want to search?"
// var regexp= new RegExp("what");

// console.log(str.search(regexp))



// flags
//i flag
// var str= "I love JavaScript!";
// // console.log(str.search(/love/));
// console.log(str.search(/LOVE/));
// console.log(str.search(/LOVE/i));

// var str= " A drop of ink may make a million think";
// console.log(str.search(/a/i));
//imp search always looks for first match

// var str= "Fame is the thirst of youth";
// var result = str.match(/fame/i);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// var str= "JavaScript is a programming language";
// var result= str.match(/JAVA(SCRIPT)/i);

// var result= str.match(/(JAVA)(SCRIPT)/i);
// console.log(result[0]); // this is whole match
// console.log(result[1]);// script (the part of the match that correspond to 
//                        // paranthesis)
// console.log(result[2]);
// console.log(result.index);//
// console.log(result.input);

//g flag
// returns an array of all matches

// var str= "HI-Hi-hi";
// var result= str.match(/hi/i);
// console.log(result);

// var result= str.match(/hi/ig);

// // var result= str.match(/ho/ig);

// console.log(result);

// split

// console.log('12-34-45'.split('-'));

// console.log('12-34-45'.split(/-/));

//replace
// console.log('12-34-45'.replace('-',':'));

// console.log('12-34-45'.replace(/-/g,':'));

// var str = " Ashok , Ashok sharma and Ashok gupta";
// console.log(str.replace(/Ashok/g, 'Mr.$&'));

// var str = "Ashok Sharma"
// console.log(str.replace(/(Ashok) (Sharma)/, '$2,$1'))

// var i = 0;
// console.log("HI-Hi-hi".replace(/hi/gi,function(){
//     return ++i;
// }));



// function replacer(str,offset,s){
//     console.log('Found '+str+ ' at position '+offset+ ' in string ' +s);
//     return str.toLowerCase();

// }

// var result="HI-Hi-hi".replace(/hi/gi,replacer);
// console.log('Result:' +result);

//test function
//the test method looks for any match and returns true/false
// var str= " i love JavaScript"
// console.log(/Love/.test(str));

//Exec
//
// var str= " A lot about w3cschool at https://w3cschool.com"

// var regexp= /W3C(SCHOOL)/ig;
// var matchOne=regexp.exec(str);
// console.log(matchOne[0]);
// console.log(matchOne[1]);
// console.log(matchOne.index);
// console.log(matchOne.input);

// console.log(regexp.lastIndex);

// var matchTwo= regexp.exec(str);
// console.log(matchTwo[0]);
// console.log(matchTwo[1]);
// console.log(matchTwo.index);
// console.log(matchTwo.input);
// console.log(regexp.lastIndex);

// regexp.lastIndex=30;
// var match= regexp.exec(str);
// console.log(match.index);

//Y flag
//
// var str= "I love JavaScript";
// var reg= /javascript/iy;
// console.log(reg.lastIndex);//last index is 0 first time by default
// console.log(str.match(reg));
// reg.lastIndex=7;
// console.log(str.match(reg));

 // var str = "I love JavaScript!"; // will search here

// var regexp = /love/;
// console.log( str.search(regexp) ); // 2



// var search = prompt("What you want to search?", "love");
// var regexp = new RegExp(search);

// // find whatever the user wants
// console.log( "I love JavaScript".search(regexp));


// var str = "A drop of ink may make a million think";

// console.log( str.search( /a/i ) );



// var str = "Fame is the thirst of youth";

// var result = str.match( /fame/i );

// console.log( result[0] );    // Fame (the match)
// console.log( result.index ); // 0 (at the zero position)
// console.log( result.input ); //
// var str = "HO-Ho-ho!";

// var result = str.match( /ho/ig );

// console.log( result ); 



// var str = "John Doe, John Smith and John Bull.";
// console.log(str.replace(/John/g, 'Mr.$&'));
// console.log(str.replace(/John/g, 'Mr.$&'));



// var str = "John Smith";
// console.log(str.replace(/(John) (Smith)/, '$2, $1')) // Smith, John

// console.log("\d\.\d"); // d.d

// characer classes
// var str= "+7(901)-34343-34-675";
// var reg=/\d/
// console.log(str.match(reg));

// var reg=/\d/g
// console.log(str.match(reg));

// \d means a character from 0 to 9
// \s a space symbol, icludes spaces tabs new line
// \w letter of english or a digit or a underscore

// \d\s\w

// 1 A

// var str= "CSS4 is cool"
// console.log(str.match(/CSS\d/));

// console.log("I love HTML5".match(/\w\w\w\w\d/));

// Word boundary\b

// \b- it denotes the word boundary





// console.log("Hello, Java!".match(/\bJava\b/));
// console.log("Hello, JavaScript!".match(/\bJava\b/));
// console.log("Hello, JavaScript!".match(/\bHello\b/));
// console.log("Hello, Java!".match(/\bJava\b/));
// console.log("Hello, Java!".match(/\bHell\b/));
// console.log("Hello, Java!".match(/\bHell\b/));

// console.log("1 23 3456 78".match(/b\d\d\b/g));

//Reverse classes
// \D non digit any character except \d
// \S non space
// \W non wordly
// \B non boundary

// var str= "+9(102)-345-34-55";
// console.log(str.replace(/\D/g,""));

// console.log(str.match(/\d/g).join(' '));

// spaces are regular characters


// console.log("1 - 5".match(/\d-\d/));

// console.log("1 - 5".match(/\d\s-\s\d/));


// dot character--- "." any character except new line


// console.log("CSS4".match(/CS.4/));
// console.log("CS-4".match(/CS.4/));
// console.log("CS 4".match(/CS.4/));

// console.log("CS4".match(/CS.4/));

// var st= " javascript class at 09:00 at location 123:456";

// console.log(st.match(/\d\d.\d\d/));
// console.log(st.match(/\d\d.\d\d/g));
// .\d\d.\d\d.

//Escaping character \
//
// [\^$.|?* +()]
// console.log("Java 8.0".match(/\d\.\d/))

// console.log("Java 8.0 g()".match(/g\(\)/))

// console.log("1/2".match(/\d//\d/));

// Sets [] " search for any character among given" 
// [aeo] means any of the 3 character a ,e, or o

// console.log("Mop Top add".match(/\w\w\w/g));

// console.log("Mop Top add".match(/[tm]op/gi));

// console.log("Voila".match(/V[oi]la/gi));

// Range  [a-z] is a character range from a to z 
// [0-34] numbers range
// [0-9A-Fa-f] adding ranges
// 
// console.log("Exception 0xAF".match(/\dx[A-F][A-F]/g))
 
// console.log("Exception 0xAF 0x1F".match(/\dx[0-9A-F][0-9A-F]/g))

// \d is is same as [0-9]
// \w is for [a-zA-z0-9]
// \s is same as [\t\n\f\r]


//  Excluding range
//  ^  match any character except given ones
//  [^aeyo] any character except a,e,y or o
//  [^0-9] any character except a digit
//  [^\s] any non space character
//  
// console.log("alice15@gmail.com".match(/[^\d\sA-Z]/gi))

// No escaping in [...]
// we can use below special character without escape 
// .
// +
// ()
// -
// ^
// []

// console.log("1 + 32 - 3".match(/[-().^+]/g))

// console.log("1 + 32 - 3".match(/[\-\(\)\.\^\+]/g))

// console.log("JavaScript".match(/Java[^Script]/));

// console.log("JavaScript".match(/Java[^script]/));

// var  st = "python at 09:44 java at 21-30 45a56"
// console.log(st.match(/[0-9][0-9].[0-9][0-9]/g));

// console.log(st.match(/[0-9][0-9][^0-9A-F][0-9][0-9]/g));
// console.log(st.match(/\d\d[:-]\d\d/g));


// Quantifires +,*? {n}

// console.log(" I am 12345 year old".match(/\d{5}/))
// console.log( " i am not 142 but 1234 years old".match(/\d{3,5}/))

// + one or more 
// console.log("+7(903)-1233-34-45".match(/\d+/g))

// ? zero or one
// console.log("should i write color or colour".match(/colou?r/g))

// * zero or more
// console.log("100101".match(/\d0*/g))

// console.log("hello!...how goes?....".match(/\.{3,}/g))
// console.log("color:#121212; background-color:#AA00ef".match(/^#[a-f0-9]{6}/ig))






// var result = (/abc/.test("abcde"));
    // var result = (/abc/.test("abxde"));
    // var result =(/[xys]/.test("in 1992"));
    // var result =(/[0-9]/.test("in 1992"));
    // var result = (/'\d+'/.test("'0'"));
    // var result =(/'\d+'/.test("''"));
    // var result =(/'\d*'/.test("''"));
    // var result = (/'\d*'/.test("''"));
    // var result =
    // var result = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
      // var result =(/neighbou?r/.test("neifhbour"));
//       var result =(/neighbou?r/.test("neighbor"));

// console.log(result);

// c

// Capturing group -- a part of pattern enclosed in () is called group

// console.log("Gogooogooo now".match(/go+/gi))

// console.log("my@mail.com @ his@site.com.uk".match(/[-.\w]+@[\w-]+[\w-]{2,20}/g))

// var str= "<h1> hello world </h1>"
// console.log(str.match(/<(.*?)>/))

// var str= "He said: \"she is one!\".";
// console.log(str.match(/['"](.*?)['"]/g))

console.log('a "witch" and her "broom" is one'.match(/".+"/g));

console.log('a "witch" and her "broom" is one'.match(/".+?"/g));

regex.com  

// <\d!-\d- <;!DOCTYPE html>
// <html>
// <body>

// <p>Search a string for "script", and display the position of the match:</p>

// <button onclick="myFunction()">Try it</button>

// <p id="demo"></p>

// <script>
// function myFunction() {
//     var str = "java script learning!"; 
//     var n = str.search(/script/i);
//     var n = str.search(script);

//     document.getElementById("demo").innerHTML = n;
// }
// </script>

// </body>
// </html>
//  -->

// <!-- <!DOCTYPE html>
// <html>
// <body>

// <p>Replace "python" with "javascript" in the paragraph below:</p>

// <button onclick="myFunction()">Try it</button>

// <p id="demo">Please learn python!</p>

// <script>
// function myFunction() {
//     var str = document.getElementById("demo").innerHTML; 
//     var txt = str.replace(/python/i,"javascript");
//     document.getElementById("demo").innerHTML = txt;
// }
// </script>

// </body>
// </html>
//  -->



// <!-- <!DOCTYPE html>
// <html>
// <body>

// <p>Search for an "e" in the next paragraph:</p>

// <p id="p01">The best things in life are free!</p>

// <button onclick="myFunction()">Try it</button>

// <p id="demo"></p>

// <script>
// function myFunction() {
//     text = document.getElementById("p01").innerHTML; 
//     document.getElementById("demo").innerHTML = /life/.test(text);
// }
// </script>

// </body>
// </html>
//  -->

// <!-- <!DOCTYPE html>
// <html>
// <body>

// <p>Click the button to do a global search for "is" in a string.</p>

// <button onclick="myFunction()">Try it</button>

// <p id="demo"></p>

// <script>
// function myFunction() {
//     var str = "Is this all there is?";
//     var patt1 = /is/g;
//     var result = str.match(patt1);
//     document.getElementById("demo").innerHTML = result;
// }
// </script>

// </body>
// </html>
//  -->


// <!DOCTYPE html>
// <html>
// <body>

// <p>Click the button to do a global search for "is" in a string.</p>

// <button onclick="myFunction()">Try it</button>

// <p id="demo"></p>

// <script>
// function myFunction() {
    // var str = "Is this all there is?";
    // var patt1 = /is/g;
    // var result = (/abc/.test("abcde"));
    // var result = (/abc/.test("abxde"));
    // var result =(/[xys]/.test("in 1992"));
    // var result =(/[0-9]/.test("in 1992"));
    // var result = (/'\d+'/.test("'0'"));
    // var result =(/'\d+'/.test("''"));
    // var result =(/'\d*'/.test("''"));
    // var result = (/'\d*'/.test("''"));
    // var result =
    // var result = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
      // var result =(/neighbou?r/.test("neifhbour"));
      // var result =(/neighbou?r/.test("neighbor"));

// console.log(neighbor.test("neighbor"));
// → true
    // document.getElementById("demo").innerHTML = result;


// \d	Any digit character
// \w	An alphanumeric character (“word character”)
// \s	Any whitespace character (space, tab, newline, and similar)
// \D	A character that is not a digit
// \W	A nonalphanumeric character
// \S	A nonwhitespace character
// .	Any character except for newline
    // var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
    // var result= (dateTime.test("30-01-2003 15:20"));
    // var result= (dateTime.test("30-jan-2003 15:20"));

    // document.getElementById("demo").innerHTML = result;

    // var cartoonCrying = /boo+(hoo+)+/i;
    // result =(cartoonCrying.test("Boohoooohoohooohoooooo"));
    
//     document.getElementById("demo").innerHTML = result;

// var quotedText = /'([^']*)'/;
// result =(quotedText.exec("she said 'hello'"));
    
//     document.getElementById("demo").innerHTML = result;

// }
// </script>

// </body>
// </html>


// <!-- 

// The exec() method is a RegExp expression method.

// It searches a string for a specified pattern, and returns the found text.

// If no match is found, it returns null. -->



