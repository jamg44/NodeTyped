'use strict';

import {Product} from '../../models/Product';
let router = require('express').Router();

/* GET products listing. */
router.get('/', async function (req, res, next) {
    try {
        let rows = await Product.list({}, 0, null, null, 'name location');
        res.json({success: true, rows});
    } catch (err) {
        next(err);
    }
});

/* Find products near a point (meters) */
router.get('/near/:meters([0-9]+)/lon/:lon/lat/:lat', async function (req, res, next) {
    try {
        let meters = parseFloat(req.params.meters);
        let longitude = parseFloat(req.params.lon);
        let latitude = parseFloat(req.params.lat);
        let rows = await Product.find({
            location: {
                $nearSphere: {
                    $geometry: {type: 'Point', coordinates: [longitude, latitude]},
                    $maxDistance: meters
                }
            }
        });
        res.json({success: true, rows});
    } catch (err) {
        next(err);
    }
});

export = router;
