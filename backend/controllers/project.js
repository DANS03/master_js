'use strict'
const { prependListener } = require('../app');
//a controller is a series of method that a class will be able to do

var Project = require('../models/projects');
const { param } = require('../routes/project');

var fs = require('fs');



var controller = {
    home: function(req, res) {
        return res.status(200).send({
            message: "I'm home"
        });
    },

    test: function(req, res) {
        return res.status(200).send({
            message: "Im the method test from controllator project"
        });
    },

    saveProject: function(req, res) {
        var project = new Project();
        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;


        project.save((err, projectStore) => {
            if (err) return res.status(500).send({ message: 'An error has occured' });

            if (!projectStore) return res.status(404).send({ message: 'Unable to save the project' })


            return res.status(200).send({ project: projectStore });
        });
        /*
        return res.status(200).send({
            project: project,
            message: 'SavedProject method'
        }); */
    },

    getProject: function(req, res) {
        var projectId = req.params.id;


        if (projectId == null) return res.status(404).send({
            message: "Unable to find project null"
        });

        Project.findById(projectId, (err, project) => {

            if (err) return res.status(500).send({
                message: "Error returning data",
                err: err
            });

            if (!project) return res.status(404).send({
                message: "Unable to find project"
            });


            return res.status(200).send({
                project: project
            });
        });

    },

    getProjects: function(req, res) {
        Project.find({}).exec((err, projects) => {
            if (err) return res.status(500).send({
                message: 'error returning data'
            });
            if (!projects) return res.status(404).send({
                message: "there are no proyects to show"
            });

            return res.status(200).send({
                projects: projects
            });
        });
    },

    updateProject: function(req, res) {
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, { new: true }, (err, projectUpdated) => {

            if (err) return res.status(500).send({
                message: "An error has occured",
                err: err
            });

            if (!update) return res.status(404).send({
                message: "Unable to find id"
            });

            return res.status(200).send({
                message: "Project updated",
                project: projectUpdated
            });

        });
    },

    deleteProject: function(req, res) {
        var projectId = req.params.id

        Project.findByIdAndDelete(projectId, (err, projectDeleted) => {
            if (err) return res.status(500).send({
                message: "An error has occured",
                err: err
            });

            if (!projectDeleted) return res.status(404).send({
                message: "Project not found"
            });

            return res.status(200).send({
                message: 'deleted succesfully',
                project: projectDeleted
            });

        });
    },

    uploadImage: function(req, res) {
        var projectId = req.params.id;
        var fileName = "imageNotUploaded";

        if (req.files) {

            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];


            if (fileExt == 'jpg' || fileExt == 'png' || fileExt == 'jpeg' || fileExt == 'gif') {



                Project.findByIdAndUpdate(projectId, { image: fileName }, { new: true }, (err, projectUpdate) => {
                    if (err) return res.status(500).send({
                        message: 'An error has occured',
                        err: err
                    });

                    if (!projectUpdate) res.status(404).send({
                        message: "Unable to find image or id"
                    });

                    res.status(200).send({
                        project: projectUpdate,
                    });
                });
            } else {

                fs.unlink(filePath, (err) => {
                    return res.status(200).send({
                        message: 'Unvalid extention'
                    });
                });

            }


        } else {

            return res.status(200).send({
                message: fileName
            });
        }


    }


}

module.exports = controller;