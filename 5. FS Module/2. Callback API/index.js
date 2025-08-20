import * as fs from "fs";

// Create a new file and write content to it using the Callback API
fs.writeFile(
    "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\2. Callback API\\files\\example.txt",
    "This is an example file created using the Callback API.",
    (err) => {
        if (err) {
            console.error("Error creating file:", err);
        } else {
            console.log("File created successfully.");
        }
    }
);

// Read the content of a file using the Callback API
fs.readFile(
    "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\2. Callback API\\files\\example.txt",
    "utf-8",
    (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
        } else {
            console.log("File content:", data);
        }
    }
);

// Append content to a file using the Callback API
fs.appendFile(
    "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\2. Callback API\\files\\example.txt",
    "\nThis is the appended content.",
    (err) => {
        if (err) {
            console.error("Error appending file:", err);
        } else {
            console.log("File appended successfully.");
        }
    }
);

// Read the source file to verify its content before copying
fs.readFile(
    "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\2. Callback API\\files\\example.txt",
    "utf-8",
    (err, data) => {
        if (err) {
            console.error("Error reading source file:", err);
        } else {
            console.log("Source file content:", data);

            // Proceed to copy the file
            fs.copyFile(
                "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\2. Callback API\\files\\example.txt",
                "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\2. Callback API\\files\\example_copy.txt",
                (err) => {
                    if (err) {
                        console.error("Error copying file:", err);
                    } else {
                        console.log("File copied successfully.");

                        // Verify the content of the copied file
                        fs.readFile(
                            "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\2. Callback API\\files\\example_copy.txt",
                            "utf-8",
                            (err, copiedData) => {
                                if (err) {
                                    console.error("Error reading copied file:", err);
                                } else {
                                    console.log("Copied file content:", copiedData);
                                }
                            }
                        );
                    }
                }
            );
        }
    }
);

// Get file info using the Callback API
fs.stat(
    "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\2. Callback API\\files\\example_copy.txt",
    (err, stats) => {
        if (err) {
            console.error("Error getting file info:", err);
        } else {
            console.log("File info:", stats);
            console.log("File size:", stats.size);
            console.log("File created at:", stats.birthtime);
            console.log("File modified at:", stats.mtime);
            console.log("Is directory:", stats.isDirectory());
            console.log("Is file:", stats.isFile());
            console.log("Is symbolic link:", stats.isSymbolicLink());
        }
    }
);

// Create a directory using the Callback API
fs.mkdir("E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\2. Callback API\\files", { recursive: true }, (error) => {
    if (error) {
        console.error("Error creating directory:", error);
    } else {
        console.log("Directory created successfully");
    }
});