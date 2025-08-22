// This file demonstrates blocking vs non-blocking, routing, and async programming in Node.js

import http from 'http';
import fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

const server = http.createServer(async (req, res) => {
    console.log(`[${new Date().toISOString()}] Request: ${req.method} ${req.url}`);

    // Routing
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Home Page');
    } else if (req.url === '/blocking') {
        // Blocking example
        try {
            const data = fs.readFileSync('./12. Node BTS/files/blocking.html', 'utf-8'); // Blocking
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error reading file');
        }
    } else if (req.url === '/non-blocking') {
        // Non-blocking example
        try {
            const data = await readFileAsync('./12. Node BTS/files/non-blocking.html', 'utf-8'); // Non-blocking
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error reading file');
        }
    } else if (req.url === '/async') {
        // Async programming example
        const asyncOperation = () => {
            return new Promise((resolve) => {
                setTimeout(() => resolve('Async operation complete!'), 2000);
            });
        };

        try {
            const result = await asyncOperation();
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(result);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error in async operation');
        }
    } else if (req.url === '/button-click') {
        // Simulate async operation for button click
        const simulateButtonClick = () => {
            return new Promise((resolve) => {
                setTimeout(() => resolve('Button click processed!'), 1500);
            });
        };

        try {
            const result = await simulateButtonClick();
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(result);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error processing button click');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

const PORT = 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
