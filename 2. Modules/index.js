const gr = require("./greet.js");
const {st1,st2,st3} = require ("./student")

console.log(gr.greet("World"));
console.log(gr.greet(st1));
console.log(gr.greet(st2));
console.log(gr.greet(st3));
