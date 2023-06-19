import {access, readFile} from 'node:fs/promises';
import {getPath} from "../utils/getPath.js";

const {createHash} = await import('node:crypto');


const calculateHash = async () => {
    // Write your code here
    try {
        const hash = createHash('sha256');
        const filePath = getPath(import.meta, '/files/fileToCalculateHashFor.txt');
        const contents = await readFile(filePath);

        await access(filePath);

        hash.update(contents);

        console.log(hash.digest('hex'));
    } catch {
        throw new Error('FS operation failed');
    }

};

await calculateHash();