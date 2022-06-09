'use strict'

/*
    Show all the none numbers between 2 numbers
*/

var start = parseInt(prompt("Introduce the starting number: "));
var limit = parseInt(prompt("Introduce the limit number"));

if (start < limit) {
    for (let i = start; i < limit; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }

} else {
    console.log("Unvalid numbers");
}