'use strict'

console.log('exercise 2');

/*
Using a loop , show the sum and the middle of the numbers introduce by the user until a negative number is introduce
*/
var number = parseInt(prompt("Introduce a number:"));
var counter = 0;
var total = 0;

while (number > 0) {
    total = total + number;
    number = parseInt(prompt("Introduce a number:"));
    counter++;
}

console.log("the sum is: " + total + " the average is: " + total / counter);