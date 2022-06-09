'use strict'

//Text transformtion

var num = 333;

var text1 = "Hello";

var text2 = "World";

var data = num.toString(); // .toString is use to transfom an int to String

console.log(typeof data);

data = text1.toUpperCase(); //.toUpperCase transforms all the letters in upper case

console.log(data);

data = text1.toLowerCase(); //.toLowerCase transforms all the letters in lower case

console.log(data);

console.log(text2.length); //.lenght you can know the size of a string or the number os elemnets of an array

var finalText = text1 + ' ' + text2;
//or
var concatText = text1.concat(' ' + text2);

console.log(finalText);
console.log(concatText);

var textToSearch = "if we want to know if a word exist in a String we can use index of ";

var searched = textToSearch.indexOf("word");

console.log(searched); // returns the first apearence of a word but id the word is not indide of the string then it returns -1

var textMatched = textToSearch.match('we');

console.log(textMatched);