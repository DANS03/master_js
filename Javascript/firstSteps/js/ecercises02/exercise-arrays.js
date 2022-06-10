'use strict'

console.log("Exercice 02 Arrays");

/* Make a program that :
1-Asks for 6 numbers and stores them inside of an array         /\
2-Shows all the element in the page body and in console         /\    
3-The array must be ordered and show it                         /\
4-the array muust be reversed and show it                       /\
5-Show the number of elements inside of the array               /\  
6-A serch of a value introduced by the user if it exist show the index of it                                                              /\
*/

var sizeOfArray = 6;
var array = new Array(sizeOfArray);
for (let i = 0; i < sizeOfArray; i++) {
    array[i] = parseInt(prompt("Introduce the " + (i + 1) + " number of the array : "));
};
console.log("Original array");
console.log(array);
console.log("----------------------------------");


document.write("<h1>Lsit of numbers</h1>");
document.write("<ul>");

array.forEach((Element, index, array) => {
    document.write("<li>" + Element + "</li>");
});

document.write("</ul>");

array.sort();

console.log("Sorted array");
console.log(array);
console.log("----------------------------------");

array.reverse();

console.log("Reversed array");
console.log(array);
console.log("----------------------------------");

console.log("Size of the array : " + array.length);

var numberToSearch = parseInt(prompt("Number to find : "));
var searchIndex = array.indexOf(numberToSearch);

console.log(searchIndex);


if (searchIndex > -1) {
    console.log(searchIndex);
}