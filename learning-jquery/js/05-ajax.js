'use strict'

$(document).ready(function() {

    console.log('JQuery loaded... ');


    //Load
    //$('#data').load('https://reqres.in/');

    //Get and Post
    $.get("https://reqres.in/api/users?", { page: 2 }, function(response) {
        console.log(response);
        response.data.forEach((element, index) => {
            $('#data').append('<p>' + element.first_name + ' ' + element.last_name + '</p>');
        });
    });

    var user = {
        name: $("input[name='name']").val(),
        web: $("input[name='web']").val()

    };

    $.post('https://reqres.in/api/users', user, function(response) {
        //console.log(response);
    });


    $('#form').submit(function() {
        console.log(user);
        /*
                $.post($(this).attr("action"), user, function(response) {
                    console.log(response);
                }).done(() => {
                    alert("User added succesfully")
                })
        */
        //another way to make patitions is by using this

        $.ajax({
            type: 'POST',
            dataType: "json",
            contentType: 'application/json',
            url: $(this).attr("action"),
            data: user,
            beforeSend: function() {
                console.log('Sending info...');
            },
            success: function(response) {
                console.log(response);
            },
            error: function() {
                console.log('A mistake has occured');
            },
            timeOut: 2000
        })

        //return false
    });

});