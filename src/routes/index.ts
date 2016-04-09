'use strict';

// node_modules must use require
let router = require('express').Router();

// other modules can use import (core api, our modules)
import { readFile } from '../lib/nodeApi';
import { findConfigFile } from '../lib/utils';

router.get('/', async function(req, res, next) {
  let title = 'Node Typed';
  try {
    let file = findConfigFile('package.json');
    let data = await readFile(file, 'utf-8');
    res.render('index', { title, dump: data });
  } catch (err) {
    // next(err); // force app error in browser
    res.render('index', { title, dump: `Error: ${err.message}` });
  }
});

export = router;
