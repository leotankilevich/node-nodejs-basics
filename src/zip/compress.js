import {pipeline} from 'node:stream/promises';
import {createWriteStream, createReadStream} from "node:fs";
import {createGzip} from 'node:zlib';
import {getPath} from "../utils/getPath.js";
import {unlink} from 'node:fs/promises';

const compress = async () => {
    // Write your code here
    try {
        const filePath = getPath(import.meta, '/files/fileToCompress.txt');
        const destinationPath = getPath(import.meta, '/files/archive.gz')

        await pipeline(
            createReadStream(filePath),
            createGzip(),
            createWriteStream(destinationPath),
        );

        await unlink(filePath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await compress();