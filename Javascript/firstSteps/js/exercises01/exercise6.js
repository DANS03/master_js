'use strict'

console.log('exercise 6');

/*
tells if a number is odd or even, and if a number is invalid asks again
*/
var number = 0

do {
    number = parseInt(prompt("Introduce a number: "));
} while (number >= 0);

if (number % 2 == 0) {
    console.log("the number is even");
} else {
    console.log("the number is odd");
}