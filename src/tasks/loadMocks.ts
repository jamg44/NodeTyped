'use strict';

import * as Product from '../models/Product';
import {conn} from '../lib/connectMongoose';
import {readFile} from '../lib/nodeApi';
import {findConfigFileSync} from '../lib/utils';

conn.once('open', () => {
    main().then(() => conn.disconnect());
});

async function main() {
    try {
        let products = JSON.parse(await readFile(findConfigFileSync('productMocks.json'), 'utf8'));
        console.log(`Read ${products.length} products.`);
        for (let productData of products) {
            let newProduct = new Product(productData);
            let product = await newProduct.save();
            console.log(`Saved "${product.name}" (${product._id})`);
        }
        console.log('All loaded!');
    } catch (err) {
        console.error('Error', err);
    }
}
