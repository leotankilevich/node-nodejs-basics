import { readdir, access, mkdir, copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { getPath } from "../utils/getPath.js";

const copy = async () => {
    // Write your code here
    const filesCopyPath = `${getPath(import.meta,'/files_copy')}`;
    const filesPath = `${getPath(import.meta,'/files')}`;

    try {
        await access(filesPath);

        const filesDir = await readdir(filesPath);

        if (filesDir) {
            await mkdir(filesCopyPath, { recursive: false });

            filesDir.forEach(async (file) => {
                await copyFile(resolve(filesPath, file), resolve(filesCopyPath, file))
            });
        }
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();
