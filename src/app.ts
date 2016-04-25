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
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
    src: path.join(__dirname, '../public'),
    dest: path.join(__dirname, '../public'),
    indentedSyntax: false,
    sourceMap: true
}));

//
// connect to database and register models
///////////////////////////////////////////////////////////
import * as db from './models/mongooseModels';

//
// serve static files
///////////////////////////////////////////////////////////
app.use(express.static(path.join(__dirname, '../public')));

// web dependencies from node_modules
app.use('/nm/bootstrap',    express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
app.use('/nm/jquery',       express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use('/nm/tether',       express.static(path.join(__dirname, '../node_modules/tether/dist')));

//
// serve API V1 routes
///////////////////////////////////////////////////////////
app.use('/apiv1/products',  require('./routes/apiv1/products'));

//
// serve Web routes
///////////////////////////////////////////////////////////
app.use('/',                require('./routes/index'));
app.use('/products',        require('./routes/products'));

// catch not handled and return 404
app.use((req, res, next) => next({
    message: 'Not Found',
    status: 404,
    stack: (new Error()).stack
}));

//
// error handlers (dev / prod)
///////////////////////////////////////////////////////////

// development error handler - will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        if (isApi(req)) {
            res.json({success: false, error: err});
        } else {
            res.render('error', {message: err.message, error: err});
        }
    });
}

// production error handler - no stack-traces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    if (isApi(req)) {
        res.json({success: false, error: err});
    } else {
        res.render('error', {message: err.message, error: {}});
    }
});

function isApi(req) {
    return req.url.indexOf('/apiv1/') === 0;
}

export = app;
