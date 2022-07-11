'use strict'

$(document).ready(() => {

    console.log('Inteface loaded...');

    //you can drag an element through the page
    $('.element').draggable();

    //resize elements
    $('.element').resizable();


    //you can select an element by using this method 
    //$('.selectable-list').selectable();

    //sort a list of elements
    $('.selectable-list').sortable({
        update: function(event, ui) {
            console.log('A change has ocurred');
        }
    });

    // drag and drop
    $('#moving-element').draggable();
    $('#area').droppable({
        drop: function() {
            console.log('You dropped something in the area!!!')
        }
    });

    $('#trigger').click(function() {
        //$('#effects-box').toggle('fade');
        //$('#effects-box').fadeToggle();
        //$('#effects-box').effect('explode');
        //$('#effects-box').toggle('explode');
        //$('#effects-box').toggle('blind');
        //$('#effects-box').toggle('slide');
        //$('#effects-box').toggle('drop');
        //$('#effects-box').toggle('fold');
        //$('#effects-box').toggle('puff');
        //('#effects-box').toggle('scale');
        $('#effects-box').toggle('shake', {}, 'slow');
    });


});