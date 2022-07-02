'use strict'

window.addEventListener('load', () => {
    console.log("Welcome from exercise DOM-exercice");

    var form = document.querySelector('#form');

    var dashed_box = document.querySelector('.dashed');
    dashed_box.style.display = 'none';


    form.addEventListener('submit', () => {

        var name = document.querySelector("#name").value;
        var lastname = document.querySelector('#lastname').value;
        var age = parseInt(document.querySelector('#age').value);

        console.log(name, lastname, age);


        var paragraph = document.createElement("p");

        paragraph.append(name);
        paragraph.append(lastname);
        paragraph.append(age);

        // dashed_box.append(paragraph);
        //this is a vlaid way of doing it but ther is an another way

        var usersInfo = [name, lastname, age];

        if (name.trim().length <= 0) {
            alert("Invalid name");

        } else {





            if (lastname.trim().length <= 0) {
                alert("Invalid lastname");
            } else {




                if (isNaN(age) || age < 0 || age == null) {
                    alert("Invalid age");
                } else {

                    dashed_box.style.display = 'block';
                    for (let i = 0; i < usersInfo.length; i++) {
                        var paragraphSecondOption = document.createElement("p");
                        paragraphSecondOption.append(usersInfo[i]);
                        dashed_box.append(paragraphSecondOption);
                    }

                };


            }
        };





    });
});