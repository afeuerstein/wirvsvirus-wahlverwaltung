var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();
const request = require('request');
const config = require("../config.json");

router.get('/register', function (req, res) {
    res.render('register', { user: req.user });
});

router.post('/register', function (req, res) {
    const options = {
        url: 'https://app.passbase.com/api/v1/authentications/by_key/' + req.body.authentication_key,
        method: 'GET',
        headers: {
            'Authorization': config.passbase_secret_api_key,
            'Accept': 'application/json'
        }
    };

    request(options, function (err, res2, body2) {
        let api_res = JSON.parse(body2);
        console.log(api_res);

        if (api_res.code != "404") {
            Account.register(new Account({ username: req.body.username }), req.body.password, function (err, account) {
                if (err) {
                    return res.render('register', { account: account });
                }

                passport.authenticate('local')(req, res, function () {
                res.redirect('/');
                });
            });
        }
    });
});

router.get('/login', function (req, res) {
    res.render('login', { user: req.user });
});

router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
