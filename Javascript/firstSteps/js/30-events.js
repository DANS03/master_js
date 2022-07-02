'use strict'

console.log("Hello from events");

//an event is a fucntion that is triggered whe something specific happends

//event on load
window.addEventListener('load', () => {

    //mouse event

    var button = document.querySelector("#button");

    function changeColor() {

        console.log("You clicked me!");
        var bg = button.style.background;
        if (bg == "green") {
            button.style.background = "red";
        } else {
            button.style.background = "green";
        }
    }
    //click
    button.addEventListener('click', () => {
        changeColor();
    });


    button.addEventListener('mouseover', () => {
        console.log("hi");
        button.style.background = "#ccc"; //you can also use the operator this 
        this.style.background = "grey";
    });


    button.addEventListener('mouseout', () => {
        console.log("goodbye");
        button.style.background = "black";
    });

    var inputText = document.querySelector("#name")

    //Focus

    inputText.addEventListener('focus', () => {

        console.log("You focussed on me!---->focus");
    });

    //Blur
    inputText.addEventListener('blur', () => {

        console.log("You are not in the input!---->blur ");
    });

    //KeyDown

    inputText.addEventListener('keydown', () => {

        console.log("You pressing " + String.fromCharCode(event.keyCode) + "!---->key down");
    });


    //KeyPress

    inputText.addEventListener('keypress', (event) => {

        console.log("You pressed a key!---->key press");
    });

    //KeyUp

    inputText.addEventListener('keyup', (event) => {

        console.log("You stop presing the key!---->key up");
    });


});