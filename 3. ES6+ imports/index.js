import greet from "./greet.js";
import { st1, st2, st3 } from "./student.js";

console.log(greet("Alice"));
// This will output: Hello, Alice!

// We can not use '__filename' or '__dirname' in ES6 modules when npm init

console.log(greet(st1));
console.log(greet(st2));
console.log(greet(st3));
