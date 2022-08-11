'use strict'

$(document).ready(function() {

    console.log('Welcome!');
    //slider
    if (window.location.href.indexOf('index') > -1) { //this checks if the page is index
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
        });
    }



    //Posts
    if (window.location.href.indexOf('index') > -1) { //this checks if the page is index
        var posts = [{
                title: 'Example Title',
                date: new Date(),
                content: 'Sed sed nisi enim. Mauris faucibus malesuada erat, sit amet maximus felis accumsan ac. Aenean vel enim dui. Morbi elit mauris, hendrerit et felis quis, gravida convallis lectus. Morbi semper vitae quam vitae gravida. In sem erat, consequat consectetur mi sed, volutpat tempus risus. Nunc laoreet dui nec neque accumsan pretium. In vitae congue quam.',

            },
            {
                title: 'Example Title 2',
                date: new Date(),
                content: 'Sed sed nisi enim. Mauris faucibus malesuada erat, sit amet maximus felis accumsan ac. Aenean vel enim dui. Morbi elit mauris, hendrerit et felis quis, gravida convallis lectus. Morbi semper vitae quam vitae gravida. In sem erat, consequat consectetur mi sed, volutpat tempus risus. Nunc laoreet dui nec neque accumsan pretium. In vitae congue quam.',

            },
            {
                title: 'Example Title 3',
                date: new Date(),
                content: 'Sed sed nisi enim. Mauris faucibus malesuada erat, sit amet maximus felis accumsan ac. Aenean vel enim dui. Morbi elit mauris, hendrerit et felis quis, gravida convallis lectus. Morbi semper vitae quam vitae gravida. In sem erat, consequat consectetur mi sed, volutpat tempus risus. Nunc laoreet dui nec neque accumsan pretium. In vitae congue quam.',

            },
            {
                title: 'Example Title 4',
                date: new Date(),
                content: 'Sed sed nisi enim. Mauris faucibus malesuada erat, sit amet maximus felis accumsan ac. Aenean vel enim dui. Morbi elit mauris, hendrerit et felis quis, gravida convallis lectus. Morbi semper vitae quam vitae gravida. In sem erat, consequat consectetur mi sed, volutpat tempus risus. Nunc laoreet dui nec neque accumsan pretium. In vitae congue quam.',

            }, {
                title: 'Example Title 5',
                date: new Date(),
                content: 'Sed sed nisi enim. Mauris faucibus malesuada erat, sit amet maximus felis accumsan ac. Aenean vel enim dui. Morbi elit mauris, hendrerit et felis quis, gravida convallis lectus. Morbi semper vitae quam vitae gravida. In sem erat, consequat consectetur mi sed, volutpat tempus risus. Nunc laoreet dui nec neque accumsan pretium. In vitae congue quam.',

            },
        ]

        console.log(posts)

        posts.forEach((item, index) => {
            var post = `  <h2>${item.title}</h2>

        <span class="date">${item.date}</span>
        <p>
            ${item.content}
        </p>
        <a href="#" class="button-more">Read more </a>

`

            $('#posts').append(post)
        });
    }

    //theme selector

    var style = $("#theme");

    $('#to-blue').click(function() {
        style.attr('href', 'css/blue.css');
    });

    $('#to-green').click(function() {
        style.attr('href', 'css/green.css');
    });

    $('#to-red').click(function() {
        style.attr('href', 'css/red.css');
    });


    //top scroll

    $('.up').click(function(e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //contact info

    $('#login').submit(function() {
        var formName = $('#form-name').val();
        localStorage.setItem("form-name", formName);

    });

    var formName = localStorage.getItem("form-name");

    if (formName != null && formName != "undefined") {

        var about = $('#about');
        about.html("<strong>Welcome , " + formName + " !</strong>,you can contact me in here https://github.com/DANS03");


        about.append("<br/><a href='#' id='logout'>Good Bye!</a>");

        $('#login').hide();

        $('#logout').click(function() {
            localStorage.clear();
            location.reload(); // refresh the window
        });

    }

    //move it into another file for about
    if (window.location.href.indexOf('about') > -1) {
        $('#accordion').accordion();
    }


    //move it into another file for clock
    if (window.location.href.indexOf('clock') > -1) {
        setInterval(function() {
            var clock = moment().format('hh:mm:ss');
            $('#clock').html(clock);
        }, 1000)

    }

    //Form validation
    if (window.location.href.indexOf('contact') > -1) {
        $.validate({
            lang: 'en'
        });
    }


});