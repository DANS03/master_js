'use strict'

console.log('Hello from rest and spread');

//if we don't know how many data we are going to resive in a function, we use ... and a name, this means all the values will be store inside of an array

console.log("REST---------------------");

function fruitList(fruitOne, fruitTwo, ...allTheRest) {

    console.log(fruitOne);
    console.log(fruitTwo);
    console.log(allTheRest);

}

fruitList('apple', 'orange', 'grapes', 'watermelon', 'banana', 'blueberry');

console.log("SPREAD-----------------");


var fruitArr = ['apple', 'orange', 'grapes', 'watermelon', 'banana', 'blueberry'];
//when we call a function and use ... this is telling the funtion to spread all the elemants od the array
fruitList(...fruitArr);