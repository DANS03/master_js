'use strict'


window.addEventListener('load', () => {
    console.log('Welcome to localstorage');

    //Localstorage is where data is store during a seccion, it helps to keep and access data from the user even if we change the webpage

    //you can check compability of your browser and local storage by doing this
    if (typeof(Storage) !== 'undefined') {
        console.log('Localstorage is available');

    } else {
        console.log('Localstorage is not available');
    }


    //How to store data

    localStorage.setItem("Title", "JavaScript course");

    //How to get data

    console.log(localStorage.getItem("Title"));

    document.querySelector("#movies").innerHTML = localStorage.getItem("Title");

    //Save data

    var user = {
        username: "John",
        email: "johndoe@gmail.com",
        age: 25

    };

    localStorage.setItem('user', JSON.stringify(user)); //to be able to access to the user's data you must parse it to a string


    //Recover object, you have to transform the string to and JSON

    var usersData = JSON.parse(localStorage.getItem('user')); //this is from the local storege

    console.log(usersData);

    //You can also delete items from the localstorage or clear it

    localStorage.removeItem('user');
    localStorage.clear();


});