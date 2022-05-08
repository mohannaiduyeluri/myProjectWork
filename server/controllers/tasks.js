const express = require('express');
const app = express.Router();
// const { requireAuth } = require('../models/auth');

const taskModel = require('../models/task');

const CREATED_STATUS = 201;

app
    .get('/', (req, res, next) => {
        taskModel.getList()
        .then(tasks => {
            res.send({ success: true, errors: [], data: tasks });
        }).catch(next);
    })
    .post('/add', (req, res, next) => {
        // console.log(req.body);
        taskModel.addTask(req.body)
        .then(tasks => {
            res.send({ success: true, errors: [], data: tasks});
        }).catch(next);
    })
    .post('/update/:id', (req, res, next) => {
        // console.log(req.body);
        taskModel.updateTask(req.params.id, req.body )
        .then(tasks => {
            res.send({ success: true, errors: [], data: tasks });
        }).catch(next);
    })


module.exports = app;