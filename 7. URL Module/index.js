// Import the URL module
import { URL } from 'url';

// Example: Parsing a URL
const myUrl = new URL('https://example.com:8000/path/name?query=123#hash');

// Log various components of the URL
console.log('Href:', myUrl.href);
console.log('Protocol:', myUrl.protocol);
console.log('Host:', myUrl.host);
console.log('Hostname:', myUrl.hostname);
console.log('Port:', myUrl.port);
console.log('Pathname:', myUrl.pathname);
console.log('Search:', myUrl.search);
console.log('Search Params:', myUrl.searchParams);
console.log('Hash:', myUrl.hash);

// Example: Modifying a URL
myUrl.pathname = '/new/path';
myUrl.searchParams.append('newQuery', '456');
console.log('Updated URL:', myUrl.href);

// Demonstrating URLSearchParams
const params = new URLSearchParams('query=123&name=JohnDoe');

// Get a specific parameter
console.log('Query Parameter:', params.get('query'));
console.log('Name Parameter:', params.get('name'));

// Check if a parameter exists
console.log('Has query parameter:', params.has('query'));
console.log('Has age parameter:', params.has('age'));

// Append a new parameter
params.append('age', '30');
console.log('Updated Parameters:', params.toString());

// Delete a parameter
params.delete('name');
console.log('Parameters after deletion:', params.toString());

// Iterate over all parameters
for (const [key, value] of params) {
    console.log(`${key}: ${value}`);
}
