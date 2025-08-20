// This file demonstrates the use of nodemon for automatic server restarts

import http from 'http';

const server = http.createServer((req, res) => {
    console.log(`[${new Date().toISOString()}] Request: ${req.method} ${req.url}`);

    res.on('finish', () => {
        console.log(`[${new Date().toISOString()}] Response: ${res.statusCode} for ${req.method} ${req.url}`);
    });

    try {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, Nodemon! This server restarts automatically on changes.');
    } catch (error) {
        console.error(`[${new Date().toISOString()}] Error: ${error.message}`);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
