'use strict';

let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
    src: path.join(__dirname, '../public'),
    dest: path.join(__dirname, '../public'),
    indentedSyntax: false,
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, '../public')));

//
// App routes
///////////////////////////////////////////////////////////
app.use('/',        require('./routes/index'));
app.use('/users',   require('./routes/users'));

//
// catch 404 and forward to error handler
///////////////////////////////////////////////////////////
app.use(function(req, res, next) {
    next({
        message: 'Not Found',
        status: 404,
        stack: (new Error()).stack
    });
});

//
// error handlers
///////////////////////////////////////////////////////////

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

export = app;
