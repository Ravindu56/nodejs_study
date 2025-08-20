// Importing the 'path' module from Node.js
import { log } from "console";
import path from "path";

// Get the last portion of a path (e.g., file name)
console.log("Basename:", path.basename("/foo/bar/baz/asdf/quux.html"));

// Get the directory name of a path
console.log("Dirname:", path.dirname("/foo/bar/baz/asdf/quux.html"));

// Get the file extension of a path
console.log("Extension:", path.extname("/foo/bar/baz/asdf/quux.html"));

// Join multiple path segments into a single path
console.log("Joined Path:", path.join("/foo", "bar", "baz/asdf", "quux.html"));

// Resolve a path by normalizing and removing unnecessary segments
console.log("Resolved Path:", path.join("/foo", "bar", "baz/asdf", "quux.html", "..", ".."));

console.log("Normalized Path:", path.normalize("/foo/bar///baz/asdf/../quux.html"));

console.log("Is Absolute Path:", path.isAbsolute("/foo/bar/baz/asdf/quux.html"));

console.log("Relative Path:", path.relative("/foo/bar/baz", "/foo/bar/baz/asdf/quux.html"));

console.log("Parsed Path:", path.parse("/foo/bar/baz/asdf/quux.html"));
console.log("Parsed Path:", path.parse("/foo/bar/baz/asdf/quux.html").base);
console.log("Parsed Path:", path.parse("/foo/bar/baz/asdf/quux.html").dir);
console.log("Parsed Path:", path.parse("/foo/bar/baz/asdf/quux.html").ext);
