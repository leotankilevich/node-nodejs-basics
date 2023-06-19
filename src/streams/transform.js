import {pipeline} from 'node:stream/promises';
import {Transform} from 'node:stream';

const transform = async () => {
    // Write your code here
    try {
        const reverseStream = new Transform({
            transform (data, encoding, callback) {
                const reversedData = data.toString().split("").reverse().join("");
                this.push(reversedData);
                callback();
            }
        });

        await pipeline(
            process.stdin,
            reverseStream,
            process.stdout
        );
    } catch {
        throw new Error('FS operation failed');
    }

};

await transform();