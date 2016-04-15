'use strict';

import * as fs from 'fs';

let readFile: any = (file, encoding?: any) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, encoding, (e, d) => e ? reject(e) : resolve(d));
    });
};

let writeFile: any = (file, data, options?: any) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, options, (e) => e ? reject(e) : resolve());
    });
};

let access: any = (path, mode?) => {
    return new Promise((resolve, reject) => {
        fs.access(path, mode, e => e ? reject(e) : resolve());
    });
};

let existsSync = fs.existsSync || (filePath => {
    try {
        fs.statSync(filePath);
    } catch (err) {
        if (err.code === 'ENOENT') return false;
    }
    return true;
});

export {
    readFile, writeFile, access, existsSync
};
