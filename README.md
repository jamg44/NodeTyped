
# NodeTyped

> A Node.js starter kit featuring ES6 with **Secuential Asynchrony (async/await)**,
[Express](http://expressjs.com/) (Routing middlewares, Web, Api),
[Typescript](http://www.typescriptlang.org/),
[Mongoose](http://mongoosejs.com/),
[SCSS](http://sass-lang.com/),
[EJS](https://github.com/mde/ejs),
[Nodemon](http://nodemon.io/),
[Bootstrap 4](http://v4-alpha.getbootstrap.com/),
[TSLint](https://palantir.github.io/tslint/).

* Simple npm setup and maintenance, without grunt/gulp/webpack/...

* Support for async/await

Example:

```bash
async function(req, res, next) {
    let title = 'NodeTyped Express';
    try {
        let data = await readFile(file, 'utf-8'); // no callbacks!
        res.render('index', { title: title, dump: data });
    } catch (e) {
        next(e);
    }
}
```

## Requirements

**Make sure you have node version >= 4.0**

### Clone and Install dependencies

```bash
# clone the repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/jamg44/NodeTyped.git projectname

# change directory to your new project
cd projectname

# add required global libraries
npm install typings typescript -g

# install the repo dependencies with npm
npm install

# start the server
npm run watch
```

If you want to use mongoose models, start mongodb, check localConfig.js and:
```bash
# load sample products in database (defaults to 'test')
npm run loadMocks
```


## Develop

### Watch mode

You can start the server in development mode (linter included) with:

```bash
npm run watch
```

Open the browser at:
 * http://localhost:3000

Start MongoDB, run 'npm run loadMocks', and check:
 * http://localhost:3000/products
 * http://localhost:3000/apiv1/products
 * http://localhost:3000/apiv1/products/near/(meters)/lon/(lon)/lat/(lat)

As you save in your editor, the compiler will rebuild and restart the server.

### Other commands

Run the linter manually:

```bash
npm run lint
```

Clean temp folders:

    npm run clean

## Production / Integration

To run the project in a server you'll want to run the built code instead src version.

```bash
# deploy the repo to server and run
npm install
npm start
```

## Recommendations

 * When requiring from _node_modules_ you must use require:

```bash
// require from /node_modules
let express = require('express');
```

 * With other module types you can use import (node api, created modules):

```bash
import * as fs from 'fs';
import { findConfigFile } from '../lib/utils';
```


 * To change project name update package.json

```bash
"name": "project_name", <-----
...
"watch": "tsc && DEBUG=project_name2:* ... <-----
```


 * All your reusable functions must return promises for better use with async/await.

```bash
let readFile = function(file, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, encoding, function(err, data) {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};
```

## Roadmap (TODO)

 * Add karma/jasmine
 * API authentication with [JWT](https://jwt.io/)
 * Add SSL
 * Add cluster
 * User system (register, login, etc)
 * Add sequelize
 * Add test coverage report
 * Yeoman
 * Basic panel


# License
 [MIT](/LICENSE)

Made with ♡ by Javier Miguel González @javiermiguelg
