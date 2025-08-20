import * as fs from 'fs/promises';

// Create file directory
// try {
//     await fs.mkdir("E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\1. Promise API\\files", { recursive: true });
//     console.log("Directory created successfully");
// } catch (error) {
//     console.error("Error creating directory:", error);
// }

// Read files from directory
// let files;
// try {
//     files =  await fs.readdir("E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\1. Promise API\\files");
//     console.log("Files in directory:", files);
//     for(const file of files) {
//         console.log("File:", file);
//     }
// } catch (error) {
//     console.error("Error reading directory:", error);
// }

// Remove files from directory
// try {
//     // For remove folder it has to be empty
//     await fs.rmdir("E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\1. Promise API\\files\\course");
// } catch (error) {
//     console.error("Error removing files:", error);
// }

// Create a new file and write content to it using the Promise API
// try {
//     const filePath = "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\1. Promise API\\files\\example.txt";
//     const content = "This is an example file created using the Promise API.";

//     await fs.writeFile(filePath, content);
//     console.log("File created successfully at:", filePath);
// } catch (error) {
//     console.error("Error creating file:", error);
// }

// Read the content of a file using the Promise API
// try {
//     const filePath = "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\1. Promise API\\files\\example.txt";

//     const data = await fs.readFile(filePath, "utf-8");
//     // Always we need to specify the encoding
//     console.log("File content:", data);
// } catch (error) {
//     console.error("Error reading file:", error);
// }

// Append the contents for the file 
// try {
//     const filePath = "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\1. Promise API\\files\\example.txt";
//     const content = "\nThis is the appended content.";
//     await fs.appendFile(filePath, content);
//     console.log("File appended successfully at:", filePath);
// } catch (error) {
//     console.error("Error appending file:", error);
// }

// Copy file
try {
    const sourceFilePath = "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\1. Promise API\\files\\example.txt";
    const destFilePath = "E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\1. Promise API\\files\\example_copy.txt";
    await fs.copyFile(sourceFilePath, destFilePath);
    console.log("File copied successfully from", sourceFilePath, "to", destFilePath);
} catch (error) {
    console.error("Error copying file:", error);
}

// Get file info
try {
    const file = await fs.stat("E:\\Projects\\JS\\MERN\\NodeJS\\5. FS Module\\1. Promise API\\files\\example_copy.txt");
    console.log("File info:", file);
    console.log("File size:", file.size);
    console.log("File created at:", file.birthtime);
    console.log("File modified at:", file.mtime);
    console.log("Is directory:", file.isDirectory());
    console.log("Is file:", file.isFile());
    console.log("Is symbolic link:", file.isSymbolicLink());
} catch (error) {
    console.error("Error getting file info:", error);
    
}