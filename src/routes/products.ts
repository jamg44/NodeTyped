'use strict';

const router = require('express').Router(); // node_modules must use require
let Product = require('../models/Product');

router.get('/', async function (req, res, next) {
    let title = 'Mongoose examples';
    try {

        //
        // load mogodb data asynchronously
        /////////////////////////////////////////////

        //let products = await db.Product.find({}); // mongoose find method
        //let products = await db.Product.list();   // list has optional params
        let products = await Product.list({}, 0, null, null, 'name location');

        // render
        res.render('products', {title, products});
    } catch (err) {
        next(err);
    }
});

export = router;
