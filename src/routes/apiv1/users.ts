'use strict';

const router = require('express').Router();
import { User } from '../../models';

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
        res.json({success: true, rows});
    } catch (err) {
        console.log('err', err);
        next(err);
    }
}

export {router};
