// This file demonstrates the use of the EventEmitter in Node.js

import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();

// Register an event listener for 'greet'
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Register an event listener for 'farewell'
eventEmitter.on('farewell', (name) => {
    console.log(`Goodbye, ${name}!`);
});

eventEmitter.once('greet once', (name) => {
    console.log(`Hello (once), ${name}!`);
});

// Emit the 'greet' event
eventEmitter.emit('greet', 'Alice');

// Emit the 'farewell' event
eventEmitter.emit('farewell', 'Bob');

eventEmitter.emit('greet once', 'Alice');

eventEmitter.emit('greet once', 'John');
