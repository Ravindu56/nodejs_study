// Import the HTTP module
import http from 'http';

// Create an HTTP server
const server = http.createServer((req, res) => {

    console.log(`Request received: ${req.method} ${req.url}`);
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Handle different HTTP methods
    if (req.method === 'GET' && req.url === '/') {
        res.end('Welcome to the Home Page!');
    } else if (req.method === 'GET' && req.url === '/about') {
        res.end('This is the About Page.');
    } else if (req.method === 'POST' && req.url === '/data') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.end(`Data received: ${body}`);
        });
    } else if (req.method === 'PUT' && req.url === '/update') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.end(`Data updated: ${body}`);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
