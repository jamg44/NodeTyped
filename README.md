
# NodeTyped

> A Node.js starter kit featuring **Secuential Asynchrony (async/await)**,
[Express](http://expressjs.com/) (Routing middlewares, Web, Api),
[Typescript](http://www.typescriptlang.org/),
[SCSS](http://sass-lang.com/),
[EJS](https://github.com/mde/ejs),
[Nodemon](http://nodemon.io/),
[Bootstrap 4](http://v4-alpha.getbootstrap.com/),
[TSLint](https://palantir.github.io/tslint/).

* Simple npm setup and maintenance, without grunt/gulp/webpack/...

* Support for async/await

Example:

    async function(req, res, next) {
        let title = 'NodeTyped Express';
        try {
            let data = await readFile(file, 'utf-8');
            res.render('index', { title: title, dump: data });
        } catch (e) {
            next(e);
        }
    }

## Requites

**Make sure you have node version >= 4.0**

### Install dependencies

    npm install

    npm install -g typescript

## Develop

### Watch mode

You can start the server in development mode (linter included) with:

    npm run watch

As you save in your editor, the compiler will rebuild and restart the server.

### Other commands

Run the linter manually:

    npm run lint


Clean temp folders:

    npm run clean

## Production

Deploy folders to server:

 * /build
 * /public
 * /views

Run:

    npm install
    npm start


## Recommendations

When requiring from _node_modules_ you must use require:

    let express = require('express');

With other module types you can use import (node api, created modules):

    import * as fs from 'fs';
    import { findConfigFile } from '../lib/utils';


To change project name update package.json

    "name": "project_name", <-----
    ...
    "watch": "tsc && DEBUG=project_name2:* ... <-----

# License
 [MIT](/LICENSE)