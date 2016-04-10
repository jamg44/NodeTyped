'use strict';

import {readFile} from '../lib/nodeApi';
let router = require('express').Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    let usersData = await readFile('mock-users.json', 'utf-8');
    let users = JSON.parse(usersData);
    res.json({ success: true, rows: users });
  } catch (err) {
    next(err);
  }
});

export = router;
