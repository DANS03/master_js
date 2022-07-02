'use strict'

console.log('Welcome from  Json');

//JSON -JavaScript Object Notation
//this lets us create asosiative arrays

window.addEventListener('load', () => {

    var movie = {
        title: "Indiana Jones",
        year: "1981",
        country: "US"

    };

    console.log(movie); //You can access all the content of the object by calling it or you can access it's atributes with a dot

    console.log(movie.title);


    //You can also creat an array of objects

    var movies = [{
            title: "Ghostbusters",
            year: "1984",
            genere: "SciFi"
        }, {
            title: "Star Wars",
            year: "1978",
            genere: "SciFi"

        },
        {
            title: "Alien",
            year: "1979",
            genere: "Horror",
            director: "Ridley Scott"

        },

    ];

    var movieBox = document.querySelector("#movies");

    for (let index = 0; index < movies.length; index++) {

        var paragraph = document.createElement("p");
        paragraph.append(movies[index].title + " --- " + movies[index].year);
        movieBox.append(paragraph);
    }



});