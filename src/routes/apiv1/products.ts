'use strict';

import {Product} from '../../models/Product';
let router = require('express').Router();

/* GET products listing. */
router.get('/', async function(req, res, next) {
  try {
    let rows = await Product.list({}, 0, null, null, 'name location');
    res.json({ success: true, rows });
  } catch (err) {
    next(err);
  }
});

export = router;
