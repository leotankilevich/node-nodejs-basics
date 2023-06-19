import {pipeline} from 'node:stream/promises';
import { createWriteStream } from 'node:fs';
import {getPath} from "../utils/getPath.js";

const write = async () => {
    // Write your code here
    try {
        const filePath = getPath(import.meta, '/files/fileToWrite.txt');

        await pipeline(process.stdin, createWriteStream(filePath));
    } catch {
        throw new Error('FS operation failed');
    }
};

await write();