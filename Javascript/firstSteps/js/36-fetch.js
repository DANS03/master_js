'use strict'

console.log("Welcome to fetch.js");
//Fetch(ajax subtitud) and petitions to services / api rest

window.addEventListener('load', () => {

    var divUsers = document.querySelector('#users');
    var divSingleUser = document.querySelector('#singleUser')
    var users = [];



    //You are bringing the data from the url and making a promise
    fetch('https://reqres.in/api/users')
        .then(data => data.json()) //you tranform the original data to a json
        .then(data => {
            users = data.data;
            console.log(users);
            usersList(users);

            return getSingleUser();

        }).then(data => data.json())
        .then(user => {
            console.log(user);
            showSingleUser(user.data);

            return getInfo();
        }).then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error); //if something goes wrong with the promise an error will appear in the console
        })

    function getSingleUser() {
        return fetch('https://reqres.in/api/users/2');
    }

    function showSingleUser(user) {
        let name = document.createElement('h4');
        let avatar = document.createElement('img');

        name.innerHTML = user.first_name + " " + user.last_name;

        avatar.src = user.avatar;
        avatar.width = '100';
        avatar.height = '100';

        divSingleUser.appendChild(name);
        divSingleUser.appendChild(avatar);
        console.log(avatar);

        document.querySelector('#loadingSingle').style.display = 'none';


    }

    function usersList(users) {
        users.map((user, index) => {
            let name = document.createElement('h4');
            name.innerHTML = (index + 1) + ". " + user.first_name + " " + user.last_name;

            divUsers.appendChild(name);

            document.querySelector('#loading').style.display = 'none';
        })
    }


    function getInfo() {
        var person = {
            name: 'John',
            lastname: 'Doe',
        };

        return new Promise((resolve, reject) => {
            var person_string = JSON.stringify(person);

            if (typeof(person_string) != 'string') {
                return reject('error');
            };

            return resolve(person_string);
        })

    }





});