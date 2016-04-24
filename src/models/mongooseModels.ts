'use strict';

let mongoose = require('mongoose');
import {conn} from '../lib/connectMongoose';
import {Product} from './Product';

function disconnect() {
    mongoose.disconnect();
}

export {
    conn as conn,
    disconnect,
    Product
};
