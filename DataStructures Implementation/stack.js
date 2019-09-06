/* Stack

First in last out data structure

// Functions: push, pop, peek, length

Implementing stack using array object method
All the methods we need to implement a stack are already defined in an array object method
example using stack with array object: Check if a string is palindrome or not using array object methods
*/

var string = "abcba";
var stack = []; //This is our stack
var rstack = "";

for(var i=0; i<string.length; i++){
    stack.push(string[i]);
}

for(var i=0; i<string.length; i++){
    rstack  += stack.pop();
}

if(string === rstack){
    console.log("The given string is a palindrome");
} else{
    console.log("The given string is not a palindrome");
}

//Implement a stack class
var Stack = function(){
    this.count = 0;
    this.storage = {};

    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function(){

        if(this.count === 0){
            return undefined;
        }

        this.count--;
        let value = this.storage[this.count];
        delete this.storage[this.count];
        return value;
    }

    this.size = function(){
        return this.count;
    }

    this.peek = function(){
        return this.storage[this.count - 1];
    }
}

//Testing

var myStack = new Stack();
myStack.push('I am exicted about javascript');
myStack.push(99);
console.log(myStack.size());
myStack.pop();
console.log(myStack.peek());
console.log(myStack.size());
