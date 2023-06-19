import {pipeline} from 'node:stream/promises';
import { createReadStream } from 'node:fs';
import {getPath} from "../utils/getPath.js";
const read = async () => {
    // Write your code here
    try {
        const filePath = getPath(import.meta,'/files/fileToRead.txt')

        await pipeline(
            createReadStream(filePath),
            process.stdout,
        )
    } catch {
        throw new Error('FS operation failed');
    }

};

await read();