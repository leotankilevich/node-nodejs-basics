import { access, readFile } from 'node:fs/promises';
import { getPath } from "../utils/getPath.js";

const read = async () => {
    // Write your code here
    const filePath = getPath(import.meta, '/files/fileToRead.txt');

    try {
        await access(filePath);

        const contents = await readFile(filePath, { encoding: 'utf8' });

        console.log(contents);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();