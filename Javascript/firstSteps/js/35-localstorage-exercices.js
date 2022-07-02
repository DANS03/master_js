'use strict'

console.log('Welcome to localstorage exercices');

//create a from that lets you add movies

window.addEventListener('load', () => {

    var form = document.querySelector('#moviesForm');

    form.addEventListener('submit', () => {

        var movieName = document.querySelector("#movieToAdd").value;
        if (movieName.length > 0) {
            localStorage.setItem(movieName, movieName);
        }

    });

    var ul = document.querySelector('#movieList')
    var li = document.createElement('li');

    for (var i in localStorage) {
        console.log(localStorage[i]);
        if (typeof(localStorage[i]) == 'string') {
            var li = document.createElement('li');
            li.append(localStorage[i]);
            ul.append(li);
        }

    }


    var formToDelete = document.querySelector('#moviesRemove');

    formToDelete.addEventListener('submit', () => {

        var movieNameToRemove = document.querySelector("#movieToRemove").value;

        if (movieNameToRemove.length > 0) {
            localStorage.removeItem(movieNameToRemove);
        }

    });



});