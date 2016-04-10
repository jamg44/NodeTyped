
Express, Typescript, SASS, EJS, Bootstrap 4, TSLint


npm install -g typescript

npm install

npm start

npm run watch

npm run lint

npm run clean


Recomendations

// node_modules must use require
let router = require('express').Router();

// other modules can use import (core api, our modules)
import { readFile } from '../lib/nodeApi';
import { findConfigFile } from '../lib/utils';


Change the project name in package.json
  "name": "prueba2", <-----
  ...
  "watch": "tsc && DEBUG=prueba2:* ... <-----

