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
    .post('/seed', (req, res, next) => {
        taskModel.seed()
        .then(x => {
            res.send({ success: true, errors: [], data: x.insertedIds });
        }).catch(next);
    })



module.exports = app;