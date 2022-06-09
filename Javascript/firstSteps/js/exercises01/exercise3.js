'use strict'

console.log("exercise 3");
/*
    Show all the numbers between a starting number and a limit number
*/

var start = parseInt(prompt("Introduce the starting number:"));
var limit = parseInt(prompt("Introduce the limit number:"));

if (start < limit) {
    for (let i = start; i < limit; i++) {
        console.log(i);
    }
} else {
    console.log("invalid numbers")
}