// Import the HTTP module
import http from 'http';

// Create an HTTP server
const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);

    // Define routes
    const routes = {
        '/': 'Welcome to the Home Page!',
        '/about': 'This is the About Page.',
        '/contact': 'This is the Contact Page.',
    };

    // Check if the route exists
    if (routes[req.url]) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(routes[req.url]);
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
