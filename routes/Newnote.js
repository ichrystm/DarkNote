
const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const notes = require('../database/notes');

router.get('/', (req, res) => {
    res.render('newnote');
});

router.post('/savenote', (req, res) => {
    notes.create({
        title: req.body.title,
        content: req.body.content
    })
    .then(() => {
        console.log("Note created successful.");
        res.redirect('/');
    })
    .catch((err) => {
        console.log("Note creation error " + err);
    });
});

module.exports = router;

