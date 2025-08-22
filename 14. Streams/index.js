// This file demonstrates the use of streams in Node.js

import fs from 'fs';

// Create a readable stream
const readableStream = fs.createReadStream('./example.txt', {
    encoding: 'utf-8',
    _highWaterMark: 16,
    get highWaterMark() {
        return this._highWaterMark;
    },
    set highWaterMark(value) {
        this._highWaterMark = value;
    },
});

// Create a writable stream
const writableStream = fs.createWriteStream('./output.txt');

// Pipe the readable stream into the writable stream
readableStream.pipe(writableStream);

readableStream.on('data', (chunk) => {
    console.log(`Received chunk: ${chunk}`);
});

readableStream.on('end', () => {
    console.log('Finished reading the file.');
});

readableStream.on('error', (err) => {
    console.error(`Error reading the file: ${err.message}`);
});

writableStream.on('finish', () => {
    console.log('Finished writing to the file.');
});
