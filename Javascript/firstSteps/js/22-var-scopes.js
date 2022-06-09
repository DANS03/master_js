'use strict'

console.log('Hello from 22 var scopes');

function helloWorld(text) {
    console.log(text);

    //the reason that number is functional inside of helloWorld is because the var has a global scope an is reachable in al the document
    console.log(number);

    var hi = "Hello I'm a local var";
}

var number = 10;

var textGlobal = "Hello world I'm a global var";
helloWorld(textGlobal);

//This is a mistake because at the time that we reach this part of the code the function has already concluded and has been wiped  from the memory so hi becomes unreachale
console.log(hi);