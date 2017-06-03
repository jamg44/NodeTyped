'use strict';

import { conn } from '../lib/connectMongoose';
import * as Product from '../models/Product';
import { User } from '../models/User';
import { readFile } from '../lib/nodeApi';

conn.once('open', () => {
    main().then(() => conn.close());
});

async function main() {
    try {

        let users = JSON.parse(await readFile('./initial_data/userMocks.json', 'utf8'));
        console.log(`Read ${users.length} users.`);
        for (let userData of users) {
            let user = new User(userData);
            let product = await user.save();
            console.log(`Saved "${user.name}" (${user._id})`);
        }
        console.log('Users loaded!');

        let products = JSON.parse(await readFile('./initial_data/productMocks.json', 'utf8'));
        console.log(`Read ${products.length} products.`);
        for (let productData of products) {
            let newProduct = new Product(productData);
            let product = await newProduct.save();
            console.log(`Saved "${product.name}" (${product._id})`);
        }
        console.log('Products loaded!');

    } catch (err) {
        console.error('Error', err);
    }
}
