'use strict'

$(document).ready(() => {
    //We can use either $ or JQuery it's the same
    //we use document.ready to be sure that Jquery has loaded properly
    console.log('Welcome to selectors');

    //ID selector
    var red = $('#red');

    console.log(red);

    red.css('background', 'red')
        .css('color', 'white');


    var green = $('#green').css('background', 'green')
        .css('color', 'yellow');

    $('#blue').css('background', 'cyan')
        .css('color', 'blue');

    //with .css and element of Jquery we can change any css atribute by typing the categorie and the value, and we can change elemtens with jQuery


    //class selector

    var blankParagraph = $('.blank'); //this will create an array with the elements that have that class

    console.log(blankParagraph);

    blankParagraph.css('border', 'dashed black');

    $('.interesting').click(() => { //you can also integrate function in all the elements of a class
        alert(`you have click in an  interesting paragraph!!!`);
    });


    //label selector

    var paragraph = $('p');

    paragraph.click(() => {
        var that = $(this);
        that.addClass('big');
        console.log(that);

    });

    //atribute selector

    $('[title=google]').css('color', 'purple');
    $('[title=yahoo]').css('color', 'orange');
    $('[title=duckDuckGo]').css('color', 'lime');


    //others
    $('a , h1').addClass('margin-top');


    //If you wnato to select all element of a class inside a div or a container then you can use this

    $('#box').find('.underline').css('background', 'lime');

    // or 

    $('#box .underline').css('background', 'red');



});