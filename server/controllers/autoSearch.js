const express = require('express');
const app = express.Router();
// const { requireAuth } = require('../models/auth');

const autoSearchModel = require('../models/autoSearch');

const CREATED_STATUS = 201;

app
    .get('/search', (req, res, next) => {
        autoSearchModel.getList(req.body)
            .then(users => {
                res.send({ success: true, errors: [], data: users });
            }).catch(next);
    })
    .post('/seed', (req, res, next) => {
        autoSearchModel.seed()
        .then(x => {
            res.send({ success: true, errors: [], data: x.insertedIds });
        }).catch(next);
    })


module.exports = app;