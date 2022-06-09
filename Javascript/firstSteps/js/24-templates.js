'use strict'

//text templates

var name = prompt("Insert your name : ");
var lastname = prompt("Insert your lastname : ");

var text = `
    <h1>This is a template!</h1>
    <h3>Hello my name is ${name}</h3><br/>
    <h3>And my lastname is ${lastname}</h3>
`;

document.write(text);