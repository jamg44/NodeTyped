'use strict';

// node_modules must use require
let express = require('express');
let router = express.Router();

// other modules can use import (core api, our modules)
import {readFile} from '../lib/nodeApi';
import {findConfigFileSync} from '../lib/utils';

router.get('/', async function (req, res, next) {
    let title = 'NodeTyped Express';
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
