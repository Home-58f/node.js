// file-operations.js

// Import the built-in 'fs' (file system) module.
// This module provides methods for interacting with the file system.
const fs = require('fs');

// --- Part 1: Create a file named "welcome.txt" ---
const filenameToWrite = 'welcome.txt';
const contentToWrite = 'Hello Node';

// fs.writeFile() is used to asynchronously write data to a file.
// If the file already exists, its content will be overwritten.
// If the file does not exist, it will be created.
// The callback function handles any errors during the write operation.
fs.writeFile(filenameToWrite, contentToWrite, (err) => {
  if (err) {
    // If an error occurs during writing, log the error.
    console.error(`Error writing to file ${filenameToWrite}:`, err);
    return; // Stop further execution in case of error
  }
  console.log(`Successfully created and wrote to ${filenameToWrite}`);

  // --- Part 2: Read and console.log data from "welcome.txt" ---
  // (Assuming "hello.txt" in the instruction was a typo and meant "welcome.txt")
  const filenameToRead = 'welcome.txt'; // Using welcome.txt as per instruction logic

  // fs.readFile() is used to asynchronously read the entire content of a file.
  // It takes the file path and a callback function.
  // The callback receives an error object (if any) and the data (as a Buffer).
  fs.readFile(filenameToRead, 'utf8', (readErr, data) => {
    if (readErr) {
      // If an error occurs during reading, log the error.
      console.error(`Error reading from file ${filenameToRead}:`, readErr);
      return;
    }
    // Log the read data to the console.
    console.log(`Content of ${filenameToRead}:`);
    console.log(data); // 'data' will be the content "Hello Node"
  });
});