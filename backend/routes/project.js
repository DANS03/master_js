'use strict'

var express = require('express');
const { route } = require('../app');

//Middlewares

//A middleware is something that excecutes befor the controller
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads' });


var projectController = require('../controllers/project');

var router = express = express.Router();

router.get('/home', projectController.home);

router.post('/test', projectController.test);

router.post('/saveProject', projectController.saveProject);

router.get('/project/:id?', projectController.getProject);

router.get('/allProjects', projectController.getProjects);

router.put('/projectUpdate/:id', projectController.updateProject);

router.delete('/projectDelete/:id', projectController.deleteProject);

router.post('/uploadImage/:id', multipartMiddleware, projectController.uploadImage);

router.get('/getImage/:image', projectController.getImageFile);

module.exports = router;