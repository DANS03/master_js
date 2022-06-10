'use strict'

console.log("Hello from  26 multidimentional arrays");

//A multidimentional array is an array which contains an array inside

var categories = ['Action', "Horror", "Sci-Fi"];
var movies = ['BladeRunner', "Alien", "Fight Club"];

var cine = [categories, movies];

//if you want to acces to an element inside of the array of arrays then you have to use 2 index

console.log(cine[1][2]);

// if you want to add a elemento an array you can use  .push 

movies.push("Batman");

// you can even add an element with a promt 

var newMovie = prompt("Add a movie");

movies.push(newMovie);

console.log(movies);

//if you want to remove the last element you can use pop()

movies.pop();

console.log('poped array----> ' + movies);

//if you want to make the array an string then you have to use join()

var stringArr = movies.join();

console.log(stringArr);

// if you want to make a string into an array then you have to use .split() , just by putting in the parentheses how you want to divided

var randomString = "Text 1 , text 2 , text 3 , text 4 ";

var randomArray = randomString.split(",");

console.log(randomArray);

//you can also sort an array using .sort() or use reverse() in order to have the array reversed

movies.sort();

console.log(movies);

movies.reverse();

console.log(movies);