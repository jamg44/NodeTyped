'use strict';

/**
 * User model
 * @module User
 */

import { Model as MongooseModel } from 'mongoose';
import { Model, Column } from 'mongoose-class';

@Model({})
export class User extends MongooseModel {

    @Column({ type: String, index: true })
    name: string;

    @Column(Number)
    age: number;

    static list(filter?: any,
        skip?: number, limit?: number,
        sort?: string, select?: string
    ): Promise<any> {
        let query = this.find(filter);
        query.sort(sort);
        query.skip(skip);
        query.limit(limit);
        query.select(select);
        return query.exec();
    }

    greet() {
        return `Hello I'm ${this.name}`;
    }

}
