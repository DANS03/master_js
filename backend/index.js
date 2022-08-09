'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/work-portfolio')
    .then(() => {
        console.log('Connection to database: Succesful!');

        //server creation

        app.listen(port, () => {
            console.log("Server running!");
        })
    })
    .catch(err => console.log(err));