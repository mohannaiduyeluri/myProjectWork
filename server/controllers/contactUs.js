const express = require('express');
const app = express.Router();
// const { requireAuth } = require('../models/auth');

const contactModel = require('../models/contact');

const CREATED_STATUS = 201;

app
    .post('/add', (req, res, next) => {
        // console.log(req.body);
        console.log("submit got called  4, server", req.body);
        contactModel.addContactUs(req.body)
        .then(contactUs => {
            res.send({ success: true, errors: [], data: contactUs});
        }).catch(next);
    })


module.exports = app;