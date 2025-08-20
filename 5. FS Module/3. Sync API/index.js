import * as fs from 'fs';
// Create file using Sync API
fs.mkdirSync("E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\3. Sync API\\files", 
    { recursive: true }
);

// Write file using sync API
fs.writeFileSync(
    "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\3. Sync API\\files\\example.txt", 
    "This is an example file created using the Sync API."
);

// Copy FFile
fs.copyFileSync(
    "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\3. Sync API\\files\\example.txt",
    "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\3. Sync API\\files\\example_copy.txt"
);

// Read file using Sync API
const data = fs.readFileSync(
    "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\3. Sync API\\files\\example.txt",
    "utf-8"
);
console.log("File content:", data);

// Append content to a file using Sync API
fs.appendFileSync(
    "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\3. Sync API\\files\\example.txt",
    "\nThis is the appended content."
);
console.log("Content appended successfully.");

// Get file stats using Sync API
const stats = fs.statSync(
    "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\3. Sync API\\files\\example.txt"
);
console.log("File stats:", stats);
console.log("File size:", stats.size);
console.log("File created at:", stats.birthtime);
console.log("File modified at:", stats.mtime);
console.log("Is directory:", stats.isDirectory());
console.log("Is file:", stats.isFile());

// Remove directory using Sync API
fs.rmdirSync(
    "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\3. Sync API\\files", 
    { recursive: true }
);



