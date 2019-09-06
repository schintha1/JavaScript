console.log("Hello World!");

//Comments
// in-line comments
/* This is a multi-
line comment
 */

//Data Types
/* undefined, null, boolean, string, symbol, number and object */

//Variables
var variable1 = "Defining a variable method-1"
/* Using keyword "var", variable is valid through out the program when defined outside the function. Is function scoped,
when defined inside a function. var variables --can be re-declared and updated--. var variables are hoisted to the top of
it's scope and initialised with a --value of undefined--.
Problem with "var": If you are trying to change a variable based on a condition, the variable gets changed for ever*/

variable2 = "Defining a variable method-2" //Defining with variable name

let variable3 = "Defining a variable method-3"
/* let is block scoped. var --can be updated but not re-declared--. let declarations are hoisted to the top, If you
try to use let variable before declaration, you'll --get a reference error--. */

const variable4 = "Defining a variable method-4"
//READ ONLY VARIABLE
/*Variables declared with const maintain constant values. const declarations are block scoped. const declarations
--can't be updated or re-declared--
A const object can not be updated, the properties can be updated. Hoisting of const: Just like let, const declarations
are hoisted to the top

If you have an Object or an Array, you can even mutate it even if it's declared with const
//WE can mutate an array even if it is defined using const using inplace change, ex: const a = [2,5]; a[1] = 6;
However you can reassign an array using bracket notation
When you have an object and you don't want to be able to change any of the value in the object
Use Object.freeze(objectname) when you don't want any items in the object to change.
*/
const obj = {
    key1:"value1",
    key2:"value2"
}
obj.key2 = "value3"
console.log(obj)

console.log(variable1)
console.log(variable2)
console.log(variable3)
console.log(variable4)

//Storing values with an assignment operator:
var declareAVariable; //Declaring a variable
var declareAVariable = 5; //Assigning/Initializing a variable

//Variable names and function names in javascript are case-sensitive
//Variables can be declared without var, In this case it's scope is global

//Numbers
/* Addition:'+', Subtraction:'-', Multiplication:'*', Division: '/', Remainder:'%', Incrementing:'++',
Decrementing:'--', +=, -=, *=, /=
All Integer number operators works for Decimal numbers
*/

//Difference between var i and i. When you declare i=5, it makes i to change globally
var i=3;
var j=1;
function test(){
    i=4;
    console.log(i);
    var j=5;
    console.log(j);
}
console.log(i);
test();
console.log(i);
console.log(j);


//Strings
/*String is defined in quotes
* Escape character: \
* Single Quote: '' (Use single quote to have double quotes inside a string)
* Backticks: Use backticks to have single quotes inside a string
* Backslash: \\, Newline: \n, Carriage return: \r, Tab: \t, Backspace: \b, \f: formfeed
* */
var string = "Hello World!";
var string = '`\'"This string contains \"Double Quotes\" in it"\'`';
var string2 = "This string contains  new line,\n \r carriage return, \t tab, \b Backspace, \f formfeed"
console.log(string2);
console.log(string);
/*Concatenate two strings with '+' operator
Constructing string with variables, Appending variables to string*/
var concatenate = "This is a concatenation example " + "This is concatenated to the first sentence"
console.log(concatenate);
var first_string = "This is first example.  "
var first_string = "THis is the second example" + first_string
console.log(first_string);
//Length of a string: Use .length to find length of a string
console.log("Length of a string: ")
console.log(first_string.length);
//Bracket notation to find the character in a string, Zero_index(Indexing starts from zero)
console.log(first_string[0])
/*String Immutability
String can not be altered once defined. which means each character in it can not be changed but it can be re-declared
with a different value
The string manipulate functions return new string.
If you have two references to the same string, modifying one doesn't effect the other.
*/
/*Arrays
* Arrays are defined in [ ], multiple types are allowed.
* Arrays are mutable
*Nested Array
*Find element in an array using index
*we can use index to modify value
* .push(): Append data to the end of an array
* .pop(): Removes an item from an array
* .shift(): Removes the first element of an array (similar to pop, but pop removes first element)
* .unshift() : Adds an array to the beginning of an array
* */
myArray = [1,"second",0.878,0,'f'];
var nestedArray=  mutablearray  = [['first','second'],['2:first','2:second']]
/* why this works array1 = array2 = [1,2,3,4] this doesn't var array1 = var array2 = [2,3,4]
mutablearray1 = nestedArray
console.log(mutablearray);
console.log(mutablearray1) */
nestedArray[1][1] = 'Changed';
nestedArray.push(["using push"]);
console.log(nestedArray);
nestedArray.shift()
console.log(nestedArray);
usingShift = nestedArray.shift();
console.log(usingShift);
console.log(nestedArray);
nestedArray.pop()
console.log(nestedArray);
/*
Methods to Iterate through an array
forEach
[1,2,3].forEach(function(item, index) {
    console.log(item, index);
   });
map: In a map it takes the value, does something and place it back to the array
filter: Checks if an item in an array passes a specific condition
reduce: Passes the result to the next iteration
some: returns true even if any item will pass the condition
every: return true only if all the items passes the condition
find: check for a specific condition
find index: returns the index of the true conditioned item
*/
//using spreadout operator: If you want to make a copy of an array use can use spreadout operator arr1 = [...arr2];
Array = [1,234,443,55];
var double = Array.map(function (item) {
    return item*2;
})
console.log(double);


/* Functions
*function structure:
*function functionName(){
*
*}
*Calling a function:
*functionName()
*Passing Arguments:
*We can pass the arguments within the brackets of the function
*Global scope vs Local scope
*If a variable is defined globally and the same variable name is used to define in side the function scope, The Local
*function variable takes precedence over the global variable
*Function with return value
*Function without return value
*Assign a return value to a variable
*Returning boolean value from a function: Instead of writing if conditions to return true or false, can use something
* like return(a>b), because comparative operators return true or false values
* Returning Early Patterns from functions: we can have multiple return statements in a function based on the condition
* checking, so after the first return value it stops executing the next steps
* Having Default arguments in a function
* The rest operator allows us to take multiple number of arguments and convert them into a single array args
* function name(...args){}
* */

/*Boolean Values
* true or false
* no quotations around boolean*/

/*type-converting equality comparision -> ==
* Strict equality comparision -> === : For strict comparison the objects being compared must have the same type and
* value, Two objects are strictly equal if they refer to same Object
*!=, !==
*>, <, >=, <=, &&, ||,
*Logical order in If else statements is very Important
*
*Conditional Logic
*if(condition or variable){
*If condition or variables evaluates to true, the block of code gets evaluated
 }
*else{
* }
* elseif(){
* }
*Comparison Operators, Most of the comparative operators returns a boolean true or false
//DIFFERENCE BETWEEN IF COND, SWITCH AND (1:30:00 refer video)
*/

var variable = 10;
//     if(1){
//         console.log("Greater than Zero");
//     }
switch (variable) {
    case (variable< 11):
          "Less than 11";
    case (variable>5):
        console.log("Greater than 5");
console.log(variable)
}
/*
For Loop: for(statement1; statement2; statement3){
}
Statement1 is executed (one time) before the execution of the code block
Statement2 defines the condition for executing the code block
Statement3 is executed (every time) after the code block has been executed
For/In Loop: for-in Loop iterates through properties of an object in Javascript
for(n in Object){
console.log( Object[n]);
//n refers to number of properties inside an object
}
For/Of
Loops through the values of an Iterable objects (Array, String, Maps, NodeLists and more)
for(x of object){
console.log(x)

** Difference between For/Of and For/In **
Difference between IF and Switch case

//Switch case
switch(expression){
    case 1:
        code block
    case 2:
        code block
    case 3:
    code block
}
The switch expression is evaluated once.
The value of the expression is compared with the value of each case.
If there is a match the associated block gets executed.
If the code reaches 'break' keyword, it breaks out of the switch block
If you omit the 'break' keyword, the next case will be executed even if the evaluation does not match the case.
The default keyword specifies the code to run if there is no case match.

//While Loop
The while loop loops through a block of code as long as the condition evaluates to true
while(condition){
Code block to be executed
}
Do/While Loop
The code block is executed atleast once even before the condition is evaluated to true, then it will repeat as long as the condition is true.

//Break
The 'break' statement jumps out of the loop
//continue
The 'continue' statement jumps over one iteration in the loop
}
*/

/*OBJECTS
* Objects are defined with curly braces at the beginning and ending and accessed using the properties
* var objectName = {
* "Properties" = "Value",
* "Property1" = Integer,
* "Property2" = "String",
* "Property3" = ["Can", "Be", "Array"]
};
* Accessing properties of an object
* objectName.Property1; //Dot Notation
* objectName["Property name"] //Bracket Notation, It's necessary to use if we have space in the property

* ** Difference between dot notation and bracket notation
* Dot Notation:
* Property identifiers can only be alphanumeric [and _ and $]
* Property identifiers cannot start with a number
* property identifiers cannot contain variable
* Bracket Notation:
* Property identifiers have to be a string or a variable that references a string
* It is okay to have variables, spaces and Strings that starts with numbers

*Accessing Object Properties with Variables:
* We can initialize a variable to the property and use that variable to access that property value.
*
* Update Object Property
* we can update using dot notation
*
* Adding new properties
* objectName.newproperty = new value
* ObjectName['newProperty'] = new value
*
* Delete Properties
* delete objectName.property //using delete keyword
*
* Searching for a value
* lookup[val] //Using lookup, returns the property
*
*Testing Objects for properties
* ObjectName.hasOwnProperty(property) // Checks if that property is defined inside the object
*Deleting an object
* using 'delete' keyword
* Manipulating complex objects
* Can be accessed by dot for a nested object. Object1.Object2.Property
* Combine bracket and dot notation to access an element from an nested array of objects
* We can have nested objects and multiple objects in an array
*
* Make copy of an object
* var ObjectCopy = JSON.parse(JSON.stringify(Objectname));
*
*
*
*
* Primitive type vs Reference type
* Primitive Type: (Assigned by a value): String, Number, Boolean, Undefined, Null, Symbol.
* Stored on a stack
* Reference Type: (Assigned by reference): Objects -> Arrays
* Stored in HEAP
*
* Pass by value vs pass by reference
* When you pass an argument in to a function, and changing the argument(variable) inside the function might change that variable. If the variable is reference type.
* If the argument is primitive type, changing that argument will be scoped into the function
* */
/*
* Generate Random Decimal Numbers with Math.random()
* Generate Random Whole Number (between 1-19) with Math.floor(Math.random() * 20)
* ParseInt(): convert String to an Integer 'parseInt()'
*Convert Binary number into an Integer using parseInt Radix: parseInt(str, 2)

* * Ternary Operator
* condition? statement-if-true : statement-if-false;
* condition? statement-if-true : condition two? statement-if-true : statement-if-false;;
* */

/*
Try, Catch, Finally
try{  //The try statement lets you try a block of code
    //code goes here
}
catch{} //The catch statement lets you handle the error
throw{} //The throw statement lets you create the custom errors
finally{} //Let's you execute code after try and catch regardless of the result
 */

/*Arrow functions: Arrow functions is used to assign anonymous functions to a variable
convert the below function into arrow function
Normal function definition
var myConcat = function(arr1,arr2){
return arr1.concat(arr2);
}
Using Arrow Function
var myConcat = (arr1,aar2) => arr1.concat(arr2);

Higher order Arrow function
Arrow functions can be used with map, reduce etc...





*
* */











































//To print minimum distance from origin, If both negative and positive points are at same distance return negative.
arr = [1,-4,2,5,2,-3];
var minimumpositive = arr[0];
var minimumnegative = arr[0];
for(i=1;i<arr.length;i++){
    if(Math.abs(arr[i]) === arr[i]){
        if(arr[i] < minimumpositive) {
            minimumpositive = arr[i];
        }
    }
    else{
        if(minimumnegative > arr[i]){
            minimumnegative = arr[i];
        }
    }
}
console.log(minimumnegative);
console.log(minimumpositive);
//Fibonacci series
function fib(n){
    if(n<=0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    return fib(n-1)+fib(n-2);
}
console.log(fib(6))

//Print the powers of 2 from 1 through n(inclusive)
function powerOf2(n){
    if(n<=0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    else{
        let prev = powerOf2(Math.trunc(n/2));
        let curr = prev*2;
        console.log(curr);
        //return curr;
    }

}

var name = 5;
var name = 6;
console.log(name);
var string = "Array";
string[2] = 'f';
console.log(string[2]);

