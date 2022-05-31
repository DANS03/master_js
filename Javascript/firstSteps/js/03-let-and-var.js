'use strict'

var intro = "Wellcome to 03 let and var JS";

console.log(intro);

/*diference between let and var 
    -let defines a temporal variable in context of the block of code
    -var is a global variable that means that the block of code becomes irrelevant
    */

//VAR TEST
var number = 40;

if (true) {
    var number = 50;
    console.log(number); // value must be 50
}

console.log(number); // value must be 50

//LET TEST
let text = "hello";

if (true) {
    let text = "world"
    console.log(text); //the value is world
}

console.log(text); // the value ud hello