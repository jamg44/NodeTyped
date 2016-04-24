
# NodeTyped

> A Node.js starter kit featuring ES6 with **Secuential Asynchrony (async/await)**,
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
            let data = await readFile(file, 'utf-8'); // no callbacks!
            res.render('index', { title: title, dump: data });
        } catch (e) {
            next(e);
        }
    }

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

## Develop

### Watch mode

You can start the server in development mode (linter included) with:

    npm run watch

Open the browser at:
 * http://localhost:3000
 * http://localhost:3000/users
 * http://localhost:3000/apiv1/users

As you save in your editor, the compiler will rebuild and restart the server.

### Other commands

Run the linter manually:

    npm run lint


Clean temp folders:

    npm run clean

## Production / Integration

To run the project in a server you'll want to run the built code instead src version.

    # deploy the repo to server and run
    npm install
    npm start


## Recommendations

When requiring from _node_modules_ you must use require:

    // require from /node_modules
    let express = require('express');

With other module types you can use import (node api, created modules):

    import * as fs from 'fs';
    import { findConfigFile } from '../lib/utils';


To change project name update package.json

    "name": "project_name", <-----
    ...
    "watch": "tsc && DEBUG=project_name2:* ... <-----


## TODO

 * Add karma/jasmine
 * Add sequelize
 * Add test coverage report
 * Yeoman
 * User system & basic panel


# License
 [MIT](/LICENSE)
