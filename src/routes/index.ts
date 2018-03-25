'use strict';

import * as express from 'express';
import { promisify } from 'util';
const readFile = promisify(require('fs').readFile);
import { findConfigFileSync } from '../lib/utils';

const router = express.Router();

router.get('/', async function (req, res, next) {
    const title = 'NodeTyped Express';
    try {
        // load a file asynchronously
        let fileName = findConfigFileSync('package.json');
        let data = await readFile(fileName, 'utf-8');

        // render
        res.render('index', {title, file: data});
    } catch (err) {
        next(err); // force app error in browser
    }
});

export = router;
