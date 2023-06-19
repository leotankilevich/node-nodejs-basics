import {cpus} from 'node:os';
import {Worker} from 'node:worker_threads';
import {getPath} from "../utils/getPath.js";

const performCalculations = async () => {
    // Write your code here
    const path = getPath(import.meta, '/worker.js')
    const result  = cpus().map((_, i) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(path, { workerData: `1${i}`});

            worker.on('error', (err) => {

               reject({status: 'error', message: err, data: null})
            });

            worker.on('message', (msg) => {
               resolve({status: 'success', data: msg.result})
            });
        })
    });

    Promise.allSettled(result).then((value) => {
        console.log(value.map(item => item.value));
    } );
};

await performCalculations();