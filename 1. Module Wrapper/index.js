// Wrapper Module

// The module wrapper function in Node.js wraps every module with the following function:
// (function (exports, require, module, __filename, __dirname) { ... })
// This provides a private scope for each module and gives access to useful variables.

// Example of the wrapper function:
(function (exports, require, module, __filename, __dirname) {
    console.log("Wrapper Module Loaded");

    // Demonstrating the arguments provided by the wrapper function
    console.log("Exports:", exports);
    console.log("Require:", require);
    console.log("Module:", module);
    console.log("Filename:", __filename);
    console.log("Dirname:", __dirname);

    // Using exports to expose functionality
    exports.greet = function(name) {
        return `Hello, ${name}!`;
    };

    // Using __filename to get the current file path
    console.log('This file is located at:', __filename);

    // Using __dirname to get the directory path
    console.log('This directory is located at:', __dirname);
})();

// Note: The wrapper function is automatically applied by Node.js to every module, so you don't need to write it explicitly in your code.