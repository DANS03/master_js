'use strict'

/*Functions
    Is a reusable block of instructions that is incharge of doing an specific task
*/
// This how a funtion is defined
function banner() {

    //this is the block of instructions to be executed
    return "Hello from 19-functions ";
}


//call the funtion
console.log(banner());

//calculator example
//NumberOne and numberTwo are params of the function if one of the fisrt two parameters is missing the will be an error but int the third case becuase it already has a value it doesn't matter
function calculator(numberOne, numberTwo, show = false) {
    console.log("Sum :" + (numberOne + numberTwo));
    console.log("Sustraction :" + (numberOne - numberTwo));
    console.log("Divition :" + (numberOne / numberTwo));
    console.log("Multiplication :" + (numberOne * numberTwo));
}

var firstValue = parseInt(prompt("First number: "));
var secondValue = parseInt(prompt("Second number: "));

calculator(firstValue, secondValue);