'use strict'

console.log("Wellcome to timers");

window.addEventListener("load", () => {
    //timers
    //set interval is a event that happens every amount of time that is specified in the function
    var time = setInterval(() => {

        console.log("You have set an interval!");
        var header = document.querySelector("h1")


        if (header.style.color == "blue") {
            document.querySelector("h1").style.color = "red";
        } else {
            document.querySelector("h1").style.color = "blue";
        }

    }, 3000);

    //set tiem out is a event that only happens one time after the timer has come to an end

    var outTime = setTimeout(() => {

        console.log("You have set a time out!");
        var header = document.querySelector("h1").style.color = "green";
    }, 4000);

    var stop = document.querySelector("button");

    stop.addEventListener("click", () => {
        clearInterval(time); //this will stop the color change
        console.log("You have stoped the time interval!")
    });


});