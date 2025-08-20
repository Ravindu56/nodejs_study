// This file will serve files using Node.js

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {

    console.log(`[${new Date().toISOString()}] Request: ${req.method} ${req.url}`);

    res.on('finish', () => {
        console.log(`[${new Date().toISOString()}] Response: ${res.statusCode} for ${req.method} ${req.url}`);
    });
    // Set the base directory for serving files
    const baseDir = path.join(__dirname, 'public');

    // Construct the file path
    let filePath = path.join(baseDir, req.url === '/' ? 'index.html' : req.url);

    // Get the file extension
    const extname = path.extname(filePath);

    // Set the content type based on the file extension
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Ensure the file path resolves to an existing file
    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            // File not found or not a file
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>', 'utf-8');
            return;
        }

        // Read and serve the file
        fs.readFile(filePath, (err, content) => {
            if (err) {
                // Server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            } else {
                // Serve the file
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    });
});

const PORT = 5000;
server.listen(
    PORT, 
    () => console.log(`Server running on port ${PORT}`));
