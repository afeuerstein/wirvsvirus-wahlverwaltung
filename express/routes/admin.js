var express = require('express');
var router = express.Router();
const Account = require("../models/account");
const VoteModel = require('../models/vote');

router.use((req, res, next) => {
    if (req.user) {
        if (req.user.admin) next();
    } else {
        res.redirect('/auth/login');
    }
});

router.get('/votes/add', function (req, res, next) {
    res.render('voteadd');
});

router.post('/votes/add', function (req, res, next) {
    const newVote = new VoteModel(
        {
            name: req.body.name,
            description: req.body.desc,
        }
    );
    newVote.save();
    res.render('success');
});

router.get('/users', function (req, res, next) {
    let query = Account.find({});
    query.exec(function (err, results) {
        res.render('userlist', {
            users: results,
            title: "Benutzer",
        });
    });
});

//TODO
router.get('/users/add', function (req, res, next) {
    res.render('index', { title: 'Hello World', user: req.user });
});

module.exports = router;
