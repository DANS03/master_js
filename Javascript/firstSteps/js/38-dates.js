'use strict'

console.log('Welcome to dates');

var currentDate = new Date();
var year = currentDate.getFullYear(); //this extracts from the date the current year
var month = currentDate.getMonth();
var day = currentDate.getDate();

var textDate = `The year is  ${year}
The month is ${month + 1}
The day is ${day}`

console.log(currentDate);
console.log(textDate);