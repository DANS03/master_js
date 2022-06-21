'use strict'
console.log("Hello from DOM");
//DOM Document Object Model

var box = document.getElementById("myBox"); // with this command you can access to the contents inside the html and modifi them

var copy = document.getElementById("myBox").innerHTML; // with this command you can access to the text inside inside the html

box.innerHTML = "I`ve been modified from JavaScript!!!"
box.style.background = "red";

console.log(box);

console.log(copy);

copy = document.getElementById("myBox").innerHTML;

console.log(copy);

function changeColor(color) {
    box.style.background = color;
};

var newColor = prompt("Choose a color: ");
changeColor(newColor);


//you can get element by class or by tag

var allDivs = document.getElementsByTagName('div');

console.log(allDivs);

//if you what to  acces to any of the constes of allDivs you can acces by ana index because is an array 

var thirdDiv = allDivs[3].innerHTML;

console.log(thirdDiv);

//you can aloss get al the contenst inside a div to create  an index for example

for (var value in allDivs) {

    if (typeof(allDivs[value].textContent) == 'string') {
        var paragraph = document.createElement("p");
        var text = document.createTextNode(allDivs[value].textContent); //create text node lets you  access a string from an spefici value
        paragraph.appendChild(text);

        document.querySelector("#index").appendChild(paragraph);
    }

}

//You can also select elements by class

var redDivs = document.getElementsByClassName("red");


console.log(redDivs);