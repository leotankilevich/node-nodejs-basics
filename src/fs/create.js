import { resolve, join } from 'node:path';
import { writeFile } from 'node:fs/promises';

import { getPath } from "..//utils/getPath.js";

const create = async () => {
    const destination = getPath(import.meta , '/files/fresh.txt');

    console.log(destination)

    try {
        await writeFile(`${destination}`, 'I am fresh and young', { flag: 'wx' });
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();