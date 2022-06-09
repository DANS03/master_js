'use strict'

console.log("Hello from 21 anonimus functions");

//An anonimus functios is a nameless function

var movies = function(name) {
    return "The movie is " + name;
};

// a call back is function that is executed inside of another

function sum(num1, num2, sumANDshow) {
    var result = num1 + num2;

    sumANDshow(result);

    return result;
}

sum(3, 4, function(value) {
    console.log(value);
});

//also we can use  an arrow funtion which is the same as before

sum(5, 6, (value) => {
    console.log(value);
});