'use strict'

console.log('exercise 1');

/* 
Asks the user to introduce a number and returns which is the biggest number or if they are equal 
*/

var numberOne = parseInt(prompt("Introduce the First number: "));

var numberTwo = parseInt(prompt("Introduce the Second number: "));

if (numberOne < numberTwo && (numberOne > 0 && numberTwo > 0)) {

    console.log("The second number is the biggest number");
} else if (numberOne > numberTwo && (numberOne > 0 && numberTwo > 0)) {

    console.log("The first number is the biggest number");
} else if (numberOne == numberTwo) {
    console.log("they are equal");
} else {
    console.log("they are invalid");
}