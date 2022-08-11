'use strict'

var express = require('express');

var bodyParser = require('body-parser');


var app = express();

//load route files
var projectRoutes = require('./routes/project');

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS

// Configure headers and Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//routes
/*
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
});*/

app.use('/api', projectRoutes);

//exports

module.exports = app;