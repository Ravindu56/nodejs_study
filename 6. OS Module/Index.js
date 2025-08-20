/**
 * Demonstrates usage of Node.js 'os' module to retrieve system information.
 *
 * @module OSInfo
 *
 * @description
 * This script imports the built-in 'os' module and showcases various methods to access
 * operating system-level details such as platform, architecture, CPU information, memory stats,
 * hostname, network interfaces, OS release, temporary directory, OS type, uptime, and user info.
 *
 * @example
 * // To get the operating system type:
 * console.log(os.type()); // Output: e.g., 'Windows_NT'
 *
 * @see {@link https://nodejs.org/api/os.html|Node.js OS Module Documentation}
 *
 * @remarks
 * - Most methods return information specific to the host machine.
 * - Some methods, like `os.cpus()` and `os.networkInterfaces()`, return objects or arrays with detailed data.
 * - Memory-related methods (`os.freemem()`, `os.totalmem()`) return values in bytes.
 * - The script is useful for diagnostics, logging, or adapting behavior based on the environment.
 */
import os from 'os';

// console.log(os.platform()); // Output: e.g., 'win32'
// console.log(os.arch()); // Output: e.g., 'x64'
// console.log(os.cpus()); // Output: Array of CPU info objects
// console.log(os.freemem()); // Output: Free memory in bytes, e.g., 123456789
// console.log(os.totalmem()); // Output: Total memory in bytes, e.g., 8589934592
// console.log(os.hostname()); // Output: e.g., 'DESKTOP-XXXXXXX'
// console.log(os.networkInterfaces()); // Output: Object with network interfaces info
// console.log(os.release()); // Output: e.g., '10.0.19045'
// console.log(os.tmpdir()); // Output: e.g., 'C:\\Users\\Username\\AppData\\Local\\Temp'
// console.log(os.type()); // Output: e.g., 'Windows_NT'
console.log(os.uptime()); // Output: System uptime in seconds, e.g., 123456
console.log(os.userInfo()); // Output: Object with user info
console.log(os.homedir()); // Output: Home directory path, e.g., 'C:\\Users\\Username'
console.log(os.availableParallelism());// Output: Number of available parallel operations, e.g., 8
console.log(os.machine()); // Output: Machine architecture, e.g., 'x64'
