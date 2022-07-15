'use strict'

$(document).ready(function() {

    console.log('Welcome!');
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true
    });


    //Posts
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

});