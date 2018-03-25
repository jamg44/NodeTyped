'use strict';

import * as express from 'express';
import { Product } from '../models';

const router = express.Router();

router.get('/', async function (req, res, next) {
    let title = 'Mongoose examples';
    try {

        let products = await Product.list({}, 0, null, null, 'name location');

        res.render('products', {title, products});

    } catch (err) {
        next(err);
    }
});

export = router;
