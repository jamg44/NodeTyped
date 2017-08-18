'use strict';

const router = require('express').Router();
import { User } from '../../models/User';

router.get('/', get);
/**
 * GET /
 * @param req
 * @param res
 * @param next
 */
export async function get(req, res, next) {
    try {
        let rows = await User.list();
        console.log('users request');
        res.json({success: true, rows});
    } catch (err) {
        console.log('err', err);
        next(err);
    }
}

router.get('/:id', getId);
/**
 * GET /:id
 */
export async function getId(req, res, next) {
    try {
        const _id = req.params.id;
        let user = await User.findOne({_id});
        res.json({success: true, result: user});
    } catch (err) {
        console.log('err', err);
        next(err);
    }
}

export {router};
