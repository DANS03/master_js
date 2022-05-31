'use strict'

var intro = "Welcome to 07 switch";

console.log(intro);

var age = 21;
var condition = '';

switch (age) {
    case 18:
        condition = 'You are underage';
        break;

    case 21:
        condition = "You are an adult"
        break;

    case 40:
        condition = 'You have a middle age crisis'
        break;

    case 60:
        condition = "you are an elder citizen";
        break;
    default:
        condition = "no comments";
        break;
}
console.log(condition);