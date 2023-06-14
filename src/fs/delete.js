import {unlink} from 'node:fs/promises';

import {getPath} from "../utils/getPath.js";

const remove = async () => {
    // Write your code here
    const file = getPath(import.meta, '/files/fileToRemove.txt');

    try {
        await unlink(file);
    } catch {
        throw new Error('FS operation failed');

    }
};

await remove();