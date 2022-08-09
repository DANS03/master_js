'use strict'
var args = process.argv.slice(2);

var num1 = parseFloat(args[0]);
var num2 = parseFloat(args[1]);

var template = `
    ->The sum is : ${num1 + num2}
    ->The sustraction is : ${num1 - num2}  
    ->The multiplication is : ${num1 * num2} 
    ->The divition is : ${num1 / num2} 
`;
console.log('Hello world from node Js');
console.log(template);