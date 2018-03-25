'use strict';

import { conn, Product, User } from '../models';
import { promisify } from 'util';
const readFile = promisify(require('fs').readFile);

conn.once('open', () => {
    main().then(() => conn.close());
});

async function main() {
    try {

        let users = JSON.parse(await readFile('./initial_data/userMocks.json', 'utf8'));
        console.log(`Read ${users.length} users.`);
        for (let userData of users) {
            const newUser = new User(userData);
            let user = await newUser.save();
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
