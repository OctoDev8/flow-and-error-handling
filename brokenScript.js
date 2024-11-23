"use strict";
// Create a new directory.
// Create a new file within the directory and write some text to it.
// Copy the file to a different location.
// Rename the original file.
// Delete the directory and its contents.
// Needs async/await functions as fs modules are async

// Syntax:
// fs.mkdir() method
// fs.writeFile() and fs.writeFileSync() to write data to file
// fs.copyFile() copies files from one path to another
// fs.rename()
// fs.rmdir

// Taking arguments to use commands in terminal
const argv = require("process");
// Need this to work with file system
const fs = require("fs");
// Need this to work with path module
const path = require("path");

// Make directory
// async function makeDirectory() {
// 	try {
// 		const tempFolder = path.join(__dirname, "testing", "folder");
// 		const createDir = await fileSystem.promises.mkdir(tempFolder, { recursive: true });
// 		console.log("The folder has been created", tempFolder);
// 	} catch (error) {
// 		console.error("You did something wrong!"); // Say that we did something wrong
// 	}
// }

// makeDirectory();

// console.log(await fs.mkdir(tempFolder, { recursive: true })); Checking if code actually returned anything
// Extra context: didn't use fs variable correctly

async function deleteDirectory() {
	try {
		const folderName = path.join(__dirname, "testing");

		await fs.rm(folderName, { recursive: true, force: true });
		console.log(`Deleted folder: ${folderName}`);
	} catch (error) {
		console.error("Error during deletion:", error);
	}
}

async function getCurrentFileNames() {
	const fileNames = await fs.readdir(__dirname);
	console.log(fileNames);

	try {
		const fileDataArray = fileNames.map((File) => {
			return File;
		});

		console.log(fileDataArray);
	} catch (error) {
		console.error("Error:", error);
	}
}

deleteDirectory();
