import { access, readdir } from 'node:fs/promises';

import {getPath} from "../utils/getPath.js";

const list = async () => {
    // Write your code here
    const filesPath = `${getPath(import.meta,'/files')}`;

    try {
        await access(filesPath);

        const filesDir = await readdir(filesPath);

        if (filesDir) {
            filesDir.forEach(file => {
               console.log(file);
            });
        }
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();