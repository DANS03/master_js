'use strict'

$(document).ready(() => {

    console.log('Welcome to events js loaded...');

    var box = $('#box');

    //MouseOver and mouseout
    /*
        
        box.mouseover(function() { //only works this way

            $(this).css('background', 'red');
        });

        box.mouseout(function() {
            $(this).css('background', 'lime');
        });
    */

    function changeToRed() { //only works this way

        $(this).css('background', 'red');
    };

    function changeToLime() {
        $(this).css('background', 'lime');
    };
    //Hover
    box.hover(changeToRed, changeToLime);

    //click

    box.click(function() {
        $(this).css('background', 'blue')
            .css('color', 'white');
    });

    //double click

    box.dblclick(function() {
        $(this).css('background', 'cyan')
            .css('color', 'black');
    });

    //Focus Blur
    var info = $('#info');
    info.focus(function() {
        $(this).css('border', '2px solid green');
    });

    info.blur(function() {
        $(this).css('border', '2px solid red');
        $(this).val(); //you can acces the values of the element using this function 

        //$('#showInfo').css('display', 'block');

        $('#showInfo').text($(this).val()).show();

    });

    //mouseup and mousedown

    var infoBox = $('#showInfo');

    infoBox.mousedown(function() {
        $(this).css('border', '2px dashed cyan');
    });


    infoBox.mouseup(function() {
        $(this).css('border-color', 'pink');
    });

    //mousemove

    $(document).mousemove(function() {

        $('body').css('cursor', 'none');
        console.log(event.clientX + ' --->X axis');
        console.log(event.clientY + ' =>Y axis');
        //this will show the cordenates of the mouse
        $('#follower').css('left', event.clientX)
            .css('top', event.clientY);
    });





});