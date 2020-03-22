var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var voteRouter = require('./routes/votes');
var adminRouter = require('./routes/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'wirvsvirus',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/votes', voteRouter);
app.use('/admin', adminRouter);

const Account = require("./models/account");
let query = Account.find({ admin: true});
var token;
query.exec(function (err, results) {
    if (!results[0]) {
      require('crypto').randomBytes(48, function(err, buffer) {
        token = buffer.toString('hex');
        console.log("NO ADMIN ACCOUNT FOUND! USE THIS LINK TO CONVERT A EXISTING ACCOUNT INTO AN ADMIN ACCOUNT, DO NOT SHARE THE LINK WITH OTHERS: http://localhost:3000/convert2admin?token=" + token);
      });
    }
}); 


app.get("/convert2admin", (req, res, next) => {
  if (token) {
    if (req.query.token === token) {
      if (!req.user) { res.redirect("/auth/login")}
      let query = Account.findOne({ username: req.user.username});
      query.exec(function (err, results) {
        results.admin = true;
        results.save();
        res.render("success");
      });
    }
  } else {
    res.sendStatus(404);
  }
});

// passport config
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// mongoose
mongoose.connect('mongodb://localhost/wahlverwaltung', { useNewUrlParser: true, useUnifiedTopology: true });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
