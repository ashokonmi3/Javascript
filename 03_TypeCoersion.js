/* ===============================================================================
Type Coercion in JavaScript
Type coercion means automatic type conversion done by JavaScript so that an
expression can still be evaluated even when the values involved are of different
data types.

In simple words, JavaScript tries to adjust one type into another type when
required. This can happen automatically (implicit coercion) or can be done by
the programmer intentionally (explicit conversion).

This topic is very important because JavaScript is a loosely typed language.
That means the same variable can hold different types of values, and JavaScript
will often try to make expressions work by converting types behind the scenes.

Main areas where coercion is commonly seen:
1. String conversion
2. Numeric conversion
3. Boolean conversion
4. Equality comparison
5. Arithmetic expressions
================================================================================ */

/* ===============================================================================
String Conversion
String conversion happens when JavaScript needs to treat a value as text.

This commonly happens in the following cases:
1. While concatenating strings using the + operator
2. While printing mixed values
3. When we explicitly convert using String()

Whenever one operand in a + expression becomes a string, JavaScript often
converts the other operand into a string as well.

This is why students often see unexpected outputs such as "523" instead of 10.
================================================================================ */

// var result1 = "Hello" + " " + "World";
// console.log("value of result1 : " + result1);
// console.log("value of typeof(result1) : " + typeof result1);

/* ===============================================================================
Mixing Numbers and Strings in Concatenation
When numbers and strings are mixed using the + operator, JavaScript may switch
from numeric addition to string concatenation.

Important rule:
Execution happens from left to right.

If JavaScript sees a string in a + operation, it may convert the remaining
values into strings and join them together.

This is one of the most common examples of implicit type coercion.
================================================================================ */

// console.log("value of ('5' + 2 + 3) : " + ("5" + 2 + 3));
// console.log("value of typeof('5' + 2 + 3) : " + typeof ("5" + 2 + 3));

// console.log("value of (5 + 2 + '3') : " + (5 + 2 + "3"));
// console.log("value of typeof(5 + 2 + '3') : " + typeof (5 + 2 + "3"));

// console.log("value of ('hello' + true) : " + ("hello" + true));
// console.log("value of typeof('hello' + true) : " + typeof ("hello" + true));

// Explanation:
// "5" + 2       -> "52"
// "52" + 3      -> "523"

// 5 + 2         -> 7
// 7 + "3"       -> "73"

/* ===============================================================================
Explicit String Conversion using String()
Sometimes we do not want JavaScript to decide automatically.
In such cases, we can explicitly convert a value into a string by using String().

This makes the code more readable and predictable.

Explicit conversion is generally preferred in real projects because it avoids
confusion caused by implicit coercion.
================================================================================ */

// var value = 100;
// var convertedToString = String(value);

// console.log("value of value : " + value);
// console.log("value of typeof(value) : " + typeof value);

// console.log("value of convertedToString : " + convertedToString);
// console.log("value of typeof(convertedToString) : " + typeof convertedToString);

/* ===============================================================================
Numeric Conversion
Numeric conversion happens when JavaScript needs to treat a value as a number.

This usually happens during arithmetic operations such as:
1. Multiplication (*)
2. Subtraction (-)
3. Division (/)
4. Modulus (%)

Unlike the + operator, most arithmetic operators try to convert their operands
to numbers before performing the operation.

If conversion is possible, JavaScript performs the calculation.
If conversion is not possible, JavaScript returns NaN.
================================================================================ */

// var result4 = "10" * 2;
// console.log("value of result4 : " + result4);
// console.log("value of typeof(result4) : " + typeof result4);

// var result5 = Number("5") + 3;
// console.log("value of result5 : " + result5);
// console.log("value of typeof(result5) : " + typeof result5);

/* ===============================================================================
Explicit Numeric Conversion using Number()
Number() is used to convert a value into a number explicitly.

This is useful when:
1. Reading user input
2. Converting strings from forms
3. Performing arithmetic on values received as text

If the string contains a valid numeric value, conversion succeeds.
If not, the result becomes NaN.
================================================================================ */

// var num1 = Number("25");
// console.log("value of num1 : " + num1);
// console.log("value of typeof(num1) : " + typeof num1);

// var num2 = Number("25.75");
// console.log("value of num2 : " + num2);
// console.log("value of typeof(num2) : " + typeof num2);

/* ===============================================================================
Edge Case - Non-numeric strings convert to NaN
NaN stands for Not a Number.

Even though the name says "Not a Number", the type of NaN in JavaScript is
still "number". This is an important interview question.

NaN indicates that JavaScript tried to perform a numeric conversion or numeric
operation, but the value could not be interpreted as a valid number.
================================================================================ */

// var result6 = Number("abc");
// console.log("value of result6 : " + result6);
// console.log("value of typeof(result6) : " + typeof result6);

// var result7 = "hello" * 2;
// console.log("value of result7 : " + result7);
// console.log("value of typeof(result7) : " + typeof result7);

console.log(+"7" + 3);
console.log(3 + "7");
console.log(+"7");
console.log(+true);
console.log(+"abc");
console.log(-"7" + 3);

/* ===============================================================================
Boolean Conversion
Boolean conversion happens in conditions such as:
1. if statements
2. while loops
3. logical operations
4. ternary operators

In Boolean context, JavaScript converts values into either true or false.

Some values are treated as falsy, which means they become false when converted
to Boolean.

All remaining values are treated as truthy, which means they become true.
================================================================================ */

// console.log("value of Boolean(0) : " + Boolean(0));
// console.log("value of typeof(Boolean(0)) : " + typeof Boolean(0));

// console.log("value of Boolean('') : " + Boolean(""));
// console.log("value of typeof(Boolean('')) : " + typeof Boolean(""));

// console.log("value of Boolean(undefined) : " + Boolean(undefined));
// console.log(
//   "value of typeof(Boolean(undefined)) : " + typeof Boolean(undefined),
// );

// console.log("value of Boolean(null) : " + Boolean(null));
// console.log("value of typeof(Boolean(null)) : " + typeof Boolean(null));

// console.log("value of Boolean(NaN) : " + Boolean(NaN));
// console.log("value of typeof(Boolean(NaN)) : " + typeof Boolean(NaN));

// console.log("value of Boolean(false) : " + Boolean(false));
// console.log("value of typeof(Boolean(false)) : " + typeof Boolean(false));

// console.log("value of Boolean('hello') : " + Boolean("hello"));
// console.log("value of typeof(Boolean('hello')) : " + typeof Boolean("hello"));

// console.log("value of Boolean(1) : " + Boolean(1));
// console.log("value of typeof(Boolean(1)) : " + typeof Boolean(1));

// console.log("value of Boolean(10.0) : " + Boolean(10.0));
// console.log("value of typeof(Boolean(10.0)) : " + typeof Boolean(10.0));

// console.log("value of Boolean(true) : " + Boolean(true));
// console.log("value of typeof(Boolean(true)) : " + typeof Boolean(true));

/* ===============================================================================
Falsy Values in JavaScript
Falsy values are values that become false in Boolean context.

The commonly used falsy values are:
1. false
2. 0
3. ""   (empty string)
4. null
5. undefined
6. NaN

Everything else is generally truthy.

This concept is very important in conditions and logical expressions.
================================================================================ */

/* ===============================================================================
Examples of Type Coercion in Expressions
The following examples show how JavaScript behaves when different data types are
combined in a single expression.

These are very useful for classroom discussion because they help students build
execution logic step by step.
================================================================================ */

// var x = 5 + "2" + 3;
// console.log("value of x : " + x);
// console.log("value of typeof(x) : " + typeof x);

// var y = 5 + 2 + "3";
// console.log("value of y : " + y);
// console.log("value of typeof(y) : " + typeof y);

// var z = "10" - 5;
// console.log("value of z : " + z);
// console.log("value of typeof(z) : " + typeof z);

// Explanation:
// 5 + "2"      -> "52"
// "52" + 3     -> "523"

// 5 + 2        -> 7
// 7 + "3"      -> "73"

// "10" - 5     -> 10 - 5 -> 5

/* ===============================================================================
Use of + Operator with Strings and Numbers
The + operator is special in JavaScript because it can do two different things:
1. Numeric addition
2. String concatenation

If one of the operands is a string, JavaScript may choose concatenation.
This is why + behaves differently from -, *, and /.
================================================================================ */

// console.log("value of ('1' + 2) : " + ("1" + 2));
// console.log("value of typeof('1' + 2) : " + typeof ("1" + 2));

// console.log("value of (2 + '1') : " + (2 + "1"));
// console.log("value of typeof(2 + '1') : " + typeof (2 + "1"));

// console.log("value of (2 - '1') : " + (2 - "1"));
// console.log("value of typeof(2 - '1') : " + typeof (2 - "1"));

// console.log("value of ('6' / '2') : " + "6" / "2");
// console.log("value of typeof('6' / '2') : " + typeof ("6" / "2"));

// console.log("value of ('6' * '2') : " + "6" * "2");
// console.log("value of typeof('6' * '2') : " + typeof ("6" * "2"));

/* ===============================================================================
Equality (==) vs Strict Equality (===)
This is one of the most important topics in JavaScript.

==  -> checks equality after allowing type coercion
=== -> checks equality without type coercion

That means == may convert one operand into another type before comparison.
But === checks both type and value exactly as they are.

In real projects, === is usually preferred because it gives more predictable
results and avoids hidden conversions.
================================================================================ */

// var a = 10;
// var b = "10";

// console.log("value of a : " + a);
// console.log("value of typeof(a) : " + typeof a);

// console.log("value of b : " + b);
// console.log("value of typeof(b) : " + typeof b);

// console.log("value of (a == b) : " + (a == b));
// console.log("value of typeof(a == b) : " + typeof (a == b));

// console.log("value of (a === b) : " + (a === b));
// console.log("value of typeof(a === b) : " + typeof (a === b));

// console.log("value of (null == undefined) : " + (null == undefined));
// console.log(
//   "value of typeof(null == undefined) : " + typeof (null == undefined),
// );

// console.log("value of (null === undefined) : " + (null === undefined));
// console.log(
//   "value of typeof(null === undefined) : " + typeof (null === undefined),
// );

/* ===============================================================================
Why === is Safer than ==
Using === is safer because:
1. It does not perform hidden type conversion
2. It checks type and value together
3. It reduces unexpected bugs
4. It makes code easier to understand and debug

Example:
"10" == 10   -> true
"10" === 10  -> false

The first one may confuse beginners because the types are different.
================================================================================ */

/* ===============================================================================
Comparison Operators and Type Coercion
Comparison operators such as >, <, >=, <= and loose equality operators may also
perform type coercion.

If operands are of different types, JavaScript may try to convert one side into
a compatible form before performing the comparison.
================================================================================ */

// console.log("value of (2 > 1) : " + (2 > 1));
// console.log("value of typeof(2 > 1) : " + typeof (2 > 1));

// console.log("value of (2 == 1) : " + (2 == 1));
// console.log("value of typeof(2 == 1) : " + typeof (2 == 1));

// console.log("value of (2 != 1) : " + (2 != 1));
// console.log("value of typeof(2 != 1) : " + typeof (2 != 1));

// console.log("value of ('2' > 1) : " + ("2" > 1));
// console.log("value of typeof('2' > 1) : " + typeof ("2" > 1));

// console.log("value of ('01' == 1) : " + ("01" == 1));
// console.log("value of typeof('01' == 1) : " + typeof ("01" == 1));

// console.log("value of (true == 1) : " + (true == 1));
// console.log("value of typeof(true == 1) : " + typeof (true == 1));

// console.log("value of (false == 0) : " + (false == 0));
// console.log("value of typeof(false == 0) : " + typeof (false == 0));

// console.log("value of (0 === false) : " + (0 === false));
// console.log("value of typeof(0 === false) : " + typeof (0 === false));

// console.log("value of (null === undefined) : " + (null === undefined));
// console.log(
//   "value of typeof(null === undefined) : " + typeof (null === undefined),
// );

// console.log("value of (null == undefined) : " + (null == undefined));
// console.log(
//   "value of typeof(null == undefined) : " + typeof (null == undefined),
// );

/* ===============================================================================
Special Case: null and undefined
null and undefined behave in a special way in JavaScript comparisons.

null == undefined   -> true
null === undefined  -> false

Why?
Because loose equality considers them loosely equal,
but strict equality checks type as well.

null type      -> object  (historical behavior in JavaScript)
undefined type -> undefined
================================================================================ */

// console.log("value of null : " + null);
// console.log("value of typeof(null) : " + typeof null);

// var tempValue;
// console.log("value of tempValue : " + tempValue);
// console.log("value of typeof(tempValue) : " + typeof tempValue);

/* ===============================================================================
More Type Coercion Examples
These examples help students understand how JavaScript switches behavior based
on operator and operand types.
================================================================================ */

// console.log("value of (2 + '3' + 4) : " + (2 + "3" + 4));
// console.log("value of typeof(2 + '3' + 4) : " + typeof (2 + "3" + 4));

// console.log("value of (2 - '1') : " + (2 - "1"));
// console.log("value of typeof(2 - '1') : " + typeof (2 - "1"));

// console.log("value of ('20' - '5') : " + ("20" - "5"));
// console.log("value of typeof('20' - '5') : " + typeof ("20" - "5"));

// console.log("value of ('20' + '5') : " + ("20" + "5"));
// console.log("value of typeof('20' + '5') : " + typeof ("20" + "5"));

// console.log("value of ('5' * '4') : " + "5" * "4");
// console.log("value of typeof('5' * '4') : " + typeof ("5" * "4"));

/* ===============================================================================
Summary and Best Practices
1. JavaScript is flexible and allows implicit type conversion.
2. The + operator may perform concatenation instead of addition.
3. Arithmetic operators like -, *, / usually force numeric conversion.
4. Boolean conversion is important in conditions and logical checks.
5. Falsy values must be remembered carefully.
6. == performs coercion, while === does not.
7. Prefer === in real-world coding for safer and more predictable results.
8. Use explicit conversion like String(), Number(), and Boolean() when clarity
   is more important than brevity.
================================================================================ */

/* ===============================================================================
Additional Questions
These questions are useful for revision, interview practice, and classroom
discussion.
================================================================================ */

/* ===============================================================================
Question: What is type coercion in JavaScript?
Answer:
Type coercion is the automatic or implicit conversion of one data type into
another by JavaScript during expression evaluation.

For example:
"5" + 2  -> "52"
Here number 2 is converted into string "2".
================================================================================ */

/* ===============================================================================
Question: What is the difference between implicit conversion and explicit conversion?
Answer:
Implicit conversion is done automatically by JavaScript.
Explicit conversion is done manually by the programmer using functions such as
String(), Number(), and Boolean().
================================================================================ */

/* ===============================================================================
Question: What is the difference between == and === in JavaScript?
Answer:
== compares values after allowing type coercion.
=== compares both value and type without allowing coercion.

Example:
"10" == 10   -> true
"10" === 10  -> false
================================================================================ */

/* ===============================================================================
Question: Why should we prefer === over == ?
Answer:
We should prefer === because it avoids unexpected type conversion and gives more
predictable results. It ensures both type and value are exactly the same.
================================================================================ */

/* ===============================================================================
Question: What are truthy and falsy values in JavaScript?
Answer:
Falsy values are:
false, 0, "", null, undefined, NaN

Truthy values are all values except falsy values.
These concepts are important in conditions and logical expressions.
================================================================================ */

/* ===============================================================================
Question: What is NaN in JavaScript?
Answer:
NaN means Not a Number.
It appears when JavaScript tries to perform a numeric operation on a value that
cannot be converted into a valid number.

Example:
Number("abc") -> NaN
================================================================================ */

/* ===============================================================================
Question: Why does "5" + 2 give "52", but "5" - 2 gives 3 ?
Answer:
The + operator can do string concatenation, so number 2 gets converted into
string "2".
The - operator only performs numeric subtraction, so "5" is converted into
number 5.
================================================================================ */

/* ===============================================================================
Output-Based Practice Questions
These are useful for prediction-based learning in classroom sessions.
================================================================================ */

// console.log("value of (2 + '3' + 4) : " + (2 + "3" + 4)); // "234"
// console.log("value of (2 - '1') : " + (2 - "1")); // 1
// console.log("value of (null == undefined) : " + (null == undefined)); // true
// console.log("value of (null === undefined) : " + (null === undefined)); // false
// console.log("value of (false == 0) : " + (false == 0)); // true
// console.log("value of ('6' / '2') : " + ("6" / "2")); // 3
// console.log("value of ('hello' + true) : " + ("hello" + true)); // hellotrue
// console.log("value of Boolean('') : " + Boolean("")); // false
// console.log("value of Boolean('JavaScript') : " + Boolean("JavaScript")); // true
// console.log("value of typeof(NaN) : " + typeof(NaN)); // number
