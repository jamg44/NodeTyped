'use strict';

import * as path from 'path';
import {existsSync} from './nodeApi';

let add = (a, b) => a + b;

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
    findConfigFileSync, add
};
