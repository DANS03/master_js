'use strict'

var express = require('express');

var bodyParser = require('body-parser');


var app = express();

//load route files

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS

//routes
app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Landing Page!</h1>"
    );
});



app.post('/test', (req, res) => {
    console.log(req.param('name'));

    res.status(200).send({
        message: "Hello world form my node JS Api"
    });
});

//exports

module.exports = app;