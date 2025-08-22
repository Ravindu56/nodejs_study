# Node BTS Module

This module demonstrates the following concepts in Node.js:

1. **Blocking vs Non-Blocking**:
   - `/blocking`: Demonstrates blocking file operations using `fs.readFileSync`.
   - `/non-blocking`: Demonstrates non-blocking file operations using `fs.promises.readFile`.

2. **Routing**:
   - `/`: Home route.
   - `/blocking`: Blocking file operation route.
   - `/non-blocking`: Non-blocking file operation route.
   - `/async`: Demonstrates async programming with `setTimeout` and Promises.

3. **Async Programming**:
   - `/async`: Simulates an asynchronous operation with a delay.

## How to Use

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Access the routes in your browser or API client (e.g., Postman):
   - `http://localhost:4000/`
   - `http://localhost:4000/blocking`
   - `http://localhost:4000/non-blocking`
   - `http://localhost:4000/async`

## Notes

- The `largeFile.txt` file is used to demonstrate blocking and non-blocking file operations.
- Ensure `nodemon` is installed as a dev dependency for automatic server restarts during development.
