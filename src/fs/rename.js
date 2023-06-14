import { access, rename as fsRename } from 'node:fs/promises';

import { getPath } from "../utils/getPath.js";

const rename = async () => {
    // Write your code here
    const filePath = getPath(import.meta, '/files/wrongFilename.txt');
    const newFilePath = getPath(import.meta, '/files/properFilename.md')

    try {
        await access(filePath);

        await fsRename(filePath, newFilePath, { flag: 'wx' });
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();