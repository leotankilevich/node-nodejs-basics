import {pipeline} from 'node:stream/promises';
import {createWriteStream, createReadStream} from "node:fs";
import {createGunzip, createGzip} from 'node:zlib';
import {getPath} from "../utils/getPath.js";
import {unlink} from 'node:fs/promises';

const decompress = async () => {
    // Write your code here
    try {
        const filePath = getPath(import.meta, '/files/archive.gz');
        const destinationPath = getPath(import.meta, '/files/fileToCompress.txt')

        await pipeline(
            createReadStream(filePath),
            createGunzip(),
            createWriteStream(destinationPath),
        );

        await unlink(filePath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await decompress();