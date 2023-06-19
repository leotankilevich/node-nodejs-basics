import { fork }  from 'node:child_process';
import {getPath} from "../utils/getPath.js";

const spawnChildProcess = async (args) => {
    // Write your code here
    const filePath = getPath(import.meta, '/files/script.js')
    const child = spawn('node', [filePath, '--prop1', 'value1', '--prop2', 'value2'] );

    child.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    child.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
