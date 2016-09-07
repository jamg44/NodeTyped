'use strict';

let Product = require('../../models/Product');
const router = require('express').Router();

router.get('/', get);
/**
 * GET /
 * @param req
 * @param res
 * @param next
 */
export async function get(req, res, next) {
    try {
        let rows = await Product.list({}, 0, null, null, 'name location');
        res.json({success: true, rows});
    } catch (err) {
        next(err);
    }
}

router.get('/near/:meters([0-9]+)/lon/:lon/lat/:lat', getNear);
/**
 * GET /near/M/lon/LON/lat/LAT
 * Find products near a point (meters)
 * @param req
 * @param res
 * @param next
 */
export async function getNear (req, res, next) {
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
}

export {router};
