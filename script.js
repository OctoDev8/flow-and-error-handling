"use strict";
// Create a new directory.
// Delete the directory and its contents.

// Need this to work with file system
const fs = require("fs");
// Need this to work with path module
const path = require("path");

// Calling functions
makeDirectory();
deleteDirectory();

// Make directory
async function makeDirectory() {
	try {
		const tempFolder = path.join(__dirname, "testing", "folder");
		const createDir = await fs.promises.mkdir(tempFolder, { recursive: true });
		console.log("The folder has been created", tempFolder);
	} catch (error) {
		console.error("You did something wrong!"); // Say that we did something wrong
	}
}

async function deleteDirectory() {
	try {
		const folderName = path.join(__dirname, "testing");

		await fs.rm(folderName, { recursive: true, force: true });
		console.log(`Deleted folder: ${folderName}`);
	} catch (error) {
		console.error("Error during deletion:", error);
	}
}
