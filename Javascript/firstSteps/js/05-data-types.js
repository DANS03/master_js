'use strict'

var intro = "Welcome to 05 data types";

console.log(intro);

var num1 = 5;
var num2 = 10;
//sings
var sum = num1 + num2;
var sustraction = num1 - num2;
var divition = num1 / num2;
var multiplication = num1 * num2;

alert('this is the sum of the operation: ' + sum + ' \n this is the sustraction of the operation: ' + sustraction + ' \n this is the divition of the operation: ' + divition + ' \n this is the multiplication of the operation: ' + multiplication);

//data types
var integer_number = 20;
var text_string = 'hello " coding " world';
var boolean = true;

// there exist ways to change data types    
var false_number = '33';
var real_number = Number(false_number);
var int_number = parseInt(false_number); // helps memory size
var float_number = parseFloat(false_number); // is usefull for decimals

console.log(real_number + 1);
console.log(int_number + 2);
console.log(float_number + 3);

// you can know the type of var with this

console.log(typeof int_number + ' --> int number');
console.log(typeof false_number + ' --> false_number');
console.log(typeof float_number + ' --> float_number');
console.log(typeof boolean + ' --> boolean');