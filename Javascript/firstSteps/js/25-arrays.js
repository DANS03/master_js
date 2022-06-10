'use strict'

console.log("Hello from 25 arrays");

//An array is data colletcion store in a variable, you can access the data of the array through index 

var name = "John Doe"

var names = ["John Doe", "Jane Doe", "Juan Perez", "Maria Lopez"];
//index         0           1           2               3

console.log(names[0]); //calling the first element of the array

console.log(names.length); // with .lenght you can see the size of the array

var index = parseInt(prompt("From 0 to 3 choose the elemento of the array")); //you can acces an element of the array via the index

if (index < names.length) {
    console.log(names[index]);
} else {

    console.log("index of out reach");
}


var unFilledArry = new Array('');

//you can see all the elements of an array with a for statement
document.write("<h1>List of Names</h1>");
document.write("<ul>");

for (let i = 0; i < names.length; i++) {
    document.write("<li>" + names[i] + "</li>")
}

document.write("</ul>");

//another way you can go through an array is by useing for each

names.forEach((Element, index, array) => {
    console.log("For each loop " + Element);
});