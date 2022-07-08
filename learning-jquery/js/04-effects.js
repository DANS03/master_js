'use strict'

$(document).ready(() => {
    console.log('Welcome to effects');

    var box = $('#box')

    $('#show').hide();


    $('#hide').click(function() {
        $(this).hide();
        $('#show').show();
        $('#fade').hide();

        console.log("It's hidden!");
        //$('#box').hide('fast');   //this does a different animation from fadeOut
        box.fadeOut('fast');
    });

    $('#show').click(function() {

        $(this).hide();
        $('#hide').show();
        $('#fade').show();
        box.fadeTo('slow', 1)
        console.log("It appeared!");
        //$('#box').show('fast');   //this does a different animation from fadeIn
        box.fadeIn('fast');
    });

    $('#fade').click(function() {
        box.fadeTo('slow', 0.2)
    });


    $('#allInOne').click(function() {
        box.toggle('fast'); //this does all what hide an show do!!!!
        // $('#box').fadeToggle('fast');
        // $('#box').slideToggle('fast');

    });

    $('#animation').click(function() {

        box.animate({ //you can create the animatetion with a JSON
                marginLeft: '500px',
                fontSize: '40px'
            }, 'fast') // if you wanto to yo can chain many animations
            .animate({
                borderRadius: '900px'
            }, 'slow')
    });



});