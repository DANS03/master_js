'use strict'

var express = require('express');
const { route } = require('../app');
const { getProjects, updateProject, deleteProject } = require('../controllers/project');
var projectController = require('../controllers/project');

var router = express = express.Router();

router.get('/home', projectController.home);

router.post('/test', projectController.test);

router.post('/saveProject', projectController.saveProject);

router.get('/project/:id?', projectController.getProject);

router.get('/allProjects', getProjects);

router.put('/projectUpdate/:id', updateProject);

router.delete('/projectDelete/:id', deleteProject);

module.exports = router;