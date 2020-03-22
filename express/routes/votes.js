var express = require('express');
var router = express.Router();
const VoteModel = require('../models/vote');

router.use((req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect('/auth/login');
    }
});

router.get('/', function (req, res, next) {
    let query = VoteModel.find({});
    query.exec(function (err, results) {
        res.render('votelist', {
            votes: results,
            title: "Abstimmungen"
        });
    });
});

//TODO
router.get('/details/:id', function (req, res, next) {
    let query = VoteModel.find({});
    query.exec(function (err, results) {
        res.render('votelist', {
            vote: results,
            title: "",
        });
    });
});

//TODO
router.get('/vote/:id', function (req, res, next) {
    res.redirect("/votes")
});

module.exports = router;
