'use strict'

console.log("exercise 5");

/*
Show all the numbers that can be divided by a number introduced by the user
*/

var number = parseInt(prompt("Introduce a number"));

for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        console.log(i);
    }
}