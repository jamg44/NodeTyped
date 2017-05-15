'use strict';

/**
 * Product model
 * @module Product
 */

import { Model, Column, MongooseModel } from '../lib/mongooseClass';

@Model({
    name: { type: String, index: true },
    age: Number
})
export class User extends MongooseModel {

    @Column({ type: String, index: true })
    name: string;

    @Column(Number)
    age: number;

    static list(callback?: Function) {
        return this.find().exec(callback);
    }

    saluda() {
        return 'Hola soy ' + this.name;
    }

}

const user = new User({ name: 'Pepe', age: 34, nosale: 33});

User.find({}).exec((err, data) => {
    console.log('find', err, data);
});

User.list().then(users => {
    console.log('list', users);
});

console.log(user);
console.log(user.saluda());
//console.log(User);
//var User = mongoose.model('User', schema);

//export = User;
