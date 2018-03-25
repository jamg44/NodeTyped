'use strict';

/**
 * User model
 * @module User
 */

const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: { type: String, index: true },
    age: Number
});

/**
 * List of users
 * @method list
 * @param filter Object with filter conditions
 * @param skip Number of rows skipped
 * @param limit Number of rows
 * @param sort Sort expression
 * @param select Field names to include, space separated
 * @return {Promise<any>}
 */
schema.statics.list = function(filter?: any,
                               skip?: number, limit?: number,
                               sort?: string, select?: string): Promise<any> {
    const query = User.find(filter);
    query.sort(sort);
    query.skip(skip);
    query.limit(limit);
    query.select(select);
    return query.exec();
};

export const User = mongoose.model('User', schema);
export default User;
