'use strict'

$(document).ready(() => {

    console.log('Welcome to texts js loaded...');

    reloadLinks();

    console.log($('a').length);

    $('#addButton').click(function() {
        var newLink = $('#addLink').val();
        console.log(newLink);

        var menu = $('#menu');
        menu.append('<li><a href="' + newLink + '"></a></li>');
        reloadLinks();
        $('#addLink').val(''); //cleans the text area!

    });




});

function reloadLinks() {
    $('a').each(function(index) {
        console.log($(this));

        var link = $(this).attr('href');
        $(this).text(link);
        $(this).attr('target', '_blank'); //adds a new attribute
        $(this).removeAttr('target'); //deletes the chosen attribute
    });


}