/************************************************************
 * JAVASCRIPT REGULAR EXPRESSIONS (RegExp)
 * CONCEPTS, READING NOTES, EXAMPLES, AND PRACTICE SNIPPETS
 ************************************************************/

/*
------------------------------------------------------------
WHAT IS A REGULAR EXPRESSION?
------------------------------------------------------------
A regular expression (RegExp) is a pattern used to search, match,
extract, split, and replace text.

RegExp is used for tasks like:
- validating input (email, phone, password rules)
- searching words or patterns in text
- extracting data like dates, times, IDs, codes
- replacing repeated characters or formatting strings

There are two common ways to create RegExp:
- Constructor form: new RegExp("pattern", "flags")
- Literal form: /pattern/flags
*/


// regexp = new RegExp("pattern","flags")

// regexp= /pattern/; // without any flags
// regexp= /pattern/gmi; //with flags


/*
------------------------------------------------------------
BASIC SEARCH USING search()
------------------------------------------------------------
- search() returns the index of the first match
- if no match is found, it returns -1
- search() does not return the matched text, only the position
*/

// var str= "I love JavaScript!";
// var regexp = /love/;
// console.log(str.search(regexp));

// --------------------------
// var str= "what you want to search?"
// var regexp= new RegExp("what");

// console.log(str.search(regexp))


/*
------------------------------------------------------------
FLAGS (MODIFIERS)
------------------------------------------------------------
Flags change how the pattern behaves.

Common flags:
- i  ignore case (LOVE matches love)
- g  global match (find all matches)
- m  multiline (^ and $ work per line)
- y  sticky match (match must start at lastIndex)
*/


/*
------------------------------------------------------------
IGNORE CASE FLAG: i
------------------------------------------------------------
- Without i, matching is case-sensitive
- With i, matching ignores case
*/

// var str= "I love JavaScript!";
// console.log(str.search(/love/));
// console.log(str.search(/LOVE/)); // -1 for not match
// console.log(str.search(/LOVE/i)); // i for ignore case

// ================
// var str= " A drop of ink may make a million think";
// console.log(str.search(/a/i));
// important: search always looks for the first match


/*
------------------------------------------------------------
match() RESULT DETAILS (WITHOUT g)
------------------------------------------------------------
- match() returns an array with detailed info when used without g
- includes:
  - matched text
  - index position
  - original input string
*/

// ----------------
// var str= "Fame is the thirst of youth";
// var result = str.match(/fame/i);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);


/*
------------------------------------------------------------
CAPTURING GROUPS USING ( )
------------------------------------------------------------
- Parentheses create capturing groups
- result[0] = full match
- result[1], result[2]... = captured groups
*/

// ----------------
// var str= "JavaScript is a programming language";

// var result= str.match(/(JAVA)(SCRIPT)/i);
// console.log(result[0]); // whole match
// console.log(result[1]); // first group
// console.log(result[2]); // second group
// console.log(result.index);
// console.log(result.input);


/*
------------------------------------------------------------
GLOBAL FLAG: g WITH match()
------------------------------------------------------------
- With g flag, match() returns an array of all matches
- But it does NOT return index/input details in the same way
*/

// ========================
// g flag returns an array of all matches

// var str= "HI-Hi-hi";
// var result= str.match(/hi/i);
// console.log(result);

// var result= str.match(/hi/ig);
// console.log(result);

// var result= str.match(/ho/ig);
// console.log(result);


/*
------------------------------------------------------------
split() WITH REGEX
------------------------------------------------------------
- split() can accept a string separator or a regex separator
- regex separator is useful for complex splitting rules
*/

// ===================
// split

// console.log('12-34-45'.split('-'));

// console.log('12-34-45'.split(/-/));


/*
------------------------------------------------------------
replace() WITH REGEX
------------------------------------------------------------
- replace() by default replaces only the first match (string replace)
- using regex with g replaces all matches
*/

// ========================
// replace

// console.log('12-34-45'.replace('-',':'));

// console.log('12-34-45'.replace(/-/g,':')); // replace all -

// ==================
// var str = " Ashok , Ashok sharma and Ashok gupta";
// console.log(str.replace(/Ashok/g, 'Mr.$&')); // $& represents each match

// var str = "Ashok Sharma"
// console.log(str.replace(/(Ashok) (Sharma)/, '$2,$1'))


/*
------------------------------------------------------------
replace() WITH A FUNCTION
------------------------------------------------------------
When you pass a function as the second argument to replace(),
JavaScript calls it automatically with parameters like:

- str     matched substring
- offset  position where the match starts
- s       entire original string
*/

// ==========================
// function replacer(str,offset,s){
//     console.log('Found '+str+ ' at position '+offset+ ' in string ' +s);
//     return str.toLowerCase();
// }

// var result="HI-Hi-hi".replace(/hi/gi,replacer);
// console.log('Result:' +result);


/*
------------------------------------------------------------
test() METHOD
------------------------------------------------------------
- test() checks if a match exists
- returns true or false
- useful for validations
*/

// =====================
// test function
// the test method looks for any match and returns true/false

// var str= " i love JavaScript"
// console.log(/Love/.test(str));


/*
------------------------------------------------------------
exec() METHOD
------------------------------------------------------------
- exec() returns an array for the next match and provides details
- when used with global flag g, it remembers lastIndex
- repeated exec() calls find matches one by one
*/

// ===================
// Exec- returns array of match and detailed return

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


/*
------------------------------------------------------------
STICKY FLAG: y
------------------------------------------------------------
- y means strict matching from the current lastIndex
- it does NOT search forward like g does
- it tries to match exactly at lastIndex
*/

// =======================
// Y flag- strict search from the last index

// var str= "I love JavaScript";
// var reg= /javascript/iy;
// console.log(reg.lastIndex); // 0 by default
// console.log(str.match(reg));
// reg.lastIndex=7;
// console.log(str.match(reg));


/*
------------------------------------------------------------
CHARACTER CLASSES
------------------------------------------------------------

\d  digit (0–9)
\s  whitespace (space, tab, newline)
\w  word character (A–Z, a–z, 0–9, _)

Reverse classes:
\D  non-digit
\S  non-whitespace
\W  non-word character
*/

// ======================
// character classes

// \d means a character from 0 to 9
// \s a space symbol, includes spaces tabs new line
// \w letter of english or a digit or an underscore

// var str= "+7(901)-34343-34-675";
// var reg=/\d/
// console.log(str.match(reg));

// var reg=/\d/g
// console.log(str.match(reg));

// ==================
// var str= "CSS4 is cool"
// console.log(str.match(/CSS\d/));

// console.log("I love HTML5".match(/\w\w\w\w\d/));


/*
------------------------------------------------------------
WORD BOUNDARY: \b
------------------------------------------------------------
- \b matches a boundary between:
  - word char (A–Z, a–z, 0–9, _)
  - and non-word char (space, punctuation, start/end of string)
- useful for matching whole words only
*/

// ============
// Word boundary \b

// console.log("Hello, Java!".match(/\bJava\b/));
// console.log("Hello, JavaScript!".match(/\bJava\b/));
// console.log("Hello, JavaScript!".match(/\bHello\b/));
// console.log("Hello, Java!".match(/\bJava\b/));
// console.log("Hello, Java!".match(/\bHell\b/));
// console.log("Hello, Java!".match(/\bHell\b/));

// console.log("1 23 3456 78".match(/b\d\d\b/g)); // note: this pattern has "b" not "\b"


/*
------------------------------------------------------------
REMOVING NON-DIGITS USING \D
------------------------------------------------------------
This is a common data-cleaning task:
- Remove everything except digits
*/

// Reverse classes

// var str= "+9(102)-345-34-55";
// console.log(str.replace(/\D/g,""));

// console.log(str.match(/\d/g).join(' '));


/*
------------------------------------------------------------
SPACES ARE CHARACTERS TOO
------------------------------------------------------------
Whitespace matters when matching patterns.
*/

// spaces are regular characters

// console.log("1 - 5".match(/\d-\d/));       // does not match because spaces exist
// console.log("1 - 5".match(/\d\s-\s\d/));   // matches because \s handles spaces


/*
------------------------------------------------------------
DOT CHARACTER: .
------------------------------------------------------------
- "." matches any character except newline
- It is very powerful, but can also match too much
*/

// =================
// dot character--- "." any character except new line

// console.log("CSS4".match(/CS.4/));
// console.log("CS-4".match(/CS.4/));
// console.log("CS 4".match(/CS.4/));

// console.log("CS4".match(/CS.4/));

// var st= " javascript class at 09:00 at location 123:456";

// console.log(st.match(/\d\d.\d\d/));
// console.log(st.match(/\d\d.\d\d/g));
// .\d\d.\d\d.


/*
------------------------------------------------------------
ESCAPING SPECIAL CHARACTERS
------------------------------------------------------------
Some characters have special meaning in regex.
To match them literally, escape with backslash \

Special characters often escaped:
[\^$.|?*+()]

Examples:
- \. matches dot
- \( matches (
- \) matches )
*/

// ====================
// Escaping character \

// console.log("Java 8.0".match(/\d\.\d/))

// console.log("Java 8.0 g()".match(/g\(\)/))

// console.log("1/2".match(/\d//\d/)); // note: this line has a syntax issue due to //


/*
------------------------------------------------------------
SETS AND RANGES USING [ ]
------------------------------------------------------------
Sets:
- [aeo] matches any one character: a or e or o
- [tm] matches t or m

Ranges:
- [a-z] letters a to z
- [0-9] digits 0 to 9
- [0-9A-Fa-f] hex digits

The bracket form is one-character matching.
*/

// Sets [] "search for any character among given"

// console.log("Mop Top add".match(/\w\w\w/g));

// console.log("Mop Top add".match(/[tm]op/gi));

// console.log("Voila".match(/V[oi]la/gi));

// Range examples

// console.log("Exception 0xAF".match(/\dx[A-F][A-F]/g))

// console.log("Exception 0xAF 0x1F".match(/\dx[0-9A-F][0-9A-F]/g))

// \d is same as [0-9]
// \w is [a-zA-z0-9_]
// \s is same as [\t\n\f\r]


/*
------------------------------------------------------------
EXCLUDING CHARACTERS WITH [^ ]
------------------------------------------------------------
- [^...] means match any character except those in the set

Examples:
- [^0-9] any non-digit
- [^\s] any non-space
*/

// Excluding range

// console.log("alice15@gmail.com".match(/[^\d\sA-Z]/gi))


/*
------------------------------------------------------------
NO ESCAPING INSIDE [ ] FOR SOME CHARACTERS
------------------------------------------------------------
Inside square brackets, some characters can be used without escaping:
. + () - ^

But escaping is still okay if it improves readability.
*/

// No escaping in [...]
// console.log("1 + 32 - 3".match(/[-().^+]/g))

// console.log("1 + 32 - 3".match(/[\-\(\)\.\^\+]/g))

// console.log("JavaScript".match(/Java[^Script]/));

// console.log("JavaScript".match(/Java[^script]/));

// var  st = "python at 09:44 java at 21-30 45a56"
// console.log(st.match(/[0-9][0-9].[0-9][0-9]/g));

// console.log(st.match(/[0-9][0-9][^0-9A-F][0-9][0-9]/g));
// console.log(st.match(/\d\d[:-]\d\d/g));


/*
------------------------------------------------------------
QUANTIFIERS
------------------------------------------------------------
Quantifiers control how many times a pattern repeats.

{n}     exactly n times
{n,}    at least n times
{n,m}   between n and m times

+   one or more
*   zero or more
?   zero or one
*/

// Quantifiers +,*? {n}

// console.log(" I am 12345 year old".match(/\d{5}/))
// console.log(" i am not 142 but 1234 years old".match(/\d{3,5}/))

// + one or more
// console.log("+7(903)-1233-34-45".match(/\d+/g))

// ? zero or one
// console.log("should i write color or colour".match(/colou?r/g))

// * zero or more
console.log("100101".match(/\d0*/g))

// console.log("hello!...how goes?....".match(/\.{3,}/g))
// console.log("color:#121212; background-color:#AA00ef".match(/^#[a-f0-9]{6}/ig))


/*
------------------------------------------------------------
SOME QUICK test() PRACTICE LINES
------------------------------------------------------------
These show how test works with different patterns.
*/

// var result = (/abc/.test("abcde"));
// var result = (/abc/.test("abxde"));
// var result = (/[xys]/.test("in 1992"));
// var result = (/[0-9]/.test("in 1992"));
// var result = (/'\d+'/.test("'0'"));
// var result = (/'\d+'/.test("''"));
// var result = (/'\d*'/.test("''"));
// var result = (/'\d*'/.test("''"));
// var result = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// var result = (/neighbou?r/.test("neifhbour"));
// var result = (/neighbou?r/.test("neighbor"));

// console.log(result);


/*
------------------------------------------------------------
CAPTURING GROUPS (MORE EXAMPLES)
------------------------------------------------------------
Capturing group means a part of pattern enclosed in ().
It can be extracted using match() or exec().
*/

// Capturing group -- a part of pattern enclosed in () is called group

// console.log("Gogooogooo now".match(/go+/gi))

// console.log("my@mail.com @ his@site.com.uk".match(/[-.\w]+@[\w-]+[\w-]{2,20}/g))

// var str= "<h1> hello world </h1>"
// console.log(str.match(/<(.*?)>/))

// var str= "He said: \"she is one!\".";
// console.log(str.match(/['"](.*?)['"]/g))

// console.log('a "witch" and her "broom" is one'.match(/".+"/g));
// console.log('a "witch" and her "broom" is one'.match(/".+?"/g));


/*
------------------------------------------------------------
HTML/DOM BASED EXAMPLES (BROWSER)
------------------------------------------------------------
These examples show how regex is used in web pages
with search, replace, and test methods.

They are commented out here because they require an HTML file
and browser environment to run.
*/

// regex.com

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


/*
Another browser example using test():
*/

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


/*
Global match example in browser:
*/

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


/*
------------------------------------------------------------
EXTRA PRACTICE PATTERNS (VERY USEFUL)
------------------------------------------------------------
These are classic regex patterns students often practice:
- date time validation
- repeated words/sounds
- quoted text extraction
*/

//
// \d  Any digit character
// \w  An alphanumeric character (“word character”)
// \s  Any whitespace character
// \D  A character that is not a digit
// \W  A nonalphanumeric character
// \S  A nonwhitespace character
// .   Any character except newline

// var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// var result= (dateTime.test("30-01-2003 15:20"));
// var result= (dateTime.test("30-jan-2003 15:20"));

// var cartoonCrying = /boo+(hoo+)+/i;
// result = (cartoonCrying.test("Boohoooohoohooohoooooo"));

// var quotedText = /'([^']*)'/;
// result = (quotedText.exec("she said 'hello'"));


/*
------------------------------------------------------------
ABOUT exec()
------------------------------------------------------------
The exec() method is a RegExp method.
It searches a string for a specified pattern and returns the found match.
If no match is found, it returns null.

With g flag, exec remembers where it left off using lastIndex.
This allows step-by-step matching.
*/


/*
------------------------------------------------------------
COMMON NOTES AND CONFUSION POINTS
------------------------------------------------------------
- search() gives index of first match (or -1), not matched text
- match() without g gives detailed result with index and input
- match() with g gives array of all matches (less detail)
- replace() without g replaces only first occurrence
- replace() with g replaces all occurrences
- test() returns true/false (good for validation)
- exec() gives detailed match and works step-by-step when g is used

Regex can look confusing at first, but practice makes patterns familiar.
*/


/*
------------------------------------------------------------
END OF JAVASCRIPT REGEXP CONTENT
------------------------------------------------------------
*/
