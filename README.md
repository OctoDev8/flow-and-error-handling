# Table of Contents

1. [File System Operations](#file-system-operations)  
   1.1. [Create a New Directory](#create-a-new-directory)  
   1.2. [Create a New File and Write to It](#create-a-new-file-and-write-to-it)  
   1.3. [Copy a File to a Different Location](#copy-a-file-to-a-different-location)  
   1.4. [Rename the Original File](#rename-the-original-file)  
   1.5. [Delete the Directory and Its Contents](#delete-the-directory-and-its-contents)

2. [Random Notes](#random-notes)  
   2.1. [The `require()` Function in Node.js](#the-require-function-in-nodejs)  
   2.2. [Platform Independent Path Handling with `path.join()`](#platform-independent-path-handling-with-pathjoin)  
   2.3. [The Use of `\n` for Newlines in `console.log()`](#the-use-of-n-for-newlines-in-consolelog)

3. [Documentation](#documentation)  
   3.1. [FS (File System)](https://nodejs.org/en/learn/manipulating-files/nodejs-file-paths)  
   3.2. [Node.js Filesystem - W3Schools](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)  
   3.3. [fs.promises.mkdir](https://nodejs.org/api/fs.html#fspromisesmkdirpath-options)  
   3.4. [path.join()](https://nodejs.org/api/path.html#pathjoinpaths)  
   3.5. [`__dirname`](https://nodejs.org/docs/latest/api/modules.html#__dirname)  
   3.6. [path.dirname()](https://nodejs.org/docs/latest/api/path.html#pathdirnamepath)  
   3.7. [Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

---

## File System Operations

- Create a new directory.
- Create a new file within the directory and write some text to it.
- Copy the file to a different location.
- Rename the original file.
- Delete the directory and its contents.
- Needs async/await functions as fs modules are async
- Focus: Use Node.js fs module methods (e.g., mkdir, writeFile, copyFile, rename, rmdir).

---

## Random Notes

- The `require()` function is a built-in CommonJS module function supported in Node.js that lets you include modules within your project. This is because, by default, Node.js treats JavaScript code as CommonJS modules.

- The `require()` function is straightforward to use and understand, as all you have to do is assign the function to a variable.

- In Node.js, you often use `path.join()` to create file paths for a few key reasons related to cross-platform compatibility and avoiding errors. Here's why it's typically required:

1. **Platform Independent Path Handling**  
   _Mac, Windows, and Linux can use different separators._

2. **Avoiding Double or Missing Separators**

3. **Simplifying Paths**  
   _Sometimes paths would need to be converted into absolute paths, joining removes that pain._

4. **Consistency and Efficiency**  
   _Makes it take less coding and helps to make a consistent structure._

- The `\n` is used in the `console.log()` statements to add a newline character to the output.  
  **Newline character is as follows:**
  > new  
  > line

---

## Documentation

### FS (File System)

- [Node.js FS API](https://nodejs.org/en/learn/manipulating-files/nodejs-file-paths)

- [W3Schools Node.js File System](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)

- [fs.promises.mkdir](https://nodejs.org/api/fs.html#fspromisesmkdirpath-options)

- [path.join()](https://nodejs.org/api/path.html#pathjoinpaths)

- [\_\_dirname in Node.js](https://nodejs.org/docs/latest/api/modules.html#__dirname)

- [path.dirname()](https://nodejs.org/docs/latest/api/path.html#pathdirnamepath)

### Destructuring Assignment

This syntax allows you to extract properties from objects or arrays and assign them to variables in a more concise way.

- [Destructuring Assignment - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
