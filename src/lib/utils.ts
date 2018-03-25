'use strict';

import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';
const readFile = promisify(require('fs').readFile);

let add = (a, b) => a + b;

let existsSync = fs.existsSync || (filePath => {
    try {
        fs.statSync(filePath);
    } catch (err) {
        if (err.code === 'ENOENT') return false;
    }
    return true;
});

let findConfigFileSync = (configFileName, searchPath?) => {
    searchPath = searchPath || __dirname;
    while (true) {
        let fileName = path.join(searchPath, configFileName);
        if (existsSync(fileName)) {
            return fileName;
        }
        let parentPath = path.dirname(searchPath);
        if (parentPath === searchPath) {
            break;
        }
        searchPath = parentPath;
    }
    return undefined;
};

export {
    findConfigFileSync, add, existsSync
};
