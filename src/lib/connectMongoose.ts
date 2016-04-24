'use strict';

let mongoose = require('mongoose');
let localConfig: any = require('../../localConfig');
let conn = mongoose.connection;

conn.on('error', function(err) {
    console.error('mongodb connection error:', err);
    process.exit(1);
});

conn.once('open', function() {
    console.info('Connected to Mongodb.');
});

console.log(`Connecting to ${localConfig.MongodbConnection} ...`);

mongoose.connect(localConfig.MongodbConnection);

export { conn };
